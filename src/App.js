import './App.scss';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FE02Typical from "./components/FE02Typical";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <FE02Typical/>
            <ToastContainer/>
        </div>
    );
}

export default App;
