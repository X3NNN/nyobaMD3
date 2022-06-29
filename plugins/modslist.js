let handler = async (m, { conn }) => {
  let mods = global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `「 List Moderator 」` + `\n` + mods.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: mods } })
}
handler.help = ['modlist']
handler.tags = ['info']
handler.command = /^(modlist|listmod)$/i


module.exports = handler
