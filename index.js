import { Telegraf } from "telegraf";

const bot = new Telegraf("5095927198:AAGd4hqkt3IiJH8BEtRSnt2uJXEMzevIuQA");

bot.command("addsong", (ctx) => {
  console.log(ctx.from);
  ctx.reply("¿Link de Spotify?");
  ctx.reply(`${ctx.from.username}`);

  // bot.on('text', (ctx) => {
  //   // Comprobar que es LINK de Spotify
  //   ctx.reply(`Vale. Link añadido. ${ctx.message.text}`)
  // })
});

bot.hears("culo", (ctx) => {
  console.log(ctx.state);
  ctx.reply("Eso se me dise!!??!?!");
});

// bot.on('text', (ctx) => {
//   // Explicit usage
//   // ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

//   // Using context shortcut
//   ctx.reply(`Hello ${ctx.state.role}`)
// })

// bot.on('callback_query', (ctx) => {
//   // Explicit usage
//   // ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

//   // Using context shortcut
//   ctx.answerCbQuery()
// })

// bot.on('inline_query', (ctx) => {
//   const result = []
//   // Explicit usage
//   // ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

//   // Using context shortcut
//   ctx.answerInlineQuery(result)
// })

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
