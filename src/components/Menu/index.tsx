import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./styles.scss";

const Menu = () => {
  return (
    <ul className="menu">
      <Menu.Item name={"person"} link="/#about">
        About
      </Menu.Item>
      <Menu.Item name={"android-list"} link="/resume#resume">
        Resume
      </Menu.Item>
      <Menu.Item name={"paintbrush"} link="/works#works">
        Works
      </Menu.Item>
      <Menu.Item name={"at"} link="/contact#contact">
        Contact
      </Menu.Item>
    </ul>
  );
};

Menu.Item = ({
  link = "#",
  children,
  name,
}: {
  link: string;
  children: React.ReactNode;
  name: string;
}) => (
  <li>
    <NavHashLink smooth to={link} className={"active"}>
      {children}
    </NavHashLink>
  </li>
);

export default Menu;
