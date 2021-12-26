import { React, Component } from "react";
import ProfileFunc from "./ProfileFunc";
import loader from "../../assets/loader.svg";
import usersApi from "../../api/api";

export default class Profile extends Component {
  componentDidMount() {
    usersApi.getSelfAccount().then((res) => {
      this.props.updateProfile(res);
      this.props.updateAvatar(res.photos.large);
      this.props.updateGithub(res.contacts.github);
    });

    this.props.updateBgImg(
      "https://image.winudf.com/v2/image/Y29tLkZ1bkdhbWVzMTAuU3BhY2VzaGlwX3NjcmVlbnNob3RzXzBfZmQ1NWY3ZDY/screen-0.jpg?fakeurl=1&type=.jpg"
    );
  }

  render() {
    if (!this.props.myProfile) {
      return <img src={loader} alt="spinner" className="loader"></img>;
    }
    return (
      <ProfileFunc
        avatar={this.props.avatar}
        myPosts={this.props.myPosts}
        textFromState={this.props.textFromState}
        myProfile={this.props.myProfile}
        backgroundImage={this.props.backgroundImage}
        github={this.props.github}
        addPostType={this.props.addPostType}
        PostType={this.props.PostType}
      />
    );
  }
}
