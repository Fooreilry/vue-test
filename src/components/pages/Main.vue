<template>
    <header class="header">
        <div class="conteiner">
            <navbar class="header__navbar"/>
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
    <!-- разбить на блоки -->
    <div class="tool-kit">
        <div class="tool-kit__wrapper">
            <div class="conteiner">
                <h2 class="tool-kit__title">Набор инструментов для контроля процессов продаж и маркетинга</h2>
                <div class="tool-kit__items">
                <tools-card-item v-for="tool in tools" :tool="tool" :key="index" />
            </div>
        </div>
        </div>
    </div>
    <div class="advantages">
        <div class="advantages__wrapper">
            <div class="conteiner">
                <div class="advantages-list">
                    <advantages-card-item v-for="(advantage, index) in advantages" :class="[index % 2 !== 0 ? 'advantages-card_orange':'']" :key="index" />
                </div>
            </div>
        </div>
    </div>
    <div class="tools-list">
        <div class="conteiner">
            <div class="tools-list__wrapper">
                <h2 class="tools-list__title">Инструменты</h2>
                <div class="tools-list__items">
                    <tools-card-item v-for="tool in tools2" :tool="tool" :key="index" />
                </div>
            </div>
        </div>
    </div>
   <div class="banner">
        <div class="banner__wrapper">
            <h2 class="banner__title">Совершенствуйте процессы <br> отдела продаж и маркетинга</h2>
            <div class="banner__text">Развивайте бизнес и увеличивайте продажи, используя email <br> маркетинг, чат-боты и бесплатную СRM</div>
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
                { icon: '', title: 'CRM', body: 'Отслеживайте наиболее эффективные сделки в СRM. Так вы сможете выделять отдельный сегмент наиболее активных клиентов и поощрять их за преданность бренду.' },
                { icon: '', title: 'Лендинги', body: 'Создавайте лендинги, не вникая в азы программирования.Привлекательный дизайн и полезный контент лендинга помогут мотивировать потенциальных клиентов к целевому действию.' },
                { icon: '', title: 'Чат-боты', body: 'Используйте чат-ботов в Facebook, Telegram и WhatsApp, чтобы генерировать новых лидов, дополнительно их прогревать и доводить до сделки.' },
                { icon: '', title: 'Push уведомления', body: 'Дополните свои кампании web push уведомлениями, чтобы возвращать посетителей на свой сайт и информировать их, например, о новостях и последних распродажах.' },
                { icon: '', title: 'SMS', body: 'Сделайте SMS рассылку частью воронки продаж. Быстро доставляйте подписчикам актуальную информацию о выгодных акциях, предстоящих мероприятиях, доставке или хранении товара.' },
                { icon: '', title: 'Email', body: 'Создавайте отдельные сегменты аудитории, анализируйте взаимодействие подписчиков с вашим брендом, чтобы вовремя устранить их сомнения, наладить контакт и увеличить продажи.' },
            ],
            advantages: [
                'Принимайте решения на основе данных',
                'Принимайте решения на основе данных',
                'Принимайте решения на основе данных',
                'Принимайте решения на основе данных'
                            ]
        }
    },
}
</script>

<style scoped>
.header{
    padding: 32px 0 133px;
    width: 100%;
    background-color: #029EEB;
    border-radius: 40px;
}
.conteiner{
    margin:  0 auto;
    width: 100%;
    max-width: 1400px;
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
}
.tool-kit{
    width: 100%;
}
.tool-kit__wrapper{
    padding: 152px 0 143px;
}
.tool-kit__title {
    font-size: 56px;
    line-height: 72px;
    font-weight: 400;
    color: #010849;
    margin-bottom: 64px;

}
.tool-kit__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 24px;
}
.tools-list{
    width: 100%;
}
.tools-list__wrapper{
    padding: 96px 0 112px;
}
.tools-list__title{
    font-size: 56px;
    line-height: 72px;
    font-weight: 400;
    color: #010849;
    margin-bottom: 48px;
}
.tools-list__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 24px;
}
.advantages{
    width: 100%;
    background-image: url('@/assets/img/Rectangle 4.png');
    border-radius: 40px;
}
.advantages-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
}
.advantages__wrapper{
    padding: 174px 0;
}
.banner{
    width: 100%;
    background-color: #029EEB;
    border-radius: 40px;
}
.banner__wrapper{
    padding: 76px 0 75.5px 98px;
}
.banner__title {
    font-weight: 400;
    font-size: 56px;
    line-height: 72px;
    margin-bottom: 24px;
}

.banner__text {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #DAECFB;
    margin-bottom: 40px;
}
</style>