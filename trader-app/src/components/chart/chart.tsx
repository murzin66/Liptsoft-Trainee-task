import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { TooltipItem } from 'chart.js';
import { JSX } from 'react';

ChartJS.register(...registerables);

interface StockData {
  open_time: number;
  close_time: number;
  value: number;
}

interface Props {
  stockData: StockData[];
}

const Chart = ({ stockData }: Props): JSX.Element => {
  const data = {
    datasets: [
      {
        label: 'Цена акции',
        data: stockData.map((item) => ({
          x: new Date(item.open_time),
          y: item.value,
        })),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'day' as const,
          tooltipFormat: 'dd MMM yyyy HH:mm',
        },
        title: {
          display: true,
          text: 'Время',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Цена ($)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (context: TooltipItem<'line'>[]) => {
            const date = new Date(context[0].parsed.x);
            return date.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className = "priceChart">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;