<template>
    <div class="wrapper">
        <profile-avatar class="user-information__profile-avatar" :defaultImg="userImg"/>
        <form class="user-information" @submit.prevent>
            <h2 class="user-information__title-welcome">Добро пожаловать, {{ welcomeМessage }}!</h2>
            <div class="user-information__user">
                <div class="user-information__user-field">
                    <label class="user-information__user-title user-information__user-title_name">Имя</label>
                    <input class="user-information__user-input" type="text" v-model="v$.username.$model" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.username.$errors" :key="index">{{
                    error.$message }}</span>
                </div>
                <div class="user-information__user-field ">
                    <label class="user-information__user-title user-information__user-title_email">Email</label>
                    <input class="user-information__user-input" type="email" v-model="v$.email.$model" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.email.$errors" :key="index">{{
                    error.$message }}</span>
                </div>
                <div class="user-information__user-field">
                    <label class="user-information__user-title user-information__user-title_name_phone">Телефон</label>
                    <input class="user-information__user-input" type="text" v-model="v$.phone.$model" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.phone.$errors" :key="index">{{
                    error.$message }}</span>
                </div>
            </div>
            <div class="user-information__password">
                <h2 class="user-information__password-title">Сменить пароль</h2>
                <div class="user-information__password-field">
                    <label class="user-information__field-password-title">Старый пароль</label>
                    <input class="user-information__password-input" placeholder="Введите пароль..." type="text"
                        v-model="v$.password.totalPassword.$model" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.password.totalPassword.$errors"
                        :key="index">{{ error.$message }}</span>
                </div>
                <div class="user-information__password-field">
                    <label class="user-information__field-password-title">Новый пароль</label>
                    <input class="user-information__password-input" placeholder="Введите пароль..." type="text"
                        v-model="v$.password.newPassword.$model" />
                    <span class="user-information__error-massage" v-for="(error, index) in v$.password.newPassword.$errors"
                        :key="index">{{ error.$message }}</span>
                </div>
                <div class="user-information__password-field">
                    <label class="user-information__field-password-title">Повторите новый пароль</label>
                    <input class="user-information__password-input" placeholder="Введите пароль..." type="text"
                        v-model="v$.password.repeatPassword.$model" />
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
export default {
    components: {
        ProfileAvatar
    },
    data() {
        return {
            toast: useToast(),
            v$: useVuelidate(),
            userImg: require('@/assets/img/Profile_icon.svg'),
            userPassword: '1234',
            welcomeМessage: this.username,
            username: 'Иван Иванович',
            email: 'ivanivanovich@mail.ru',
            phone: '+7 999 999 99 99',
            password: {
                totalPassword: '',
                newPassword: '',
                repeatPassword: ''
            }
        }
    },
    validations() {
        return {
            username: { required: helpers.withMessage('Поле не должнобыть пустым', required), isRussian: helpers.withMessage('Только русские буквы', isRussian) },
            email: { required: helpers.withMessage('Поле не должнобыть пустым', required), email: helpers.withMessage('Email введён не корректно', email) },
            phone: { required: helpers.withMessage('Поле не должнобыть пустым', required), isPhone: helpers.withMessage('Не корректный номер', isPhone) },
            password: {
                totalPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), sameAs: helpers.withMessage('Не верный пароль', sameAs(this.userPassword)) },
                newPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), minLength: helpers.withMessage('Минимальная длинна 4 символа', minLength(4))  },
                repeatPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), sameAs: helpers.withMessage('Пароль не совпадает', sameAs(this.password.newPassword))  }
            }
        }
    },
    methods: {
        changeUserData() {
            
            this.v$.$validate()
            if (this.v$.$error) {
                console.log('1234');
            }
            else {
                this.welcomeМessage = this.username
                this.userPassword = this.password.newPassword
                this.password = {
                    totalPassword: '',
                    newPassword: '',
                    repeatPassword: ''
                }
                this.toast.success("I'm a toast!")
            }
        }
    },
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
}

.user-information__field-password-title {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #010849;
    opacity: 0.3;
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