import React from "react";
import Intro from "./IntroductionPart/Intro";
import Card from "../../UI/Card/Card";
import classes from "./Profile.module.css";
import background from "../../../img/back.jpeg";
import Follower from "./Follower/Follower";
import "./bootsrap.css";

const Profile = () => {
  return (
    <div className={classes.MiddlePart}>
      <div className={classes.card}>
        <img src={background} alt="background" className={classes.img}></img>
        <div className={classes.p5}>
          <Follower />

          <div class="container">
            <div class="row">
              <div class="col-7">
                <div class="card">
                  <div class="card-body">
                    I am here to help you to fight with your problem lol hhjb
                    jhvgvg jhhvhv hbhj heloo world here is the length
                  </div>
                </div>
              </div>
              {/* <div class="col-sm-1"></div> */}
              <div class="col-5">
                <div class="card">
                  <div class="card-body">
                    I am here to help you to fight with your problem lol hhjb
                    jhvgvg jhhvhv hbhj
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <Intro />
      </Card>
      {/* <div class="card">
        <div class="card-body">
          <Intro />
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
