import { FC } from "react";

const MyJourney: FC = () => (
  <div id="my-journey">
    <h2>Perjuangan Berkelana Di Samudera Teknologi</h2>
    <p>Perjuanganku di dunia teknologi masih berlanjut hingga sekarang. Karena untuk urusan teknologi sangat berkembang dengan pesat sekali di Abad 21 awal. Nah, awal mula kenapa saya terjun di dunia teknologi, karena bermula dari ketika saya SD dulu ada penugasan untuk membuat makalah terkait dengan tugas PPKn dan diketik menjadi <em>hardcopy</em>.</p>
    <p>Nah disela-sela saya mencari materi, terbesitlah di benak saya "caranya bikin kaya gini <span dangerouslySetInnerHTML={{ __html: "&lpar;" }} />website<span dangerouslySetInnerHTML={{ __html: "&rpar;" }} /> itu gimana yak?" dan akhirnya saya coba mencarinya di google dan bertemu dengan platform <a href="https://www.blogger.com" rel="noopener">Blogger</a>. Saya pun mencoba dan menjajal platform itu sejak pertama kali hingga saat ini saya sudah mempelajari banyak platform, bahasa pemrograman dan kerangka kerja yang digunakan di dunia industri teknologi dan informasi.</p>
  </div>
);
MyJourney.displayName = "MyJourney";

export default MyJourney;
