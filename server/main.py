from datetime import timedelta
from flask import jsonify
# import sentry_sdk
from flask import jsonify, request
# from sentry_sdk import capture_exception
from models import Products, app, db, Orders, OrderDetails, User
from flask_cors import CORS
import jwt
from flask_jwt_extended import unset_jwt_cookies, jwt_required
from sqlalchemy import func,desc
from functools import wraps
import datetime
from sqlalchemy.exc import IntegrityError



CORS(app)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(
                token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = data['username']
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired!'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route("/products", methods=["POST", "GET"])
# @token_required
def prods():
    if request.method == "GET":
        try:
            prods = Products.query.all()
            p_dict = []
            for prod in prods:
                p_dict.append(
                    {"id": prod.product_id, "name": prod.name,"cost": prod.cost, "price": prod.price})
            return jsonify(p_dict)
        except Exception as e:
            print(e)
            return jsonify({})

    elif request.method == "POST":
        if request.is_json:
            try:
                data = request.json
                new_product = Products(
                    name=data['name'], cost=data['cost'], price=data['price'])
                db.session.add(new_product)
                db.session.commit()
                r = "Product added successfully. ID: " + str(new_product.product_id)
                res = {"result": r}
                return jsonify(res), 201
            except IntegrityError as e:
                db.session.rollback()
                print(f"IntegrityError: {e.orig}")
                r = f"IntegrityError: {e.orig}"
                return jsonify({"error": r}), 400
            except Exception as e:
                db.session.rollback()
                print(e)
                return jsonify({"error": "Internal Server Error"}), 500
        else:
            return jsonify({"error": "Data is not JSON."}), 400



@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data['email']

    # Check if the username does not exist
    if not User.query.filter_by(email=email).first():
        new_user = User(username=data['fullname'], email=data['email'], password=data['password'])
        db.session.add(new_user)
        db.session.commit()
        r = f"successfully stored userid: {str(new_user.id)}"
        res = {"result": r}
        return jsonify(res), 201
    else:
        return jsonify({'error': f'email {data['email']} already exists'}), 400


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    password = data['password']
    email = data['email']

    # Query the database for the user
    user = User.query.filter_by(email=email, password=password).first()

    if user:

        token = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow()
                            + datetime.timedelta(minutes=10)}, app.config['SECRET_KEY'])
        return jsonify({'access_token': token}), 200
    else:
        return jsonify({'error': 'User does not exist'}), 404


@app.route('/create_order', methods=['POST'])
def create_order():
    # Step 1: Parse the JSON object
    order_items = request.json
    list_of_items = order_items["cartItems"]

    print("list_of_items......", list_of_items)

    # Step 2: Create an Order
    new_order = Orders()
    db.session.add(new_order)
    db.session.commit() # Commit to get the order_id

    total_cost = 0

    # Step 3: Create Order Details and Calculate Total
    for item in list_of_items:
        print("Item----", item)
        product = Products.query.get(item['id'])
        if product:
            order_detail = OrderDetails(
                order_id=new_order.order_id,
                product_id=product.product_id,
                quantity=item['quantity'],
                total_price=product.price * item['quantity']
            )
            total_cost += order_detail.total_price
            db.session.add(order_detail)

    # Step 4: Update Order Total
    new_order.total = total_cost

    # Step 5: Commit Changes
    db.session.commit()

    return jsonify({"message": "Order created successfully", "order_id": new_order.order_id}), 201

 








if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
