import petHotelBotTelegram from '../../bots/petHotelBotTelegram.js'

import AppError    from '../../models/AppError.js'


const webAppUrl = 'https://47e1-94-178-147-166.ngrok-free.app'

export default async function handleStartMessage(msg) {
  try {
    const chatId = msg.chat.id
  
    await petHotelBotTelegram.execute('sendMessage', {
      chat_id: chatId,
      text: 'Hi! Here you can find a temporary home for your pet.',
      reply_markup: {
        inline_keyboard: [[{text: 'Choose a pet hotel', web_app: {url: webAppUrl}}]]
      },
      silent: true
    })
  } catch (e) {
    throw new AppError({
      code: 'SEND_TG_MESSAGE_FAILED',
      message: 'Failed to send a message to user.',
      originalError: e
    })
  }
}
