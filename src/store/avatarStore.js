import axios from 'axios'
export const avatarStore = {
    state: () => ({
        userDefaulthImg: require('@/assets/img/Profile_icon.svg'),
        userImg: null,
    }),
    mutations: {
        setUserImg(state, img) {
            state.userImg = img
        },
    },
    actions: {
        async imgRequest({ commit }, formData) {
            try {
                console.log(formData);
                const response = await axios.post('https://tinn.io/api/test/avatar/', formData)
                commit('setUserImg', `https://tinn.io/api/test/avatar/${response.data.data.avatar}`)
            } catch (error) {
                console.log(error);
            }
        }
    },
    namespaced: true

}