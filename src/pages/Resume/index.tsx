import Title from "../common/Title";
import ResumeItem from "./Item";
import "./styles.scss";

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        Resume - Total Commercial Experience 3 years ++
      </Title>
      <ResumeItem
        date={"Nov 2020 - Apr 2022"}
        title={"Software Developer"}
        company={"https://position.exchange/"}
      >
        • Work on front-end with extensive use of React,Nextjs and back-end with
        Nodejs and Golang for developing Web view app <br />
        • Using Redux for state management <br />
        • Using Web3.js for interacting with Ethereum blockchain <br />
        • Develop CSS with SCSS and BEM from sketchs. <br />
        • Participate in the entire application lifecycle, focusing on coding
        and debugging. <br />
        • Craft code that meets company's internal standards for style,
        sustainability, and best practices for a high-scale web environment.
        Maintain and advocate for these standards through code review. <br />
        • Write clean code to develop functional web applications <br />
        • Troubleshoot and debug applications <br />
        • Perform UI tests to optimize performance <br />
        • Manage cutting-edge technologies to improve legacy applications <br />
        • Collaborate with Back-end developers to integrate user-facing elements
        with front-end logic <br />
        • Provide training and support to internal teams <br />
        • Build reusable code and libraries for future use <br />• Liaise with
        developers, designers and clients to identify new features <br />
        <h4 className="text-center">Description</h4>
        <p>
          Our project focuses on developing a decentralized application (DApp)
          on the blockchain platform, creating a reliable and secure
          decentralized exchange (DEX). Our mission is to provide an open,
          transparent, and trustless trading platform for the blockchain
          community. • Key features of the project include: Decentralized
          Trading: Allowing users to exchange cryptocurrencies directly without
          the need for intermediaries.
          <br />
          • Safety and Security: Utilizing blockchain technology and encryption
          protocols to ensure the security and safety of users' transactions and
          assets.
          <br />
          • User-Friendly Interface: Designing a user-friendly and intuitive
          interface to provide the best trading experience for users.
          <br />• Support for Various Cryptocurrencies: Supporting the trading
          of various popular and diverse cryptocurrencies on the market.
        </p>
      </ResumeItem>
      <ResumeItem
        date={"Apr 2022 – present"}
        title={"Software Engineer"}
        company={"https://telio.vn/vi/"}
      >
        • Work on front-end with extensive use of React and back-end with Nodejs
        and Golang for developing Web view app <br />
        • Develop CSS with SCSS and BEM from sketchs. <br />
        • Participate in the entire application lifecycle, focusing on coding
        and debugging. <br />
        • Craft code that meets company's internal standards for style,
        sustainability, and best practices for a high-scale web environment.
        Maintain and advocate for these standards through code review. <br />
        • Write clean code to develop functional web applications <br />
        • Troubleshoot and debug applications <br />
        • Perform UI tests to optimize performance <br />
        • Manage cutting-edge technologies to improve legacy applications <br />
        • Collaborate with Back-end developers to integrate user-facing elements
        with front-end logic <br />
        • Build reusable code and libraries for future use <br />• Liaise with
        developers, designers and clients to identify new features <br />
        <h4 className="text-center">Description</h4>
        <p>
          Utilizing data technology to develop the largest B2B e-commerce
          platform in Vietnam, connects small-scale, traditional retailers with
          brands and wholesalers on a centralized platform. By aggregating
          demand, can provide small retailers with more options, better prices,
          and more efficient logistics through economies of scale. This project
          aims to revolutionize B2B commerce in Vietnam by leveraging
          data-driven insights to streamline connections between retailers and
          suppliers. This platform offers small retailers a diverse array of
          products, competitive pricing, and efficient backend support, all
          facilitated by the platform's economies of scale.
        </p>
      </ResumeItem>

      <Title icon={"fa fa-university"}>Education</Title>
      <ResumeItem
        date={"2017 – 2021"}
        title={"Hanoi Open University"}
        company={""}
      >
        Bachelor's Degree in Software Engineering
      </ResumeItem>
    </div>
  );
};

export default Resume;
