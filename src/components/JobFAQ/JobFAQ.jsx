import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplications } from "../Utility/localstorage";

const JobFAQ = () => {
const {id} = useParams();
const jobs =useLoaderData();
const currentId=parseInt(id);
const job=jobs.find(job=> job.id ===  currentId)
const notify = () => {
  toast("Applied Successfully!");
  saveJobApplications(id)
}

  return (
    <div className="p-5">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 space-y-4 my-4">
        <h2> {id}</h2>
        <p className=""> <span className="font-extrabold">job_responsibility</span> {job.job_responsibility}</p>
        <p>{job.educational_requirements}</p>
        <p>{job.experiences}</p>
        </div>
        <div>
        <div className="card bg-base-100  shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Job Details</h2>
    <h2 className="text-rose-900 font-bold">{job.job_title}</h2>
    <p>{job.salary}</p>
    <h2 className="card-title">contact_information</h2>
    <p>{job.contact_information.phone}</p>
    <p>{job.contact_information.address}</p>
    <p>{job.contact_information.email}</p>
  
  </div>
  <button  onClick={notify} className="btn w-full my-4">
  Apply Now
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
</div>
 
        </div>
     
    </div>
    <ToastContainer /> 
    </div>
   
  );
};

export default JobFAQ;
