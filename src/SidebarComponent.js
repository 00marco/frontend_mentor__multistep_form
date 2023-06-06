import SidebarItem from "./SidebarItem";

function SidebarComponent() {
    return (  
        <>
            <div className="grid grid-rows-[1fr,1fr,1fr,1fr,4fr] bg-slate-500 p-5">
                <SidebarItem/>
                <SidebarItem/>
                <SidebarItem/>
                <SidebarItem/>
            </div>
        </>
    );
}

export default SidebarComponent;