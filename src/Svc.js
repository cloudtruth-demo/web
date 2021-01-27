import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import './Svc.css';

function Svc(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        if (props.count > 100) { console.log("Svc: count = " + props.count + " - polling limit exceeded.") }
        else {
          fetch(props.address)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log("Svc: count = " + props.count);
                    setData(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        } 
    }, [props])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <div className="Svc"><ReactJson theme="summerfruit:inverted" name={false} collapsed={false} enableClipboard={false} src={data} /></div>
    }
}

export default Svc;
