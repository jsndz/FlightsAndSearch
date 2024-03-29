const express = require('express');
const bodyParser = require('body-parser');
const {PORT,SYNC} = require('./config/serverconfig');
const Apiroutes = require('./routes/index')
const db = require('./models/index')
const City = require('./models/city')
const Airport = require('./models/airport')
const {Airplane} = require('./models/index')
const setupAndstartserver = async () =>
{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api',Apiroutes);
    app.listen(PORT, async () =>
    {
        console.log(`server started at ${PORT}`);
        // if(process.env.SYNC){
        //     db.sequelize.sync({alter:true});
           
        // }
        
    })
}
setupAndstartserver();