import { SERVICE_API } from "../types";

// state cu va action de tao ra state moi

// init state
const INIT_STATE = {
  dataTest: {
    loading: false,
    data: undefined,
    errors: undefined,
  },
  dataTodos: {
    loading: false,
    data: undefined,
    errors: undefined,
  },
};

export default function serviceApiReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SERVICE_API.TEST_LOADING: {
      return {
        ...state,
        dataTest: {
          ...state.dataTest,
          loading: true,
        },
      };
    }
    case SERVICE_API.TEST_SUCCESS: {
      return {
        ...state,
        dataTest: {
          data: action.payload,
          loading: false,
          errors: undefined,
        },
      };
    }
    case SERVICE_API.TEST_ERROR: {
      return {
        ...state,
        dataTest: {
          data: undefined,
          loading: false,
          errors: action.errors,
        },
      };
    }
    case SERVICE_API.GET_TODOS_LOADING: {
      return {
        ...state,
        dataTodos: {
            ...state.dataTodos,
            loading: true,
        }
      };
    }

    case SERVICE_API.GET_TODOS_SUCCESS: {
        return {
          ...state,
          dataTodos: {
              data: action.payload,
              loading: false,
              errors: undefined
          }
        };
      }

      case SERVICE_API.GET_TODOS_ERROR: {
        return {
          ...state,
          dataTodos: {
              data: undefined,
              loading: false,
              errors: action.errors
          }
        };
      }

    default:
      return state;
  }
}
