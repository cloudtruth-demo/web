import React, { useState } from 'react';
import './styles.css';
import Svc from './Svc';
import CTChart from './CTChart';
import ctlogo from './cloudtruth-logo.png';
import params from './app-params.jpg';
import useInterval from 'use-interval';
 
function App() {
    const [count, setCount] = useState(0);
    useInterval(() => { setCount(count + 1); }, process.env.REACT_APP_POLLING_INTERVAL);

    return (
             <div className="top-level">
                 <div className="header-block">
                     <div className="ct-logo-block">
                         <h6>A reference architecture for the</h6>
                         <a href="https://cloudtruth.com"><img src={ctlogo} alt="cloudtruth"/></a>
                         <h6>Configuration Intelligence service</h6>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="app-block-top">
                         <div className="app-text" id="webapp">
                             <h2>Dynamic configuration of a web application</h2>
                             <h4>The following chart is configured via JSON fetched directly by the web application
                                 from a CloudTruth configuration template</h4>
                             <ul>
                                 <li>This demonstrates the use of a CloudTruth template as a dynamic source of configuration
                                     for a web application at runtime.</li>
                                 <li>Changes to the template or the parameters it references will be picked up immediately
                                     and shown below.</li>
                             </ul>
                         </div>
                     </div>
                     <div className="app-block-middle">
                         <div className="app-chart">
                             <CTChart address={"https://api.cloudtruth.com/t/" + process.env.REACT_APP_CONFIG_TID +
                                              "/" + process.env.REACT_APP_ENV} count={count}/>
                         </div>
                     </div>
                     <div className="app-info-bottom">
                         <ul>
                             <li>The CloudTruth parameter management screen is shown on the bottom left.</li>
                             <li>The CloudTruth template results in JSON format are shown on the botton right.</li>
                         </ul>
                     </div>
                     <div className="app-block-bottom">
                         <div className="app-params">
                             <img src={params} alt="params"/>
                         </div>
                         <div className="SVC-block">
                             <Svc address={"https://api.cloudtruth.com/t/" + process.env.REACT_APP_CONFIG_TID +
                                            "/" + process.env.REACT_APP_ENV} count={count}/>
                         </div>
                     </div>
                 </div>
                 <div className="bottom">
                     <div className="bottom-header">
                     </div>
                     <div className="bottom-block">
                         <div className="sub-text-text">
                             <p>Learn more and sign-up for our early access program at <a href="https://cloudtruth.com">CloudTruth.com</a></p>
                         </div>
                     </div>
                 </div>
             </div>
    );
}

export default App;
