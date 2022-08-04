let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikerhuuu), m, { packname: "MLU S4", author: "MLUBOT" })
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/a03916d4eb0794f2680ff.png",
 "https://telegra.ph/file/3e07beef6f680de02b19d.png",
 "https://telegra.ph/file/09ed1ae78e24a0be1986c.png"
]
