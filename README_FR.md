# 📜 DAGE Telegram Bot Hook (Français)

Ce script aide à recevoir les messages Telegram et renvoie **l’ID du groupe** et **l’ID de l’utilisateur**.

## 🌐 Comment l’utiliser
1. **Configurez les variables d’environnement dans le panneau Cloudflare Workers**  
   - `DAGEBOTTOKEN` → Jeton de votre bot (BotFather)  
   - `DAGEOWNERID` → Votre ID Telegram  
   - `DAGEINSTALLMODE` → `true` pour activer /install et /uninstall  
2. **Installer le webhook**  
   - Ouvrez `/install` dans votre navigateur ou utilisez curl  
3. **Après installation**  
   - Supprimez `DAGEINSTALLMODE` ou mettez-le à `false`  
4. **Sécurité**  
   - Changez `c_WEBHOOKPATH` et `c_SECRETCODE` en valeurs uniques et secrètes  

## ⚙️ Ce que ça fait
- Reçoit les messages Telegram (privés ou groupes)
- Renvoie **votre ID** si message privé
- Renvoie **ID du groupe et expéditeur** dans un groupe
