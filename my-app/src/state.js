//reducers ./reducers:
import profileReducer from "./reducers/profileReducer";
import sendMesageReducer from "./reducers/sendMesageReducer";
import inputToStateReducer from "./reducers/inputToStateReducer";
//actions:
//profileReducer action : "ADD-POST"

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
      dialogData: [],
    },
    asideComponent: {
      friendsData: [
        {
          avatar:
            "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
          name: "Andrew",
        },
        {
          avatar:
            "https://cdn.dribbble.com/users/588874/screenshots/2289762/media/dec5e3b1de8bc1017e1234c8df25f3b5.png?compress=1&resize=800x600",
          name: "Caesar",
        },
        {
          avatar:
            "https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png",
          name: "Collman",
        },
      ],
    },
    onTypeText: {
      text: "",
    },
    onTypeTextDialogs: {
      text: "",
    },
  },
  //rerender method
  _rerender() {
    alert(alert("no subscribers!"));
  },
  //rerender method, make domRender as subscriber of _rerender
  subscriber(observer) {
    this._rerender = observer;
  },
  //state getter
  getState() {
    return this._state;
  },
  //all methods in dispatch as reducers
  dispatch(action) {
    profileReducer(store.getState(), action);
    sendMesageReducer(store.getState(), action);
    inputToStateReducer(store.getState(), action);
    //rerender on action
    if (action) {
      store._rerender(store.getState());
    }
  },
};

export default store;
