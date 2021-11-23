import * as React from 'react';
import { NavBarListButton } from './NavBarListButton'
import './navBarStyles.css';

interface NavBarListProps {
    passTabNameToParent: (args: string) => void
}
 
export const NavBarList: React.FC<NavBarListProps> = ({ passTabNameToParent }) => {
    return ( 
        <div className='navBarList'>
            <NavBarListButton 
                name='Assets'
                passToParent={passTabNameToParent}
            />
            <NavBarListButton
                name='Trade'
                passToParent={passTabNameToParent}
            />
            <NavBarListButton 
                name='Pay'
                passToParent={passTabNameToParent}
            />
            <NavBarListButton
                name='For You'
                passToParent={passTabNameToParent}
            />
            <NavBarListButton 
                name='Learn and earn'
                passToParent={passTabNameToParent}
            />
            <NavBarListButton
                name='Notifications'
                passToParent={passTabNameToParent}
            />
            <NavBarListButton 
                name='Invite Friends'
                passToParent={passTabNameToParent}
            />
        </div>
     );
}
