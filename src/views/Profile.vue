<template>
    <div class="profile">
        <div class="profile-conteiner">
            <h2 class="profile__title">Личный кабинет</h2>
            <div class="profile__wrapper">
                <profile-navigation  class="profile__navigation"/>
                <div class="profile-form">
                    <div class="profile-form__wrapper">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormUserInformation from '@/components/FormUserInformation.vue'
import ProfileNavigation from '@/components/ProfileNavigation.vue';
export default {
    components: {
        FormUserInformation,
        ProfileNavigation
    }
}
</script >
<style scoped>
body {
    background-color: #FFFFFF;
}
.profile{
    min-width: 1030px;
    width: 100%;
    background-color: #FFFFFF;
}
.profile-conteiner{
    padding: 184px 25px;
    margin: 0 auto;
    width: 100%;
    max-width: 1350px;
}
.profile__title{
    color: #010849;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 32px;
}
.profile__wrapper {
    display: flex;
}


.profile-form {
    width: 100%;
}

.profile__navigation{
    flex-basis: 40%;
    margin-right: 96px;
}
</style>