#Image Gallery App
##Overview
The Image Gallery App is a simple yet powerful web application that allows users to upload, view, update, and delete images in a personal gallery. Built using a serverless architecture with Firebase, it ensures seamless data storage, real-time updates, and authentication via Google Sign-In.

##Features
✅ Authentication: Users can securely log in using Google Authentication.
✅ Create: Upload images to Firebase Storage and store metadata in Firestore.
✅ Read: View a collection of uploaded images in a responsive gallery.
✅ Update: Modify image details, including title and description.
✅ Delete: Remove images from both the gallery and Firebase Storage.
✅ Real-Time Updates: Changes reflect instantly due to Firebase’s real-time database.

##Tech Stack
Frontend: React.js ( with Next Js framework)
Backend: Serverless via Firebase Functions
Database: Firestore (NoSQL)
Authentication: Firebase Authentication with Google Sign-In
Storage: Firebase Storage for handling image uploads
##Installation & Setup
####Clone the repository

git clone https://github.com/Irene-Mukii/image-gallery-app.git
cd image-gallery-app

####Install dependencies

npm install

####Set up Firebase

Create a Firebase project at Firebase Console
Enable Firestore, Firebase Authentication (Google Sign-In), and Firebase Storage
Copy Firebase config details and update .env or firebaseConfig.js file in the project
####Run the application

npm start

##Usage
Sign in with your Google account.
Upload images to the gallery.
Edit image details (e.g., title, description).
Delete images from your gallery.

##Future Enhancements
Implement image categorization & tagging
Add pagination for large galleries

##License
This project is open-source and available under the MIT License.
