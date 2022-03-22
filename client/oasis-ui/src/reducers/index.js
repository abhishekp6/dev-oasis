import { combineReducers } from 'redux';

const selectCourseReducer = (selectCourse = null, action) => {
    if(action.type === 'SELECT_COURSE'){
        return action.payload;
    }
    return selectCourse;
}

const authReducer = (defaultLogin = null, action) => {
    if(action.type === 'SIGN_IN'){
        return true;
    }
    else if(action.type === 'SIGN_OUT'){
        return false;
    }
    return defaultLogin;
}

export default combineReducers({
    currentCourse: selectCourseReducer,
    isSignedIn: authReducer
})