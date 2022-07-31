let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/3e07beef6f680de02b19d.png', m, { packname: "sticker by", author: "DXN" })
}

handler.customPrefix = /^(kobo)$/i
handler.command = new RegExp

module.exports = handler
