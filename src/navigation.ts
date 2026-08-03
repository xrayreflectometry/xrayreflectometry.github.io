import type { Lang } from './i18n';
import { ui } from './i18n';

const email = 'xray1006.rtx3090@gmail.com';

export function getHeaderData(lang: Lang) {
  const n = ui[lang].nav;
  const base = lang === 'en' ? '/' : '/ko';
  return {
    links: [
      { text: n.features, href: `${base}#features` },
      { text: n.how, href: `${base}#how` },
      { text: n.benchmarks, href: `${base}#benchmarks` },
      { text: n.pricing, href: `${base}#pricing` },
      { text: n.faq, href: `${base}#faq` },
    ],
    actions: [{ text: n.buy, href: `${base}#pricing`, variant: 'primary' }],
  };
}

export function getFooterData(lang: Lang) {
  const tt = ui[lang];
  const n = tt.nav;
  const base = lang === 'en' ? '/' : '/ko';
  return {
    links: [
      {
        title: tt.product,
        links: [
          { text: n.features, href: `${base}#features` },
          { text: n.how, href: `${base}#how` },
          { text: n.benchmarks, href: `${base}#benchmarks` },
          { text: n.pricing, href: `${base}#pricing` },
        ],
      },
      {
        title: tt.support,
        links: [
          { text: n.faq, href: `${base}#faq` },
          { text: n.buy, href: `${base}#pricing` },
          { text: tt.contact, href: `mailto:${email}` },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [],
    footNote: `<span class="font-heading font-semibold text-gray-700 dark:text-gray-300">ReflexAuto</span> — ${tt.footNote}`,
  };
}
