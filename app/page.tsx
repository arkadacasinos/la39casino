import type React from 'react'

const AFFILIATE_URL = 'https://lunar-silver-glow.com/?serial=61365830&creative_id=9330'

interface PayoutItem {
  id: string
  mult: string
  win: string
  deposit: string
}

const PAYOUTS: PayoutItem[] = [
  { id: 'ID 65•••••63', mult: '*3,7', win: '5 500 RUB', deposit: '1 500 RUB депозит' },
  { id: 'ID 82•••••08', mult: '*3', win: '3 000 RUB', deposit: '1 000 RUB депозит' },
  { id: 'ID 40•••••52', mult: '*3', win: '3 000 RUB', deposit: '988 RUB депозит' },
  { id: 'ID 42•••••01', mult: '*4,1', win: '5 300 RUB', deposit: '1 307 RUB депозит' },
  { id: 'ID 76•••••23', mult: '*3,4', win: '3 500 RUB', deposit: '1 020 RUB депозит' },
  { id: 'ID 52•••••11', mult: '*2', win: '2 000 RUB', deposit: '1 000 RUB депозит' },
  { id: 'ID 91•••••44', mult: '*5,2', win: '10 400 RUB', deposit: '2 000 RUB депозит' },
  { id: 'ID 33•••••19', mult: '*4,8', win: '7 200 RUB', deposit: '1 500 RUB депозит' },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0918] text-white">
      {/* Mobile Drawer Menu */}
      <aside id="l9c2-drawer" className="l9c2-drawer flex flex-col justify-between p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#2b1b44] pb-4">
            <a href={AFFILIATE_URL} className="flex items-center gap-1 text-2xl">
              <span className="l9c2-logo-lya text-2xl font-black italic">ЛЯ</span>
              <span className="l9c2-logo-casino text-2xl font-extrabold tracking-tight">Casino</span>
            </a>
            <a
              href="#!"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#23153c] text-white/70 hover:bg-[#2d1b4c] hover:text-white"
              aria-label="Закрыть меню"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>

          <nav className="flex flex-col gap-2">
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-[#23153c] hover:text-[#ff2a8d]"
            >
              <svg className="h-5 w-5 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Бонусы
            </a>
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-[#23153c] hover:text-[#ff2a8d]"
            >
              <svg className="h-5 w-5 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Казино
            </a>
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-[#23153c] hover:text-[#ff2a8d]"
            >
              <svg className="h-5 w-5 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Live Казино
            </a>
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-[#23153c] hover:text-[#ff2a8d]"
            >
              <svg className="h-5 w-5 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Турниры
            </a>
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-[#23153c] hover:text-[#ff2a8d]"
            >
              <svg className="h-5 w-5 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              VIP Клуб
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-2.5 border-t border-[#2b1b44] pt-4">
          <a
            href={AFFILIATE_URL}
            className="l9c2-btn-dark flex w-full items-center justify-center rounded-full py-2.5 text-sm font-bold text-white"
          >
            Вход
          </a>
          <a
            href={AFFILIATE_URL}
            className="l9c2-btn-pink flex w-full items-center justify-center rounded-full py-2.5 text-sm font-bold text-white"
          >
            Регистрация
          </a>
        </div>
      </aside>

      {/* Scrim backdrop for mobile drawer */}
      <a href="#!" className="l9c2-scrim" aria-label="Закрыть меню" />

      {/* Header bar matching Screen 2 */}
      <header className="l9c2-header sticky top-0 z-40 w-full">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6">
          {/* Left section: Hamburger + Logo + Nav */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-8">
            <a
              href="#l9c2-drawer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 hover:bg-[#201435] hover:text-white sm:h-10 sm:w-10"
              aria-label="Открыть меню"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            {/* Logo */}
            <a href={AFFILIATE_URL} className="flex items-baseline gap-0.5 sm:gap-1 focus:outline-none">
              <span className="l9c2-logo-lya text-xl font-black italic tracking-tighter sm:text-3xl">ЛЯ</span>
              <span className="l9c2-logo-casino text-xl font-black tracking-tight sm:text-3xl">Casino</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-1 md:flex lg:gap-2">
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-[#211637] hover:text-white"
              >
                <svg className="h-4 w-4 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Бонусы
              </a>
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-[#211637] hover:text-white"
              >
                <svg className="h-4 w-4 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Казино
              </a>
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-[#211637] hover:text-white"
              >
                <svg className="h-4 w-4 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Live Казино
              </a>
            </nav>
          </div>

          {/* Right section: Search + Login + Registration */}
          <div className="flex items-center gap-1 sm:gap-2.5">
            <a
              href={AFFILIATE_URL}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-[#211637] hover:text-white sm:h-9 sm:w-9"
              aria-label="Поиск игр"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>

            <a
              href={AFFILIATE_URL}
              className="l9c2-btn-dark rounded-full px-2.5 py-1 text-xs font-semibold text-white/90 sm:px-4 sm:py-2 sm:text-sm"
            >
              Вход
            </a>

            <a
              href={AFFILIATE_URL}
              className="l9c2-btn-pink relative flex items-center rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap text-white sm:px-5 sm:py-2 sm:text-sm"
            >
              <span>Регистрация</span>
              {/* Gift box badge on top right corner */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff2a8d] ring-1 ring-[#120c1f] sm:-top-1.5 sm:h-4 sm:w-4 sm:ring-2">
                <svg className="h-2 w-2 text-white sm:h-2.5 sm:w-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0115 5h1a2 2 0 012 2v2a2 2 0 01-2 2h-.146l.82 7.378A2 2 0 0114.682 20H5.318a2 2 0 01-1.992-1.622L4.146 11H4a2 2 0 01-2-2V7a2 2 0 012-2h1zm3-2a1 1 0 00-1 1h2a1 1 0 00-1-1zm4 0a1 1 0 00-1 1h2a1 1 0 00-1-1zM4 7v2h12V7H4zm1.854 4l-.778 7h9.848l-.778-7H5.854z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container - Flex Column for reorderable DOM */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-3 py-4 sm:px-6 sm:py-6">
        {/* FIRST SCREEN: HERO BANNER (REPLICA OF SCREEN 2) */}
        <section aria-label="Промо баннер La Casino" className="w-full">
          <div className="relative overflow-hidden rounded-2xl border border-[#2b1b44] bg-[#140c24] shadow-2xl sm:rounded-3xl">
            {/* Banner Background Image with Model */}
            <div
              className="relative min-h-[340px] w-full bg-cover bg-center sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
              style={{
                backgroundImage: 'url(/images/hero-banner.jpg)',
              }}
            >
              {/* Radial and Linear Gradient Overlays to preserve dark legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e081be6] via-[#120a22b3] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e081bf2] via-transparent to-transparent sm:hidden" />

              {/* Banner Text Content */}
              <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-center px-5 py-8 sm:min-h-[420px] sm:px-10 sm:py-12 md:min-h-[480px] md:max-w-xl lg:min-h-[520px] lg:max-w-2xl">
                <h1 className="text-2xl font-black uppercase tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight">
                  МОЩНЫЙ СТАРТ:
                </h1>
                <p className="mt-2 text-sm font-medium text-white/95 sm:mt-3 sm:text-lg md:text-xl lg:text-2xl">
                  до 225% + 1000 ФС на четыре депозита
                </p>

                <div className="mt-6 sm:mt-8">
                  <a
                    href={AFFILIATE_URL}
                    className="l9c2-btn-pink inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-extrabold tracking-wide text-white sm:px-10 sm:py-4 sm:text-base"
                  >
                    Зарегаться!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOP PAYOUTS TICKER (SCREEN 2 REPLICA) */}
        <section aria-label="ТОП Выплаты" className="w-full">
          <div className="l9c2-card-glow rounded-2xl p-4 sm:rounded-3xl sm:p-6">
            {/* Header: Flame star + Title + Total Amount */}
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider text-white/80 uppercase sm:text-sm">
                  ТОП Выплаты
                </span>
                <span className="inline-block animate-pulse text-sm text-[#ff5722]">💥</span>
              </div>
              <div className="text-xl font-black tracking-tight text-white sm:text-2xl">
                6 173 450 RUB
              </div>
            </div>

            {/* Payouts Carousel Row */}
            <div className="l9c2-ticker-scroll flex items-center gap-3 overflow-x-auto pb-2">
              {PAYOUTS.map((item, idx) => (
                <a
                  key={idx}
                  href={AFFILIATE_URL}
                  className="flex min-w-[170px] flex-shrink-0 items-center justify-between rounded-xl border border-[#2c1d47] bg-[#1a122e] p-3 transition-colors hover:border-[#ff2a8d]/40 hover:bg-[#241740] sm:min-w-[190px]"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-medium text-white/50">{item.id}</span>
                    <span className="flex items-center gap-1 text-sm font-bold text-white">
                      {item.win}
                      <span className="text-[#00e676]">↗</span>
                    </span>
                    <span className="text-[10px] text-white/40">{item.deposit}</span>
                  </div>

                  <span className="rounded-lg bg-[#00e676]/15 px-2 py-1 text-xs font-black text-[#00e676]">
                    {item.mult}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* PROSTYNYA TEXT (300-400 WORDS WITH ALL KEYWORDS FROM SCREEN 1) */}
        <article className="l9c2-seo-article l9c2-card-glow rounded-2xl p-5 sm:rounded-3xl sm:p-8">
          <section id="official">
            <h2>
              <span className="text-[#ff2a8d]">⚡</span>
              La Casino официальный сайт и лицензионные слоты
            </h2>
            <p>
              Добро пожаловать в La Casino — современную игровую платформу для ценителей честного азарта и щедрых выигрышей. Наш La Casino официальный сайт предоставляет круглосуточный доступ к тысячам сертифицированных слотов, карточным столам, рулетке и захватывающим развлечениям с живыми дилерами. Каждый совершеннолетний игрок может запустить в La Casino играть на реальные деньги с гарантией прозрачных правил и моментального вывода средств. Если вы ищете безопасный игровой клуб с безупречной репутацией, посетите Ля Казино официальный ресурс или оригинальный La Casino официальный сайт и оцените высокий процент отдачи игровых автоматов.
            </p>
          </section>

          <section id="mirror">
            <h2>
              <span className="text-[#ff2a8d]">🛡️</span>
              Ля Казино зеркало рабочее на сегодня: быстрый вход без блокировок
            </h2>
            <p>
              Для стабильного и бесперебойного доступа создано Ля Казино зеркало рабочее на сегодня. Актуальное Ля Казино зеркало полностью дублирует весь функционал платформы, каталог сертифицированных игр, баланс депозита и активные бонусные предложения. Если интернет-провайдер временно ограничил доступ к главному домену, просто используйте проверенное La Casino зеркало или резервное Ля Казино зеркало рабочее для мгновенной авторизации в личном кабинете. Рабочее La Casino зеркало обеспечивает надежное шифрование персональных данных и позволяет комфортно крутить спины без сторонних программ.
            </p>
          </section>

          <section id="play">
            <h2>
              <span className="text-[#ff2a8d]">🎰</span>
              Как в Ля Казино играть онлайн и получить приветственный бонус
            </h2>
            <p>
              Создание учетной записи занимает меньше минуты. Перейдите на Ля Казино официальный сайт, укажите контактные данные и получите эксклюзивный приветственный пакет до 225% и 1000 фриспинов на четыре депозита. Выбирайте надежное Ля Казино онлайн, чтобы делать ставки в удобном формате как на компьютере, так и на смартфонах. Для новичков предусмотрен демонстрационный режим, позволяющий в Ля Казино играть онлайн совершенно бесплатно, а также пробовать в La Casino играть на фишки перед переходом к крупным реальным ставкам.
            </p>
          </section>

          <section id="mobile">
            <h2>
              <span className="text-[#ff2a8d]">📱</span>
              Мобильная версия La Казино и официальный софт для смартфонов
            </h2>
            <p>
              Адаптивный мобильный интерфейс La Казино идеально работает на любых смартфонах и планшетах. Открывайте La Casino официальный портал в браузере телефона под управлением iOS или Android без потери качества графики и скорости загрузки страниц. Пользователям мобильного La Казино доступны быстрые выплаты, круглосуточная служба поддержки и еженедельный кэшбэк. Заходите на проверенный Ля Казино официальный сайт, делайте первые спины и присоединяйтесь к числу счастливчиков, ежедневно срывающих солидные джекпоты в Ля Казино онлайн!
            </p>
          </section>

          {/* Quick Action Button Inside SEO Section */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#2b1b44] bg-[#120a22] p-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <div className="text-base font-extrabold text-white sm:text-lg">
                Готовы начать игру в Ля Казино прямо сейчас?
              </div>
              <div className="text-xs text-white/60 sm:text-sm">
                Получите бонус до 225% и 1000 фриспинов на первый депозит
              </div>
            </div>
            <a
              href={AFFILIATE_URL}
              className="l9c2-btn-pink w-full rounded-full px-7 py-3 text-center text-sm font-bold text-white sm:w-auto"
            >
              Играть в La Casino
            </a>
          </div>
        </article>
      </main>

      {/* Floating Chat Widget Button (matching Screen 2) */}
      <aside aria-label="Служба поддержки" className="fixed right-4 bottom-5 z-40 sm:right-6 sm:bottom-6">
        <a
          href={AFFILIATE_URL}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#a855f7] text-white shadow-[0_4px_20px_rgba(147,51,234,0.5)] transition-transform hover:scale-110 active:scale-95"
          aria-label="Онлайн чат поддержки"
        >
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </a>
      </aside>

      {/* FOOTER WITH HASHTAGS (FOR ON-SITE NAVIGATION) & LEGAL INFO */}
      <footer className="mt-8 border-t border-[#231738] bg-[#0c0716] py-10 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6">
          {/* Hashtag Cloud based on keywords */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-wider text-white/40 uppercase">
              Навигация и быстрые разделы:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="#official"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #lacasino
              </a>
              <a
                href="#mirror"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #ляказинозеркало
              </a>
              <a
                href="#mirror"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #ляказинозеркалорабочее
              </a>
              <a
                href="#play"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #lacasinoиграть
              </a>
              <a
                href="#official"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #lacasinoофициальныйсайт
              </a>
              <a
                href="#play"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #ляказиноонлайн
              </a>
              <a
                href="#mobile"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #laказино
              </a>
              <a
                href="#official"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #ляказиноофициальный
              </a>
              <a
                href="#official"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #ляказиноофициальныйсайт
              </a>
              <a
                href="#mirror"
                className="rounded-lg border border-[#2b1b44] bg-[#160d28] px-3 py-1.5 font-medium text-[#ff2a8d] hover:border-[#ff2a8d] hover:bg-[#20123a]"
              >
                #lacasinoзеркало
              </a>
            </div>
          </div>

          {/* Compliance & Responsible Gaming */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#231738] pt-6 text-xs sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/60 font-bold text-red-400">
                18+
              </span>
              <span>Играйте ответственно. Азартные игры предназначены только для лиц старше 18 лет.</span>
            </div>

            <div className="flex items-center gap-4 text-white/50">
              <a href={AFFILIATE_URL} className="hover:text-white">
                Правила и условия
              </a>
              <a href={AFFILIATE_URL} className="hover:text-white">
                Политика конфиденциальности
              </a>
              <a href={AFFILIATE_URL} className="hover:text-white">
                Поддержка 24/7
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-[11px] text-white/30">
            © 2026 La Casino (Ля Казино). Официальный информационный сайт и рабочее зеркало. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}
