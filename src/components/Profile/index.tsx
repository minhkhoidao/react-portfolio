import { useContext } from "react";
import avt from "../../assets/avatar.jpg";
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
        <img src={avt} alt={type} />
      </div>
      <div className="profile__content">
        <div className="profile__title">Dao Minh Khoi</div>
        <span>Software Development</span>
        <SocialLinks />
        <Info>Hanoi, VietNam</Info>
        <Skills />
      </div>
      <div className="profile__contact">
        <a href="#" rel="noreferrer">
          <span>Download CV</span>
        </a>
        <a href="mailto:gogotuyer22@gmail.com">
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
