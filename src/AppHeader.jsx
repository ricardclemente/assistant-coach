import './AppHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './images/icon_navBar.png';
import { useState } from 'react';

export function AppHeader(){
    const [isExpanded,setIsExpanded] = useState(false)
    
    return(
        <>
            <header className="header">
                
                <nav className="navbar navbar-expand-lg fixed-top py-3">
                    <div className="container">
                        <a href="#" className="navbar-brand text-uppercase font-weight-bold">
                            <img src={logo} className='logo' />
                        </a>
                        <button type="button" onClick={() => setIsExpanded(!isExpanded)} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
                            <i className="fa fa-bars"></i>
                        </button>
                        
                        <div id="navbarSupportedContent" className={isExpanded ? "navbar-collapse": "collapse navbar-collapse"}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Calendar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Exercices</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Athletes</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}