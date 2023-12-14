# Book Store - MERN Project 📚

This MERN (MongoDB, Express.js, React.js, Node.js) project, "book-store," is an online book store application featuring CRUD (Create, Read, Update, Delete) functionalities for managing a collection of books. 🤖

## Features 🔍

- **Book Collection Management:**
  - Add new books with detailed information like - image, title, description, price, author. 📷
  - View the list of available books with their details. 📚
  - Edit existing book information. 🖋️
  - Delete books from the collection. 🗑️
    
## Live Preview 💻

Check out the live demo of the Book Store application:

- **[Live Demo](https://sahilatahar-book-store.vercel.app)**

## Technologies Used 🛠️

The project utilizes the following technologies:

### Frontend 💻

- **React.js:** A JavaScript library for building user interfaces. 🌐
- **Vite.js:** A build tool that aims to provide a faster and leaner development experience for modern web projects. ⏱️
- **Sass/SCSS:** A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). 🎨
- **Context API:** Used for state management in React.js applications. 🧩
- **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. 🔍

### Backend 🔥

- **Node.js:** A JavaScript runtime environment for executing JavaScript code server-side. 💻
- **Express.js:** A web application framework for Node.js used to build APIs and web apps. 🚀 
- **MongoDB:** A NoSQL database used to store application data. 💾
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js. 🦸‍♂️
- **dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env. 🌿

## Project Structure 📊

```
client/
  ├── src/
  │   ├── assets/
  │   ├── context/
  │   │   └── Context.jsx
  │   ├── pages/
  │   │   ├── Books/
  │   │   │   ├── Book/
  │   │   │   │   ├── Book.jsx
  │   │   │   │   └── Book.scss
  │   │   │   ├── Books.jsx
  │   │   │   └── Books.scss
  │   │   └── Editor/
  │   │       ├── Editor.jsx
  │   │       └── Editor.scss
  │   ├── App.jsx
  │   ├── index.scss
  │   └── main.jsx
  ├── .env
  ├── .eslintrc.cjs
  ├── .gitignore
  ├── index.html
  ├── package-lock.json
  ├── package.json
  └── vite.config.js

server/
  ├── config/
  │       └── dbConfig.js
  ├── controllers/
  │       └── booksController.js
  ├── models/
  │       └── Book.js
  ├── routes/
  │       └── Books.js
  ├── services/
  │       └── bookService.js
  ├── .env
  ├── .gitignore
  ├── index.js
  ├── package-lock.json
  ├── package.json
  └── vercel.json
```


## Description

The `client` directory contains the front-end part of the application built with React.js. It includes:

- **src/assets:** Assets used in the application (images, etc.).
- **src/context:** Context file(s) used for state management (Context.jsx).
- **src/pages:** Components representing different pages/routes in the app (Books, Editor, etc.).
- **src/App.jsx:** Main React component representing the root of the application.
- **src/index.scss:** Main SCSS file for styling.
- **src/main.jsx:** Main entry point for the React app.

The `server` directory contains the back-end part of the application built with Node.js and Express.js. It includes:

- **config:** Configuration files, e.g., database configuration (dbConfig.js).
- **controllers:** Controllers handling the business logic for different routes (booksController.js).
- **models:** Mongoose models or schemas representing entities (Book.js).
- **routes:** API routes and their corresponding controller functions (Books.js).
- **services:** Additional services or utilities for the application (bookService.js).

## Getting Started 🚀

To run the application locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sahilatahar/book-store.git
   cd book-store
   ```
2. **Setup the Client:**
    ```
    cd client
    npm install
    # Or yarn install if using yarn
    ```
3. **Setup the Server:**
    ```
    cd ../server
    npm install
    # Or yarn install if using yarn
    ```
4.  **Set up Environment Variables:**
    - **Frontend (.env in client/):** Create a `.env` file in the `client/` directory and add `VITE_API_URL=server_url_here`.
    - **Backend (.env in server/):** Create a `.env` file in the `server/` directory and add `MONGODB_URI=your_mongodb_uri` and `PORT=your_preferred_port_number`.
5.  **Run the Application:**
    - Start the React client:
      ```
      cd ../client
      npm run dev
      # Or yarn start if using yarn
      ```
    - Start the Node.js server:
      ```
      cd ../server
      npm run dev
      # Or yarn start if using yarn
      ```
6. **Access the Application:**
   Open your web browser and visit http://localhost:5173 to use the book store application.

## Contribution 🤝

Contributions are welcome! If you'd like to improve this project, please fork the repository and create a pull request. Feel free to open an issue if you find any bugs or have suggestions for enhancements.

## License 📄

This project is licensed under the [MIT License](LICENSE). You can find more details in the LICENSE file.

## Note

This project was created while learning backend development. It may contain code or practices that reflect a learning phase. However, contributions to improve and enhance the project are encouraged.
