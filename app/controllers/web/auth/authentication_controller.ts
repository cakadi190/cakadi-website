import SeoHelper from '#helpers/seo_helper';
import User from '#models/user';
import { createAuthValidator } from '#validators/auth_login';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'
import { PageObject } from '@adonisjs/inertia/types';

@inject()
export default class AuthenticationController {
  /**
   * Renders the login page for the user.
   *
   * This method uses the Inertia.js library to render the login view.
   *
   * @param {HttpContext} context - The HTTP context containing the request and response objects.
   * @param {import('@adonisjs/core/http').Inertia} context.inertia - The Inertia instance used for rendering views.
   * @returns {Promise<string | PageObject>} - A promise that resolves when the login page is rendered.
   */
  index({ inertia }: HttpContext): Promise<string | PageObject> {
    const seoData = SeoHelper
      .generateTitle('Masuk')
      .generateDesc('Cak Adi merupakan seorang web developer yang mengutamakan minimalis, efisiensi dan juga fungsi dalam sebuah website.')
      .generateKeywords('web, app, technology, web developer, freelancer web, web programmer')
      .setAuthor('Cak Adi')
      .setSiteName('Catatan Cak Adi')
      .setOgImage('/images/og.jpg')
      .setCurrentUrl('https://www.cakadi.web.id')
      .allowRobots(true)
      .build();

    return inertia.render('web/auth/login', seoData, seoData);
  }

  /**
   * Processes user login by validating credentials and logging the user in.
   *
   * This method validates the incoming request data using a predefined login validator,
   * verifies the user's credentials, and logs the user in if the credentials are valid.
   *
   * @param {HttpContext} context - The HTTP context containing the request and response objects.
   * @param {import('@adonisjs/core/http').Request} context.request - The request object containing user input.
   * @param {import('@adonisjs/core/http').Auth} context.auth - The authentication instance used for user login.
   * @param {import('@adonisjs/core/http').Response} context.response - The response object used to redirect the user.
   * @returns {Promise<void>} - A promise that resolves when the user is logged in and redirected to the dashboard.
   * @throws {ValidationException} - Throws a validation exception if the request data is invalid.
   * @throws {AuthenticationException} - Throws an authentication exception if the credentials are invalid.
   */
  async process({ request, session, auth, response }: HttpContext): Promise<void> {
    const { email, password, remember } = await request.validateUsing(createAuthValidator);
    const user = await User.verifyCredentials(email, password);
    await auth.use('web').login(user, !!remember);
    session.regenerate();

    response.redirect('/dashboard');
  }

  /**
   * Logs out the currently authenticated user.
   *
   * This method logs the user out of the application and redirects them to the authentication page.
   *
   * @param {HttpContext} context - The HTTP context containing the request and response objects.
   * @param {import('@adonisjs/core/http').Auth} context.auth - The authentication instance used to log out the user.
   * @param {import('@adonisjs/core/http').Response} context.response - The response object used to redirect the user.
   * @returns {Promise<void>} - A promise that resolves when the user is logged out and redirected to the auth page.
   */
  async logout({ auth, response }: HttpContext): Promise<void> {
    await auth.use('web').logout();
    return response.redirect('/auth');
  }
}
