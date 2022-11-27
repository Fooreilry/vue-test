<template>
    <div class="tools-card">
        <div class="tools-card__title">
            <img class="tools-card__title-icon" :src="tool.icon" alt="">
            <p class="tools-card__title-text">{{tool.title}}</p>
        </div>
        <p class="tools-card__text">{{tool.body}}</p>
    </div>
</template>
<script>
export default {
    props: {
        tool: {
            type: Object,
        }
    }
}
</script>
<style scoped>
.tools-card{
    padding: 48px 40px 16px;
    background-color: #ffffff;
    border-radius: 40px;
    width: 100%;
}
.tools-card__title{
    display: flex;
    align-items: center;
}
.tools-card__title-text{
    font-size: 24px;
    line-height: 32px;
    color: #010849;
    margin-bottom: 32px;
}
.tools-card__title-icon{
    width: 48px;
    height: 48px;
    display: block;
    margin-bottom: 24px;
    margin-right: 16px;
}
.tools-card__text{
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: #010849;
    opacity: 0.5;
}
</style>