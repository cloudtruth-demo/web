import React from 'react';
import logo from './logo.png';
import './App.css';
import Svc from './Svc';

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                This is the web application component of the <a
                href="https://github.com/cloudtruth-demo">CloudTruth Reference
                Implementation</a> (presented as a Github Organization). It is a
                simple Single Page Application that interacts with a simple JSON
                service in order to demonstrate a complete system that is
                configured by CloudTruth.  Both the <a
                href="https://github.com/cloudtruth-demo/web">web client</a> and
                the <a href="https://github.com/cloudtruth-demo/service">json
                service</a> are deployed to AWS using Github Actions for CI/CD,
                which you can browse (.github/workflows/cd.yml) within each
                repository as a guide for how to integrate CloudTruth with your
                own CI/CD system.  The system is provisioned in AWS using
                terraform with the  <a
                href="https://github.com/cloudtruth-demo/ops">ops repository</a>
            </p>
            <h4>Dynamic configuration within this Web Application</h4>
            <p>
                The following JSON block is fetched directly by this web
                application from a CloudTruth configuration template in order to
                demonstrate how one would use a CloudTruth template as a dynamic
                source of configuration for a web application at runtime. Changes
                to the template or the parameters it references will be picked up
                immediately and shown below:
            </p>
            <Svc
                address={"https://api.cloudtruth.com/t/" + process.env.REACT_APP_CONFIG_TID + "/" + process.env.REACT_APP_ENV}/>
            <h4>Static and Dynamic configuration within a Service</h4>
            <p>
                The following JSON block is fetched from a simple json
                service ({process.env.REACT_APP_DEMO1_ADDRESS}) in order to
                demonstrate the configuration that service is running with.
                The service displays both the static configuration that was
                given to it at deploy time as well as the live configuration
                that it gets from a CloudTruth template as a dynamic source
                of configuration. Changes to the configuration can be gated
                to show up only at the next deploy time of the service, or
                immediately if they are part of the live configuration
                template the service references
            </p>
            <Svc address={process.env.REACT_APP_DEMO1_ADDRESS}/>
        </div>
    );
}

export default App;
