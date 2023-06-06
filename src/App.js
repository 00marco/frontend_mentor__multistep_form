import './App.css';
import SidebarComponent from './SidebarComponent';
import PersonalInfoComponent from './PersonalInfoComponent';

function App() {
  return (
    <div className="grid grid-cols-[1fr,3fr] h-screen p-5 gap-3">
      <SidebarComponent/>
      <PersonalInfoComponent/>
    </div>

  );
}

export default App;
