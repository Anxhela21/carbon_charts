import React, {Component} from 'react';
import './styles.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import QuadrantHeader from './components/QuadrantHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import FinancialQuad from "./content/FinancialQuad";
import  PeopleQuad from "./content/PeopleQuad";
import ProcessQuad from "./content/ProcessQuad";
import ClientQuad from "./content/ClientQuad";
import TestProcess from "./content/TestProcess";


class App extends Component {
    render() {
      return (
        <>
        <QuadrantHeader />
          <Content>
            <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path= "/financial" component= {FinancialQuad} />
            <Route path= "/process" component= {ProcessQuad} />
            <Route path= "/people" component= {PeopleQuad} />
            <Route path= "/client" component= {ClientQuad} />
            <Route path= "/test" component= {TestProcess} />
            </Switch>
          </Content>
        </>
        
      );
    }
  }
  
  export default App;