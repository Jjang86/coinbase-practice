import React, {useEffect, useRef} from 'react';
import { TripleTabs } from './tripleTabs';
import { useUpdateDialogContext } from './dialogBox';

interface DialogBoxContentsProps {
    bodyMessage: string;
    confirmText: string;
    cancelText: string;

}
 
export const DialogBoxContents: React.FC<DialogBoxContentsProps> = ({ bodyMessage, confirmText, cancelText}) => {
    const toggleDialogBox = useUpdateDialogContext();
    const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    toggleDialogBox();
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
                    <p className='center-center dialog-body-message' onClick={toggleDialogBox}>{bodyMessage}</p>
                </div>
                <div className='dialog-footer'>
                    <button className='dialog-button' onClick={toggleDialogBox}>{confirmText}</button>
                    <button className='dialog-button cancel-dialog-button'onClick={toggleDialogBox}>{cancelText}</button>
                </div>            
            </div>
        </div>
    );
}
