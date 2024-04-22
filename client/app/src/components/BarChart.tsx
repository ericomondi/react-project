import React, { useState, useEffect } from "react";
import axios from "axios";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface ProductData {
  name: string;
  price: number;
}

interface ChartData {
  labels: string[];
  values: number[];
}

const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    values: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const apiUrl = "http://127.0.0.1:5000/dashboard";
        const accessToken = localStorage.getItem("token");
        if (!accessToken) {
          throw new Error("Access token not found");
        }

        const response = await axios.get<{
          recent_products: ProductData[];
        }>(apiUrl, {
          headers: {
            Authorization: ` ${accessToken}`,
          },
        });

        const { recent_products } = response.data;

        const productsLabels = recent_products.map((item) => item.name);
        const productPrices = recent_products.map((item) => item.price);

        setChartData({
          labels: productsLabels,
          values: productPrices,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Bar
      data={{
        labels: chartData.labels,
        datasets: [
          {
            label: "Recent Products",
            data: chartData.values,
            backgroundColor: ["green","red", "blue"],
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            
          },
        ],
      }}
    />
  );
};

export default BarChart;
