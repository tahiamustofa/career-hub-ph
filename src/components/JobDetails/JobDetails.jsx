import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from 'react-router';

const JobDetails = props => {
const {job}= props;
const {job_title,logo,company_name,remote_or_onsite,location,job_type,salary,job_description,id}= job;

    return (
       
        <div className="card bg-base-200 shadow-sm py-5">

        <figure>
          <img
            src={logo} 
            alt="Shoes" className='w-28 h-14' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {job_title}
            <div className="badge badge-secondary">{company_name}</div>
          </h2>
          <div className='flex gap-2'>
            <h3 className='flex gap-1 items-center'><span><IoLocationOutline className='text-2xl' /> </span> {location}</h3>
        <h3 className='flex gap-1 items-center'><span><AiTwotoneDollarCircle className='text-2xl' /></span>{salary}</h3>
         
          </div>
          
          <p>{job_description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{remote_or_onsite}</div>
            <div className="badge badge-outline">{job_type}</div>
          </div>
          <div>
            <Link to={`/job/${id}`}>
          <button className="btn btn-outline btn-secondary">View Details</button> 
          </Link>
          </div>
          </div>
      </div>
    );
};

JobDetails.propTypes = {
    job:PropTypes.obj,
};

export default JobDetails;