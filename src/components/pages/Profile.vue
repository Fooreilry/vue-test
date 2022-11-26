<template>
    <div class="profile">
        <div class="profile-conteiner">
            <h2 class="profile__title">Личный кабинет</h2>
            <div class="profile__wrapper">
                <profile-navigation/>
                <div class="profile-form">
                    <div class="profile-form__wrapper">
                        <profile-avatar/>
                        <div class="profile-form__content">
                            <form-user-information/>
                            <form-password/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormPassword from '@/components/FormPassword.vue';
import FormUserInformation from '@/components/FormUserInformation.vue'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import ProfileNavigation from '@/components/ProfileNavigation.vue';
export default {
    components: {
        FormPassword,
        FormUserInformation,
        ProfileAvatar,
        ProfileNavigation
    }
}
</script>
<style>

.profile{
    width: 100%;
    background-color: #FFFFFF;
}
.profile-conteiner{
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
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
    justify-content: start;
}


.profile-form {
    width: 100%;
}

.profile-form__wrapper { 
    display: flex;
}


</style>