const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./models/sequelize');
const medicalDeviceRoutes = require('./routes/medicalDeviceRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressLayouts)
app.set('layout', 'master')
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', medicalDeviceRoutes);

sequelize.sync().then(() => {
    console.log('Database & tables created!');
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});