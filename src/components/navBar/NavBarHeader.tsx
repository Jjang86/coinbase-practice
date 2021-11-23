import * as React from 'react';
import './navBarStyles.css';

interface NavBarHeaderProps {
    title: string;
}

export const NavBarHeader: React.FC<NavBarHeaderProps> = ({title}) => {
    return (
        <h1 className='navBarHeader'>
            {title}
        </h1>
    );
};
