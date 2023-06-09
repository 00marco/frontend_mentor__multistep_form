import InputFormComponent from "./InputFormComponent";
import { Link } from "react-router-dom";


function PersonalInfoComponent() {
    return ( 
    <>
        <div className="grid grid-rows-[75px,75px,75px,75px,75px,auto] md:grid-rows-[1fr,1fr,1fr,1fr,1fr,2fr] bg-white px-7 py-10 gap-1">
            <div className="pb-1">
                <h1 className="font-bold text-2xl text-blue-900">Personal Info</h1>
                <p className="text-gray-500">Please provide your name, email address and phone number</p>
            </div>
            <InputFormComponent/>
            <InputFormComponent/>
            <InputFormComponent/>
            <InputFormComponent/>
            <div className="relative">
                <Link to="/selectPlan">
                    <button className="absolute bottom-0 right-0 bg-blue-950 text-white p-3 rounded-lg" >Next Step</button>
                </Link>
            </div>
        </div>
    </> );
}

export default PersonalInfoComponent;