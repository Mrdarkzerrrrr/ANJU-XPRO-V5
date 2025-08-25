//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFIaWxiWncxM0V4MjZ4WlIwK3NNNlZrcWhCWjRnR3M2MUJ5S1NPelBGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnpVNndqR1lvWmdJK1FIaEI0L0szK1ZuTTBQUEwwVkw1YS9XWVl1TVVqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSG0vSVZMWVo2NFZwZ0I0VHdONVhRM0FZQ1BXdk94M3M4MkxGc0IxUUh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6Sm9WeXlodHpaeWRBMUhvaVdJWXJnaWpWcVNQV3BnZ2hzWUY1TVVodFE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CdFpvMW1UWWNGZys2enNGdlZzV0VNS0JxZTlFcnNPVHp5SmxDRFV4RlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZITjlON0ZsRGljTHJ0L1ppNnA3eEJBUzB3ZmhyUklpa3dXdGxwbnA5MFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdFTXRyKy9GZ2w5UXk5L3g1d3ZyNFR5MmF3ZW5UejVaRURMcmN4SkRFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTFIbnd5N0t6Vk83SmRGS21MVzFlbDI5WHVJd0FzUDk4dTVqdXpvZlVRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpxamxhYktZSTZOdHdTWkZMbXQxODB6RWg5dUtCeWg1WHBBejhEVHJKK0NGYnR2ZStGQWZTVitpMktTeFdwRmprT29iOHkwUWRDZW0wemtLYVVUSWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJQODdyTzdHYm5NYjhNR3Jrb005RVQ5N0Jienhpd2kycGxEY2xwTVhET2FBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQzODExMTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQkNGRUQ2RjE1MDZFMDJFRkY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwODQyMTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFUTDBWRlZSVHUyUmU2TE9rNjFIWnciLCJwaG9uZUlkIjoiOWJmZmQ5MDAtNDk2Mi00NDdkLTg1MDMtNGM4NWUwMzFlMTM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRraGFkVklweWxXeWh5WHlTcU00Um9aOFkrQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaS3VvTTY5UTAzRVlSRElLS3hDUDlQNnRUcVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVkxWFRZR0IiLCJtZSI6eyJpZCI6Ijk0NzQzODExMTc4OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1yIiwibGlkIjoiMjcyMTQyNjE2ODA1NTg4OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3FoaU1JRUVPenZyc1VHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia1phNW9mdjlSa1F0S0ZyUHNrZnpuT3ZWUTZMaXNEbHI2U0JTSmVHRmFuQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQWVsZ3B5QzF3bEUxZ214NTRDMXozT25SOVBLN3RQWVJ4RmpJWVg3VGtpbm52L1Rxa3U0aHVHd010WFNZUjcxWHovdWZoZGZOYTRQekpuSkhVc1k5akE9PSIsImRldmljZVNpZ25hdHVyZSI6Iks5SFN3WWZOU2ZKZkRFR3hTS0t2WlErWnlOYTJ2RjhxbEFsTXZERENnbEM0MW1QMy9xbEo2UTh2VnlFYStMcWN6QjA2WEhrUEVWZ3JoVmpHQURBRmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDM4MTExNzg6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkdXdWFINy9VWkVMU2hhejdKSDg1enIxVU9pNHJBNWEra2dVaVhoaFdwdyJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDg0MjE2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHMrIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
