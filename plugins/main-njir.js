let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/52b798d54f94a014f22fb.png', m, { packname: "sticker by", author: "DXN" })
}

handler.customPrefix = /^(njir)$/i
handler.command = new RegExp

module.exports = handler
