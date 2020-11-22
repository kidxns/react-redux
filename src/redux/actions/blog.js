import { BLOG } from '../types';

export const newBlog = blog => {
    return {
        type: BLOG.POST,
        payload: {
            blog
        }
    }
}

export const removePost = id => {
    return {
        type: BLOG.REMOVE_POST,
        payload: {
            id
        }
    }
}


export const editPost = payload => {
    return {
        type: BLOG.EDIT_POST,
        payload
    }
}
