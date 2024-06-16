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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_11_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaRTliYnJDZkJhS3NNRDZPTE1TRHlDRFJzS2JhbzJyQWFxWmpYY1dnV2JvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMTI0MjM1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkFBMDQxQkRDNkYyMjczMDI4NjVFQURGM0VCMzQxNDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTI5MDcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAxMjQyMzU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QUNGQzQ3REU3RUQ0NDYzRUY3MjVGNUIyQjAwNjVBQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1MjkwNzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEJfQW1Rc0tSQW1sRWdPcDkwNXJKUVwiLFxuICBcInBob25lSWRcIjogXCI5NWUwMTVjMS03ZmNmLTQ2YTAtOGNlZS01MzFjNDQxZDJmOThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMzgsXG4gICAgICAxNTcsXG4gICAgICAzMixcbiAgICAgIDMwLFxuICAgICAgMTA3LFxuICAgICAgMjUzLFxuICAgICAgMTg3LFxuICAgICAgMjMwLFxuICAgICAgMjE4LFxuICAgICAgNjcsXG4gICAgICAyMDAsXG4gICAgICAxNjUsXG4gICAgICA4NixcbiAgICAgIDc2LFxuICAgICAgMTk3LFxuICAgICAgMjMyLFxuICAgICAgMzQsXG4gICAgICAxMjgsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxNzYsXG4gICAgICAxMDksXG4gICAgICAxMjEsXG4gICAgICA5NSxcbiAgICAgIDIyNCxcbiAgICAgIDE2MCxcbiAgICAgIDY4LFxuICAgICAgOTQsXG4gICAgICAyNDAsXG4gICAgICAxNixcbiAgICAgIDI1LFxuICAgICAgMTk4LFxuICAgICAgNDYsXG4gICAgICAyNTIsXG4gICAgICAxMzEsXG4gICAgICA4NyxcbiAgICAgIDI0MyxcbiAgICAgIDgxLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU4V0M3WE01XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDEyNDIzNTQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI2NzEwNTc4MTkyNDkwOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pml77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFcxenZRQ0VLdll1ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrY2s1UjZLSW0wVzJudlZtWVphNEVXTWJTczdtUllhRFVCV3NmQ3g5L2wwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNvZUE5eWNOYjI3dUVtK0x0Yi9mWlNCUGFuT21NMzArTk94MTJja2VZZTFkMnVsT2VUc01IZWtKbEdWc0FLQWcrN0lVUlZLdk40amxhRkxwTmRnMUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVWcWlna093VDhNTG1sdXkzbUN1TVhvRGladnBZOHgzVkwvZGFOTGgzRWlyZ0ZMYWI2K1l1NlRYMnZPdDBVa2oreHJiV3RtbkliYno3ZFBCdklVSkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMTI0MjM1NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1MjkwNzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLR21cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtHbS5qc29uIjogIntcImtleURhdGFcIjpcIndoQXIzSHRjeHAzVkZVWEdNWElPNlVVcFBTaEE3OVgyU0lKV3BXelFrQTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzgxNDI1MzMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MjkwNzE1MjFcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
