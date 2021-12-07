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
      {
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },
      {
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },
      {
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },
      {
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
        name: "Andrew",
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
        message: "Milord!",
      },{
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
      // let newMessage = {
      //   name: state.profileComponent.myProfile.name,
      //   avatar: state.profileComponent.myProfile.avatar,
      //   message: state.onTypeTextDialogs.text,
      // };;
      return newState;
    case "SHOW-STATE":
      console.log(state);
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducers;
