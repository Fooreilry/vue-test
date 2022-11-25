<template>
    <div class="tools-card">
        <p class="tools-card__title">{{tool.title}}</p>
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
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 32px;
    color: #010849;
}
.tools-card__text{
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: #010849;
    opacity: 0.5;
}
</style>