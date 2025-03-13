# 📸 Image Gallery App

## 📌 Overview  
The **Image Gallery App** is a simple yet powerful web application that allows users to **upload, view, update, and delete images** in a personal gallery. Built using a **serverless architecture with Firebase**, it ensures seamless data storage, real-time updates, and authentication via **Google Sign-In**.

## ✨ Features  
✅ **Authentication:** Users can securely log in using **Google Authentication**.  
✅ **Create:** Upload images to Firebase Storage and store metadata in Firestore.  
✅ **Read:** View a collection of uploaded images in a responsive gallery.  
✅ **Update:** Modify image details, including title and description.  
✅ **Delete:** Remove images from both the gallery and Firebase Storage.  
✅ **Real-Time Updates:** Changes reflect instantly due to Firebase’s real-time database.  

## 🛠 Tech Stack  
- **Frontend:** React.js (or specify framework if applicable)  
- **Backend:** Serverless via **Firebase Functions**  
- **Database:** Firestore (NoSQL)  
- **Authentication:** Firebase Authentication with **Google Sign-In**  
- **Storage:** Firebase Storage for handling image uploads  

## 🚀 Installation & Setup  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/Irene-Mukii/image-gallery-app.git
cd image-gallery-app
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)  
- Enable **Firestore**, **Firebase Authentication (Google Sign-In)**, and **Firebase Storage**  
- Copy Firebase config details and update `.env` or `firebaseConfig.js` file in the project
  
### 4️⃣ Run the application
```sh
npm start
```

## 🎯 Usage
1. **Sign in** with your Google account.  
2. **Upload images** to the gallery.  
3. **Edit image details** (e.g., title, description).  
4. **Delete images** from your gallery.

   
## 🔮 Future Enhancements

- Implement **image categorization & tagging**  
- Add **pagination for large galleries**  
- Improve **UI/UX with animations**
  
## 📜 License

This project is open-source and available under the **MIT License**.  
🖼 Made with ❤️ by Irene Mukii


