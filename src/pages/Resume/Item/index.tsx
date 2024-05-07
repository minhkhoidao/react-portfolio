import { FC } from "react";
import './styles.scss';


interface ResumeItemProps {
  date: string;
  title: string;
  company: string;
  classNames?: string;
  children: React.ReactNode;
}
const Item: FC<ResumeItemProps> = ({
  date,
  title,
  company,
  children,
  classNames = "",
}) => {
  return (
    <div className={`resume-item ${classNames}`}>
      <div className="resume-item__experience">
        <div>
          <div className="resume-item__date">{date}</div>
          <div className="resume-item__company">
            <p>{title}</p>
            <h3>{company}</h3>
          </div>
        </div>
      </div>
      <p className="resume-item__desc">{children}</p>
    </div>
  );
};

export default Item;
