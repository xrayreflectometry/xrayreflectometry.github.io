// Two-language content for the ReflexAuto site (English / Korean).
// Home page strings + nav labels live here so both languages stay in sync.

export const languages = ['en', 'ko'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  en: {
    meta: {
      title: 'ReflexAuto — Automatic X-ray reflectivity fitting',
      description:
        'Load an XRR scan, press Run, and get layer thickness, density and roughness with error bars, in seconds. A standalone Windows app for automatic X-ray reflectivity fitting.',
    },
    nav: {
      features: 'Features',
      how: 'How it works',
      benchmarks: 'Benchmarks',
      pricing: 'Pricing',
      faq: 'FAQ',
      buy: 'Buy a license',
    },
    hero: {
      eyebrow: 'Automatic XRR fitting / Windows',
      title:
        'From an XRR curve to the full&nbsp;<br class="hidden lg:inline" />layer structure — <span class="text-primary">automatically</span>',
      subtitle:
        'Load a scan and press <span class="font-semibold">Run</span>. Thickness, density and roughness come back for every layer, each with an error bar, in seconds, with no parameter tweaking and nothing to install beyond the app itself.',
      buy: 'Buy a license',
      how: 'See how it works',
    },
    imageAlt: {
      hero: 'ReflexAuto window showing measured XRR data with the automatic single-film fit overlaid (FOM 0.01) and the recovered SLD depth profile',
      hard: 'Recovered SLD depth profile of a 16-layer superlattice, fit automatically to FOM 0.0196',
      bench: 'Measured data and ReflexAuto automatic fit for a 250 Å film with the residual panel below, FOM 0.01',
    },
    stats: [
      { amount: '10 s', title: 'From raw scan to a converged fit' },
      { amount: '0.01', title: 'Figure-of-merit on a 250 Å single film' },
      { amount: '16', title: 'Layers auto-resolved in a superlattice' },
      { amount: '1-click', title: 'No manual parameter tuning needed' },
    ],
    features: {
      tagline: 'What it does',
      title: 'Built around how thin-film XRR is measured in the lab',
      subtitle:
        'Every feature exists to get you from a measured curve to a defensible layer model, faster, with numbers you can put in a paper.',
      items: [
        {
          title: 'One-click automatic fit',
          description:
            'Press Run. ReflexAuto locates the critical edge, infers the layer count, and refines thickness, density and roughness on its own. A 250 Å film converges to FOM 0.01 in about ten seconds.',
        },
        {
          title: 'Superlattice & free-multilayer',
          description:
            'Periodic stacks and graded interfaces are detected and refined automatically. A 16-layer superlattice fits to FOM 0.0196 without you drawing a single layer by hand.',
        },
        {
          title: 'Uncertainty from MCMC',
          description:
            'Every thickness, density and roughness comes back with a ± error bar from MCMC sampling, so you report values with confidence instead of a single point estimate.',
        },
        {
          title: 'Batch, in parallel',
          description:
            'Queue a folder of scans and fit them across CPU cores at once, then export the full result set — layer tables as CSV, plus figures — in one pass.',
        },
        {
          title: 'Manual mode when you want it',
          description:
            'A GenX-style manual tab lets you build and adjust models by hand, side by side with the automatic engine. Full control is always one click away.',
        },
        {
          title: 'A single standalone app',
          description:
            'One Windows executable. No Python, pip, or conda. Install it and fit; it runs the same on any lab machine.',
        },
      ],
    },
    hard: {
      tagline: 'Hard cases',
      title: 'Fits the stacks manual refinement gets stuck on',
      contentBody:
        'The SLD depth profile on the right was recovered automatically: thickness, density and roughness for every period, fit to <span class="font-mono text-primary">FOM 0.0196</span> in under a minute.',
      items: [
        {
          title: 'Superlattice detection',
          description:
            'Recognizes periodic multilayers from the fringe structure and seeds the right number of repeats automatically.',
        },
        {
          title: 'Free-multilayer refinement',
          description:
            'Relaxes a superlattice into an unconstrained multilayer when the real sample is not perfectly periodic.',
        },
        {
          title: 'Density grading & critical edge',
          description:
            'Handles graded densities and pins the substrate SLD from the critical angle so the fit starts on solid physical ground.',
        },
      ],
    },
    steps: {
      tagline: 'How it works',
      title: 'Three steps from scan to structure',
      items: [
        {
          title: 'Open your scan',
          description:
            'Load a two-column XRR data file (angle vs. intensity). Pick an instrument preset or set the wavelength yourself.',
        },
        {
          title: 'Press Run',
          description:
            'The automatic engine does the rest — critical edge, layer count, and a full refinement, with a live residual plot as it converges.',
        },
        {
          title: 'Read layers & export',
          description:
            'Get a layer table with thickness, SLD, electron density and roughness (± error bars), then export the figure and CSV.',
        },
      ],
    },
    bench: {
      tagline: 'Benchmarks',
      title: 'Held up against expert manual fits',
      items: [
        {
          title: '19 of 20 samples matched or beaten',
          description:
            'On 20 synchrotron-measured IGO thin-film samples, the automatic fit matched or improved on expert manual refinement in 19 cases: 18 clear wins and 1 tie, using the same model architecture on both sides.',
        },
        {
          title: 'FOM you can report',
          description:
            'Fit quality is the mean absolute residual in log-reflectivity (mean |Δlog₁₀R|). Lower is better; the single film above sits at 0.01, the 16-layer stack at 0.0196.',
        },
        {
          title: 'Reproducible, not lucky',
          description:
            'The same scan gives the same answer every run. Batch a whole sample series and the numbers are consistent across the set.',
        },
      ],
    },
    pricing: {
      tagline: 'Buy',
      title: 'Pricing',
      subtitle: 'A one-time, per-seat license. No subscription.',
      prices: [
        {
          title: 'Academic',
          subtitle: 'Single seat for students & researchers',
          price: 149,
          period: 'per seat, one-time',
          items: [
            'Full automatic + manual fitting',
            'MCMC uncertainty & batch mode',
            'CSV / figure export',
            '1 year of updates',
          ],
          cta: 'Get Academic',
          subject: 'ReflexAuto Academic license',
        },
        {
          title: 'Lab',
          subtitle: 'Site license for a research group',
          price: 490,
          period: 'per group, one-time',
          items: ['Everything in Academic', 'Up to 5 seats in one group', 'Priority email support', '2 years of updates'],
          cta: 'Get Lab',
          subject: 'ReflexAuto Lab license',
          ribbon: 'POPULAR',
        },
        {
          title: 'Commercial',
          subtitle: 'For industry & fab environments',
          price: 1490,
          period: 'per seat, one-time',
          items: ['Everything in Lab', 'Commercial-use license', 'Named support contact', 'Invoice & PO supported'],
          cta: 'Contact sales',
          subject: 'ReflexAuto Commercial license',
        },
      ],
    },
    faq: {
      tagline: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          title: 'What data does it read?',
          description:
            'Two-column XRR scans — angle (2θ) versus intensity — in plain text .dat / .txt. Load a file, choose a preset, and fit.',
        },
        {
          title: 'Do I need Python or any other software?',
          description:
            'No. ReflexAuto is a single standalone Windows application. There is nothing to install alongside it — no Python, no packages, no environment.',
        },
        {
          title: 'How is fit quality measured?',
          description:
            'By the figure-of-merit (FOM): the mean absolute residual in log-reflectivity. Lower is better. For reference, a clean single film fits around 0.02.',
        },
        {
          title: 'Can I still control the model by hand?',
          description:
            'Yes. Alongside the automatic engine there is a manual tab where you build layers, fix parameters, and refine exactly the way you would in a classic fitting tool.',
        },
        {
          title: 'How does licensing work?',
          description:
            'Each license is a per-seat key that activates the app. It is a one-time purchase, not a subscription. Reach out and you will get a key by email.',
        },
        {
          title: 'What instruments are supported?',
          description:
            'Lab sources out of the box (e.g. Cu Kα presets) plus a custom wavelength and substrate SLD for synchrotron or other setups.',
        },
      ],
    },
    cta: {
      title: 'Stop hand-fitting reflectivity curves',
      subtitle:
        'Point ReflexAuto at your own scans and see the fit for yourself. One app, one purchase, no subscription.',
      buy: 'Buy a license',
      email: 'Email us',
    },
    footNote: 'X-ray reflectivity, fitted automatically.',
    support: 'Support',
    product: 'Product',
    contact: 'Contact',
    skip: 'Skip to content',
  },

  ko: {
    meta: {
      title: 'ReflexAuto — X선 반사율 자동 피팅',
      description:
        '스캔을 불러와 Run만 누르면 층마다 두께와 밀도, 거칠기가 오차범위와 함께 몇 초 만에 나옵니다, X선 반사율(XRR)을 자동으로 피팅해 주는 윈도우 프로그램입니다',
    },
    nav: {
      features: '기능',
      how: '사용 방법',
      benchmarks: '벤치마크',
      pricing: '가격',
      faq: 'FAQ',
      buy: '라이선스 구매',
    },
    hero: {
      eyebrow: 'X선 반사율 자동 피팅 / Windows',
      title: 'XRR 곡선에서 전체 층 구조까지<br /><span class="text-primary">자동으로</span>',
      subtitle:
        '스캔을 불러와 <span class="font-semibold">Run</span> 버튼만 누르면 층마다 두께와 밀도, 거칠기가 오차범위와 함께 몇 초 만에 나옵니다, 파라미터를 일일이 맞출 일도, 앱 하나 말고는 따로 설치할 것도 없습니다',
      buy: '라이선스 구매',
      how: '사용 방법 보기',
    },
    imageAlt: {
      hero: 'ReflexAuto 화면, 측정한 XRR 데이터에 자동 단일막 피팅(FOM 0.01)이 겹쳐지고 복원된 SLD 깊이 프로파일이 함께 표시됩니다',
      hard: '16층 초격자의 SLD 깊이 프로파일, FOM 0.0196으로 자동 복원한 결과입니다',
      bench: '250 Å 박막의 측정 데이터와 ReflexAuto 자동 피팅, 아래에 잔차 패널이 함께 표시됩니다(FOM 0.01)',
    },
    stats: [
      { amount: '10초', title: '스캔 불러오기부터 피팅 완료까지' },
      { amount: '0.01', title: '250 Å 단일막 적합도(FOM)' },
      { amount: '16', title: '자동으로 찾아낸 초격자 층 수' },
      { amount: '원클릭', title: '파라미터 수동 조정 불필요' },
    ],
    features: {
      tagline: '핵심 기능',
      title: '실제 박막 XRR 측정 현장에 맞춰 만들었습니다',
      subtitle: '측정한 곡선을 논문에 바로 쓸 수 있는 층 모델로, 더 빠르고 근거 있게 바꿔 줍니다',
      items: [
        {
          title: '원클릭 자동 피팅',
          description:
            'Run 버튼만 누르면 임계각을 찾고 층 개수를 파악해 두께와 밀도, 거칠기까지 알아서 맞추고, 250 Å 박막은 10초 만에 FOM 0.01로 수렴합니다',
        },
        {
          title: '초격자와 자유 다층',
          description:
            '주기적인 다층 구조와 경사 계면을 자동으로 감지해 피팅하고, 16층 초격자도 직접 그리지 않고 FOM 0.0196까지 맞춰 냅니다',
        },
        {
          title: 'MCMC 불확실도',
          description:
            '두께와 밀도, 거칠기마다 MCMC로 계산한 오차범위(±)를 함께 제공하므로, 단일 값이 아니라 신뢰구간까지 논문에 그대로 실을 수 있습니다',
        },
        {
          title: '병렬 배치 처리',
          description: '여러 스캔을 폴더째 넣어 두면 여러 CPU 코어로 병렬 피팅하고, 층 결과표는 CSV로, 그림까지 한 번에 내보냅니다',
        },
        {
          title: '필요하면 수동 모드',
          description:
            'GenX처럼 직접 층을 쌓고 다듬는 수동 탭도 있어서, 자동 엔진과 함께 두고 언제든 세밀하게 제어할 수 있습니다',
        },
        {
          title: '설치는 파일 하나로',
          description: '윈도우 실행 파일 하나면 끝이라, 파이썬이나 별도 패키지 없이 어느 실험실 PC에서든 똑같이 돌아갑니다',
        },
      ],
    },
    hard: {
      tagline: '까다로운 시료',
      title: '수동으로는 막히던 구조까지 피팅합니다',
      contentBody:
        '오른쪽 SLD 깊이 프로파일은 모두 자동으로 복원한 결과로, 주기마다 두께와 밀도, 거칠기를 1분도 안 되어 <span class="font-mono text-primary">FOM 0.0196</span>까지 맞췄습니다',
      items: [
        {
          title: '초격자 감지',
          description: '프린지 패턴만 보고 주기적인 다층 구조를 알아채고, 반복 횟수를 자동으로 잡아 줍니다',
        },
        {
          title: '자유 다층 정밀화',
          description: '시료가 완벽히 주기적이지 않으면 초격자를 자유로운 다층으로 풀어서 다시 맞춥니다',
        },
        {
          title: '밀도 경사와 임계각',
          description: '경사진 밀도까지 다루고 임계각에서 기판 SLD를 고정해, 물리적으로 타당한 지점에서 피팅을 시작합니다',
        },
      ],
    },
    steps: {
      tagline: '사용 방법',
      title: '스캔에서 층 구조까지, 세 단계면 충분합니다',
      items: [
        {
          title: '스캔 불러오기',
          description: '각도와 세기가 담긴 2열 XRR 파일을 불러오고, 장비 프리셋을 고르거나 파장을 직접 입력합니다',
        },
        {
          title: 'Run 누르기',
          description: '나머지는 프로그램이 알아서 하는데, 임계각과 층 개수를 잡고 전체를 피팅하면서 수렴 과정을 잔차 그래프로 실시간 보여줍니다',
        },
        {
          title: '결과 확인하고 내보내기',
          description: '두께와 SLD, 전자밀도, 거칠기가 오차범위(±)와 함께 표로 정리되고, 그림과 CSV로 바로 내보낼 수 있습니다',
        },
      ],
    },
    bench: {
      tagline: '벤치마크',
      title: '숙련된 수동 피팅과 정면으로 비교했습니다',
      items: [
        {
          title: '20개 중 19개에서 대등하거나 더 나았습니다',
          description:
            '싱크로트론에서 측정한 IGO 박막 20개를 두고 비교했더니, 자동 피팅이 숙련자의 수동 피팅과 대등하거나 더 나은 경우가 19개였습니다 (같은 모델 기준 18승 1무)',
        },
        {
          title: '논문에 그대로 쓰는 FOM',
          description:
            '적합도(FOM)는 로그 반사율의 평균 절대 잔차(mean |Δlog₁₀R|)로 나타내며 값이 낮을수록 좋은데, 위 단일막은 0.01, 16층 스택은 0.0196입니다',
        },
        {
          title: '운이 아니라 재현입니다',
          description: '같은 스캔은 몇 번을 돌려도 같은 결과를 내고, 시료 한 세트를 배치로 처리해도 값이 흔들리지 않습니다',
        },
      ],
    },
    pricing: {
      tagline: '구매',
      title: '가격',
      subtitle: '구독료 없이 한 번만 구매하는 1인 라이선스입니다',
      prices: [
        {
          title: '학술',
          subtitle: '학생과 연구자를 위한 1인 라이선스',
          price: 149,
          period: '1인당, 1회 구매',
          items: ['자동, 수동 피팅 전체 기능', 'MCMC 불확실도와 배치 처리', 'CSV, 그림 내보내기', '1년간 업데이트 제공'],
          cta: '학술용 구매',
          subject: 'ReflexAuto Academic license',
        },
        {
          title: '연구실',
          subtitle: '연구 그룹을 위한 사이트 라이선스',
          price: 490,
          period: '그룹당, 1회 구매',
          items: ['학술판의 모든 기능', '한 그룹에서 최대 5명', '우선 이메일 지원', '2년간 업데이트 제공'],
          cta: '연구실용 구매',
          subject: 'ReflexAuto Lab license',
          ribbon: '인기',
        },
        {
          title: '상업',
          subtitle: '기업과 팹 환경을 위한 라이선스',
          price: 1490,
          period: '1인당, 1회 구매',
          items: ['연구실판의 모든 기능', '상업적 사용 허용', '전담 지원 담당자 배정', '세금계산서, 발주서 지원'],
          cta: '도입 문의',
          subject: 'ReflexAuto Commercial license',
        },
      ],
    },
    faq: {
      tagline: 'FAQ',
      title: '자주 묻는 질문',
      items: [
        {
          title: '어떤 데이터를 읽을 수 있나요?',
          description:
            '각도(2θ)와 세기가 두 열로 담긴 XRR 스캔을 .dat이나 .txt 파일로 읽으며, 파일을 불러와 프리셋만 고르면 바로 피팅할 수 있습니다',
        },
        {
          title: '파이썬이나 다른 프로그램이 필요한가요?',
          description: '아니요, 윈도우 실행 파일 하나로 끝나며 파이썬이나 별도 패키지, 가상환경을 따로 설치할 필요가 없습니다',
        },
        {
          title: '적합도(FOM)는 어떻게 측정하나요?',
          description: '로그 반사율의 평균 절대 잔차로 측정하며 값이 낮을수록 좋은데, 깨끗한 단일막이면 대략 0.02 수준입니다',
        },
        {
          title: '모델을 직접 수정할 수 있나요?',
          description:
            '네, 자동 엔진 옆에 수동 탭이 있어서 층을 직접 쌓고 파라미터를 고정하는 등 기존 피팅 프로그램처럼 다룰 수 있습니다',
        },
        {
          title: '라이선스는 어떻게 되나요?',
          description:
            '1인용 키 하나로 프로그램을 활성화하고 구독이 아니라 한 번만 구매하면 되며, 문의해 주시면 이메일로 키를 보내 드립니다',
        },
        {
          title: '어떤 장비를 지원하나요?',
          description:
            '실험실 광원은 프리셋으로 바로 쓸 수 있고(예: Cu Kα), 싱크로트론처럼 다른 환경이면 파장과 기판 SLD를 직접 지정하면 됩니다',
        },
      ],
    },
    cta: {
      title: '반사율 곡선, 이제 손으로 맞추지 마세요',
      subtitle: '직접 측정한 스캔으로 피팅 결과를 눈으로 확인해 보세요, 프로그램 하나에 한 번의 구매면 충분합니다',
      buy: '라이선스 구매',
      email: '이메일 문의',
    },
    footNote: 'X선 반사율을 자동으로 피팅합니다',
    support: '지원',
    product: '제품',
    contact: '문의',
    skip: '본문으로 건너뛰기',
  },
} as const;

export function getHomePath(lang: Lang): string {
  return lang === 'en' ? '/' : '/ko';
}
