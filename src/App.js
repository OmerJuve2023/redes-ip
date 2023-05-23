import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import {PPrincipal} from "./pages/PPrincipal"
import PossibleIPs from "./container/PossibleIPs";

function App() {
    return (
        <div className="App my-5">
            <PPrincipal/>
            <PossibleIPs/>
        </div>
    );
}

export default App;
