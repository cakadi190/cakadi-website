/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

const HomeController = () => import('#controllers/web/home_controller');
const AuthController = () => import('#controllers/web/auth/authentication_controller');

/** --------------------------------[ HomePage ]-------------------------------- */
router.group(() => {
  router.get('/', [HomeController, 'index']).as('index')
})
  .prefix('/')
  .as('home');

/** --------------------------------[ Auth ]-------------------------------- */
router.group(() => {
  router.get('/', [AuthController, 'index']).as('index');
  router.post('/', [AuthController, 'process']).as('process');
  router.post('/logout', [AuthController, 'logout']).as('logout');
})
  .prefix('/login')
  .as('auth');

/** --------------------------------[ Admin ]-------------------------------- */

/** --------------------------------[ Api Home ]-------------------------------- */

/** --------------------------------[ Api Admin ]-------------------------------- */
