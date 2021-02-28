import React from "react";
import { Settings } from './Settings'
import { Link } from 'react-router-dom';

export const Header = () => {


    return (
        <header>
            <div>
                <Link to='/'>
                    <div className="logo">
                        <div className="icon">&#127918;</div>
                        <h1 className="header">Rock & Paper & Scissors</h1>
                    </div>
                </Link>
            </div>
            <Settings />
        </header>

    );
}

//sound ? '🔈' :