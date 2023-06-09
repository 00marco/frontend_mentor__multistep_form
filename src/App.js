import './App.css';
import PageIndicatorComponent from './SidebarComponent';
import PersonalInfoComponent from './PersonalInfoComponent';
import { Route, Routes } from 'react-router-dom';
import SelectPlanComponent from './SelectPlanComponent';
import AddOnComponent from './AddOnComponent';
import SummaryComponent from './SummaryComponent';
import FooterComponent from './FooterComponent';


function App() {
  return (
    <>
        <div className="grid grid-rows-[1fr,4fr,1fr] md:grid-rows-1 md:grid-cols-[1fr,3fr] h-screen p-5 gap-3 bg-gray-200">
          <PageIndicatorComponent/>
          <Routes>
            <Route path="/" element={<PersonalInfoComponent/>}/>
            <Route path="/selectPlan" element={<SelectPlanComponent/>}/>
            <Route path="/addOn" element={<AddOnComponent/>}/>
            <Route path="/summary" element={<SummaryComponent/>}/>
          </Routes>
          <FooterComponent/>
        </div>
    </>
    

  );
}

export default App;
