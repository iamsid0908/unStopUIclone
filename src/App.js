import Slider from './Components/CompanySlider/Slider';
import './App.css';
import Header from './Components/Header/Header';
import Connecting from './Components/Home1/Connecting';
import Crausal from './Components/Crausal/Crausal';
import Recent from './Components/Recent-view/Recent';
import Threecard from './Components/ThreeCard/Threecard';
import Ournumbers from './Components/Numbers/Ournumbers';
import Template from './Components/DownloadChart/Template';
import Fotter from './Components/Fotter/Fotter';
import Cardcarousal from './Components/Opportunity/Cardcarousal';
function App() {
 
  
  return (
    <div className="App">
      
    <Header/>
     <Connecting/>
     <Slider/>
     <Crausal/>
     <Recent/>
     <Threecard/>
     <Cardcarousal/>
     <Ournumbers/>
     <Template/>
     <Fotter/>
    </div>
  );
}

export default App;
