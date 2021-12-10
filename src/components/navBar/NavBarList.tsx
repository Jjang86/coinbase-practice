import * as React from 'react';
import { NavBarListButton } from './NavBarListButton';
import './navBarStyles.css';

interface NavBarListProps {
}
 
export const NavBarList: React.FC<NavBarListProps> = () => {
    const tabs = ['Assets', 'Trade', 'Pay', 'For You', 'Learn and earn', 'Notifications', 'Invite Friends']
    
    let tabList = tabs.map((tab) => {
        return (
            <NavBarListButton
                key={tab}
                name={tab}
            />
        )
    })
    
    return ( 
        <div className='center-center navBarList'>
            {tabList}
        </div>
     );
}
