import React, { useState, useEffect } from "react";
import axios from "axios";
import "chart.js/auto";
import { Line} from "react-chartjs-2";

interface DashboardData {
  date: string;
  total_sales: number;
}

interface ProductData {
  name: string;
  sales_product: number;
}

interface ChartData {
  labels: string[];
  values: number[];
}

const LineChart: React.FC = () => {
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
          sales_data: DashboardData[];
          salesproduct_data: ProductData[];
        }>(apiUrl, {
          headers: {
            Authorization: ` ${accessToken}`,
          },
        });

        const { salesproduct_data } = response.data;

        const salesLabels = salesproduct_data.map((item) => item.name);
        const salesValues = salesproduct_data.map((item) => item.sales_product);

        setChartData({
          labels: salesLabels,
          values: salesValues,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Line
      data={{
        labels: chartData.labels,
        datasets: [
          {
            label: "Total Sales per Day",
            data: chartData.values,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      }}
    />
  );
};

export default LineChart;
