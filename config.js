const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049198070 ";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || " SUHAIL_06_11_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICA4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh1TE1wc1FkU01vRFhVa2Q0WnhETncrcjFnWWJzU3ZLQXl0TGV2K1EvSkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhjYUtXSkNvUl8yanMzdmtjWDFiUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjg1NWFjNTEtOTY1ZC00MGIyLWE3Y2MtNDM3M2Q1OGRjMjA2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDc3LFxuICAgICAgNTQsXG4gICAgICA4OSxcbiAgICAgIDIxNCxcbiAgICAgIDE3NSxcbiAgICAgIDExMSxcbiAgICAgIDE3MCxcbiAgICAgIDE2MyxcbiAgICAgIDE4NyxcbiAgICAgIDE4NyxcbiAgICAgIDE0LFxuICAgICAgMjQ5LFxuICAgICAgMTQ3LFxuICAgICAgMjAsXG4gICAgICAxMDQsXG4gICAgICAyMDcsXG4gICAgICA5NSxcbiAgICAgIDExOSxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDQ1LFxuICAgICAgMTE1LFxuICAgICAgMTYxLFxuICAgICAgMjExLFxuICAgICAgMjksXG4gICAgICA2OSxcbiAgICAgIDE2NixcbiAgICAgIDEwNyxcbiAgICAgIDEyNSxcbiAgICAgIDIzMSxcbiAgICAgIDIxMixcbiAgICAgIDE5MyxcbiAgICAgIDE5MCxcbiAgICAgIDc3LFxuICAgICAgMTYzLFxuICAgICAgNTUsXG4gICAgICAyLFxuICAgICAgMTg2LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllaVktCSFNRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ5MTk4MDcwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDEzNDkyNzE0Mjk1MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xSHNPOENFUFhqaGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHdpWFR3S0RTcWFReHJlMFpXTjIxSnpwOHI5Y2hQWGNMUFQ1TUJUNzZVRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0SXZCeElLT1hNVnZudmFiZk51dEtWMkswQ3F4SHJCUlFPNHhjZmY4TGJRR01jMzBJUlMrUGpwNGJON0V4cEl0M2REWnJhWkI3TlNFaU05eHgyemFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUWHZUK0tSVmpXZVppcWdSSEpkWFltNVdhN0dubmtpNnpRNHVYTHFqR3lObXdlUCs2U3FpeHRJMkZIQ2phS1dTeHowTVorcUh6QW4rb1FtdjBBOGFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ5MTk4MDcwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzNDIyNjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9 "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
