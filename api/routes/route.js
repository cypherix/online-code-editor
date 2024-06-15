const router = require('express').Router();
const routeModel = require('../../api/models/RouteSchema');



router.get('/:path', async (req, res) => {
    
    let route = await routeModel.findOne({routePath: req.params.path})

    console.log(route)

    if(route){
        res.send(route.files)
    }
    else{
        route = await routeModel.create({routePath: req.params.path, files: []})
        res.send(route.files)
    }
})

module.exports = router