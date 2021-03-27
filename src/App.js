import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Link, Route } from "react-router-dom"
import Sidebar from './Sidebar/Sidebar';
import Middle from './Middle/Middle';
import Last from './Last/Last';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';
import {GoalProvider} from "./context/Goalcontext/GoalState";


function App() {
  return (
    <>

      <GoalProvider>
      <GlobalProvider>
      
        <Header />
        <div className="row container-fluid conti">
          <div className="col-lg-2 col-sm-12" >
            <Sidebar />
          </div>

          <div className="col-lg-5 col-sm-12">

            <Middle />
          </div>
          <div className="col-lg-5 col-sm-12">

            <Last />
          </div>
        </div>
        </GlobalProvider>
        </GoalProvider>
    </>
  );
}

export default App;
