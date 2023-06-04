import ChartBar from './ChartBar';
import './Chart.css';
function Chart(props) {
    
      const value = props.dataPoints.map(dataPoint => dataPoint.value);
      const max = Math.max(...value);
      return (
            <div className='chart'>
                  {
                        props.dataPoints.map(dataPoint=> {
                              return <ChartBar value={dataPoint.value} label={dataPoint.label} key={dataPoint.label} maxValue={max} />;
                        })
                  }
            </div>
      );
}

export default Chart;