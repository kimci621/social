let initialState = {
  myPosts: [],
  textFromState: "",
};

const postsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: state.myPosts.length + 1,
        postText: state.textFromState,
        avatar: action.payload,
        likesCount: 0,
      };
      newState.myPosts = [...state.myPosts];
      newState.myPosts.push(newPost);
      newState.textFromState = "";
      return newState;
    case "INPUT-TO-STATE-ADDPOST":
      newState.textFromState = { ...state.textFromState };
      newState.textFromState = action.input;
      return newState;
    default:
      return { ...state };
  }
};

const addPostType = (payload) => {
  return { type: "ADD-POST", payload: payload };
};
const PostType = (input) => {
  return { type: "INPUT-TO-STATE-ADDPOST", input: input };
};

export { addPostType, PostType };
export default postsReducer;
