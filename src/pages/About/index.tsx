import Title from "../common/Title";
import "./styles.scss";

const About = () => {
  return (
    <div className="page" id="about">
      <Title>About Me</Title>
      <div className="row">
        <div className="column">
          <strong>Hi, I am Khoi</strong>
          <p>
            Self-taught, self-driven, passionate learner and developer focusing
            on React, Node, and Golang Technologies. Looking forward to working
            with ingenious teams on challenging projects.
            <br /> <br />
            I’m an easy going person that works well with everyone. I enjoy
            being around different types of people and I like to always
            challenge myself to improve at everything I do.
            <br />
            <br />I have a great passion for learning languages and exploring
            the world and also programming. I have always loved technology and
            programming. And this is my profession now.
          </p>
        </div>
      </div>
      <Title>My philosophy of programming</Title>
      <div className="row">
        <div className="column">
          <p>
            I possess expertise in Client-Server architecture, Golang, and
            JavaScript. With a profound comprehension of JavaScript's workings
            and Golang's working. I strongly believe that having a solid
            understanding of core technologies allows developers to master at
            any frameworks.
          </p>
        </div>
      </div>
      <Title>Highlights of Qualifications</Title>
      <div className="row">
        <div className="column">
          <ul>
            <li>Understanding of how JavaScript work</li>
            <li>Understanding of Concurrency in Golang</li>
            <li>Hungry and eager to learn</li>
            <li>Ability to learn rapidly</li>
            <li>Follow emerge technologies</li>
            <li>
              Excellent coding and code review experience. Clear
              structure,standardized naming, strong logic, low code redundancy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
