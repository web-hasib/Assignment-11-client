# 📚 Virtual Bookshelf (Client Side)
**Live Site:** [https://virtual-bookshelf-4f14f.web.app/](https://virtual-bookshelf-4f14f.web.app/) </br>
**Server Live:** [https://virtual-bookshelf-server-five.vercel.app/](https://virtual-bookshelf-server-five.vercel.app/)</br>
**Server Repository:** [https://github.com/web-hasib/Assignment-11-server](https://github.com/web-hasib/Assignment-11-server)</br>

Welcome to **Virtual Bookshelf** — a dynamic web application where users can organize, track, and explore books. Built with React, Tailwind CSS, Firebase Auth, and MongoDB-backed API, this project is designed to test and demonstrate your frontend and full-stack capabilities.

---

## 🚀 Project Overview
**Purpose:**  
Create a user-friendly digital bookshelf that allows readers to:
- 📥 Add books to their virtual shelf
- 💬 Write and manage reviews
- 📈 Track reading progress
- 🔼 Upvote and explore popular books

**Why this matters:**  
It helps avid readers organize their reading habits and discover new titles via community input and book stats.

---

## 🧰 Tech Stack
| Area            | Tech                          |
|-----------------|-------------------------------|
| Frontend        | React, Tailwind CSS, Framer Motion |
| Backend         | Node.js, Express.js, MongoDB  |
| Authentication  | Firebase (Email/Password, Google) |
| Deployment      | Vercel / Firebase (client), Render / Vercel (server) |

---

## 🧑‍💻 Features
- 🔐 Authentication: Login/register using Firebase
- 📚 Book Management: Add, edit, delete your own books
- 📈 Profile Chart: See book stats by category
- 💬 Review System: One review per user per book
- 🔎 Filter/Search: Search books by title or author, filter by reading status
- 🔼 Upvote: Vote for favorite books (excluding your own)
- 🧭 Routing: Protected/private routes using React Router
- 🧪 Responsive: Mobile-first design using Tailwind CSS
- 🌀 Animations: Smooth transitions using Framer Motion
- 🗂️ Category Filter: Filter books by Fiction, Non-Fiction, Fantasy, Finance

---

## 🌐 Routes and Pages
| Route | Description |
|-------|-------------|
| `/` | Home with banner, popular books, featured categories, extra sections |
| `/allBooks` | Public book list with filters and search |
| `/books/:id` | Book details page (upvote, review, status tracker) |
| `/addBook` 🔒 | Add a new book |
| `/editBook/:id` 🔒 | Edit existing book |
| `/mybooks` 🔒 | Manage books added by logged-in user |
| `/profile` 🔒 | User info + pie chart |
| `/login` / `/register` | Firebase Auth pages |
| `*` | 404 page with animation and home link |

🔒 = Private Route (requires authentication)

---

## 🛠️ Local Development Setup

### Prerequisites
Before running this project locally, make sure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step 1: Clone the Repository
```bash
# Clone the client-side repository
git clone https://github.com/web-hasib/your-client-repo-name.git
cd your-client-repo-name

# Also clone the server-side repository
git clone https://github.com/web-hasib/Assignment-11-server.git
```

### Step 2: Install Dependencies
```bash
# Install client dependencies
npm install
# or
yarn install
```

### Step 3: Environment Configuration
Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=http://localhost:3000
```

### Step 4: Setup the Server
```bash
# Navigate to server directory
cd ../Assignment-11-server

# Install server dependencies
npm install

# Create .env file for server
echo "PORT=3000
MONGODB_URI=your_mongodb_connection_string
FIREBASE_SERVICE_ACCOUNT_KEY=your_firebase_service_account_json" > .env

# Start the server
npm start
```

### Step 5: Run the Client Application
```bash
# Navigate back to client directory
cd ../your-client-repo-name

# Start the development server
npm run dev
# or
yarn dev
```

### Step 6: Access the Application
- **Client:** Open [http://localhost:5173](http://localhost:5173) in your browser
- **Server:** API will be running on [http://localhost:3000](http://localhost:3000)

---

## 🚀 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode using Vite. The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Serves the production build locally for testing before deployment.

### `npm run lint`
Runs ESLint to check for code quality issues and potential errors.

---

## 📦 Dependencies

### Main Dependencies
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
  }
}
```

### Development Dependencies
```json
{
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

## 🔧 Troubleshooting

### Common Issues:

1. **Port Already in Use:**
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   ```

2. **Environment Variables Not Loading:**
   - Make sure your `.env.local` file is in the root directory
   - Restart the development server after adding new environment variables

3. **Firebase Authentication Issues:**
   - Verify your Firebase configuration in the `.env.local` file
   - Check if your Firebase project has the correct authentication methods enabled

4. **Server Connection Issues:**
   - Ensure the server is running on port 5000
   - Check if `VITE_SERVER_URL` in `.env.local` matches your server URL

---

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Support

If you have any questions or run into issues, please feel free to:
- Open an issue on GitHub
- Contact me at [jrweb.hasib@gmail.com](mailto:jrweb.hasib@gmail.com)

---

**Happy Coding! 📚✨**
