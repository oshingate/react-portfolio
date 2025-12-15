import { withRouter } from 'react-router';

const PersonalInfo = () => {
  return (
  <div className=''>
        <div className='user-img font-0 text-center '>
          <img src='./onkar.jpg' alt='user-img-01' />
        </div>

        <h1 className='user-name'>Onkar Shingate</h1>

        <h3>Pune, Maharashtra</h3>
        <nav className='flex jcc aic'>
          <ul className='flex dashboard-nav'>
            <li>
              <a
                href='https://github.com/oshingate'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <i class='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/oshingate/'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/onkarshingate2'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>

            <li>
              <a
                href='https://oshingate.medium.com/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-medium'></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default withRouter(PersonalInfo);
