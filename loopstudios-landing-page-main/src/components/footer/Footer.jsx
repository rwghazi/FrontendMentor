import './Footer.css'
import logo from '../../images/logo.svg'
import fb from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li>
                            <button>About</button>
                        </li>
                        <li>
                            <button>Careers</button>
                        </li>
                        <li>
                            <button>Events</button>
                        </li>
                        <li>
                            <button>Products</button>
                        </li>
                        <li>
                            <button>Support</button>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="social">
                        <li>
                            <img src={fb} alt="" />
                        </li>
                        <li>
                            <img src={twitter} alt="" />
                        </li>
                        <li>
                            <img src={pinterest} alt="" />
                        </li>
                        <li>
                            <img src={instagram} alt="" />
                        </li>
                    </ul>
                    <div className="copyright">
                        &copy; 2021 Loopstudios. All rights reserved.
                        <br />
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                        Coded by <a href="https://github.com/rahmnawghazi">rahmnawghazi</a>.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer