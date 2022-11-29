<template>
    <form class="profile-avatar">
        <div class="profile-avatar__wrapper">
            <div class="profile-avatar__block-img">
                <input class="profile-avatar__input" type="file" ref="file" @change="changeAvatar" accept="image/png, image/jpeg, image/svg">
                <img class="profile-avatar__img" :src="srcImg" alt="">
            </div>
            <ul class="profile-avatar__controls">
                <li class="profile-avatar__change" @click="selectImg">
                        <img :src="require('@/assets/img/Camera.svg')" alt="">
                </li>
                <li class="profile-avatar__remove" @click="removeAvatar">
                    <img :src="require('@/assets/img/Delete.svg')" alt="">
                </li>
            </ul>
        </div>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    props: {
        defaultImg: {
            type: String
        }
    },
    data() {
        return {
            srcImg: this.defaultImg
        }
    },
    methods: {
        selectImg() {
            this.$refs.file.click()
        },
        changeAvatar(e) {
            console.log(e.target.files[0].name);
            const formData = new FormData()
            formData.append('avatar', e.target.files[0])
            this.postReqv(formData)
        },
        async postReqv(formData) {
            const request = await axios.post('https://tinn.io/api/test/avatar/', formData)
            console.log(request.data.data);
            this.srcImg = `https://tinn.io/api/test/avatar/${request.data.data.avater}` 
        },
        removeAvatar() {
            this.srcImg = this.defaultImg
        }
    },
}
</script>
<style scoped>
.profile-avatar{
    max-width: 175px;
}
.profile-avatar__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 56px;
}

.profile-avatar__block-img {
    background-color: #F1F9FF;
    border-radius: 50%;
    width: 119px;
    height: 119px;
    margin-bottom: 15.75px;
    overflow: hidden;
}
.profile-avatar__controls{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}
.profile-avatar__change{
    cursor: pointer;
}
.profile-avatar__remove{
    cursor: pointer;
}
.profile-avatar__input{
    display: none;
}
.profile-avatar__img{
    width: 119px;
    height: 119px;
}
</style>