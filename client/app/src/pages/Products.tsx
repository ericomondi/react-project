import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products: React.FC = () => {
  const [array, setArray] = useState<Product[]>([]);
  

  function handleFilter(event: any) {
    const newData = array.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setArray(newData);
  }

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
  ];

  return (
    <section>
      <div className="container">
        <div className="text-end">
          <input type="text" onChange={handleFilter} />
        </div>
        <DataTable
          title="Products"
          columns={columns}
          data={array}
          selectableRows
          pagination
        >
          {" "}
        </DataTable>
      </div>
    </section>
  );
};

export default Products;
