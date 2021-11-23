import React from 'react';
import './baseHeaderBarStyles.css'

interface BaseHeaderContainerProps {
    tabName: string
}
 
export const BaseHeaderContainer: React.FC<BaseHeaderContainerProps> = ({ tabName }) => {
    return (
        <div className='baseHeaderContainer'>
            <p className='baseHeaderTitle'>
                { tabName }
            </p>
        </div>
    );
}
 