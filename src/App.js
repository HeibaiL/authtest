import './App.css';
import {useEffect} from "react";

const REDIRECT_URL = 'http://localhost:3000';

function App() {
    useEffect(() => {
        fetch('http://localhost:3003')
    }, [])
    const link = `https://www.facebook.com/v12.0/dialog/oauth?client_id=588848775476423&redirect_uri=${REDIRECT_URL}&state={st=state123abc,ds=123456789}`
    return (
        <div className="App">
            hello
            <a href={link} target='_blank'> here </a>

        </div>
    );
}

export default App;
