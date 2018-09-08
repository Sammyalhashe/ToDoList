var express = require('express');

const app = express();

var bodyParser = require('body-parser');
var cors = require('cors');

//import baseApiRoute from './routes/index.js';
const baseApiRoute = require('./routes/index');
const registerRoutes = require('./routes/register');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/* Angular static directory stuff */
const distDir = __dirname + '/public/';
app.use(express.static(distDir));

const port = process.env.PORT || 3000;


 // app.get('/', (req, res) => {
 //     res.render(distDir + "index.html");
 // });


app.use('/api', baseApiRoute);
app.use('/api/users', registerRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
