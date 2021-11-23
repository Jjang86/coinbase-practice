import * as React from 'react';
import { NavBarHeader } from './NavBarHeader';
import { NavBarList } from './NavBarList';
import './navBarStyles.css';

interface NavBarContainerProps {
    passTabNameToMain: (args: string) => void
}
  
export const NavBarContainer: React.FC<NavBarContainerProps> = ({ passTabNameToMain}) => {
    return ( 
        <div className='navBarContainer'>
            <NavBarHeader title='coinbase'/>
            <NavBarList passTabNameToParent={passTabNameToMain}/>
        </div>
     );
}
 