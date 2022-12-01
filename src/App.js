import './App.scss';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FE02Typical from "./components/FE02Typical";
import {ThemeProvider} from "react-bootstrap";

const App = () => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
        <div className="App">
            <header className="App-header">
            </header>
            <FE02Typical/>
            <ToastContainer/>
        </div>
        </ThemeProvider>
    );
}

export default App;
