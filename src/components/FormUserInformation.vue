<template>
    <form class="user-information" @submit.prevent >
        <h2 class="profile-form__title">Добро пожаловать, {{username}}!</h2>
        <div class="profile-form__user-info">
            <div class="profile-form__user-field">
                <label class="profile-form__field-title">Имя</label>
                <input class="profile-form__field-input" type="text" v-model="v$.username.$model" />
                <span class="profile-form__error-massage" v-for="(error, index) in v$.username.$errors" :key="index">{{ error.$message }}</span>
            </div>
            <div class="profile-form__user-field">
                <label class="profile-form__field-title">Email</label>
                <input class="profile-form__field-input" type="text" v-model="v$.email.$model" />
                <span class="profile-form__error-massage" v-for="(error, index) in v$.email.$errors" :key="index">{{ error.$message }}</span>
            </div>
            <div class="profile-form__user-field">
                <label class="profile-form__field-title">Телефон</label>
                <input class="profile-form__field-input" type="text" v-model="v$.phone.$model" />
                <span class="profile-form__error-massage" v-for="(error, index) in v$.phone.$errors" :key="index">{{ error.$message }}</span>
            </div>
        </div>
        <div class="profile-form__password">
            <h2 class="profile-form__title">Сменить пароль</h2>
            <div class="profile-form__password-field">
                <label class="profile-form__password-title">Старый пароль</label>
                <input class="profile-form__password-input" placeholder="Введите пароль..." type="text" v-model="v$.password.totalPassword.$model"/>
                <span class="profile-form__error-massage" v-for="(error, index) in v$.password.totalPassword.$errors" :key="index">{{ error.$message }}</span>
            </div>
            <div class="profile-form__password-field">
                <label class="profile-form__password-title">Новый пароль</label>
                <input class="profile-form__password-input" placeholder="Введите пароль..." type="text" v-model="v$.password.newPassword.$model"/>
                <span class="profile-form__error-massage" v-for="(error, index) in v$.password.newPassword.$errors" :key="index">{{ error.$message }}</span>
            </div>
            <div class="profile-form__password-field">
                <label class="profile-form__password-title">Повторите новый пароль</label>
                <input class="profile-form__password-input" placeholder="Введите пароль..." type="text" v-model="v$.password.repeatPassword.$model"/>
                <span class="profile-form__error-massage" v-for="(error, index) in v$.password.repeatPassword.$errors" :key="index">{{ error.$message }}</span>
            </div>
            <my-button class="profile-form__password-button button_grey" @click="changeUserData">Подтвердить</my-button>
        </div>
    </form>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'
import { isRussian, isPhone} from '@/scripts/CustomValidators'
export default {
    data() {
        return {
            v$: useVuelidate(),
            userPassword: '1234',
            welcomeМessage: '',
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
                totalPassword: { required: helpers.withMessage('Поле не должнобыть пустым', required), sameAs: sameAs(this.userPassword) },
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
                this.userPassword = this.password.newPassword
                this.password = {
                    totalPassword: '',
                    newPassword: '',
                    repeatPassword: ''
                }
            }
        }
    },
}
</script>
<style scoped>
/* у title пороля другие стили */
.profile-form__title{
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    color: #010849;
    margin-bottom: 24px;
}
.profile-form__user-info {
    display: flex;
    gap: 52px;
    margin-bottom: 55px;
}
.profile-form__user-field{
    display: flex;
    flex-direction: column;
}
.profile-form__field-title {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #029EEB;
    margin-bottom: 19px;
}
.profile-form__field-input {
    border: none;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #010849;
    outline: none;
}
.profile-form__password {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: start;
}

.profile-form__password-field {
    display: flex;
    flex-direction: column;
}

.profile-form__password-title {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #010849;
    opacity: 0.3;
    margin-bottom: 10px;
}

.profile-form__password-title::before {
    content: url('@/assets/img/profile_password.svg');
}

.profile-form__password-input {
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
.profile-form__password-input::placeholder{
    opacity: 0.5;
}

.profile-form__password-button {
    align-self: end;
}
.profile-form__error-massage{
    color: #FF0000;
    font-size: 13px;
}
</style>