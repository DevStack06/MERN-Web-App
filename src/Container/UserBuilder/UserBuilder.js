import React from "react";
import SignIn from "../../components/AuthUser/Login";
import SignUp from "../../components/AuthUser/Signup";
import Modal from "../../components/UI/Modal/Modal";
const userBuilder = (props) => {
  let page = null;
  if (props.pageType === "signup" && props.pageShow) {
    page = (
      <Modal show={props.pageShow} modalClosed={props.popUpCancelHandler}>
        <SignUp />
      </Modal>
    );
  } else if (props.pageType === "signin" && props.pageShow) {
    page = (
      <Modal show={props.pageShow} modalClosed={props.popUpCancelHandler}>
        <SignIn />
      </Modal>
    );
  }

  return <React.Fragment>{page} </React.Fragment>;
};

export default userBuilder;
