import data from '../constants/constant';

const Projects = () => {
  let { projects } = data;
  return (
    <>
      <h2>Projects</h2>

      <div className='flex wrap '>
        {projects.map((project) => {
          return (
            <article
              className='card blog-card flex-48 flex-col justify-between'
              key={project.title}
            >
              <div className='posted-on'>
                <span>{project.postedOn}</span>
              </div>
              <div>
                <div className='blog-card__img-div '>
                  <img src={project.image} alt='Blog Img' />
                </div>

                <span className='blog-card__title'>{project.title}</span>

                <p className='blog-card__desc'>{project.desc}</p>
              </div>

              <a href={project.url} target='_blank' rel='noreferrer'>
                Go To Project
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
