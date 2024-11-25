import type { HttpContext } from '@adonisjs/core/http'
import { PageObject } from '@adonisjs/inertia/types';

/**
 * Class yang digunakan untuk menghandle request ke halaman contact dan prosesnya.
 *
 * @class
 * @author Catatan Cak Adi <cakadi190@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 */
export default class ContactMesController {
  /**
   * Menampilkan halaman contact.
   *
   * @param {HttpContext} context - Konteks dari request.
   * @returns {Promise<void | PageObject>} - Promise yang berisi view yang akan di render.
   */
  async index({}: HttpContext): Promise<void | PageObject> {}

  /**
   * Menangani proses pengiriman pesan melalui halaman contact.
   *
   * @param {HttpContext} context - Konteks dari request.
   * @returns {Promise<void | PageObject>} - Promise yang berisi view yang akan di render.
   */
  async process({}: HttpContext): Promise<void | PageObject> {}
}
