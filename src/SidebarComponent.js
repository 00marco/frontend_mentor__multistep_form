import SidebarItem from "./SidebarItem";

function SidebarComponent() {
    return (  
        <>
            <div className="grid grid-rows-1 grid-cols-[1fr,1fr,1fr,1fr] md:grid-cols-1 md:grid-rows-[1fr,1fr,1fr,1fr,4fr] bg-slate-500 p-5 px-[10rem] md:px-5 gap-3 ">
                <SidebarItem/>
                <SidebarItem/>
                <SidebarItem/>
                <SidebarItem/>
            </div>
        </>
    );
}

export default SidebarComponent;