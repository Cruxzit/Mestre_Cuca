# Mestre Cuca  
### Modern Full-Stack Recipe Web Application

![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38bdf8?logo=tailwindcss)
![React Router](https://img.shields.io/badge/React%20Router-7.9.3-ca4245?logo=reactrouter)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-Backend-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?logo=mysql)

Mestre Cuca is a modern full-stack recipe application built with **React 19 + Vite** on the frontend and **Node.js + Express + MySQL** on the backend.

The project demonstrates clean architecture, persistent client-side state, RESTful API integration, and a complete local development setup.

---

## Authors

- **Hugo José Mendes de Oliveira** – [holiveira.dev@proton.me](mailto:holiveira.dev@proton.me)
- **Gonçalo Dinis da Silva Queirós** 

---

## Features

### Frontend
- Featured recipes homepage
- Recipe listing and dynamic detail pages
- Favorites system persisted in `localStorage`
- Contact form with draft auto-save
- Client-side routing with React Router
- Responsive UI styled with Tailwind CSS

### Backend
- RESTful API built with Express
- MySQL database integration
- Environment-based configuration
- Health check endpoint
- Structured route organization

---

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express
- MySQL
- dotenv

---

## Project Structure

```
mestre_cuca/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── data/            # Static recipe data
│   └── pages/           # Application pages
│
├── backend/
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   ├── config/          # Database configuration
│   └── server.js
│
├── package.json
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Cruxzit/Mestre_Cuca.git
cd Mestre_Cuca
```

---

## Frontend Setup

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs by default at:

```
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
PORT=3001
```

Start the backend server:

```bash
npm run dev
```

The API will run at:

```
http://localhost:3001
```

### Available Endpoints

- `GET /health` → API health check  
- `GET /api/receitas` → Get all recipes  
- `GET /api/receitas/:id` → Get recipe by ID  

---

## Architecture Highlights

- Clear separation between frontend and backend
- Modular component structure
- Persistent client-side state using localStorage
- Environment-based backend configuration
- RESTful API design principles
- Scalable folder organization

---

## Adding New Recipes

To add a new recipe on the frontend:

1. Edit `src/data/recipes.js`
2. Add a new recipe object
3. Place the corresponding image inside `public/`
4. Reference the image filename in the recipe object

---

## Security Notes

- The `.env` file is ignored via `.gitignore`
- Never commit database credentials
- Use environment variables in production

---

## Contributing

We welcome contributions via **Issues** and **Pull Requests**.

### Before Contributing

By submitting a Pull Request, you agree to:
- Transfer all rights of your contribution to the Authors
- Confirm the contribution is your original work
- Grant the Authors an irrevocable license to use your contribution

See our [Contributor License Agreement](LICENSE.md#8-contributions) for full details.

### How to Contribute

1. **Report bugs or suggest features** via Issues
2. **Fork** the repository (for PRs only)
3. Create a branch: `feature/your-feature-name`
4. Make your changes with clear commit messages
5. Submit a Pull Request to `main`

**Note:** The Authors reserve the right to accept/reject any contribution without justification.

---

## Future Improvements

- Authentication system
- Admin panel for recipe management
- Image upload support
- Recipe categories & filtering
- API pagination
- Docker deployment setup

---

## Academic Project Notice

This is an **academic project** developed for educational purposes and portfolio demonstration.

- Built as part of **PWAFE (Programação Web Avançada para Front-end)**, from the **CTeSP in Software Development** program at [ISTEC Porto](https://istec-porto.pt/ctesp-desenvolvimento-de-software/)
- Demonstrates full-stack development skills
- **NOT** intended for commercial use
- All rights reserved by the Authors

For commercial inquiries, contact the authors directly.

---

## License

This project is licensed under a **Proprietary License**.

- You may view and study the code
- You may NOT use, copy, or distribute this code without permission
- Read [LICENSE.md](LICENSE.md) for full details
- Read [PRIVACY.md](PRIVACY.md) for privacy information

**This is an academic project for portfolio purposes only.**

---

##  About the Project

Mestre Cuca was built as a practical full-stack learning project focused on:

- Modern React development
- API integration
- Backend fundamentals
- Clean architecture practices
- Real-world feature implementation

---

Made with passion for cooking and clean code