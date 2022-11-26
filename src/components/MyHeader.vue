<template>
    <header class="header">
        <div class="header__conteiner">
            <navbar class="header__navbar" />
            <div class="header__content">
                <h2 class="header__title">Единая платформа <br>
                    для маркетинга <br>
                    и продаж</h2>
                <p class="header__text">Выстраивайте диалоги <br>
                    с клиентами через email, SMS <br>
                    и чат-боты в мессенджерах</p>
                <div class="header__buttons">
                    <my-button class="button_grey">Начать бесплатно</my-button>
                    <my-button>Войти</my-button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style>
.header{
    padding: 32px 0 133px;
    width: 100%;
    background-color: #029EEB;
    background-image: url('@/assets/img/Mask_group.png');
    background-size: cover;
    border-radius: 40px;
}
.header__conteiner {
    margin: 0 auto;
    width: 100%;
    max-width: 1405px;
}
.header__navbar {
    margin-bottom: 123px;
}

.header__title {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 72px;
    line-height: 80px;
}

.header__text {
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #DAECFB;
}

.header__buttons {
    display: flex;
    gap: 18px;
}
</style>