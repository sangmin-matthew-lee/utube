# Youtube Clone Coding A.K.A utube

## Background

- Website vs Webapp - Website = comsume, less interactive - Webapp = create, more interactive

- NodeJS - Outside of browser - Can use to build back-end - Build from nothing - Good for handle many data

- Express

  ```ts
  //route the express
  const express = require("express");
  const app = express();
  const PORT = 4000;

  function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
  }

  // take request and response object which will be html and css
  function handleHome(req, res) {
    res.send("Hello from home");
  }

  function handleProfile(req, res) {
    res.send("You are on my profile");
  }

  app.get("/", handleHome);
  app.get("/profile", handleProfile);
  app.listen(PORT, handleListening);
  ```

- Middleware

  - functions that between user and the server.
  - Can put as many dev want
  - It is powerful tool. For example, check user log-in or cut the connection when banned IP is detected

- export

  - default (filename) => it will export the file as object which means I can use (filename) as module
    - In app file
      ```ts
      export default app;
      ```
    - In init file
      ```ts
      import app from "./app.js";
      ```
  - NOT export as default
    - In router file
      ```ts
      export const userRouter = express.Router();
      ```
    - In app file
      ```ts
      import { userRouter } from "./router.js";
      ```

- Routing

- MVC

  - Module: data
  - View: How does the data look
    - pug: nice tool to change pug to html! More easy to use
    - All pug files in views folder are templetes!
    - #2.17: Sending object or data from controller to View(Templetes!)
  - Control: function that looks for the data

- Router
  - globalRouter: For Homepage. Not related with anything
  - userRouter: For user. ex: profile, log-out(?)
  - videoRouter: For video

  ## Pages:
    - [ ] Home
    - [x] Join
    - [x] Login
    - [x] Search
    - [ ] User Detail
    - [ ] Edit Profile
    - [ ] Change Password
    - [ ] Upload
    - [ ] Video Detail
    - [ ] Edit Video

  - Mixins = Contains repeated HTML codes
