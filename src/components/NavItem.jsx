import '../AppHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function NavItem({children,updatePanelItem}){
    const handleClick = ()=>{
        updatePanelItem(children)
    }
    return(
        <>
            <li className="nav-item" ><a href="#" onClick={handleClick} className="nav-link text-uppercase font-weight-bold">{children}</a></li>
        </>    
    )
}