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
             <div className="Top-level">
                 <div class="header-block">
                     <div class="ct-logo-block">
                         <h6>A reference architecture for the</h6>
                         <a href="https://cloudtruth.com"><img src={ctlogo} alt="cloudtruth"/></a>
                         <h6>Configuration Intelligence service</h6>
                     </div>
                 </div>
                 <div class="title-block">
                     <div class="title-text">
                         <h1>Welcome to the ACME Company</h1>
                     </div>
                 </div>
                 <div class="sub-title-block">
                     <h3>A fictional internal SaaS app for counting hammers, anvils and rockets.</h3>
                 </div>
                 <div class="sub-text-block">
                     <div class="sub-text-text">
                         <p>ACME's Director of Cloud Infrastructure Engineeering
                            chose CloudTruth to centrally manage parameters,
                            templates, enviorment variables, and secrets with her
                            existing cloud configuration tools.</p>
                     </div>
                 </div>
                 <div class="summary-block">
                     <div class="summay-text">
                         <p>AMCE uses Terraform to provision their cloud environment, AWS SSM Param Store for secrets and JSON files
                            in S3 for managing application configuration.</p>
                     </div>
                 </div>
                 <div class="app-block-top">
                     <div class="app-text">
                         <h2>Dynamic configuration within the Web Application</h2>
                         <h4> The following chart is configured via JSON fetched directly by the web application
                              from a CloudTruth configuration template</h4>
                         <ul>
                             <li>This demonstrates the use of a CloudTruth template as a dynamic source of configuration
                                 for a web application at runtime</li>
                             <li>Changes to the template or the parameters it references will be picked up immediately
                                 and shown below:</li>
                         </ul>
                     </div>
                 </div>
                 <div class="app-block-middle">
                     <CTChart address={"https://api.cloudtruth.com/t/" + process.env.REACT_APP_CONFIG_TID +
                                        "/" + process.env.REACT_APP_ENV} count={count}/>
                 </div>
                 <div class="app-block-bottom">
                     <div class="app-params">
                         <img src={params} alt="params"/>
                     </div>
                     <div class="SVC-block">
                          <Svc address={"https://api.cloudtruth.com/t/" + process.env.REACT_APP_CONFIG_TID +
                                             "/" + process.env.REACT_APP_ENV} count={count}/>
                     </div>
                </div>
                <div class="service-block">
                    <div class="intro-text">
                     <h2>Static and Dynamic configuration within a Service</h2>
                     <h4>The following JSON block is fetched from a simple JSON service
                         (<a href="https://github.com/cloudtruth-demo">https://demo1.demo.cloudtruth.dev</a>)</h4>
                     <ul>
                         <li>This JSON block represents the current configuration for the service</li>
                         <li>This configuration consists of a static portion supplied at deploy time, 
                             and live portion fetched from a CloudTruth template</li>
                         <li>Changes to the static configuration will take effect the next time the
                             service is deployed</li>
                         <li>Changes to the live configuration will take effect immediately</li>
                     </ul>
                </div> 
                    <div className="SVC-block">
                        <Svc address={process.env.REACT_APP_DEMO1_ADDRESS} count={count}/>
                    </div>
                </div>
                <div class="video-title">         
                     <h5>How it Works</h5>
                </div>
                <div class="video-block">
                     <iframe title="cloudtruth video" width="680" height="424" src="https://www.youtube.com/embed/2v2SW80M-Qs" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="intro-block">
                    <div class="intro-text">
                        <h2>This is the web application component of the 
                            <a href="https://github.com/cloudtruth-demo"> CloudTruth Reference Implementation</a></h2>
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
                    </div>    
                </div>
                <div class="bottom-block">
                    <div class="sub-text-text">
                        <p>Learn more and sign-up for our early access program at <a href="https://cloudtruth.com">CloudTruth.com</a></p>
                    </div>
                </div>
            </div>
    );
}

export default App;
