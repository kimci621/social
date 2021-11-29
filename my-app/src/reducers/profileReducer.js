const profileReducer = (state, action) => {
  switch (action.type) {
    case "ADD-POST":
      return state.profileComponent.myPosts.push({
        id: state.profileComponent.myPosts.length + 1,
        postText: state.onTypeText.text,
        avatar: state.profileComponent.myProfile.avatar,
        likesCount: 0,
      });
    default:
      return state;
  }
};

export default profileReducer;
