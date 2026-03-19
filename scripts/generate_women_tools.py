from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERSION = "20260318-30"
BRAND = "Health Toolkit Lab"
DOMAIN = "https://www.healthtoolkitlab.com"

LANGS = {
    "en": {
        "lang_attr": "en",
        "home": "Home",
        "all": "All calculators",
        "calc": "Calculators",
        "category_title": "Women's Health Tools",
        "eyebrow": "Women's Health",
        "category_intro": "Track cycle timing, fertile windows, pregnancy milestones, and common symptom patterns using lightweight reference tools designed for everyday planning.",
        "desc": "Women's health reference tools for cycle tracking, fertility timing, and pregnancy planning.",
        "sidebar_title": "Why this tool helps",
        "sidebar_items": [
            "Designed for everyday tracking and planning.",
            "Useful as a practical reference, not a diagnosis.",
            "Works better when reviewed across several cycles."
        ],
    },
    "zh": {
        "lang_attr": "zh-Hans",
        "home": "首页",
        "all": "全部计算器",
        "calc": "计算器",
        "category_title": "女性健康工具",
        "eyebrow": "女性健康",
        "category_intro": "围绕经期、排卵、受孕窗口、孕周和常见症状记录，整理成更容易查看和持续使用的轻量工具。",
        "desc": "女性健康工具，适合做经期、排卵、孕周和症状的日常参考。",
        "sidebar_title": "为什么这个工具有帮助",
        "sidebar_items": [
            "适合做日常记录、规划和时间参考。",
            "结果只用于日常参考，不替代诊断。",
            "连续记录多个周期后，通常更容易看出规律。"
        ],
    },
    "es": {
        "lang_attr": "es",
        "home": "Inicio",
        "all": "Todas las calculadoras",
        "calc": "Calculadoras",
        "category_title": "Herramientas de salud femenina",
        "eyebrow": "Salud femenina",
        "category_intro": "Herramientas ligeras para seguir el ciclo, la ventana fértil, hitos del embarazo y patrones de síntomas como referencia diaria.",
        "desc": "Herramientas de salud femenina para ciclo, fertilidad y embarazo.",
        "sidebar_title": "Por qué ayuda esta herramienta",
        "sidebar_items": [
            "Pensada para el seguimiento y la planificación diaria.",
            "Sirve como referencia práctica, no como diagnóstico.",
            "Resulta más útil al revisar varios ciclos."
        ],
    },
    "fr": {
        "lang_attr": "fr",
        "home": "Accueil",
        "all": "Tous les calculateurs",
        "calc": "Calculateurs",
        "category_title": "Outils de santé féminine",
        "eyebrow": "Santé féminine",
        "category_intro": "Des outils simples pour suivre le cycle, la fenêtre fertile, les repères de grossesse et les symptômes fréquents au quotidien.",
        "desc": "Outils de santé féminine pour le cycle, la fertilité et la grossesse.",
        "sidebar_title": "Pourquoi cet outil aide",
        "sidebar_items": [
            "Pensé pour le suivi et la planification du quotidien.",
            "Utile comme repère pratique, sans valeur de diagnostic.",
            "Plus pertinent lorsqu'on observe plusieurs cycles."
        ],
    },
    "de": {
        "lang_attr": "de",
        "home": "Start",
        "all": "Alle Rechner",
        "calc": "Rechner",
        "category_title": "Tools für Frauengesundheit",
        "eyebrow": "Frauengesundheit",
        "category_intro": "Praktische Referenz-Tools für Zyklus, fruchtbare Tage, Schwangerschaftszeitpunkte und häufige Symptome im Alltag.",
        "desc": "Frauengesundheits-Tools für Zyklus, Fruchtbarkeit und Schwangerschaft.",
        "sidebar_title": "Warum dieses Tool hilft",
        "sidebar_items": [
            "Für tägliche Beobachtung und Planung gedacht.",
            "Als praktische Orientierung hilfreich, nicht als Diagnose.",
            "Aussagekräftiger über mehrere Zyklen hinweg."
        ],
    },
    "pt": {
        "lang_attr": "pt",
        "home": "Início",
        "all": "Todas as calculadoras",
        "calc": "Calculadoras",
        "category_title": "Ferramentas de saúde feminina",
        "eyebrow": "Saúde feminina",
        "category_intro": "Ferramentas leves para acompanhar ciclo, janela fértil, marcos da gestação e sintomas frequentes como referência do dia a dia.",
        "desc": "Ferramentas de saúde feminina para ciclo, fertilidade e gestação.",
        "sidebar_title": "Por que esta ferramenta ajuda",
        "sidebar_items": [
            "Pensada para acompanhamento e planejamento do dia a dia.",
            "Funciona como referência prática, não como diagnóstico.",
            "Fica mais útil quando vários ciclos são comparados."
        ],
    },
    "ru": {
        "lang_attr": "ru",
        "home": "Главная",
        "all": "Все калькуляторы",
        "calc": "Калькуляторы",
        "category_title": "Инструменты женского здоровья",
        "eyebrow": "Женское здоровье",
        "category_intro": "Лёгкие справочные инструменты для отслеживания цикла, фертильного окна, сроков беременности и типичных симптомов.",
        "desc": "Инструменты женского здоровья для цикла, фертильности и беременности.",
        "sidebar_title": "Чем полезен этот инструмент",
        "sidebar_items": [
            "Подходит для повседневного отслеживания и планирования.",
            "Полезен как практический ориентир, а не диагноз.",
            "Лучше работает при наблюдении нескольких циклов."
        ],
    },
    "hi": {
        "lang_attr": "hi",
        "home": "होम",
        "all": "सभी कैलकुलेटर",
        "calc": "कैलकुलेटर",
        "category_title": "महिला स्वास्थ्य टूल",
        "eyebrow": "महिला स्वास्थ्य",
        "category_intro": "चक्र, फर्टिलिटी विंडो, गर्भावस्था चरण और सामान्य लक्षणों को रोज़मर्रा संदर्भ के रूप में ट्रैक करने के लिए हल्के टूल।",
        "desc": "महिला स्वास्थ्य टूल: चक्र, फर्टिलिटी और गर्भावस्था संदर्भ.",
        "sidebar_title": "यह टूल क्यों उपयोगी है",
        "sidebar_items": [
            "रोज़मर्रा ट्रैकिंग और योजना के लिए उपयोगी।",
            "व्यावहारिक संदर्भ देता है, निदान नहीं।",
            "कई चक्रों को साथ देखने पर अधिक उपयोगी होता है।"
        ],
    },
    "ja": {
        "lang_attr": "ja",
        "home": "ホーム",
        "all": "すべての計算ツール",
        "calc": "計算ツール",
        "category_title": "女性健康ツール",
        "eyebrow": "女性の健康",
        "category_intro": "月経周期、妊娠しやすい時期、妊娠週数、よくある症状の流れを日常の参考として見やすくまとめた軽量ツール群です。",
        "desc": "女性の健康向けに周期・妊娠・症状を整理する参考ツール。",
        "sidebar_title": "このツールが役立つ理由",
        "sidebar_items": [
            "日々の記録や予定調整に使いやすい構成です。",
            "診断ではなく、実用的な参考情報として役立ちます。",
            "複数周期を見比べるほど傾向を把握しやすくなります。"
        ],
    },
    "ar": {
        "lang_attr": "ar",
        "home": "الرئيسية",
        "all": "كل الأدوات",
        "calc": "الأدوات",
        "category_title": "أدوات صحة المرأة",
        "eyebrow": "صحة المرأة",
        "category_intro": "أدوات خفيفة لمتابعة مواعيد الدورة ونافذة الخصوبة ومراحل الحمل والأنماط الشائعة للأعراض كمرجع يومي عملي.",
        "desc": "أدوات صحة المرأة لمتابعة الدورة والخصوبة والحمل.",
        "sidebar_title": "لماذا تفيد هذه الأداة",
        "sidebar_items": [
            "مناسبة للمتابعة اليومية والتخطيط العملي.",
            "تعمل كمرجع مفيد وليست أداة تشخيص.",
            "تكون أوضح عند مراجعة عدة دورات معًا."
        ],
    }
}

TOOLS = [
    ("periodcalc", "period-calculator.html", {
        "en": ("Period Calculator", "Estimate your next period and likely fertile timing from your recent cycle."),
        "zh": ("经期计算器", "根据最近周期估算下一次月经时间，并顺带查看更可能接近排卵的时段。"),
        "es": ("Calculadora del período", "Estima tu próximo período y una referencia de fertilidad a partir del ciclo reciente."),
        "fr": ("Calculateur des règles", "Estimez les prochaines règles et une référence de fertilité à partir du cycle récent."),
        "de": ("Periodenrechner", "Schätzen Sie die nächste Periode und einen Fruchtbarkeitszeitraum aus dem letzten Zyklus."),
        "pt": ("Calculadora menstrual", "Estime a próxima menstruação e uma referência de fertilidade com base no ciclo recente."),
        "ru": ("Калькулятор цикла", "Оцените дату следующих месячных и примерное фертильное окно по недавнему циклу."),
        "hi": ("पीरियड कैलकुलेटर", "हाल के चक्र के आधार पर अगली माहवारी और संभावित फर्टिलिटी समय का अनुमान लगाएँ।"),
        "ja": ("月経計算ツール", "直近の周期から、次回の月経時期と妊娠しやすい時期の目安を見積もります。"),
        "ar": ("حاسبة الدورة الشهرية", "قدّري موعد الدورة التالية وفترة الخصوبة المرجعية اعتمادًا على الدورة الأخيرة.")
    }),
    ("cyclelength", "cycle-length-calculator.html", {
        "en": ("Cycle Length Calculator", "Average several recent cycles to get a steadier cycle-length reference."),
        "zh": ("周期长度计算器", "把最近几个周期合在一起，得到一个更适合安排日程的平均周期参考。"),
        "es": ("Calculadora de duración del ciclo", "Promedia varios ciclos recientes para obtener una referencia más estable."),
        "fr": ("Calculateur de durée du cycle", "Faites la moyenne de plusieurs cycles récents pour un repère plus stable."),
        "de": ("Zykluslängen-Rechner", "Mitteln Sie mehrere letzte Zyklen für eine stabilere Orientierung."),
        "pt": ("Calculadora de duração do ciclo", "Faça a média de ciclos recentes para ter uma referência mais estável."),
        "ru": ("Калькулятор длины цикла", "Возьмите среднее нескольких последних циклов для более устойчивого ориентира."),
        "hi": ("साइकिल लंबाई कैलकुलेटर", "हाल के कई चक्रों का औसत निकालकर अधिक स्थिर संदर्भ पाएँ।"),
        "ja": ("周期日数計算ツール", "複数回の周期日数を平均して、より安定した目安を確認します。"),
        "ar": ("حاسبة طول الدورة", "احسبي متوسط عدة دورات حديثة للحصول على مرجع أكثر ثباتًا.")
    }),
    ("cycleregularity", "cycle-regularity-checker.html", {
        "en": ("Cycle Regularity Checker", "See whether recent cycles look relatively steady or more variable."),
        "zh": ("周期稳定度检查器", "比较最近几个周期，看看整体节奏更偏稳定，还是已经出现更明显波动。"),
        "es": ("Verificador de regularidad del ciclo", "Comprueba si los ciclos recientes parecen estables o más variables."),
        "fr": ("Vérificateur de régularité du cycle", "Voyez si les cycles récents semblent stables ou plus variables."),
        "de": ("Zyklus-Regelmäßigkeits-Check", "Prüfen Sie, ob die letzten Zyklen eher stabil oder wechselhaft wirken."),
        "pt": ("Verificador de regularidade do ciclo", "Veja se os ciclos recentes parecem estáveis ou mais variáveis."),
        "ru": ("Проверка регулярности цикла", "Посмотрите, выглядят ли последние циклы относительно стабильными или более изменчивыми."),
        "hi": ("साइकिल नियमितता चेकर", "देखें कि हाल के चक्र काफ़ी स्थिर हैं या उनमें अधिक उतार-चढ़ाव है।"),
        "ja": ("周期の安定度チェッカー", "最近の周期が比較的安定しているか、変動が大きいかを見ます。"),
        "ar": ("فاحص انتظام الدورة", "تحققي مما إذا كانت الدورات الأخيرة مستقرة نسبيًا أو أكثر تذبذبًا.")
    }),
    ("ovulation", "ovulation-calculator.html", {
        "en": ("Ovulation Calculator", "Estimate the day most likely to fall near ovulation."),
        "zh": ("排卵日计算器", "根据周期节奏估算更可能接近排卵的日期，适合做日历参考。"),
        "es": ("Calculadora de ovulación", "Estima el día más probable cercano a la ovulación."),
        "fr": ("Calculateur d'ovulation", "Estimez le jour le plus susceptible d'être proche de l'ovulation."),
        "de": ("Ovulationsrechner", "Schätzen Sie den Tag, der dem Eisprung am ehesten entspricht."),
        "pt": ("Calculadora de ovulação", "Estime o dia mais provável de ovulação."),
        "ru": ("Калькулятор овуляции", "Оцените день, который вероятнее всего близок к овуляции."),
        "hi": ("ओव्यूलेशन कैलकुलेटर", "संभावित ओव्यूलेशन के सबसे करीब दिन का अनुमान लगाएँ।"),
        "ja": ("排卵日計算ツール", "排卵日に近いと考えられる日の目安を確認します。"),
        "ar": ("حاسبة الإباضة", "قدّري اليوم الأقرب لحدوث الإباضة.")
    }),
    ("fertilitywindow", "fertility-window-calculator.html", {
        "en": ("Fertility Window Calculator", "Estimate the broader fertile window instead of only one target day."),
        "zh": ("受孕窗口计算器", "不只看单一天，直接查看更适合作为参考的受孕窗口范围。"),
        "es": ("Calculadora de ventana fértil", "Estima una ventana fértil más amplia en lugar de un único día."),
        "fr": ("Calculateur de fenêtre fertile", "Estimez une fenêtre fertile plus large plutôt qu'un seul jour."),
        "de": ("Fruchtbarkeitsfenster-Rechner", "Schätzen Sie ein breiteres fruchtbares Fenster statt nur eines Tages."),
        "pt": ("Calculadora da janela fértil", "Estime uma janela fértil mais ampla em vez de um único dia."),
        "ru": ("Калькулятор фертильного окна", "Оцените более широкое фертильное окно, а не только один день."),
        "hi": ("फर्टिलिटी विंडो कैलकुलेटर", "केवल एक दिन नहीं, बल्कि व्यापक फर्टिलिटी विंडो का अनुमान लगाएँ।"),
        "ja": ("妊娠しやすい時期計算ツール", "1日だけでなく、妊娠しやすい時期の幅を見積もります。"),
        "ar": ("حاسبة نافذة الخصوبة", "قدّري نافذة الخصوبة الأوسع بدل التركيز على يوم واحد.")
    }),
    ("duedate", "due-date-calculator.html", {
        "en": ("Due Date Calculator", "Estimate the expected due date from the first day of the last period."),
        "zh": ("预产期计算器", "根据最近一次月经开始日期，估算预产期和当前大致阶段。"),
        "es": ("Calculadora de fecha de parto", "Estima la fecha probable de parto a partir del último período."),
        "fr": ("Calculateur de date prévue d'accouchement", "Estimez la date prévue d'accouchement à partir des dernières règles."),
        "de": ("Geburtstermin-Rechner", "Schätzen Sie den Geburtstermin anhand des letzten Periodenbeginns."),
        "pt": ("Calculadora da data prevista do parto", "Estime a data prevista do parto a partir da última menstruação."),
        "ru": ("Калькулятор предполагаемой даты родов", "Оцените предполагаемую дату родов по последней менструации."),
        "hi": ("ड्यू डेट कैलकुलेटर", "पिछली माहवारी के आधार पर अनुमानित ड्यू डेट देखें।"),
        "ja": ("出産予定日計算ツール", "最終月経開始日から出産予定日の目安を確認します。"),
        "ar": ("حاسبة موعد الولادة", "قدّري موعد الولادة المتوقع من آخر دورة.")
    }),
    ("pregnancyweek", "pregnancy-week-calculator.html", {
        "en": ("Pregnancy Week Calculator", "Estimate the current pregnancy week from the last period date."),
        "zh": ("孕周计算器", "根据最近一次月经开始日，快速查看当前大概处在孕几周。"),
        "es": ("Calculadora de semana gestacional", "Estima la semana actual de embarazo desde el último período."),
        "fr": ("Calculateur de semaine de grossesse", "Estimez la semaine actuelle de grossesse à partir des dernières règles."),
        "de": ("Schwangerschaftswoche-Rechner", "Schätzen Sie die aktuelle Schwangerschaftswoche anhand der letzten Periode."),
        "pt": ("Calculadora da semana gestacional", "Estime a semana atual da gestação a partir da última menstruação."),
        "ru": ("Калькулятор недели беременности", "Оцените текущую неделю беременности по последней менструации."),
        "hi": ("प्रेग्नेंसी वीक कैलकुलेटर", "पिछली माहवारी की तारीख से वर्तमान गर्भावस्था सप्ताह का अनुमान लगाएँ।"),
        "ja": ("妊娠週数計算ツール", "最終月経開始日から現在のおおよその妊娠週数を確認します。"),
        "ar": ("حاسبة أسبوع الحمل", "قدّري أسبوع الحمل الحالي انطلاقًا من تاريخ آخر دورة.")
    }),
    ("conceptiondate", "conception-date-estimator.html", {
        "en": ("Conception Date Estimator", "Estimate a likely conception date by counting back from the due date."),
        "zh": ("受孕日期估算器", "根据预产期反推一个更适合做参考的受孕时间范围。"),
        "es": ("Estimador de fecha de concepción", "Estima una posible fecha de concepción a partir de la fecha probable de parto."),
        "fr": ("Estimateur de date de conception", "Estimez une date probable de conception à partir de la date prévue d'accouchement."),
        "de": ("Empfängnisdatum-Schätzer", "Schätzen Sie das Empfängnisdatum rückwärts vom Geburtstermin."),
        "pt": ("Estimador da data da concepção", "Estime uma data provável de concepção a partir da data prevista do parto."),
        "ru": ("Оценка даты зачатия", "Оцените вероятную дату зачатия по предполагаемой дате родов."),
        "hi": ("कन्सेप्शन डेट एस्टिमेटर", "ड्यू डेट से संभावित गर्भधारण तिथि का अनुमान लगाएँ।"),
        "ja": ("受胎日目安ツール", "出産予定日から逆算して受胎時期の目安を確認します。"),
        "ar": ("مقدر تاريخ الحمل", "قدّري تاريخ الحمل المحتمل بالرجوع من موعد الولادة المتوقع.")
    }),
    ("pregnancyweight", "pregnancy-weight-gain-calculator.html", {
        "en": ("Pregnancy Weight Gain Calculator", "Use pre-pregnancy BMI and stage to view a broad healthy gain reference."),
        "zh": ("孕期体重增长计算器", "结合孕前 BMI 和当前阶段，查看体重增长的大致参考范围。"),
        "es": ("Calculadora de aumento de peso en el embarazo", "Usa el IMC previo al embarazo y la etapa actual para ver una referencia general."),
        "fr": ("Calculateur de prise de poids pendant la grossesse", "Utilisez l'IMC avant grossesse et le stade actuel pour une fourchette générale."),
        "de": ("Schwangerschafts-Gewichtszunahme-Rechner", "Nutzen Sie den BMI vor der Schwangerschaft und die aktuelle Phase für eine grobe Orientierung."),
        "pt": ("Calculadora de ganho de peso na gravidez", "Use o IMC antes da gravidez e a fase atual para ver uma faixa geral."),
        "ru": ("Калькулятор набора веса при беременности", "Используйте ИМТ до беременности и текущий этап для общего ориентира."),
        "hi": ("प्रेग्नेंसी वेट गेन कैलकुलेटर", "गर्भावस्था से पहले के BMI और वर्तमान चरण से सामान्य वजन बढ़त सीमा देखें।"),
        "ja": ("妊娠中の体重増加計算ツール", "妊娠前 BMI と現在の段階から体重増加の大まかな目安を確認します。"),
        "ar": ("حاسبة زيادة الوزن أثناء الحمل", "استخدمي مؤشر كتلة الجسم قبل الحمل والمرحلة الحالية لرؤية نطاق عام للزيادة.")
    }),
    ("pmschecker", "pms-symptom-tracker.html", {
        "en": ("PMS Symptom Tracker", "Track monthly symptom load and the effect on daily life in a lighter way."),
        "zh": ("经前症状追踪器", "记录本月症状数量和对生活的影响，帮助你看清变化趋势。"),
        "es": ("Rastreador de síntomas de PMS", "Registra la carga de síntomas y su impacto diario de manera ligera."),
        "fr": ("Suivi des symptômes prémenstruels", "Suivez simplement les symptômes du cycle et leur impact au quotidien."),
        "de": ("PMS-Symptom-Tracker", "Erfassen Sie monatliche Symptome und deren Einfluss auf den Alltag."),
        "pt": ("Rastreador de sintomas de TPM", "Registre a carga de sintomas e o impacto na rotina de forma simples."),
        "ru": ("Трекер симптомов ПМС", "Отмечайте выраженность симптомов и их влияние на повседневную жизнь."),
        "hi": ("PMS लक्षण ट्रैकर", "मासिक लक्षणों और दैनिक असर को हल्के तरीके से ट्रैक करें।"),
        "ja": ("PMS 症状トラッカー", "毎月の症状数や生活への影響を記録し、変化を見返しやすくします。"),
        "ar": ("متعقب أعراض ما قبل الدورة", "سجلي شدة الأعراض وتأثيرها على الحياة اليومية بطريقة خفيفة وواضحة.")
    }),
]


def tool_page(lang_code, slug, filename, title, intro):
    lang = LANGS[lang_code]
    sidebar_items = "".join(f"<li>{item}</li>" for item in lang["sidebar_items"])
    return f"""<!doctype html><html lang="{lang['lang_attr']}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{title} | {BRAND}</title><meta name="description" content="{intro}"><meta name="robots" content="index, follow"><link rel="canonical" href="{DOMAIN}/{lang_code}/calculators/{filename}"><link rel="stylesheet" href="/assets/styles.css?{VERSION}"></head><body><header class="topbar"><div class="shell"><a class="brand" href="/{lang_code}/"><span class="brand-mark" aria-hidden="true"></span><span>{BRAND}</span></a><nav class="nav-links"><a href="/{lang_code}/calculators/">{lang['all']}</a></nav></div></header><main class="tool-hero"><div class="shell tool-layout"><article class="panel tool-panel"><div class="breadcrumbs"><a href="/{lang_code}/">{lang['home']}</a><span>/</span><a href="/{lang_code}/calculators/">{lang['calc']}</a><span>/</span><span>{title}</span></div><span class="eyebrow">{lang['eyebrow']}</span><h1>{title}</h1><p>{intro}</p><div data-tool-page="{slug}"></div></article><aside class="panel tool-sidebar"><h2>{lang['sidebar_title']}</h2><ul class="checklist">{sidebar_items}</ul></aside></div></main><script src="/assets/app.js?{VERSION}"></script><script src="/assets/site.js?{VERSION}"></script></body></html>"""


def category_page(lang_code):
    lang = LANGS[lang_code]
    return f"""<!doctype html><html lang="{lang['lang_attr']}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{lang['category_title']} | {BRAND}</title><meta name="description" content="{lang['desc']}"><meta name="robots" content="index,follow"><link rel="canonical" href="{DOMAIN}/{lang_code}/womens-health-tools/"><link rel="stylesheet" href="/assets/styles.css?{VERSION}"></head><body><header class="topbar"><div class="shell"><a class="brand" href="/{lang_code}/"><span class="brand-mark"></span><span>{BRAND}</span></a><nav class="nav-links"><a href="/{lang_code}/">{lang['home']}</a><a href="/{lang_code}/calculators/">{lang['all']}</a></nav></div></header><main class="section-wrap"><div class="shell"><section class="section full panel"><span class="eyebrow">{lang['eyebrow']}</span><h1 class="section-title">{lang['category_title']}</h1><p class="collection-intro">{lang['category_intro']}</p><div class="tool-list" data-tool-directory="women"></div></section></div></main><script src="/assets/app.js?{VERSION}"></script><script src="/assets/site.js?{VERSION}"></script></body></html>"""


def write(path: Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


for lang_code in LANGS:
    write(ROOT / lang_code / "womens-health-tools" / "index.html", category_page(lang_code))
    for slug, filename, text_map in TOOLS:
        title, intro = text_map[lang_code]
        write(ROOT / lang_code / "calculators" / filename, tool_page(lang_code, slug, filename, title, intro))

# Keep zh-Hans mirrored to zh.
write(ROOT / "zh-Hans" / "womens-health-tools" / "index.html", category_page("zh"))
for slug, filename, text_map in TOOLS:
    title, intro = text_map["zh"]
    write(ROOT / "zh-Hans" / "calculators" / filename, tool_page("zh", slug, filename, title, intro).replace('lang="zh-Hans"', 'lang="zh-Hans"'))
