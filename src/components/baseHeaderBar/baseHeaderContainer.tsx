import React from 'react';
import './baseHeaderBarStyles.css'

interface BaseHeaderContainerProps {
    showDialog: (show: boolean, bodyMessage: string, confirmMessage: string, cancelMessage: string) => void,
    tabName: string
}
 
export const BaseHeaderContainer: React.FC<BaseHeaderContainerProps> = ({ showDialog, tabName }) => {
    return (
        <div className='baseHeaderContainer'>
            <p className='baseHeaderTitle'>
                { tabName }
            </p>
            <div className='baseHeaderRightContainer'>
                <button
                    className='header-button header-buy-sell-button'
                    onClick={() => showDialog(true, 'it works', 'woot', 'bye')}
                >
                    Buy / Sell
                </button>
                <button className='header-button header-send-recieve-button'>Send / Receive</button>
                <p className='divider'></p>
                <button className='profile-button' />
            </div>
        </div>
    );
}
 