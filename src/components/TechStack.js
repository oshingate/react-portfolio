import data from '../constants/constant';
import Basic from './techStack/Basic';

const TechStack = () => {
  let { basic, frontEnd, backEnd, buildTools, other } = data.techStack[0];

  return (
    <>
      <h2>Tech-Stack</h2>

      <Basic data={basic} title='Basic' />

      <Basic data={frontEnd} title='FrontEnd' />

      <Basic data={backEnd} title='BackEnd' />

      <Basic data={buildTools} title='BuildTools' />

      <Basic data={other} title='Other' />
    </>
  );
};

export default TechStack;
