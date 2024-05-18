import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import storeItems from "../store/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import axios from "axios";
import { useState, useEffect } from "react";


type CartItemProps = {
  id: number;
  quantity: number;
};
interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  stock_quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const [array, setArray] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get<Product[]>(
        "http://127.0.0.1:8000/products", {
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

  const item = array.find((i) => i.id === id);
  if (item == null) return null;


  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img_url}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt="image"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
