import app from "./config/server";
import db from "./infrastructure/database";
const port = process.env.PORT || 4000;

const startServer = async() => {
    try{
        await db.authenticate();
        app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
    }
    catch(error){
        console.log("Erro:", error);
    }
}

startServer();