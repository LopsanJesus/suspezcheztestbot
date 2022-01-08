const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/addsong (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const isyouTubeUrl =
    /((http|https):\/\/)?(www\.)?(youtube\.com)|(youtu\.be)(\/)?([a-zA-Z0-9\-\.]+)\/?/.test(
      msg.text
    );

  const isSpotifyUrl = /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/.test(
    msg.text
  );

  if (isyouTubeUrl) {
    bot.sendMessage(chatId, "Song added with Youtube link");
  }

  if (isSpotifyUrl) {
    bot.sendMessage(chatId, "Song added with Spotify link");
  }
});
