export const ADD_FEATURE_FLAGS = '@@feature-flags/ADD_FEATURE_FLAG'

const initialState = {}

export function featureFlagsReducer(state = initialState, { type, features } = {}) {
  if (type === ADD_FEATURE_FLAGS) {
    return { ...state, ...features }
  }

  return state
}
