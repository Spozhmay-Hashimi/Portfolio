/* ==========================================================================
   Spozhmay Hashimi — Portfolio  |  js/script.js
   Vanilla JavaScript. No jQuery, no framework.

   WHERE TO EDIT YOUR INFORMATION
   └─ Section 1: `portfolioData`  — name, contacts, about, skills, projects,
      education, social links, and the two visibility switches.
      Every content field is bilingual: { en: "...", fa: "..." }.
   └─ Section 2: `ui`             — interface labels (nav, headings, form,
      accessibility text) in English and Persian.
   Everything after Section 3 is wiring: theme, language, rendering, and
   interaction. You normally do not need to change it.

   Empty URL fields are hidden automatically — never rendered as dead links.
   ========================================================================== */

/* ==========================================================================
   1. PORTFOLIO DATA  (edit this)
   ========================================================================== */
const portfolioData = {
  /* --- Identity ---------------------------------------------------------- */
  name: "Spozhmay Hashimi",
  monogram: "SH",
  title: {
    en: "Aspiring Front-End Web Developer",
    fa: "توسعه‌دهنده فرانت‌اند در مسیر رشد",
  },

  /* --- Visibility switches ----------------------------------------------- */
  showNetlinksStatus: true,        // show/hide the "Student at Netlinks" label
  showOpenToWorkBadge: true,       // show/hide the "Open to internships" label
  showAcademicAchievement: false,  // show/hide the optional academic result

  /* --- Contact & social URLs (leave empty to hide the element) ----------- */
  email: "spozhmayhashimi@gmail.com",
  phone: "+93775561127",
  phoneDisplay: "+93 77 55 611 27",
  whatsappUrl: "https://wa.me/93775561127",
  githubUrl: "https://github.com/Spozhmay-Hashimi",
  linkedInUrl: "https://www.linkedin.com/in/spozhmay-hashimi-04aa89439/",
  cvUrl: "",                       // add a PDF URL later, e.g. "assets/cv/cv.pdf"

  /* Optional profile photo. Leave empty to keep the SH monogram. */
  profilePhoto: "",

  /* --- Navigation sections (order matters) -------------------------------- */
  sections: [
    { id: "home", label: { en: "Home", fa: "خانه" } },
    { id: "about", label: { en: "About", fa: "درباره" } },
    { id: "skills", label: { en: "Skills", fa: "مهارت‌ها" } },
    { id: "projects", label: { en: "Projects", fa: "پروژه‌ها" } },
    { id: "education", label: { en: "Education", fa: "تحصیل" } },
    { id: "contact", label: { en: "Contact", fa: "تماس" } },
  ],

  /* --- Hero --------------------------------------------------------------- */
  hero: {
    intro: {
      en: "I'm an aspiring Front-End Web Developer passionate about building responsive, thoughtful, and user-focused web experiences. I enjoy turning ideas into clean interfaces, learning through practical projects, and collaborating with others to create meaningful digital experiences.",
      fa: "من یک توسعه‌دهنده‌ی فرانت‌اند هستم که با علاقه تجربه‌های وب پاسخگو، دقیق و کاربرمحور می‌سازم. از تبدیل ایده‌ها به رابط‌های کاربری تمیز، یادگیری از راه پروژه‌های عملی و همکاری با دیگران برای ساخت تجربه‌های دیجیتال معنادار لذت می‌برم.",
    },
    netlinksBadge: { en: "Student at Netlinks", fa: "دانشجوی Netlinks" },
    openToWorkBadge: {
      en: "Open to internships",
      fa: "آماده‌ی همکاری و دوره‌ی کارآموزی",
    },
  },

  /* --- About -------------------------------------------------------------- */
  about: {
    paragraphs: [
      {
        en: "I am building my career in front-end development step by step. I care about continuous learning: every project is a chance to understand the web a little better — cleaner markup, more consistent styling, and layouts that behave correctly on a phone.",
        fa: "من مسیرم را در توسعه‌ی فرانت‌اند، مرحله به مرحله می‌سازم. یادگیری پیوسته برایم اهمیت دارد: هر پروژه فرصتی است تا وب را بهتر بفهمم — نشان‌ده‌ی تمیزتر، استایل‌دهیِ یکنواخت‌تر و چیدمانی که در گوشی موبایل درست رفتار می‌کند.",
      },
      {
        en: "My experience so far comes from practical work: individual projects and collaborative builds completed during my studies. In team projects I have been responsible for individual pages, and I have also led a team — coordinating page ownership, agreeing on a shared structure, and keeping the visual language consistent.",
        fa: "تجربه‌ی من تا امروز از کار عملی به دست آمده است: پروژه‌های فردی و کارهای تیمی که در دوران تحصیل انجام داده‌ام. در پروژه‌های تیمی مسئولیت صفحه‌های مشخصی را داشته‌ام و همچنین رهبری یک تیم را بر عهده گرفته‌ام — تقسیم صفحه‌ها، توافق بر ساختار مشترک و حفظ یکنواختی بصری.",
      },
      {
        en: "I pay attention to clean structure, visual consistency and the small details that make an interface feel considered. I welcome feedback and treat revisions as part of the work, not as a setback.",
        fa: "به ساختار تمیز، یکنواختی بصری و جزئیات ریزی که یک رابط کاربری را دقیق نشان می‌دهد توجه دارم. بازخورد را می‌پذیرم و بازنگری را بخشی از کار می‌دانم، نه یک عقب‌گرد.",
      },
    ],
    facts: [
      { icon: "fa-solid fa-code", label: { en: "Focus: front-end development", fa: "تمرکز: توسعه‌ی فرانت‌اند" } },
      { icon: "fa-solid fa-graduation-cap", label: { en: "Student at Netlinks", fa: "دانشجوی Netlinks" } },
      { icon: "fa-solid fa-language", label: { en: "Works in English and Persian", fa: "کار به دو زبان انگلیسی و فارسی" } },
      { icon: "fa-solid fa-rocket", label: { en: "Open to internships", fa: "آماده‌ی دوره‌ی کارآموزی" } },
    ],
    highlights: [
      {
        icon: "fa-solid fa-graduation-cap",
        title: { en: "Continuous learning", fa: "یادگیری پیوسته" },
        text: {
          en: "New skills come from coursework plus hands-on practice on real pages.",
          fa: "مهارت‌های تازه را از دوره‌های آموزشی و تمرین عملی روی صفحه‌های واقعی به دست می‌آورم.",
        },
      },
      {
        icon: "fa-solid fa-mobile-screen-button",
        title: { en: "Responsive design", fa: "طراحی واکنش‌گرا" },
        text: {
          en: "Bootstrap 5 grids, mobile-first habits and layouts that adapt to the screen.",
          fa: "شبکه‌های Bootstrap 5، عادت موبایل‌محور و چیدمانی که با اندازه‌ی صفحه سازگار می‌شود.",
        },
      },
      {
        icon: "fa-solid fa-users",
        title: { en: "Team collaboration", fa: "همکاری تیمی" },
        text: {
          en: "Comfortable splitting work, reviewing teammates' pages and keeping a shared style.",
          fa: "در تقسیم کار، بررسی صفحه‌های هم‌تیمی‌ها و حفظ سبک مشترک راحت عمل می‌کنم.",
        },
      },
      {
        icon: "fa-solid fa-diagram-project",
        title: { en: "Team leadership", fa: "رهبری تیم" },
        text: {
          en: "Led a multi-page team project and coordinated who builds what.",
          fa: "رهبری یک پروژه‌ی تیمی چندصفحه‌ای و هماهنگی مسئولیت صفحه‌ها.",
        },
      },
      {
        icon: "fa-solid fa-vector-square",
        title: { en: "Detail and consistency", fa: "دقت و یکنواختی" },
        text: {
          en: "Clean structure, visual consistency and care for the user experience.",
          fa: "ساختار تمیز، یکنواختی بصری و توجه به تجربه‌ی کاربر.",
        },
      },
      {
        icon: "fa-solid fa-rotate",
        title: { en: "Feedback and growth", fa: "بازخورد و رشد" },
        text: {
          en: "I ask for review, accept criticism, and improve the result in the next pass.",
          fa: "بازبینی می‌خواهم، انتقاد را می‌پذیرم و در دور بعدی نتیجه را بهتر می‌کنم.",
        },
      },
    ],
  },

  /* --- Skills ------------------------------------------------------------ */
  /* level is an honest self-description, not a percentage. */
  skills: [
    {
      name: "HTML5",
      icon: "fa-brands fa-html5",
      level: { en: "Foundational — practiced in projects", fa: "پایه — تمرین‌شده در پروژه‌ها" },
      text: {
        en: "Semantic page structure, forms and accessible markup across my projects.",
        fa: "ساختار معنایی صفحه، فرم‌ها و نشان‌ده‌ی دسترس‌پذیر در پروژه‌های من.",
      },
    },
    {
      name: "CSS3",
      icon: "fa-brands fa-css3-alt",
      level: { en: "Foundational — practiced in projects", fa: "پایه — تمرین‌شده در پروژه‌ها" },
      text: {
        en: "Custom styling, gradients, Flexbox and Grid layouts, and responsive adjustments.",
        fa: "استایل‌دهی سفارشی، گرادیان، چیدمان Flexbox و Grid و تنظیمات واکنش‌گرا.",
      },
    },
    {
      name: "Bootstrap 5",
      icon: "fa-brands fa-bootstrap",
      level: { en: "Part of my development experience", fa: "بخشی از تجربه‌ی توسعه‌ی من" },
      text: {
        en: "Grid systems, components and RTL-ready layouts in individual and team work.",
        fa: "شبکه‌بندی، کامپوننت‌ها و چیدمان آماده برای راست‌به‌چپ، در کارهای فردی و تیمی.",
      },
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      level: { en: "Developing skill", fa: "مهارتی در حال رشد" },
      text: {
        en: "DOM updates, event handling and small interactive features — still learning daily.",
        fa: "به‌روزرسانی DOM، مدیریت رویدادها و قابلیت‌های تعاملی کوچک — هنوز هر روز تمرین می‌کنم.",
      },
    },
    {
      name: "Git",
      icon: "fa-brands fa-git-alt",
      level: { en: "Working knowledge", fa: "دانسته‌ی کاربردی" },
      text: {
        en: "Version control for my own work and for shared project history.",
        fa: "کنترل نسخه برای کار شخصی و تاریخچه‌ی پروژه‌های مشترک.",
      },
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      level: { en: "Working knowledge", fa: "دانسته‌ی کاربردی" },
      text: {
        en: "Repositories, GitHub Pages demos and review-based collaboration.",
        fa: "مخزن‌ها، نمونه‌های GitHub Pages و همکاری بر پایه‌ی بازبینی کد.",
      },
    },
    {
      name: "Figma",
      icon: "fa-brands fa-figma",
      level: { en: "Design and prototyping coursework", fa: "آموزش طراحی و نمونه‌سازی در دوره" },
      text: {
        en: "Interface design, layout exploration and handoff from my design coursework.",
        fa: "طراحی رابط کاربری، کاوش در چیدمان و تحویل طرح از دروس طراحی‌ام.",
      },
    },
    {
      name: "Framer",
      icon: "fa-brands fa-framer",
      level: { en: "Design and prototyping coursework", fa: "آموزش طراحی و نمونه‌سازی در دوره" },
      text: {
        en: "Rapid interactive prototypes and mockups built during coursework.",
        fa: "نمونه‌های اولیه‌ی تعاملی و ماکت‌های سریع که در دوره‌ها ساختم.",
      },
    },
  ],

  /* --- Projects ----------------------------------------------------------- */
  /* Add an `image` path (e.g. "assets/images/nova-tech.jpg") to replace the
     generated cover. Empty `githubUrl` / `liveUrl` hide their buttons.       */
  projects: [
    {
      title: "Nova-Tech",
      initials: "NT",
      cover: "nova",
      image: "",
      role: { en: "Individual front-end project", fa: "پروژه‌ی فردی فرانت‌اند" },
      tag: { en: "Foundation", fa: "بنیادین" },
      text: {
        en: "A foundational front-end website built with HTML and CSS. The focus was semantic page structure, careful styling and visual consistency across sections.",
        fa: "یک وب‌سایت فرانت‌اند بنیادین که با HTML و CSS ساخته شد. تمرکز اصلی بر ساختار معنایی صفحه، استایل‌دهی دقیق و یکنواختی بصری در بخش‌های مختلف بود.",
      },
      tech: ["HTML5", "CSS3"],
      githubUrl: "https://github.com/Spozhmay-Hashimi/Nova-Tech",
      liveUrl: "",
    },
    {
      title: "White Tulips — Flower Shop",
      initials: "WT",
      cover: "tulips",
      image: "",
      role: { en: "Front-end website development", fa: "توسعه‌ی وب‌سایت فرانت‌اند" },
      tag: { en: "Live demo", fa: "نمونه‌ی آنلاین" },
      text: {
        en: "An elegant flower-shop website inspired by white tulips, designed around refined visual presentation. Built with Bootstrap 5 with RTL support and a responsive page layout.",
        fa: "وب‌سایت فروش گل با ظاهری ظریف، الهام‌گرفته از لاله‌های سفید و طراحی‌شده حول ارائه‌ی بصریِ چشمنواز. ساخته‌شده با Bootstrap 5، پشتیبانی راست‌به‌چپ و چیدمان واکنش‌گرا.",
      },
      tech: ["HTML5", "CSS3", "Bootstrap 5", "RTL"],
      githubUrl: "https://github.com/Spozhmay-Hashimi/Flowers",
      liveUrl: "https://spozhmay-hashimi.github.io/Flowers/",
    },
    {
      title: "Asteria",
      initials: "AS",
      cover: "asteria",
      image: "",
      role: {
        en: "Team project — responsible for the Missions page",
        fa: "پروژه‌ی تیمی — مسئول صفحه‌ی Missions",
      },
      tag: { en: "Collaboration", fa: "همکاری تیمی" },
      text: {
        en: "A collaborative, responsive website developed with HTML, CSS and Bootstrap, organised into Home, Explore, Missions and Discover sections. My contribution was the Missions page.",
        fa: "وب‌سایت واکنش‌گرایی که به‌صورت تیمی با HTML، CSS و Bootstrap توسعه یافت و بخش‌های Home، Explore، Missions و Discover را دارد. سهم من صفحه‌ی Missions بود.",
      },
      tech: ["HTML5", "CSS3", "Bootstrap 5"],
      githubUrl: "",
      liveUrl: "https://spozhmay-hashimi.github.io/Asteria/",
    },
    {
      title: {
        en: "Mercedes-Inspired Automotive Website",
        fa: "وب‌سایت خودرویی با الهام از مرسدس",
      },
      initials: "MB",
      cover: "auto",
      image: "",
      role: { en: "Team Leader", fa: "رهبر تیم" },
      tag: { en: "Independent student project", fa: "پروژه‌ی دانشجویی مستقل" },
      text: {
        en: "A collaborative automotive-themed website in a sophisticated black and deep-red direction, with pages covering Mercedes vehicles, electric technology, AMG, Maybach and the brand story. As team leader I coordinated collaboration, page organisation and a consistent visual implementation. This is an independent educational project inspired by automotive design — not employed by, sponsored by, or affiliated with Mercedes-Benz.",
        fa: "وب‌سایت تیمی با مضمون خودرو و جهت‌گیری بصری سیاه و قرمز تیره، شامل صفحه‌هایی درباره‌ی خودروهای مرسدس، فناوری برقی، AMG، مایباخ و داستان برند. به‌عنوان رهبر تیم، هماهنگی، سازمان‌دهی صفحه‌ها و یکدستی اجرای بصری را مدیریت کردم. این یک پروژه‌ی آموزشی مستقل با الهام از طراحی خودرو است و هیچ وابستگی، حمایت یا پیوندی با Mercedes-Benz ندارد.",
      },
      tech: ["HTML5", "CSS3", "Bootstrap 5", "Team leadership"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: { en: "Café Website — About Us Page", fa: "وب‌سایت کافه — صفحه‌ی درباره ما" },
      initials: "CA",
      cover: "cafe",
      image: "",
      role: {
        en: "Team project — responsible for the About Us page",
        fa: "پروژه‌ی تیمی — مسئول صفحه‌ی About Us",
      },
      tag: { en: "Second place", fa: "مرتبه‌ی دوم" },
      text: {
        en: "A collaborative café website in which I developed the About Us page. The work focused on teamwork, owning one page inside a shared design, and contributing to a consistent look across the site.",
        fa: "وب‌سایت کافه که به‌صورت تیمی ساخته شد و صفحه‌ی «درباره ما» را من توسعه دادم. کار بر همکاری تیمی، مسئولیت یک صفحه در طراحی مشترک و یکنواختی ظاهر کل سایت متمرکز بود.",
      },
      tech: ["HTML5", "CSS3", "Bootstrap 5"],
      achievement: {
        en: "Our team achieved second place in the project competition.",
        fa: "تیم ما در مسابقه‌ی پروژه‌ها مرتبه‌ی دوم را کسب کرد.",
      },
      githubUrl: "",
      liveUrl: "",
    },
  ],

  /* --- Education ---------------------------------------------------------- */
  education: [
    {
      id: "netlinks",
      visibleWhen: "showNetlinksStatus",
      icon: "fa-solid fa-chalkboard-user",
      title: { en: "Netlinks", fa: "Netlinks (نت‌لینکس)" },
      status: { en: "Student", fa: "دانشجو" },
      text: {
        en: "Front-end web development studies — currently enrolled.",
        fa: "مطالعه‌ی توسعه‌ی وب فرانت‌اند — در حال تحصیل.",
      },
      items: [],
    },
    {
      id: "icdl",
      icon: "fa-solid fa-certificate",
      title: { en: "ICDL Training", fa: "دوره‌ی ICDL" },
      status: { en: "International Computer Driving Licence", fa: "گواهینامه‌ی بین‌المللی کار با رایانه" },
      text: {
        en: "Training covering the core desktop applications used in everyday work.",
        fa: "آموزشی که کاربردهای اصلی نرم‌افزارهای روزمره‌ی رایانه‌ای را پوشش می‌دهد.",
      },
      items: [
        { en: "Microsoft Word", fa: "Microsoft Word" },
        { en: "Microsoft Excel", fa: "Microsoft Excel" },
        { en: "Microsoft PowerPoint", fa: "Microsoft PowerPoint" },
        { en: "Microsoft Access", fa: "Microsoft Access" },
        { en: "Windows", fa: "Windows" },
      ],
    },
    {
      id: "achievement",
      visibleWhen: "showAcademicAchievement",
      icon: "fa-solid fa-trophy",
      title: { en: "Academic Achievement", fa: "دستاورد تحصیلی" },
      status: { en: "First rank", fa: "مرتبه‌ی اول" },
      text: {
        en: "First rank with a result of 98.61%.",
        fa: "کسب مرتبه‌ی اول با نمره‌ی ۹۸٫۶۱٪.",
      },
      items: [],
    },
  ],

  /* --- Contact channels --------------------------------------------------- */
  contactMethods: [
    {
      key: "email",
      icon: "fa-solid fa-envelope",
      label: { en: "Email", fa: "ایمیل" },
      valueDisplay: "spozhmayhashimi@gmail.com",
      hrefFrom: "email",
      external: false,
    },
    {
      key: "whatsapp",
      icon: "fa-brands fa-whatsapp",
      label: { en: "WhatsApp", fa: "واتساپ" },
      valueDisplay: "+93 77 55 611 27",
      hrefFrom: "whatsappUrl",
      external: true,
    },
    {
      key: "linkedin",
      icon: "fa-brands fa-linkedin-in",
      label: { en: "LinkedIn", fa: "لینکدین" },
      valueDisplay: "spozhmay-hashimi",
      hrefFrom: "linkedInUrl",
      external: true,
    },
    {
      key: "github",
      icon: "fa-brands fa-github",
      label: { en: "GitHub", fa: "GitHub" },
      valueDisplay: "Spozhmay-Hashimi",
      hrefFrom: "githubUrl",
      external: true,
    },
    {
      key: "cv",
      icon: "fa-solid fa-file-arrow-down",
      label: { en: "Curriculum Vitae", fa: "رزومه (CV)" },
      valueDisplay: { en: "Download CV (PDF)", fa: "دانلود رزومه (PDF)" },
      hrefFrom: "cvUrl",
      external: true,
    },
  ],
};

/* ==========================================================================
   2. UI STRINGS  (interface labels, headings, accessibility text)
   ========================================================================== */
const ui = {
  en: {
    docTitle: "Spozhmay Hashimi — Aspiring Front-End Web Developer",
    docDescription:
      "Portfolio of Spozhmay Hashimi, an aspiring front-end web developer building responsive, user-focused websites with HTML5, CSS3, Bootstrap 5 and JavaScript.",

    "a11y.skip": "Skip to main content",
    "a11y.menu": "Toggle navigation",
    "a11y.themeLight": "Switch to light theme",
    "a11y.themeDark": "Switch to dark theme",
    "a11y.top": "Back to top",
    "a11y.languageGroup": "Choose language",
    "a11y.nav": "Primary",
    "a11y.sectionNav": "Section navigation",
    "a11y.socialLinks": "Social profile links",
    "a11y.projectLinks": "Project links",
    "a11y.tech": "Technologies used",
    "a11y.contactLinks": "Contact options",

    "nav.contactCta": "Contact Me",

    "hero.eyebrow": "Portfolio · Front-End Development",
    "hero.title": "Aspiring Front-End Web Developer",
    "hero.explore": "Explore My Projects",
    "hero.contact": "Contact Me",
    "hero.brandCaption": "SH — personal brand mark",

    "about.eyebrow": "About",
    "about.heading": "About Me",
    "about.lead": "A short, honest picture of how I work and what I am building towards.",

    "skills.eyebrow": "Skills",
    "skills.heading": "Tools & Technologies",
    "skills.lead":
      "Levels describe where I am today: comfortable with the fundamentals, actively growing with JavaScript and design tooling.",

    "projects.eyebrow": "Work",
    "projects.heading": "Featured Projects",
    "projects.lead":
      "Student and collaborative projects. Every link shown is a real, working URL — buttons appear only when a repository or live site exists.",
    "projects.note":
      "Project thumbnails are designed placeholders and can be replaced with real screenshots.",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",
    "projects.noLink": "Repository and demo not published yet",

    "education.eyebrow": "Learning",
    "education.heading": "Education & Development",
    "education.lead": "Current studies and training, kept editable so new entries can be added at any time.",

    "contact.eyebrow": "Contact",
    "contact.heading": "Get in Touch",
    "contact.lead": "The fastest ways to reach me are email and WhatsApp. Choose a channel below.",
    "contact.formTitle": "Send a message by email",
    "contact.formHelp":
      "This form has no backend. After you fill it in, your email app opens with the message ready to send.",
    "contact.name": "Your name",
    "contact.namePh": "Full name",
    "contact.nameError": "Please enter your name.",
    "contact.email": "Your email",
    "contact.emailPh": "you@example.com",
    "contact.emailError": "Please enter a valid email address.",
    "contact.message": "Message",
    "contact.messagePh": "How can I help?",
    "contact.messageError": "Please write a short message.",
    "contact.openMail": "Open in Email App",
    "contact.mailReady": "Your email app should now be open with the message prepared.",
    "contact.needsAttention": "Please complete the highlighted fields.",

    "footer.rights": "Spozhmay Hashimi. All rights reserved.",
  },

  fa: {
    docTitle: "اسپژمای هاشمی — توسعه‌دهنده فرانت‌اند در مسیر رشد",
    docDescription:
      "نمونه‌کار اسپژمای هاشمی، توسعه‌دهنده‌ی فرانت‌اند در مسیر رشد، با ساخت وب‌سایت‌های واکنش‌گرا و کاربرمحور با HTML5، CSS3، Bootstrap 5 و JavaScript.",

    "a11y.skip": "پرش به محتوای اصلی",
    "a11y.menu": "باز و بسته کردن منو",
    "a11y.themeLight": "رفتن به تم روشن",
    "a11y.themeDark": "رفتن به تم تیره",
    "a11y.top": "بازگشت به بالا",
    "a11y.languageGroup": "انتخاب زبان",
    "a11y.nav": "ناوبری اصلی",
    "a11y.sectionNav": "پیمایش بخش‌ها",
    "a11y.socialLinks": "پیوندهای شبکه‌های اجتماعی",
    "a11y.projectLinks": "پیوندهای پروژه",
    "a11y.tech": "فناوری‌های استفاده‌شده",
    "a11y.contactLinks": "راه‌های ارتباطی",

    "nav.contactCta": "تماس با من",

    "hero.eyebrow": "نمونه‌کار · توسعه‌ی فرانت‌اند",
    "hero.title": "توسعه‌دهنده فرانت‌اند در مسیر رشد",
    "hero.explore": "مشاهده‌ی پروژه‌ها",
    "hero.contact": "تماس با من",
    "hero.brandCaption": "SH — نشانِ برند شخصی",

    "about.eyebrow": "درباره",
    "about.heading": "درباره‌ی من",
    "about.lead": "تصویری کوتاه و صادقانه از نحوه‌ی کار من و مسیری که به سوی آن پیش می‌روم.",

    "skills.eyebrow": "مهارت‌ها",
    "skills.heading": "ابزارها و فناوری‌ها",
    "skills.lead":
      "سطح‌ها وضعیت امروز من را نشان می‌دهند: به مبانی مسلطم و در JavaScript و ابزارهای طراحی در حال رشد هستم.",

    "projects.eyebrow": "کارها",
    "projects.heading": "پروژه‌های منتخب",
    "projects.lead":
      "پروژه‌های دانشجویی و تیمی. هر پیوند نمایش‌داده‌شده یک نشانی واقعی و فعال است؛ دکمه‌ها تنها وقتی ظاهر می‌شوند که مخزن یا نسخه‌ی آنلاین وجود داشته باشد.",
    "projects.note": "تصویر بند‌انگشتیِ پروژه‌ها جای‌گزینه‌های طراحی‌شده است و بعداً می‌تواند با اسکرین‌شات واقعی جایگزین شود.",
    "projects.github": "GitHub",
    "projects.demo": "نمونه‌ی آنلاین",
    "projects.noLink": "مخزن و نسخه‌ی آنلاین هنوز منتشر نشده‌اند",

    "education.eyebrow": "یادگیری",
    "education.heading": "تحصیل و توسعه‌ی حرفه‌ای",
    "education.lead": "تحصیل و آموزش‌های فعلی، به‌شکلی قابل ویرایش تا ورودی‌های تازه را بشود افزود.",

    "contact.eyebrow": "تماس",
    "contact.heading": "ارتباط با من",
    "contact.lead": "سریع‌ترین راه‌های ارتباط با من ایمیل و واتساپ هستند. از راه‌های زیر انتخاب کنید.",
    "contact.formTitle": "ارسال پیام از طریق ایمیل",
    "contact.formHelp":
      "این فرم بک‌اند ندارد. پس از تکمیل، اپلیکیشن ایمیل شما با پیام آماده باز می‌شود.",
    "contact.name": "نام شما",
    "contact.namePh": "نام کامل",
    "contact.nameError": "لطفاً نام خود را وارد کنید.",
    "contact.email": "ایمیل شما",
    "contact.emailPh": "you@example.com",
    "contact.emailError": "لطفاً یک نشانی ایمیل معتبر وارد کنید.",
    "contact.message": "پیام",
    "contact.messagePh": "چطور می‌توانم کمک کنم؟",
    "contact.messageError": "لطفاً پیام کوتاهی بنویسید.",
    "contact.openMail": "باز کردن در اپ ایمیل",
    "contact.mailReady": "اکنون باید اپ ایمیل شما با پیام آماده باز شده باشد.",
    "contact.needsAttention": "لطفاً فیلدهای مشخص‌شده را کامل کنید.",

    "footer.rights": "اسپژمای هاشمی. تمامی حقوق محفوظ است.",
  },
};

/* ==========================================================================
   3. WIRING
   ========================================================================== */
const STORAGE = { theme: "sp.theme", lang: "sp.lang" };
const BOOTSTRAP = {
  ltr: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  rtl: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css",
};

let currentLang = "en";

/* ---------- Small helpers ------------------------------------------------- */
const t = (key) => (ui[currentLang] && ui[currentLang][key]) || ui.en[key] || key;
const bi = (value) => (value && typeof value === "object" ? value[currentLang] || value.en : value);
const has = (url) => typeof url === "string" && url.trim() !== "";
/* Bilingual fields may be objects; treat "no text in either language" as empty. */
const hasText = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim() !== "";
  return Boolean(value.en || value.fa);
};
const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function icon(classes, hidden = true) {
  const i = el("i", classes);
  if (hidden) i.setAttribute("aria-hidden", "true");
  return i;
}

function linkList(container, nodes) {
  container.textContent = "";
  nodes.forEach((n) => container.appendChild(n));
}

/** A link that is only created when the URL is real. */
function socialLink(url, iconClasses, labelText, extraClass) {
  if (!has(url)) return null;
  const a = el("a", `social-link ${extraClass || ""}`.trim());
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", labelText);
  a.appendChild(icon(iconClasses));
  return a;
}

function mailtoLink(address, iconClasses) {
  if (!has(address)) return null;
  const a = el("a", "social-link");
  a.href = `mailto:${address}`;
  a.setAttribute("aria-label", address);
  a.appendChild(icon(iconClasses || "fa-solid fa-envelope"));
  return a;
}

function externalAnchor(url, label, iconClasses, buttonClass) {
  const a = el("a", buttonClass);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.appendChild(icon(iconClasses));
  a.appendChild(el("span", null, label));
  a.setAttribute("aria-label", label);
  return a;
}

/* ---------- Theme --------------------------------------------------------- */
function savedTheme() {
  try {
    const v = localStorage.getItem(STORAGE.theme);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme, persist) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    const next = theme === "dark" ? t("a11y.themeLight") : t("a11y.themeDark");
    btn.setAttribute("aria-label", next);
    btn.title = next;
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#17131E" : "#392548");
  if (persist) {
    try {
      localStorage.setItem(STORAGE.theme, theme);
    } catch {
      /* storage blocked (private mode) — the theme still applies for this visit */
    }
  }
}

function toggleTheme() {
  const next =
    document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  applyTheme(next, true);
}

/* Follow OS changes only while the visitor has no explicit saved choice. */
function watchSystemTheme() {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = (e) => {
    if (savedTheme() === null) applyTheme(e.matches ? "dark" : "light", false);
  };
  if (typeof mq.addEventListener === "function") mq.addEventListener("change", handler);
  else if (typeof mq.addListener === "function") mq.addListener(handler);
}

/* ---------- Language ------------------------------------------------------ */
function savedLang() {
  try {
    const v = localStorage.getItem(STORAGE.lang);
    return v === "fa" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

/** Applied as early as possible (document is only <head> at that point). */
function applyLanguageAttributes(lang) {
  currentLang = lang;
  const root = document.documentElement;
  root.setAttribute("lang", lang);
  root.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");

  const bs = document.getElementById("bootstrapCss");
  if (bs) bs.href = lang === "fa" ? BOOTSTRAP.rtl : BOOTSTRAP.ltr;

  document.title = t("docTitle");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("docDescription"));
  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute("content", t("docTitle"));
  const ogd = document.querySelector('meta[property="og:description"]');
  if (ogd) ogd.setAttribute("content", t("docDescription"));
  const ocl = document.querySelector('meta[property="og:locale"]');
  if (ocl) ocl.setAttribute("content", lang === "fa" ? "fa_IR" : "en_US");
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE.lang, lang);
  } catch {
    /* preference kept for this session only */
  }
}

function setLanguage(lang) {
  applyLanguageAttributes(lang);
  saveLang(lang);
  renderAll();
}

/* ---------- Static text slots in the HTML -------------------------------- */
/* Keys that live in portfolioData rather than `ui` still use data-i18n. */
const contentKeys = {
  "hero.intro": () => bi(portfolioData.hero.intro),
};

function translateStaticRoot() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = contentKeys[key] ? contentKeys[key]() : t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = t(node.dataset.i18nAria);
    node.setAttribute("aria-label", value);
    if (node.id !== "themeToggle") node.title = value;
  });

  // The hero name and brand text are proper nouns: always Latin, always LTR.
  const heroName = document.getElementById("heroHeading");
  if (heroName) {
    heroName.textContent = portfolioData.name;
    heroName.setAttribute("lang", "en");
    heroName.dir = "ltr";
  }
  const brand = document.querySelector(".navbar-brand");
  if (brand) brand.setAttribute("aria-label", `${portfolioData.name} — ${t("a11y.nav")}`);
  const lg = document.querySelector(".lang-switch");
  if (lg) lg.setAttribute("aria-label", t("a11y.languageGroup"));
  const cl = document.getElementById("contactList");
  if (cl) cl.setAttribute("aria-label", t("a11y.contactLinks"));
}

/* ---------- Renderers ----------------------------------------------------- */
function renderNav() {
  const list = document.getElementById("navLinks");
  if (!list) return;
  list.setAttribute("aria-label", t("a11y.sectionNav"));
  linkList(
    list,
    portfolioData.sections.map((s) => {
      const li = el("li", "nav-item");
      const a = el("a", "nav-link", bi(s.label));
      a.href = `#${s.id}`;
      a.dataset.spy = s.id;
      li.appendChild(a);
      return li;
    })
  );
}

function renderHero() {
  const badges = document.getElementById("heroBadges");
  if (badges) {
    const items = [];
    if (portfolioData.showNetlinksStatus) {
      const li = el("li", "hero-badge hero-badge--accent");
      li.appendChild(icon("fa-solid fa-graduation-cap"));
      li.appendChild(el("span", null, bi(portfolioData.hero.netlinksBadge)));
      items.push(li);
    }
    if (portfolioData.showOpenToWorkBadge) {
      const li = el("li", "hero-badge");
      li.appendChild(icon("fa-solid fa-briefcase"));
      li.appendChild(el("span", null, bi(portfolioData.hero.openToWorkBadge)));
      items.push(li);
    }
    linkList(badges, items);
  }

  const social = document.getElementById("heroSocial");
  if (social) {
    linkList(
      social,
      [
        socialLink(portfolioData.githubUrl, "fa-brands fa-github", "GitHub"),
        socialLink(
          portfolioData.linkedInUrl,
          "fa-brands fa-linkedin-in",
          currentLang === "fa" ? "لینکدین" : "LinkedIn"
        ),
      ].filter(Boolean)
    );
  }
}

function renderAbout() {
  const facts = document.getElementById("aboutFacts");
  if (facts) {
    linkList(
      facts,
      portfolioData.about.facts.map((f) => {
        const li = el("li");
        li.appendChild(icon(f.icon));
        li.appendChild(el("span", null, bi(f.label)));
        return li;
      })
    );
  }

  const paras = document.getElementById("aboutParagraphs");
  if (paras) {
    linkList(
      paras,
      portfolioData.about.paragraphs.map((p) => el("p", null, bi(p)))
    );
  }

  const grid = document.getElementById("aboutHighlights");
  if (grid) {
    linkList(
      grid,
      portfolioData.about.highlights.map((h) => {
        const col = el("div", "col-sm-6 col-lg-4");
        const card = el("div", "highlight-card reveal");
        const ic = icon(h.icon);
        ic.classList.add("highlight-icon");
        card.appendChild(ic);
        card.appendChild(el("h3", null, bi(h.title)));
        card.appendChild(el("p", null, bi(h.text)));
        col.appendChild(card);
        return col;
      })
    );
  }
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  linkList(
    grid,
    portfolioData.skills.map((s) => {
      const col = el("div", "col-sm-6 col-md-4 col-xl-3");
      const card = el("div", "skill-card reveal");
      const head = el("div", "skill-head");
      const ic = icon(s.icon);
      ic.classList.add("skill-icon");
      head.appendChild(ic);
      const textBox = el("div");
      textBox.appendChild(el("h3", "skill-name", s.name));
      textBox.appendChild(el("p", "skill-level", bi(s.level)));
      head.appendChild(textBox);
      card.appendChild(head);
      card.appendChild(el("p", "skill-desc", bi(s.text)));
      col.appendChild(card);
      return col;
    })
  );
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  linkList(
    grid,
    portfolioData.projects.map((p) => {
      const col = el("div", "col-md-6 col-xl-4");
      const card = el("article", "project-card reveal");
      card.setAttribute("aria-labelledby", `project-${p.cover}-title`);

      /* Cover: real image when supplied, otherwise CSS-generated artwork. */
      const cover = el("div", `project-cover project-cover--${p.cover}`);
      if (has(p.image)) {
        const img = el("img");
        img.src = p.image;
        img.alt = `${bi(p.title)} — ${t("projects.eyebrow")}`;
        img.loading = "lazy";
        cover.appendChild(img);
      } else {
        cover.appendChild(el("span", "project-cover-initials", p.initials));
      }
      if (hasText(p.tag)) cover.appendChild(el("span", "project-cover-tag", bi(p.tag)));
      card.appendChild(cover);

      const body = el("div", "project-body");
      const title = el("h3", "project-title", bi(p.title));
      title.id = `project-${p.cover}-title`;
      body.appendChild(title);

      body.appendChild(el("span", "project-role", bi(p.role)));
      body.appendChild(el("p", "project-desc", bi(p.text)));

      if (hasText(p.achievement)) {
        const ach = el("p", "project-achievement");
        const ic = icon("fa-solid fa-medal");
        ach.appendChild(ic);
        ach.appendChild(el("span", null, bi(p.achievement)));
        body.appendChild(ach);
      }

      if (Array.isArray(p.tech) && p.tech.length) {
        const ul = el("ul", "project-tech");
        ul.setAttribute("aria-label", t("a11y.tech"));
        p.tech.forEach((tech) => ul.appendChild(el("li", null, tech)));
        body.appendChild(ul);
      }

      /* Buttons only for URLs that actually exist. */
      const actions = el("div", "project-actions");
      actions.setAttribute("aria-label", t("a11y.projectLinks"));
      let anyLink = false;
      if (has(p.githubUrl)) {
        actions.appendChild(
          externalAnchor(p.githubUrl, t("projects.github"), "fa-brands fa-github", "btn-ghost")
        );
        anyLink = true;
      }
      if (has(p.liveUrl)) {
        actions.appendChild(
          externalAnchor(p.liveUrl, t("projects.demo"), "fa-solid fa-arrow-up-right-from-square", "btn-ghost")
        );
        anyLink = true;
      }
      if (anyLink) {
        body.appendChild(actions);
      } else {
        const note = el("p", "project-achievement");
        note.appendChild(icon("fa-solid fa-circle-info"));
        note.appendChild(el("span", null, t("projects.noLink")));
        body.appendChild(note);
      }

      card.appendChild(body);
      col.appendChild(card);
      return col;
    })
  );
}

function renderEducation() {
  const grid = document.getElementById("educationGrid");
  if (!grid) return;

  const entries = portfolioData.education.filter((e) =>
    e.visibleWhen ? Boolean(portfolioData[e.visibleWhen]) : true
  );

  linkList(
    grid,
    entries.map((e) => {
      const col = el("div", entries.length === 1 ? "col-12" : "col-md-6 col-lg-4");
      const card = el("div", "edu-card reveal");
      const head = el("div", "edu-head");
      const ic = icon(e.icon);
      ic.classList.add("edu-icon");
      head.appendChild(ic);
      const box = el("div");
      box.appendChild(el("h3", "edu-title", bi(e.title)));
      box.appendChild(el("p", "edu-status", bi(e.status)));
      head.appendChild(box);
      card.appendChild(head);
      card.appendChild(el("p", "edu-text", bi(e.text)));

      if (Array.isArray(e.items) && e.items.length) {
        const ul = el("ul", "edu-list");
        e.items.forEach((item) => ul.appendChild(el("li", null, bi(item))));
        card.appendChild(ul);
      }
      col.appendChild(card);
      return col;
    })
  );
}

function contactHref(method) {
  const url = portfolioData[method.hrefFrom];
  if (!has(url)) return "";
  if (method.key === "email") return `mailto:${url}`;
  return url;
}

function renderContact() {
  const list = document.getElementById("contactList");
  if (list) {
    linkList(
      list,
      portfolioData.contactMethods
        .filter((m) => has(contactHref(m)))
        .map((m) => {
          const li = el("li", "contact-item");
          const ic = icon(m.icon);
          ic.classList.add("contact-icon");
          li.appendChild(ic);
          const box = el("div");
          box.appendChild(el("span", "contact-label", bi(m.label)));
          const a = el(
            "a",
            `contact-value${m.key === "whatsapp" || m.key === "cv" ? " ltr-isolate" : ""}`
          );
          a.href = contactHref(m);
          if (m.external) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          }
          a.textContent = bi(m.valueDisplay);
          box.appendChild(a);
          li.appendChild(box);
          return li;
        })
    );
  }

  const footer = document.getElementById("footerSocial");
  if (footer) {
    linkList(
      footer,
      [
        socialLink(portfolioData.githubUrl, "fa-brands fa-github", "GitHub"),
        socialLink(
          portfolioData.linkedInUrl,
          "fa-brands fa-linkedin-in",
          currentLang === "fa" ? "لینکدین" : "LinkedIn"
        ),
        socialLink(
          portfolioData.whatsappUrl,
          "fa-brands fa-whatsapp",
          currentLang === "fa" ? "واتساپ" : "WhatsApp"
        ),
        mailtoLink(portfolioData.email),
      ].filter(Boolean)
    );
  }
}

function renderAll() {
  translateStaticRoot();
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderContact();
  applyTheme(document.documentElement.getAttribute("data-bs-theme") || systemTheme(), false);
  updateLangButtons();
  observeReveals();
  bindScrollSpy();
}

function updateLangButtons() {
  const en = document.getElementById("langEn");
  const fa = document.getElementById("langFa");
  if (!en || !fa) return;
  const isEn = currentLang === "en";
  en.classList.toggle("is-active", isEn);
  en.setAttribute("aria-pressed", String(isEn));
  fa.classList.toggle("is-active", !isEn);
  fa.setAttribute("aria-pressed", String(!isEn));
}

/* ---------- Reveal on scroll ---------------------------------------------- */
let revealObserver = null;
let revealPending = [];
let revealScheduled = false;

/* A fast scroll or an in-page jump can skip over elements entirely, so the
   observer alone would leave them at opacity 0. This sweep catches them. */
function sweepReveals() {
  if (!revealPending.length) return;
  const limit = window.innerHeight;
  revealPending = revealPending.filter((node) => {
    if (node.getBoundingClientRect().top > limit) return true;
    node.classList.add("is-revealed");
    if (revealObserver) revealObserver.unobserve(node);
    return false;
  });
}

function observeReveals() {
  const nodes = [...document.querySelectorAll(".reveal")].filter(
    (n) => !n.classList.contains("is-revealed")
  );
  revealPending = nodes;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-revealed"));
    revealPending = [];
    document.documentElement.classList.add("reveal-ready");
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          entry.target.style.setProperty("--reveal-delay", `${Math.min(index * 60, 240)}ms`);
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
  }
  document.documentElement.classList.add("reveal-ready");
  nodes.forEach((n) => revealObserver.observe(n));
}

/* ---------- Scroll spy + header state + back-to-top ------------------------ */
let spyObserver = null;

function bindScrollSpy() {
  if (!("IntersectionObserver" in window)) return;
  if (!document.querySelector("#navLinks .nav-link[data-spy]")) return;

  if (spyObserver) {
    // Navigation links were re-rendered by a language switch; markers reset.
    document.querySelectorAll("#navLinks .nav-link").forEach((l) => l.classList.remove("is-active"));
    return;
  }

  spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        /* Query fresh: nav links are replaced whenever the language changes. */
        document.querySelectorAll("#navLinks .nav-link[data-spy]").forEach((link) => {
          link.classList.toggle("is-active", link.dataset.spy === entry.target.id);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  portfolioData.sections.forEach((s) => {
    const target = document.getElementById(s.id);
    if (target) spyObserver.observe(target);
  });
}

function onScroll() {
  const header = document.getElementById("siteHeader");
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);

  const top = document.getElementById("backToTop");
  if (top) {
    const show = window.scrollY > 600;
    top.classList.toggle("is-visible", show);
    top.setAttribute("aria-hidden", String(!show));
    top.tabIndex = show ? 0 : -1;
  }

  if (!revealScheduled) {
    revealScheduled = true;
    requestAnimationFrame(() => {
      revealScheduled = false;
      sweepReveals();
    });
  }
}

/* ---------- Contact form (composes a mailto:, no backend) ------------------ */
function composeMailto({ name, email, message }) {
  const subject = `Portfolio enquiry from ${name}`;
  const body = [message, "", `— ${name} (${email})`].join("\n");
  return `mailto:${portfolioData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");
  const fields = [
    { node: form.querySelector("#cfName"), test: (v) => v.trim().length >= 2, key: "contact.nameError" },
    {
      node: form.querySelector("#cfEmail"),
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
      key: "contact.emailError",
    },
    { node: form.querySelector("#cfMessage"), test: (v) => v.trim().length >= 5, key: "contact.messageError" },
  ];

  const validateField = (f) => {
    const ok = f.test(f.node.value);
    f.node.classList.toggle("is-invalid", !ok);
    if (!ok) f.node.nextElementSibling.textContent = t(f.key);
    return ok;
  };

  fields.forEach((f) => {
    f.node.addEventListener("blur", () => validateField(f));
    f.node.addEventListener("input", () => {
      if (f.node.classList.contains("is-invalid")) validateField(f);
      if (status) status.textContent = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) {
      if (status) {
        status.textContent = t("contact.needsAttention");
        status.classList.add("is-error");
      }
      const firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    window.location.href = composeMailto({
      name: form.querySelector("#cfName").value.trim(),
      email: form.querySelector("#cfEmail").value.trim(),
      message: form.querySelector("#cfMessage").value.trim(),
    });

    if (status) {
      status.classList.remove("is-error");
      status.textContent = t("contact.mailReady");
    }
  });
}

/* ---------- Bindings that need the parsed DOM ------------------------------ */
function initInteractions() {
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("langEn").addEventListener("click", () => setLanguage("en"));
  document.getElementById("langFa").addEventListener("click", () => setLanguage("fa"));

  const menu = document.getElementById("primaryMenu");
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || !menu || !menu.contains(anchor)) return;
    const collapse = window.bootstrap && bootstrap.Collapse.getInstance(menu);
    if (collapse && menu.classList.contains("show")) collapse.hide();
  });

  const top = document.getElementById("backToTop");
  top.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    const skip = document.querySelector(".skip-link");
    if (skip) skip.focus({ preventScroll: true });
  });

  document.getElementById("copyrightYear").textContent = String(new Date().getFullYear());

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  initContactForm();
  watchSystemTheme();
}

/* ---------- Boot ------------------------------------------------------------ */
/* Runs while the document is still in <head>: sets lang/dir/theme before paint. */
applyLanguageAttributes(savedLang() || "en");
applyTheme(savedTheme() || systemTheme(), false);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

function boot() {
  const root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js-enabled");
  renderAll();
  initInteractions();
}
