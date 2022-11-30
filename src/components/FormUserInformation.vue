<template>
    <div class="wrapper">
        <profile-avatar class="user-information__profile-avatar" />
        <form class="user-information" @submit.prevent>
            <h2 class="user-information__title-welcome">Добро пожаловать, {{ welcomeМessage }}!</h2>
            <div class="user-information__user">
                <div class="user-information__user-field">
                    <label class="user-information__user-title user-information__user-title_name">Имя</label>
                    <input class="user-information__user-input" type="text" v-model="usernameValid" :readonly="editName"/>
                    <div @click="setEditName(editName)" class="user-information__edit"></div>
                    <span class="user-information__error-massage" v-for="(error, index) in v$.username.$errors" :key="index">{{
                    error.$message }}</span>
                </div>
                <div class="user-information__user-field ">
                    <label class="user-information__user-title user-information__user-title_email">Email</label>
                    <input class="user-information__user-input" type="email" v-model="emailValid" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.email.$errors" :key="index">{{
                    error.$message }}</span>
                </div>
                <div class="user-information__user-field">
                    <label class="user-information__user-title user-information__user-title_name_phone">Телефон</label>
                    <input class="user-information__user-input" type="text" v-model="phoneValid" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.phone.$errors" :key="index">{{
                    error.$message }}</span>
                </div>
            </div>
            <div class="user-information__password">
                <h2 class="user-information__password-title">Сменить пароль</h2>
                <div class="user-information__password-field">
                    <label class="user-information__field-password-title">Старый пароль</label>
                    <input class="user-information__password-input" placeholder="Введите пароль..." v-model="passwordTotalValid" :type="showTotalPassword ? 'text': 'password'"/>
                        <div @click="setShowTotalPassword(showTotalPassword)" class="user-information__password-eye"></div>
                    <span class="user-information__error-massage" v-for="(error, index) in v$.password.totalPassword.$errors"
                        :key="index">{{ error.$message }}</span>
                </div>
                <div class="user-information__password-field">
                    <label class="user-information__field-password-title">Новый пароль</label>
                    <input class="user-information__password-input" placeholder="Введите пароль..." v-model="passwordNewValid" :type="showNewPassword ? 'text': 'password'"/>
                        <div @click="setShowNewPassword(showNewPassword)" class="user-information__password-eye"></div>
                    <span class="user-information__error-massage" v-for="(error, index) in v$.password.newPassword.$errors"
                        :key="index">{{ error.$message }}</span>
                </div>
                <div class="user-information__password-field">
                    <label class="user-information__field-password-title">Повторите новый пароль</label>
                    <input class="user-information__password-input" placeholder="Введите пароль..." v-model="passwordRepeatValid" :type="showRepeatPassword ? 'text': 'password'"/>
                        <div @click="setShowRepeatPassword(showRepeatPassword)" class="user-information__password-eye"></div>
                    <span class="user-information__error-massage" v-for="(error, index) in v$.password.repeatPassword.$errors"
                        :key="index">{{ error.$message }}</span>
                </div>
                <my-button class="user-information__password-button button_grey" @click="changeUserData">Подтвердить</my-button>
            </div>
        </form>
    </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'
import { isRussian, isPhone } from '@/scripts/CustomValidators'
import { useToast } from "vue-toastification";
import ProfileAvatar from './ProfileAvatar.vue';
import { mapState, mapMutations} from 'vuex';
export default {
    components: {
        ProfileAvatar
    },
    data() {
        return {
            toast: useToast(),
            v$: useVuelidate(),
        }
    },
    validations() {
        return {
            username: { required: helpers.withMessage('Поле не должнобыть пустым', required), isRussian: helpers.withMessage('Только русские буквы', isRussian) },
            email: { required: helpers.withMessage('Поле не должнобыть пустым', required), email: helpers.withMessage('Email введён не корректно', email) },
            phone: { required: helpers.withMessage('Поле не должнобыть пустым', required), isPhone: helpers.withMessage('Введён не корректный номер (начало c +7)', isPhone) },
            password: {
                totalPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), sameAs: helpers.withMessage('Не верный пароль', sameAs(this.userPassword)) },
                newPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), minLength: helpers.withMessage('Минимальная длинна 4 символа', minLength(4)) },
                repeatPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), sameAs: helpers.withMessage('Не верный пароль', sameAs(this.password.newPassword)) }
            }
        }
    },
    methods: {
        ...mapMutations({
            setUsername: 'user/setUsername',
            setWelcomeМessage: 'user/setWelcomeМessage',
            setEmail: 'user/setEmail',
            setPhone: 'user/setPhone',
            setTotalPassword: 'user/setTotalPassword',
            setNewPassword: 'user/setNewPassword',
            setRepeatPassword: 'user/setRepeatPassword',
            setShowTotalPassword: 'user/setShowTotalPassword',
            setShowNewPassword: 'user/setShowNewPassword',
            setShowRepeatPassword: 'user/setShowRepeatPassword',
            setEditName: 'user/setEditName',
            setUserPassword: 'user/setUserPassword'
        }),
        changeUserData() {
            this.v$.$validate()
            if (this.v$.$error) {
                this.toast.error("Ошибка")
            }
            else {
                this.setWelcomeМessage(this.username)
                this.setUserPassword(this.password.newPassword)
                this.setTotalPassword(''),
                this.setNewPassword(''),
                this.setRepeatPassword(''),
                this.toast.success("Успешно!")
            }
        }
    },
    computed:{
        ...mapState({
            editName: state => state.user.editName,
            showTotalPassword: state => state.user.showTotalPassword,
            showNewPassword: state => state.user.showNewPassword,
            showRepeatPassword: state => state.user.showRepeatPassword,
            welcomeМessage: state => state.user.welcomeМessage,
            userPassword: state => state.user.userPassword,
            username: state => state.user.username,
            email: state => state.user.email,
            phone: state => state.user.phone,
            password: state => state.user.password
        }),
        usernameValid: {
            get() {
                return this.username
            },
            set(username) {
                this.setUsername(username)
                this.v$.username.$touch()
            },
        },
        emailValid: {
            get() {
                return this.email
             },
            set(email) {
                this.setEmail(email)
                this.v$.email.$touch()
             },
        },
        phoneValid: {
            get() {
                return this.phone
            },
            set(phone) {
                this.setPhone(phone)
                this.v$.phone.$touch()
            },
        },
        passwordTotalValid: {
            get() {
                return this.password.totalPassword
            },
            set(passwordTotal) {
                this.setTotalPassword(passwordTotal)
                this.v$.password.totalPassword.$touch()
            },
        },
        passwordNewValid: {
            get() {
                return this.password.newPassword
            },
            set(passwordNew) {
                this.setNewPassword(passwordNew)
                this.v$.password.newPassword.$touch()
            },
        },
        passwordRepeatValid: {
            get() {
                return this.password.repeatPassword
            },
            set(repeatPassword) {
                this.setRepeatPassword(repeatPassword)
                this.v$.password.repeatPassword.$touch()
            },
        },
    }
}
</script>
<style scoped>
.user-information{
    width: 100%;
}
.wrapper{
    display: flex;
    justify-content: start;
}
/* у title пороля другие стили */
.user-information__title-welcome{
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    color: #010849;
    margin-bottom: 24px;
}
.user-information__user {
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
}
.user-information__user-field{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    max-width: 185px;
}
.user-information__user-title {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #029EEB;
    margin-bottom: 19px;
}
.user-information__user-title_name::before{
    content: url('@/assets/img/Profile_name.svg');
    width: 24px;
    height: 24px;
    position: relative;
    top: 4px;
    margin-right: 6px;
}
.user-information__user-title_email::before {
    content: url('@/assets/img/profile_email.svg');
    width: 24px;
    height: 24px;
    position: relative;
    top: 3px;
    margin-right: 6px;
}
.user-information__user-title_name_phone::before{
    content: url('@/assets/img/profile_phone.svg');
    width: 24px;
    height: 24px;
    position: relative;
    top: 2px;
    margin-right: 6px;
}
.user-information__user-input {
    border: none;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #010849;
    outline: none;
    font-family: inherit;
}
.user-information__edit{
    background-image: url('@/assets/img/Edit.svg');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    background-color: #ffffff;
    top: 42px;
    right: 0px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
.user-information__password {
    max-width: 314px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: start;
}
.user-information__password-title{
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #2A1946;
}
.user-information__password-field {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
}

.user-information__field-password-title {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: rgba(1, 8, 73, 0.3);
    margin-bottom: 10px;
}

.user-information__field-password-title::before {
    content: url('@/assets/img/profile_password.svg');
    margin-right: 6px;
    position: relative;
    top: 2px;
}

.user-information__password-input {
    padding-bottom: 13px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #010849;
    font-style: italic;
    border: none;
    border-bottom: 1px solid rgba(1, 8, 73, 0.2);
    outline: none;
    font-family: inherit;
}
.user-information__password-eye{
    background-image: url('@/assets/img/ClosedEyepx.svg');
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    top: 35px;
    right: 0;
    cursor: pointer;
}
.user-information__password-input::placeholder{
    opacity: 0.5;
}
.user-information__password-button {
    align-self: end;
    padding: 4px 15.5px;
}
.user-information__error-massage{
    color: #FF0000;
    font-size: 13px;
}
</style>