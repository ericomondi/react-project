// utils/Data.ts
export interface ChartData {
    labels: string[];
    datasets: {
       label: string;
       data: number[];
       backgroundColor: string;
       borderColor: string;
       borderWidth: number;
    }[];
   }
   
   export const data: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
       {
         label: 'Sales',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: 'rgba(255, 99, 132, 0.2)',
         borderColor: 'rgba(255, 99, 132, 1)',
         borderWidth: 1,
       },
    ],
   };
   