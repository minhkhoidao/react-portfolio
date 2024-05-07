import React, { FC } from "react";
import "./styles.scss";
import { IoLocation } from "react-icons/io5";

interface InfoProps {
  children: React.ReactNode;
}

const Info: FC<InfoProps> = ({ children }) => {
  return (
    <div className="info">
      <div className="property">
        <i>
          <IoLocation />
        </i>
        <strong>Location:</strong>
      </div>
      <span>{children}</span>
    </div>
  );
};

export default Info;
