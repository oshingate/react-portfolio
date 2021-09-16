import { NavLink } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <div className='dashboard flex-30 text-center flex flex-col justify-between'>
      <div className=''>
        <div className='user-img font-0 text-center '>
          <img src='./onkar.jpg' alt='user-img-01' />
        </div>
        <NavLink to='/'>
          <h1 className='user-name'>Onkar Shingate</h1>
        </NavLink>

        <h3>Solapur</h3>
        <h3>Maharashtra</h3>
      </div>

      <nav className='navbar'>
        <ul className='main-menu'>
          <NavLink to='/personal' className='capitalize'>
            <li className='sub-menu'>Personal details</li>
          </NavLink>

          <NavLink to='/education' className='capitalize'>
            <li className='sub-menu'>Education</li>
          </NavLink>

          <NavLink to='/tech' className='capitalize'>
            <li className='sub-menu'>Tech-Stack</li>
          </NavLink>

          <NavLink to='/projects' className='capitalize'>
            <li className='sub-menu'>Personal Projects</li>
          </NavLink>
        </ul>
      </nav>

      <a href='#' className='button btn-primary upper'>
        Download Resume
      </a>
    </div>
  );
};

export default Dashboard;
