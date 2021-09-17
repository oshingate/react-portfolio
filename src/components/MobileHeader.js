import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileHeader = () => {
  let [hide, setHide] = useState(false);
  return (
    <>
      <header className='media-flex justify-between'>
        <div className='media-flex jcc aic'>
          <div className='img-div'>
            <img src='./onkar.jpg' alt='userImg' />
          </div>
          <strong>
            Onkar Shingate <br />
            <span>solapur</span>
          </strong>
        </div>

        {!hide ? (
          <i
            className='fas fa-hamburger'
            onClick={() => {
              setHide((prevState) => {
                let glass = document.querySelector('.glass');
                glass.classList.add('media-hide');
                return !prevState;
              });
            }}
          ></i>
        ) : (
          ''
        )}

        {hide ? (
          <div className='header-navs'>
            <div className='media-flex justify-end '>
              <div className='media-flex jcc aic'>
                {' '}
                <i
                  className='fas fa-times-circle'
                  onClick={() => {
                    setHide((prevState) => {
                      let glass = document.querySelector('.glass');
                      glass.classList.remove('media-hide');
                      return !prevState;
                    });
                  }}
                ></i>
              </div>
            </div>
            <nav className='navs'>
              <ul className='main-menu'>
                <NavLink to='/' className='capitalize'>
                  <li className='sub-menu'>Personal details</li>
                </NavLink>

                <NavLink to='/education' className='capitalize'>
                  <li className='sub-menu'>Education</li>
                </NavLink>

                <NavLink to='/tech' className='capitalize'>
                  <li className='sub-menu'>Tech-Stack</li>
                </NavLink>

                <NavLink to='/projects' className='capitalize'>
                  <li className='sub-menu'>Personal Projects</li>
                </NavLink>

                <NavLink to='/blogs' className='capitalize'>
                  <li className='sub-menu'>Blogs</li>
                </NavLink>
              </ul>
            </nav>
          </div>
        ) : (
          ''
        )}
      </header>
    </>
  );
};

export default MobileHeader;
