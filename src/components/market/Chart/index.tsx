import http from "@/utils/http";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ data }: { data: Record<string, number> }) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Inflation",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        width: 1000,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toLocaleString() + "원";
        },
        offsetY: -30,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val.toLocaleString() + "원";
          },
        },
      },
      title: {
        // text: "2023년 월별",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  useEffect(() => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      series: [
        {
          name: "Inflation",
          data: data
            ? Object.entries(data).map(([month, value]) => value)
            : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    }));
  }, [data]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={300}
        width={1080}
      />
    </div>
  );
};

export default ApexChart;
