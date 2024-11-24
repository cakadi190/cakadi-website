import SeoHelper from '#helpers/seo_helper';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';

/**
 * Class untuk menghandle request ke halaman home dan about.
 *
 * @class
 * @author Catatan Cak Adi <cakadi190@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 */
@inject()
export default class HomeController {
  /**
   * Menampilkan halaman beranda web.
   *
   * @param {HttpContext} context - Konteks dari request.
   * @returns {Promise<string | PageObject>} - Promise yang berisi view yang akan di render.
   */
  async index({ inertia }: HttpContext) {
    const seoData = SeoHelper
      .generateTitle('Fullstack Web Developer')
      .generateDesc('Seorang <strong>Fullstack Web Developer</strong> yang berbasis di <strong>Kota Madiun</strong> yang suka sekali dengan desain dan juga hal yang berbau teknologi dan sekarang mulai mencoba untuk mempelajari hal yang berbau geografi.')
      .generateKeywords('web, app, technology, web developer, freelancer web, web programmer')
      .setAuthor('Cak Adi')
      .setSiteName('Catatan Cak Adi')
      .setOgImage('/images/og.jpg')
      .setCurrentUrl('https://www.cakadi.web.id')
      .allowRobots(true)
      .build();

    return inertia.render('web/home', seoData, seoData)
  }

  /**
   * Menampilkan halaman about web.
   *
   * @param {HttpContext} context - Konteks dari request.
   * @returns {Promise<string | PageObject>} - Promise yang berisi view yang akan di render.
   */
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

