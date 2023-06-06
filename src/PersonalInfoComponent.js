import InputFormComponent from "./InputFormComponent";

function PersonalInfoComponent() {
    return ( 
    <>
        <div className="grid grid-rows-[1fr,1fr,1fr,1fr,2fr] bg-slate-500 px-20 py-10">
            <InputFormComponent/>
            <InputFormComponent/>
            <InputFormComponent/>
            <InputFormComponent/>
            <div className="relative">
                <button className="absolute bottom-0 right-0">Button</button>
            </div>
        </div>
    </> );
}

export default PersonalInfoComponent;