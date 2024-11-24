import SeoHelper from '#helpers/seo_helper';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class HomeController {
  async index({ inertia }: HttpContext) {
    const seoData = SeoHelper
      .generateTitle('Fullstack Web Developer')
      .generateDesc('Seorang Fullstack Web Developer yang berbasis di Kota Madiun yang suka sekali dengan desain dan juga hal yang berbau teknologi dan sekarang mulai mencoba untuk mempelajari hal yang berbau geografi.')
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
      .generateDesc('Ketahui beberapa hal terkait dengan diri saya dan semua tentang saya.')
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
