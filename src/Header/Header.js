
import './Header.css';

function Header() {
  return (
   <header>
       <div className="menu">
           <a href="#" className='menu-works'><p>Works</p></a>
           <a href="#" className='menu-blog'><p>Blog</p></a>
           <a href="#" className='menu-contact'><p>Contact</p></a>
       </div>
   </header>
  );
}

export default Header;
