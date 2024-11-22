import SeoHelper from '#helpers/seo_helper';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class HomeController {
  async index({ inertia }: HttpContext) {
    const seoData = SeoHelper
      .generateTitle('Fullstack Web Developer')
      .generateDesc('Cak Adi merupakan seorang web developer yang mengutamakan minimalis, efisiensi dan juga fungsi dalam sebuah website.')
      .generateKeywords('web, app, technology, web developer, freelancer web, web programmer')
      .setAuthor('Cak Adi')
      .setSiteName('Catatan Cak Adi')
      .setOgImage('/images/og.jpg')
      .setCurrentUrl('https://www.cakadi.web.id')
      .allowRobots(true)
      .build();

    return inertia.render('web/home', seoData, seoData)
  }

  async about({ inertia }: HttpContext) {
    const seoData = SeoHelper
      .generateTitle('Tentang Saya')
      .generateDesc('Cak Adi merupakan seorang web developer yang mengutamakan minimalis, efisiensi dan juga fungsi dalam sebuah website.')
      .generateKeywords('web, app, technology, web developer, freelancer web, web programmer')
      .setAuthor('Cak Adi')
      .setSiteName('Catatan Cak Adi')
      .setOgImage('/images/og.jpg')
      .setCurrentUrl('https://www.cakadi.web.id')
      .allowRobots(true)
      .build();

    return inertia.render('web/about', seoData, seoData)
  }
}
