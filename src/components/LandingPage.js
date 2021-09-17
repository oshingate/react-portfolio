import Dashboard from './Dashboard';
import Main from './Main';
import MobileHeader from './MobileHeader';

const LandingPage = (props) => {
  return (
    <>
      {' '}
      <section>
        <div className='glass-temp flex jcc aic'>
          <MobileHeader />
          <div className='glass flex'>
            <Dashboard />

            <Main />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
