# Image Node.js
FROM node:18

# Dossier de travail
WORKDIR /app

# Copier package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["node", "app.js"]