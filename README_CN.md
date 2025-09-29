# 📨 DAGE Telegram 机器人 Hook

[🌐 English](README.md) | [🇨🇳 中文](README_CN.md) | [🇪🇸 Español](README_ES.md) | [🇫🇷 Français](README_FR.md) | [🇩🇪 Deutsch](README_DE.md)

[www.dage.party](https://www.dage.party)

此脚本是一个简单的 Cloudflare Worker，集成 **Telegram Bot API**。  
它专注于在有人向机器人发送消息时返回 **群组 ID** 和 **用户 ID**。  
轻量、无服务器、易于部署。

---

## ✨ 功能

- 📡 在 Cloudflare Workers 中直接处理 Telegram bot webhook  
- 👤 私聊自动返回你的 **Telegram 用户 ID**  
- 👥 群聊自动返回 **群组 ID** 和 **发送者 ID**  
- 🔐 使用 **secret token** 验证 Telegram 请求  
- ⚡ 提供一键 **安装/卸载** webhook 路由  

---

## 🚀 部署步骤

1. **部署 Worker** 代码到 Cloudflare Workers。  

2. **在 Cloudflare Worker 设置环境变量**：  

   | 名称              | 示例值                      |
   | ----------------- | --------------------------- |
   | `DAGEBOTTOKEN`    | BotFather 提供的机器人令牌   |
   | `DAGEOWNERID`     | 你的 Telegram 用户 ID（接收通知） |
   | `DAGEINSTALLMODE` | `true`（临时启用 /install & /uninstall 路由） |

3. **安装 webhook**，访问你的 Worker URL 或使用 `curl`：

   ```
   https://your-worker.your-subdomain.workers.dev/install
   ```

   安装成功后，你将在 Telegram（Owner ID）收到确认消息。

4. **安装完成后删除或设置 `DAGEINSTALLMODE` 为 `false`**，以禁用 install/uninstall 路由。

---

## ⚠️ 安全提示

- **修改** 代码中的 `c_WEBHOOKPATH` 为唯一路径，如 `/mysecretHookPath`  
- **修改** 代码中的 `c_SECRETCODE` 为随机字符串（例如 `ABC123XYZ`）  
- 切勿将机器人令牌写在代码中，请使用 Cloudflare 环境变量

---

## 📝 示例回复

- 私聊机器人：

  ```
  Your ID: 123456789
  ```

- 群聊机器人：

  ```
  Group ID: -987654321
  Sender ID: 123456789
  ```

---

## 🛠 卸载 Webhook

如果想删除 webhook：

```
https://your-worker.your-subdomain.workers.dev/uninstall
```

你会在 Telegram（Owner ID）收到确认消息。

---

## ❤️ 版权

由 [DAGE.PARTY](https://www.dage.party) 创作 💙  
基于 **Cloudflare Workers** + **Telegram Bot API**
