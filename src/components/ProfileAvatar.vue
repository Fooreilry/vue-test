<template>
    <form class="profile-avatar">
        <div class="profile-avatar__wrapper">
            <div class="profile-avatar__block-img">
                <input class="profile-avatar__input" type="file" ref="file" @change="changeAvatar" accept="image/png, image/jpeg, image/svg">
                <img class="profile-avatar__img" :src="userImg" alt="">
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
import { mapState, mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations({
            setUserImg: 'avatar/setUserImg',
        }),
        selectImg() {
            this.$refs.file.click()
        },
        convertFornData(e) {
            const formData = new FormData()
            formData.append('avatar', e.target.files[0])
            this.imgRequest(formData)
        },
        async imgRequest(formData) {
            const request = await axios.post('https://tinn.io/api/test/avatar/', formData)
            console.log(request.data.data);
            this.srcImg = `https://tinn.io/api/test/avatar/${request.data.data.avater}` 
        },
        removeAvatar() {
            this.setUserImg(this.userDefaulthImg)
        }
    },
    computed: {
        ...mapState({
            userDefaulthImg: state => state.avatar.userDefaulthImg,
            userImg: state => state.avatar.userImg,
        })
    },
    mounted() {
        this.setUserImg(this.userDefaulthImg)
    }
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