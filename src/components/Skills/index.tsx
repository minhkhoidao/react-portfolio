import { useContext } from 'react';
import { ThemeContext } from "../../context";
import './styles.scss';

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e:any) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h6>Skills</h6>
            <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} >
                <li id="react" >React</li>
                <li id="redux">Redux</li>
                <li id="node">Node</li>
                <li id="javascript">JavaScript</li>
            </ul>
        </div>
    );
};

export default Skills;