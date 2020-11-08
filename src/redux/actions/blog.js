import { BLOG } from '../types';

export const newBlog = blog => {
    return {
        type: BLOG.POST,
        payload: {
            blog
        }
    }
}