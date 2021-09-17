const Basic = (props) => {
  return (
    <div>
      <h3 className='mb-5 about-heading'>{props.title}</h3>

      <div className='flex wrap '>
        {props.data.map((skill) => {
          return (
            <article
              className='media-felx-half card skills-card flex-20 '
              key={skill.name}
            >
              <div className='skills-card__img-div '>
                <img src={skill.image} alt='skill' />
              </div>
              <div className='skills-card__name-div'>
                <span className='skills-card__name'>{skill.name}</span>
              </div>
            </article>
          );
        })}
      </div>
      <hr className='hr' />
    </div>
  );
};

export default Basic;
