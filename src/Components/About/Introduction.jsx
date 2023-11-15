import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/me.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Kinoti Dennis </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Juja, Kiambu (Kenya)
                </span>
                . I have completed ny undergraduate degree in (Bsc. Computer Science)
                from{" "}
                <span className="different">
                  Jomo Kenyatta UNiversity of Agriculture and Technology, Juja (Kenya)
                </span>
                . Then I started a full stack development course by{" "}
                <span className="different">Moringa School</span> a type
                coding school.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Innovative{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Car Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gamer{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
