import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormType {
  name: string;
  cost: number;
  price: number;
}

interface ResponseMes {
  message: string;
}

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>(""); // Specify type for name
  const [cost, setCost] = useState<number>(); // Specify type for cost
  const [price, setPrice] = useState<number>(); // Specify type for price

  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formContent: FormType = {
      name: name,
      cost: cost,
      price: price,
    };
    try {
      const apiUrl = "http://127.0.0.1:5000/products";
      const response = await axios.post<ResponseMes>(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Product added successfully!");
      console.log("Done.", response.data);
    } catch (error) {
      toast.error("An error occurred while adding the product.");
      console.error(error);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Add Product</h2>
        <form onSubmit={handleProductSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productCost">Product Cost</label>
            <input
              type="number"
              className="form-control"
              id="productCost"
              placeholder="Enter product cost"
              value={cost}
              onChange={(e) => setCost(e.target.valueAsNumber)} // Use valueAsNumber for number inputs
            />
          </div>

          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)} // Use valueAsNumber for number inputs
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
