import * as React from 'react';
import { NavBarListButton } from './navBarListButton';
import './navBarStyles.css';

interface NavBarListProps {
    passTabNameToParent: (args: string) => void
}
 
export const NavBarList: React.FC<NavBarListProps> = ({ passTabNameToParent }) => {
    const tabs = ['Assets', 'Trade', 'Pay', 'For You', 'Learn and earn', 'Notifications', 'Invite Friends']
    
    let tabList = tabs.map((tab) => {
        return (
            <NavBarListButton
                name={tab}
                passToParent={passTabNameToParent}
            />
        )
    })
    
    return ( 
        <div className='center-center navBarList'>
            {tabList}
        </div>
     );
}
