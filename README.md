# 🏓 Paddle Court Reservation Platform (MERN)

Application web **Full Stack MERN** permettant aux **clubs de padel** de gérer leurs terrains et aux **clients de réserver des créneaux en ligne**.

La plateforme possède **3 rôles principaux** :

- **Super Admin** → gère toute la plateforme
- **Admin (Club de Padel)** → gère les terrains et réservations de son club
- **Client** → réserve un terrain

---

# ⚙️ Stack Technique

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- dotenv

## Frontend
- React
- React Router
- Axios
- Context API
- TailwindCSS ou Bootstrap

## Outils de développement
- Nodemon
- Git
- Postman
- Vite

---

# 🚀 Fonctionnalités

## Authentification
- Inscription utilisateur
- Connexion sécurisée avec JWT
- Gestion des rôles utilisateurs

## Super Admin
- Créer des clubs de padel
- Créer des comptes administrateurs
- Voir toutes les réservations de la plateforme
- Activer ou désactiver un club

## Admin (Club)

- Ajouter un terrain
- Modifier un terrain
- Supprimer un terrain
- Gérer les disponibilités
- Voir les réservations du club

## Client

- Créer un compte
- Voir les clubs disponibles
- Voir les terrains disponibles
- Réserver un terrain
- Annuler une réservation
- Voir ses réservations

---

# 🛠 Installation du projet

## 1. Cloner le projet

git clone https://github.com/yourusername/padel-booking-platform.git

cd padel-booking-platform

---

## 2. Installation du Backend

Se déplacer dans le dossier server :

cd server

Installer les dépendances :

npm install

Créer un fichier `.env` :

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

Lancer le serveur :

npm run dev

Le backend sera accessible sur :

http://localhost:5000

---

## 3. Installation du Frontend

Se déplacer dans le dossier client :

cd client

Installer les dépendances :

npm install

Lancer l'application React :

npm run dev

Le frontend sera accessible sur :

http://localhost:5173

---

# 📁 Structure du projet

padel-booking-platform

client/  
&nbsp;&nbsp;&nbsp;&nbsp;src/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pages/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;services/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.jsx  

server/  
&nbsp;&nbsp;&nbsp;&nbsp;controllers/  
&nbsp;&nbsp;&nbsp;&nbsp;models/  
&nbsp;&nbsp;&nbsp;&nbsp;routes/  
&nbsp;&nbsp;&nbsp;&nbsp;middleware/  
&nbsp;&nbsp;&nbsp;&nbsp;server.js  

---

# 📌 Résumé

Cette application permet :

- aux **clubs de padel** de gérer leurs terrains
- aux **clients** de réserver facilement
- à un **super admin** de gérer toute la plateforme

Le projet est développé avec la **stack MERN :**

MongoDB + Express + React + Node.js
