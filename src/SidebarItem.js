import { useMediaQuery } from 'react-responsive';


function SidebarItem() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });


    return (
        <>
            {
                isDesktopOrLaptop ? 
                <div className="grid grid-cols-[1fr,3fr]">
                    <div>1</div>
                    
                    <div>
                        <div>Title</div>
                        <div>Description</div>
                    </div>
                </div>
                :
                <div className="flex justify-center items-center rounded-full bg-slate-400 h-[50px] w-[50px]">1</div>
            }
            
        </>
    );
}

export default SidebarItem;