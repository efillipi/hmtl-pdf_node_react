const express = require ('express');

const PrinterController = require('./controllers/PrinterController');
const routes = express.Router();


routes.post('/print', PrinterController.index); // listar as ongs como array



module.exports = routes;

/*

metodos http

get - buscar/ listar informacao 
post criar informacao
put - alterar
delete - deletar
*/

/** tipos de parametros
 * 
 * query : paramentos nomeados enviados na rota apos o =>>> ? (filtros paginao)
 * 
 * route : paramentos utilizados para identifar recursos
 * 
 * request body : corpo da requisicao - criar ou alterar recursos 
 * 
 */