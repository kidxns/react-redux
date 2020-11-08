import { COUNT } from '../types';

export const add = num => {
	return {
		type: COUNT.ADD,
		payload: {
			nextNumber: num
		}
	}
}