const express = require('express');
const planeController = require('../Controller/planeController')

const router = express.Router();



router.post('/plan/save' ,planeController.Store);
router.get('/plan/list', planeController.Index);
router.get('/plan/list/:id', planeController.IndexOne);
router.get('/plan/delete/:id', planeController.DeleteOne);


module.exports = router;