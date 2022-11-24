<template>
    <nav class="navbar">
        <div class="navbar__wrapper">
            <div @click="$router.push('/')" class="navbar__logo">
                <img :src="require('@/assets/img/logo.svg')" alt="logotype">
            </div>
            <ul class="navbar__items">
                <router-link v-for="link in navLinks" :key="index" :to="link.path">{{link.name}}</router-link>
                <li ></li>
                <li class="navbar__item"></li>
            </ul>
            <div class="navbar__user-menu">
                <div class="navbar__login">Войти</div>
                <my-button>Регистрация</my-button>
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
}
ul{
    margin: 0;
    padding: 0;
}
li {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.navbar__items{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 48px;
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
    gap: 29px;
}
.navbar__login{
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
}
.navbar__login::before {
    content: url("@/assets/img/Login.svg");
    position: relative;
    top: 6px;
    right: 10px;
    
}
</style>