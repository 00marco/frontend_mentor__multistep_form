import './App.css';
import SidebarComponent from './SidebarComponent';
import PersonalInfoComponent from './PersonalInfoComponent';
import { Route, Routes } from 'react-router-dom';
import SelectPlanComponent from './SelectPlanComponent';
import AddOnComponent from './AddOnComponent';
import SummaryComponent from './SummaryComponent';


function App() {
  return (
    <>
        <div className="grid grid-cols-1 grid-rows-[100px,auto] md:grid-rows-1 md:grid-cols-[1fr,3fr] h-screen p-5 gap-3">
          <SidebarComponent/>
          <Routes>
            <Route path="/" element={<PersonalInfoComponent/>}/>
            <Route path="/selectPlan" element={<SelectPlanComponent/>}/>
            <Route path="/addOn" element={<AddOnComponent/>}/>
            <Route path="/summary" element={<SummaryComponent/>}/>
          </Routes>

        </div>
    </>
    

  );
}

export default App;
