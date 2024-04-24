import React, { FC } from "react";
import "./styles.scss";

interface InfoProps {
  icon: string;
  children: React.ReactNode;
}

const Info: FC<InfoProps> = ({ icon, children }) => {
  return (
    <div className="info">
      <div className="property">
        <i className={`ion-ios-${icon}`} />
        <strong>{icon}:</strong>
      </div>
      <span>{children}</span>
    </div>
  );
};

export default Info;
