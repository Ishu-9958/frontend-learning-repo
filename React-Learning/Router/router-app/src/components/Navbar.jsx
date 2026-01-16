import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){

    return (
            <div className="nav-container">
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/about' className='nav-item'>About</Link>
                <Link to='/dashboard' className='nav-item'>Dashboard</Link>
            </div>
        
    );
}


export default Navbar;