import { Link } from "react-router-dom";


function AddOnComponent() {
    return (
        <>
            <div className="grid grid-rows-[1fr,1fr,1fr,1fr,1fr,2fr] bg-red-50 px-7 py-10 gap-1">
                <div>Pick your add-ons</div> 
                <div>Add-ons help enhance your gaming experience</div> 
                <div>Online service. Access to multiplayer games</div>
                <div>Larger storage. Extra 1 TB of cloud save</div>
                <div>Customizable profile. Custom theme on your profile</div>
                <div className="relative">
                    <Link to="/summary">
                        <button className="absolute bottom-0 right-0 bg-blue-950 text-white p-3" >Button</button>
                    </Link> 
                    <Link to="/selectPlan">
                        <button className="absolute bottom-0 left-0 bg-blue-950 text-white p-3" >Go back</button>
                    </Link>
                </div>
                 
            </div>
            
        </>
    ) ;
}

export default AddOnComponent;