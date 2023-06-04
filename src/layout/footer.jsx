function Footer(){
  return <footer className='page-footer  pink lighten-3'>
    <div className="footer-copyright">
      <div className='container'>
        {new Date().getFullYear}
        <img src={require('../photos/onerog.png')} alt="#" width="100px" height="100px"/>
        <a href="#!" className="max grey-text text-lighten-4 right">
          Dinara Akhmetshina
        </a>
      </div>
    </div>
  </footer>
}
export { Footer };