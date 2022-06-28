let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (!global.mods.includes(who.split`@`[0])) throw 'dia bukan moderator!'
    let index = global.mods.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.mods.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} sekarang bukan Moderator!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delmods [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)mods$/i

handler.owner = true

module.exports = handler
