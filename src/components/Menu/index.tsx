import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./styles.scss";
import { IoIosPerson } from "react-icons/io";
import { IoMdListBox } from "react-icons/io";
import { IoIosBrush } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

const Menu = () => {
  return (
    <ul className="menu">
      <Menu.Item link="/#about" icon={IoIosPerson}>
        About
      </Menu.Item>
      <Menu.Item link="/resume#resume" icon={IoMdListBox}>
        Resume
      </Menu.Item>
      <Menu.Item link="/works#works" icon={IoIosBrush}>
        Works
      </Menu.Item>
      <Menu.Item link="/contact#contact" icon={IoMdContact}>
        Contact
      </Menu.Item>
    </ul>
  );
};

Menu.Item = ({
  link = "#",
  children,
  icon: Icon,
}: {
  link: string;
  children: React.ReactNode;
  icon: React.FC;
}) => (
  <li>
    <NavHashLink smooth to={link}>
      <span>
        <Icon />
      </span>
      {children}
    </NavHashLink>
  </li>
);

export default Menu;
