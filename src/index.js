import { Telegraf } from 'telegraf'
import { Scenes } from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN)
const scenarioTypeScene = new Scenes.BaseScene('SCENARIO_TYPE_SCENE_ID');

const contactDataWizard = new Scenes.WizardScene(
  'CONTACT_DATA_WIZARD_SCENE_ID', // first argument is Scene_ID, same as for BaseScene
  (ctx) => {
    ctx.reply('What is your name?');
    ctx.wizard.state.contactData = {};
    return ctx.wizard.next();
  },
  (ctx) => {
    // validation example
    if (ctx.message.text.length < 2) {
      ctx.reply('Please enter name for real');
      return; 
    }
    ctx.wizard.state.contactData.fio = ctx.message.text;
    ctx.reply('Enter your e-mail');
    return ctx.wizard.next();
  },
  async (ctx) => {
    ctx.wizard.state.contactData.email = ctx.message.text;
    ctx.reply('Thank you for your replies, well contact your soon');
    await mySendContactDataMomentBeforeErase(ctx.wizard.state.contactData);
    return ctx.scene.leave();
  },
);

bot.command('addsong', (ctx) => {
  ctx.scene.enter('CONTACT_DATA_WIZARD_SCENE_ID');
  // console.log(ctx.from)
  // ctx.reply("¿Link de Spotify?")
  // ctx.reply(`Tu id es ${ctx.from.id}`)
  
  // bot.on('text', (ctx) => {
  //   // Comprobar que es LINK de Spotify
  //   ctx.reply(`Vale. Link añadido. ${ctx.message.text}`)
  // })

})

bot.hears('culo', (ctx) => {
  console.log(ctx.state);
  ctx.reply("Eso se me dise!!??!?!")
})

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

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))