import React, { useState, createContext, useContext, Dispatch, SetStateAction} from 'react';

import { DialogBoxContents } from './dialogBoxContents';
import './common.css'

interface Props {
    children: any;
}

interface Context {
    show: [boolean, Dispatch<SetStateAction<boolean>>];
    bodyMessage: [string, Dispatch<SetStateAction<string>>];
    confirmText: [string, Dispatch<SetStateAction<string>>];
    cancelText: [string, Dispatch<SetStateAction<string>>];
    toggleDialog: () => void;
    updateMessages: (bodyMessage: string, confirmMessage: string, cancelMessage: string) => void;
}

const ShowDialogContext = createContext<Context | null>(null)

export const useShowDialogContext = (): Context | null =>  {
    return useContext(ShowDialogContext);
}

export const DialogBox: React.FC<Props> = ({ children }) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [dialogBodyMessage, setDialogBodyMessage] = useState<string>('WOW');
    const [dialogConfirmMessage, setDialogConfirmMessage] = useState<string>('LOL');
    const [dialogCancelMessage, setDialogCancelMessage] = useState<string>('OKAY');
    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };
    const updateMessages = (bodyMessage: string, confirmMessage: string, cancelMessage: string) => {
        setDialogBodyMessage(bodyMessage);
        setDialogConfirmMessage(confirmMessage);
        setDialogCancelMessage(cancelMessage);
    }

    return (
       <ShowDialogContext.Provider value={{
           'show': [showDialog, setShowDialog],
           'bodyMessage': [dialogBodyMessage, setDialogBodyMessage],
           'confirmText': [dialogConfirmMessage, setDialogConfirmMessage], 
           'cancelText': [dialogCancelMessage, setDialogCancelMessage],
           'toggleDialog': toggleDialog,
           'updateMessages': updateMessages
        }}>
               { children }
               <div>
                   {showDialog && <DialogBoxContents/>}
               </div>
       </ShowDialogContext.Provider>
    );
}
