import { useState } from "react";

import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";
import { projects } from "./data";

const initalState = projects.filter(p => p.type === 'react');

const Works = () => {
  const [selectedProjects, setSelectedProjects] = useState(initalState);
  const [selectedType, setSelectedType] = useState('react');

  function handleMenuChange(type: string) {
      setSelectedProjects(projects.filter(p => p.type === type));
      setSelectedType(type);
  }

  return (
    <div className="page" id="works">
      <Title>Works - Talk is cheap show me the code!</Title>
      <WorksMenu
        items={["react", "express", "golang", "nest"]}
        selected={selectedType}
        clicked={handleMenuChange}
      />
      <div className="row">
        {selectedProjects.map((item) => (
          <div className="column" key={item.sourceCodeLink}>
            <WorkItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
