
//Action creator
export const selectCourse = course => {
    //Action
    return {
        type: 'SELECT_COURSE',
        payload: course
    }
}

//Google authentication action creator
export const signIn = () => {
    return {
        type: 'SIGN_IN' 
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT' 
    }
}