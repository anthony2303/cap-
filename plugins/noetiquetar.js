let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*[ ⚠️ ] no etiquetes a unos de mis creadores si tienes alguna consulta o duda hablale a su privado solo por tema de Capi-Bot*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@525625060788$/i
export default handler
