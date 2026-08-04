# Configuración de Variables de Ambiente

## Archivos de configuración

- `.env.local` - Variables locales (no se sube a git)
- `.env.development` - Variables para desarrollo
- `.env.production` - Variables para producción
- `.env.example` - Plantilla con todas las variables necesarias

## Variables disponibles

### Variables públicas (accesibles en el cliente)
- `NEXT_PUBLIC_API_URL` - URL base del API
- `NEXT_PUBLIC_SITE_URL` - URL del sitio web

### Variables privadas (solo en el servidor)
- `API_TOKEN` - Token de autenticación para el API

## Configuración inicial

1. Copia el archivo `.env.example` como `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` con tus valores reales:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:1337
   API_TOKEN=tu_token_real_aqui
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## Jerarquía de variables

Next.js carga las variables en este orden (las siguientes sobrescriben a las anteriores):

1. `.env`
2. `.env.local`
3. `.env.development` / `.env.production`
4. `.env.development.local` / `.env.production.local`

## Seguridad

- ✅ Variables que empiezan con `NEXT_PUBLIC_` son accesibles en el cliente
- ⚠️ Variables sin este prefijo solo están disponibles en el servidor
- 🔒 Nunca pongas información sensible en variables `NEXT_PUBLIC_`
- 📝 Los archivos `.env*.local` están en `.gitignore` y no se suben al repositorio

## Uso en el código

```javascript
// En componentes del cliente
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Solo en el servidor (getServerSideProps, API routes, etc.)
const apiToken = process.env.API_TOKEN;
```
