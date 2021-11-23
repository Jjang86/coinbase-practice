import * as React from 'react';
import './navBarStyles.css';

interface NavBarListButtonProps {
    name: string
    passToParent: (args: string) => void
}
 
export const NavBarListButton: React.FC<NavBarListButtonProps> = ({name, passToParent}) => {
    return (
        <button className='navBarListButton' onClick={() => passToParent(name)}>
            {name}
        </button>
    );
}
