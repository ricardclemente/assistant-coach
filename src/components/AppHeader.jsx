import '../AppHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../images/icon_navBar.png';
import { useState } from 'react';
import { NavItem } from './NavItem';
import {menuItems} from '../constants.js'

export function AppHeader({updatePanel}){
    const [isExpanded,setIsExpanded] = useState(false)
    const toggleIsExpanded=()=>{
        setIsExpanded(!isExpanded)
    }
    
    return(
        <>
            <header className="header">
                
                <nav className="navbar navbar-expand-lg fixed-top py-3">
                    <div className="container">
                        <a href="#" className="navbar-brand text-uppercase font-weight-bold">
                            <img src={logo} className='logo' />
                        </a>
                        <button type="button" onClick={toggleIsExpanded} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
                            <i className="fa fa-bars"></i>
                        </button>
                        
                        <div id="navbarSupportedContent" className={isExpanded ? "navbar-collapse": "collapse navbar-collapse"}>
                            <ul className="navbar-nav ml-auto">
                                {Object.keys(menuItems).map((item)=>
                                     <NavItem key = {item} updatePanelItem={updatePanel}>{item}</NavItem>)}    
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}