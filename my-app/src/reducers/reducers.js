import axios from "axios";
/* /users
 * api params
count: (integer - default: 10 - maximum: 100)
page size (how many items will be returned in response)

page: (integer - default: 1)
number of portion of items

term: (string)
user name string for searching

friend: (boolean)
if true, then find only followed users, false - only not followed users, if omit parameter - all users
* end GET params
*/

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
        city: "Moscow",
        status: ":D",
        folowed: true,
      },
    ],
  },
  newFriends: [],
  textFromState: "",
  textFromStateDialogs: "",
  pagination: {
    activePage: 1,
    allPages: 1,
    usersPerPage: 100,
  },
  isFetching: false,
};

//----action creators in Containers----//

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
    case "UNFOLLOW": //in future
      console.log("UNFOLLOW");
      return newState;
    case "SET-USERS":
      newState.newFriends = [...state.newFriends].map((user) => {
        return user;
      });
      newState.asideComponent.friendsData = [
        ...state.asideComponent.friendsData,
      ];
      if (action.payload) {
        newState.newFriends = [...action.payload].map((user) => {
          return user;
        });
      }
      return newState;
    case "GET-USERS":
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${action.payload}&count=5`
        )
        .then((res) => {
          newState.newFriends = [...res.data.items].map((user) => {
            return user;
          });
        });
      return newState;
    case "ACTIVE-PAGE":
      newState.pagination.activePage = { ...state.pagination.activePage };
      newState.pagination.activePage = action.payload;
      return newState;
    case "TOTAL-PAGES":
      newState.pagination.allPages = { ...state.pagination.allPages };
      newState.pagination.allPages = action.payload;
      return newState;
    case "IS-FETCHING":
      newState.isFetching = { ...state.isFetching };
      newState.isFetching = action.payload;
      return newState;
    default:
      return { ...state };
  }
};

const follow = (id) => {
  return { type: "FOLLOW", id: id };
};
const unFollow = () => {
  return { type: "UNFOLLOW" };
};
const setUsers = (payload) => {
  return { type: "SET-USERS", payload: payload };
};
const editTotalPages = (payload) => {
  return { type: "TOTAL-PAGES", payload };
};
const changeActivePage = (current) => {
  return { type: "ACTIVE-PAGE", payload: current };
};
const isFetching = (payload) => {
  return { type: "IS-FETCHING", payload: payload };
};
const addMessageToState = () => {
  return { type: "SEND-MESSAGE" };
};
const toStateThisInput = (input) => {
  return { type: "INPUT-TO-STATE", input: input };
};
const addPostType = () => {
  return { type: "ADD-POST" };
};

const PostType = (input) => {
  return { type: "INPUT-TO-STATE-ADDPOST", input: input };
};

export {
  follow,
  unFollow,
  setUsers,
  editTotalPages,
  changeActivePage,
  isFetching,
  addMessageToState,
  toStateThisInput,
  addPostType,
  PostType
};

export default reducers;
