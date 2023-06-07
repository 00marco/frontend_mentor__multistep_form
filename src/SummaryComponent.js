import { Link } from "react-router-dom";

function SummaryComponent() {
    return (  
        <>
            <div>Summary</div>
            <Link to="/addOn">
                <button className="absolute bottom-0 left-0 bg-blue-950 text-white p-3" >Go back</button>
            </Link>
        </>
    );
}

export default SummaryComponent;