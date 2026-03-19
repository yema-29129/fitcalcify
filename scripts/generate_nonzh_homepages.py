from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERSION = "20260319-31"
BRAND = "Health Toolkit Lab"

LANGS = {
    "en": {
        "lang_attr": "en",
        "title": "Health Calculators and Wellness Tools",
        "description": "A clearer health tools homepage with practical calculators, category-based entry points, and content guidance.",
        "nav": {"home": "Home", "calculators": "All calculators", "disclaimer": "Disclaimer", "language": "Language: English"},
        "hero": {
            "eyebrow": "Daily Health Tools",
            "title": "Simple, more practical health tools for daily use",
            "body": "Health calculators for body metrics, nutrition, sleep, fitness, women's health, and daily habits are organized in one place so you can find the right page faster and understand what each result means.",
            "primary": "Explore all calculators",
            "secondary": "Read site guidance",
            "secondary_href": "/en/disclaimer.html",
            "aside_title": "Quick access",
            "aside_links": [
                ("Body metrics", "/en/calculators/bmi.html"),
                ("Sleep tools", "/en/calculators/sleep-cycle.html"),
                ("Nutrition tools", "/en/calculators/macro-calculator.html"),
                ("Fitness tools", "/en/calculators/running-pace.html"),
                ("Women's health tools", "/en/womens-health-tools/"),
                ("Habit tools", "/en/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "Find the right tool by need",
            "items": [
                ("Body metrics", "BMI, BMR, TDEE, body fat, ideal weight, and waist-to-height tools for everyday health reference.", "/en/calculators/bmi.html", "View this group →"),
                ("Sleep tools", "Sleep cycle, bedtime, wake-up time, naps, and recovery tools for planning more stable routines.", "/en/calculators/sleep-cycle.html", "View this group →"),
                ("Nutrition tools", "Calories, macros, protein, water, sugar, sodium, fiber, and practical meal planning tools.", "/en/calculators/macro-calculator.html", "View this group →"),
                ("Fitness tools", "Heart rate, running pace, one rep max, walking calories, and workout planning tools.", "/en/calculators/running-pace.html", "View this group →"),
                ("Women's health tools", "Cycle, ovulation, fertile window, due date, pregnancy week, and symptom tracking tools.", "/en/womens-health-tools/", "View this group →"),
                ("Lifestyle tools", "Stress, burnout, sitting time, screen time, energy score, and healthy habit tracking tools.", "/en/calculators/healthy-habit-score.html", "View this group →"),
            ],
        },
        "content": {
            "title": "Content center",
            "items": [
                ("Site guidance", "Read how calculator results should be used, where the limitations are, and what kind of reference this site provides.", "/en/disclaimer.html", "Read guidance →"),
                ("About the site", "See what the site covers, how the tools are organized, and what the content is designed to help with.", "/en/about.html", "Learn more →"),
                ("All tools directory", "Every calculator keeps its own page so you can open, bookmark, and revisit the tool directly.", "/en/calculators/", "Open directory →"),
            ],
        },
    },
    "ja": {
        "lang_attr": "ja",
        "title": "健康計算ツール",
        "description": "カテゴリ別に探しやすくした日本語の健康ツールホームページ。",
        "nav": {"home": "ホーム", "calculators": "すべての計算ツール", "disclaimer": "免責事項", "language": "言語: 日本語"},
        "hero": {
            "eyebrow": "毎日使いやすい健康ツール",
            "title": "目的別に探しやすい日本語の健康ツール",
            "body": "身体データ、栄養、睡眠、運動、女性の健康、習慣管理に関する計算ツールをまとめ、必要なページへすばやく進めるように整理しています。",
            "primary": "すべての計算ツールを見る",
            "secondary": "サイトの使い方を見る",
            "secondary_href": "/ja/disclaimer.html",
            "aside_title": "クイックアクセス",
            "aside_links": [
                ("身体データ", "/ja/calculators/bmi.html"),
                ("睡眠ツール", "/ja/calculators/sleep-cycle.html"),
                ("栄養ツール", "/ja/calculators/macro-calculator.html"),
                ("運動ツール", "/ja/calculators/running-pace.html"),
                ("女性の健康", "/ja/womens-health-tools/"),
                ("習慣管理", "/ja/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "目的に合うツールを探す",
            "items": [
                ("身体データ", "BMI、基礎代謝、総消費カロリー、体脂肪率、理想体重、腰身長比などの基礎指標ツール。", "/ja/calculators/bmi.html", "この種類を見る →"),
                ("睡眠ツール", "睡眠周期、就寝時刻、起床時刻、昼寝、睡眠負債などを整理しやすいツール。", "/ja/calculators/sleep-cycle.html", "この種類を見る →"),
                ("栄養ツール", "熱量、マクロ、たんぱく質、水分、糖分、ナトリウム、食事配分の参考ツール。", "/ja/calculators/macro-calculator.html", "この種類を見る →"),
                ("運動ツール", "ランニングペース、心拍ゾーン、1RM、歩行消費、運動量の目安を確認するツール。", "/ja/calculators/running-pace.html", "この種類を見る →"),
                ("女性の健康ツール", "月経、排卵、妊娠しやすい時期、妊娠週数、症状記録を日常参考として見やすく整理。", "/ja/womens-health-tools/", "この種類を見る →"),
                ("生活習慣ツール", "ストレス、燃え尽き、座りすぎ、画面時間、エネルギー状態、習慣スコアの確認ツール。", "/ja/calculators/healthy-habit-score.html", "この種類を見る →"),
            ],
        },
        "content": {
            "title": "内容ガイド",
            "items": [
                ("サイトの使い方", "結果の見方、参考範囲、使いどころ、注意点をまとめた案内ページです。", "/ja/disclaimer.html", "ガイドを見る →"),
                ("運営情報", "サイトの目的、掲載内容の方針、どのような種類の情報を扱うかを確認できます。", "/ja/about.html", "運営情報を見る →"),
                ("すべてのツール一覧", "各計算ツールは独立ページになっているため、直接開いて保存しやすくなっています。", "/ja/calculators/", "一覧を見る →"),
            ],
        },
    },
    "es": {
        "lang_attr": "es",
        "title": "Herramientas de salud y calculadoras",
        "description": "Una portada más completa para encontrar calculadoras de salud por necesidad.",
        "nav": {"home": "Inicio", "calculators": "Todas las calculadoras", "disclaimer": "Aviso legal", "language": "Idioma: Español"},
        "hero": {
            "eyebrow": "Herramientas de salud para cada día",
            "title": "Herramientas de salud más claras y fáciles de explorar",
            "body": "Organizamos calculadoras de cuerpo, nutrición, sueño, fitness, salud femenina y hábitos para que encontrar la herramienta correcta sea más rápido y cada resultado se entienda mejor.",
            "primary": "Ver todas las calculadoras",
            "secondary": "Leer la guía del sitio",
            "secondary_href": "/es/disclaimer.html",
            "aside_title": "Acceso rápido",
            "aside_links": [
                ("Métricas corporales", "/es/calculators/bmi.html"),
                ("Sueño", "/es/calculators/sleep-cycle.html"),
                ("Nutrición", "/es/calculators/macro-calculator.html"),
                ("Fitness", "/es/calculators/running-pace.html"),
                ("Salud femenina", "/es/womens-health-tools/"),
                ("Hábitos", "/es/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "Encuentra la herramienta adecuada por necesidad",
            "items": [
                ("Métricas corporales", "BMI, metabolismo basal, gasto total, grasa corporal, peso ideal y otras referencias básicas.", "/es/calculators/bmi.html", "Ver esta categoría →"),
                ("Herramientas de sueño", "Ciclo de sueño, hora de dormir, hora de despertar, siestas y deuda de sueño.", "/es/calculators/sleep-cycle.html", "Ver esta categoría →"),
                ("Herramientas de nutrición", "Calorías, macros, proteína, agua, azúcar, sodio, fibra y reparto de comidas.", "/es/calculators/macro-calculator.html", "Ver esta categoría →"),
                ("Herramientas fitness", "Ritmo de carrera, zonas de frecuencia, 1RM, calorías al caminar y volumen de entrenamiento.", "/es/calculators/running-pace.html", "Ver esta categoría →"),
                ("Salud femenina", "Ciclo, ovulación, ventana fértil, fecha de parto, semana de embarazo y seguimiento de síntomas.", "/es/womens-health-tools/", "Ver esta categoría →"),
                ("Hábitos y estilo de vida", "Estrés, burnout, energía diaria, tiempo sentado, tiempo de pantalla y hábitos saludables.", "/es/calculators/healthy-habit-score.html", "Ver esta categoría →"),
            ],
        },
        "content": {
            "title": "Centro de contenido",
            "items": [
                ("Cómo usar el sitio", "Lee cómo interpretar resultados, qué límites tienen las calculadoras y cuándo conviene buscar más contexto.", "/es/disclaimer.html", "Abrir guía →"),
                ("Acerca del sitio", "Consulta qué cubre el sitio, cómo se organiza y qué tipo de ayuda práctica intenta ofrecer.", "/es/about.html", "Leer más →"),
                ("Directorio completo", "Cada calculadora mantiene una página independiente para abrirla y volver a ella fácilmente.", "/es/calculators/", "Ver directorio →"),
            ],
        },
    },
    "fr": {
        "lang_attr": "fr",
        "title": "Outils santé et calculateurs",
        "description": "Une page d’accueil plus complète pour trouver les bons outils santé par usage.",
        "nav": {"home": "Accueil", "calculators": "Toutes les calculatrices", "disclaimer": "Clause de non-responsabilité", "language": "Langue : Français"},
        "hero": {
            "eyebrow": "Des outils santé utiles au quotidien",
            "title": "Des outils santé plus clairs et plus faciles à parcourir",
            "body": "Les calculateurs liés au corps, à la nutrition, au sommeil, au fitness, à la santé féminine et aux habitudes sont regroupés pour rendre la bonne page plus facile à trouver et les résultats plus simples à comprendre.",
            "primary": "Voir tous les calculateurs",
            "secondary": "Lire le guide du site",
            "secondary_href": "/fr/disclaimer.html",
            "aside_title": "Accès rapide",
            "aside_links": [
                ("Mesures corporelles", "/fr/calculators/bmi.html"),
                ("Sommeil", "/fr/calculators/sleep-cycle.html"),
                ("Nutrition", "/fr/calculators/macro-calculator.html"),
                ("Fitness", "/fr/calculators/running-pace.html"),
                ("Santé féminine", "/fr/womens-health-tools/"),
                ("Habitudes", "/fr/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "Trouver le bon outil selon le besoin",
            "items": [
                ("Mesures corporelles", "BMI, métabolisme de base, dépense totale, masse grasse, poids idéal et autres repères généraux.", "/fr/calculators/bmi.html", "Voir cette catégorie →"),
                ("Outils sommeil", "Cycle de sommeil, heure de coucher, heure de réveil, sieste et dette de sommeil.", "/fr/calculators/sleep-cycle.html", "Voir cette catégorie →"),
                ("Outils nutrition", "Calories, macros, protéines, eau, sucre, sodium, fibres et répartition des repas.", "/fr/calculators/macro-calculator.html", "Voir cette catégorie →"),
                ("Outils fitness", "Allure de course, zones cardiaques, 1RM, calories en marchant et volume d’entraînement.", "/fr/calculators/running-pace.html", "Voir cette catégorie →"),
                ("Santé féminine", "Cycle, ovulation, fenêtre fertile, date d’accouchement, semaine de grossesse et suivi des symptômes.", "/fr/womens-health-tools/", "Voir cette catégorie →"),
                ("Habitudes et mode de vie", "Stress, burnout, énergie, temps assis, temps d’écran et habitudes saines.", "/fr/calculators/healthy-habit-score.html", "Voir cette catégorie →"),
            ],
        },
        "content": {
            "title": "Centre de contenu",
            "items": [
                ("Guide d’utilisation", "Comprendre comment lire les résultats, quelles sont les limites et dans quels cas il faut plus de contexte.", "/fr/disclaimer.html", "Ouvrir le guide →"),
                ("À propos du site", "Voir ce que couvre le site, comment les outils sont organisés et à quoi sert le contenu.", "/fr/about.html", "En savoir plus →"),
                ("Répertoire complet", "Chaque calculateur possède sa propre page pour être ouvert, enregistré et consulté facilement.", "/fr/calculators/", "Voir le répertoire →"),
            ],
        },
    },
    "de": {
        "lang_attr": "de",
        "title": "Gesundheitsrechner und Tools",
        "description": "Eine vollständigere Startseite, um passende Gesundheitstools schneller zu finden.",
        "nav": {"home": "Start", "calculators": "Alle Rechner", "disclaimer": "Haftungsausschluss", "language": "Sprache: Deutsch"},
        "hero": {
            "eyebrow": "Praktische Gesundheitstools für jeden Tag",
            "title": "Klarere Gesundheitstools, schneller nach Bedarf gefunden",
            "body": "Rechner für Körperdaten, Ernährung, Schlaf, Fitness, Frauengesundheit und Gewohnheiten sind an einem Ort zusammengeführt, damit du schneller die passende Seite findest und Ergebnisse besser einordnen kannst.",
            "primary": "Alle Rechner ansehen",
            "secondary": "Hinweise zur Nutzung lesen",
            "secondary_href": "/de/disclaimer.html",
            "aside_title": "Schnellzugriff",
            "aside_links": [
                ("Körperdaten", "/de/calculators/bmi.html"),
                ("Schlaf", "/de/calculators/sleep-cycle.html"),
                ("Ernährung", "/de/calculators/macro-calculator.html"),
                ("Fitness", "/de/calculators/running-pace.html"),
                ("Frauengesundheit", "/de/womens-health-tools/"),
                ("Gewohnheiten", "/de/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "Das passende Tool nach Bedarf finden",
            "items": [
                ("Körperdaten", "BMI, Grundumsatz, Gesamtverbrauch, Körperfett, Idealgewicht und weitere Grundwerte.", "/de/calculators/bmi.html", "Diese Gruppe ansehen →"),
                ("Schlaf-Tools", "Schlafzyklus, Schlafenszeit, Aufstehzeit, Nickerchen und Schlafschuld im Überblick.", "/de/calculators/sleep-cycle.html", "Diese Gruppe ansehen →"),
                ("Ernährungs-Tools", "Kalorien, Makros, Protein, Wasser, Zucker, Natrium, Ballaststoffe und Mahlzeitenplanung.", "/de/calculators/macro-calculator.html", "Diese Gruppe ansehen →"),
                ("Fitness-Tools", "Laufpace, Herzfrequenzzonen, 1RM, Gehkalorien und Trainingsvolumen.", "/de/calculators/running-pace.html", "Diese Gruppe ansehen →"),
                ("Frauengesundheit", "Zyklus, Eisprung, fruchtbares Fenster, Geburtstermin, Schwangerschaftswoche und Symptome.", "/de/womens-health-tools/", "Diese Gruppe ansehen →"),
                ("Alltag und Gewohnheiten", "Stress, Burnout, Energie, Sitzzeit, Bildschirmzeit und gesunde Gewohnheiten.", "/de/calculators/healthy-habit-score.html", "Diese Gruppe ansehen →"),
            ],
        },
        "content": {
            "title": "Inhaltszentrum",
            "items": [
                ("Hinweise zur Nutzung", "Erfahre, wie Ergebnisse gelesen werden sollten, wo Grenzen liegen und wann zusätzlicher Kontext wichtig ist.", "/de/disclaimer.html", "Hinweise öffnen →"),
                ("Über die Website", "Sieh dir an, welche Themen die Website abdeckt und wie die Inhalte aufgebaut sind.", "/de/about.html", "Mehr erfahren →"),
                ("Kompletter Tool-Katalog", "Jeder Rechner hat eine eigene Seite und lässt sich dadurch direkt öffnen und wiederfinden.", "/de/calculators/", "Zum Verzeichnis →"),
            ],
        },
    },
    "pt": {
        "lang_attr": "pt",
        "title": "Calculadoras e ferramentas de saúde",
        "description": "Uma página inicial mais completa para encontrar ferramentas de saúde por necessidade.",
        "nav": {"home": "Início", "calculators": "Todas as calculadoras", "disclaimer": "Aviso legal", "language": "Idioma: Português"},
        "hero": {
            "eyebrow": "Ferramentas de saúde para o dia a dia",
            "title": "Ferramentas de saúde mais claras e mais fáceis de explorar",
            "body": "Calculadoras de corpo, nutrição, sono, fitness, saúde feminina e hábitos estão organizadas em um só lugar para facilitar a busca pela ferramenta certa e a leitura de cada resultado.",
            "primary": "Ver todas as calculadoras",
            "secondary": "Ler a orientação do site",
            "secondary_href": "/pt/disclaimer.html",
            "aside_title": "Acesso rápido",
            "aside_links": [
                ("Métricas corporais", "/pt/calculators/bmi.html"),
                ("Sono", "/pt/calculators/sleep-cycle.html"),
                ("Nutrição", "/pt/calculators/macro-calculator.html"),
                ("Fitness", "/pt/calculators/running-pace.html"),
                ("Saúde feminina", "/pt/womens-health-tools/"),
                ("Hábitos", "/pt/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "Encontre a ferramenta certa por necessidade",
            "items": [
                ("Métricas corporais", "BMI, metabolismo basal, gasto total, gordura corporal, peso ideal e outras referências básicas.", "/pt/calculators/bmi.html", "Ver esta categoria →"),
                ("Ferramentas de sono", "Ciclo do sono, horário de dormir, horário de acordar, cochilos e dívida de sono.", "/pt/calculators/sleep-cycle.html", "Ver esta categoria →"),
                ("Ferramentas de nutrição", "Calorias, macros, proteína, água, açúcar, sódio, fibra e divisão de refeições.", "/pt/calculators/macro-calculator.html", "Ver esta categoria →"),
                ("Ferramentas fitness", "Ritmo de corrida, zonas cardíacas, 1RM, calorias ao caminhar e volume de treino.", "/pt/calculators/running-pace.html", "Ver esta categoria →"),
                ("Saúde feminina", "Ciclo, ovulação, janela fértil, data do parto, semana da gestação e rastreamento de sintomas.", "/pt/womens-health-tools/", "Ver esta categoria →"),
                ("Hábitos e estilo de vida", "Estresse, burnout, energia diária, tempo sentado, tempo de tela e hábitos saudáveis.", "/pt/calculators/healthy-habit-score.html", "Ver esta categoria →"),
            ],
        },
        "content": {
            "title": "Centro de conteúdo",
            "items": [
                ("Guia de uso", "Entenda como ler os resultados, quais são os limites das ferramentas e quando buscar mais contexto.", "/pt/disclaimer.html", "Abrir guia →"),
                ("Sobre o site", "Veja o que o site cobre, como os conteúdos estão organizados e para que servem.", "/pt/about.html", "Saiba mais →"),
                ("Diretório completo", "Cada calculadora tem sua própria página para abrir, salvar e consultar com facilidade.", "/pt/calculators/", "Ver diretório →"),
            ],
        },
    },
    "ru": {
        "lang_attr": "ru",
        "title": "Калькуляторы и инструменты здоровья",
        "description": "Более полная главная страница, чтобы быстрее находить нужные инструменты здоровья.",
        "nav": {"home": "Главная", "calculators": "Все калькуляторы", "disclaimer": "Отказ от ответственности", "language": "Язык: Русский"},
        "hero": {
            "eyebrow": "Полезные инструменты на каждый день",
            "title": "Более понятные инструменты здоровья для повседневных задач",
            "body": "Калькуляторы по телу, питанию, сну, фитнесу, женскому здоровью и повседневным привычкам собраны в одном месте, чтобы нужную страницу было проще найти, а результат — легче понять.",
            "primary": "Открыть все калькуляторы",
            "secondary": "Прочитать правила использования",
            "secondary_href": "/ru/disclaimer.html",
            "aside_title": "Быстрый доступ",
            "aside_links": [
                ("Показатели тела", "/ru/calculators/bmi.html"),
                ("Сон", "/ru/calculators/sleep-cycle.html"),
                ("Питание", "/ru/calculators/macro-calculator.html"),
                ("Фитнес", "/ru/calculators/running-pace.html"),
                ("Женское здоровье", "/ru/womens-health-tools/"),
                ("Привычки", "/ru/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "Найдите подходящий инструмент по задаче",
            "items": [
                ("Показатели тела", "BMI, базовый обмен, общий расход, жир, идеальный вес и другие базовые ориентиры.", "/ru/calculators/bmi.html", "Открыть эту группу →"),
                ("Инструменты сна", "Цикл сна, время отхода ко сну, пробуждение, дневной сон и долг сна.", "/ru/calculators/sleep-cycle.html", "Открыть эту группу →"),
                ("Инструменты питания", "Калории, макросы, белок, вода, сахар, натрий, клетчатка и распределение приёмов пищи.", "/ru/calculators/macro-calculator.html", "Открыть эту группу →"),
                ("Фитнес-инструменты", "Темп бега, зоны пульса, 1RM, расход при ходьбе и объём тренировки.", "/ru/calculators/running-pace.html", "Открыть эту группу →"),
                ("Женское здоровье", "Цикл, овуляция, фертильное окно, дата родов, неделя беременности и симптомы.", "/ru/womens-health-tools/", "Открыть эту группу →"),
                ("Образ жизни и привычки", "Стресс, выгорание, энергия, сидячее время, экранное время и полезные привычки.", "/ru/calculators/healthy-habit-score.html", "Открыть эту группу →"),
            ],
        },
        "content": {
            "title": "Центр материалов",
            "items": [
                ("Как пользоваться сайтом", "Прочитайте, как интерпретировать результаты, где границы инструментов и когда нужен дополнительный контекст.", "/ru/disclaimer.html", "Открыть руководство →"),
                ("О сайте", "Посмотрите, какие темы охватывает сайт и как организованы материалы и инструменты.", "/ru/about.html", "Узнать больше →"),
                ("Полный каталог", "У каждого калькулятора есть отдельная страница, которую удобно открывать и сохранять.", "/ru/calculators/", "Открыть каталог →"),
            ],
        },
    },
    "hi": {
        "lang_attr": "hi",
        "title": "हेल्थ कैलकुलेटर और टूल",
        "description": "ज़रूरत के हिसाब से सही हेल्थ टूल ढूँढने के लिए अधिक पूरी होमपेज संरचना।",
        "nav": {"home": "मुखपृष्ठ", "calculators": "सभी कैलकुलेटर", "disclaimer": "अस्वीकरण", "language": "भाषा: हिन्दी"},
        "hero": {
            "eyebrow": "रोज़मर्रा उपयोग के हेल्थ टूल",
            "title": "अधिक स्पष्ट और आसानी से खोजे जा सकने वाले हेल्थ टूल",
            "body": "शरीर, पोषण, नींद, फिटनेस, महिला स्वास्थ्य और आदतों से जुड़े कैलकुलेटर एक ही जगह पर रखे गए हैं ताकि सही पेज जल्दी मिल सके और हर परिणाम को बेहतर समझा जा सके।",
            "primary": "सभी कैलकुलेटर देखें",
            "secondary": "साइट गाइड पढ़ें",
            "secondary_href": "/hi/disclaimer.html",
            "aside_title": "त्वरित प्रवेश",
            "aside_links": [
                ("बॉडी मेट्रिक्स", "/hi/calculators/bmi.html"),
                ("नींद टूल", "/hi/calculators/sleep-cycle.html"),
                ("पोषण टूल", "/hi/calculators/macro-calculator.html"),
                ("फिटनेस टूल", "/hi/calculators/running-pace.html"),
                ("महिला स्वास्थ्य", "/hi/womens-health-tools/"),
                ("आदत टूल", "/hi/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "ज़रूरत के हिसाब से सही टूल खोजें",
            "items": [
                ("बॉडी मेट्रिक्स", "BMI, BMR, कुल कैलोरी खर्च, बॉडी फैट, आदर्श वजन और अन्य बुनियादी संदर्भ टूल।", "/hi/calculators/bmi.html", "इस समूह को देखें →"),
                ("नींद टूल", "स्लीप साइकिल, सोने का समय, उठने का समय, नैप और स्लीप डेट से जुड़े टूल।", "/hi/calculators/sleep-cycle.html", "इस समूह को देखें →"),
                ("पोषण टूल", "कैलोरी, मैक्रो, प्रोटीन, पानी, शुगर, सोडियम, फाइबर और भोजन योजना टूल।", "/hi/calculators/macro-calculator.html", "इस समूह को देखें →"),
                ("फिटनेस टूल", "रनिंग पेस, हार्ट रेट ज़ोन, 1RM, वॉकिंग कैलोरी और वर्कआउट वॉल्यूम टूल।", "/hi/calculators/running-pace.html", "इस समूह को देखें →"),
                ("महिला स्वास्थ्य टूल", "चक्र, ओव्यूलेशन, फर्टिलिटी विंडो, ड्यू डेट, प्रेग्नेंसी वीक और लक्षण ट्रैकिंग टूल।", "/hi/womens-health-tools/", "इस समूह को देखें →"),
                ("आदत और जीवनशैली", "स्ट्रेस, बर्नआउट, दैनिक ऊर्जा, बैठने का समय, स्क्रीन समय और हेल्दी हैबिट टूल।", "/hi/calculators/healthy-habit-score.html", "इस समूह को देखें →"),
            ],
        },
        "content": {
            "title": "कंटेंट केंद्र",
            "items": [
                ("साइट गाइड", "जानें कि परिणामों को कैसे पढ़ें, टूल की सीमाएँ क्या हैं और कब अतिरिक्त संदर्भ ज़रूरी होता है।", "/hi/disclaimer.html", "गाइड खोलें →"),
                ("साइट के बारे में", "देखें कि यह साइट किन विषयों को कवर करती है और सामग्री किस तरह व्यवस्थित है।", "/hi/about.html", "और जानें →"),
                ("पूरा टूल डायरेक्टरी", "हर कैलकुलेटर का अपना अलग पेज है, जिससे उसे खोलना और दोबारा पाना आसान रहता है।", "/hi/calculators/", "डायरेक्टरी देखें →"),
            ],
        },
    },
    "ar": {
        "lang_attr": "ar",
        "title": "أدوات وحاسبات الصحة",
        "description": "صفحة رئيسية أكثر اكتمالًا للعثور على أداة الصحة المناسبة حسب الحاجة.",
        "nav": {"home": "الرئيسية", "calculators": "كل الأدوات", "disclaimer": "إخلاء المسؤولية", "language": "اللغة: العربية"},
        "hero": {
            "eyebrow": "أدوات صحية مفيدة يوميًا",
            "title": "أدوات صحية أوضح وأسهل في الوصول حسب الحاجة",
            "body": "جمعنا حاسبات الجسم، والتغذية، والنوم، واللياقة، وصحة المرأة، والعادات اليومية في مكان واحد حتى يصبح الوصول إلى الصفحة المناسبة أسرع وفهم النتائج أسهل.",
            "primary": "عرض كل الأدوات",
            "secondary": "قراءة دليل الموقع",
            "secondary_href": "/ar/disclaimer.html",
            "aside_title": "دخول سريع",
            "aside_links": [
                ("بيانات الجسم", "/ar/calculators/bmi.html"),
                ("أدوات النوم", "/ar/calculators/sleep-cycle.html"),
                ("أدوات التغذية", "/ar/calculators/macro-calculator.html"),
                ("أدوات اللياقة", "/ar/calculators/running-pace.html"),
                ("صحة المرأة", "/ar/womens-health-tools/"),
                ("أدوات العادات", "/ar/calculators/healthy-habit-score.html"),
            ],
        },
        "clusters": {
            "title": "اعثر على الأداة المناسبة حسب الهدف",
            "items": [
                ("بيانات الجسم", "BMI ومعدل الأيض الأساسي والاستهلاك الكلي والدهون والوزن المثالي وغيرها من المؤشرات الأساسية.", "/ar/calculators/bmi.html", "عرض هذه الفئة →"),
                ("أدوات النوم", "دورة النوم ووقت النوم ووقت الاستيقاظ والقيلولة ودين النوم.", "/ar/calculators/sleep-cycle.html", "عرض هذه الفئة →"),
                ("أدوات التغذية", "السعرات والماكروز والبروتين والماء والسكر والصوديوم والألياف وتقسيم الوجبات.", "/ar/calculators/macro-calculator.html", "عرض هذه الفئة →"),
                ("أدوات اللياقة", "وتيرة الجري ومناطق النبض و1RM وسعرات المشي وحجم التمرين.", "/ar/calculators/running-pace.html", "عرض هذه الفئة →"),
                ("صحة المرأة", "الدورة والإباضة ونافذة الخصوبة وموعد الولادة وأسبوع الحمل وتتبع الأعراض.", "/ar/womens-health-tools/", "عرض هذه الفئة →"),
                ("العادات ونمط الحياة", "التوتر والاحتراق والطاقة اليومية ووقت الجلوس ووقت الشاشة والعادات الصحية.", "/ar/calculators/healthy-habit-score.html", "عرض هذه الفئة →"),
            ],
        },
        "content": {
            "title": "مركز المحتوى",
            "items": [
                ("دليل استخدام الموقع", "اقرأ كيف تُفهم النتائج وما حدود الأدوات ومتى تحتاج إلى مزيد من السياق.", "/ar/disclaimer.html", "فتح الدليل →"),
                ("حول الموقع", "اطلع على ما يغطيه الموقع وكيف تم تنظيم الأدوات والمحتوى.", "/ar/about.html", "معرفة المزيد →"),
                ("دليل كل الأدوات", "لكل حاسبة صفحة مستقلة ليسهل فتحها والعودة إليها مباشرة.", "/ar/calculators/", "عرض الدليل →"),
            ],
        },
    },
}


def render_home(lang_code, cfg):
    hero_links = "\n".join(
        f'              <a href="{href}">{label}</a>' for label, href in cfg["hero"]["aside_links"]
    )
    cluster_cards = "\n".join(
        f'              <a class="cluster-card" href="{href}"><strong>{title}</strong><p>{desc}</p><span class="tool-card-link">{cta}</span></a>'
        for title, desc, href, cta in cfg["clusters"]["items"]
    )
    content_cards = "\n".join(
        f'              <a class="article-card" href="{href}"><strong>{title}</strong><p>{desc}</p><span class="tool-card-link">{cta}</span></a>'
        for title, desc, href, cta in cfg["content"]["items"]
    )

    return f"""<!doctype html>
<html lang="{cfg['lang_attr']}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{cfg['title']} | {BRAND}</title>
    <meta name="description" content="{cfg['description']}">
    <link rel="stylesheet" href="/assets/styles.css?{VERSION}">
  </head>
  <body>
    <header class="topbar">
      <div class="shell">
        <a class="brand" href="/{lang_code}/"><span class="brand-mark" aria-hidden="true"></span><span>{BRAND}</span></a>
        <nav class="nav-links">
          <a href="/{lang_code}/">{cfg['nav']['home']}</a>
          <a href="/{lang_code}/calculators/">{cfg['nav']['calculators']}</a>
          <a href="/{lang_code}/disclaimer.html">{cfg['nav']['disclaimer']}</a>
        </nav>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="shell hero-grid">
          <article class="hero-copy panel">
            <span class="eyebrow">{cfg['hero']['eyebrow']}</span>
            <h1 class="hero-main-title">{cfg['hero']['title']}</h1>
            <p>{cfg['hero']['body']}</p>
            <div class="hero-actions">
              <a class="button primary" href="/{lang_code}/calculators/">{cfg['hero']['primary']}</a>
              <a class="button secondary" href="{cfg['hero']['secondary_href']}">{cfg['hero']['secondary']}</a>
            </div>
          </article>
          <aside class="hero-aside panel">
            <h2>{cfg['hero']['aside_title']}</h2>
            <div class="hero-links">
{hero_links}
            </div>
          </aside>
        </div>
      </section>
      <section class="section-wrap">
        <div class="shell">
          <section class="section full panel">
            <h2 class="section-title">{cfg['clusters']['title']}</h2>
            <div class="cluster-grid">
{cluster_cards}
            </div>
          </section>
        </div>
      </section>
      <section class="section-wrap">
        <div class="shell">
          <section class="section full panel">
            <h2>{cfg['content']['title']}</h2>
            <div class="article-grid">
{content_cards}
            </div>
          </section>
        </div>
      </section>
    </main>
    <script src="/assets/site.js?{VERSION}"></script>
  </body>
</html>
"""


for lang_code, cfg in LANGS.items():
    (ROOT / lang_code / "index.html").write_text(render_home(lang_code, cfg), encoding="utf-8")
