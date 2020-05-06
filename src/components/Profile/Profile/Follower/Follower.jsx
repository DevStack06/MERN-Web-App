import React from "react";
import "../bootsrap.css";
import classes from "../Profile.module.css";
import background from "../../../../img/back.jpeg";
const follower = () => {
  const pic = "rounded-circle  border3 " + classes.pic;
  return (
    <React.Fragment>
      <div class="container pdCon">
        <div class="row">
          <div class="col-sm">
            <div class="row">
              <div className={classes.ProfilePic}>
                <img src={background} alt="pic" class={pic}></img>
              </div>
            </div>
            <div class="row pd2">
              <h5>Balram Rathore</h5>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="card">
              <div class="card-body">
                <div class="container">
                  <div class="row pd4">
                    <div class="col-sm">4</div>
                    <div class="col-sm">10</div>
                    <div class="col-sm">12</div>
                  </div>
                  <div class="row">
                    <div class="col-sm">Follower</div>
                    <div class="col-sm">Following</div>
                    <div class="col-sm">Blogs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default follower;
