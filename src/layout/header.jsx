function Header() {
  return (
    <nav className=' pink lighten-3'>
      <div className="container">
        <div className='nav-wrapper'>
          <a href="!#" className='search brand-logo'>Search Movies</a>
          <ul id='nav-mobile' className='restart right hide-on-med-and-down'>
            <li>
              <a href="!#">Movie catalog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export { Header };