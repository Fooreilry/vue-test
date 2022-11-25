<template>
    <nav class="navbar">
        <div class="navbar__wrapper">
            <div @click="$router.push('/')" class="navbar__logo">
                <img class="navbar__img" :src="require('@/assets/img/logo.svg')" alt="logotype">
            </div>
            <ul class="navbar__items">
                <router-link class="navbar__item" v-for="link in navLinks" :key="index" :to="link.path">{{link.name}}</router-link>
            </ul>
            <div class="navbar__user-menu">
                <div class="navbar__login">Войти</div>
                <my-button class="navbar__register">Регистрация</my-button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            navLinks: [
                { name: 'Главная' , path: '/'},
                { name: 'Профиль', path: '/profile'}
            ]
        }
    },
}
</script>

<style scoped>
.navbar{
    width: 100%;
}
.navbar__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar__logo{
    margin-right: 64px;
}
.navbar__img{
    display: block;
}
.navbar__items{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 48px;
    width: 100%;
    justify-content: start;
}
.navbar__item{
    font-style: italic;
    color: #DAECFB;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-decoration: none;
}
.navbar__user-menu{
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 100%;
    gap: 29px;
    justify-content: end;
}
.navbar__login{
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    text-align: end;
    width: 92px;
}
.navbar__login::before {
    content: url("@/assets/img/Login.svg");
    position: relative;
    top: 6px;
    right: 10px;
    
}
.navbar__register{
    padding: 12px 24px;
}
</style>