import { withRouter } from 'react-router';
import PersonalInfo from './leftNavComponents/PersonalInfo';
import Tabs from './leftNavComponents/Tabs';

const Dashboard = (props) => {
  return (
    <div className='media-hide  dashboard flex-30 text-center flex flex-col justify-between'>
      <PersonalInfo />

      <Tabs />
      
      <a
        href='./resume.pdf'
        target='_blank'
        rel='noreferrer'
        className='button btn-primary upper'
      >
        <i className='fas fa-cloud-download-alt'></i> Resume
      </a>
    </div>
  );
};

export default withRouter(Dashboard);
