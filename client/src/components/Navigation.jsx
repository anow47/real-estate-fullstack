import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    const navItems = [
        { name: 'الرئيسية', path: '/' },
        { name: 'مشاريع عقارية', path: '/projects' },
        { name: 'المزادات العقارية', path: '/auctions' },
        { name: 'خدماتنا التسويقية', path: '/services' },
        { name: 'من نحن', path: '/about' }
    ];

    const [showNav, setShowNav] = useState(false);

    const toggleMenu = () => {
        setShowNav(!showNav);
    };

    const hideMenu = () => {
        setShowNav(false);
    };

    return (
        <header className="App-header">
            <Link to={navItems[0].path} className='logo-link'>
                <div className='App-logo'>
                    <span className='logo-title'> <i className="zmdi zmdi-home"></i> Real Estate</span>
                </div>
            </Link>
            <nav className='desktop'>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link className='desktop-nav-link' to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className='mobile'>
                <i className="zmdi zmdi-menu" onClick={toggleMenu}></i>
                <div className={`overlay ${showNav ? 'showOverlay' : ''}`} onClick={hideMenu}></div>
                <ul className={`nav-list ${showNav ? 'showMenu' : ''}`}>
                    <i className="zmdi zmdi-close" onClick={hideMenu}></i>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link className='nav-link' onClick={hideMenu} to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
      </header>
    );
}
