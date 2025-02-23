// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApplication } from "../Utility/localstorage";


const Appliedjobs = () => {
    console.log(getStoredApplication());

   const jobs =  useLoaderData();
// console.log('all jobs',jobs)

   const [applied,setApplied] = useState([]);

   useEffect(() => {
    const getLocal = getStoredApplication();
    console.log("Stored Application Data:", getLocal);
    console.log("Jobs Data:", jobs);

    if (jobs.length > 0 && Array.isArray(getLocal)) {
        console.log(getLocal)
        const all = [];

        for (const id of getLocal) {
            const job = jobs.find((job) => job.id === id);
            console.log('job', job);  // Check if this is undefined
            if (job) {
                all.push(job);
            }
        }

        console.log("All Jobs Found:", all);
        setApplied(all);
    }
}, [jobs]);
    return (
        <div>
            <p> Appliedjobs</p>
            <h2>{applied.length}</h2>
        </div>
    );
};

Appliedjobs.propTypes = {
    
};

export default Appliedjobs;