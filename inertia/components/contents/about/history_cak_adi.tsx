import { FC } from "react";
import Tooltip from "~/components/ui-extended/Tooltip";

const HistoryCakAdi: FC = () => (
  <div id="sejarah-nama-cak-adi">
    <h2>Sejarah Nama Cak Adi</h2>
    <p>Awal mula dipanggil Cak Adi adalah ketika saya akan mencari nama pengguna <span dangerouslySetInnerHTML={{ __html: "&lpar;" }} />dalam bahasa inggris adalah <em>username</em><span dangerouslySetInnerHTML={{ __html: "&rpar;" }} /> untuk sebuah gim daring yakni <em>Point Blank</em> untuk bisa bermain atau mabar dengan temen di warnet. Namun namaku sudah dipakai orang lain dan mengharuskan saya untuk mencari alternatif nama pengguna. Nah selang beberapa hari saya menemui akun facebook milik <Tooltip style={{ cursor: 'help' }} as="span" title="Bapak Gedhe atau paman yang usianya lebih tua daripada salah satu hubungan dari orang tua.">Pakdhe</Tooltip> bernama AMANTRA yakni singkatan dari Agung Mandiri Putra dan dari situlah saya mendapatkan inspirasi nama pengguna yang unik dengan cara menggabungkan semua nama lengkapku menjadi <Tooltip as="span" title="Amir Zuhdi Wibowo">ADIBOO</Tooltip>.</p>
    <p>Kemudian beranjak ke kelas 4 SD dimana pada kala itu setelah saya ngaji di musholla terdekat, saya menemukan satu kanal TV swasta di Jawa Timur bernama JTV <span dangerouslySetInnerHTML={{ __html: "&lpar;" }} />Jawa Timur Televisi<span dangerouslySetInnerHTML={{ __html: "&rpar;" }} /> yang menarik perhatian saya karena menganut bahasa dialek suroboyoan sehingga saya tertarik untuk mengikutinya dan suka terhadap acara tv tersebut, yakni acaranya <a href="https://id.wikipedia.org/wiki/Bayu_Skak" rel="noreferrer" target="_blank">Bayu Skak</a>. Nah dari situlah saya menambahkan kata CAK yang berarti sapaan Kakak Laki-Laki sebelum nama ADIBOO, namun karena ADIBOO terlalu panjang saya putuskan untuk menyingkatnya menjadi "ADI" saja, sehingga sekarang bisa dipanggil "CAK ADI", "MAS ADI" atau hanya "ADI" saja.</p>
  </div>
);

HistoryCakAdi.displayName = "History";

export default HistoryCakAdi;
