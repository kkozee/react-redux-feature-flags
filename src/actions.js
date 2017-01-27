export const ADD_FEATURE_FLAGS = '@@feature-flags/ADD_FEATURE_FLAG'

const addFeatureFlagsSuccess = (features) => {
  return {
    type: ADD_FEATURE_FLAGS,
    features: features
  };
}

export const addFeatureFlags = (features) => {
  return (dispatch) => {
    dispatch(addFeatureFlagsSuccess(features));
  };
};
