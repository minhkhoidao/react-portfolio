import { useContext } from "react";
import js from "../../assets/js.png";
import { ThemeContext } from "../../context";
import { useAnimation } from "../../hooks/useAnimation";
import Info from "../Info";
import Skills from "../Skills";
import SocialLinks from "../SocialLinks";
import "./styles.scss";

const Profile = () => {
  const { backgroundImage, type } = useContext(ThemeContext);
  const { animation } = useAnimation();
  return (
    <div className="profile">
      <div className="profile__banner">
        <div
          className={`profile__photo ${animation}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <img src={js} alt={type} />
      </div>
      <div className="profile__content">
        <div className="profile__title">Dao Minh Khoi</div>
        <span>Software Development</span>
        <SocialLinks />
        <Info icon="location">Hanoi, VietNam</Info>
        <Skills />
      </div>
      <div className="profile__contact">
        <a
          href="#"
          rel="noreferrer"
        >
          <span>Download CV</span>
        </a>
        <a href="#">
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
