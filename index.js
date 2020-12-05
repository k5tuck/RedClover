
const http = require('http');
const express = require('express');

const app = express();
const serve = http.createServer(app);

app.get('/', (req,res)=>{
    res.send(`
    <h1>Welcome to the Home Page for you favorite Anime shows!</h1>
    `)
})

app.get('/shows',(req,res)=>{
    res.send(`
    <ul>
        <li><a href="/shows/OnePunchMan">One Punch Man</a></li>
        <li><a href="/shows/BlackClover">Black Clover</a></li>
        <li><a href="/shows/Re:Zero">Re:Zero</a></li>
    </ul>
    `)
})

app.get('/shows/:showName',(req,res)=>{
    const showName = req.params.showName
    res.send(`
    <h1>This page contains info for the show ${showName}!</h1>
    <a href="/shows/">Back</a>
    `)
})

app.get('*', (req, res) => {
    res.send('This is not the page you are searching for')
});

serve.listen(3300, 'localhost', ()=> {
    console.log(`Running on port http://localhost:3300`)
})