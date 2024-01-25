
import { NavLink } from 'react-router-dom'
import'./Navbar.css'
import logo from "../assets/logo.jpg"
const Navbar = () => {
  return (
    <>
    <div id='next'>
      <div className='Tostify'></div>
      <div>
        <div className='header'>
          <div className='header_top'>
            <div className='banner_logo'>

              <NavLink to="">
                <img src="/"alt="fb" />
              </NavLink>

              <NavLink to="">
                <img src="/"alt="ig" />
              </NavLink>

              <NavLink to="">
                <img src="/"alt="wa" />
              </NavLink>

            </div>
            <div className='banner_information'>
              
              <div className='banner_phone flex '>
              <NavLink className="banner_text--phone" to="/" > +9779765726980

                    </NavLink>
              </div>
              <div className='banner_email flex'>
              <NavLink className="banner_text" to="/" > rajusnzsnz@gmail.com

               </NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='header_bottom'>
        <div className='nav'>
          <div className='nav_logo div'>
            <div className='nav_logo--container'>
           <NavLink to="/">
            <img  className="logo"src={logo} alt="logo" />
           </NavLink>
            </div>
          </div>


          <div className='nav_list--item'>

          <div className="nav__list">
            <div className="nav__item">
              <span className="nav__text selectednav">Home</span>
              </div>
              <div className="nav__item--category"><span className="nav__text">Categories</span>
              </div>
              <div className="nav__item"><span className="nav__text ">Brands</span>
              </div>
              <div className="nav__item"><span className="nav__text ">Adoption</span>
              </div>
              <div className="nav__item"><span className="nav__text ">Product</span>
              </div>
              <div className="nav__item--service"><span className="nav__text ">Services</span>
              </div>

              </div>

              <div className='nav_item flex'>
                <div>
                  <div className='nav_search'>
                  </div>
                  <div className='badge_wrapper'>
                  <span className="badge__icon--bag">
                  
                    <div className="badge__icon--bag--icon">
                      
                                </div>
                                <div className="badge__icon--bag--text">
                                  <div className="badge__icon--bag--number">0</div>
                                  </div>
                                 
                                  </span>
                                  <span class="badge__icon--heart" >
                                  <div class="badge__icon--heart--text">
                                    <span class="badge__icon--heart--number">0</span>
                                  </div>
                                  </span>
                                  <div class="nav__notification">
                                    <div class="badge__icon--heart">
                                      
                                        </div>
                                        </div>



                  </div>
                  <div className='badge_icon--user'>

                  </div>
                  <div class="badge__icon--bar">
                    <div><i class="fa-regular fa-bars"></i>
                    </div>
                    </div>

                </div>


              </div>

          </div>

          
        </div>
      </div>
        </div>
   
    </>

  )
}

export default Navbar
