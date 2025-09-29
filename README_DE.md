# 📜 DAGE Telegram Bot Hook (Deutsch)

Dieses Skript hilft beim Empfangen von Telegram-Nachrichten und gibt **Gruppen-ID** und **Benutzer-ID** zurück.

## 🌐 Verwendung
1. **Setze Umgebungsvariablen im Cloudflare Workers Panel**  
   - `DAGEBOTTOKEN` → Dein Bot-Token (BotFather)  
   - `DAGEOWNERID` → Deine Telegram-ID  
   - `DAGEINSTALLMODE` → `true`, um /install und /uninstall zu aktivieren  
2. **Webhook installieren**  
   - Öffne `/install` im Browser oder nutze curl  
3. **Nach der Installation**  
   - `DAGEINSTALLMODE` entfernen oder auf `false` setzen  
4. **Sicherheit**  
   - Ändere `c_WEBHOOKPATH` und `c_SECRETCODE` auf einzigartige, geheime Werte  

## ⚙️ Was es macht
- Empfängt Telegram-Nachrichten (privat oder Gruppen)
- Gibt **deine ID** bei privater Nachricht zurück
- Gibt **Gruppen-ID und Absender** in einer Gruppe zurück
