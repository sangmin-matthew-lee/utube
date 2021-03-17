# Youtube Clone Coding A.K.A utube

## Background
- Website vs Webapp
        - Website = comsume, less interactive
        - Webapp = create, more interactive

- NodeJS
        - Outside of browser
        - Can use to build back-end
        - Build from nothing
        - Good for handle many data

- Express
    ```ts
    //route the express
    const express = require('express')
    const app = express()
    const PORT = 4000;

    function handleListening() {
        console.log(`Listening on: http://localhost:${PORT}`);
    }
    
    // take request and response object which will be html and css
    function handleHome(req,res){
        res.send("Hello from home");
    }

    function handleProfile(req,res) {
        res.send("You are on my profile");
    }

    app.get("/", handleHome);
    app.get("/profile", handleProfile);
    app.listen(PORT, handleListening);
    ```
    