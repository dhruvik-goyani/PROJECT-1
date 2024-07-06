
import app from './app';
import connectDB from './db';
import { config } from './src/config/config';



const startServer = async () => {

    await connectDB();

    const port = config.prot || 4000;

    app.listen(port, () => {
        console.log(`Listener on port: ${port}`);
    });
};

startServer();