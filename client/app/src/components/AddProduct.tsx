import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('electronics'); // Default category

  const handleProductSubmit = (e:any) => {
    e.preventDefault();
    // You can handle form submission here, like sending data to backend or performing other actions
    // For demonstration purposes, let's just log the form data
    console.log({
      productName,
      productDescription,
      productPrice,
      productCategory
    });
    // You can also reset the form fields here
    // setProductName('');
    // setProductDescription('');
    // setProductPrice('');
    // setProductCategory('electronics');
  };

  return (
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
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            className="form-control"
            id="productDescription"
            // rows="3"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product Category</label>
          <select
            className="form-control"
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
