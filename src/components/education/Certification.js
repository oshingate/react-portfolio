const Certifiacation = () => {
  const data = [
    {
      link: 'https://cutshort.io/certificate/55947',
      title: 'CutShort Certified Javascript - Advanced',
      by: 'CutShort',
      credentialId: '55947',
      expiary: 'Sept 2021 - Sept 2022',
    },
    {
      link: 'https://freecodecamp.org/certification/fcc1ab6ffa3-0779-46e3-834f-aa48f358e083/javascript-algorithms-and-data-structures',
      title: 'JavaScript Algorithms and Data Structures',
      by: 'freeCodeCamp',
      credentialId: 'fcc1ab6ffa3-0779-46e3-834f-aa48f358e083',
      expiary: 'Aug 2021 - No Exp.',
    },
    {
      link: 'https://www.linkedin.com/company/mindscripts-tech/',
      title: '  Angular 6/7',
      by: 'MindScripts Tech',
      credentialId: 'ANG24AUG2019WD0800-PS-7032',
      expiary: 'Oct 2019 - No Exp.',
    },
    {
      link: 'https://www.linkedin.com/company/mindscripts-tech/',
      title: 'Diploma in Java',
      by: 'MindScripts Tech',
      credentialId: 'DIJ12AUG20190400-PS-3533',
      expiary: 'Oct 2019 - No Exp.',
    },
    {
      link: 'https://www.udemy.com/certificate/UC-b1ac32a4-82f6-45b8-b64c-a9d905e49b82/',
      title: 'HTML 5',
      by: 'Udemy',
      credentialId: 'UC-b1ac32a4-82f6-45b8-b64c-a9d905e49b82',
      expiary: 'Oct 2020 - No Exp.',
    },
    {
      link: 'https://media-exp1.licdn.com/dms/image/C4E22AQE9LuWBKmdLnQ/feedshare-shrink_800/0/1621346780027?e=1634774400&v=beta&t=KNWqqCh-2QuQeqCx5Hyb1Kp1ffAu_w3HmSrKWw5OS9o',
      title: 'Hackathon by GitHub',
      by: 'GitHub',
      credentialId: 'altcampus21547ash',
      expiary: 'Oct 2020 - No Exp.',
    },
  ];
  return (
    <div className='mb-5'>
      <h3 className='mb-5 about-heading'>Certificates</h3>

      <div className='flex-col '>
        {data.map((certificate) => {
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
