# 📚 Virtual Bookshelf (Client + Server)

**Client Live Site:** [https://virtual-bookshelf-4f14f.web.app/](https://virtual-bookshelf-4f14f.web.app/)\
**Server Repository:** [https://github.com/web-hasib/Assignment-11-server](https://github.com/web-hasib/Assignment-11-server)\
**Server Live Site:** [https://virtual-bookshelf-server-five.vercel.app/](https://virtual-bookshelf-server-five.vercel.app/)

---

Welcome to **Virtual Bookshelf** — a dynamic web application where users can organize, track, and explore books. Built with React, Tailwind CSS, Firebase Auth, and a MongoDB-backed API, this project demonstrates strong frontend and full-stack capabilities.

---

## 🚀 Project Overview

**Purpose:**\
Create a user-friendly digital bookshelf that allows readers to:

- 📥 Add books to their virtual shelf
- 💬 Write and manage reviews
- 📈 Track reading progress
- 🔼 Upvote and explore popular books

**Why this matters:**\
It helps avid readers organize their reading habits and discover new titles via community input and book stats.

---

## 🧰 Tech Stack

| Area           | Tech                                        |
| -------------- | ------------------------------------------- |
| Frontend       | React, Tailwind CSS, Framer Motion          |
| Backend        | Node.js, Express.js, MongoDB                |
| Authentication | Firebase (Email/Password, Google)           |
| Deployment     | Vercel / Firebase (client), Vercel (server) |

---

## 🧑‍💻 Features

- 🔐 Authentication: Login/register using Firebase
- 📚 Book Management: Add, edit, delete your own books
- 📈 Profile Chart: See book stats by category
- 💬 Review System: One review per user per book
- 🔎 Filter/Search: Search books by title or author, filter by reading status
- 🔼 Upvote: Vote for favorite books (excluding your own)
- 🗑️ Routing: Protected/private routes using React Router
- 🧪 Responsive: Mobile-first design using Tailwind CSS
- 🔀 Animations: Smooth transitions using Framer Motion
- 🗂️ Category Filter: Filter books by Fiction, Non-Fiction, Fantasy, Finance

---

## 🌐 Routes and Pages

| Route                  | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `/`                    | Home with banner, popular books, featured categories, extra sections |
| `/allBooks`            | Public book list with filters and search                             |
| `/books/:id`           | Book details page (upvote, review, status tracker)                   |
| `/addBook` 🔒          | Add a new book                                                       |
| `/editBook/:id` 🔒     | Edit existing book                                                   |
| `/mybooks` 🔒          | Manage books added by logged-in user                                 |
| `/profile` 🔒          | User info + pie chart                                                |
| `/login` / `/register` | Firebase Auth pages                                                  |
| `*`                    | 404 page with animation and home link                                |

🔒 = Private Route (requires authentication)

---

## 📦 Packages Used (Client Side)

```json
{
  "dependencies": {
    "@headlessui/react": "^2.2.4",
    "@lottiefiles/dotlottie-react": "^0.14.0",
    "@tailwindcss/vite": "^4.1.8",
    "axios": "^1.9.0",
    "dotenv": "^16.5.0",
    "firebase": "^11.9.0",
    "lottie-react": "^2.4.1",
    "motion": "^12.16.0",
    "react": "^19.1.0",
    "react-awesome-reveal": "^4.3.1",
    "react-dom": "^19.1.0",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.6.2",
    "react-tabs": "^6.1.0",
    "recharts": "^2.15.3",
    "sweetalert2": "^11.22.0",
    "tailwindcss": "^4.1.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "daisyui": "^5.0.43",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}
```

---

## 🛠️ Local Setup

### ✅ Client Side Setup

1. Clone the repository:

```bash
git clone https://github.com/web-hasib/Assignment-11-client.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your Firebase configuration and API base URL like:

```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

4. Run the development server:

```bash
npm run dev
```

Client will run on: `http://localhost:5173/`

---

### ✅ Server Side Setup

1. Clone the server repository:

```bash
git clone https://github.com/web-hasib/Assignment-11-server.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Run the server:

```bash
npm start
```

Server will run on: `http://localhost:5000/`

---

## 🔗 Deployment

- **Client:** Firebase Hosting
- **Server:** Vercel
- **Client Live:** [https://virtual-bookshelf-4f14f.web.app/](https://virtual-bookshelf-4f14f.web.app/)
- **Server Live:** [https://virtual-bookshelf-server-five.vercel.app/](https://virtual-bookshelf-server-five.vercel.app/)

---

## ✨ Author

Hasibul Islam\
[GitHub Profile](https://github.com/web-hasib)

