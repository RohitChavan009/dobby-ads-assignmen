# Dobby Ads Assignment

Welcome to the Dobby Ads Assignment project! This repository contains a Node.js application for managing image folders with features including user registration, authentication, folder creation, image upload, and image search. Follow the instructions below to set up and run the project locally.

## Prerequisites

- Node.js (version 18.x or higher)
- MongoDB (installed and running, or use MongoDB Atlas)
- npm (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RohitChavan009/dobby-ads-assignment.git

cd dobby-ads-assignment
```

### 2. Configure Environment Variables

#### 1. Create a .env file in the root directory of the project with the following content :

```bash
# Port
PORT=8000

# DB
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.your-cluster.mongodb.net/assignment

# JWT
JWT_SECRET=server-secret
```

- `PORT`: The port on which the server will run.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for signing JWT tokens.

### 3. Install Dependencies

#### 1. In the root directory :

```bash
npm install
```

#### 2. Start the Application :

```bash
npm start
```

##### The server will start and listen on the port specified in the .env file (default is 8000).

## Testing the Endpoints

##### You can test the API endpoints using Postman or any other API client. Here are some of the endpoints available :

### 1. User Signup

- **Endpoint**: POST /api/auth/signup
  - **Body** (form-data):
    - `name`: User's name
    - `email`: User's email
    - `password`: User's password

### 2. User Login

- **Endpoint**: POST /api/auth/login
  - **Body** (form-data):
    - `email`: User's email
    - `password`: User's password

### 3. Create Folder

- **Endpoint**: POST /api/folders
  - **Headers**:
    - `Authorization`: Bearer YOUR_JWT_TOKEN
      - **Body** (form-data):
        - `name`: Folder name
        - `parent`: Parent folder ID (optional)

### 4. Upload Image

- **Endpoint**: POST /api/images/upload
  - **Headers**:
    - `Authorization`: Bearer YOUR_JWT_TOKEN
      - **Body** (form-data):
        - `name`: Image name
        - `image`: Image file (choose a file)
        - `folder`: Folder ID where the image will be stored

### 4. Search Images

- **Endpoint**: GET /api/images/search
  - **Headers**:
    - `Authorization`: Bearer YOUR_JWT_TOKEN
      - **Params**:
        - `query`: Search term for image name

## Authors

- [@rohit-chavan](https://github.com/roHIT-MAN-45)
