import React from 'react';

interface TripleTabsProps {
    firstTabName: string,
    secondTabName: string,
    thirdTabName: String
}
 
export const TripleTabs: React.FC<TripleTabsProps> = ({ firstTabName, secondTabName, thirdTabName}) => {
    return (
        <div className='triple-tabs-container'>
            <p className='triple-tabs'>
                {firstTabName}
            </p>
            <p className='triple-tabs'>
                {secondTabName}
            </p>
            <p className='triple-tabs'>
                {thirdTabName}
            </p>
        </div>
    );
}
 