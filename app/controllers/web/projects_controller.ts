import SeoHelper from '#helpers/seo_helper';
import type { HttpContext } from '@adonisjs/core/http'
import { PageObject } from '@adonisjs/inertia/types';

export default class ProjectsController {
  /**
   * Menampilkan halaman project web.
   *
   * @param {HttpContext} context - Konteks dari request.
   * @returns {Promise<string | PageObject>} - Promise yang berisi view yang akan di render.
   */
  async index({ inertia }: HttpContext): Promise<string | PageObject> {
    const seoData = SeoHelper
      .generateTitle('Proyek Saya')
      .generateDesc('Biar kamu tau apa saja proyek yang saya kerjakan dan apa saja yang sudah saya kerjakan selama ini.')
      .generateKeywords('web, app, technology, web developer, freelancer web, web programmer')
      .setAuthor('Cak Adi')
      .setSiteName('Catatan Cak Adi')
      .setOgImage('/images/og.jpg')
      .setCurrentUrl('https://www.cakadi.web.id')
      .allowRobots(true)
      .build();

    return inertia.render('web/project', seoData, seoData)
  }

  /**
   * Menampilkan halaman project web berdasarkan slug yang diberikan.
   *
   * @param {HttpContext} context - Konteks dari request.
   * @returns {Promise<string | PageObject>} - Promise yang berisi view yang akan di render.
   */
  async show({ inertia }: HttpContext): Promise<string | PageObject> {
    const seoData = SeoHelper
      .generateTitle('Proyek Saya')
      .generateDesc('Biar kamu tau apa saja proyek yang saya kerjakan dan apa saja yang sudah saya kerjakan selama ini.')
      .generateKeywords('web, app, technology, web developer, freelancer web, web programmer')
      .setAuthor('Cak Adi')
      .setSiteName('Catatan Cak Adi')
      .setOgImage('/images/og.jpg')
      .setCurrentUrl('https://www.cakadi.web.id')
      .allowRobots(true)
      .build();

    return inertia.render('web/project', seoData, seoData)
  }
}
