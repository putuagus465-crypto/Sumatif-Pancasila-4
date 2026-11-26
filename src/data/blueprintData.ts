import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Pendidikan Pancasila
 * Materi Pokok: Bab 4 - Musyawarah
 *
 * Distribusi:
 * - Romawi I (No. 1 - 30): Pilihan Ganda (PG), Bobot 1 Poin
 * - Romawi II (No. 31 - 40): Pilihan Ganda Kompleks (PGK), Bobot 2 Poin
 * Total Skor Maksimal: 50 Poin
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami makna dan tujuan musyawarah sebagai pengamalan nilai-nilai Pancasila.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi tujuan utama dilaksanakannya musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami manfaat musyawarah dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Peserta didik dapat menyebutkan salah satu manfaat positif dari kegiatan bermusyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami hak dan kewajiban sebagai peserta musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan hak dasar yang dimiliki setiap peserta saat bermusyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menerapkan etika dan sikap santun saat mengikuti musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan sikap yang tepat ketika teman sedang menyampaikan pendapat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami tanggung jawab bersama dalam menerima dan melaksanakan hasil musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan sikap yang tepat terhadap keputusan yang telah dihasilkan dari musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami langkah-langkah pelaksanaan musyawarah yang tertib dan terarah.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi hal awal yang perlu dilakukan sebelum musyawarah dimulai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menghargai keberagaman pendapat dalam kegiatan musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan sikap yang bijaksana ketika menghadapi perbedaan pendapat dengan teman.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik menerapkan praktik musyawarah di lingkungan sekolah, rumah, dan masyarakat.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi contoh penerapan musyawarah yang tepat di lingkungan sekolah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menghubungkan praktik musyawarah dengan sila-sila dalam Pancasila.',
    indikatorSoal:
      'Peserta didik dapat menentukan sila Pancasila yang secara khusus mencerminkan nilai musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik membedakan sikap yang sesuai dan tidak sesuai dengan nilai musyawarah.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi perilaku yang tidak sesuai dengan prinsip bermusyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menerapkan cara penyelesaian masalah secara damai dalam musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan tindakan yang tepat apabila kesepakatan belum tercapai dalam diskusi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami prinsip-prinsip dasar musyawarah untuk mufakat.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi salah satu prinsip pokok dalam pelaksanaan musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik melaksanakan kewajiban menaati keputusan bersama secara bertanggung jawab.',
    indikatorSoal:
      'Peserta didik dapat menentukan kewajiban peserta yang berbeda pendapat setelah keputusan disepakati.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami peran dan sikap adil seorang pemimpin musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan sikap adil ketua musyawarah dalam memberikan kesempatan berbicara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik memahami makna mufakat sebagai tujuan utama bermusyawarah.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan tujuan utama dari pencarian mufakat dalam musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menerapkan komunikasi yang sopan dan efektif dalam diskusi kelompok.',
    indikatorSoal:
      'Peserta didik dapat menentukan cara yang santun ketika belum memahami usulan peserta lain.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mampu menyampaikan pendapat secara logis dan relevan dengan topik pembahasan.',
    indikatorSoal:
      'Peserta didik dapat menentukan karakteristik alasan yang baik saat mengajukan usulan dalam musyawarah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menerapkan nilai keadilan dan kesetaraan dalam bermusyawarah.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi wujud sikap adil terhadap seluruh peserta musyawarah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami mekanisme pengambilan keputusan demokratis melalui mufakat maupun voting.',
    indikatorSoal:
      'Peserta didik dapat menentukan langkah pengambilan keputusan yang sah apabila mufakat tidak tercapai setelah diskusi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik membedakan kepentingan bersama dan kepentingan pribadi di lingkungan sekolah.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi contoh nyata kepentingan bersama di lingkungan kelas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menumbuhkan sikap lapang dada dan terbuka dalam bermusyawarah.',
    indikatorSoal:
      'Peserta didik dapat menentukan sikap dasar yang dibutuhkan agar musyawarah berjalan dengan baik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menganalisis manfaat keberagaman pendapat dalam memperkaya keputusan bersama.',
    indikatorSoal:
      'Peserta didik dapat menganalisis alasan mengapa perbedaan pendapat dapat memperkaya hasil musyawarah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menerapkan sikap saling menghormati ketika menanggapi pendapat yang kurang tepat.',
    indikatorSoal:
      'Peserta didik dapat menentukan cara menanggapi pendapat teman yang kurang tepat secara sopan dan konstruktif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis pertimbangan rasional sebelum mengambil keputusan bersama.',
    indikatorSoal:
      'Peserta didik dapat menentukan hal penting yang harus dipertimbangkan peserta sebelum mengambil keputusan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi kriteria keputusan musyawarah yang adil dan bermanfaat.',
    indikatorSoal:
      'Peserta didik dapat menentukan kriteria keputusan musyawarah yang baik dan berpihak pada kepentingan bersama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik menganalisis peran pemimpin diskusi dalam menjaga kesetaraan hak bicara.',
    indikatorSoal:
      'Disajikan situasi peserta yang mendominasi diskusi, peserta didik dapat menentukan tindakan adil yang harus dilakukan ketua.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik menganalisis peran musyawarah dalam menjaga persatuan dan mencegah konflik.',
    indikatorSoal:
      'Peserta didik dapat menganalisis alasan mengapa musyawarah efektif dalam mencegah timbulnya konflik.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menilai kualitas sebuah usulan secara objektif dalam musyawarah.',
    indikatorSoal:
      'Peserta didik dapat menganalisis dasar pertimbangan objektif yang digunakan untuk menilai sebuah usulan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik memahami prinsip keterwakilan dan partisipasi dalam pengambilan keputusan bersama.',
    indikatorSoal:
      'Peserta didik dapat menentukan prinsip pelibatan anggota atau perwakilan untuk keputusan yang menyangkut seluruh kelas.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menerapkan etika penyampaian kritik yang membangun dan menghargai martabat orang lain.',
    indikatorSoal:
      'Peserta didik dapat menganalisis cara menyampaikan kritik yang tepat agar berfokus pada gagasan bukan pribadi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  // ROMAWI II: PILIHAN GANDA KOMPLEKS (No. 31 - 40, Bobot 2 Poin: 2 Benar & 2 Salah)
  31: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi berbagai sikap terpuji yang perlu ditunjukkan saat bermusyawarah.',
    indikatorSoal:
      'Disajikan empat pilihan sikap, peserta didik dapat memilih dua sikap positif yang perlu ditunjukkan saat bermusyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 2,
  },
  32: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi tahapan persiapan musyawarah yang tepat dan sistematis.',
    indikatorSoal:
      'Disajikan empat pernyataan kegiatan, peserta didik dapat memilih dua langkah persiapan musyawarah yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menerapkan tata cara mengutarakan pendapat yang santun dan efektif.',
    indikatorSoal:
      'Disajikan empat cara berbicara, peserta didik dapat memilih dua cara mengutarakan pendapat yang baik dalam musyawarah.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  34: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi prinsip-prinsip musyawarah yang selaras dengan nilai Pancasila.',
    indikatorSoal:
      'Disajikan empat pernyataan prinsip, peserta didik dapat memilih dua prinsip musyawarah yang sesuai dengan Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  35: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik menerapkan sikap bijaksana saat menghadapi perbedaan pendapat dalam musyawarah.',
    indikatorSoal:
      'Disajikan empat pilihan respons, peserta didik dapat memilih dua tindakan positif yang dapat dilakukan saat pendapat berbeda.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  36: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis strategi dan langkah konstruktif agar mufakat dapat tercapai.',
    indikatorSoal:
      'Disajikan empat pilihan tindakan, peserta didik dapat memilih dua upaya konstruktif yang dapat dilakukan agar mufakat tercapai.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  37: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik melaksanakan komitmen dan tanggung jawab setelah keputusan bersama disepakati.',
    indikatorSoal:
      'Disajikan empat pernyataan sikap, peserta didik dapat memilih dua tanggung jawab peserta setelah keputusan disepakati.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  38: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi contoh nyata etika dan tata tertib bermusyawarah.',
    indikatorSoal:
      'Disajikan empat perilaku dalam forum diskusi, peserta didik dapat memilih dua contoh etika bermusyawarah yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 2,
  },
  39: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi contoh keputusan bersama di lingkungan sekolah dan masyarakat.',
    indikatorSoal:
      'Disajikan empat contoh kegiatan/aturan, peserta didik dapat memilih dua contoh keputusan bersama yang perlu dilaksanakan.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  40: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik menganalisis sikap kritis dan bertanggung jawab sebelum menyetujui suatu usulan.',
    indikatorSoal:
      'Disajikan empat tindakan peserta, peserta didik dapat memilih dua hal yang sebaiknya dilakukan sebelum menyetujui usulan.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen = q.elemen || (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif || (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} dalam praktik bermusyawarah sesuai nilai Pancasila.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan pernyataan tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot ?? (def ? def.bobotSkor : q.type === 'pgk' ? 2 : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('perbedaan') || t.includes('kritik') || t.includes('komunikasi') || t.includes('pendapat')) {
    return 'Bhinneka Tunggal Ika';
  }
  if (t.includes('hak') || t.includes('tanggung jawab') || t.includes('voting') || t.includes('aturan') || t.includes('keterlibatan')) {
    return 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945';
  }
  if (t.includes('sekolah') || t.includes('konflik') || t.includes('kepentingan bersama') || t.includes('keputusan bersama')) {
    return 'Negara Kesatuan Republik Indonesia';
  }
  return 'Pancasila';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Romawi I • Pilihan Ganda (1 Poin)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Romawi II • PG Kompleks (2 Poin)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    ...(typeCountMap.pgk_kategori > 0
      ? [
          {
            type: 'pgk_kategori',
            label: 'Benar / Salah (PGK Kategori)',
            count: typeCountMap.pgk_kategori,
            percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
          },
        ]
      : []),
  ];

  const maxTotalScore = blueprints.reduce((sum, bp) => sum + (bp.bobotSkor || 1), 0);

  return {
    total,
    maxTotalScore,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
