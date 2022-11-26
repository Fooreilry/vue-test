<template>
    <div class="footer">
        <div class="footer__wrapper">
            <div class="footer__logo"></div>
            <div class="footer-menu">
                <div class="footer-menu__wrapper">
                    <ul class="footer-menu__items">
                        <h3 class="footer-menu__items-title">Email</h3>
                        <li v-for="(email, index) in emails" :key="index" class="footer-menu__item">{{ email }}</li>
                    </ul>
                    <ul class="footer-menu__items">
                        <h3 class="footer-menu__items-title">Чат-боты</h3>
                        <li v-for="(bot, index) in bots" :key="index" class="footer-menu__item">{{ bot }}</li>
                    </ul>
                    <ul class="footer-menu__items">
                        <h3 class="footer-menu__items-title">Сервисы</h3>
                        <li v-for="(service, index) in services" :key="index" class="footer-menu__item">{{ service }}</li>
                    </ul>
                    <ul class="footer-menu__items">
                        <h3 class="footer-menu__items-title">Полезное</h3>
                        <li v-for="(useful, index) in usefuls" :key="index" class="footer-menu__item">{{ useful }}</li>
                    </ul>
                    <ul class="footer-menu__items footer-menu__items_row-1">
                        <h3 class="footer-menu__items-title">Партнерам</h3>
                        <li v-for="(partner, index) in partners" :key="index" class="footer-menu__item">{{ partner }}</li>
                    </ul>
                    <ul class="footer-menu__items footer-menu__items_row-2">
                        <h3 class="footer-menu__items-title">О компании</h3>
                        <li v-for="(about, index) in abouts" :key="index" class="footer-menu__item">{{ about }}</li>
                    </ul>
                </div>
            </div>
            <div class="footer-links">
                <ul class="rules-links">
                    <li class="rules-link">Правила использования</li>
                    <li class="rules-link">Безопасность SendPulse</li>
                    <li class="rules-link">Политика Cookies</li>
                    <li class="rules-link">Политика конфиденциальности</li>
                </ul>
                <ul class="social-links">
                    <li class="social-link"><img :src="require('@/assets/img/facebook.svg')" alt=""></li>
                    <li class="social-link"><img :src="require('@/assets/img/twitter.svg')" alt=""></li>
                    <li class="social-link"><img :src="require('@/assets/img/linkedin.svg')" alt=""></li>
                    <li class="social-link"><img :src="require('@/assets/img/youtube.svg')" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emails: [
                'Email рассылка',
                'Транзакционные письма',
                'Исправление списка',
                'Конструктор писем',
                'Формы подписки',
                'Автоматические рассылки',
                'Готовые шаблоны',
                'A / B тестирование',
                'Расширение для Chrome'
            ],
            bots: [
                'Конструктор чат - ботов',
                'Instagram чат - боты',
                'Facebook чат - боты',
                'Telegram чат - боты',
                'WhatsApp чат - боты',
                'WhatsApp Business API',
                'Виджеты подписки',
                'Чат - бот приложение',
                'Примеры чат - ботов',
            ],
            services: [
                'Создание онлайн - курсов',
                'CRM',
                'Конструктор лендингов',
                'Мультиссылка для соцсетей',
                'SMS рассылка',
                'Viber рассылка',
                'Web push уведомления',
                'Поп - ап формы',
            ],
            usefuls: [
                'Мероприятия',
                'Академия SendPulse',
                'База знаний',
                'Глоссарий',
                'Блог',
                'Маркетинг под ключ',
                'Биржа email проектов',
                'Интеграции',
                'API',
                'Каталог экспертов'
            ],
            partners: [
                'Партнёрская программа',
                'Реферальная программа',
                'Сертификация'
            ],
            abouts: [
                'Команда',
                'Клиенты',
                'Отзывы клиентов',
                'Обновления сервиса',
                'Карьера'
            ]
        }
    },
}
</script>

<style>
.footer{
    width: 100%;
    background-color: #ffffff;
    border-radius: 40px 40px 0 0;
}
.footer__wrapper{
    padding: 72px 0 80px;
    width: 100%;
    max-width: 1375px;
    margin: 0 auto;
}
.footer__logo{
    width: 187px;
    height: 32px;
    background-image: url('@/assets/img/logo2.svg');
    margin-bottom: 80px;
}
.footer-menu{
    width: 100%;
}
.footer-menu__wrapper{
    margin-bottom: 68px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 186px auto;
}
.footer-menu__items{
    width: 100%;
}
.footer-menu__items_row-1{
    grid-column-start: 5;
    grid-row-start: 1;
}
.footer-menu__items_row-2{
    grid-column-start: 5;
    grid-row-start: 2;
}
.footer-menu__items-title{
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #010849;
    margin-bottom: 16px;
}
.footer-menu__item{
    color: #010849;
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
    opacity: 0.5;
}
.footer-links{
    display: flex;
    width: 100%;
    justify-content: end;
}
.social-links{
    display: flex;
    gap: 20px;
}
.rules-links{
    width: 100%;
    display: flex;
    align-self: end;
    justify-content: start;
    gap: 50px;

}
.rules-link{
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    color: #029EEB;
    cursor: pointer;
}
</style>