from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERSION = "20260319-31"
LANGS = ["en", "zh", "es", "fr", "de", "pt", "ru", "hi", "ja", "ar", "zh-Hans"]

COPY = {
    "zh": {
        "lang": "zh-Hans",
        "home": "首页",
        "calc": "计算器",
        "title": "TDEE 饮食分配规划器",
        "desc": "按 TDEE 快速估算一天怎么吃，把每日总消耗热量换成更容易执行的饮食分配参考。",
        "eyebrow": "营养与热量",
        "intro": "把每日总消耗热量换成更容易执行的六大类饮食分配参考，适合作为日常规划起点。",
        "what": "什么是 TDEE？",
        "what_a": "TDEE 是每日总消耗热量，指你一天大致会消耗多少能量。它通常由基础代谢、日常活动和运动训练三部分组成。",
        "what_b": "如果你还没有现成的 TDEE，可以先去使用 TDEE 计算器，再回到这个页面做饮食分配。",
        "how": "怎么看这页的结果",
        "how_a": "这里给的是便于执行的粗略饮食规划，不是严格医疗处方。结果更适合和体重趋势、蛋白质摄入、训练恢复、饱腹感一起看。",
        "how_b": "每一类都会同时给出份数和大致克数，方便你把抽象数字换成更接近日常采购和做饭的量。",
        "faq": "常见问题",
        "faq_q1": "没有 TDEE 也能用吗？",
        "faq_a1": "不建议直接猜。先用 TDEE 计算器估算，再回到本页会更准确。",
        "faq_q2": "克数为什么只是大致范围？",
        "faq_a2": "不同食材的含水量、熟重和品牌差异很大，所以这里更适合做日常参考，而不是精确称重处方。",
        "faq_q3": "结果和实际食量不一致怎么办？",
        "faq_a3": "先执行 2 到 3 周，再结合体重、围度、训练状态和饱腹感做微调，通常比一次改太多更有效。",
        "side_title": "这页更适合怎么用",
        "side_points": [
            "先用 TDEE 把总热量范围定下来，再看六大类怎么分。",
            "有减脂、维持或增肌目标时，更适合和蛋白质、宏量营养一起看。",
            "如果你处于孕期、慢性病管理或特殊饮食阶段，建议优先咨询专业人士。"
        ],
        "back": "返回全部计算器"
    },
    "en": {
        "lang": "en",
        "home": "Home",
        "calc": "Calculators",
        "title": "TDEE Meal Planner",
        "desc": "Use TDEE to build a clearer daily meal split and turn total daily energy expenditure into a practical food plan.",
        "eyebrow": "Nutrition Planning",
        "intro": "Turn your total daily energy expenditure into a six-group daily eating plan that feels more practical to follow.",
        "what": "What is TDEE?",
        "what_a": "TDEE means Total Daily Energy Expenditure. It is the rough amount of energy you burn across a full day from basic metabolism, everyday movement, and exercise.",
        "what_b": "If you do not already know your TDEE, use the TDEE calculator first and then come back here to turn it into a food split.",
        "how": "How to use the result",
        "how_a": "This page gives a practical eating structure, not a strict medical prescription. It works best when paired with body-weight trend, protein intake, training recovery, and hunger signals.",
        "how_b": "Each food group shows both servings and approximate grams so the output feels closer to shopping, meal prep, and real daily eating.",
        "faq": "FAQ",
        "faq_q1": "Can I use it without a TDEE estimate?",
        "faq_a1": "It is better to estimate your TDEE first instead of guessing. That makes the food split more useful.",
        "faq_q2": "Why are the gram targets only approximate?",
        "faq_a2": "Food water content, cooked weight, and brand differences vary a lot, so these amounts are meant for planning rather than precision dieting.",
        "faq_q3": "What if the result does not match how I usually eat?",
        "faq_a3": "Run it as a starting point for 2 to 3 weeks, then adjust slowly using body weight, waist size, training quality, and appetite.",
        "side_title": "Best way to use this page",
        "side_points": [
            "Start with TDEE so the overall calorie range makes sense.",
            "Use it alongside protein, macro, and body-composition goals.",
            "If you are pregnant, managing a chronic condition, or following a therapeutic diet, professional guidance should come first."
        ],
        "back": "Back to all calculators"
    },
    "ja": {
        "lang": "ja",
        "home": "ホーム",
        "calc": "計算ツール",
        "title": "TDEE 食事配分ツール",
        "desc": "TDEE から1日の食事配分を見やすく整理し、総消費カロリーを日常の食事計画に変えるページです。",
        "eyebrow": "栄養と食事計画",
        "intro": "TDEE を六つの食品グループに分けた、毎日の食事計画の目安に変換します。",
        "what": "TDEE とは？",
        "what_a": "TDEE は 1 日の総消費エネルギー量です。基礎代謝だけでなく、歩行や家事などの日常活動、運動やトレーニングも含めた大まかな合計を指します。",
        "what_b": "まだ TDEE が分からない場合は、先に TDEE 計算ツールを使ってからこのページに戻ると使いやすくなります。",
        "how": "結果の見方",
        "how_a": "このページは実行しやすい食事の目安を示すもので、厳密な医療処方ではありません。体重の変化、たんぱく質量、回復状態と合わせて見ると役立ちます。",
        "how_b": "各グループには份数とおおよそのグラム数が出るので、買い物や作り置きの量に落とし込みやすくなります。",
        "faq": "よくある質問",
        "faq_q1": "TDEE が分からなくても使えますか？",
        "faq_a1": "推測で入れるより、先に TDEE 計算ツールで目安を出してから使う方が実用的です。",
        "faq_q2": "グラム数が大まかなのはなぜですか？",
        "faq_a2": "食材の水分量、熟重、製品差が大きいため、ここでは厳密な秤量より日常の目安を優先しています。",
        "faq_q3": "普段の食事量と合わないときは？",
        "faq_a3": "まず 2〜3 週間ほど試し、体重・ウエスト・空腹感・回復状況を見ながら少しずつ調整するのが現実的です。",
        "side_title": "このページの使い方",
        "side_points": [
            "先に TDEE を決めてから六つの食品グループを見ると全体像がつかみやすくなります。",
            "減量、維持、増量などの目標がある場合は、たんぱく質やマクロと一緒に見るのが実用的です。",
            "妊娠中、慢性疾患の管理中、治療用の食事制限がある場合は、専門家の助言を優先してください。"
        ],
        "back": "すべての計算ツールに戻る"
    },
    "es": {
        "lang": "es",
        "home": "Inicio",
        "calc": "Calculadoras",
        "title": "Planificador de comidas según TDEE",
        "desc": "Convierte tu TDEE en una distribución diaria de alimentos más clara y práctica.",
        "eyebrow": "Nutrición",
        "intro": "Usa tu TDEE para organizar una referencia diaria en seis grupos de alimentos y llevarla mejor al día a día.",
        "what": "¿Qué es el TDEE?",
        "what_a": "El TDEE es el gasto energético total diario. Incluye el metabolismo basal, el movimiento cotidiano y el ejercicio o entrenamiento.",
        "what_b": "Si aún no tienes una estimación de TDEE, conviene calcularla primero y luego volver a esta página para repartir mejor la comida.",
        "how": "Cómo leer el resultado",
        "how_a": "La idea es darte una guía práctica, no una prescripción médica rígida. Conviene compararla con proteína, macros, peso y sensación de hambre.",
        "how_b": "Cada grupo muestra porciones y gramos aproximados para que el resultado sea más útil al comprar, cocinar y repartir comidas.",
        "faq": "Preguntas frecuentes",
        "faq_q1": "¿Se puede usar sin conocer el TDEE?",
        "faq_a1": "Es mejor estimarlo primero. Adivinarlo suele hacer que el reparto sea menos útil.",
        "faq_q2": "¿Por qué los gramos son aproximados?",
        "faq_a2": "El agua, el peso cocido y las diferencias entre alimentos cambian mucho, así que aquí se prioriza una referencia práctica.",
        "faq_q3": "¿Qué hago si no coincide con lo que suelo comer?",
        "faq_a3": "Úsalo durante 2 o 3 semanas y ajusta poco a poco con el peso, la cintura, la recuperación y el apetito.",
        "side_title": "Cómo aprovechar esta página",
        "side_points": [
            "Empieza con un TDEE razonable para que el rango calórico tenga sentido.",
            "Úsalo junto con proteína, macros y objetivo corporal.",
            "Si estás embarazada, controlas una enfermedad crónica o sigues una dieta terapéutica, prioriza la orientación profesional."
        ],
        "back": "Volver a todas las calculadoras"
    },
    "fr": {
        "lang": "fr",
        "home": "Accueil",
        "calc": "Calculateurs",
        "title": "Planificateur de repas selon le TDEE",
        "desc": "Transformez votre TDEE en une répartition alimentaire quotidienne plus claire et plus pratique.",
        "eyebrow": "Nutrition",
        "intro": "Utilisez votre TDEE pour organiser une répartition quotidienne en six groupes alimentaires, plus simple à appliquer.",
        "what": "Qu'est-ce que le TDEE ?",
        "what_a": "Le TDEE correspond à la dépense énergétique quotidienne totale. Il inclut le métabolisme de base, les mouvements du quotidien et l'exercice.",
        "what_b": "Si vous n'avez pas encore de TDEE estimé, il vaut mieux le calculer d'abord puis revenir ici pour structurer vos repas.",
        "how": "Comment lire le résultat",
        "how_a": "Cette page sert de guide pratique et non de prescription médicale stricte. Il est utile de la comparer aux protéines, aux macros, au poids et à la satiété.",
        "how_b": "Chaque groupe affiche des portions et des grammes approximatifs pour rapprocher le résultat des courses, de la cuisine et des repas réels.",
        "faq": "FAQ",
        "faq_q1": "Puis-je l'utiliser sans connaître mon TDEE ?",
        "faq_a1": "Mieux vaut l'estimer d'abord. Deviner le chiffre rend généralement la répartition moins utile.",
        "faq_q2": "Pourquoi les grammes sont-ils approximatifs ?",
        "faq_a2": "La teneur en eau, le poids cuit et les écarts entre aliments varient beaucoup. Ici, l'objectif est une référence pratique.",
        "faq_q3": "Que faire si le résultat ne ressemble pas à ma façon de manger ?",
        "faq_a3": "Essayez ce point de départ pendant 2 à 3 semaines puis ajustez lentement avec le poids, le tour de taille, la récupération et la faim.",
        "side_title": "Meilleure façon d'utiliser cette page",
        "side_points": [
            "Commencez par un TDEE cohérent pour donner du sens à la fourchette calorique.",
            "Lisez le résultat avec les protéines, les macros et l'objectif de composition corporelle.",
            "En cas de grossesse, de maladie chronique ou de régime thérapeutique, l'avis d'un professionnel doit passer d'abord."
        ],
        "back": "Retour à tous les calculateurs"
    },
    "de": {
        "lang": "de",
        "home": "Start",
        "calc": "Rechner",
        "title": "TDEE-Ernährungsplaner",
        "desc": "Wandle deinen TDEE in eine klarere tägliche Ernährungsaufteilung um.",
        "eyebrow": "Ernährung",
        "intro": "Nutze deinen TDEE, um eine alltagstaugliche Aufteilung auf sechs Lebensmittelgruppen zu erhalten.",
        "what": "Was ist TDEE?",
        "what_a": "TDEE bezeichnet den gesamten täglichen Energieverbrauch. Darin stecken Grundumsatz, Alltagsbewegung und Training.",
        "what_b": "Wenn du deinen TDEE noch nicht kennst, ist es sinnvoll, ihn zuerst zu berechnen und danach hier in eine Mahlzeitenstruktur zu übersetzen.",
        "how": "So liest du das Ergebnis",
        "how_a": "Diese Seite ist als praktische Orientierung gedacht, nicht als starre medizinische Vorgabe. Sinnvoll ist der Abgleich mit Protein, Makros, Körpergewicht und Sättigung.",
        "how_b": "Jede Gruppe zeigt Portionen und grobe Grammangaben, damit das Ergebnis näher an Einkauf, Kochen und echten Mahlzeiten bleibt.",
        "faq": "Häufige Fragen",
        "faq_q1": "Kann ich die Seite ohne TDEE nutzen?",
        "faq_a1": "Besser ist es, den Wert zuerst zu schätzen. Raten macht die Aufteilung meist weniger brauchbar.",
        "faq_q2": "Warum sind die Grammangaben nur ungefähr?",
        "faq_a2": "Wassergehalt, Garzustand und Produktunterschiede schwanken stark. Deshalb geht es hier um Alltagstauglichkeit, nicht um Laborgenauigkeit.",
        "faq_q3": "Was, wenn das Ergebnis nicht zu meiner üblichen Ernährung passt?",
        "faq_a3": "Teste es 2 bis 3 Wochen und passe dann langsam mit Gewicht, Taillenumfang, Erholung und Hunger an.",
        "side_title": "So nutzt du die Seite sinnvoll",
        "side_points": [
            "Ein plausibler TDEE macht den gesamten Kalorienrahmen verständlicher.",
            "Am nützlichsten ist die Seite zusammen mit Protein-, Makro- und Körperzielwerten.",
            "Bei Schwangerschaft, chronischen Erkrankungen oder therapeutischer Ernährung sollte fachlicher Rat zuerst kommen."
        ],
        "back": "Zurück zu allen Rechnern"
    },
    "pt": {
        "lang": "pt",
        "home": "Início",
        "calc": "Calculadoras",
        "title": "Planejador alimentar por TDEE",
        "desc": "Transforme seu TDEE em uma divisão diária de alimentos mais clara e prática.",
        "eyebrow": "Nutrição",
        "intro": "Use seu TDEE para organizar uma referência diária em seis grupos de alimentos, mais fácil de aplicar na rotina.",
        "what": "O que é TDEE?",
        "what_a": "TDEE é o gasto energético diário total. Ele inclui metabolismo basal, movimento do dia a dia e exercício.",
        "what_b": "Se você ainda não tem uma estimativa de TDEE, vale calcular primeiro e depois voltar para transformar isso em um plano alimentar.",
        "how": "Como ler o resultado",
        "how_a": "Esta página oferece uma orientação prática, não uma prescrição médica rígida. O ideal é comparar com proteína, macros, peso e saciedade.",
        "how_b": "Cada grupo mostra porções e gramas aproximados para aproximar o resultado da compra, do preparo e das refeições reais.",
        "faq": "Perguntas frequentes",
        "faq_q1": "Posso usar sem saber meu TDEE?",
        "faq_a1": "É melhor estimar antes. Chutar o valor costuma deixar a divisão menos útil.",
        "faq_q2": "Por que os gramas são aproximados?",
        "faq_a2": "Teor de água, peso cozido e diferença entre alimentos variam bastante. Aqui a prioridade é servir como referência prática.",
        "faq_q3": "E se o resultado não combinar com o que eu costumo comer?",
        "faq_a3": "Use como ponto de partida por 2 a 3 semanas e ajuste aos poucos com peso, cintura, recuperação e fome.",
        "side_title": "Melhor forma de usar esta página",
        "side_points": [
            "Comece com um TDEE coerente para dar sentido à faixa calórica.",
            "Use junto com proteína, macros e objetivo corporal.",
            "Se estiver grávida, tratando doença crônica ou seguindo dieta terapêutica, a orientação profissional deve vir primeiro."
        ],
        "back": "Voltar para todas as calculadoras"
    },
    "ru": {
        "lang": "ru",
        "home": "Главная",
        "calc": "Калькуляторы",
        "title": "Планировщик питания по TDEE",
        "desc": "Преобразуйте TDEE в более понятную ежедневную схему питания.",
        "eyebrow": "Питание",
        "intro": "Используйте свой TDEE, чтобы получить более практичное распределение по шести пищевым группам на день.",
        "what": "Что такое TDEE?",
        "what_a": "TDEE — это общий суточный расход энергии. В него входят базовый обмен, повседневная активность и тренировки.",
        "what_b": "Если вы ещё не знаете свой TDEE, сначала оцените его, а затем вернитесь сюда, чтобы превратить его в структуру питания.",
        "how": "Как читать результат",
        "how_a": "Эта страница даёт практический ориентир, а не жёсткое медицинское предписание. Лучше сверять её с белком, макросами, массой тела и чувством сытости.",
        "how_b": "В каждой группе есть и порции, и примерные граммы, чтобы цифры было проще перевести в покупки, готовку и реальные приёмы пищи.",
        "faq": "Частые вопросы",
        "faq_q1": "Можно ли использовать страницу без оценки TDEE?",
        "faq_a1": "Лучше сначала посчитать TDEE. Ориентир наугад обычно делает план менее полезным.",
        "faq_q2": "Почему граммы только примерные?",
        "faq_a2": "Сильно меняются влажность, вес после готовки и различия между продуктами, поэтому здесь важнее практический ориентир, чем точная диета.",
        "faq_q3": "Что делать, если результат не похож на мой обычный рацион?",
        "faq_a3": "Используйте его как старт на 2–3 недели, затем медленно корректируйте по весу, талии, восстановлению и аппетиту.",
        "side_title": "Как лучше использовать страницу",
        "side_points": [
            "Начинайте с вменяемой оценки TDEE, чтобы общий калорийный диапазон имел смысл.",
            "Смотрите на результат вместе с белком, макросами и целью по составу тела.",
            "При беременности, хронических заболеваниях или лечебной диете приоритет должен быть у специалиста."
        ],
        "back": "Назад ко всем калькуляторам"
    },
    "hi": {
        "lang": "hi",
        "home": "होम",
        "calc": "कैलकुलेटर",
        "title": "TDEE भोजन योजना टूल",
        "desc": "अपने TDEE को अधिक स्पष्ट दैनिक भोजन योजना में बदलें।",
        "eyebrow": "पोषण",
        "intro": "अपने TDEE के आधार पर छह खाद्य समूहों में एक व्यावहारिक दैनिक भोजन विभाजन देखें।",
        "what": "TDEE क्या है?",
        "what_a": "TDEE कुल दैनिक ऊर्जा व्यय है। इसमें बेसल जरूरत, रोज़मर्रा की गतिविधि और व्यायाम शामिल होते हैं।",
        "what_b": "यदि आपको अपना TDEE अभी नहीं पता, तो पहले उसे निकालना बेहतर है और फिर यहां लौटकर भोजन विभाजन देखना अधिक उपयोगी रहेगा।",
        "how": "परिणाम को कैसे समझें",
        "how_a": "यह पेज एक व्यावहारिक दिशा देता है, कोई सख्त मेडिकल प्रिस्क्रिप्शन नहीं। इसे प्रोटीन, मैक्रो, वजन और भूख संकेतों के साथ देखना बेहतर है।",
        "how_b": "हर समूह में सर्विंग और अनुमानित ग्राम दोनों दिए जाते हैं ताकि परिणाम खरीदारी, कुकिंग और वास्तविक भोजन से जुड़ सके।",
        "faq": "अक्सर पूछे जाने वाले सवाल",
        "faq_q1": "क्या बिना TDEE जाने इसका उपयोग कर सकता हूँ?",
        "faq_a1": "पहले TDEE का अनुमान लगाना बेहतर है। अंदाज़ा लगाने से योजना कम उपयोगी हो जाती है।",
        "faq_q2": "ग्राम केवल अनुमानित क्यों हैं?",
        "faq_a2": "खाद्य पदार्थों में पानी, पकने के बाद वजन और ब्रांड अंतर काफी बदलते हैं, इसलिए यहां व्यावहारिक संदर्भ दिया गया है।",
        "faq_q3": "अगर यह मेरे सामान्य भोजन से मेल नहीं खाता तो क्या करूँ?",
        "faq_a3": "इसे 2 से 3 हफ्ते शुरुआती बिंदु की तरह उपयोग करें, फिर वजन, कमर, रिकवरी और भूख के आधार पर धीरे-धीरे समायोजित करें।",
        "side_title": "इस पेज का बेहतर उपयोग",
        "side_points": [
            "पहले उचित TDEE रखें ताकि कुल कैलोरी सीमा समझ में आए।",
            "इसे प्रोटीन, मैक्रो और बॉडी कंपोज़िशन लक्ष्य के साथ देखें।",
            "यदि आप गर्भवती हैं, किसी दीर्घकालिक बीमारी का प्रबंधन कर रहे हैं या चिकित्सीय डाइट पर हैं, तो विशेषज्ञ सलाह पहले रखें।"
        ],
        "back": "सभी कैलकुलेटर पर वापस जाएँ"
    },
    "ar": {
        "lang": "ar",
        "home": "الرئيسية",
        "calc": "الأدوات",
        "title": "مخطط الوجبات حسب TDEE",
        "desc": "حوّل قيمة TDEE إلى توزيع غذائي يومي أوضح وأسهل في التطبيق.",
        "eyebrow": "التغذية",
        "intro": "استخدم قيمة TDEE لتحويل احتياجك اليومي إلى توزيع عملي على ست مجموعات غذائية.",
        "what": "ما هو TDEE؟",
        "what_a": "TDEE هو إجمالي استهلاكك اليومي للطاقة. ويشمل احتياجات الجسم الأساسية وحركتك اليومية وتمرينك.",
        "what_b": "إذا لم تكن تعرف قيمة TDEE بعد، فمن الأفضل حسابها أولًا ثم العودة إلى هذه الصفحة لتحويلها إلى خطة غذائية أوضح.",
        "how": "كيف تقرأ النتيجة",
        "how_a": "هذه الصفحة تقدم مرجعًا عمليًا وليست وصفة طبية صارمة. ومن الأفضل قراءتها مع البروتين والماكروز واتجاه الوزن والشهية.",
        "how_b": "كل مجموعة تعرض الحصص والجرامات التقريبية معًا حتى تصبح النتيجة أقرب إلى الشراء والتحضير والأكل اليومي الفعلي.",
        "faq": "الأسئلة الشائعة",
        "faq_q1": "هل يمكنني استخدامها بدون معرفة TDEE؟",
        "faq_a1": "من الأفضل تقدير TDEE أولًا، لأن التخمين يجعل التوزيع أقل فائدة عادةً.",
        "faq_q2": "لماذا الجرامات تقريبية فقط؟",
        "faq_a2": "تختلف الأطعمة كثيرًا في الماء والوزن بعد الطبخ والفروق بين المنتجات، لذلك الهدف هنا مرجع عملي لا وصفة دقيقة جدًا.",
        "faq_q3": "ماذا لو لم تشبه النتيجة طريقتي المعتادة في الأكل؟",
        "faq_a3": "استخدمها كنقطة بداية لمدة 2 إلى 3 أسابيع ثم عدّل ببطء حسب الوزن ومحيط الخصر والاستشفاء والشهية.",
        "side_title": "أفضل طريقة لاستخدام الصفحة",
        "side_points": [
            "ابدأ بقيمة TDEE منطقية حتى يكون نطاق السعرات واضحًا.",
            "اقرأ النتيجة مع البروتين والماكروز وهدفك الجسدي.",
            "إذا كنت في الحمل أو تدير مرضًا مزمنًا أو تتبع نظامًا علاجيًا، فالأولوية يجب أن تكون للتوجيه المهني."
        ],
        "back": "العودة إلى جميع الأدوات"
    }
}


def localize(lang: str, key: str) -> str:
    if lang == "zh-Hans":
        lang = "zh"
    if lang in COPY:
        return COPY[lang][key]
    return COPY["en"][key]


def list_items(lang: str) -> str:
    items = localize(lang, "side_points")
    return "".join(f"<li>{item}</li>" for item in items)


def build_page(lang: str) -> str:
    root_href = f"/{lang}/"
    calc_href = f"/{lang}/calculators/"
    if lang == "zh-Hans":
        root_href = "/zh/"
        calc_href = "/zh/calculators/"
    return f"""<!doctype html>
<html lang="{localize(lang, 'lang')}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{localize(lang, 'title')} | Health Toolkit Lab</title>
    <meta name="description" content="{localize(lang, 'desc')}">
    <link rel="stylesheet" href="/assets/styles.css?{VERSION}">
  </head>
  <body>
    <main class="tool-hero">
      <div class="shell tool-layout">
        <article class="panel tool-panel">
          <div class="breadcrumbs">
            <a href="{root_href}">{localize(lang, 'home')}</a><span>/</span><a href="{calc_href}">{localize(lang, 'calc')}</a><span>/</span><span>{localize(lang, 'title')}</span>
          </div>
          <span class="eyebrow">{localize(lang, 'eyebrow')}</span>
          <h1>{localize(lang, 'title')}</h1>
          <p>{localize(lang, 'intro')}</p>
          <section class="analysis-card">
            <h2>{localize(lang, 'what')}</h2>
            <p>{localize(lang, 'what_a')}</p>
            <p>{localize(lang, 'what_b')}</p>
          </section>
          <div data-meal-planner-page></div>
          <section class="analysis-card">
            <h2>{localize(lang, 'how')}</h2>
            <p>{localize(lang, 'how_a')}</p>
            <p>{localize(lang, 'how_b')}</p>
          </section>
          <section class="analysis-card">
            <h2>{localize(lang, 'faq')}</h2>
            <div class="faq-grid">
              <article class="faq-card"><h3>{localize(lang, 'faq_q1')}</h3><p>{localize(lang, 'faq_a1')}</p></article>
              <article class="faq-card"><h3>{localize(lang, 'faq_q2')}</h3><p>{localize(lang, 'faq_a2')}</p></article>
              <article class="faq-card"><h3>{localize(lang, 'faq_q3')}</h3><p>{localize(lang, 'faq_a3')}</p></article>
            </div>
          </section>
          <p><a href="{calc_href}">{localize(lang, 'back')}</a></p>
        </article>
        <aside class="panel tool-sidebar">
          <h2>{localize(lang, 'side_title')}</h2>
          <ul class="checklist">{list_items(lang)}</ul>
        </aside>
      </div>
    </main>
    <script src="/assets/site.js?{VERSION}"></script>
  </body>
</html>
"""


def main() -> None:
    for lang in LANGS:
        folder = ROOT / lang / "calculators"
        folder.mkdir(parents=True, exist_ok=True)
        (folder / "tdee-meal-planner.html").write_text(build_page(lang), encoding="utf-8")


if __name__ == "__main__":
    main()
