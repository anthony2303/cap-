let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*Hola usuario estos son los grupos ofc de Shana-bot*

📎 *CAPIBOT VENTAS 🈴*
 
https://chat.whatsapp.com/IkmoGgRSDi46dOTiH1EF74

📎 *Canal ⭐*

https://chat.whatsapp.com/IkmoGgRSDi46dOTiH1EF74

⚙️ *Grupos En Colaboración:*

1 _CAPIBOT_

https://chat.whatsapp.com/IkmoGgRSDi46dOTiH1EF74

2 CAPIBOT

 https://chat.whatsapp.com/IkmoGgRSDi46dOTiH1EF74

─────────────
🧿Si se restableció los enlaces comunicate con mi creador usa el comando #creador para comunicarte con el 🌟`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `CAPIBOT - ASISTENCIA\n\n\n` + wm, media, 'https://github.com', 'CAPI-BOT', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^grupos|gruposofc$/i
handler.exp = 33

export default handler
