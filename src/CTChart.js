import './CTChart.css';
import React, { useState, useEffect } from 'react';
import Charts from "react-apexcharts";

function CTChart(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [series, setSeries] = useState([0]);
    const [options, setOptions] = useState({});

    useEffect(() => {
        fetch(props.address)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(props);
                    setSeries(result.series);
                    setOptions( { chart: { width: '100%', height: 350, type: 'radialBar', },
                                  plotOptions: { radialBar: { offsetY: 0, startAngle: 0, endAngle: 270, 
                                                     hollow: { margin: 5, size: '30%', background: 'transparent', image: undefined, },
                                                     dataLabels: { name: { show: false, }, value: { show: false, } }
                                                }
                                  },
                                  colors: result.colors,
                                  labels: result.labels,
                                  legend: { show: true, floating: true, fontSize: '14px', position: 'left', offsetX: 0, offsetY: 15,
                                            labels: { useSeriesColors: true, }, 
                                            markers: { size: 0 },
                                            formatter: function(seriesName, opts) { return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] },
                                                       itemMargin: { vertical: 3 }
                                  },
                                } );
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    },[props])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <div className="row">
                   <Charts options={options} series={series} type='radialBar' height='350'/>
               </div>
    } 
}

export default CTChart;

