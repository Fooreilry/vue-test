<template>
    <form>
        <h2 class="profile-form__title">Добро пожаловать, Иван Иванович!</h2>
        <div class="profile-form__user-info">
            <div class="profile-form__user-field">
                <label class="profile-form__field-title">Имя</label>
                <input class="profile-form__field-input" type="text" value="Иван Иванович" />
            </div>
            <div class="profile-form__user-field">
                <label class="profile-form__field-title">Email</label>
                <input class="profile-form__field-input" type="text" value="ivanivanovich@mail.ru" />
            </div>
            <div class="profile-form__user-field">
                <label class="profile-form__field-title">Телефон</label>
                <input class="profile-form__field-input" type="text" value="+7 999 999 99 99" />
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            phone: '',
        }
    },
}
</script>
<style>
.profile-form__user-info {
    display: flex;
    gap: 52px;
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
}
</style>