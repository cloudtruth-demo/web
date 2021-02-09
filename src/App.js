import React, { useState } from 'react';
import './styles.css';
import Svc from './Svc';
import CTChart from './CTChart';
import ctlogo from './cloudtruth-logo.png';
import params from './app-params.jpg';
import cicdrepos from './cicd-repos.jpg';
import cicdactions from './cicd-actions.jpg';
import cfgmapd from './configmap-demo.jpg';
import cfgmapc from './configmap-cmd.jpg';
import keytemp from './key-template.jpg';
import keyact from './key-actions.jpg';
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
                 <div className="title-block">
                     <div className="title-text">
                         <h1>Welcome to the ACME Company</h1>
                     </div>
                 </div>
                 <div className="sub-title-block">
                     <h3>A fictional internal SaaS app for counting hammers, anvils and rockets.</h3>
                 </div>
                 <div className="sub-text-block">
                     <div className="sub-text-text">
                         <p>ACME's Director of Cloud Infrastructure Engineeering
                            chose CloudTruth to centrally manage parameters,
                            templates, enviorment variables, and secrets with her
                            existing cloud configuration tools.</p>
                     </div>
                 </div>
                 <div className="summary-block">
                     <div className="summay-text">
                         <p>ACME relies upon Terraform to provision their cloud environment,
                            AWS SSM Parameter Store for secrets and JSON files in S3 buckets for application configuration.</p>
                     </div>
                 </div>
                 <div className="use-case-block">
                     <div className="use-case-text">
                         <h3>ACME uses CloudTruth Configuration Intelligence to solve the following problems:</h3>
                         <ol>
                             <li className="use-case-list-text"><a href="#webapp">Dynamic configuration of a web application</a></li>
                             <li className="use-case-list-text"><a href="#websvc">Static and dynamic configuration of a service</a></li>
                             <li className="use-case-list-text"><a href="#gacicd">Cloud deployment using standard CI/CD tools</a></li>
                             <li className="use-case-list-text"><a href="#kubapp">Management of app & service config for Kubernetes</a></li>
                             <li className="use-case-list-text"><a href="#keyrot">Key rotation for compliance with secure best practices</a></li>
                         </ol>
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
                 <div className="video">
                     <div className="video-header">
                     </div>
                     <div className="video-title">         
                         <h5>How it Works</h5>
                     </div>
                     <div className="video-block">
                         <iframe title="cloudtruth web app video" src="https://share.descript.com/embed/1zLS0clGeh9" width="640" height="360" 
                                 frameBorder="0" allowFullScreen></iframe>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="svc-block-top">
                         <div className="app-text" id="websvc">
                             <h2>Static and dynamic configuration of a service</h2>
                             <h4>The following JSON block is fetched from a simple JSON service
                                 (<a href="https://github.com/cloudtruth-demo">https://demo1.demo.cloudtruth.dev</a>)</h4>
                             <ul>
                                 <li>This JSON block represents the current configuration for the service.</li>
                                 <li>This configuration consists of a static portion supplied at deploy time, 
                                     and live portion fetched from a CloudTruth template.</li>
                                 <li>Changes to the static configuration will take effect the next time the
                                     service is deployed.</li>
                                 <li>Changes to the live configuration will take effect immediately.</li>
                             </ul>
                         </div>
                     </div> 
                     <div className="svc-block-bottom">
                         <Svc address={process.env.REACT_APP_DEMO1_ADDRESS} count={count}/>
                     </div>
                 </div>
                 <div className="video">
                     <div className="video-header">
                     </div>
                     <div className="video-title">         
                         <h5>How it Works</h5>
                     </div>
                     <div className="video-block">
                         <iframe title="cloudtruth service config video" src="https://share.descript.com/embed/SRnTdxgt0Rm" width="640" height="360"
                                 frameBorder="0" allowFullScreen></iframe>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="cicd-block">
                         <div className="cicd-text" id="gacicd">
                             <h2>Cloud deployment using standard CI/CD tools</h2>
                             <ul>
                                 <li>This application interacts with a simple JSON service in order to demonstrate 
                                     a complete system configured by CloudTruth.</li>
                                 <li>Both the <a href="https://github.com/cloudtruth-demo/web">web client</a> and
                                     the <a href="https://github.com/cloudtruth-demo/service">json
                                     service</a> are deployed to AWS using Github Actions for CI/CD.</li>
                                 <li>You can browse (github/workflows/cd.yml) within each repository as a guide for 
                                     integrating CloudTruth with your own CI/CD system.</li>
                                 <li>The system is provisioned in AWS using terraform with the <a
                                     href="https://github.com/cloudtruth-demo/ops">ops repository.</a></li>
                             </ul>
                         </div>    
                     </div>
                     <div className="use-case-bottom">
                         <div className="use-case-image-left">
                             <img src={cicdrepos} alt="cicd repos"/>
                         </div>
                         <div className="use-case-image-right">
                             <img src={cicdactions} alt="cicd actions"/>
                         </div>
                     </div>
                 </div>
                 <div className="video">
                     <div className="video-header">
                     </div>
                     <div className="video-title">         
                         <h5>How it Works</h5>
                     </div>
                     <div className="video-block">
                          <iframe title="cloudtruth cicd video" src="https://share.descript.com/embed/0MdLfB789vM" width="640" height="360"
                                  frameBorder="0" allowFullScreen></iframe>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="kube-block">
                         <div className="kube-text" id="kubapp">
                             <h2>Management of application & service configuration for Kubernetes</h2>
                             <ul>
                                 <li>The CloudTruth integration for Kubernetes pushes parameter updates into ConfigMaps and Secrets.</li>
                                 <li>This integration uses naming conventions to automate the delivery of configuration.</li>
                                 <li>You can browse (https://github.com/cloudtruth/kubetruth) as a guide for 
                                     integrating CloudTruth with your Kubernetes cluster.</li>
                                 <li>The KubeTruth code is hosted in the <a
                                     href="https://github.com/cloudtruth/kubetruth">KubeTruth repository.</a></li>
                             </ul>
                         </div>
                     </div>
                     <div className="use-case-bottom">
                         <div className="use-case-image-left">
                             <img src={cfgmapd} alt="config map demo"/>
                         </div>
                         <div className="use-case-image-right">
                             <img src={cfgmapc} alt="config map cmd"/>
                         </div>
                     </div>
                 </div>
                 <div className="video">
                     <div className="video-header">
                     </div>
                     <div className="video-title">         
                         <h5>How it Works</h5>
                     </div>
                     <div className="video-block">
                         <iframe title="kubetruth video" src="https://share.descript.com/embed/z7RmoJYBdip" width="680" height="424"
                                 frameBorder="0" allowFullScreen></iframe>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
                     </div>
                     <div className="key-block">
                         <div className="key-text" id="keyrot">
                             <h2>Key rotation for compliance with secure best practices</h2>
                             <ul>
                                 <li>Key rotations are typically needed to ensure good security practices. </li>
                                 <li>In our demonstration, we look at using CloudTruth to automate the update of S3 access keys which have been generated by Terraform.</li>
                                 <li>Terraform typically generates and writes state output to a file on S3.  These can easily be leveraged with CloudTruth.</li>
                                 <li>You can browse the commands used in the demostration directly in our (github/workflows/cd.yml) <a
                                     href="https://github.com/cloudtruth-demo/web/blob/master/.github/workflows/cd.yml">cloudtruth demo workflows</a></li>
                             </ul>
                         </div>
                     </div>
                     <div className="use-case-bottom">
                         <div className="use-case-image-left">
                             <img src={keyact} alt="key rotation actions"/>
                         </div>
                         <div className="use-case-image-right">
                             <img src={keytemp} alt="key rotation template"/>
                         </div>
                     </div>
                 </div>
                 <div className="video">
                     <div className="video-header">
                     </div>
                     <div className="video-title">         
                         <h5>How it Works</h5>
                     </div>
                     <div className="video-block">
                         <iframe title="key rotation video" src="https://share.descript.com/embed/wkYk30TwjGi" width="640" height="360"
                                 frameBorder="0" allowFullscreen></iframe>
                     </div>
                 </div>
                 <div className="use-case">
                     <div className="use-case-header">
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
