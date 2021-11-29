import React from 'react';
import './baseHeaderBarStyles.css'
import { useUpdateDialogContext } from '../common/dialogBox'

interface BaseHeaderContainerProps {
    tabName: string
}
 
export const BaseHeaderContainer: React.FC<BaseHeaderContainerProps> = ({ tabName }) => {
    const toggleDialogBox = useUpdateDialogContext();

    return (
        <div className='baseHeaderContainer'>
            <p className='baseHeaderTitle'>
                { tabName }
            </p>
            <div className='baseHeaderRightContainer'>
                <button
                    className='header-button header-buy-sell-button'
                    onClick={ toggleDialogBox }
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
 