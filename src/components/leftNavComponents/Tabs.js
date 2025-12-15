import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const Tabs = (props) => {
  return (
     <nav className='navbar'>
        <ul className='main-menu'>
          <NavLink
            to='/'
            className={
              props.location.pathname === '/' ? 'header-active-nav' : ''
            }
          >
            <li className='sub-menu'>Personal details</li>
        </NavLink>
        
        <NavLink to='/experience' activeClassName='header-active-nav'>
            <li className='sub-menu'>Work experience</li>
          </NavLink>

          <NavLink to='/education' activeClassName='header-active-nav'>
            <li className='sub-menu'>Education</li>
          </NavLink>

          <NavLink to='/tech' activeClassName='header-active-nav'>
            <li className='sub-menu'>Tech-Stack</li>
          </NavLink>

          <NavLink to='/projects' activeClassName='header-active-nav'>
            <li className='sub-menu'>Personal Projects</li>
          </NavLink>

          <NavLink to='/blogs' activeClassName='header-active-nav'>
            <li className='sub-menu'>Blogs</li>
          </NavLink>
        </ul>
      </nav>
  );
};

export default withRouter(Tabs);
