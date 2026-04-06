require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB().then(() => {
    app.listen(8080, () => {
        console.log('Server is running on port ');
    });
}).catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
});