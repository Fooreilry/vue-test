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
    <div class="tools-list">
        <div class="conteiner">
            <h2 class="tools-list__title">Набор инструментов для контроля процессов продаж и маркетинга</h2>
            <div class="tools-list__wrapper">
                <tools-card-item v-for="tool in tools" :tool="tool" :key="index" />
            </div>
        </div>
    </div>
    <div class="advantages">
        <div class="advantages__wrapper">
            <div class="conteiner">
                <advantages-card-item style="width: 25%;" />
            </div>
        </div>
    </div>
    <div class="tools-list">
        <div class="conteiner">
            <h2 class="tools-list__title">Инструменты</h2>
            <!-- Заменить название стиля -->
            <div class="tools-list__wrapper2">
                <tools-card-item v-for="tool in tools2" :tool="tool" :key="index" />
            </div>
        </div>
    </div>
   <div class="banner">
        <div class="banner__wrapper">
            <h2 class="banner__title">Совершенствуйте процессы отдела продаж и маркетинга</h2>
            <div class="banner__text">Развивайте бизнес и увеличивайте продажи, используя email маркетинг, чат-боты и бесплатную СRM</div>
            <my-button class="button_grey">Начать бесплатно</my-button>
        </div>
   </div>
    
    <my-footer/>
</template>

<script>
import ToolsCardItem from '@/components/ToolsCardItem.vue'
import AdvantagesCardItem from '@/components/AdvantagesCardItem.vue'
import MyFooter from '@/components/MyFooter.vue';
export default {
    components: {
        ToolsCardItem,
        AdvantagesCardItem,
        MyFooter
    },
    data() {
        return {
            tools: [
                { icon: '', title: 'Превращайте лидов в покупателей', body: 'Используйте чат-боты, формы подписки и лендинги для сбора контактов. Автоматически добавляйте контакты в свою СRM и сопровождайте их по воронке до успешного завершения сделки.' },
                { icon: '', title: 'Автоматизируйте коммуникацию', body: 'Благодаря бесшовной интеграции CRM с другими сервисами SendPulse вы сможете общаться с клиентами по электронной почте или через чат-бота прямо из карточки контакта в вашей СRM.' },
                { icon: '', title: 'Принимайте решения на основе данных', body: 'Вся история взаимодействий с клиентом у вас под рукой. Пользуйтесь всеми данными, чтобы выстраивать успешные воронки продаж и сокращать время на заключение сделок.' },
                { icon: '', title: 'Работайте слаженно в команде', body: 'Приглашайте коллег и распределяйте права доступа, чтобы назначать ответственных за выполнение задач и отслеживать эффективность, будь то работа с рассылками или со сделками в СRM.' },
            ],
            tools2: [
                { icon: '', title: 'Превращайте лидов в покупателей', body: 'Используйте чат-боты, формы подписки и лендинги для сбора контактов. Автоматически добавляйте контакты в свою СRM и сопровождайте их по воронке до успешного завершения сделки.' },
                { icon: '', title: 'Автоматизируйте коммуникацию', body: 'Благодаря бесшовной интеграции CRM с другими сервисами SendPulse вы сможете общаться с клиентами по электронной почте или через чат-бота прямо из карточки контакта в вашей СRM.' },
                { icon: '', title: 'Принимайте решения на основе данных', body: 'Вся история взаимодействий с клиентом у вас под рукой. Пользуйтесь всеми данными, чтобы выстраивать успешные воронки продаж и сокращать время на заключение сделок.' },
                { icon: '', title: 'Работайте слаженно в команде', body: 'Приглашайте коллег и распределяйте права доступа, чтобы назначать ответственных за выполнение задач и отслеживать эффективность, будь то работа с рассылками или со сделками в СRM.' },
                { icon: '', title: 'Работайте слаженно в команде', body: 'Приглашайте коллег и распределяйте права доступа, чтобы назначать ответственных за выполнение задач и отслеживать эффективность, будь то работа с рассылками или со сделками в СRM.' },
                { icon: '', title: 'Работайте слаженно в команде', body: 'Приглашайте коллег и распределяйте права доступа, чтобы назначать ответственных за выполнение задач и отслеживать эффективность, будь то работа с рассылками или со сделками в СRM.' },
            ]
        }
    },
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
    max-width: 1464px;
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
.tools-list{
    width: 100%;
}
.tools-list__title{
    font-size: 56px;
    line-height: 72px;
    font-weight: 400;
    color: #010849;
    
}
.tools-list__wrapper{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 24px;
}
.advantages{
    width: 100%;
    background-color: #ffffff;
    border-radius: 40px;
    transform: skew(-10deg);
}
.advantages__wrapper{
    padding: 174px 0;
}
.tools-list__wrapper2{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 24px;
}
</style>