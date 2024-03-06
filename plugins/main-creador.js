let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Anthony Ventas\nFN:Anthony Ventas\nORG:Anthony Ventas\nTITLE:\nitem1.TEL;waid=525625060788:525625060788\nitem1.X-ABLabel:Daniel 🇦🇱\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Anthony Ventas\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Anthony Ventas', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['creadores', 'creator', 'creador', 'dueño'] 

export default handler
