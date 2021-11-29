let store = {
  _state: {
    profileComponent: {
      myProfile: {
        name: "Kim",
        avatar:
          "https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721",
        bDay: { day: 22, month: "august", year: 1998 },
        city: "Voronezh",
        about: "Some awesome dev! ^_^",
      },
      myProfileLogic: ({ avatar, name, bDay, city, about }) => {
        return (
          <div className="content--main--user">
            <img
              className="content--main--user--avatar"
              src={avatar}
              alt="user-img"
            ></img>
            <div className="content--main--user--info">
              <div className="content--main--user--info--name">
                Name: {name}
              </div>
              <div className="content--main--user--info--about">
                Date of Birth: {bDay}
              </div>
              <div className="content--main--user--info--about">
                City: {city}
              </div>
              <div className="content--main--user--info--about">
                About: <p>{about}</p>
              </div>
            </div>
          </div>
        );
      },
      myPosts: [
        {
          id: 1,
          postText: "initial post",
          avatar:
            "https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721",
          likesCount: 0,
        },
      ],
      profileBG: {
        src: "https://www.techrepublic.com/a/hub/i/r/2021/02/05/2c503225-0fb7-447f-8f34-facda0dc4472/resize/770x/c92a9410c170ba0c2f77ba3fb097a7a8/smash-3.jpg",
        jsx: () => {
          return (
            <img
              className="content--main--img"
              src={store._state.profileComponent.profileBG.src}
              alt="react-img"
            ></img>
          );
        },
      },
    },
    dialogComponent: {
      dialogData: [
        {
          name: "Andrew",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
          message: "Importand mesage!",
          empty: false,
        },
      ],

      messagesData: [
        {
          name: "Andrew",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        },
      ],
      myMesages: [],
      sendMesage: (message) => {
        store.getState().dialogComponent.myMesages.push({
          name: store.getState().profileComponent.myProfile.name,
          avatar: store.getState().profileComponent.myProfile.avatar,
          message: message,
        });
        store._rerender(store.getState());
      },
    },
    asideComponent: {
      friendsData: [
        {
          avatarSrc:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
          name: "Andrew",
        },
        {
          avatarSrc:
            "https://cdn.dribbble.com/users/588874/screenshots/2289762/media/dec5e3b1de8bc1017e1234c8df25f3b5.png?compress=1&resize=800x600",
          name: "Caesar",
        },
        {
          avatarSrc:
            "https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png",
          name: "Collman",
        },
      ],
    },
    onTypeText: {
      text: "",
      logic: (input) => {
        store.getState().onTypeText.text = input;
        store._rerender(store.getState());
      },
    },
    onTypeTextDialogs: {
      text: "",
      logic: (input) => {
        store.getState().onTypeTextDialogs.text = input;
        store._rerender(store.getState());
      },
    },
  },
  //rerender method
  _rerender() {
    alert(alert("no subscribers!"));
  },
  //rerender method binding with dom render
  observer(subscriber) {
    this._rerender = subscriber;
  },
  //state getter
  getState() {
    return this._state;
  },
  //all methods in dispatch
  dispatch(action) {
    switch (action.type) {
      case "addPost":
        this._state.profileComponent.myPosts.push({
          id: this._state.profileComponent.myPosts.length + 1,
          postText: this._state.onTypeText.text,
          avatar: this._state.profileComponent.myProfile.avatar,
          likesCount: 0,
        });
        this._rerender(this._state); //warning!
        break;
      case "test":
        alert("test");
        break;
      default:
        return;
    }
  },
};

export default store;
