const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "w!";
/////////////////////////
//////////////////////// 


const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true})
const Music = require('discord.js-musicbot-addon');
client.login(حط توكن بوتك هنا)
client.on('ready', ()=> {
    console.log('Ready!')
})
 Music.start(client, {
    prefix: "!", // البرفكس هنا
    youtubeKey: 'AIzaSyDIv8O9OwZdoTaghK3_SQmyGcQFzkXMW6E', //هنا ال yt v3 api key
    global: false, // يكون للسيرفرات ؟ خليه false, يكون queue مشترك خليه true            
    maxQueueSize: 50, // اقصى حجم لل queue        
    playCmd: 'play', // امر التشغيل
    volumeCmd: 'vol',     // امر الصوت
    thumbnailType: 'high',
    leaveCmd: 'stop',    // امر المغادرة
    anyoneCanSkip: true, // تبي الكل يقدر يسوي skip? true > yep, false > nope
    disableLoop: false, // تبي يكون فيه اعادة؟ , true > yep, false > nope
    searchCmd: 'search', //امر البحث 
    requesterName: true, 
    inlineEmbeds: false,     
    queueCmd: 'queue', // امر القائمة
    pauseCmd: 'pause', // امر الايقاف المؤقت
    resumeCmd: 'resume', // امر الاستمرار
    skipCmd: 'skip', // امر السكب
    loopCmd: 'loop', // امر الاعادة
    enableQueueStat: true,
  });
  
  
  client.on('ready', () => {
   console.log(----------------);
      console.log(Desert Bot- Script By : Diamond Codes);
        console.log(----------------);
      console.log(ON ${client.guilds.size} Servers '     Script By : Diamond Codes ');
    console.log(----------------);
  console.log(Logged in as ${client.user.tag}!);
client.user.setGame(آلَآيّّآمِـ تًُـمِـر وُ آلَسًسًـنٌيّّنٌ قهِوُة,"http://twitch.tv/S-F%22)
client.user.setStatus("online")
 
});

client.login(process.env.BOT_TOKEN);
