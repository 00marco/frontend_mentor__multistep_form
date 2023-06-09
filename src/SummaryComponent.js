import { Link } from "react-router-dom";

function SummaryComponent() {
    return (  
        <>
            <div className="grid px-7 py-10 gap-1">
                <h1 className="font-bold text-2xl text-blue-900">Summary</h1>
                <div className="relative">
                    <Link to="/addOn">
                        <button className="absolute bottom-0 left-0 bg-blue-950 text-white p-3" >Go back</button>
                    </Link>
                </div>
            </div>
            
        </>
    );
}

export default SummaryComponent;