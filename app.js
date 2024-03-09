const express = require("express");
const path = require("path");

let rutaMain = require("./routes/main.routes");
let rutaProducts = require("./routes/products.routes");

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

app.use('/', rutaMain);
app.use('/products', rutaProducts);


app.listen(port, () => console.log(`Servidor ejecutándose en http://localhost:${port}`));
