'use client'

import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        labels: [
            'Bank 1',
            'Bank 2',
            'Bank 3'
          ],
        datasets:[
            {
                label:'Banks',
                data:[1250,2500,3740],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ]
    }
  return <Doughnut data={data}/>
}

export default DoughnutChart
