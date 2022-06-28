# React Auth With Firebase

Simple app made using React, Firebase Authentication (email & password) and sessionStorage.


- Register a new user
- Login and browse different protected pages
- Sign out

## Architecture

| Libraries  | Description |
| ------------- | ------------- |
| React  | Framework JS  |
| React-Router	  | Routes pages  |
| Firebase	  | User authentication as a service  |

## Start APP
After you have cloned the repo:

```bash
npm install
npm start
```

## Setting Firebase

For the Firebase configuration it is necessary to have the application with the credentials and registered. To do this follow https://firebase.google.com/docs/web/setup -> Step 1

Then create an .env file in the root of the directory with the environment variables provided by Firebase.

```
REACT_APP_FIREBASE_API_KEY = XXXXXXXXX
REACT_APP_FIREBASE_AUTH_DOMAIN = XXXXXXXXX
REACT_APP_FIREBASE_PROJECT_ID = XXXXXXXXX
REACT_APP_FIREBASE_STORAGE_BUCKET = XXXXXXXXX
REACT_APP_FIREBASE_MESSAGIN_SENDER_ID = XXXXXXXXX
REACT_APP_FIREBASE_APP_ID = XXXXXXXXX
```


## Extra
You can easily modify the style by modifying the file src/assets/css/root.css