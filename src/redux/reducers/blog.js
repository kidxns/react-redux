import { BLOG } from '../types';


//init

const INIT_STATE = {
    blog:[{
        id: Math.random(10),
        title: 'Bai viet 1',
        content: 'test bai viet'
    }]
  
}

export default function blogReducer(state = INIT_STATE, action){
    switch (action.type) {
        case BLOG.POST:
            return { 
                ...state,
                blog : action.payload.blog
            }
            
    
        default:
            return state;
        
    }


}