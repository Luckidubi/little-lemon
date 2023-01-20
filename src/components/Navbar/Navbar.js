import {useState} from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo.svg"
import hambuger from "../../assets/hambuger.svg"
function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((t) => !t);
  };
  const Menu = () => {
    return (
      <>
  <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
      </>
    );
  };

  return (
    <>
    <nav className='llemon__navbar'>
        <img src={Logo} alt="Little Lemon Logo"/>
        <div className='llemon__navbar-links_container'>
        <ul className="llemon__navbar-links">
<Menu/>
        </ul>
        </div>
        <div className="llemon__navbar-menu">
        {toggleMenu ? (
            <div onClick={handleToggle}>X</div>
          ) : (
            <img src={hambuger} style={{width:"24px", height:"24px"}} alt="hambuger icon" onClick={handleToggle} />
          )}
           {toggleMenu && (
            <div className="llemon__navbar-menu_container scale-up-center">
            <div className="llemon__navbar-menu_container-links">
            <Menu/>
            </div>
         </div>
           )}
        </div>

    </nav>

    </>
  )
}

export default Navbar