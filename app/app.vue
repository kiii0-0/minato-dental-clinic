<script setup lang="ts">
import { navigation, treatments, faqs } from "~/data/clinic";
const menuOpen = ref(false);
const bookingOpen = ref(false);
const bookingDialog = ref<HTMLDialogElement | null>(null);
const selectedTreatment = ref<(typeof treatments)[number] | null>(null);
watch(bookingOpen, (open) => {
  if (open) bookingDialog.value?.showModal();
  else bookingDialog.value?.close();
});
const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <div>
    <a class="skip-link" href="#main">本文へスキップ</a>
    <header class="site-header">
      <a href="#" class="brand" aria-label="みなと歯科クリニック ホーム"
        ><ClinicLogo
      /></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{
          item.label
        }}</a>
      </nav>
      <button class="booking-button header-booking" @click="bookingOpen = true">
        <span class="calendar-icon">▦</span> ご予約・お問い合わせ <span>↗</span>
      </button>
      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        :aria-label="menuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        @click="menuOpen = !menuOpen"
      >
        <span>{{ menuOpen ? "✕" : "☰" }}</span>
      </button>
      <nav
        v-if="menuOpen"
        id="mobile-nav"
        class="mobile-nav"
        aria-label="モバイルナビゲーション"
      >
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
          >{{ item.label }} <span>↗</span></a
        ><button
          class="booking-button"
          @click="
            closeMenu();
            bookingOpen = true;
          "
        >
          ご予約・お問い合わせ ↗
        </button>
      </nav>
    </header>

    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="hero-kicker"><span /> その笑顔と、ずっと一緒に。</div>
          <h1 id="hero-title">笑顔の芽を、<br /><span>育てよう。</span></h1>
          <p class="hero-description">
            小さな歯も、これからの歯も。<br />お子さまの成長に寄り添う、<br />家族みんなの歯医者さん。
          </p>
          <a href="#about" class="round-link"
            >私たちが大切にしていること <span>↗</span></a
          >
          <div class="hero-flower" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><i />
          </div>
        </div>
        <div class="hero-photo">
          <img
            src="/images/smile.jpg"
            alt="窓から差し込む光の中で微笑む女性"
            fetchpriority="high"
            width="736"
            height="456"
          /><span class="photo-caption">健やかな歯から、健やかな毎日へ。</span>
          <div class="hero-stamp">
            <ClinicIcon /><span
              >やさしく、ていねいに。<br />一人ひとりのペースで。</span
            >
          </div>
        </div>
        <div class="hero-bottom">
          <span class="hero-location">東京の、ご家族のかかりつけ歯科。</span
          ><a href="#news" class="hero-news"
            ><span class="news-label">お知らせ</span
            ><span class="news-preview">ホームページのご案内</span
            ><span>↗</span></a
          ><a href="#about" class="scroll-cue">SCROLL <span>↓</span></a>
        </div>
      </section>

      <section id="about" class="about-section section-shell">
        <div class="about-photo">
          <img
            src="/images/toothbrushes.jpg"
            alt="ガラスのコップに並んだ二本の木製歯ブラシ"
            width="1600"
            height="1067"
            loading="lazy"
          /><span class="photo-note">毎日の小さな習慣が、未来の笑顔に。</span
          ><span class="tiny-flower" aria-hidden="true">✳</span>
        </div>
        <div class="about-copy">
          <SectionHeading
            eyebrow="私たちの想い"
            title="「また来たい」が、いちばん。"
          />
          <p class="lead-copy">
            歯医者さんが、ちょっと楽しみになる。<br />そんな場所でありたいと思っています。
          </p>
          <p>
            はじめての場所、はじめての音。<br />お子さまにとって、歯医者さんはドキドキの連続。<br />だからこそ、私たちは「できた！」を一緒に喜び、<br />一人ひとりの歩幅に合わせて向き合います。
          </p>
          <p>
            お子さまも、お父さんも、お母さんも。<br />家族の笑顔を、歯の健康から支えていきます。
          </p>
          <p class="doctor-signature">
            院長 <strong>佐藤 美咲</strong><span>Misaki Sato</span>
          </p>
          <a href="#first-visit" class="text-link"
            >はじめての方へ <span>↗</span></a
          >
        </div>
      </section>

      <section id="treatments" class="treatments-section">
        <div class="section-shell">
          <div class="section-top">
            <SectionHeading
              eyebrow="診療案内"
              title="いまの歯も、未来の歯も。"
            />
            <p>年齢やお悩みに合わせて、<br />あなたに合ったケアを一緒に。</p>
          </div>
          <div class="treatment-grid">
            <button
              v-for="(treatment, index) in treatments"
              :key="treatment.title"
              class="treatment-card"
              @click="selectedTreatment = treatment"
            >
              <span class="card-top"
                ><span>0{{ index + 1 }}</span
                ><span>{{ treatment.tag }}</span></span
              ><ClinicIcon :name="treatment.icon" />
              <h3>{{ treatment.title }}</h3>
              <p>{{ treatment.subtitle }}</p>
              <span class="card-arrow" aria-label="詳しく見る">↗</span>
            </button>
          </div>
          <div
            v-if="selectedTreatment"
            class="treatment-detail"
            role="region"
            aria-live="polite"
          >
            <div>
              <h3>{{ selectedTreatment.title }}</h3>
              <p>{{ selectedTreatment.description }}</p>
            </div>
            <button
              aria-label="診療の説明を閉じる"
              @click="selectedTreatment = null"
            >
              ✕
            </button>
          </div>
        </div>
      </section>

      <section class="promise-section section-shell">
        <SectionHeading
          eyebrow="みなとの約束"
          title="安心できる理由があります。"
          centered
        />
        <div class="promise-grid">
          <article>
            <span class="promise-number">01</span>
            <h3>お子さまの気持ちを、第一に。</h3>
            <p>
              急がず、無理をせず。お子さまとの信頼関係を育みながら、診療を進めます。
            </p>
          </article>
          <article>
            <span class="promise-number">02</span>
            <h3>わかりやすく、ていねいに。</h3>
            <p>
              お口の状態や治療について、言葉を尽くしてご説明。納得してから、一緒に進めます。
            </p>
          </article>
          <article>
            <span class="promise-number">03</span>
            <h3>治療の先の、健康まで。</h3>
            <p>
              毎日のセルフケアもサポート。歯を守る習慣を、ご家族と一緒に考えます。
            </p>
          </article>
        </div>
      </section>

      <section id="first-visit" class="first-visit-section">
        <div class="section-shell first-visit-inner">
          <div>
            <SectionHeading
              eyebrow="はじめての方へ"
              title="まずは、お話しすることから。"
            />
            <p>
              「歯医者さんが苦手」「子どもの歯が気になる」<br />小さな不安も、どうぞお聞かせください。<br />あなたとご家族のペースで、はじめましょう。
            </p>
            <button class="booking-button" @click="bookingOpen = true">
              ご予約・お問い合わせ <span>↗</span>
            </button>
          </div>
          <img
            class="interior-photo"
            src="/images/interior.png"
            alt="絵本と木のおもちゃが並ぶ、みなと歯科クリニックの明るい待合室"
            width="1735"
            height="906"
            loading="lazy"
          />
        </div>
      </section>

      <section class="faq-section section-shell">
        <SectionHeading
          eyebrow="よくあるご質問"
          title="気になること、お答えします。"
        />
        <div class="faq-list">
          <details v-for="faq in faqs" :key="faq.question">
            <summary>
              <span class="question-mark">Q.</span>{{ faq.question
              }}<span class="faq-plus">＋</span>
            </summary>
            <p>{{ faq.answer }}</p>
          </details>
        </div>
      </section>

      <section id="news" class="news-section section-shell">
        <SectionHeading eyebrow="お知らせ" title="みなとからのお便り" />
        <div class="news-list">
          <details>
            <summary>
              <span class="news-tag">ご案内</span
              ><span>ホームページのご案内</span><span class="ml-auto">＋</span>
            </summary>
            <p>
              みなと歯科クリニックのホームページへようこそ。医院からのお知らせは、こちらでご案内します。
            </p>
          </details>
        </div>
      </section>

      <section id="access" class="access-section">
        <div class="section-shell access-inner">
          <div>
            <SectionHeading
              eyebrow="アクセス・診療時間"
              title="あなたの街の、みなとに。"
            />
            <p>みなと歯科クリニック</p>
            <address class="clinic-address">
              〒108-0074 東京都港区高輪2-14-8<br />高輪メディカルビル1F
            </address>
            <a
              class="map-link"
              href="https://www.google.com/maps/search/?api=1&amp;query=東京都港区高輪2-14-8"
              target="_blank"
              rel="noopener noreferrer"
              >Google マップで見る ↗</a
            >
            <dl class="clinic-details">
              <div>
                <dt>診療時間</dt>
                <dd>9:00–12:30 / 14:00–18:00</dd>
              </div>
              <div>
                <dt>休診日</dt>
                <dd>日曜・祝日</dd>
              </div>
              <div>
                <dt>TEL</dt>
                <dd><a href="tel:0364503281">03-6450-3281</a></dd>
              </div>
              <div>
                <dt>FAX</dt>
                <dd>03-6450-3282</dd>
              </div>
            </dl>
            <button class="booking-button" @click="bookingOpen = true">
              ご予約について <span>↗</span>
            </button>
          </div>
          <div class="access-art" aria-hidden="true">
            <ClinicLogo stacked /><span
              >お会いできる日を、<br />楽しみにしています。</span
            ><i>✳</i>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer section-shell">
      <a href="#" class="brand" aria-label="みなと歯科クリニック ホーム"
        ><ClinicLogo
      /></a>
      <div class="footer-links">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{
          item.label
        }}</a>
      </div>
      <div class="footer-bottom">
        <span>お子さまと、ご家族の笑顔のために。</span
        ><small>© {{ new Date().getFullYear() }} みなと歯科クリニック</small
        ><a href="#" aria-label="ページの先頭へ">↑</a>
      </div>
    </footer>
    <dialog
      ref="bookingDialog"
      class="booking-dialog"
      aria-labelledby="booking-title"
      @close="bookingOpen = false"
      @click="$event.target === bookingDialog && (bookingOpen = false)"
    >
      <div class="dialog-content">
        <button
          class="dialog-close"
          aria-label="閉じる"
          @click="bookingOpen = false"
        >
          ✕</button
        ><ClinicIcon />
        <p class="eyebrow">みなと歯科クリニック</p>
        <h2 id="booking-title">ご予約・お問い合わせ</h2>
        <p>
          ご予約は、お電話で承ります。<br />お口のお悩みも、お気軽にご相談ください。
        </p>
        <a class="dialog-phone" href="tel:0364503281">03-6450-3281</a>
        <p class="reception-hours">
          9:00–12:30 / 14:00–18:00<br />日曜・祝日休診
        </p>
        <a class="booking-button" href="tel:0364503281"
          >電話で予約する <span>↗</span></a
        >
      </div>
    </dialog>
  </div>
</template>
