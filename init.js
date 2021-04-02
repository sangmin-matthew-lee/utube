import "./db.js";
import app from "./app.js";

const PORT = 4000;

const handleListening = () => console.log(`✅ Listening on: Http://localhost:${PORT}`);

app.listen(PORT, handleListening);