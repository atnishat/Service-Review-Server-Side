const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middle wares
app.use(cors());
app.use(express.json());


// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s1df2ul.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try{

        const serviceCollection = client.db('service-review').collection('services');


        app.get('/services', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });


















    }
    finally{

    }
}




run().catch(err => console.error(err));



app.get('/', (req, res) => {
    res.send('restaurant web is running')
})

app.listen(port, () => {
    console.log(`restaurant web is running on ${port}`);
})
