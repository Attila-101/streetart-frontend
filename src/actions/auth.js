import * as api from '../api/index.js';

const AuthActionType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
  };

export const login = (formData, navigate,setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);

        dispatch({ type: 'AUTH', data });

        navigate('/');
    } catch (error) {
        if (error.response) {
            dispatch({
                type:AuthActionType.LOGIN_FAIL,
                payload: error.response.data.message
            })
            setErrorHandler({
                hasError:true,
                message:error.response.data.message
            })
        };
    }
};

export const signup = (formData, navigate,setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: 'AUTH', data });

        navigate('/');
    } catch (error) {

        console.log(error)
        dispatch({
            type:AuthActionType.REGISTER_FAIL,
            payload: error.response
        })
        setErrorHandler({
            hasError:true,
            message:error.response
        })
    }
};