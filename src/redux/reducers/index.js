const initialState = {
    leavingPage: false
}


export default function rootReducer(state=initialState, action) {

    switch(action.type) {

        case 'LEAVING_PAGE':
            return {
                ...initialState,
                leavingPage: true
            }
        case 'PAGE_LOADED':
            return {
                ...initialState,
                leavingPage: false
            }
        default:
            return {
                ...initialState
            }

    }

}