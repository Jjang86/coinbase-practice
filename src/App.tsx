import React from 'react';
import './styles.css';
import { BaseHeaderContainer } from './components/baseHeaderBar/baseHeaderContainer';
import { DialogBox } from './components/common/dialogBox'
import { NavBarContainer } from './components/navBar/navBarContainer'
import { TabContext } from './components/common/tabContext';

const App: React.FC = () => {
  return (
    <div className='main'>
      <TabContext>
        <DialogBox>
          <NavBarContainer/>
          <BaseHeaderContainer/>
        </DialogBox>
      </TabContext>
    </div>
  );
};

export default App;
