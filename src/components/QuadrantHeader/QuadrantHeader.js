import { Link } from 'react-router-dom';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import React from 'react';
import {
    Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  } from "carbon-components-react/lib/components/UIShell";


const QuadrantHeader = () => (


        <Header aria-label="IBM Platform Name">
            <SkipToContent />
          <HeaderName element={Link} to="/" prefix="IBM">
            [Quadrant Platform]
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Quadrant Platform]">
            <HeaderMenuItem element= {Link} to="/financial">
               Financial Quadrant
               </HeaderMenuItem>
               <HeaderMenuItem element= {Link} to="/process">
               Process Quadrant
               </HeaderMenuItem>
               <HeaderMenuItem element= {Link} to="/people">
               People Quadrant
               </HeaderMenuItem>
               <HeaderMenuItem element= {Link} to="/client">
               Client Quadrant
               </HeaderMenuItem>
               <HeaderMenuItem element= {Link} to="/test">
               Test Quadrant
               </HeaderMenuItem>
           </HeaderNavigation>


    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>

    );
    
    export default QuadrantHeader;