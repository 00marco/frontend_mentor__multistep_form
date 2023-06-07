import { Link } from "react-router-dom";

function SelectPlanComponent() {
    return (
        <>
            <div className="grid grid-rows-[1fr,1fr,1fr,1fr,1fr,1fr,2fr] bg-red-50 gap-2">
                <div>Select your plan</div> 
                <div>You have the option of monthly or yearly billing</div> 
                <div className="grid grid-cols-[1fr,3fr] border">
                    <div>Icon</div>
                    <div>
                        <div>Arcade</div>
                        <div>$9/mo</div>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr,3fr] border">
                    <div>Icon</div>
                    <div>
                        <div>Advanced</div>
                        <div>$12/mo</div>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr,3fr] border">
                    <div>Icon</div>
                    <div>
                        <div>Pro</div>
                        <div>$15/mo</div>
                    </div>
                </div>
                <div>
                    Monthly - Yearly
                </div>
                <div className="relative">
                    <Link to="/addOn">
                        <button className="absolute bottom-0 right-0 bg-blue-950 text-white p-3" >Button</button>
                    </Link> 
                    <Link to="/">
                        <button className="absolute bottom-0 left-0 bg-blue-950 text-white p-3" >Go back</button>
                    </Link>
                </div>
                 
            </div>
            
        </>
      );
}

export default SelectPlanComponent;