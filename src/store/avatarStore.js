export const avatarStore = {
    state: () => ({
        userDefaulthImg: require('@/assets/img/Profile_icon.svg'),
        userImg: null
    }),
    mutations: {
        setUserImg(state, img) {
            state.userImg = img
        }
    },
    actions: {
        
    },
    namespaced: true

}