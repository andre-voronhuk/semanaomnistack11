const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Metodos HTTP
 * 
 * GET: buscar informaçoes no backend
 * POST: criar infrmaçoes no backend
 * PUT: Alteral informaçao no backend
 * DELETE: Deletar informaçoes no backend
 */

 /**
  * Tipos de Parametros:
  * 
  * Query Params: enviados na rota ?page=2 ou ?name=andre&idade=18
  * Route Params: parametros utilizados para identificar rescursos 
  * Request Body: Corpo da Request, utilizado para alterar ou criar recursos
  * 
  */

  /**
   * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   * Driver: SELECT * FROM users
   * 
   * Query Builder: table('users').select('*').where();
   * 
   */