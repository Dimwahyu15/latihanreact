import "./style/landingpage.css"
import Navigationbar from './components/Navigationbar';
import Intro from "./components/intro";
import Mydesign from "./components/mydesign";
import Myproject from "./components/myproject";
import Motret from "./components/Motret"; 

function App() {
  return (
    <div>
        <div className="firstbackground">
          <Navigationbar />
          <Intro />
        </div>

      <div className="desain">
          <Mydesign />
      </div>
      <div className="projectku">
          <Myproject />
      </div>
      <div className="dimasmotret">
          <Motret />
      </div>

     

    </div>
  );
}

export default App;
