import React, {useEffect, useRef} from 'react';
import { TripleTabs } from './tripleTabs';
import { useShowDialogContext } from './dialogBox';

export const DialogBoxContents: React.FC = () => {
    const dialogContext = useShowDialogContext();
    
    const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    dialogContext?.toggleDialog();
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [ref])
    }
    const dialogRef = useRef(null);
    useOutsideAlerter(dialogRef);

    return (
        <div className='overlay center-center full-width'>
            <div ref={dialogRef} className='dialog-box'>
                <TripleTabs firstTabName='Buy' secondTabName='Sell' thirdTabName='Convert'/>
                <div className='center-center dialog-body'>
                    <p className='center-center dialog-body-message' onClick={dialogContext?.toggleDialog}>{dialogContext?.bodyMessage}</p>
                </div>
                <div className='dialog-footer'>
                    <button className='dialog-button confirm-dialog-button' onClick={dialogContext?.toggleDialog}>{dialogContext?.confirmText}</button>
                    <button className='dialog-button cancel-dialog-button'onClick={dialogContext?.toggleDialog}>{dialogContext?.cancelText}</button>
                </div>            
            </div>
        </div>
    );
}
