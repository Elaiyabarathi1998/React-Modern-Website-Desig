import React from 'react'
import {Link} from 'react-router-dom'
import ima1 from '../component/iconsimages/uxuiicon.png'
import ima2 from '../component/iconsimages/webdesign.png'
import ima3 from '../component/iconsimages/app-dev.jpg'
import './sliderbox.js'
import slider1 from '../component/sliderimg/1.jpg'
import slider2 from '../component/sliderimg/2.jpg'
import slider3 from '../component/sliderimg/3.jpg'
import slider4 from '../component/sliderimg/4.jpg'
import slider5 from '../component/sliderimg/5.jpg'
const Navbar = () => {

    return(
        <div class="bigcontainer">
        <div className='nav'>
        <div>

            <h2 class="logo"><span>Sa</span>jibur<br></br><span> &nbsp; &nbsp; &nbsp;  &nbsp;Sa</span>gar</h2>

            <nav className='item' >

                <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/careers'>Service</Link>
                </li>
                
                <li>
                    <Link to='/projects'>Resourses</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact us</Link>
                </li>
                <li>
                    <Link to='/forms'>Register</Link>
                </li>


                </ul>
            </nav>
        </div>
        </div>
        <div class="imabox">
        <div class="img-slider">
            <div class="slide active">
              <img src={slider1} alt=""/>
              <div class="info">
                <h2>Slide 01</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="slide">
              <img src={slider2} alt=""/>
              <div class="info">
                <h2>Slide 02</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="slide">
              <img src={slider3} alt=""/>
              <div class="info">
                <h2>Slide 03</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="slide">
              <img src={slider4} alt=""/>
              <div class="info">
                <h2>Slide 04</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="slide">
              <img src={slider5} alt=""/>
              <div class="info">
                <h2>Slide 05</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="navigation">
              <div class="btn active"></div>
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
        </div>
        <p class="paraone"><span>Learn at the <br></br>comfort</span> of your <br></br> own home.</p>
        <p class="paratwo">It is a long established fact that a reader will be distracted by the <br></br>readable content of a page when looking at its layout </p>
    <div>
    <label class="enterbox">
        <input type="text" name="" placeholder="Enter Your E-mail"/>
    </label>
    <button class="enterbutton"> Enter </button> 
    </div>

    <div class="team_section">
        <div class="container">
        <div class="team">
                <div class="img">
                    <img src={ima1} alt="error"/>
                </div>
                <h3>UI UX Design</h3>
                <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem.</p>
                <button classname="learnmore">
                    Learnmore
                </button>
        </div>
        <div class="team">
                <div class="img">
                    <img src={ima2} alt="error"/>
                </div>
                <h3>Web Design</h3>
                <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem.</p>
                <button classname="learnmore">
                    Learnmore
                </button>
            </div>
            <div class="team">
                <div class="img">
                    <img src={ima3} alt="error"/>
                </div>
                <h3>App Design</h3>
                <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem.</p>
                <button classname="learnmore">
                    Learnmore
                </button>
            </div>
        </div>
    </div>
        </div>
        
    )

}

export default Navbar