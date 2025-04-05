# Real Estate - Fullstack Web App

Real Estate is a property listing platform built using the MERN (MongoDB, Express, React, Node.js) stack, allowing users to browse and list properties efficiently.

## 🚀 Features

- Interactive maps using Leaflet & React-Leaflet
- Property listings with details
- User authentication
- Responsive design
- Deployment with GitHub Pages

## 📦 Tech Stack

- **Frontend:** React, Redux Toolkit, React Router, Leaflet, React-Leaflet
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Deployment:** GitHub Pages for frontend, Node.js for backend

## 🏗️ Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/real-estate-fullstack.git
cd real-estate-fullstack
```

### 2. Set up environment variables:

Create a `.env` file in both frontend and backend directories.

#### Frontend `.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

#### Backend `.env`:
```
MONGO_URI=mongodb://localhost:27017/realestate
```

### 3. Install dependencies:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 4. Run the app:

```bash
# Backend
npm run dev

# Frontend (in another terminal)
npm start
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## 📂 Frontend Libraries

- **React**: ^17.0.2
- **Redux Toolkit**: ^2.4.0
- **React Redux**: ^9.1.2
- **React Router DOM**: ^6.26.0
- **Leaflet**: ^1.9.4
- **React-Leaflet**: ^3.2.5
- **React Icons**: ^5.4.0
- **React Scroll**: ^1.9.0

## ⚙️ Backend Libraries

- **Express**: ^4.21.1
- **Mongoose**: ^8.8.3
- **CORS**: ^2.8.5

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📧 Contact

For inquiries, reach out at [anow47@yahoo.com](mailto:anow47@yahoo.com).