import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {

  return (   

<header className="header">
    <nav>
      <div className="left"> <Link to={"home"}><img className='logo' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjppxgyyVy7n2EsqDDbbRvma9Cw1swtIj3uysfTY7Vg&s"  alt="" /></Link></div>
      <div className="right">
        <ul>
          <li><Link className='active'  to="/">Home</Link></li>
          <li><Link className='active'  to="blog">Blog</Link></li>
        </ul>
   

        
      </div>
    </nav>
  </header>

  )
}

export default Navbar
