import data from '../../constants/constant';

const Certifiacation = () => {
  return (
    <div className='mb-5'>
      <h3 className='mb-5 about-heading'>Certificates</h3>

      <div className='flex-col '>
        {data.certifiacates.map((certificate) => {
          return (
            <article className='card education-card' key={certificate.title}>
              <a href={certificate.link} target='_blank' rel='noreferrer'>
                <h4 className='education-card__title certificate-title'>
                  {certificate.title}
                </h4>
              </a>
              <span className='education-card__desc'>{certificate.by}</span>
              <span className='education-card__credential'>
                {' '}
                Credential ID:- {certificate.credentialId}
              </span>
              <span className='education-card__date'>
                {certificate.expiary}
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Certifiacation;
