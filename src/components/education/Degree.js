const Degree = () => {
  let educationData = [
    {
      title: 'AltCampus, Dharamashala',
      desc: 'Bootcamp (MERN Stack)',
      date: 'Feb 2021 - Aug 2021',
    },
    {
      title: 'Sinhgad Institute Of Technology, Lonavala',
      desc: 'B.E. (Computer Science)',
      date: 'Jun 2014 - May 2019',
    },
    {
      title: ' A. D. Joshi Jr. college, Solapur',
      desc: '12th (HSC)',
      date: 'Jun 2013 - May 2014',
    },
  ];
  return (
    <div>
      <h3 className='mb-5 about-heading'>Education</h3>

      <div className='flex-col '>
        {educationData.map((elem) => {
          return (
            <article className='card education-card' key={elem.title}>
              <h4 className='education-card__title'>{elem.title}</h4>
              <span className='education-card__desc'>{elem.desc}</span>
              <span className='education-card__date'>{elem.date}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Degree;
