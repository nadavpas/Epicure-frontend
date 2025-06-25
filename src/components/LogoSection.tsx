import { logoIcon } from "../assets/Icons"
import '../styles/LogoSection.scss'
function LogoSection(){
    return(
        <div>
          <img src={logoIcon} alt="logo-icon" />
          <span>EPICURE</span>
        </div>
    )
}
export default LogoSection