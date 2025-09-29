# 📨 DAGE Telegram Bot Hook

[🌐 English](README.md) | [🇨🇳 中文](README_CN.md) | [🇪🇸 Español](README_ES.md) | [🇫🇷 Français](README_FR.md) | [🇩🇪 Deutsch](README_DE.md)

[www.dage.party](https://www.dage.party)

This script is a simple Cloudflare Worker that integrates with the **Telegram Bot API**.  
It focuses on returning **group IDs** and **user IDs** when someone messages your bot.  
It’s lightweight, serverless, and easy to deploy.

---

## ✨ Features

- 📡 Handles Telegram bot webhooks directly in Cloudflare Workers  
- 👤 Automatically returns your **Telegram User ID** in private chat  
- 👥 Automatically returns **Group ID** and **Sender ID** in group chats  
- 🔐 Uses a **secret token** to verify requests from Telegram  
- ⚡ Includes one‑click **install/uninstall** routes for webhook setup  

---

## 🚀 How to Deploy

1. **Deploy the Worker** code to Cloudflare Workers.  

2. **Set the required environment variables** in your Cloudflare Worker:  

   | Name             | Value (Example)         |
   | ---------------- | ----------------------- |
   | `DAGEBOTTOKEN`   | Your bot token from BotFather |
   | `DAGEOWNERID`    | Your Telegram User ID (to receive notifications) |
   | `DAGEINSTALLMODE`| `true` (temporarily to enable /install & /uninstall routes) |

3. **Install the webhook** by navigating to your Worker URL or using `curl`:

   ```
   https://your-worker.your-subdomain.workers.dev/install
   ```

   After successful installation, you will get a confirmation in your Telegram (to the Owner ID).

4. **Remove or set `DAGEINSTALLMODE` to `false`** after installation to disable install/uninstall routes.

---

## ⚠️ Security Notes

- **Change** `c_WEBHOOKPATH` in the code to a unique path, e.g. `/mysecretHookPath`.  
- **Change** `c_SECRETCODE` in the code to a random string (e.g. `ABC123XYZ`).  
- Do **not** put your bot token in the code. Always set it in Cloudflare Environment Variables.

---

## 📝 Example Responses

- In a private chat, the bot replies:  

  ```
  Your ID: 123456789
  ```

- In a group chat, the bot replies:  

  ```
  Group ID: -987654321
  Sender ID: 123456789
  ```

---

## 🛠 Uninstall Webhook

If you want to remove the webhook:

```
https://your-worker.your-subdomain.workers.dev/uninstall
```

You’ll receive confirmation in your Telegram (Owner ID).

---

## ❤️ Credits

Created with 💙 by [DAGE.PARTY](https://www.dage.party)  
Powered by **Cloudflare Workers** + **Telegram Bot API**
