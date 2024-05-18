import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import RedirectButton from "../components/RedirectButton";

interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  stock_quantity: number;
}

const Products: React.FC = () => {
  const [originalArray, setOriginalArray] = useState<Product[]>([]);
  const [array, setArray] = useState<Product[]>([]);

  function handleFilter(event: any) {
    const newData = originalArray.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setArray(newData);
  }

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
      setOriginalArray(response.data);
      setArray(response.data); // Initialize the filtered list with the full list
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row: { name: string }) => row.name,
      sortable: true,
    },
    {
      name: "Cost",
      selector: (row: { cost: number }) => row.cost,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: { price: number }) => row.price,
      sortable: true,
    },
    {
      name: "Stock Quantity",
      selector: (row: { stock_quantity: number }) => row.stock_quantity,
      sortable: true,
    }
  ];

  return (
    <section>
      <RedirectButton to="add-product">Add Product</RedirectButton>

      <div className="container">
        <div className="text-end">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Filter by name"
          />
          <button onClick={() => setArray(originalArray)}>Reset Filter</button>
        </div>
        <DataTable
          title="Products"
          columns={columns}
          data={array}
          selectableRows
          pagination
        />
      </div>
    </section>
  );
};

export default Products;
