
//Action creator
export const selectCourse = course => {
    //Action
    return {
        type: 'SELECT_COURSE',
        payload: course
    }
}