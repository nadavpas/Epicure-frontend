import { about,googlePlay,appStore } from "../assets/icons";
import '../styles/About.scss'   
function About() {
  return (
    <div className="about-container">
      <div className="about-info">
        <h3>ABOUT US:</h3>
        <span className="article-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          reiciendis natus provident tempore, obcaecati, quae ab eius
          praesentium, amet libero nam ipsa expedita veritatis. Obcaecati labore
          nesciunt laborum eaque accusamus!
        </span>
        <div className="logos">
            <img src={googlePlay} alt="googlePlay" />
            <img src={appStore} alt="appStore" />

        </div>
      </div>
      <div className="about-logo">
        <img src={about} alt="about-logo" />
      </div>
    </div>
  );
}
export default About;
