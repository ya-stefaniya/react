import React from "react";

export const Header = () => (
    <>
        <header>
            <div className="logo">
                <div className="icon">&#127918;</div>
                <h1 className="header" onClick={() => (console.log('я тут'))}>Rock & Paper & Scissors</h1>
            </div>
            <div className="icon settings">&#128736;</div>
        </header>
    </>
);