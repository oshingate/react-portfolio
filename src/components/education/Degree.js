import data from '../../constants/constant';

const Degree = () => {
  return (
    <div>
      <h3 className='mb-5 about-heading'>Education</h3>

      <div className='flex-col '>
        {data.educationData.map((elem) => {
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
