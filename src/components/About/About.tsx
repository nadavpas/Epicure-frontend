import { about, googlePlay, appStore } from "../../assets/Icons";
import "../../styles/About.scss";
import "../../App.scss";
function About() {
  const RenderText = () => {
    return (
      <div className="article-text">
        <span className="body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          reiciendis natus provident tempore, obcaecati, quae ab eius
          praesentium, amet libero nam ipsa expedita veritatis. Obcaecati labore
          nesciunt laborum eaque accusamus!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          reiciendis natus provident tempore, obcaecati, quae
        </span>
      </div>
    );
  };
  const RenderLogos = () => {
    return (
      <div className="logos">
        <img src={appStore} alt="appStore" />
        <img src={googlePlay} alt="googlePlay" />
      </div>
    );
  };
  return (
    <div className="about-container">
      <div className="about-info">
        <span className="h1">ABOUT US:</span>
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
