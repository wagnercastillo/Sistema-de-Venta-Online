const express = require("express");
const morgan = require("morgan");
const exhbs= require("express-handlebars");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exhbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))


//Routes
app.get('/', (req, res)=>{
    res.render('index');
})

app.set('view engine', '.hbs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Public
app.use(express.static(path.join(__dirname, 'public')));   