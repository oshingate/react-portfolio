import data from '../constants/constant';

const Blogs = () => {
  let { blogPosts } = data;

  return (
    <>
      <h2>Blogs</h2>

      <div className='flex wrap '>
        {blogPosts.map((blog) => {
          return (
            <article
              className='media-flex-48 card blog-card flex-48 flex-col justify-between'
              key={blog.title}
            >
              <div className='posted-on'>
                <span>{blog.postedOn}</span>
              </div>
              <div>
                <div className='blog-card__img-div '>
                  <img src={blog.image} alt='Blog Img' />
                </div>

                <span className='blog-card__title'>{blog.title}</span>

                <p className='blog-card__desc'>{blog.desc}</p>
              </div>

              <div>
                <hr />
                <a href={blog.url} target='_blank' rel='noreferrer'>
                  Read More
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
