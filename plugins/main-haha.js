let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/1b75800473d70a7b0f395.png', m, { packname: "sticker by", author: "DXN" })
}

handler.customPrefix = /^(haha)$/i
handler.command = new RegExp

module.exports = handler
