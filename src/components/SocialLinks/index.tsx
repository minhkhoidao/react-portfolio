import "./styles.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social">
      <SocialLinks.Link
        url={"https://github.com/minhkhoidao"}
        icon={FaGithub}
      />
      <SocialLinks.Link
        url={"https://www.linkedin.com/in/khoi-dao-577193205/"}
        icon={FaLinkedin}
      />
      <SocialLinks.Link url={"https://t.me/smoky2812"} icon={FaTelegram} />
      <SocialLinks.Link
        url={"https://join.skype.com/invite/UjTJYuRHrwOU"}
        icon={FaSkype}
      />
    </div>
  );
};

SocialLinks.Link = ({
  url,
  icon: Icon,
}: {
  url: string;
  icon: React.FC;
}) => (
  <a href={url} target="_blank">
    <span>
      <Icon />
    </span>
  </a>
);

export default SocialLinks;
