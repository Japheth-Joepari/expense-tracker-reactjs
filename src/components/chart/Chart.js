import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart({dataPoints}) {
    const dataPointsValues = dataPoints.map(dataPoint =>
        dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)          
    console.log(totalMaximum);
    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => {
               return (<ChartBar 
                    value={dataPoint.value}
                    key={dataPoint.label} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}
                />)
            })}
        </div>
    )

}