import { Offcanvas, Stack } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ShoppingCartProps = {
  isOpen: boolean;
};

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  id : number;
  quantity : number;
}

interface CartItems {
  cartItems: CartItem[];
}


export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, clearCart } = useShoppingCart();
  const [array, setArray] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get<Product[]>(
        "http://127.0.0.1:8000/products",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setArray(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const clearCartAndSubmit = async () => {
    // Submit cart to the database
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("http://127.0.0.1:8000/create_order", {
        cartItems,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      localStorage.removeItem("shopping-cart");
      clearCart();
      closeCart();
      console.log("Cart submitted successfully:", response.data);
      toast.success("Order inserted successfully");
    } catch (error) {
      toast.error("An error occured");
      console.error("Error submitting cart:", error);
    }
  };
  

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = array.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <button className="btn btn-primary" onClick={clearCartAndSubmit}>
            Check Out
          </button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
