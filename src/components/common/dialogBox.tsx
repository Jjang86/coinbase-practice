import React, { useState, createContext, useContext} from 'react';

import { DialogBoxContents } from './dialogBoxContents';
import './common.css'

interface Props {
    children: any;
}

const UpdateDialogContext = createContext(() => {});
const ShowDialogContext = createContext(false)

export const useUpdateDialogContext = () => {
    return useContext(UpdateDialogContext);
}

export const useShowDialogContext = () => {
    return useContext(ShowDialogContext);
}

export const DialogBox: React.FC<Props> = ({ children }) => {
    const [showDialog, setShowDialog] = useState(false);
    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };

    const dialogBodyMessage = 'WOW';
    const dialogConfirmMessage = 'YAY';
    const dialogCancelMessage = 'OMG';

    return (
        /* 
        This could have been separated into components, but decided to keep it simple for now.
        */
       <ShowDialogContext.Provider value={showDialog}>
           <UpdateDialogContext.Provider value={toggleDialog}>
               { children }
               <div>
                   {showDialog && <DialogBoxContents bodyMessage={dialogBodyMessage} confirmText={dialogConfirmMessage} cancelText={dialogCancelMessage}/>}
               </div>
           </UpdateDialogContext.Provider>
       </ShowDialogContext.Provider>
    );
}
