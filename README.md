# DigiSchool - Système de Gestion Scolaire
<img width="373" height="248" alt="image" src="https://github.com/user-attachments/assets/2b76d39c-882e-4ce3-9c97-5397ca5da935" />

A Node.js/Express REST API for managing schools, students, teachers, classes, subjects, and grades.

Membres du projet : Julien BURTE, Dmitry KORZHENEVSKIV, Tommy BOUBAKER

## 📋 Description du Projet

DigiSchool est une API REST complète permettant de gérer un établissement scolaire. Le système permet de:

- **Gérer les élèves** (élèves) - Informations personnelles, classe, date de naissance, adresse
- **Gérer les professeurs** (profs) - Informations personnelles et assignation aux classes
- **Gérer les classes** - Organisation des classes et attribution des professeurs principaux
- **Gérer les matières** - Définition des matières enseignées
- **Gérer les notes** - Saisie et consultation des notes par élève, matière, trimestre
- **Gérer les trimestres** - Périodes d'évaluation scolaire
- **Authentification sécurisée** - Système d'inscription et connexion avec JWT


# 🚀 Instructions pour Lancer l'API

### Prérequis

- **Node.js** version 22 ou supérieure
- **MongoDB** accessible (local ou distant)

### Installation et Configuration


#### 1. Installer les dépendances

```bash
npm install
```

#### 2. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du projet:

```env
DATABASE_URL="mongodb://user:pass@host:27017/digischools?authSource=admin&replicaSet=rs0&directConnection=true"
JWT_SECRET="votre_secret_jwt_tres_securise_minimum_32_caracteres"
```

#### 3. Générer le client Prisma

```bash
npx prisma generate
```

#### 4. Pousser le schéma vers MongoDB

```bash
npx prisma db push
```

#### 5. Démarrer le serveur

```bash
npm start
```
Le serveur démarre sur `http://localhost:8080`

#### 6. Vérifier le fonctionnement

Accéder à la documentation Swagger:
```
http://localhost:8080/api-docs
```


## 🐳 Déploiement Docker

### Téléchargement depuis le Registre de Conteneurs GitHub

L'image Docker est automatiquement construite et publiée sur le Registre de Conteneurs GitHub à chaque commit/push
```bash
docker pull ghcr.io/goegilles-fr/digischool:latest
```

### Exécuter le conteneur
```bash
docker run -d \
  --name digischool-app \
  -p 8080:8080 \
  -e DATABASE_URL="mongodb://username:password@host:port/database?authSource=admin&replicaSet=rs0&directConnection=true" \
  ghcr.io/goegilles-fr/digischool:latest
```

## 📖 Génération de la documentation

Pour générer la documentation HTML du projet à partir des commentaires JSDoc :
```bash
npm run doc
```

La documentation sera générée dans le dossier `docs/` (ou le dossier configuré dans `jsdoc.json`).

### 🧪 Couverture de tests

Pour exécuter les tests et générer un rapport de couverture HTML :
```bash
npm run test:coverage
```

Le rapport de couverture sera disponible dans le dossier `coverage/`.
## 🛠️ Technologies et Dépendances

### Backend Core
- **Node.js**  - Runtime JavaScript
- **Express.js**  - Framework web minimaliste et performant
- **MongoDB**  - Base de données NoSQL orientée documents

### ORM et Base de Données
- **Prisma**  - ORM moderne pour MongoDB
  - `@prisma/client` - Client Prisma généré
  - `prisma` - CLI Prisma pour les migrations et génération

### Sécurité
- **helmet** - Sécurisation des headers HTTP
- **express-rate-limit**  - Limitation du nombre de requêtes (protection DDoS)
- **jsonwebtoken**  - Génération et vérification de tokens JWT
- **bcryptjs**  - Hashage sécurisé des mots de passe
- **cookie-parser**  - Parsing des cookies pour JWT
- **dotenv**  - Gestion des variables d'environnement

### Documentation
- **jsdoc** - Librairie permettant de généré automatiquement une page html contenant la documentation du projet.
- **Swagger** - Permet d'afficher tout les endpoints documentés de l'api rest et de faire des requêtes http dessus. 

### Tests
- **jest** - Permet de réaliser des tests unitaires avec mocks

### Utilisation avec Authentification

1. Créer un compte via `POST /api/auth/register` pour obtenir un token
2. Si on a déjà un compte, se connecter via `POST /api/auth/login` pour obtenir un token JWT
3. Cliquer sur le bouton **"Authorize"** en haut de la page Swagger
4. Entrer le token dans le champ (Swagger ajoutera automatiquement le préfix 'Bearer ')
5. Tester les endpoints protégés


#### Authentification JWT

Les mots de passe sont hashés avec **bcryptjs** (10 rounds de salting) avant stockage.

Les tokens JWT contiennent:
- ID utilisateur
- Email
- Date d'expiration (configurable)

**Middleware JWT:** `/src/configs/jwt.js`

Protège automatiquement tous les endpoints sauf `/api/auth/*`.

### Endpoints Publics (Sans Authentification)

- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion

### Endpoints Protégés (Authentification Requise)

Tous les autres endpoints requièrent un token JWT valide dans le header:

```
Authorization: Bearer <votre_token_jwt>
```
