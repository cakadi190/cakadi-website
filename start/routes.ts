/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

const ProjectsController = () => import('#controllers/web/projects_controller');
const HomeController = () => import('#controllers/web/home_controller');
const ContactMeController = () => import('#controllers/web/contact_mes_controller');
const AuthController = () => import('#controllers/web/auth/authentication_controller');
const ProxyBlogsController = () => import('#controllers/api/proxy_blogs_controller');

/** --------------------------------[ HomePage ]-------------------------------- */
router.group(() => {
  router.get('/', [HomeController, 'index']).as('index');
  router.get('about-me', [HomeController, 'about']).as('about');
  router.get('education', [HomeController, 'education']).as('education');
  router.get('career', [HomeController, 'career']).as('career');

  router.group(() => {
    router.get('/', [ProjectsController, 'index']).as('index');
    router.get('/:slug', [ProjectsController, 'show']).as('show');
  })
    .prefix('/project')
    .as('project');

  router.group(() => {
    router.get('/', [ContactMeController, 'index']).as('index');
    router.get('/process', [ContactMeController, 'process']).as('process');
  })
    .prefix('/contact-me')
    .as('contact-me')
})
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
router.group(() => {
  router.get('/blog-posts', [ProxyBlogsController, 'index']).as('blog-post')
})
  .prefix('/api')
  .as('api');

/** --------------------------------[ Api Admin ]-------------------------------- */
