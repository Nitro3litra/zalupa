const { Telegraf } = require('telegraf');

// Замените YOUR_BOT_TOKEN на токен, который вы получили от BotFather
const bot = new Telegraf('7614816804:AAEN3xhRcH9BKsicmaaF4r0D4pPsQYcgamE');

// Команда /start
bot.command('start', (ctx) => {
    ctx.reply('Добро пожаловать в Tap Tap Hamster!');
});

// Запуск бота
bot.launch();
