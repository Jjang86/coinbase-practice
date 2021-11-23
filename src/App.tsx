import React from 'react';
import './styles.css';
import { NavBarContainer } from './components/navBar/NavBarContainer';
import { BaseHeaderContainer } from './components/baseHeaderBar/baseHeaderContainer';

const App: React.FC = () => {
  const [activeTabName, setActiveTabName] = React.useState('Assets')
  function changeTabName(tabName: string) {
      setActiveTabName(tabName);
  }
  return (
    <div className='main'>
      <NavBarContainer
        passTabNameToMain={changeTabName}
      />
      <BaseHeaderContainer tabName={ activeTabName }/>
    </div>
  );
};

export default App;
