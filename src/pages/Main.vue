<template>
    <header class="header">
        <div class="conteiner">
            <navbar class="header__navbar"/>
            <div class="header__content">
                <h2 class="header__title">Единая платформа
                    для маркетинга
                    и продаж</h2>
                <p class="header__text">Выстраивайте диалоги
                    с клиентами через email, SMS
                    и чат-боты в мессенджерах</p>
                <div class="header__buttons">
                    <my-button class="button_grey">Начать бесплатно</my-button>
                    <my-button>Войти</my-button>
                </div>
            </div>
        </div>
    </header>
    <tools-card-item />
    <advantages-card-item/>
</template>

<script>
import ToolsCardItem from '@/components/ToolsCardItem.vue'
import AdvantagesCardItem from '@/components/AdvantagesCardItem.vue'
export default {
    components: {
        ToolsCardItem,
        AdvantagesCardItem
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    background-color: #029EEB;
    border-radius: 40px;
}
.conteiner{
    margin:  0 auto;
    width: 100%;
    max-width: 1405px;
}
.header__navbar{
    margin-bottom: 123px;
}
.header__title{
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 72px;
    line-height: 80px;
}
.header__text{
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #DAECFB;
}
.header__buttons{
    display: flex;
    gap: 18px;
    padding-bottom: 133px;
}
</style>