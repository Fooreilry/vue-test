<template>
    <nav class="profile-navigation">
        <ul class="profile-navigation__links">
            <li class="profile-navigation__link_active">Профиль</li>
            <li class="profile-navigation__link">Текст 1</li>
            <li class="profile-navigation__link">Текст 2</li>
        </ul>
    </nav>
</template>
<script>
export default {
}
</script>
<style scoped>
.profile-navigation {
    width: 100%;
    background-color: #F1F9FF;
    border-radius: 24px;
    margin-right: 96px;
}
.profile-navigation__links{
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 36px 24px;

}
.profile-navigation__link{
    /* width: 109px; */
    /* text-align: right; */
    line-height: 32px;
    font-size: 18px;
    font-weight: 400;
    color: #010849;
}
.profile-navigation__link::before{
    content: url('@/assets/img/Profile2.svg');
    margin-right: 7px;
    position: relative;
    top: 5px;
    left: 0;
}
.profile-navigation__link_active{
    padding: 12px 0 12px 16px;
    background-color: #029EEB;
    border-radius: 14px;
    color: #FFFFFF;
}
.profile-navigation__link_active::before{
    content: url('@/assets/img/Profile.svg');
    margin-right: 7px;
    position: relative;
    top: 5px;
    left: 0;
}
</style>