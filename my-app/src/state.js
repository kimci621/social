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
        src: "https://w.wallhaven.cc/full/3z/wallhaven-3z9vpd.jpg",
        jsx: () => {
          return (
            <img
              className="content--main--img"
              src={store.getState().profileComponent.profileBG.src}
              alt="react-img"
            ></img>
          );
        },
      },
    },
    dialogComponent: {
      dialogData: [
        {
          name: "test",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
          message: "testetsettse",
          empty: false,
        },
      ],

      messagesData: [
        {
          name: "Andrew",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        },
        {
          name: "John",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        },
        {
          name: "Mcley",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        },
        {
          name: "Andrew",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        },
        {
          name: "John",
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        },
        {
          name: "Mcley",
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
    addpostComponent: {
      text: "",
      logic: (input) => {
        let state = store.getState();
        state.addpostComponent.text = input;
        store._rerender(state);
      },
    },
  },
  _rerender() {
    alert(alert("no subscribers!"));
  },
  addPost(text) {
    const newPost = {
      id: this._state.profileComponent.myPosts.length + 1,
      postText: text,
      avatar: this._state.profileComponent.myProfile.avatar,
      likesCount: 0,
    };

    this._state.profileComponent.myPosts.push(newPost);
    this._rerender(this._state); //warning!
  },
  observer(subscriber) {
    this._rerender = subscriber;
  },
  getState() {
    return this._state;
  },
};

export default store;
