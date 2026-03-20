(function () {
  const supportedLanguages = [
    { code: "en", label: "English" },
    { code: "zh", label: "简体中文" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "ja", label: "日本語" },
    { code: "ar", label: "العربية" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "hi", label: "हिन्दी" }
  ];

  const languageSet = new Set(supportedLanguages.map((item) => item.code));

  function normalizeLang(lang) {
    const value = String(lang || "zh").toLowerCase();
    if (value.startsWith("zh")) return "zh";
    if (value.startsWith("pt")) return "pt";
    return value.split("-")[0];
  }

  function detectLanguage() {
    const saved = localStorage.getItem("preferred-language");
    if (saved && languageSet.has(saved)) return saved;

    const browserLocales = navigator.languages || [navigator.language || "en"];
    for (const locale of browserLocales) {
      const code = normalizeLang(locale);
      if (languageSet.has(code)) return code;
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (timezone.includes("Tokyo")) return "ja";
    if (timezone.includes("Shanghai") || timezone.includes("Hong_Kong") || timezone.includes("Taipei")) return "zh";
    if (timezone.includes("Paris")) return "fr";
    if (timezone.includes("Berlin")) return "de";
    if (timezone.includes("Madrid") || timezone.includes("Mexico") || timezone.includes("Buenos_Aires")) return "es";
    if (timezone.includes("Sao_Paulo")) return "pt";
    if (timezone.includes("Moscow")) return "ru";
    if (timezone.includes("Dubai") || timezone.includes("Riyadh")) return "ar";
    if (timezone.includes("Kolkata")) return "hi";
    return "en";
  }

  function isCrawler() {
    const ua = (navigator.userAgent || "").toLowerCase();
    return [
      "googlebot",
      "bingbot",
      "bingpreview",
      "baiduspider",
      "yandexbot",
      "duckduckbot",
      "slurp",
      "applebot",
      "facebookexternalhit",
      "twitterbot",
      "linkedinbot"
    ].some((token) => ua.includes(token));
  }

  function currentPageLanguage() {
    const fromPath = location.pathname.split("/").filter(Boolean)[0];
    if (fromPath && languageSet.has(normalizeLang(fromPath))) {
      return normalizeLang(fromPath);
    }
    return normalizeLang(document.documentElement.lang || "zh");
  }

  function localizedNavLabels(lang) {
    const labels = {
      zh: { home: "首页", calculators: "全部计算器", blog: "博客指南", faq: "常见问题", health: "健康计算器", sleep: "睡眠工具", nutrition: "营养工具", fitness: "健身工具", habits: "习惯工具", language: "语言" },
      en: { home: "Home", calculators: "All calculators", blog: "Blog", faq: "FAQ", health: "Health Calculators", sleep: "Sleep Tools", nutrition: "Nutrition Tools", fitness: "Fitness Tools", habits: "Habit Tools", language: "Language" },
      es: { home: "Inicio", calculators: "Todas las calculadoras", blog: "Guías", faq: "FAQ", health: "Calculadoras de salud", sleep: "Herramientas de sueño", nutrition: "Herramientas de nutrición", fitness: "Herramientas fitness", habits: "Herramientas de hábitos", language: "Idioma" },
      fr: { home: "Accueil", calculators: "Toutes les calculatrices", blog: "Guides", faq: "FAQ", health: "Calculatrices santé", sleep: "Outils sommeil", nutrition: "Outils nutrition", fitness: "Outils fitness", habits: "Outils habitudes", language: "Langue" },
      de: { home: "Start", calculators: "Alle Rechner", blog: "Ratgeber", faq: "FAQ", health: "Gesundheitsrechner", sleep: "Schlaf-Tools", nutrition: "Ernährungs-Tools", fitness: "Fitness-Tools", habits: "Gewohnheits-Tools", language: "Sprache" },
      pt: { home: "Início", calculators: "Todas as calculadoras", blog: "Guias", faq: "FAQ", health: "Calculadoras de saúde", sleep: "Ferramentas de sono", nutrition: "Ferramentas de nutrição", fitness: "Ferramentas fitness", habits: "Ferramentas de hábitos", language: "Idioma" },
      ru: { home: "Главная", calculators: "Все калькуляторы", blog: "Гайды", faq: "FAQ", health: "Калькуляторы здоровья", sleep: "Инструменты сна", nutrition: "Инструменты питания", fitness: "Инструменты фитнеса", habits: "Инструменты привычек", language: "Язык" },
      hi: { home: "मुखपृष्ठ", calculators: "सभी कैलकुलेटर", blog: "गाइड", faq: "FAQ", health: "हेल्थ कैलकुलेटर", sleep: "स्लीप टूल", nutrition: "न्यूट्रिशन टूल", fitness: "फिटनेस टूल", habits: "हैबिट टूल", language: "भाषा" },
      ja: { home: "ホーム", calculators: "すべての計算ツール", blog: "ガイド", faq: "よくある質問", health: "健康計算ツール", sleep: "睡眠ツール", nutrition: "栄養ツール", fitness: "運動ツール", habits: "習慣ツール", language: "言語" },
      ar: { home: "الرئيسية", calculators: "كل الأدوات", blog: "الدليل", faq: "الأسئلة الشائعة", health: "حاسبات الصحة", sleep: "أدوات النوم", nutrition: "أدوات التغذية", fitness: "أدوات اللياقة", habits: "أدوات العادات", language: "اللغة" }
    };
    return labels[lang] || labels.en;
  }

  function availableNavItems(lang) {
    const base = ["home", "calculators"];
    if (lang === "zh") {
      return [...base, "blog", "faq"];
    }
    return base;
  }

  function footerCopy(lang) {
    const copy = {
      zh: {
        intro: "把常见的健康计算器、睡眠工具、营养工具和健身工具整理在一起，帮助你更快找到需要的参考信息。站内内容仅用于日常了解和自我管理参考。",
        meta: ["仅供参考", "非医疗建议", "需要时请咨询医生"],
        noteTitle: "重要提醒",
        noteA: "这里提供的是估算、解释和生活方式建议，不提供诊断、治疗或紧急医疗决策支持。",
        noteB: "如果你有持续不适、慢性疾病、孕期问题或高风险健康疑问，请及时咨询专业医生。",
        friendTitle: "友情链接",
        infoTitle: "网站信息",
        about: "关于我们",
        terms: "使用条款",
        privacy: "隐私政策",
        disclaimer: "免责声明",
        contact: "联系我们",
        liability: "本网站不提供医疗服务，不承担医疗责任。"
      },
      ja: {
        intro: "健康計算、睡眠、栄養、運動のツールをまとめ、必要な情報をすばやく見つけやすくしています。",
        meta: ["参考情報", "医療助言ではありません", "必要に応じて医師へ相談"],
        noteTitle: "重要なお知らせ",
        noteA: "このサイトは推定値、解説、生活習慣の参考を提供します。診断や治療を行うものではありません。",
        noteB: "症状が続く場合や高リスクの心配がある場合は、医療専門家に相談してください。",
        friendTitle: "おすすめリンク",
        infoTitle: "サイト情報",
        about: "運営情報",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        disclaimer: "免責事項",
        contact: "お問い合わせ",
        liability: "本サイトは医療サービスを提供せず、医療上の責任を負いません。"
      },
      es: {
        intro: "Reunimos calculadoras de salud, sueño, nutrición y fitness para que encontrar información práctica sea más fácil.",
        meta: ["Solo referencia", "No es consejo médico", "Consulta a un profesional si es necesario"],
        noteTitle: "Aviso importante",
        noteA: "Este sitio ofrece estimaciones, explicaciones y orientación de estilo de vida. No ofrece diagnóstico ni tratamiento.",
        noteB: "Si tienes síntomas persistentes o preguntas de alto riesgo, consulta a un profesional sanitario.",
        friendTitle: "Enlaces recomendados",
        infoTitle: "Información del sitio",
        about: "Acerca de",
        terms: "Términos de uso",
        privacy: "Política de privacidad",
        disclaimer: "Aviso legal",
        contact: "Contacto",
        liability: "Este sitio no ofrece servicios médicos ni asume responsabilidad médica."
      },
      fr: {
        intro: "Nous regroupons des outils santé, sommeil, nutrition et fitness pour rendre l'information pratique plus facile à trouver.",
        meta: ["À titre informatif", "Pas un avis médical", "Consultez un professionnel si besoin"],
        noteTitle: "Note importante",
        noteA: "Ce site fournit des estimations, des explications et des conseils de mode de vie. Il ne fournit ni diagnostic ni traitement.",
        noteB: "En cas de symptômes persistants ou de questions à risque, consultez un professionnel de santé.",
        friendTitle: "Liens utiles",
        infoTitle: "Infos du site",
        about: "À propos",
        terms: "Conditions d'utilisation",
        privacy: "Politique de confidentialité",
        disclaimer: "Clause de non-responsabilité",
        contact: "Contact",
        liability: "Ce site ne fournit pas de services médicaux et n'assume aucune responsabilité médicale."
      },
      de: {
        intro: "Gesundheits-, Schlaf-, Ernährungs- und Fitness-Tools an einem Ort, damit praktische Informationen leichter zu finden sind.",
        meta: ["Nur zur Orientierung", "Keine medizinische Beratung", "Bei Bedarf Arzt aufsuchen"],
        noteTitle: "Wichtiger Hinweis",
        noteA: "Diese Website bietet Schätzungen, Erklärungen und Hinweise zum Lebensstil. Sie ersetzt keine Diagnose oder Behandlung.",
        noteB: "Bei anhaltenden Beschwerden oder Risikofragen wenden Sie sich an medizinisches Fachpersonal.",
        friendTitle: "Empfohlene Links",
        infoTitle: "Website-Infos",
        about: "Über uns",
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutz",
        disclaimer: "Haftungsausschluss",
        contact: "Kontakt",
        liability: "Diese Website bietet keine medizinischen Leistungen und übernimmt keine medizinische Haftung."
      },
      pt: {
        intro: "Ferramentas de saúde, sono, nutrição e fitness em um só lugar para facilitar o acesso a informações práticas.",
        meta: ["Apenas referência", "Não é orientação médica", "Consulte um profissional quando necessário"],
        noteTitle: "Aviso importante",
        noteA: "Este site fornece estimativas, explicações e orientação de estilo de vida. Não oferece diagnóstico nem tratamento.",
        noteB: "Se houver sintomas persistentes ou dúvidas de maior risco, procure um profissional de saúde.",
        friendTitle: "Links recomendados",
        infoTitle: "Informações do site",
        about: "Sobre",
        terms: "Termos de uso",
        privacy: "Política de privacidade",
        disclaimer: "Aviso legal",
        contact: "Contato",
        liability: "Este site não oferece serviços médicos nem assume responsabilidade médica."
      },
      ru: {
        intro: "Мы собрали инструменты по здоровью, сну, питанию и фитнесу в одном месте, чтобы полезная информация находилась быстрее.",
        meta: ["Только справочно", "Не медицинский совет", "При необходимости обратитесь к врачу"],
        noteTitle: "Важно",
        noteA: "Сайт предоставляет оценки, пояснения и советы по образу жизни. Он не заменяет диагностику и лечение.",
        noteB: "При стойких симптомах или вопросах повышенного риска обратитесь к медицинскому специалисту.",
        friendTitle: "Полезные ссылки",
        infoTitle: "Информация о сайте",
        about: "О сайте",
        terms: "Условия использования",
        privacy: "Политика конфиденциальности",
        disclaimer: "Отказ от ответственности",
        contact: "Контакты",
        liability: "Сайт не оказывает медицинских услуг и не несёт медицинской ответственности."
      },
      hi: {
        intro: "स्वास्थ्य, नींद, पोषण और फिटनेस टूल एक जगह, ताकि उपयोगी जानकारी जल्दी मिल सके।",
        meta: ["केवल संदर्भ के लिए", "यह चिकित्सकीय सलाह नहीं है", "ज़रूरत होने पर डॉक्टर से संपर्क करें"],
        noteTitle: "महत्वपूर्ण सूचना",
        noteA: "यह साइट अनुमान, व्याख्या और जीवनशैली संबंधी मार्गदर्शन देती है। यह निदान या उपचार नहीं देती।",
        noteB: "यदि लगातार लक्षण हों या उच्च जोखिम से जुड़े प्रश्न हों, तो चिकित्सकीय विशेषज्ञ से सलाह लें।",
        friendTitle: "सुझावित लिंक",
        infoTitle: "साइट जानकारी",
        about: "हमारे बारे में",
        terms: "उपयोग की शर्तें",
        privacy: "गोपनीयता नीति",
        disclaimer: "अस्वीकरण",
        contact: "संपर्क",
        liability: "यह साइट चिकित्सकीय सेवा प्रदान नहीं करती और चिकित्सकीय दायित्व नहीं लेती।"
      },
      ar: {
        intro: "جمعنا أدوات الصحة والنوم والتغذية واللياقة في مكان واحد لتسهيل الوصول إلى المعلومات العملية.",
        meta: ["للاسترشاد فقط", "ليست نصيحة طبية", "استشر الطبيب عند الحاجة"],
        noteTitle: "تنبيه مهم",
        noteA: "يقدم هذا الموقع تقديرات وشرحًا وإرشادات لنمط الحياة، ولا يقدم تشخيصًا أو علاجًا.",
        noteB: "إذا كانت لديك أعراض مستمرة أو أسئلة عالية الخطورة، فاستشر مختصًا طبيًا.",
        friendTitle: "روابط مفيدة",
        infoTitle: "معلومات الموقع",
        about: "من نحن",
        terms: "شروط الاستخدام",
        privacy: "سياسة الخصوصية",
        disclaimer: "إخلاء المسؤولية",
        contact: "اتصل بنا",
        liability: "هذا الموقع لا يقدم خدمات طبية ولا يتحمل مسؤولية طبية."
      },
      en: {
        intro: "Health calculators, sleep tools, nutrition tools, and fitness tools are organized in one place to make practical health information easier to find and use.",
        meta: ["For reference", "Not medical advice", "Consult a clinician when needed"],
        noteTitle: "Important Note",
        noteA: "This site provides estimates, explanations, and lifestyle guidance. It does not provide diagnosis, treatment, or emergency medical support.",
        noteB: "If you have ongoing symptoms, chronic conditions, pregnancy-related concerns, or high-risk questions, consult a qualified clinician.",
        friendTitle: "Friendly Links",
        infoTitle: "Site Info",
        about: "About",
        terms: "Terms",
        privacy: "Privacy",
        disclaimer: "Disclaimer",
        contact: "Contact",
        liability: "This website does not provide medical services or assume medical liability."
      }
    };
    return copy[lang] || copy.en;
  }

  function mealPlannerCopy(lang) {
    const copy = {
      zh: {
        eyebrow: "我想知道一天的饮食摄取该怎么分配",
        title: "按 TDEE 快速估算一天怎么吃更清晰",
        intro: "输入你的每日总消耗热量，得到一个更容易执行的六大类饮食分配参考。它更适合作为日常规划起点，而不是严格医疗处方。",
        tdeeTitle: "TDEE 是什么？",
        tdeeBody: "TDEE 指的是每日总消耗热量，也就是你一天里大致会消耗多少能量。它通常包含基础代谢、走路站立等日常活动，以及训练或运动带来的额外消耗。",
        label: "请输入你的 TDEE",
        placeholder: "例如 2100",
        button: "开始分配",
        detailPage: "打开完整饮食分配页",
        warning: "提醒：这个热量值偏低，建议优先确认是否适合你的当前状态；如有特殊情况，请咨询营养师或医生。",
        hint: "以下结果只作为一般饮食规划参考，可结合蛋白质、宏量营养和体重趋势一起看。",
        note: "说明：份数和克数都属于便于日常执行的粗略参考。不同年龄、孕期、训练量、慢性病和地区饮食习惯下，实际安排应适当调整。",
        categories: {
          grains: ["全谷杂粮", "优先粗粮、米面薯类搭配"],
          protein: ["豆鱼蛋肉", "蛋白质来源尽量分散"],
          vegetables: ["蔬菜", "深色蔬菜优先，尽量多样"],
          fruit: ["水果", "以完整水果为主"],
          dairy: ["乳制品", "可按奶、酸奶或替代品调整"],
          fats: ["油脂坚果", "控制总量，优先不饱和脂肪"]
        },
        servings: "建议份数",
        perDay: "份 / 天",
        grams: "大致克数",
        gramsPerDay: "约 g / 天",
        gramBasis: "按常见日常食用量粗略折算"
      },
      en: {
        eyebrow: "I want to know how to split a day's food intake",
        title: "Use TDEE to build a simpler daily eating split",
        intro: "Enter your total daily energy expenditure and get a practical six-group meal split reference. This is a planning starting point, not a medical prescription.",
        tdeeTitle: "What is TDEE?",
        tdeeBody: "TDEE means Total Daily Energy Expenditure. It is the rough amount of energy you burn in a full day, including basic body needs, daily movement, and any exercise or training.",
        label: "Enter your TDEE",
        placeholder: "For example 2100",
        button: "Build plan",
        detailPage: "Open full meal planner page",
        warning: "Note: this calorie level is quite low. Make sure it fits your situation before using it as a target, and seek professional advice if needed.",
        hint: "Use this as a practical food-group reference and compare it with protein, macro, and body-weight trends.",
        note: "Note: both servings and gram estimates are broad daily planning guides. Age, pregnancy, training load, chronic conditions, and local eating patterns can all change the right fit.",
        categories: {
          grains: ["Whole grains", "Rice, oats, bread, potatoes, and other staple carbs"],
          protein: ["Protein foods", "Beans, fish, eggs, tofu, meat, and similar options"],
          vegetables: ["Vegetables", "Aim for color variety and daily consistency"],
          fruit: ["Fruit", "Prefer whole fruit over juice"],
          dairy: ["Dairy", "Milk, yogurt, or suitable alternatives"],
          fats: ["Healthy fats", "Oils, nuts, seeds, avocado, and similar sources"]
        },
        servings: "Suggested amount",
        perDay: "servings / day",
        grams: "Approx. grams",
        gramsPerDay: "approx. g / day",
        gramBasis: "Roughly converted from common everyday portions"
      },
      ja: {
        eyebrow: "1日の食事量をどう配分するか知りたい",
        title: "TDEE から1日の食事配分をすばやく確認",
        intro: "推定総消費カロリーを入力すると、六つの食品グループに分けた日常向けの目安が表示されます。医療的な処方ではなく、日常計画の出発点として使ってください。",
        tdeeTitle: "TDEE とは？",
        tdeeBody: "TDEE は 1 日の総消費エネルギー量のことです。基礎代謝に加えて、歩行や家事などの日常活動、運動やトレーニングで使うエネルギーも含めた大まかな合計を指します。",
        label: "TDEE を入力してください",
        placeholder: "例 2100",
        button: "配分を見る",
        detailPage: "詳しい食事配分ページを見る",
        warning: "注意：この熱量はかなり低めです。現在の状態に合うかを確認し、必要なら栄養士や医師に相談してください。",
        hint: "結果は食事計画の目安です。たんぱく質量、マクロ、体重の推移と合わせて見ると役立ちます。",
        note: "份数とグラム数は、日常で使いやすいように単純化した参考値です。年齢、妊娠、運動量、慢性疾患、食文化によって適切な配分は変わります。",
        categories: {
          grains: ["主食・全粒穀物", "ごはん、パン、麺、いも類など"],
          protein: ["たんぱく源", "豆、魚、卵、豆腐、肉などを分散"],
          vegetables: ["野菜", "色の濃い野菜も含めて多様に"],
          fruit: ["果物", "ジュースより果物そのものを優先"],
          dairy: ["乳製品", "牛乳、ヨーグルト、代替品で調整"],
          fats: ["油脂・ナッツ", "量を抑えつつ質を意識"]
        },
        servings: "目安量",
        perDay: "份 / 日",
        grams: "おおよそのグラム量",
        gramsPerDay: "約 g / 日",
        gramBasis: "一般的な日常量から大まかに換算"
      },
      es: {
        eyebrow: "Quiero saber cómo repartir mi comida del día",
        title: "Usa tu TDEE para repartir mejor la comida diaria",
        intro: "Introduce tu gasto energético diario total y obtén una referencia práctica dividida en seis grupos de alimentos.",
        tdeeTitle: "¿Qué es el TDEE?",
        tdeeBody: "TDEE significa gasto energético total diario. Es la energía aproximada que quemas en un día completo, incluyendo metabolismo basal, movimiento diario y ejercicio.",
        label: "Introduce tu TDEE",
        placeholder: "Por ejemplo 2100",
        button: "Calcular reparto",
        detailPage: "Abrir la página completa del plan",
        warning: "Aviso: este nivel calórico es bastante bajo. Verifica si encaja con tu situación antes de usarlo como meta.",
        hint: "Úsalo como referencia general y compáralo con proteína, macros y cambios de peso.",
        note: "Las porciones y los gramos son estimaciones amplias para planificar el día. La edad, el embarazo, el entrenamiento y otras condiciones pueden cambiar lo adecuado.",
        categories: {
          grains: ["Cereales integrales", "Arroz, avena, pan, patata y bases similares"],
          protein: ["Proteínas", "Legumbres, pescado, huevos, tofu, carne y similares"],
          vegetables: ["Verduras", "Busca variedad y constancia"],
          fruit: ["Fruta", "Mejor fruta entera que zumo"],
          dairy: ["Lácteos", "Leche, yogur o alternativas"],
          fats: ["Grasas saludables", "Aceites, frutos secos, semillas y aguacate"]
        },
        servings: "Cantidad sugerida",
        perDay: "porciones / día",
        grams: "Gramos aproximados",
        gramsPerDay: "aprox. g / día",
        gramBasis: "Conversión aproximada a partir de porciones habituales"
      },
      fr: {
        eyebrow: "Je veux savoir comment répartir mon alimentation sur la journée",
        title: "Utilisez le TDEE pour répartir plus clairement vos repas",
        intro: "Entrez votre dépense énergétique quotidienne totale pour obtenir une référence pratique répartie en six groupes d'aliments.",
        tdeeTitle: "Qu'est-ce que le TDEE ?",
        tdeeBody: "Le TDEE correspond à la dépense énergétique quotidienne totale. C'est l'énergie approximative que vous dépensez sur une journée complète avec le métabolisme de base, les mouvements du quotidien et l'exercice.",
        label: "Entrez votre TDEE",
        placeholder: "Par exemple 2100",
        button: "Calculer la répartition",
        detailPage: "Ouvrir la page complète",
        warning: "Attention : ce niveau calorique est assez bas. Vérifiez qu'il convient à votre situation avant de l'utiliser.",
        hint: "Servez-vous-en comme repère général, à comparer avec les protéines, les macros et l'évolution du poids.",
        note: "Les portions et les grammes sont des estimations générales pour organiser la journée. L'âge, la grossesse, l'entraînement et certaines pathologies peuvent changer les besoins.",
        categories: {
          grains: ["Céréales complètes", "Riz, avoine, pain, pommes de terre et bases similaires"],
          protein: ["Protéines", "Légumineuses, poisson, œufs, tofu, viande et équivalents"],
          vegetables: ["Légumes", "Varier les couleurs et garder de la régularité"],
          fruit: ["Fruits", "Privilégier les fruits entiers"],
          dairy: ["Produits laitiers", "Lait, yaourt ou alternatives adaptées"],
          fats: ["Bonnes graisses", "Huiles, noix, graines, avocat"]
        },
        servings: "Quantité conseillée",
        perDay: "portions / jour",
        grams: "Grammes approximatifs",
        gramsPerDay: "env. g / jour",
        gramBasis: "Conversion approximative à partir de portions courantes"
      },
      de: {
        eyebrow: "Ich möchte wissen, wie ich meine tägliche Ernährung aufteilen kann",
        title: "Mit dem TDEE die tägliche Ernährung einfacher aufteilen",
        intro: "Gib deinen gesamten Tagesverbrauch ein und erhalte eine praktische Orientierung über sechs Lebensmittelgruppen.",
        tdeeTitle: "Was ist TDEE?",
        tdeeBody: "TDEE steht für den gesamten täglichen Energieverbrauch. Gemeint ist die grobe Energiemenge, die du an einem Tag mit Grundumsatz, Alltagsbewegung und Training verbrauchst.",
        label: "TDEE eingeben",
        placeholder: "Zum Beispiel 2100",
        button: "Verteilung berechnen",
        detailPage: "Vollständige Planungsseite öffnen",
        warning: "Hinweis: Dieser Kalorienwert ist recht niedrig. Prüfe zuerst, ob er zu deiner aktuellen Situation passt.",
        hint: "Nutze dies als grobe Orientierung und vergleiche es mit Protein, Makros und Gewichtstrends.",
        note: "Portionen und Grammangaben sind vereinfachte Tagesrichtwerte. Alter, Schwangerschaft, Trainingsumfang und Erkrankungen können die passende Verteilung verändern.",
        categories: {
          grains: ["Vollkorn & Grundbeilagen", "Reis, Hafer, Brot, Kartoffeln und ähnliche Sattmacher"],
          protein: ["Eiweißquellen", "Bohnen, Fisch, Eier, Tofu, Fleisch und Ähnliches"],
          vegetables: ["Gemüse", "Möglichst bunt und regelmäßig einbauen"],
          fruit: ["Obst", "Wenn möglich eher ganzes Obst"],
          dairy: ["Milchprodukte", "Milch, Joghurt oder passende Alternativen"],
          fats: ["Gesunde Fette", "Öle, Nüsse, Samen, Avocado"]
        },
        servings: "Empfohlene Menge",
        perDay: "Portionen / Tag",
        grams: "Ungefähre Grammzahl",
        gramsPerDay: "ca. g / Tag",
        gramBasis: "Grob aus üblichen Alltagsportionen umgerechnet"
      },
      pt: {
        eyebrow: "Quero saber como dividir minha alimentação do dia",
        title: "Use o TDEE para montar uma divisão diária mais clara",
        intro: "Informe seu gasto energético diário total e veja uma referência prática em seis grupos de alimentos.",
        tdeeTitle: "O que é TDEE?",
        tdeeBody: "TDEE significa gasto energético diário total. É a energia aproximada que você gasta em um dia inteiro com metabolismo basal, movimentos do cotidiano e exercício.",
        label: "Digite seu TDEE",
        placeholder: "Exemplo 2100",
        button: "Calcular divisão",
        detailPage: "Abrir página completa do plano",
        warning: "Aviso: esse nível calórico está bem baixo. Confira se ele faz sentido para sua situação antes de adotá-lo.",
        hint: "Use como referência geral e compare com proteína, macros e tendência de peso.",
        note: "As porções e os gramas são estimativas amplas para o dia a dia. Idade, gravidez, treino e condições crônicas podem mudar a distribuição ideal.",
        categories: {
          grains: ["Grãos e bases", "Arroz, aveia, pão, batata e carboidratos-base"],
          protein: ["Proteínas", "Feijões, peixes, ovos, tofu, carnes e similares"],
          vegetables: ["Vegetais", "Busque variedade e constância"],
          fruit: ["Frutas", "Prefira fruta inteira ao suco"],
          dairy: ["Laticínios", "Leite, iogurte ou alternativas"],
          fats: ["Gorduras boas", "Óleos, castanhas, sementes e abacate"]
        },
        servings: "Quantidade sugerida",
        perDay: "porções / dia",
        grams: "Gramas aproximados",
        gramsPerDay: "aprox. g / dia",
        gramBasis: "Conversão aproximada a partir de porções comuns"
      },
      ru: {
        eyebrow: "Хочу понять, как распределить питание на день",
        title: "Используйте TDEE для более понятного плана питания на день",
        intro: "Введите суточный расход энергии и получите практичный ориентир по шести группам продуктов.",
        tdeeTitle: "Что такое TDEE?",
        tdeeBody: "TDEE — это общий суточный расход энергии. Это примерное количество энергии, которое вы тратите за день с учётом базового обмена, повседневной активности и тренировок.",
        label: "Введите ваш TDEE",
        placeholder: "Например 2100",
        button: "Рассчитать",
        detailPage: "Открыть полную страницу плана",
        warning: "Внимание: этот уровень калорий довольно низкий. Сначала убедитесь, что он подходит под вашу ситуацию.",
        hint: "Используйте это как общий ориентир и сравнивайте с белком, макросами и динамикой веса.",
        note: "Порции и граммы здесь — упрощённые оценки для повседневного планирования. Возраст, беременность, тренировки и хронические состояния могут менять подходящий вариант.",
        categories: {
          grains: ["Злаки и гарниры", "Рис, овсянка, хлеб, картофель и другие основы рациона"],
          protein: ["Белковые продукты", "Бобовые, рыба, яйца, тофу, мясо и похожие продукты"],
          vegetables: ["Овощи", "Старайтесь есть их разнообразно и регулярно"],
          fruit: ["Фрукты", "Лучше цельные фрукты, а не сок"],
          dairy: ["Молочные продукты", "Молоко, йогурт или подходящие альтернативы"],
          fats: ["Полезные жиры", "Масла, орехи, семена, авокадо"]
        },
        servings: "Рекомендуемое количество",
        perDay: "порций / день",
        grams: "Примерно в граммах",
        gramsPerDay: "примерно г / день",
        gramBasis: "Грубый пересчёт по обычным бытовым порциям"
      },
      hi: {
        eyebrow: "मैं जानना चाहता हूँ कि दिनभर का भोजन कैसे बाँटूँ",
        title: "TDEE के आधार पर दिनभर की भोजन योजना जल्दी देखें",
        intro: "अपना कुल दैनिक ऊर्जा व्यय दर्ज करें और छह खाद्य समूहों में एक व्यावहारिक दैनिक विभाजन देखें।",
        tdeeTitle: "TDEE क्या है?",
        tdeeBody: "TDEE का मतलब कुल दैनिक ऊर्जा व्यय है। यह वह अनुमानित ऊर्जा है जो आपका शरीर एक पूरे दिन में बेसल जरूरत, रोज़मर्रा की गतिविधि और व्यायाम मिलाकर खर्च करता है।",
        label: "अपना TDEE दर्ज करें",
        placeholder: "जैसे 2100",
        button: "योजना बनाएं",
        detailPage: "पूरा प्लान पेज खोलें",
        warning: "ध्यान दें: यह कैलोरी स्तर काफ़ी कम है। इसे लक्ष्य मानने से पहले देखें कि यह आपकी स्थिति के अनुकूल है या नहीं।",
        hint: "इसे सामान्य संदर्भ की तरह उपयोग करें और प्रोटीन, मैक्रो तथा वजन प्रवृत्ति के साथ देखें।",
        note: "ये सर्विंग और ग्राम दोनों दैनिक योजना के लिए मोटे अनुमान हैं। आयु, गर्भावस्था, प्रशिक्षण और दीर्घकालिक रोगों के कारण सही वितरण बदल सकता है।",
        categories: {
          grains: ["अनाज और मुख्य कार्ब", "चावल, ओट्स, रोटी, आलू जैसी आधार चीज़ें"],
          protein: ["प्रोटीन स्रोत", "दालें, मछली, अंडे, टोफू, मांस आदि"],
          vegetables: ["सब्ज़ियाँ", "रंग और विविधता बनाए रखें"],
          fruit: ["फल", "जूस की जगह साबुत फल बेहतर"],
          dairy: ["डेयरी", "दूध, दही या विकल्प"],
          fats: ["स्वस्थ वसा", "तेल, मेवे, बीज, एवोकाडो"]
        },
        servings: "अनुशंसित मात्रा",
        perDay: "सर्विंग / दिन",
        grams: "अनुमानित ग्राम",
        gramsPerDay: "लगभग g / दिन",
        gramBasis: "सामान्य रोज़मर्रा की सर्विंग के आधार पर मोटा रूपांतरण"
      },
      ar: {
        eyebrow: "أريد أن أعرف كيف أوزع طعام اليوم",
        title: "استخدم TDEE لبناء توزيع يومي أوضح للغذاء",
        intro: "أدخل إجمالي استهلاكك اليومي للطاقة لتحصل على مرجع عملي موزع على ست مجموعات غذائية.",
        tdeeTitle: "ما هو TDEE؟",
        tdeeBody: "TDEE يعني إجمالي استهلاكك اليومي للطاقة. وهو تقدير تقريبي لما يحرقه جسمك خلال يوم كامل من احتياجاته الأساسية وحركتك اليومية وتمرينك.",
        label: "أدخل قيمة TDEE",
        placeholder: "مثال 2100",
        button: "احسب التوزيع",
        detailPage: "افتح صفحة الخطة الكاملة",
        warning: "تنبيه: هذا المستوى من السعرات منخفض نسبيًا. تأكد أولًا من أنه مناسب لوضعك قبل اعتماده.",
        hint: "استخدم النتيجة كمرجع عام وقارنها بالبروتين والماكروز واتجاه الوزن.",
        note: "الحصص والجرامات هنا تقديرات مبسطة للتخطيط اليومي. العمر والحمل والتدريب والأمراض المزمنة قد تغيّر التوزيع الأنسب.",
        categories: {
          grains: ["الحبوب والأساسيات", "الأرز والشوفان والخبز والبطاطس وما يشبهها"],
          protein: ["مصادر البروتين", "البقول والسمك والبيض والتوفو واللحوم"],
          vegetables: ["الخضار", "يفضل التنويع والاستمرار اليومي"],
          fruit: ["الفاكهة", "الفاكهة الكاملة أفضل من العصير"],
          dairy: ["الألبان", "الحليب والزبادي أو البدائل المناسبة"],
          fats: ["الدهون الصحية", "الزيوت والمكسرات والبذور والأفوكادو"]
        },
        servings: "الكمية المقترحة",
        perDay: "حصص / يوم",
        grams: "الجرامات التقريبية",
        gramsPerDay: "تقريبًا g / يوم",
        gramBasis: "تحويل تقريبي اعتمادًا على حصص يومية شائعة"
      }
    };
    const rangeCopy = {
      zh: {
        title: "如果还不知道自己的 TDEE，可以先这样估",
        items: [
          "久坐型成年人常见会落在约 1600 到 2100 千卡 / 天。",
          "有规律走路、通勤或每周训练 2 到 4 次的人，常见会落在约 1900 到 2600 千卡 / 天。",
          "训练量较高、体型较大、劳动强度高或增肌阶段的人，常见会到约 2400 到 3200+ 千卡 / 天。"
        ],
        gramsUnit: "g / 天"
      },
      en: {
        title: "If you do not know your TDEE yet, start with a rough range",
        items: [
          "Sedentary adults often land somewhere around 1600 to 2100 kcal/day.",
          "Adults who walk regularly, commute actively, or train 2 to 4 times per week often land around 1900 to 2600 kcal/day.",
          "People with larger body size, higher training volume, manual work, or muscle-gain phases often land around 2400 to 3200+ kcal/day."
        ],
        gramsUnit: "g / day"
      },
      ja: {
        title: "まだ TDEE が分からないなら、このくらいから考える",
        items: [
          "座りがちな成人では、1 日あたり約 1600〜2100 kcal に収まることがよくあります。",
          "通勤や歩行が多い人、週 2〜4 回ほど運動する人では、約 1900〜2600 kcal に収まりやすくなります。",
          "体格が大きい人、運動量が多い人、肉体労働や増量期では、約 2400〜3200 kcal 以上になることがあります。"
        ],
        gramsUnit: "g / 日"
      },
      es: {
        title: "Si todavía no conoces tu TDEE, empieza con una referencia amplia",
        items: [
          "Los adultos sedentarios suelen caer cerca de 1600 a 2100 kcal/día.",
          "Quienes caminan con regularidad, se mueven bastante o entrenan 2 a 4 veces por semana suelen caer cerca de 1900 a 2600 kcal/día.",
          "Personas con mayor tamaño corporal, más entrenamiento, trabajo físico o fase de ganancia muscular suelen caer cerca de 2400 a 3200+ kcal/día."
        ],
        gramsUnit: "g / día"
      },
      fr: {
        title: "Si vous ne connaissez pas encore votre TDEE, partez d'un ordre d'idée",
        items: [
          "Chez les adultes sédentaires, on observe souvent environ 1600 à 2100 kcal/jour.",
          "Chez les adultes qui marchent régulièrement ou s'entraînent 2 à 4 fois par semaine, on voit souvent environ 1900 à 2600 kcal/jour.",
          "Avec un gabarit plus grand, davantage d'entraînement, un travail physique ou une phase de prise de masse, on peut plutôt se situer vers 2400 à 3200+ kcal/jour."
        ],
        gramsUnit: "g / jour"
      },
      de: {
        title: "Wenn du deinen TDEE noch nicht kennst, starte mit groben Bereichen",
        items: [
          "Bei eher sitzenden Erwachsenen liegt der Wert oft ungefähr zwischen 1600 und 2100 kcal/Tag.",
          "Wer sich regelmäßig bewegt oder 2 bis 4 Mal pro Woche trainiert, liegt oft eher zwischen 1900 und 2600 kcal/Tag.",
          "Bei größerem Körperbau, mehr Training, körperlicher Arbeit oder Aufbauphasen sind oft eher 2400 bis 3200+ kcal/Tag realistisch."
        ],
        gramsUnit: "g / Tag"
      },
      pt: {
        title: "Se você ainda não sabe seu TDEE, comece com uma faixa aproximada",
        items: [
          "Adultos mais sedentários costumam ficar perto de 1600 a 2100 kcal/dia.",
          "Quem caminha bastante, se movimenta bem ou treina 2 a 4 vezes por semana costuma ficar perto de 1900 a 2600 kcal/dia.",
          "Pessoas com porte maior, treino mais alto, trabalho físico ou fase de ganho de massa costumam ficar perto de 2400 a 3200+ kcal/dia."
        ],
        gramsUnit: "g / dia"
      },
      ru: {
        title: "Если вы ещё не знаете свой TDEE, начните с грубой вилки",
        items: [
          "У малоподвижных взрослых значение часто оказывается примерно в диапазоне 1600–2100 ккал/день.",
          "У тех, кто много ходит или тренируется 2–4 раза в неделю, диапазон часто ближе к 1900–2600 ккал/день.",
          "При большем размере тела, высокой нагрузке, физической работе или наборе массы значение нередко ближе к 2400–3200+ ккал/день."
        ],
        gramsUnit: "г / день"
      },
      hi: {
        title: "अगर आपको अपना TDEE अभी नहीं पता, तो इन मोटी श्रेणियों से शुरू करें",
        items: [
          "ज़्यादा बैठने वाले वयस्क अक्सर लगभग 1600 से 2100 kcal/दिन के बीच आते हैं।",
          "जो लोग नियमित चलते हैं या हफ्ते में 2 से 4 बार ट्रेनिंग करते हैं, वे अक्सर लगभग 1900 से 2600 kcal/दिन के बीच आते हैं।",
          "बड़े शरीर आकार, अधिक ट्रेनिंग, शारीरिक काम या मसल गेन चरण में यह लगभग 2400 से 3200+ kcal/दिन तक जा सकता है।"
        ],
        gramsUnit: "g / दिन"
      },
      ar: {
        title: "إذا لم تكن تعرف قيمة TDEE بعد، فابدأ بنطاق تقريبي",
        items: [
          "البالغون الأقل حركة يقعون كثيرًا قرب 1600 إلى 2100 kcal/يوم.",
          "من يمشون بانتظام أو يتدربون 2 إلى 4 مرات أسبوعيًا يقعون كثيرًا قرب 1900 إلى 2600 kcal/يوم.",
          "مع حجم جسم أكبر أو تدريب أعلى أو عمل بدني أو مرحلة زيادة عضلية قد يصل النطاق إلى 2400 إلى 3200+ kcal/يوم."
        ],
        gramsUnit: "g / يوم"
      }
    };
    Object.keys(copy).forEach((code) => {
      copy[code].tdeeRangesTitle = rangeCopy[code].title;
      copy[code].tdeeRanges = rangeCopy[code].items;
      copy[code].gramsPerDay = rangeCopy[code].gramsUnit;
    });
    return copy[lang] || copy.en;
  }

  const mealPlannerGramMap = {
    grains: 80,
    protein: 50,
    vegetables: 100,
    fruit: 120,
    dairy: 240,
    fats: 12
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function roundHalf(value) {
    return Math.round(value * 2) / 2;
  }

  function formatServing(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1);
  }

  function roundToNearest(value, step) {
    return Math.round(value / step) * step;
  }

  function formatMealGrams(value) {
    return String(roundToNearest(value, value >= 200 ? 10 : 5));
  }

  function mealPlanForTdee(tdee) {
    const ratio = clamp(tdee / 2000, 0.7, 2.1);
    return {
      grains: roundHalf(clamp(6 * ratio, 4, 12)),
      protein: roundHalf(clamp(5 * ratio, 3, 9)),
      vegetables: roundHalf(clamp(4 * ratio, 3, 8)),
      fruit: roundHalf(clamp(2 * ratio, 2, 5)),
      dairy: roundHalf(clamp(1.5 * ratio, 1, 3)),
      fats: roundHalf(clamp(4 * ratio, 3, 8))
    };
  }

  function mealPlannerPath(lang) {
    return `/${normalizeLang(lang)}/calculators/tdee-meal-planner.html`;
  }

  function buildMealPlannerMarkup(lang, copy, mode = "home") {
    const isStandalone = mode === "page";
    return `
      <section class="${isStandalone ? "meal-planner-standalone" : "section full panel meal-planner-panel"}">
        <div class="meal-planner-head">
          ${isStandalone ? "" : `<span class="eyebrow">💡 ${copy.eyebrow}</span>`}
          ${isStandalone ? "" : `<h2>${copy.title}</h2>`}
          ${isStandalone ? "" : `<p>${copy.intro}</p>`}
        </div>
        <div class="meal-planner-explain">
          <div>
            <strong>${copy.tdeeTitle}</strong>
            <p>${copy.tdeeBody}</p>
          </div>
          ${isStandalone ? "" : `<a class="button subtle meal-planner-link" href="${mealPlannerPath(lang)}">${copy.detailPage}</a>`}
        </div>
        <div class="meal-planner-ranges">
          <strong>${copy.tdeeRangesTitle}</strong>
          <div class="meal-planner-range-grid">
            ${copy.tdeeRanges.map((item) => `<article class="meal-planner-range-card"><p>${item}</p></article>`).join("")}
          </div>
        </div>
        <div class="meal-planner-controls">
          <label for="meal-planner-tdee-${mode}">${copy.label}</label>
          <div class="meal-planner-input-row">
            <input id="meal-planner-tdee-${mode}" type="number" min="800" step="50" inputmode="decimal" placeholder="${copy.placeholder}">
            <button type="button" class="meal-planner-button">${copy.button}</button>
          </div>
          <p class="meal-planner-warning" hidden>${copy.warning}</p>
          <p class="meal-planner-hint">${copy.hint}</p>
        </div>
        <div class="meal-planner-grid">
          ${Object.entries(copy.categories).map(([key, value]) => `
            <article class="meal-card" data-meal-key="${key}">
              <div class="meal-card-top">
                <strong>${value[0]}</strong>
                <span>${copy.servings}</span>
              </div>
              <div class="meal-card-value">-- <span class="meal-card-unit-inline">${copy.perDay}</span></div>
              <div class="meal-card-grams">
                <span class="meal-card-grams-label">${copy.grams}</span>
                <strong class="meal-card-grams-value">-- <span class="meal-card-grams-unit-inline">${copy.gramsPerDay}</span></strong>
              </div>
              <p class="meal-card-note">${value[1]}</p>
            </article>
          `).join("")}
        </div>
        <p class="meal-planner-note">${copy.note}</p>
        <p class="meal-planner-basis">${copy.gramBasis}</p>
      </section>
    `;
  }

  function bindMealPlanner(section, lang, mode = "home") {
    const input = section.querySelector(`#meal-planner-tdee-${mode}`);
    const button = section.querySelector(".meal-planner-button");
    const warning = section.querySelector(".meal-planner-warning");
    const cards = Array.from(section.querySelectorAll("[data-meal-key]"));
    if (!input || !button) return;

    const render = () => {
      const tdee = Number(input.value);
      if (!tdee || tdee < 800) {
        cards.forEach((card) => {
          card.querySelector(".meal-card-value").textContent = "--";
          card.querySelector(".meal-card-grams-value").textContent = "--";
        });
        warning.hidden = true;
        return;
      }

      const plan = mealPlanForTdee(tdee);
      cards.forEach((card) => {
        const key = card.getAttribute("data-meal-key");
        const servings = plan[key];
        card.querySelector(".meal-card-value").textContent = formatServing(servings);
        card.querySelector(".meal-card-grams-value").textContent = formatMealGrams(servings * mealPlannerGramMap[key]);
      });
      warning.hidden = !(tdee < 1200);
    };

    button.addEventListener("click", render);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        render();
      }
    });
  }

  function isLocalizedHomePage(lang) {
    const path = location.pathname.replace(/\/+$/, "/");
    return path === `/${lang}/`;
  }

  function injectMealPlanner(lang) {
    if (!isLocalizedHomePage(lang)) return;
    if (document.querySelector(".meal-planner-panel")) return;

    const hero = document.querySelector(".hero");
    if (!hero || !hero.parentNode) return;

    const copy = mealPlannerCopy(lang);
    const section = document.createElement("section");
    section.className = "section-wrap meal-planner-wrap";
    section.innerHTML = `<div class="shell">${buildMealPlannerMarkup(lang, copy, "home")}</div>`;

    hero.insertAdjacentElement("afterend", section);
    bindMealPlanner(section, lang, "home");
  }

  function injectMealPlannerPage(lang) {
    document.querySelectorAll("[data-meal-planner-page]").forEach((node) => {
      if (node.querySelector(".meal-planner-standalone")) return;
      const copy = mealPlannerCopy(lang);
      node.innerHTML = buildMealPlannerMarkup(lang, copy, "page");
      bindMealPlanner(node, lang, "page");
    });
  }

  function buildLocalizedPath(targetLang) {
    const path = location.pathname || "/";
    const parts = path.split("/").filter(Boolean);
    const currentRoot = normalizeLang(parts[0] || "");
    const section = parts[1] || "";
    if (path === "/") {
      return `/${targetLang}/`;
    }
    if (section === "calculators") {
      return `/${targetLang}/${parts.slice(1).join("/")}${path.endsWith("/") ? "/" : ""}`;
    }
    if (parts[0] === "zh-Hans") {
      if (section === "calculators") {
        parts[0] = targetLang;
        return `/${parts.join("/")}${path.endsWith("/") ? "/" : ""}`;
      }
      return `/${targetLang}/`;
    }
    if (languageSet.has(currentRoot)) {
      if (section === "calculators") {
        parts[0] = targetLang;
        return `/${parts.join("/")}${path.endsWith("/") ? "/" : ""}`;
      }
      return `/${targetLang}/`;
    }
    return `/${targetLang}${path.startsWith("/") ? path : `/${path}`}`;
  }

  function legalPath(lang, file) {
    return `/${lang}/${file}`;
  }

  function rewriteLanguageLinks(lang) {
    document.querySelectorAll("a[href]").forEach((link) => {
      if (link.closest(".lang-menu")) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href === "/about.html") { link.setAttribute("href", legalPath(lang, "about.html")); return; }
      if (href === "/terms.html") { link.setAttribute("href", legalPath(lang, "terms.html")); return; }
      if (href === "/privacy.html") { link.setAttribute("href", legalPath(lang, "privacy.html")); return; }
      if (href === "/disclaimer.html") { link.setAttribute("href", legalPath(lang, "disclaimer.html")); return; }
      if (href === "/contact.html") { link.setAttribute("href", legalPath(lang, "contact.html")); return; }
      if (href.startsWith("/zh-Hans/")) {
        link.setAttribute("href", href.replace("/zh-Hans/", `/${lang}/`));
        return;
      }
      const match = href.match(/^\/(zh|en|es|fr|de|ja|ar|pt|ru|hi)\//);
      if (match) {
        link.setAttribute("href", href.replace(`/${match[1]}/`, `/${lang}/`));
      }
    });
  }

  function injectLanguageMenu(nav, lang) {
    nav.querySelectorAll(".lang-menu").forEach((menu) => menu.remove());
    const labels = localizedNavLabels(lang);
    const currentMeta = supportedLanguages.find((item) => item.code === lang) || supportedLanguages[0];
    const menu = document.createElement("details");
    menu.className = "lang-menu";
    menu.innerHTML = `
      <summary>${labels.language}: ${currentMeta.label}</summary>
      <div class="lang-popover">
        ${supportedLanguages.map((item) => `<a href="${buildLocalizedPath(item.code)}" data-lang-switch="${item.code}">${item.label}</a>`).join("")}
      </div>
    `;
    nav.appendChild(menu);
  }

  function injectTopbar(lang) {
    if (document.querySelector(".topbar")) return;
    const labels = localizedNavLabels(lang);
    const items = availableNavItems(lang);
    const navLinks = [
      items.includes("home") ? `<a href="/${lang}/">${labels.home}</a>` : "",
      items.includes("calculators") ? `<a href="/${lang}/calculators/">${labels.calculators}</a>` : "",
      items.includes("blog") ? `<a href="/${lang}/blog/">${labels.blog}</a>` : "",
      items.includes("faq") ? `<a href="/${lang}/faq/">${labels.faq}</a>` : ""
    ].join("");
    const header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = `
      <div class="shell">
        <a class="brand" href="/${lang}/"><span class="brand-mark" aria-hidden="true"></span><span>Health Toolkit Lab</span></a>
        <nav class="nav-links">
          ${navLinks}
        </nav>
      </div>
    `;
    document.body.prepend(header);
  }

  function enhanceTopNav(lang) {
    const homeHref = `/${lang}/`;
    const labels = localizedNavLabels(lang);
    const items = availableNavItems(lang);
    const labelMap = {
      [`/${lang}/`]: labels.home,
      [`/${lang}/calculators/`]: labels.calculators,
      [`/${lang}/blog/`]: labels.blog,
      [`/${lang}/faq/`]: labels.faq,
      [`/${lang}/health-calculators/`]: labels.health,
      [`/${lang}/sleep-tools/`]: labels.sleep,
      [`/${lang}/nutrition-tools/`]: labels.nutrition,
      [`/${lang}/fitness-tools/`]: labels.fitness,
      [`/${lang}/habit-trackers/`]: labels.habits
    };

    document.querySelectorAll(".nav-links").forEach((nav) => {
      const links = Array.from(nav.querySelectorAll("a"));
      if (!links.some((link) => link.getAttribute("href") === homeHref)) {
        const homeLink = document.createElement("a");
        homeLink.href = homeHref;
        homeLink.textContent = labels.home;
        nav.prepend(homeLink);
      }

      Array.from(nav.querySelectorAll("a")).forEach((link) => {
        const href = link.getAttribute("href");
        if ((href === `/${lang}/blog/` && !items.includes("blog")) || (href === `/${lang}/faq/` && !items.includes("faq"))) {
          link.remove();
        }
      });

      Array.from(nav.querySelectorAll("a")).forEach((link) => {
        if (link.closest(".lang-menu")) return;
        const href = link.getAttribute("href");
        if (href && labelMap[href]) {
          link.textContent = labelMap[href];
        }
      });

      injectLanguageMenu(nav, lang);
    });
  }

  function injectFooter(lang) {
    if (document.querySelector(".site-footer")) return;
    document.querySelectorAll("body > footer").forEach((node) => {
      if (!node.classList.contains("site-footer")) node.remove();
    });
    const copy = footerCopy(lang);
    const friendlyLinks = [
      { label: "天马黑珍珠 社群", href: "https://tmhzz.com/" },
      { label: "HAIMA 投资理财社群", href: "https://www.vooqqqm.com/" },
      { label: "Calcwisehub", href: "https://calcwisehub.com/" },
      { label: "薅羊毛活动站", href: "https://bank.vooqqqm.com/index.html" }
    ];
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="shell">
        <div class="footer-panels">
          <div class="footer-brand">
            <a class="brand" href="/${lang}/"><span class="brand-mark" aria-hidden="true"></span><span>Health Toolkit Lab</span></a>
            <p>${copy.intro}</p>
            <div class="footer-meta">
              ${copy.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div class="footer-note">
            <h3>${copy.noteTitle}</h3>
            <p>${copy.noteA}</p>
            <p>${copy.noteB}</p>
            <div class="footer-friends">
              <h4>${copy.friendTitle}</h4>
              <div class="footer-friend-links">
                ${friendlyLinks.map((item) => `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`).join("")}
              </div>
            </div>
          </div>
          <div class="footer-links-block">
            <h3>${copy.infoTitle}</h3>
            <a href="${legalPath(lang, "about.html")}">${copy.about}</a>
            <a href="${legalPath(lang, "terms.html")}">${copy.terms}</a>
            <a href="${legalPath(lang, "privacy.html")}">${copy.privacy}</a>
            <a href="${legalPath(lang, "disclaimer.html")}">${copy.disclaimer}</a>
            <a href="${legalPath(lang, "contact.html")}">${copy.contact}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright © 2026 Health Toolkit Lab. All rights reserved.</p>
          <p>${copy.liability}</p>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  if (document.documentElement.getAttribute("data-root-redirect") === "true" && location.pathname === "/" && !isCrawler()) {
    location.replace(`/${detectLanguage()}/`);
    return;
  }

  document.querySelectorAll("[data-lang-current]").forEach((node) => {
    node.textContent = currentPageLanguage();
  });

  const lang = currentPageLanguage();
  document.documentElement.lang = lang;
  rewriteLanguageLinks(lang);
  injectTopbar(lang);
  enhanceTopNav(lang);
  injectMealPlanner(lang);
  injectMealPlannerPage(lang);
  injectFooter(lang);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-lang-switch]");
    if (!link) return;
    const targetLang = link.getAttribute("data-lang-switch");
    localStorage.setItem("preferred-language", targetLang);
  });
})();
