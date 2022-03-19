import { combineReducers } from 'redux';

const selectCourseReducer = (selectCourse = null, action) => {
    if(action.type === 'SELECT_COURSE'){
        return action.payload;
    }
    return selectCourse;
}

export default combineReducers({
    currentCourse: selectCourseReducer
})