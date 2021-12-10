let allData = {
  profileComponent: {
    myProfile: {
      name: "Kim",
      avatar:
        "https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721",
      bDay: { day: 22, month: "august", year: 1998 },
      city: "Voronezh",
      about: "Some awesome dev! ^_^",
    },
    profileBG: {
      src: "https://storge.pic2.me/c/1360x800/419/591c0be7f306b.jpg",
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
  },
  dialogComponent: {
    dialogData: [
      {
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },
    ],
  },
  asideComponent: {
    friendsData: [
      {
        id: 1,
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        name: "Andrew",
        old: 21,
        city: "Moscow",
        status: ":D",
        folowed: true,
      },
    ],
  },
  newFriends: [
    {
      id: 1,
      avatar:
        "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
      name: "JoJo",
      old: 22,
      city: "Tokyo",
      status: "Urauraura!",
      folowed: false,
    },
    {
      id: 2,
      avatar:
        "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
      name: "Holyday",
      old: 29,
      city: "Chicago",
      status: "Take your time=]",
      folowed: false,
    },
    {
      id: 3,
      avatar:
        "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
      name: "BO$$",
      old: 14,
      city: "Berlin",
      status: "HI!11!",
      folowed: false,
    },
    {
      id: 4,
      avatar:
        "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
      name: "Andrew",
      old: 21,
      city: "Moscow",
      status: ":D",
      folowed: true,
    },
  ],
  textFromState: "",
  textFromStateDialogs: "",
};

const reducers = (state = allData, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "INPUT-TO-STATE":
      newState.textFromStateDialogs = { ...state.textFromStateDialogs };
      newState.textFromStateDialogs = action.input;
      return newState;
    case "ADD-POST":
      let newPost = {
        id: state.profileComponent.myPosts.length + 1,
        postText: state.textFromState,
        avatar: state.profileComponent.myProfile.avatar,
        likesCount: 0,
      };
      newState.profileComponent.myPosts = state.profileComponent.myPosts;
      newState.profileComponent.myPosts.push(newPost);
      newState.textFromState = "";
      return newState;
    case "INPUT-TO-STATE-ADDPOST":
      newState.textFromState = { ...state.textFromState };
      newState.textFromState = action.input;
      return newState;
    case "SEND-MESSAGE":
      let newMessage = {
        name: state.profileComponent.myProfile.name,
        avatar: state.profileComponent.myProfile.avatar,
        message: state.textFromStateDialogs,
      };
      newState.dialogComponent.dialogData = state.dialogComponent.dialogData;
      newState.dialogComponent.dialogData.push(newMessage);
      newState.textFromStateDialogs = "";
      return newState;
    case "FOLLOW":
      newState.newFriends = [...state.newFriends].map((user) => {
        if (user.id === action.id) {
          return { ...user, folowed: !user.folowed };
        }
        return user;
      });
      newState.asideComponent.friendsData = [
        ...state.asideComponent.friendsData,
      ];
      return newState;
    case "UNFOLLOW":
      console.log("UNFOLLOW");
      return newState;
    case "SHOWMORE":
      console.log("SHOWMORE");
      return newState;
    case "SET-USERS":
      newState.newFriends = [...state.newFriends].map((user) => {
        return user;
      });
      newState.asideComponent.friendsData = [
        ...state.asideComponent.friendsData,
      ];
      return newState;
    //нужно чтобы он подтягивал с сервера и фильтрофал их в state.newFriends
    default:
      return { ...state };
  }
};

export default reducers;
