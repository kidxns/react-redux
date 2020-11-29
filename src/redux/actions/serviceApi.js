import { SERVICE_API } from "../types";

function fetchSecretSauce() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

function fetchGetTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos");
}

export const onTest = () => {
  return (dispatch, getState) => {
    // step them loading
    dispatch({
      type: SERVICE_API.TEST_LOADING,
    });

    return fetchSecretSauce()
      .then((res) => res.json())
      .then((data) => {
        // step 2 check data neu co thi la dung
        if (data) {
          return dispatch({
            type: SERVICE_API.TEST_SUCCESS,
            payload: data,
          });
        }

        // la sai
        return dispatch({
          type: SERVICE_API.TEST_ERROR,
          errors: [
            {
              title: "Thanh an lon",
              descriptions: "Dau buoi quan re",
            },
          ],
        });
      });
  };
};

export const onGetTodos = () => {
  return (dispatch, getState) => {
    dispatch({
      type: SERVICE_API.GET_TODOS_LOADING,
    });

    return fetchGetTodos()
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          return dispatch({
            type: SERVICE_API.GET_TODOS_SUCCESS,
            payload: data,
          });
        }

        return dispatch({
            type:SERVICE_API.GET_TODOS_ERROR,
            errors: [
                {
                    title: 'Thay an lol',
                    description: 'Thay chi gioi leu leu thoi.'
                }
            ]
        })

      });
  };
};
