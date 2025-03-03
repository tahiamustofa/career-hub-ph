import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [applied, setApplied] = useState([]);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        const getLocal = getStoredApplication();
        console.log("Stored Application Data:", getLocal);
        console.log("Jobs Data:", jobs);

        // Ensure jobs is an array and getLocal is an array
        if (Array.isArray(jobs) && jobs.length > 0 && Array.isArray(getLocal)) {
            const all = [];

            for (const id of getLocal) {
                // Convert id to a number for comparison (assuming job.id is a number)
                const job = jobs.find((job) => job.id === parseInt(id));
                console.log('job', job);  // Check if this is undefined
                if (job) {
                    all.push(job);
                }
            }

            console.log("All Jobs Found:", all);
            setApplied(all);
            setDisplay(all);
        } else {
            console.warn("Jobs data is not available or invalid.");
        }
    }, [jobs]);


    const handleFilter = filter => {
        if (filter === 'all') {
            setDisplay(applied)
        } else if (filter === 'remote'){
            const remoteJobs = applied.filter(job => job.remote_or_onsite === 'Remote') ;
            setDisplay(remoteJobs)
        }
         else if (filter === 'onsite'){
            const onsiteJobs = applied.filter(job => job.remote_or_onsite === 'Onsite') ;
            setDisplay(onsiteJobs)
        } else{
            'ntg';
        }
    }

    return (
        <div>
            <div className="flex gap-10 justify-between px-20">
                <div className="p-5">
                <p>Applied Jobs</p>
                <h2>Number of Applied Jobs: {applied.length}</h2>
                </div>
          
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handleFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleFilter('remote')}><a> Remote </a></li>
                    <li onClick={()=>handleFilter('onsite')}><a> Onsite </a></li>
                </ul>
            </details>
            </div>
         

            {applied.length > 0 && (
                <ul className="bg-amber-100 p-10  text-black space-y-2">
                    {display.map((job) => ( <div key={job.id} className="bg-pink-600 p-5">
                        <li className="text-2xl" key={job.id}> {job.job_title} </li>
                        <p key={job.id}> {job.company_name}</p>
                        <p key={job.id}> {job.remote_or_onsite}</p>
                    </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppliedJobs;