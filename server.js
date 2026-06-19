import app from "./src/app.js";
import db from "./src/common/config/db/db.js";
import dotenv from "dotenv"

await db()

const server = async()=>{
    const PORT= process.env.PORT || 8055
    const listen = app.listen(PORT, ()=>{
        console.log(`SERVER- connected(${PORT})`)
    })
}

server()