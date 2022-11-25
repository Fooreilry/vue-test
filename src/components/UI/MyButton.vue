<template>
    <button class="button">
        <slot class="button__text"></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.button{
    padding: 16px 28px;
    background-color: #1BAFF8;
    border: none;
    border-radius: 12px;
    line-height: 32px;
    font-size: 18px;
    color: #ffffff;
    font-style: italic;
    font-weight: 400;
}
.button_grey{
    background-color: #DAECFB;
    color: #029EEB;
}
</style>