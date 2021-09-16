import Dashboard from './Dashboard';
import Main from './Main';

const LandingPage = (props) => {
  return (
    <>
      {' '}
      <section>
        <div className='glass-temp flex jcc aic'>
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
