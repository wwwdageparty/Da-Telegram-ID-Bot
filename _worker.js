/**
 * 🌐 www.dage.party
 * 
 * This Telegram bot returns user and group IDs:
 * - Private chat: returns your user ID.
 * - Group chat: returns group ID and sender ID.
 * 
 * ⚙️ Setup instructions:
 * 1. In Cloudflare Workers, set these environment variables:
 *    - DAGEBOTTOKEN → your bot token from BotFather
 *    - DAGEOWNERID → your Telegram user ID
 *    - DAGEINSTALLMODE → "true" (only during installation)
 * 2. Navigate to or curl the /install route to register the webhook.
 * 3. After successful installation, remove or set DAGEINSTALLMODE to "false".
 * 
 * ⚠️ Security tips:
 * - Change c_WEBHOOKPATH to a unique path for your bot.
 * - Change c_SECRETCODE to a random secret string.
 * 
 * 🇨🇳 机器人功能：
 * - 私聊：返回你的用户ID。
 * - 群聊：返回群ID和发送者ID。
 * 
 * ⚙️ 设置步骤：
 * 1. 在 Cloudflare Workers 设置环境变量：
 *    - DAGEBOTTOKEN → 从 BotFather 获取的机器人 token
 *    - DAGEOWNERID → 你的 Telegram 用户 ID
 *    - DAGEINSTALLMODE → "true"（仅安装期间）
 * 2. 访问或 curl /install 路径注册 webhook。
 * 3. 安装成功后，删除或设置 DAGEINSTALLMODE 为 "false"。
 * 
 * ⚠️ 安全提示：
 * - 修改 c_WEBHOOKPATH 为唯一路径。
 * - 修改 c_SECRETCODE 为随机安全字符串。
 * 
 * 🇪🇸 Función del bot:
 * - Chat privado: devuelve tu ID de usuario.
 * - Chat de grupo: devuelve el ID del grupo y del remitente.
 * 
 * ⚙️ Instrucciones:
 * 1. En Cloudflare Workers, configura estas variables de entorno:
 *    - DAGEBOTTOKEN → tu token del bot desde BotFather
 *    - DAGEOWNERID → tu ID de usuario de Telegram
 *    - DAGEINSTALLMODE → "true" (solo durante instalación)
 * 2. Navega o haz curl a la ruta /install para registrar el webhook.
 * 3. Después de la instalación exitosa, elimina o pon DAGEINSTALLMODE en "false".
 * 
 * ⚠️ Consejos de seguridad:
 * - Modifica c_WEBHOOKPATH a una ruta única.
 * - Cambia c_SECRETCODE a una cadena secreta aleatoria.
 * 
 * 🇫🇷 Fonction du bot :
 * - Chat privé : renvoie ton ID utilisateur.
 * - Chat de groupe : renvoie l’ID du groupe et l’ID de l’expéditeur.
 * 
 * ⚙️ Instructions :
 * 1. Dans Cloudflare Workers, définissez ces variables d'environnement :
 *    - DAGEBOTTOKEN → votre token de bot depuis BotFather
 *    - DAGEOWNERID → votre ID utilisateur Telegram
 *    - DAGEINSTALLMODE → "true" (uniquement lors de l'installation)
 * 2. Naviguez vers ou faites un curl sur /install pour enregistrer le webhook.
 * 3. Après installation réussie, supprimez ou mettez DAGEINSTALLMODE sur "false".
 * 
 * ⚠️ Conseils de sécurité :
 * - Modifiez c_WEBHOOKPATH avec un chemin unique.
 * - Changez c_SECRETCODE pour une chaîne secrète aléatoire.
 * 
 * 🇩🇪 Bot-Funktion:
 * - Privatchat: gibt deine Benutzer-ID zurück.
 * - Gruppenchat: gibt Gruppen-ID und Absender-ID zurück.
 * 
 * ⚙️ Einrichtung:
 * 1. In Cloudflare Workers diese Umgebungsvariablen setzen:
 *    - DAGEBOTTOKEN → dein Bot-Token von BotFather
 *    - DAGEOWNERID → deine Telegram-Benutzer-ID
 *    - DAGEINSTALLMODE → "true" (nur während der Installation)
 * 2. Navigiere oder curl die /install Route, um das Webhook zu registrieren.
 * 3. Nach erfolgreicher Installation, DAGEINSTALLMODE löschen oder auf "false" setzen.
 * 
 * ⚠️ Sicherheitshinweise:
 * - Ändere c_WEBHOOKPATH auf einen einzigartigen Pfad.
 * - Ändere c_SECRETCODE in eine zufällige geheime Zeichenkette.
 */

// 🌐 The display name of your bot (set in Telegram via API).
// This is what users see as the bot’s name in chats and profile.
// 🇨🇳 机器人显示名称。
// 🇪🇸 Nombre que se muestra del bot.
// 🇫🇷 Nom affiché du bot.
// 🇩🇪 Anzeigename des Bots.
const c_BotName = 'DageIDBot';

// 🌐 Short description (BIO) — shown in the bot profile under the name (max 120 chars).
// Keep it short and clear. Example: "Get your Telegram ID instantly".
// 🇨🇳 简短描述（简介），显示在机器人名字下面（最多 120 字）。
// 🇪🇸 Descripción corta (BIO), aparece debajo del nombre (máx. 120 caracteres).
// 🇫🇷 Courte description (BIO), sous le nom du bot (max 120 caractères).
// 🇩🇪 Kurze Beschreibung (BIO), unter dem Namen (max. 120 Zeichen).
const c_ShortDescription = 'Get chat and user IDs by forwarding any message here.'
  + '🔗 https://github.com/wwwdageparty/Da-Telegram-ID-Bot';

// 🌐 Full description — shown in the bot’s profile before the user starts chatting (max 512 chars).
// Good for explaining what the bot does and how to use it.
// 🇨🇳 完整描述，显示在用户开始聊天之前的机器人资料中（最多 512 字）。
// 🇪🇸 Descripción completa, aparece en el perfil antes de iniciar chat (máx. 512 caracteres).
// 🇫🇷 Description complète, affichée dans le profil avant le démarrage du chat (max 512 caractères).
// 🇩🇪 Vollständige Beschreibung, im Profil angezeigt vor dem Start des Chats (max. 512 Zeichen).
const c_Description = 'This bot helps you find Telegram IDs:\n'
  + '- In private chat: shows your own user ID.\n'
  + '- In groups: shows the group ID and the sender ID.\n'
  + 'Built with Cloudflare Workers 🚀.';

// 🌐 Welcome message — sent when the user types /start.
// Use it to introduce the bot and provide useful info/links.
// 🇨🇳 欢迎信息，当用户输入 /start 时发送。
// 🇪🇸 Mensaje de bienvenida, enviado cuando el usuario usa /start.
// 🇫🇷 Message de bienvenue, envoyé quand l’utilisateur tape /start.
// 🇩🇪 Willkommensnachricht, gesendet bei /start.
const c_Welcome = '👋 Welcome to DageIDBot!\n\n'
  + 'Forward me any message, and I will show you:\n'
  + '- Your user ID (in private chat)\n'
  + '- Group ID + sender ID (in group chat)\n\n'
  + '📖 Open-source project — deploy your own bot for free on Cloudflare Workers!\n'
  + '🔗 Source: https://github.com/wwwdageparty/Da-Telegram-ID-Bot';

// 🌐 The link path for your bot. Change to any word you like.
// 🇨🇳 机器人用的网址路径，可以改成任意单词。
// 🇪🇸 La dirección de tu bot. Cámbiala por cualquier palabra.
// 🇫🇷 L’adresse de ton bot. Change-la avec un mot unique.
// 🇩🇪 Adresse für deinen Bot. Ändere zu einem eigenen Wort.
const c_WEBHOOKPATH = '/dagetelegramHookPath'

// 🌐 Secret password. Change this to a random string (e.g. ABC123XYZ).
// 🇨🇳 安全密码，改成随机字符串（例如 ABC123XYZ）。
// 🇪🇸 Clave secreta. Cámbiala por una cadena aleatoria.
// 🇫🇷 Mot de passe secret. Mets une chaîne aléatoire.
// 🇩🇪 Geheimes Passwort. Ändere zu einer zufälligen Zeichenkette.
const c_SECRETCODE = '9X7Q-AB42-ZM1K'

// 🌐 Your bot token from BotFather. Do NOT put it here, set it in Cloudflare (name = DAGEBOTTOKEN).
// 🇨🇳 从 BotFather 得到的机器人令牌，不要写在这里，要在 Cloudflare 设置 (名字=DAGEBOTTOKEN)。
// 🇪🇸 Tu token de bot (de BotFather). No lo pongas aquí, configúralo en Cloudflare (nombre = DAGEBOTTOKEN).
// 🇫🇷 Le jeton de ton bot (de BotFather). Ne l’écris pas ici, mets-le dans Cloudflare (nom = DAGEBOTTOKEN).
// 🇩🇪 Dein Bot-Token von BotFather. Nicht hier eintragen, sondern in Cloudflare (Name = DAGEBOTTOKEN).
let G_BotToken = ""

// 🌐 Your own Telegram user ID. Do NOT put it here, set it in Cloudflare (name = DAGEOWNERID).
// 🇨🇳 你的 Telegram 用户 ID，不要写在这里，要在 Cloudflare 设置 (名字=DAGEOWNERID)。
// 🇪🇸 Tu ID de Telegram. No lo pongas aquí, configúralo en Cloudflare (nombre = DAGEOWNERID).
// 🇫🇷 Ton ID Telegram. Ne l’écris pas ici, mets-le dans Cloudflare (nom = DAGEOWNERID).
// 🇩🇪 Deine Telegram-ID. Nicht hier eintragen, sondern in Cloudflare (Name = DAGEOWNERID).
let G_OwnerChatID = ""

// 🌐 If "true" in Cloudflare env, install/uninstall routes are enabled. After setup, remove or set to "false".
// 🇨🇳 在 Cloudflare 环境变量中设置 "true" 可启用安装/卸载路由。安装完成后删除或改为 "false"。
// 🇪🇸 Si "true" en las variables de Cloudflare, se activan las rutas install/uninstall. Después de la instalación, eliminar o poner "false".
// 🇫🇷 Si "true" dans les variables Cloudflare, les routes install/uninstall sont activées. Après installation, supprimez ou mettez "false".
// 🇩🇪 Wenn "true" in Cloudflare-Variablen, werden die Routen install/uninstall aktiviert. Nach der Installation löschen oder auf "false" setzen.
let G_InstallMode = "false"

export default {
  async fetch(request, env) {
    G_BotToken = env.DAGEBOTTOKEN || ""
    G_OwnerChatID = env.DAGEOWNERID || ""
    G_InstallMode = (env.DAGEINSTALLMODE || "false").toLowerCase()

    if (!G_BotToken) return new Response('Hello World!')

    const url = new URL(request.url)

    if (url.pathname === c_WEBHOOKPATH) {
      try {
        await handleWebhook(env, request)
      } catch (error) {
        console.error(`Telegram webhook error: ${error}`)
      }
      return new Response('ok')

    } else if (G_InstallMode === "true" && url.pathname.startsWith('/install')) {
      return botInstall(request, env)
    } else if (G_InstallMode === "true" && url.pathname.startsWith('/uninstall')) {
      return botUninstall(request, env)
    }

    return new Response('Hello World!')
  }
}


/////////////////////////////////////////////////////////////////////
// Telegram Bot Block
/////////////////////////////////////////////////////////////////////

async function handleWebhook(env, request) {
  if (request.headers.get('X-Telegram-Bot-Api-Secret-Token') !== c_SECRETCODE) {
    console.error('Telegram secret token wrong')
    return
  }

  try {
    const updateData = await request.json()
    await onUpdate(env, updateData)
  } catch (err) {
    console.error('Failed to parse update JSON:', err)
  }
}

async function onUpdate(env, update) {
  if (update.message) await onMessage(env, update.message)
}

async function onMessage(env, message) {
  if (!message.chat) {
    await sendTextToOwner("Unknown message:\n" + JSON.stringify(message, null, 2))
    return
  }
  const senderId = message.from ? message.from.id : "unknown"
  let responseText = ''
  if (message.text && message.text.trim() === "/start") {
    await sendPlainText(message.chat.id, c_Welcome)
    return
  }

  if (message.forward_from_chat) {
    const forwardChatId = message.forward_from_chat.id
    responseText = `Forwarded from chat ID: ${forwardChatId}\n`
    if (message.forward_from) {
      const forwardFromId = message.forward_from.id
      responseText += `Original sender ID: ${forwardFromId}\n`
    }
  }

  if (message.chat.type === "private") {
    responseText += `Your ID: ${message.chat.id}`
  } else {
    responseText += `Group ID: ${message.chat.id}\nSender ID: ${senderId}`
  }

  await sendPlainText(message.chat.id, responseText)
}


/////////////////////////////////////////////////////////////////////
// Telegram Messaging Helpers
/////////////////////////////////////////////////////////////////////

async function sendTextToOwner(text) {
  await sendPlainText(G_OwnerChatID, text)
}

async function sendPlainText(chatId, text) {
  try {
    const targetUrl = apiUrl("sendMessage")
    const form = new FormData()
    form.append('chat_id', chatId)
    form.append('text', text)

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { "User-Agent": "Mozilla/5.0" },
      body: form,
    })

    return await res.json()
  } catch (err) {
    console.error('Failed to send message:', err)
  }
}

function apiUrl(methodName, params = null) {
  const query = params ? '?' + new URLSearchParams(params).toString() : ''
  return `https://api.telegram.org/bot${G_BotToken}/${methodName}${query}`
}


/////////////////////////////////////////////////////////////////////
// Install / Uninstall (Use Once)
/////////////////////////////////////////////////////////////////////

async function botInstall(request, env) {
  const url = new URL(request.url)
  await setBotInfo();
  return await tgRegisterWebhook(url)
}

async function botUninstall(request, env) {
  const res = await (await fetch(apiUrl('deleteWebhook'))).json()

  if (res && res.ok) {
    await sendTextToOwner("✅ Bot uninstalled successfully!")
  } else {
    await sendTextToOwner(`❌ Bot uninstallation failed:\n${JSON.stringify(res)}`)
  }

  return new Response(res && res.ok ? 'Ok' : JSON.stringify(res, null, 2))
}

async function tgRegisterWebhook(requestUrl) {
  const webhookUrl = `${requestUrl.protocol}//${requestUrl.hostname}${c_WEBHOOKPATH}`

  const res = await fetch(apiUrl('setWebhook', { url: webhookUrl, secret_token: c_SECRETCODE }))
  const resJson = await res.json().catch(() => null)

  if (resJson && resJson.ok) {
    await sendTextToOwner("✅ Bot installed successfully!")
  } else {
    await sendTextToOwner(`❌ Bot installation failed:\n${JSON.stringify(resJson)}`)
  }

  return new Response(resJson && resJson.ok ? 'Ok' : JSON.stringify(resJson, null, 2))
}


async function setBotInfo() {
  await fetch(apiUrl("setMyName"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: c_BotName }),
  });

  await fetch(apiUrl("setMyShortDescription"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ short_description: c_ShortDescription }),
  });

  await fetch(apiUrl("setMyDescription"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description: c_Description }),
  });

  await fetch(apiUrl("setMyCommands"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      commands: [
        { command: "start", description: "Show welcome message" }
      ],
    }),
  });
}
