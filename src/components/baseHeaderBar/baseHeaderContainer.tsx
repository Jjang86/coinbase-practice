import React from 'react';
import './baseHeaderBarStyles.css'
import { useShowDialogContext } from '../common/dialogBox'

interface BaseHeaderContainerProps {
    tabName: string
}
 
export const BaseHeaderContainer: React.FC<BaseHeaderContainerProps> = ({ tabName }) => {
    const dialogContext = useShowDialogContext();

    return (
        <div className='baseHeaderContainer'>
            <p className='baseHeaderTitle'>
                { tabName }
            </p>
            <div className='baseHeaderRightContainer'>
                <button
                    className='header-button header-buy-sell-button'
                    onClick={ () =>{
                            dialogContext?.updateMessages('WOOOOOO', 'ITTTT', 'WORKSSSS');
                            dialogContext?.toggleDialog(); 
                        }
                    }
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
 