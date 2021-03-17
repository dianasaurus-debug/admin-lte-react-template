import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min"
import "admin-lte/dist/css/adminlte.css"
import "admin-lte/dist/js/adminlte"
import "bootstrap/dist/js/bootstrap.bundle"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Footer from "./components/Footer";
import Content from './components/Content';
import 'chart.js/dist/Chart';
import 'admin-lte/dist/js/demo';
import 'admin-lte/dist/js/pages/dashboard3'
function App() {
  return (
      <div>
          <Sidebar/>
          <Navbar/>
          <Content/>
          <Footer/>
      </div>
      );
}

export default App;
