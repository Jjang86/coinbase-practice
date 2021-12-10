import * as React from 'react';
import { NavBarHeader } from './NavBarHeader';
import { NavBarList } from './NavBarList';
import './navBarStyles.css';

export const NavBarContainer: React.FC = () => {
    return ( 
        <div className='navBarContainer'>
            <NavBarHeader title='coinbase'/>
            <NavBarList/>
        </div>
     );
}
 