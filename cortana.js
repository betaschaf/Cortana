var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on('guildCreate', (guild) => {
  guild.defaultChannel.sendMessage(`Hi, I am Cortana, your super Assistant.\n\nHere are some of the things I can do for you.\n*Tell you jokes*\n*Sing a song.*\n\nYour name is now: **${guild.name}**\nYou´re all set! Now, lets see what I can get started for you.`);
  guild.defaultChannel.sendMessage(`----------------------------------`);
  guild.defaultChannel.sendMessage(`Hallo, ich bin Cortana.\nWie wär´s mit einer Assistentin? Ich unterstütze dich gerne.\n\nHier sind einige Dinge, die ich für dich erledigen kann.\n*Bing-Websuche.*\n*Lieder singen, Geschichten erzählen, Spaß haben.*\n\nDein Name lautet nun: **${guild.name}**\n\n*Bitte warten..*\nDu bist startklar! Mal sehen, was ich als erstes für dich tun kann.`);
  console.log(`Betreten -> Name: ${guild.name} -> Owner: ${guild.owner.username} -> ID des Owners: ${guild.ownerID}`);
});
bot.on("Event",  (Guild) =>  {
console.log(Guild.name);
});
bot.on("Event",  (Guild) =>  {
console.log(Guild.id);
});
bot.on("Event",  (Guild) =>  {
console.log(Invite.toString);
});
bot.on('message', message => {
  if (message.author.username === 'Cortana') {
try {
  message.delete(12000000)
 .then(msg => console.log('Nachrichtn gelöscht von "' + message.author.username + '"' ))
        } catch (err) {
   message.chnannel.sendMessage('CortanaError:beta1delete12000000')
 }
 }
//thismustbeupdatedwhenyouusediscord.js10.x
  var random = Math.floor((Math.random() * 5) + 1);

    if (random === 1) {
        bot.user.setStatus('here', 'hey cortana, help');
  }

    if (random === 2) {
        bot.user.setStatus('here', 'by beta#0922');
  }
  if (random === 3) {
      bot.user.setStatus('here', 'Hi, I am Cortana');
  }
    if (random === 4) {
      bot.user.setStatus('here', 'Besser als Apple.');
  }
    if (random === 5) {
      bot.user.setStatus('here', 'http://bot.discord.io/cortana');
  }
{
    var input = message.content.toUpperCase();
    if(input === "CORTANA|GAME")
	{
		message.channel.sendMessage("This Function has been disabled -> There is autochanging now.");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "CORTANA|GAME")
	{brauc
		message.channel.sendMessage("This Function has been disabled -> There is autochanging now.");
	}
};

///////////
//ENGLISH//
//////////

//tellmeajoke_is_not_in_here
//singmeasong_is_not_in_here

{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, WHAT DO YOU THINK OF WINDOWS 10")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, WHAT DO YOU THINK OF WINDOWS 10')
		message.channel.sendMessage("I´m excited to be a part of it. [https://youtu.be/rWKfyQVUwfM]");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, WHOS BETTER YOU OR SIRI")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, WHOS BETTER YOU OR SIRI')
		message.channel.sendMessage("That´s a tought one. It`s like comparing apples with windows. [https://youtu.be/ZKFuZPQY8_0]");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, WHAT DO YOU THINK OF GOOGLE")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, WHAT DO YOU THINK OF GOOGLE')
		message.channel.sendMessage("Impressive achievement. Still, I get everything I know from Bing. [https://youtu.be/7vkl-D2JjGk]");
	}
};
var random = Math.floor((Math.random() * 2) + 1);
var pre = 'HEY CORTANA, '
var input = message.content.toUpperCase()

if (random === 1 && input === pre + 'WHAT DOES THE FOX SAY') {
  web = 0
console.log(message.author.username + ' benutzte HEY CORTANA, WHAT DOES THE FOX SAY')
  message.channel.sendMessage('Wa-pa-pa-pa-pa-pa-pow! [https://youtu.be/VYrmnKn-rqk]');
}

if (random === 2 && input === pre + 'WHAT DOES THE FOX SAY') {
  web = 0
console.log(message.author.username + ' benutzte HEY CORTANA, WHAT DOES THE FOX SAY')
  message.channel.sendMessage('Ring-ding-ding-ding-dingeringeding. [https://youtu.be/RQVFtz2JfPY]');
}
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, HELP")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, HELP (BILD)(CHRISTMAS)')
		message.channel.sendFile("https://cdn.discordapp.com/attachments/234274282283204611/252369401477726208/cortana-03_christmas.jpg");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, HELP")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, HELP')
		message.channel.sendMessage("**-=-** Cortana - by beta#0922 **-=-**\n\n**Deutsche Hilfe?** ``hey cortana, hilfe``\n\n**New:**\nChristmas Profilepicture and Christmaslogo\n\n**Commands:**\n**Prefix:** ``hey cortana, ``\n**Starter:**\n``help`` - Shows this little text.\n``discord`` - Shows the server-count and the Invite-Link :smile:\n``link`` - Shows only the Invite-Link\n\n**Search:**\n``trans TEXT`` - Translates the text into German (You must click the Link)\n``insta TEXT`` - Shows the Link to your searched Instagram Profile\n``showme TEXT`` - Shows you your searched Text in Bing Pictures (You must click the link)\n``TEXT`` - Searches your text, just click the Link. And ignore the German Text :smile:\n\n**Cortana-Commands:**\n``sing me a song``\n``tell me a joke``\n``what does the fox say``\n``what do you think of windows 10``\n``what do you think of google``\n``whos better you or siri``\n\nPlease Note, that this Bot is made for German-User, but I also want to do something for you English one! So, there are comming other commands, but not soon.\n\n\nSee you later, beta.");
	}
};



//the_code_that_is_here_normal_is_private

///////////
//SEARCH//
//////////
var input = message.content.toUpperCase()
var transPrefix =  'HEY CORTANA, TRANS ';
 if(input.startsWith(transPrefix) ){
   var trans = input.substr(transPrefix.length);
   var transDown = trans.toLowerCase();
   var transDownUrl = transDown.split(' ').join('+');
   var transUrl = 'https://www.bing.com/translator?to=de&text=' + transDownUrl;
    console.log(message.author.username + ' benutzte HEY CORTANA, TRANS')
    message.channel.sendMessage('Übersetzung fertig.\n' + transUrl);
};
var input = message.content.toUpperCase()
var instaPrefix =  'HEY CORTANA, INSTA ';
 if(input.startsWith(instaPrefix) ){
   var insta = input.substr(instaPrefix.length);
   var instaDown = insta.toLowerCase();
   var instaDownUrl = instaDown.split(' ').join('+');
   var instaUrl = 'https://www.instagram.com/' + instaDownUrl ;
    console.log(message.author.username + ' benutzte HEY CORTANA, INSTA')
    message.channel.sendMessage('Hier ist das Profil.\n' + instaUrl);
};
var input = message.content.toUpperCase()
var weatherPrefix =  'HEY CORTANA, WEATHER ';
 if(input.startsWith(weatherPrefix) ){
   var weather = input.substr(weatherPrefix.length);
   var weatherDown = weather.toLowerCase();
   var weatherDownUrl = weatherDown.split(' ').join('+');
   var weatherUrl = 'https://www.msn.com/en-ca/weather/weathersearch?q=' + weatherDownUrl ;
    console.log(message.author.username + ' benutzte HEY CORTANA, WEATHER')
    message.channel.sendMessage('Wähle aus:\n' + weatherUrl);
};
var input = message.content.toUpperCase()
var picturePrefix =  'HEY CORTANA, SHOWME ';
 if(input.startsWith(picturePrefix) ){
   var picture = input.substr(picturePrefix.length);
   var pictureDown = picture.toLowerCase();
   var pictureDownUrl = pictureDown.split(' ').join('+');
   var pictureUrl = 'http://www.bing.com/images/search?q=' + pictureDownUrl;
    console.log(message.author.username + ' benutzte HEY CORTANA, SHOWME')
    message.channel.sendMessage('(Du musst diesen Link anklicken.)\n' + pictureUrl);

};
///////////
//GERMAN//
//////////

//singmireinlied_is_not_in_here
//erzählmireinegeschichte_is_not_in_here
//erzählmireinenwitz_is_not_in_here

var random = Math.floor((Math.random() * 2) + 1);
var pre = 'HEY CORTANA, '
var input = message.content.toUpperCase()

  if (random === 1 && input === pre + 'DU BIST GEFEUERT') {
    web = 0
	console.log(message.author.username + ' benutzte HEY CORTANA, DU BIST GEFEUERT')
    message.channel.sendMessage('Gut, ich bin dann mal weg. Aber nicht rufen, OK? [https://youtu.be/mLm2Kc0DZUc]');
  }

  if (random === 2 && input === pre + 'DU BIST GEFEUERT') {
    web = 0
	console.log(message.author.username + ' benutzte HEY CORTANA, DU BIST GEFEUERT')
    message.channel.sendMessage('Falle ich jetzt durch eine Klappe in den Boden? [https://youtu.be/5ZJeQD_O26U]');
  }
  var random = Math.floor((Math.random() * 2) + 1);
  var pre = 'HEY CORTANA, '
  var input = message.content.toUpperCase()

    if (random === 1 && input === pre + 'DU BIST DUMM') {
      web = 0
  	console.log(message.author.username + ' benutzte HEY CORTANA, DU BIST DUMM')
      message.channel.sendMessage('Bist du heute nicht gut drauf? [https://youtu.be/ufQrT0oZR6c]');
    }

    if (random === 2 && input === pre + 'DU BIST DUMM') {
      web = 0
  	console.log(message.author.username + ' benutzte HEY CORTANA, DU BIST DUMM')
      message.channel.sendMessage('Entspann dich bitte. [https://youtu.be/GgqW_fTkth0]');
    }

//thesmallcommandsarenotinhere

{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, DISCORD")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, DISCORD')
		message.channel.sendMessage(`:arrow_right: In ${bot.channels.size} Channels\n:arrow_right: Auf ${bot.guilds.size} Servern\n:arrow_right: Mit insgesamt ${bot.users.size} Usern`);
	    message.channel.sendMessage("Einladungs-Link: http://bot.discord.io/cortana\nNeed help with Cortana? Join our Help/Support Server. http://discord.gg/S2W4enp");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, LINK")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, DISCORD')
	    message.channel.sendMessage("Einladungs-Link: http://bot.discord.io/cortana :smile:\nNeed help with Cortana? Join our Help/Support Server. http://discord.gg/S2W4enp");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, SERVER")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, DISCORD')
	    message.channel.sendMessage("Join our Help/Support Server here: http://discord.gg/S2W4enp");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, HILFE")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, HILFE (BILD)(CHRISTMAS)')
		message.channel.sendFile("https://cdn.discordapp.com/attachments/234274282283204611/252369401477726208/cortana-03_christmas.jpg");
	}
};
{
    var input = message.content.toUpperCase();
    if(input === "HEY CORTANA, HILFE")
	{
		console.log(message.author.username + ' benutzte HEY CORTANA, HILFE')
		message.channel.sendMessage("**-=-** Cortana - by beta#0922 **-=-**\n\n**Need English Help?** ``hey cortana, help``\n\n**Neuerungen:**\nNeues Weihnachts-Profilbild und Weihnachtslogo\n\n**Commands:**\n**Prefix:** ``hey cortana, ``\n**Starter:**\n``hilfe`` - Zeigt dir die Hilfe-Liste.\n``discord`` - Zeigt dir die Serveranzahl etc. und gibt den Einladungs-Link\n``link`` - Gibt dir den Einladungs-Link\n\n**Suchen:**\n``trans SUCHBEGRIFF`` - Zeigt dir den Link zum Bing Übersetzer mit deinem Suchbegriff (->DE)\n``insta SUCHBEGRIFF`` - Zeigt dir den Link zu dem gesuchten Instagram-Profil\n``showme SUCHBEGRIFF`` - Gibt dir den Link zu Bing Bilder mit deinem gesuchten Suchbegriff\n``SUCHBEGRIFF`` - Sucht bei Bing nach deinem Suchbegriff\n\n**Cortana-Befehle:**\n``du bist dumm``\n``kennst du siri``\n``kennst du bill gates``\n``magst du bill gates``\n``du bist gefeuert``\n``hast du superkräfte``\n``was ist deine superkraft``\n``kennst du den master chief``\n``liebst du den master chief``\n``wie alt bist du``\n``erzähl mir einen witz``\n``erzähl mir eine geschichte``\n``sing mir ein lied``\nWeitere Befehle kommen bald.\n\n\nBis dann, beta.");
	}
};
///////////
//SEARCH//
//////////
var input = message.content.toUpperCase()
var bingPrefix =  'HEY CORTANA, ';
 if(input.startsWith(bingPrefix) ){
   var bing = input.substr(bingPrefix.length);
   var bingDown = bing.toLowerCase();
   var bingDownUrl = bingDown.split(' ').join('+');
   var bingUrl = 'http://www.bing.com/search?q=' + bingDownUrl + ']';
    console.log(message.author.username + ' benutzte HEY CORTANA, ')
    message.channel.sendMessage("____________________________ \_\_\_____________________________ \_\_\____________________________ \_\_\_____________________________\_\_\_____________________________ \_\_\_____________________________ \_\_\_____________________________ \_\_\_____________________________ \_\_\_____________________________ \_\_\_____________________________ \_\_\_____________________________ \_\_\_____________________________ ")
	message.channel.sendMessage('\n Weitere Ergebnisse auf Bing.com anzeigen. \n['  + bingUrl );
};

});
bot.login("well NO");
