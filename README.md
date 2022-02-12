# How to run the server

1. Make sure your MongoDB server is running. The Back-end server will connect to / create a database called AUTH. You do not need to manually create this database.

2. Start the server

  ```
    cd back-end/
    npm start
  ```

3. Start the front-end React JS app

  ```
    cd front-end/
    npm start/
  ```


------------------------------------

# How to use the sample app

1. Create a new user
2. Log in. If successful, you may then manually visit localhost:3000/dashboard. 
3. Logging out will redirect you back to the homepage.


------------------------------------

# Extras

You may see an warning in the browser after logging in saying "Cookie authToken will soon be rejected because it has SameSite attribute set to none ..." and something about a secure attribute.

This is fine. We can't enforce secure cookies since the app is just running on localhost and isn't using HTTPS.
