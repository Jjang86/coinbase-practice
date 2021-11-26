import React from 'react';

interface TripleTabsProps {
    firstTabName: string,
    secondTabName: string,
    thirdTabName: String
}
 
export const TripleTabs: React.FC<TripleTabsProps> = ({ firstTabName, secondTabName, thirdTabName}) => {
    return (
        <div className='triple-tabs-container'>
            <p className='center-center triple-tabs'>
                {firstTabName}
            </p>
            <p className='center-center triple-tabs'>
                {secondTabName}
            </p>
            <p className='center-center triple-tabs'>
                {thirdTabName}
            </p>
        </div>
    );
}
 