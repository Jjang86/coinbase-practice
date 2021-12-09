import * as React from 'react';
import './navBarStyles.css';
import { useTabContextValues } from '../common/tabContext'

interface NavBarListButtonProps {
    name: string
}
 
export const NavBarListButton: React.FC<NavBarListButtonProps> = ({name}) => {
    const contextValues = useTabContextValues();
    return (
        <button className='left-center navBarListButton' onClick={() => contextValues?.setName(name)}>
            {name}
        </button>
    );
}
