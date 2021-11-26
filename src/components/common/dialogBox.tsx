import React from 'react';

interface Props {
    showDialog: (show: boolean) => void;
    bodyMessage: string;
    confirmText: string;
    cancelText: string;
}
 
export const DialogBox: React.FC<Props> = ({ showDialog, bodyMessage, confirmText, cancelText}) => {
    const hideDialogBox = () => {showDialog(false)}
    return (
        <div className='overlay full-width'>
            <div className='dialog-box'>
                
                <p className='dialog-body' onClick={hideDialogBox}>{bodyMessage}</p>
                <button className='dialog-button' onClick={hideDialogBox}>{confirmText}</button>
                <button className='dialog-button cancel-dialog-button'onClick={hideDialogBox}>{cancelText}</button>
            </div>
        </div>
    );
}
