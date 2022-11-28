<template>
    <header class="header">
        <div class="header__conteiner">
            
            <div class="header__content">
                <h2 class="header__title">Единая платформа <br>
                    для маркетинга <br>
                    и продаж</h2>
                <p class="header__text">Выстраивайте диалоги <br>
                    с клиентами через email, SMS <br>
                    и чат-боты в мессенджерах</p>
                <div class="header__buttons">
                    <my-button class="header__button button_grey">Начать бесплатно</my-button>
                    <my-button class="header__button">Войти</my-button>
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
    min-width: 1000px;
    width: 100%;
    background-color: #029EEB;
    background-image: url('@/assets/img/Mask_group.png');
    background-size: cover;
    border-radius: 40px;
}
.header__conteiner {
    padding: 211px 22.5px 133px;
    margin: 0 auto;
    width: 100%;
    max-width: 1360px;
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
.header__button{
    padding: 16px 28px;
}
</style>