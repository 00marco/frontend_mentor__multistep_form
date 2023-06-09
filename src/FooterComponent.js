import { Link } from "react-router-dom";


function FooterComponent() {
    return (  
        <>
            <div className="grid grid-cols-2 w-full">
                <Link className="flex items-center justify-start" to="/selectPlan">
                    <button className=" bg-blue-950 text-white p-3 rounded-lg" >Go Back</button>
                </Link>
                <Link className="flex items-center justify-end" to="/selectPlan">
                    <button className=" bg-blue-950 text-white p-3 rounded-lg" >Next Step</button>
                </Link>
            </div>
        </>
    );
}

export default FooterComponent;