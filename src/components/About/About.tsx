import { about, googlePlay, appStore } from "../../assets/Icons";
import "../../styles/About.scss";
import '../../App.scss'
function About() {
  const RenderText = () => {
    return (
      <span className="body-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        reiciendis natus provident tempore, obcaecati, quae ab eius praesentium,
        amet libero nam ipsa expedita veritatis. Obcaecati labore nesciunt
        laborum eaque accusamus!
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        reiciendis natus provident tempore, obcaecati, quae
      </span>
    );
  };
  const RenderLogos = () => {
    return (
      <div className="logos">
        <img src={googlePlay} alt="googlePlay" />
        <img src={appStore} alt="appStore" />
      </div>
    );
  };
  return (
    <div className="about-container">
      <div className="about-info">
        <h3 className="h1">ABOUT US:</h3>
        {RenderText()}
        <br />
        {RenderLogos()}
      </div>
      <div className="about-logo">
        <img src={about} alt="about-logo" />
      </div>
    </div>
  );
}
export default About;
