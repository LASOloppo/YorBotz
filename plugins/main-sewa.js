let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/b31b5f0109ff5bd098704.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by Atsair",
        "description": `
╭───────[ *SEWA* ]
┃⫹⫺ *𝙷𝙴𝙼𝙰𝚃:* 3k/grup [1 minggu]
┃⫹⫺ *𝙽𝙾𝚁𝙼𝙰𝙻:* 7k/grup [1 bulan]
┃⫹⫺ *𝚅𝙸𝙿:* 10K [9 bulan]
┃⫹⫺ *𝙿𝙴𝚁𝙼𝙰𝙽𝙴𝙽:* 15k [UNLIMITED]
┗──────────❑
[JADI BOT LANGSUNG SCAN?20K]
tertarik? hubungi: 
 @6289510402229   (Atsair)

`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6289510402229@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6289510402229\n\nowner number : wa.me/6289510402229"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
