const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/addsong (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
  bot.sendMessage(chatId, "Spotify link?");
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  var isyouTubeUrl =
    /((http|https):\/\/)?(www\.)?(youtube\.com)(\/)?([a-zA-Z0-9\-\.]+)\/?/.test(
      msg.text
    );

  if (isyouTubeUrl) {
    bot.sendMessage(chatId, "Youtube video added");
  }
});
