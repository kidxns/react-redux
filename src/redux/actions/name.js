import { TEXT } from '../types';

export const addName = name => {
    return {
        type: TEXT.NAME,
        payload: {
            name
        }
    }
}