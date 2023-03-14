const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6141574049:AAEbaspYJG6f-uUDxP4WO6s9uDeCdIsWMAY';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg: any, match: any) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg: any) => {
  const chatId = msg.chat.id;



  const ourInstance = new NLPService()

setTimeout(async () => {

    console.log("Ich hatte 2 Sekunden Bedenkzeit. ")
    // ourInstance.testIt()

    const answer = await ourInstance.getAnswer(msg.text)

    bot.sendMessage(chatId, answer);

}, 2 * 1000)



});