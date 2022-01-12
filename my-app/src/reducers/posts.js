let initialState = {
  myPosts: [],
};

const postsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: state.myPosts.length + 1,
        postText: action.payload.text,
        avatar: action.payload.avatar,
        likesCount: 0,
      };
      newState.myPosts = [...state.myPosts];
      newState.myPosts.push(newPost);
      return newState;
    default:
      return { ...state };
  }
};

const addPostType = (payload) => {
  return { type: "ADD-POST", payload:  payload};
};

export { addPostType };
export default postsReducer;
