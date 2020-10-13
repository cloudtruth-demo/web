import React, { useState } from 'react';
import logo from './ctlogo.png';
import './App.css';
import Svc from './Svc';
import CTChart from './CTChart';
import useInterval from 'use-interval';

function App() {
    const [count, setCount] = useState(0);
    useInterval(() => { setCount(count + 1); }, process.env.REACT_APP_POLLING_INTERVAL);

    return (
        <div className="Top-level">
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3>CloudTruth Demo Application</h3>
                <p>This is the web application component of the <a href="https://github.com/cloudtruth-demo">CloudTruth Reference
                Implementation</a> (presented as a Github Organization).</p>
                <ul>
                    <li>This application interacts with a simple JSON service in order to demonstrate 
                    a complete system configured by CloudTruth</li>
                    <li>Both the <a href="https://github.com/cloudtruth-demo/web">web client</a> and
                    the <a href="https://github.com/cloudtruth-demo/service">json
                    service</a> are deployed to AWS using Github Actions for CI/CD</li>
                    <li>You can browse (.github/workflows/cd.yml) within each repository as a guide for 
                    integrating CloudTruth with your own CI/CD system</li>
                    <li>The system is provisioned in AWS using terraform with the <a
                    href="https://github.com/cloudtruth-demo/ops">ops repository</a></li>
                </ul>
                <h4>Dynamic configuration within the Web Application</h4>
                <p> The following chart is configured via JSON fetched directly by the web application from a CloudTruth configuration template</p>
                <ul>
                    <li>This demonstrates the use of a CloudTruth template as a dynamic source of configuration for a web application at runtime</li>
                    <li>Changes to the template or the parameters it references will be picked up immediately and shown below:</li>
                </ul>
                <div className="SVC-block">
                    <CTChart address={"https://api.cloudtruth.com/t/" + process.env.REACT_APP_CONFIG_TID + "/" + process.env.REACT_APP_ENV} count={count}/>
                </div>
                <h4>Static and Dynamic configuration within a Service</h4>
                <p>The following JSON block is fetched from a simple JSON service ({process.env.REACT_APP_DEMO1_ADDRESS})</p>
                <ul>
                    <li>This JSON block represents the current configuration for the service</li>
                    <li>This configuration consists of a static portion supplied at deploy time, 
                    and live portion fetched from a CloudTruth template</li>
                    <li>Changes to the static configuration will take effect the next time the service is deployed</li>
                    <li>Changes to the live configuration will take effect immediately</li>
                </ul>
                <div className="SVC-block">
                    <Svc address={process.env.REACT_APP_DEMO1_ADDRESS} count={count}/>
                </div>
                <p>For more information, visit <a href="https://docs.cloudtruth.com/demo-guide">Guide to the CloudTruth Demo</a></p>
            </div>
        </div>
    );
}

export default App;
