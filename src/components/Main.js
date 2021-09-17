import { Route, Switch } from 'react-router';
import Blogs from './Blogs';

import Education from './Education';
import PersonalInformation from './PersonalInformation';
import Projects from './Projects';
import TechStack from './TechStack';

const Main = () => {
  return (
    <div className='media-flex-70 glass-main flex-70'>
      <Switch>
        <Route exact path='/'>
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

        <Route exact path='/blogs'>
          <Blogs />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
