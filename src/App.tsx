import React, { useState, useCallback } from 'react';
import './styles.css';
import { NavBarContainer } from './components/navBar/NavBarContainer';
import { BaseHeaderContainer } from './components/baseHeaderBar/baseHeaderContainer';
import {DialogBox} from './components/dialogBox'

const App: React.FC = () => {
  const [activeTabName, setActiveTabName] = useState('Assets');
  const updatedActiveTabName = useCallback((tabName: string) => {
    setActiveTabName(tabName);
  },[activeTabName]);


  const [dialogBodyMessage, setDialogBodyMessage] = useState('');
  const [dialogConfirmMessage, setDialogConfirmMessage] = useState('');
  const [dialogCancelMessage, setDialogCancelMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const showDialogBox = useCallback((show: boolean, bodyMessage: string, confirmMessage: string, cancelMessage: string) => {
    setShowDialog(show);
    setDialogBodyMessage(bodyMessage);
    setDialogConfirmMessage(confirmMessage);
    setDialogCancelMessage(cancelMessage);
  }, [showDialog, dialogBodyMessage, dialogConfirmMessage, dialogCancelMessage]);



  return (
    <div className='main'>
      <NavBarContainer
        passTabNameToMain={updatedActiveTabName}
      />
      <BaseHeaderContainer
        showDialog={showDialogBox}
        tabName={ activeTabName }
      />
      {showDialog && <DialogBox showDialog={setShowDialog} bodyMessage={dialogBodyMessage} confirmText={dialogConfirmMessage} cancelText={dialogCancelMessage} />}
    </div>
  );
};

export default App;
