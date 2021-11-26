import React, {useRef, useEffect, createRef} from 'react';
import { TripleTabs } from './tripleTabs';
import './common.css'

interface Props {
    showDialog: (show: boolean) => void;
    bodyMessage: string;
    confirmText: string;
    cancelText: string;
}

export const DialogBox: React.FC<Props> = ({ showDialog, bodyMessage, confirmText, cancelText}) => {
    const useOutsideAlerter = (ref: React.MutableRefObject<any>, hideDialog: () => void) => {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    hideDialog();
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [ref])
    }

    const hideDialogBox = () => {showDialog(false)}
    const dialogRef = useRef(null);
    useOutsideAlerter(dialogRef, hideDialogBox);

    return (
        /* 
        This could have been separated into components, but decided to keep it simple for now.
        */
        <div className='overlay center-center full-width'>
            <div ref={dialogRef} className='dialog-box'>
                <TripleTabs firstTabName='Buy' secondTabName='Sell' thirdTabName='Convert'/>
                <div className='center-center dialog-body'>
                    <p className='center-center dialog-body-message' onClick={hideDialogBox}>{bodyMessage}</p>
                </div>
                <div className='dialog-footer'>
                    <button className='dialog-button' onClick={hideDialogBox}>{confirmText}</button>
                    <button className='dialog-button cancel-dialog-button'onClick={hideDialogBox}>{cancelText}</button>
                </div>
            </div>
        </div>
    );
}
