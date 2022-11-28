<template>
    <div class="main__wrapper">
        <my-header />
        <!-- разбить на компоненты -->
        <div class="tool-kit">
            <div class="tool-kit__wrapper">
                <div class="conteiner">
                    <h2 class="title tool-kit__title">Набор инструментов для контроля процессов продаж и маркетинга</h2>
                    <div class="tool-kit__items">
                        <tools-card-item v-for="(toolKit, index) in toolKits" :tool="toolKit" :key="index" />
                    </div>
                </div>
            </div>
        </div>
        <div class="advantages">
            <div class="advantages__wrapper">
                <div class="conteiner">
                    <h2 class="title advantages__title">Преимущества платформы</h2>
                    <div class="advantages-list">
                        <advantages-card-item v-for="(advantage, index) in advantages"
                            :class="[index % 2 !== 0 ? 'advantages-card_orange' : '']" :key="index" />
                    </div>
                </div>
            </div>
        </div>
        <div class="tools-list">
            <div class="conteiner">
                <div class="tools-list__wrapper">
                    <h2 class="title tools-list__title">Инструменты</h2>
                    <div class="tools-list__items">
                        <tools-card-item v-for="(tool, index) in tools2" :tool="tool" :key="index" />
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="banner__wrapper">
                <div class="banner__content">
                    <h2 class="title banner__title">Совершенствуйте процессы отдела продаж и маркетинга</h2>
                    <div class="banner__text">Развивайте бизнес и увеличивайте продажи, используя email маркетинг, чат-боты и
                        бесплатную СRM</div>
                    <my-button class="banner__button button_grey">Начать бесплатно</my-button>
                </div>
                <div class="banner__img"></div>
            </div>
        </div>
        
        <my-footer class="main__footer" />
    </div>
</template>

<script>
import ToolsCardItem from '@/components/ToolsCardItem.vue'
import AdvantagesCardItem from '@/components/AdvantagesCardItem.vue'
import MyFooter from '@/components/MyFooter.vue';
import MyHeader from '@/components/MyHeader.vue';
export default {
    components: {
        ToolsCardItem,
        AdvantagesCardItem,
        MyFooter,
        MyHeader
    },
    data() {
        return {
            toolKits : [
                { icon: require('@/assets/img/Add User.svg'), title: 'Превращайте лидов в покупателей', body: 'Используйте чат-боты, формы подписки и лендинги для сбора контактов. Автоматически добавляйте контакты в свою СRM и сопровождайте их по воронке до успешного завершения сделки.' },
                { icon: require('@/assets/img/More Circle.svg'), title: 'Автоматизируйте коммуникацию', body: 'Благодаря бесшовной интеграции CRM с другими сервисами SendPulse вы сможете общаться с клиентами по электронной почте или через чат-бота прямо из карточки контакта в вашей СRM.' },
                { icon: require('@/assets/img/Graph.svg'), title: 'Принимайте решения на основе данных', body: 'Вся история взаимодействий с клиентом у вас под рукой. Пользуйтесь всеми данными, чтобы выстраивать успешные воронки продаж и сокращать время на заключение сделок.' },
                { icon: require('@/assets/img/2 User.svg'), title: 'Работайте слаженно в команде', body: 'Приглашайте коллег и распределяйте права доступа, чтобы назначать ответственных за выполнение задач и отслеживать эффективность, будь то работа с рассылками или со сделками в СRM.' },
            ],
            tools2: [
                { icon: require('@/assets/img/Activity.svg'), title: 'CRM', body: 'Отслеживайте наиболее эффективные сделки в СRM. Так вы сможете выделять отдельный сегмент наиболее активных клиентов и поощрять их за преданность бренду.' },
                { icon: require('@/assets/img/Calendar.svg'), title: 'Лендинги', body: 'Создавайте лендинги, не вникая в азы программирования. Привлекательный дизайн и полезный контент лендинга помогут мотивировать потенциальных клиентов к целевому действию.' },
                { icon: require('@/assets/img/robot-one.svg'), title: 'Чат-боты', body: 'Используйте чат-ботов в Facebook, Telegram и WhatsApp, чтобы генерировать новых лидов, дополнительно их прогревать и доводить до сделки.' },
                { icon: require('@/assets/img/Notification.svg'), title: 'Push уведомления', body: 'Дополните свои кампании web push уведомлениями, чтобы возвращать посетителей на свой сайт и информировать их, например, о новостях и последних распродажах.' },
                { icon: require('@/assets/img/Chat.svg') , title: 'SMS', body: 'Сделайте SMS рассылку частью воронки продаж. Быстро доставляйте подписчикам актуальную информацию о выгодных акциях, предстоящих мероприятиях, доставке или хранении товара.' },
                { icon: require('@/assets/img/Message.svg'), title: 'Email', body: 'Создавайте отдельные сегменты аудитории, анализируйте взаимодействие подписчиков с вашим брендом, чтобы вовремя устранить их сомнения, наладить контакт и увеличить продажи.' },
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
.main__wrapper{
    
    padding: 32px 32px 0;
    background-color: #F1F9FF;
}
.title{
    font-size: 56px;
    line-height: 72px;
    font-weight: 400;
    color: #010849;
}
.conteiner{
    padding: 0 25px;
    margin:  0 auto;
    width: 100%;
    max-width: 1350px;
    min-width: 1000px;
}
.tool-kit{
    width: 100%;
}
.tool-kit__wrapper{
    padding: 152px 0 143px;
}
.tool-kit__title {
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
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 40px;
}
.advantages__title{
    margin-bottom: 80px;
}
.advantages-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
}
.advantages__wrapper{
    padding: 147px 0 174px;
}
.banner{
    width: 100%;
    background-color: #029EEB;
    border-radius: 40px;
}
.banner__wrapper{
    padding: 24px 24px 24px 98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 155px;
}
.banner__title {
    color: #ffffff;
    margin-bottom: 24px;
}
.banner__content{
    flex-basis: 50%;
}
.banner__img{
    width: 750.66px;
    height: 440px;
    background-image: url('@/assets/img/patterns.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.banner__text {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #DAECFB;
    margin-bottom: 40px;
}
.banner__button{
    padding: 16px 28px;
}
.main__footer{
    margin-top: 40px;
}
</style>