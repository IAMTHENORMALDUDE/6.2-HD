const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

app.use(express.static(__dirname + '/public_html'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Web server running at: http://localhost:3000");
    console.log("Type Ctrl+C to shut down the web server");
});
