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
      src: "https://www.techrepublic.com/a/hub/i/r/2021/02/05/2c503225-0fb7-447f-8f34-facda0dc4472/resize/770x/c92a9410c170ba0c2f77ba3fb097a7a8/smash-3.jpg",
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
};


const reducers = (state = allData, action) => {
  switch (action.type) {
    case "INPUT-TO-STATE":
      return { ...state, onTypeTextDialogs: { text: action.input } };
    case "ADD-POST":
      return {
        ...state,
        state: state.profileComponent.myPosts.push({
          id: state.profileComponent.myPosts.length + 1,
          postText: state.onTypeText.text,
          avatar: state.profileComponent.myProfile.avatar,
          likesCount: 0,
        }),
      };
    case "INPUT-TO-STATE-ADDPOST":
      return { ...state, onTypeText: { text: action.input } };
    case "SEND-MESSAGE":
      return {
        ...state,
        state: state.dialogComponent.dialogData.push({
          name: state.profileComponent.myProfile.name,
          avatar: state.profileComponent.myProfile.avatar,
          message: state.onTypeTextDialogs.text,
        }),
      };
    default:
      return { ...state };
  }
};

export default reducers;
