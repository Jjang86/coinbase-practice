import React from 'react';
import './baseHeaderBarStyles.css'
import { useShowDialogContext } from '../common/dialogBox'
import { useTabContextValues } from '../common/tabContext'

interface BaseHeaderContainerProps {
}
 
export const BaseHeaderContainer: React.FC<BaseHeaderContainerProps> = () => {
    const dialogContext = useShowDialogContext();
    const tabContext = useTabContextValues();

    return (
        <div className='baseHeaderContainer'>
            <p className='baseHeaderTitle'>
                { tabContext?.tabName }
            </p>
            <div className='baseHeaderRightContainer'>
                <button
                    className='header-button header-buy-sell-button'
                    onClick={ () =>{
                        dialogContext?.updateMessages('GET', 'THAT', 'MONAYYYY');
                        dialogContext?.toggleDialog(); 
                    }}
                >
                    Buy / Sell
                </button>
                <button 
                    className='header-button header-send-recieve-button'
                    onClick={ () =>{
                        dialogContext?.updateMessages('SEND', 'ME', 'MONEY');
                        dialogContext?.toggleDialog(); 
                    }}
                >
                    Send / Receive</button>
                <p className='divider'></p>
                <button className='profile-button' />
            </div>
        </div>
    );
}
 