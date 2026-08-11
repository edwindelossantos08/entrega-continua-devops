# Entrega Continua — Hola Mundo DevOps

App web "Hola Mundo" en Node.js con ciclo DevOps completo:

1. **Docker** → imagen publicada en [Docker Hub](https://hub.docker.com/r/dantes08/hola-mundo-devops)
2. **GitHub Actions** → en cada push a `main` se construye la imagen, se sube a Docker Hub y se despliega a producción en Render.com
3. **Producción** → https://hola-mundo-devops-latest-mns6.onrender.com

## Ejecutar localmente

```bash
docker run -p 3000:3000 dantes08/hola-mundo-devops:latest
```

Luego abrir http://localhost:3000

## Secrets requeridos en GitHub

| Secret | Descripción |
|--------|-------------|
| `DOCKERHUB_USERNAME` | Usuario de Docker Hub |
| `DOCKERHUB_TOKEN` | Access Token de Docker Hub (Read & Write) |
| `RENDER_DEPLOY_HOOK_URL` | Deploy Hook del servicio en Render |
