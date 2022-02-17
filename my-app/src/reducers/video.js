const initialState = {
  movies: {
    urls: [
      {
        video: "bD7bpG-zDJQ",
        image:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99815566391F03456E7C01860EB9AE742B9615B5946579864F11574A5B380D02/scale?width=1200&aspectRatio=1.78&format=jpeg",
      },
      {
        video: "gYbW1F_c9eM",
        image:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DCF9DA13F0DF2C7D184A7C6197F8DAEE90DF470ADFE24983F50948A57EB5F973/scale?width=1200&aspectRatio=1.78&format=jpeg",
      },
      {
        video: "5UnjrG_N8hU",
        image:
          "https://avatars.mds.yandex.net/get-ott/1652588/2a0000016fb2769074a29aa7cfb346e9e28d/678x380",
      },
      {
        video: "MpkrMqmmy5k",
        image:
          "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/star_wars_main.jpg",
      },
      {
        video: "JNwNXF9Y6kY",
        image:
          "https://avatars.mds.yandex.net/get-ott/1534341/2a0000016fb26a17f68021587d8d0311cc09/678x380",
      },
      {
        video: "5UfA_aKBGMc",
        image:
          "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b5b5c5bf963be1cce2f2327e833fda30a7c9a7ffb0188a938539ff14f6a60dfc._RI_V_TTW_.jpg",
      },
      {
        video: "sGbxmsDFVnE",
        image:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29219EFA1EFF062A8A862DE55E884E1A25072CCAFEA60BEA905096D19B9BBB0C/scale?width=1200&aspectRatio=1.78&format=jpeg",
      },
      {
        video: "Q0CbN8sfihY",
        image: "https://i.ytimg.com/vi/laPZQAMsSBI/maxresdefault.jpg",
      },
      {
        video: "8Qn_spdM5Zg",
        image:
          "https://www.slashgear.com/wp-content/uploads/2019/12/starwars9-1-1280x720.jpg",
      },
      {
        video: "6q6d1xytfJ0",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6354e50-e03f-475d-9678-bd27ac65f14b/db82giu-b51c6346-d305-418a-a402-5973f8c34ddd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2MzU0ZTUwLWUwM2YtNDc1ZC05Njc4LWJkMjdhYzY1ZjE0YlwvZGI4MmdpdS1iNTFjNjM0Ni1kMzA1LTQxOGEtYTQwMi01OTczZjhjMzRkZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2roozYz-fgHemZjRI_S7lyvVOZV17c9yTELjpMP4ZeE",
      },
    ],
  },
};

const videoReducer = (state = initialState, action) => {
  return { ...state };
};

export default videoReducer;
