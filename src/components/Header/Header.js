import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-fuchsia-500 text-white font-bold flex-col md:flex-row lg:flex-none">
                <div className="flex-1">
                    <Link className="btn btn-ghost font-bold normal-case text-xl">QuiZLet-Hub</Link>
                </div>
                <div className="lg:flex-none md:flex-row flex-col">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistic'>Statistic</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;