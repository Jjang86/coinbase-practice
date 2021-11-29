import React, { useState, useCallback } from 'react';
import './styles.css';
import { BaseHeaderContainer } from './components/baseHeaderBar/baseHeaderContainer';
import {DialogBox} from './components/common/dialogBox'
import {NavBarContainer} from './components/navBar/navBarContainer'

const App: React.FC = () => {
  const [activeTabName, setActiveTabName] = useState('Assets');
  const updatedActiveTabName = useCallback((tabName: string) => {
    setActiveTabName(tabName);
  },[]);

  return (
    <div className='main'>
      <DialogBox>
        <NavBarContainer passTabNameToMain={updatedActiveTabName} />
        <BaseHeaderContainer tabName={ activeTabName } />
      </DialogBox>
    </div>
  );
};

export default App;
