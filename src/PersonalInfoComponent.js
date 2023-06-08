import InputFormComponent from "./InputFormComponent";
import { Link } from "react-router-dom";


function PersonalInfoComponent() {
    return ( 
    <>
        <div className="grid grid-rows-[1fr,1fr,1fr,1fr,1fr,3fr] md:grid-rows-[1fr,1fr,1fr,1fr,1fr,2fr] bg-slate-500 px-7 py-10 gap-1">
            <div>
                <h1 className="font-bold text-lg">Personal Info</h1>
                <p>Please provide your name, email address and phone number</p>
            </div>
            <InputFormComponent/>
            <InputFormComponent/>
            <InputFormComponent/>
            <InputFormComponent/>
            <div className="relative">
                <Link to="/selectPlan">
                    <button className="absolute bottom-0 right-0 bg-blue-950 text-white p-3" >Button</button>
                </Link>
            </div>
        </div>
    </> );
}

export default PersonalInfoComponent;