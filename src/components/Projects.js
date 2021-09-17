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
              className='media-flex-48 card blog-card project-card flex-48 flex-col justify-between'
              key={project.title}
            >
              <div className='posted-on'>
                <span>{project.hostedOn}</span>
              </div>
              <div>
                <div className='project-card__img-div '>
                  <iframe
                    title={project.title}
                    width='100%'
                    height='160'
                    src={project.image}
                    frameBorder='0'
                    webkitallowfullscreen='true'
                    mozallowfullscreen='true'
                    allowFullScreen
                  ></iframe>
                </div>

                <span className='project-card__title'>{project.title}</span>
                <div className='tech-stack-div'>
                  <span>Tech Stack Used:-</span>
                  <ul className='flex  wrap'>
                    {project.TechStack.map((tech) => {
                      return (
                        <li key={tech} className='tech'>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <hr />

                <a href={project.url} target='_blank' rel='noreferrer'>
                  Go To Project
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
