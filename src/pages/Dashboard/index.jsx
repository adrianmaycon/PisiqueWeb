import React from 'react';

import './styles.css';

function Dashboard() {
    return (
        <div className="container-dashboard">
            <nav>
                <ul>
                    <div id="header">
                        <img src={'https://www.muralzinhodeideias.com.br/wp-content/uploads/2020/02/Sonic-1-1.jpg'} alt="" />
                        <h2>Adrian Maycon</h2>
                    </div>
                    <div>
                        <li><a href="#home">Painel</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </div>
                    <div id="footer">
                        <input type="checkbox" name="checkbox" className="switch" />
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard;