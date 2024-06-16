const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994401242354";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_10_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3LFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtbU03cVF4MVpHWEh5cXB5L0kza3lGMnN6ZndVMTQwUTVWbXM4M0cyUTMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMTI0MjM1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzYzRUREMTE0NERGRDUyQzU1RTRCMjA3OEQ3NDU2QUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTMyNjM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAxMjQyMzU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OTRFRTMxRUFBN0RDNkEwODNBRTBEQjM4QTg5Q0RGQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1MzI2MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUHA5RnJMS29UZDYxNGZGUlJ2a2hkQVwiLFxuICBcInBob25lSWRcIjogXCI1MjY4Y2MyOC1mYjY5LTRiZjEtOGY1Mi05YjQ5Nzk0NTJkODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTQ1LFxuICAgICAgMTQxLFxuICAgICAgMTAwLFxuICAgICAgMTAsXG4gICAgICA4NyxcbiAgICAgIDIyNyxcbiAgICAgIDExMCxcbiAgICAgIDE2NSxcbiAgICAgIDI0MSxcbiAgICAgIDE5NixcbiAgICAgIDEzNCxcbiAgICAgIDk5LFxuICAgICAgMjEsXG4gICAgICAyNCxcbiAgICAgIDkwLFxuICAgICAgMTQ0LFxuICAgICAgMTQ2LFxuICAgICAgMTkxLFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICA3MixcbiAgICAgIDEwMCxcbiAgICAgIDE3NCxcbiAgICAgIDUwLFxuICAgICAgNjIsXG4gICAgICAyMjAsXG4gICAgICAxNCxcbiAgICAgIDYzLFxuICAgICAgMTc5LFxuICAgICAgMTkyLFxuICAgICAgMTE3LFxuICAgICAgMTcwLFxuICAgICAgNDQsXG4gICAgICAxMCxcbiAgICAgIDIsXG4gICAgICA0MSxcbiAgICAgIDc5LFxuICAgICAgMzgsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlFZU0xNU1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMTI0MjM1NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjY3MTA1NzgxOTI0OTA6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimaXvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYTF6dlFDRUpmMHVyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtjazVSNktJbTBXMm52Vm1ZWmE0RVdNYlNzN21SWWFEVUJXc2ZDeDkvbDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnZYZDhJV2tTaXVpb3dBcUtYaWthNFJiMzhrTHk2MnVHQkJHSmFqMTNjU3RUbzE5SGZRVXN3WnpFby9XT1RzVFFPaGttL3d3blp4T0psWUxFUU45Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFBBeEYrMmxBaUtvejZFckZOd2dNdnlPdzVNdUhwRER4ZTdOZXZiUk11K0pJTE1VQnZWVWhZNDVZOWhIM1ZHRmhwM25oMkdrYzRhSy9SM3pLTEkwaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAxMjQyMzU0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODUzMjYzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtHbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0dtLmpzb24iOiAie1wia2V5RGF0YVwiOlwid2hBcjNIdGN4cDNWRlVYR01YSU82VVVwUFNoQTc5WDJTSUpXcFd6UWtBOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODE0MjUzMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUyOTA3MTUyMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
