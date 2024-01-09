import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import apiClient from '../services/api-client';
import { Beneficiary } from '../services/beneficiary-service';


interface RadialBarChartProps {
  station?: string
}

const BeneficiariesChart: React.FC<RadialBarChartProps> = ({ station }) => {
 
    
const [beneficiariesData, setBeneficiariesData] = useState<Beneficiary>()
const fetchData = async () => {
        try {
          const response = await apiClient.get('/beneficiary', {
            params:{
                stationName: station
            }
          });
          setBeneficiariesData(response.data);
    
        } catch (error) {
          console.error(error);
        }
      };
        useEffect(() => {
            fetchData()
        }, [])
 
    const men = beneficiariesData?.men || 0;
    const women = beneficiariesData?.women || 0;
    const children = beneficiariesData?.children || 0;
  const series = [men, women, children];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'radialBar',
      height: 350,
      background: 'white',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '13px',
          },
          value: {
            color: '#111',
            fontSize: '30px',
            show: true,
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0).toString();
            },
          }
        },
      },

    },
    labels: ['Men', 'Women', 'Children',],
    title: {
        text: 'Beneficiaries Breakdown',
        align: 'center',
        style: {
          fontSize: '16px',
        },
      },
      legend: {
        show: true,
        floating: true,
        position: 'bottom',
      },
  };

  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <ReactApexChart options={chartOptions} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default BeneficiariesChart;
