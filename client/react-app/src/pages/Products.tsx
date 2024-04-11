import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckLoginStatus from "../store/RouteAuth";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products: React.FC = () => {
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
    <section>
      <CheckLoginStatus />
      <div className="container">
        <h2>Products Table</h2>
        <table id="myTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {array.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Products;
