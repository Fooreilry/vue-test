<template>
    <form >
        <div class="profile-form__avatar">
            <div class="profile-form__icon">
                <div class="profile-form__icon-inner"></div>
            </div>
            <ul class="profile-form__avatar-controls">
                <li class="profile-form__avatar-change">
                    <img :src="require('@/assets/img/Camera.svg')" alt="">
                </li>
                <li class="profile-form__avatar-remove">
                    <img :src="require('@/assets/img/Delete.svg')" alt="">
                </li>
            </ul>
        </div>
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.profile-form__avatar{
    margin-right: 56px;
}

.profile-form__icon {
    border-radius: 50%;
    padding: 29.75px;
    margin-bottom: 15.75px;
    
}
.profile-form__icon-inner{
    background-image: url('@/assets/img/prifile_icon.png');
    background-repeat: no-repeat;
    width: 59.5px;
    height: 59.5px;
    
}
.profile-form__avatar-controls{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}
.profile-form__content {
    display: flex;
    flex-direction: column;
}

.profile-form__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: #010849;
}
</style>