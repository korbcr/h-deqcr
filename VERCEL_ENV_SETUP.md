# Configuración de Variables de Ambiente en Vercel

## Variables requeridas

### Para PRODUCCIÓN (Production)
- `NEXT_PUBLIC_API_URL` = `https://hdeq-api-strapi.onrender.com`
- `API_TOKEN` = `[TOKEN_DE_PRODUCCIÓN]`
- `NEXT_PUBLIC_SITE_URL` = `https://www.h-deq.com`

### Para PREVIEW/DESARROLLO (Preview)
- `NEXT_PUBLIC_API_URL` = `https://hdeq-api-strapi.onrender.com`
- `API_TOKEN` = `[TOKEN_DE_DESARROLLO]`
- `NEXT_PUBLIC_SITE_URL` = `https://h-deqcr-git-dev-korbcrs-projects.vercel.app`

## Comandos de Vercel CLI (si usas CLI)

```bash
# Producción
vercel env add NEXT_PUBLIC_API_URL production
vercel env add API_TOKEN production
vercel env add NEXT_PUBLIC_SITE_URL production

# Preview
vercel env add NEXT_PUBLIC_API_URL preview
vercel env add API_TOKEN preview
vercel env add NEXT_PUBLIC_SITE_URL preview
```

## Notas importantes

1. **NEXT_PUBLIC_** - Estas variables son accesibles en el cliente
2. **API_TOKEN** - Esta variable es privada, solo disponible en el servidor
3. Después de agregar variables, necesitas redesplegar para que tomen efecto
4. Puedes usar diferentes valores para producción y preview/desarrollo

## Verificación

Para verificar que las variables están funcionando:
1. Despliega tu aplicación
2. Revisa los logs de Vercel
3. Usa `console.log(process.env.NEXT_PUBLIC_API_URL)` en tu código temporalmente
