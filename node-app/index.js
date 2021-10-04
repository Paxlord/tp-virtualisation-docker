const app = require('express')();
const { MongoClient } = require('mongodb');
const cors = require('cors');

const PORT = 8080;
const DB_URI = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@mongoapp:27017/${process.env.DATABASE_NAME}`;

const client = new MongoClient(DB_URI, { authSource: "admin"});

app.use(cors());


async function main(){

    try{
    await client.connect();

    console.log("Succesfully connected to the database");
    const db = client.db(`${process.env.DATABASE_NAME}`);
    await db.createCollection('books');

    const books = db.collection("books");

    books.insertOne({ name: "MyBookTitle1", author: "MyAuthorName1"});


    app.get('/', (_, res) => {
        res.send('Hello world');
    });

    app.get('/books', async (_, res) => {
        const bookslist = await books.find({}).toArray();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(bookslist);
    });
    
    app.listen(PORT, () => {
        console.log("Listening on 8080...");
    });
    }catch(e){
        console.log(e);
    }

}

main();

