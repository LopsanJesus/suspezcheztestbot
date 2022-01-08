const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

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
    bot.sendMessage(
      chatId,
      `🤟🏼 cool ${msg.from.first_name}, song added with Youtube link`
    );
  }

  if (isSpotifyUrl) {
    bot.sendMessage(
      `awesome! ${msg.from.first_name}, song added with Spotify link`
    );
  }
});
