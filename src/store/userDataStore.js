export const userDataStore = {
    state: () => ({
        editName: true,
        showTotalPassword: false,
        showNewPassword: false,
        showRepeatPassword: false,
        welcomeМessage: 'Гость',
        userPassword: '1234',
        username: 'Гость',
        email: 'ivanivanovich@mail.ru',
        phone: '+7 999 999 99 99',
        password: {
            totalPassword: '',
            newPassword: '',
            repeatPassword: ''
        }
    }),
    mutations: {
        setEditName(state, editName) {
            editName ? state.editName = false : state.editName = true
            if(state.editName){
                state.welcomeМessage = state.username
            }
        },

        setShowTotalPassword(state, showTotalPassword) {
            showTotalPassword ? showTotalPassword = false : showTotalPassword = true
            state.showTotalPassword = showTotalPassword
        },

        setShowNewPassword(state, showNewPassword) {
            showNewPassword ? showNewPassword = false : showNewPassword = true
            state.showNewPassword = showNewPassword
        },

        setShowRepeatPassword(state, showRepeatPassword) {
            showRepeatPassword ? showRepeatPassword  = false: showRepeatPassword = true
            state.showRepeatPassword = showRepeatPassword
        },

        setWelcomeМessage(state, username){
            state.welcomeМessage = username
        },

        setUserImg(state, userImg){
            state.userImg = userImg
        },

        setUserPassword(state, password){
            state.userPassword = password
        },

        setUsername(state, username){
            state.username = username
        },

        setEmail(state, email){
            state.email = email
        },

        setPhone(state, phone){
            state.phone = phone
        },

        setTotalPassword(state, password){
            state.password.totalPassword = password
        },
        setNewPassword(state, password){
            state.password.newPassword = password
        },
        setRepeatPassword(state, password){
            state.password.repeatPassword = password
        },
    },
    namespaced: true
}