import React from 'react';
import './styles.css';
import Svc from './Svc';
import CTChart from './CTChart';
import ctlogo from './cloudtruth-logo.png';
import params from './app-params.jpg';
 
function App() {

    return (
             <div className="top-level">
                 <div className="header-block">
                     <div className="ct-logo-block">
                         <h6>A reference architecture for the</h6>
                         <a href="https://cloudtruth.com"><img src={ctlogo} alt="cloudtruth"/></a>
                         <h6>unified configuration service</h6>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="app-block-top">
                         <div className="app-text" id="webapp">
                             <h2>Using CloudTruth to Configure a Web Application</h2>
                             <h4>The following chart is configured via JSON fetched directly by the web application
                                 from a CloudTruth configuration template</h4>
                             <ul>
                                 <li>This demonstrates the use of a CloudTruth template as a source of configuration
                                     for a web application at runtime.</li>
                                 <li>The template is generated during CI/CD deployment via the CloudTruth CLI integration with GitHub Actions</li>
                             </ul>
                         </div>
                     </div>
                     <div className="app-block-middle">
                         <div className="app-chart">
                             <CTChart template='web.app.live_config.json'/>
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
                             <Svc address='web.app.live_config.json'/>
                         </div>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="app-block-top">
                         <div className="app-text" id="webapp">
                             <h2>Static and Dynamic configuration within a Service</h2>
                             <h4>The following JSON block is fetched from a simple JSON service (<a href={process.env.REACT_APP_DEMO1_ADDRESS}>{process.env.REACT_APP_DEMO1_ADDRESS}</a>)</h4>
                             <ul>
                                 <li>This JSON block represents the current configuration for the service</li>
                                 <li>The data is generated statically at deploy time vi CI, then updated live with a fetch from CloudTruth</li>
                             </ul>
                         </div>
                     </div>
                     <div className="app-info-bottom">
                     </div>
                     <div className="app-block-bottom">
                         <div className="SVC-block">
                             <Svc address={process.env.REACT_APP_DEMO1_ADDRESS}/>
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
