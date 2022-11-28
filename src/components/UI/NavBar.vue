<template>
    <nav class="navbar">
        <div class="navbar__wrapper">
            <div v-if="isRegistration === false" class="navbar__logo">
                <img class="navbar__img" :src="require('@/assets/img/logo.svg')" alt="logotype">
            </div>
            <div class="navbar__logo" v-else>
                <img class="navbar__img" :src="require('@/assets/img/logo2.svg')" alt="logotype">
            </div>
            <ul class="navbar__items">
                <router-link class="navbar__item" @click="registrationFalse" :class="[isRegistration === true ? 'navbar__item_black' : '']" to="/">Главная</router-link>
                <router-link class="navbar__item" @click="registrationTrue" :class="[isRegistration === true ? 'navbar__item_black' : '']" to="/profile">Профиль</router-link>
            </ul>
            <div  v-if="isRegistration === false" class="user-menu">
                <div class="navbar__login">Войти</div>
                <my-button class="navbar__register">Регистрация</my-button>
            </div>
            <div class="user-menu" v-else>
                <div class="user-menu__logout">
                    <img src="@/assets/img/Logout.svg" alt="">
                </div>
                <div class="user-menu__notification">
                    <img src="@/assets/img/Notification2.svg" alt="">
                </div>
                <div class="user-menu__profle">
                    <p class="user-menu__profle-title">Иван Иванович</p>
                    <div class="user-menu__profle-icon">
                        <img class="user-menu__profle-img" src="@/assets/img/Profile3.svg" alt="">
                    </div>
                    <div class="user-menu__profle-arrow">
                        <img src="@/assets/img/ArrowDown2.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            isRegistration: false,
        }
    },
    methods: {
        registrationFalse(){
            this.isRegistration === false ? this.isRegistration : this.isRegistration = false
        },
        registrationTrue(){
            this.isRegistration === true ? this.isRegistration : this.isRegistration = true
        },
    },
}
</script>

<style scoped>
.navbar{
    min-width: 1050px;
    padding-top: 76px;
    margin:  0 auto;
    width: 100%;
    max-width: 1350px;
    position: absolute;
    left: 0;
    right: 0;

}
.navbar__wrapper {
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar__logo{
    margin-right: 64px;
    cursor: pointer;
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
.navbar__item_black {
    color: #010849;
}
.user-menu{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: end;
}
.navbar__login{
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    text-align: end;
    width: 92px;
    margin-right: 29px;
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
.user-menu__logout {
    width: 24px;
    height: 24px;
    margin-right: 40px;
}

.user-menu__notification {
    width: 24px;
    height: 24px;
    margin-right: 24px;
}

.user-menu__profle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
}

.user-menu__profle-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #010849;
    margin-right: 16px;
}

.user-menu__profle-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    
}
.user-menu__profle-img{
    display: block;
    margin: auto;
    padding: 12px 0;
    overflow: hidden;
}
.user-menu__profle-arrow {
    margin-left: 16px;
}
</style>