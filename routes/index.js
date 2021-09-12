const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();


router.get('/', (req, res) => res.send('For testing purposes!'));

// NOTE: Add additional routes for each API
router.get('/users', controllers.getAllUsers); 
router.post('/users', controllers.createUser); 
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)
router.delete('/users', controllers.deleteUsers);

module.exports = router;