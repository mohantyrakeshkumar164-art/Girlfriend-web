import { Route, Routes } from "react-router-dom";
import Password from "./Password";
import Welcome from "./Welcome";
import Love from "./Love";
import Like from "./Like";
import Miss from "./Miss";
import FirstImpression from "./FirstImpression";
import Food from "./Food";
import Place from "./Place";
import FallLove from "./FallLove";
import Romantic from "./Romantic";
import Proposal from "./Proposal";
import Final from "./Final";
import Admin from "./Admin";

function App(){
  return(
    <div>
      <Routes>
       <Route path="/" element={<Password/>}/>
       <Route path="/welcome" element={<Welcome/>}/>
       <Route path="/love" element={<Love/>}/>
       <Route path="/like" element={<Like/>}/>
       <Route path="/miss" element={<Miss/>}/>
       <Route path="/firstimpression" element={<FirstImpression/>}/>
       <Route path="/food" element={<Food/>}/>
       <Route path="/place" element={<Place/>}/>
       <Route path="/fall-love" element={<FallLove/>}/>
       <Route path="/romantic" element={<Romantic/>}/>
       <Route path="/proposal" element={<Proposal/>}/>
       <Route path="/final" element={<Final/>}/>
       <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  )
}
export default App;