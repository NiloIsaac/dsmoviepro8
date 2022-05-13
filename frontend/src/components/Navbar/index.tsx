import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css';
function Navbar() {
    return (
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMoviePro</h1>
            <a href="https://github.com/NiloIsaac"></a>
            <div className='Github'>
              <GithubIcon />
             <p className='nome-do-link'>/Nilo Isaac</p>
           </div>
          </div>
        </nav>
      </header>
    )
}
export default Navbar;