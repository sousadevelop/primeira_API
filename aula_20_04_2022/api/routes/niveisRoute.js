const { Router } = require('express');
const NivelController = require ('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaUmNivel);
router.post('/niveis', NivelController.criaNivel);
router.put('/niveis/:id', NivelController.atualizaNivel);
router.delete('/niveis/:id', NivelController.apagaNivel);

module.exports = router

/*
 * Method HTTP:
 *
 *GET - USADO PARA MOSTRAR ALGO
 *POST
 *UPDATE
 *DELETE
 */


/*
 * CRUD:
 * 
 * C
 * R - LER / READ
 * U
 * D
 */