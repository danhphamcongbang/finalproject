import './App.scss';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FE02Typical from "./components/task__bang/task1/FE02Typical";
import {ThemeProvider} from "react-bootstrap";
import FE07_STSOFTWARE from "./components/task__bang/task2/Fe07_stsoftware";

const App = () => {
    return (
        <ThemeProvider
            breakpoints={[ 'lg','md', 'sm', 'xs','xxs']}
            minBreakpoint="xxs"
        >
        <div className="App">
            <header className="App-header">
            </header>
            {/*<FE02Typical/>*/}
            <FE07_STSOFTWARE/>
            <ToastContainer/>
        </div>
        </ThemeProvider>
    );
}

export default App;
