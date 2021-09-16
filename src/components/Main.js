import { Route, Switch } from 'react-router';
import AboutMe from './AboutMe';
import Education from './Education';
import PersonalInformation from './PersonalInformation';
import Projects from './Projects';
import TechStack from './TechStack';

const Main = () => {
  return (
    <div className='glass-main flex-70'>
      <Switch>
        <Route exact path='/'>
          <AboutMe />
        </Route>
        <Route exact path='/personal'>
          <PersonalInformation />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
        <Route exact path='/tech'>
          <TechStack />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
