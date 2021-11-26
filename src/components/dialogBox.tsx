import React from 'react';

interface Props {
    showDialog: (show: boolean) => void;
    bodyMessage: string;
    confirmText: string;
    cancelText: string;
}
 
export const DialogBox: React.FC<Props> = ({ showDialog, bodyMessage, confirmText, cancelText}) => {
    return (
        <div className='overlay full-width'>
            <div className='dialog-box'>
                <p className='dialog-body'>{bodyMessage}</p>
                <button className='dialog-button' onClick={() => showDialog(false)}>{confirmText}</button>
                <button className='dialog-button cancel-dialog-button'onClick={() => showDialog(false)}>{cancelText}</button>
            </div>
        </div>
    );
}
