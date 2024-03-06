import { generateWAMessageFromContent } from '@whiskeysockets/DokiBot'
let handler  = async (m, { conn }) => {
let texto = `
╭─────────────┈⊷
│ *No seas rata bro , para comprar el bot o saber los precios comunícate con mi creador https://wa.me/525625060788*
╰┬────────────┈⊷` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: 'CAPIPREMIUM ', body: null, thumbnail: imagen2, sourceUrl: 'https://chat.whatsapp.com/IkmoGgRSDi46dOTiH1EF74' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.tags = ['main']
handler.command = /^(instalarbot)/i
export default handler
