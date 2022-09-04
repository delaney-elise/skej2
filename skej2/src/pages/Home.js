import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';


const Home = () => {
    return (
        <header className="header">
            <div className="button">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <button className="button">
                <Link to="create">
                    Create a SKEJ
                </Link>
            </button>
            <button className="button">
                <Link to="open">
                    Open a SKEJ
                </Link>
            </button>
        </header>

    )
}
export default Home