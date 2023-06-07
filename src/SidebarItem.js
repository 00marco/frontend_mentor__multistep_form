import {Link, Route, Routes} from 'react-router-dom';


function SidebarItem() {
    return (
        <>
            <div className="grid grid-cols-[1fr,3fr]">
                <div>1</div>
                <div>
                    <div>Title</div>
                    <div>Description</div>
                </div>
            </div>
        </>
    );
}

export default SidebarItem;