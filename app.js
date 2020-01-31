const express = require('express');
const routes = require('./routes');

//создание веб-приложения
let app = express();
const port = 80;

//подключаем шаблонизаторs
app.set("view engine", "hbs"); 
app.set("view options", { layout: "layout" }); 
app.use("/", routes);
 app.listen(port, () => { console.log("app run on http://localhost"); 
});