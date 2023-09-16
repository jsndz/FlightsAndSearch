const express = require('express');
const {PORT} = require('./config/serverconfig')
const setupAndstartserver = async () =>
{
    const app = express();
    
    app.listen(3000, () =>
    {
        console.log(`server started at ${PORT}`);
        

    })
}
setupAndstartserver();