import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';

import axiosClient from '../../axios-client';


export const AdminHomeLoader = async () => {
    try {
      const { data } = await axiosClient.get('admin/doughnut')
      return data;
    } catch (error) {
      return error;
    };
}


ChartJS.register(ArcElement, Tooltip, Legend);


export default function Home (){

    const doughnut = useLoaderData()

    const data = {
        labels: Object.keys(doughnut),
        datasets: [
          {
            label: 'Total of ',
            data: Object.values(doughnut),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
    <div className='max-w-lg'>
      <Doughnut data={data} height={400} />;
    </div>
    )
}
