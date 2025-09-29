# 📜 DAGE Telegram Bot Hook (Español)

Este script ayuda a recibir mensajes de Telegram y devolver **ID de grupo** y **ID de usuario**.

## 🌐 Cómo usarlo
1. **Configura las variables de entorno en Cloudflare Workers Panel**  
   - `DAGEBOTTOKEN` → Token de tu bot (BotFather)  
   - `DAGEOWNERID` → Tu ID de usuario de Telegram  
   - `DAGEINSTALLMODE` → `true` para habilitar /install y /uninstall  
2. **Instalar webhook**  
   - Abre `/install` en tu navegador o usa curl  
3. **Después de instalar**  
   - Elimina `DAGEINSTALLMODE` o cámbialo a `false`  
4. **Seguridad**  
   - Cambia `c_WEBHOOKPATH` y `c_SECRETCODE` a valores únicos y secretos  

## ⚙️ Qué hace
- Recibe mensajes de Telegram (privados o grupos)
- Devuelve **tu ID** si envías un mensaje privado
- Devuelve **ID del grupo y remitente** si es en un grupo
