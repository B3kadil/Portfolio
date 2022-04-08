import './Footer.css';
import imgFacebook from './social img/facebook.svg'
import imgGit from './social img/git.svg'
import imgInst from './social img/instagram.svg'
import imgLink from './social img/link.svg'
function Footer() {
  return (
    <footer>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100035755202777"><img src={imgFacebook} alt="" /></a>
        <a href="https://github.com/B3kadil"><img src={imgGit} alt="" /></a>
        <a href="https://www.instagram.com/seeksenbayev/"><img src={imgInst} alt="" /></a>
        <a href="https://www.linkedin.com/in/bekadil-seksenbayev-50b3b7234/"><img src={imgLink} alt="" /></a>
      </div>
    </footer>
  );
}

export default Footer;
