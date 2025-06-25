import { logoIcon } from '../assets/Icons'
import '../styles/LogoSection.scss'
const LogoSection:React.FC = () => {
    return(
        <div>
          <img src={logoIcon} alt="logo-icon" />
          <span>EPICURE</span>
        </div>
    )
}
export default LogoSection