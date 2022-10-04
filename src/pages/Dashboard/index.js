import { Menu } from "../../components/Menu";
import { 
  BrowserRouter as 
  Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Home from "../Home";
function Dashboard() {
  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu/>
        <section className='w-100 h-100 height-overflow'>
          <Home/>
        </section>
      </main>
    </div>
  );
}
export default Dashboard;