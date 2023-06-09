import { Link } from "react-router-dom";
import { Switch } from '@headlessui/react'
import { useState } from 'react'


function SelectPlanComponent() {
  const [enabled, setEnabled] = useState(false)

    return (
        <>
            <div className="grid grid-rows-5 bg-white px-7 py-10 gap-3">
                <div>
                    <h1 className="font-bold text-2xl text-blue-900">Select your plan</h1> 
                    <p>You have the option of monthly or yearly billing</p> 
                </div>
                <div className="grid grid-cols-[100px,3fr] border p-3">
                    <div>Icon</div>
                    <div>
                        <div>Arcade</div>
                        <div>$9/mo</div>
                    </div>
                </div>
                <div className="grid grid-cols-[100px,3fr] border p-3">
                    <div>Icon</div>
                    <div>
                        <div>Advanced</div>
                        <div>$12/mo</div>
                    </div>
                </div>
                <div className="grid grid-cols-[100px,3fr] border p-3">
                    <div>Icon</div>
                    <div>
                        <div>Pro</div>
                        <div>$15/mo</div>
                    </div>
                </div>
                <div className="grid justify-center items-center">
                    <p>Monthly</p>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
                 
            </div>
            
        </>
      );
}

export default SelectPlanComponent;