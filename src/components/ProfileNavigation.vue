<template>
    <div class="profile-navigation__wrapper">
        <nav class="profile-navigation">
            <ul class="profile-navigation__links">
                <router-link to="/profile" class="profile-navigation__link">Профиль</router-link>
                <router-link to="/profile_page1" class="profile-navigation__link">Текст 1</router-link>
                <router-link to="/profile_page2" class="profile-navigation__link">Текст 2</router-link>
            </ul>
        </nav>
        <div class="profile-navigation__exit" @click="$router.push('/')">Выйти</div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.profile-navigation {
    min-width: 180px;
    width: 100%;
    background-color: #F1F9FF;
    border-radius: 24px;
}
.profile-navigation__wrapper{
    display: flex;
    flex-direction: column;
}
.profile-navigation__links{
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 36px 24px;

}
.profile-navigation__link{
    line-height: 32px;
    font-size: 18px;
    font-weight: 400;
    color: #010849;
    text-decoration: none;
}
.profile-navigation__link::before{
    content: url('@/assets/img/Profile2.svg');
    margin-right: 7px;
    position: relative;
    top: 5px;
    left: 0;
}
.router-link-exact-active{
    padding: 12px 0 12px 16px;
    background-color: #029EEB;
    border-radius: 14px;
    color: #FFFFFF;
}
.router-link-exact-active::before {
    content: url('@/assets/img/Profile.svg');
    margin-right: 7px;
    position: relative;
    top: 5px;
    left: 0;
}
.profile-navigation__exit{
    margin-top: 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #010849;
    opacity: 0.5;
    cursor: pointer;
}
.profile-navigation__exit::before{
    content: url('@/assets/img/log-in.svg');
    position: relative;
    top: 6px;
    margin-right: 10px;
}
</style>