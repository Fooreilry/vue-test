<template>
    <form>
        <div class="profile-form__password">
            <h2 class="profile-form__title">Сменить пароль</h2>
            <div class="profile-form__password-field">
                <label class="profile-form__password-title">Старый пароль</label>
                <input class="profile-form__password-input" placeholder="Введите пароль..." type="text" />
            </div>
            <div class="profile-form__password-field">
                <label class="profile-form__password-title">Старый пароль</label>
                <input class="profile-form__password-input" placeholder="Введите пароль..." type="text" />
            </div>
            <div class="profile-form__password-field">
                <label class="profile-form__password-title">Старый пароль</label>
                <input class="profile-form__password-input" placeholder="Введите пароль..." type="text" />
            </div>
            <my-button class="profile-form__password-button button_grey ">Подтвердить</my-button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            password: {
                totalPassword: '',
                newPassword: '',
                repeatPassword: ''
            }
        }
    },
}
</script>

<style scoped>
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
    opacity: 0.5;
}

.profile-form__password-button {
    align-self: end;
}
</style>