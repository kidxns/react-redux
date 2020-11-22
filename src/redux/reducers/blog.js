import { BLOG } from "../types";

// init
const INIT_STATE = {
  posts: [
    {
      id: Math.random(10),
      title: "Bai viet 1",
      content: "test bai viet",
    },

    {
      id: Math.random(10),
      title: "Bai viet 2",
      content: "test 2",
    },
  ],
};

export default function blogReducer(state = INIT_STATE, action) {

  switch (action.type) {
    case BLOG.POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.blog]
      
      };

    case BLOG.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(i => i.id !== action.payload.id)
      }

    case BLOG.EDIT_POST: {
      const newPost = state.posts.map(i => {
        if (i.id === action.payload.id) {
          i = {
            id: i.id,
            title: action.payload.title,
            content: action.payload.content,
          };
        }

        return i; 
      });

      return {
        ...state,
        posts: newPost
      }  
    }
     

    default:
      return state;
  }
}
