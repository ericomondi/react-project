import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../store/items.json"
import React, { useEffect, useState } from "react"
import axios from "axios"


interface Product {
  id: number;
  name: string;
  price: number;
}

export function Store() {
  const [array, setArray] = useState<Product[]>([]);

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://127.0.0.1:5000/products"
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

  return (
    <>
      <h1>Store</h1>
      <Row md={3} xs={2} lg={5} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
