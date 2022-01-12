import React from "react";
import ProfileFunc from "./ProfileFunc";
import loader from "../../assets/loader.svg";

export default class Profile extends React.Component {
  state = {
    localStatus: "",
  };
  clearLocalStatus = () => {
    this.setState({ localStatus: "" });
  };
  setLocalState = (payload) => {
    this.setState({ localStatus: payload });
  };
  componentDidMount() {
    this.props.updateBgImg(
      "https://image.winudf.com/v2/image/Y29tLkZ1bkdhbWVzMTAuU3BhY2VzaGlwX3NjcmVlbnNob3RzXzBfZmQ1NWY3ZDY/screen-0.jpg?fakeurl=1&type=.jpg"
    );
    this.props.thunkProfile();
    this.props.updateStatusOnPage();
  }

  render() {
    if (!this.props.myProfile) {
      return <img src={loader} alt="spinner" className="loader"></img>;
    }
    return (
      <ProfileFunc
        //status start
        // local
        statusLocal={this.state.localStatus}
        setLocalState={this.setLocalState}
        clearLocalStatus={this.clearLocalStatus}
        // local end
        statusOnChange={this.props.setStatus}
        statusState={this.props.status}
        setStatusToApi={this.props.setStatusThunk}
        //status end
        avatar={this.props.avatar}
        myPosts={this.props.myPosts}
        textFromState={this.props.textFromState}
        myProfile={this.props.myProfile}
        backgroundImage={this.props.backgroundImage}
        github={this.props.github}
        addPostType={this.props.addPostType}
      />
    );
  }
}
