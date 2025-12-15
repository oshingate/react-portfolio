import data from "../../constants/constant";

const Work = () => {
  return (
    <div className="mb-5">
      <div className="flex-col ">
        {data.experienceData.map((experience) => {
          return (
            <article
              className="card education-card"
              key={experience.companyName}
            >
              <a href={experience.link} target="_blank" rel="noreferrer">
                <h4 className="education-card__title certificate-title">
                  {experience.companyName}
                </h4>
              </a>
              <span className="education-card__credential">
                {experience.experience}
              </span>

              <span className="work-card__stack">Tech Used :-</span>

              <span className="education-card__desc">
                {experience.techStackUsed}
              </span>

              <span className="work-card__stack">Summary :-</span>

              <span className="education-card__desc">{experience.summary}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
