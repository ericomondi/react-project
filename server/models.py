from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
app.secret_key = "secretkey"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:2345@localhost/react-app"
app.config["SQLALCHEMY_TRACK_CONFIGURATION"] = False
db = SQLAlchemy(app)


class Products(db.Model):
    __tablename__ = "products"
    product_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    cost = db.Column(db.Float, nullable=False)
    # uom_id = db.Column(db.Integer, db.ForeignKey("uom.uom_id"))
    price = db.Column(db.Numeric(precision=14, scale=2))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    order_details = db.relationship("OrderDetails", back_populates="product")


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"<User(name='{self.name}', email='{self.email}', password='{self.password}')>"


class Orders(db.Model):
    __tablename__ = "orders"
    order_id = db.Column(db.Integer, primary_key=True)
    # customer_name = db.Column(db.String(100))
    total = db.Column(db.Numeric(scale=2))
    datetime = db.Column(db.DateTime, default=db.func.current_timestamp())
    order_details = db.relationship("OrderDetails", back_populates="order")


class OrderDetails(db.Model):
    __tablename__ = "order_details"
    order_detail_id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.order_id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.product_id"))
    quantity = db.Column(db.Numeric(precision=15, scale=2))
    total_price = db.Column(db.Numeric(precision=15, scale=2))
    product = db.relationship("Products", back_populates="order_details")
    order = db.relationship("Orders", back_populates="order_details")
