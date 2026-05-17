# Utiliser une image de base Python
FROM python:3.9-slim-buster

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier des dépendances
COPY requirements.txt .

# Installer les dépendances
RUN pip install -r requirements.txt

# Copier le reste du code de l'application
COPY . .

# Exposer le port utilisé par Flask
EXPOSE 5000

# Commande pour lancer l'application
CMD ["python", "app.py"]