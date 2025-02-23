import { Link } from "react-router";

const Errorpage = () => {
    return (
        <div>
            <h4 className="p-5 mx-10 bg-rose-500">OOOps !</h4>
      
            
            <button className="btn btn-active btn-primary mx-20">
               
                <Link to={"/"} > Home Back</Link>
            </button>
           
        </div>
    );
};

export default Errorpage;