import * as React from 'react';
import { NavBarHeader } from './navBarHeader';
import { NavBarList } from './navBarList';
import './navBarStyles.css';

export const NavBarContainer: React.FC = () => {
    return ( 
        <div className='navBarContainer'>
            <NavBarHeader title='coinbase'/>
            <NavBarList/>
        </div>
     );
}
 