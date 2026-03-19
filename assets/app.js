(function () {
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    athlete: 1.9
  };

  const translations = {
    en: {
      units: "Units",
      metric: "Metric",
      imperial: "Imperial",
      age: "Age",
      sex: "Sex",
      male: "Male",
      female: "Female",
      heightCm: "Height (cm)",
      heightFt: "Height (ft)",
      heightIn: "Height (in)",
      weightKg: "Weight (kg)",
      weightLb: "Weight (lb)",
      waistCm: "Waist (cm)",
      waistIn: "Waist (in)",
      neckCm: "Neck (cm)",
      neckIn: "Neck (in)",
      hipCm: "Hip (cm)",
      hipIn: "Hip (in)",
      activity: "Activity level",
      calculate: "Calculate",
      distanceKm: "Distance (km)",
      distanceMi: "Distance (mi)",
      hours: "Hours",
      minutes: "Minutes",
      bedtime: "Target wake-up time",
      sleepIntro: "Suggestions use 15 minutes to fall asleep plus 90-minute cycles.",
      waterActivity: "Training time (minutes)",
      climate: "Climate",
      climateMild: "Mild",
      climateWarm: "Warm",
      climateHot: "Hot",
      bmiResult: "BMI",
      bmrResult: "BMR",
      tdeeResult: "TDEE",
      bodyFatResult: "Body fat",
      idealWeightResult: "Ideal weight",
      waterResult: "Daily water target",
      sleepResult: "Recommended bedtimes",
      paceResult: "Average pace",
      sedentary: "Sedentary",
      light: "Light exercise",
      moderate: "Moderate exercise",
      active: "Very active",
      athlete: "Athlete / hard training"
    },
    es: { units: "Unidades", metric: "Métrico", imperial: "Imperial", age: "Edad", sex: "Sexo", male: "Hombre", female: "Mujer", heightCm: "Altura (cm)", heightFt: "Altura (ft)", heightIn: "Altura (in)", weightKg: "Peso (kg)", weightLb: "Peso (lb)", waistCm: "Cintura (cm)", waistIn: "Cintura (in)", neckCm: "Cuello (cm)", neckIn: "Cuello (in)", hipCm: "Cadera (cm)", hipIn: "Cadera (in)", activity: "Nivel de actividad", calculate: "Calcular", distanceKm: "Distancia (km)", distanceMi: "Distancia (mi)", hours: "Horas", minutes: "Minutos", bedtime: "Hora objetivo para despertar", sleepIntro: "Las sugerencias usan 15 minutos para dormir y ciclos de 90 minutos.", waterActivity: "Tiempo de ejercicio (minutos)", climate: "Clima", climateMild: "Templado", climateWarm: "Cálido", climateHot: "Caluroso", bmiResult: "IMC", bmrResult: "TMB", tdeeResult: "Gasto diario", bodyFatResult: "Grasa corporal", idealWeightResult: "Peso ideal", waterResult: "Objetivo diario de agua", sleepResult: "Horas recomendadas para dormir", paceResult: "Ritmo promedio", sedentary: "Sedentario", light: "Ejercicio ligero", moderate: "Ejercicio moderado", active: "Muy activo", athlete: "Atleta / entrenamiento intenso" },
    fr: { units: "Unités", metric: "Métrique", imperial: "Impérial", age: "Âge", sex: "Sexe", male: "Homme", female: "Femme", heightCm: "Taille (cm)", heightFt: "Taille (ft)", heightIn: "Taille (in)", weightKg: "Poids (kg)", weightLb: "Poids (lb)", waistCm: "Tour de taille (cm)", waistIn: "Tour de taille (in)", neckCm: "Cou (cm)", neckIn: "Cou (in)", hipCm: "Hanches (cm)", hipIn: "Hanches (in)", activity: "Niveau d'activité", calculate: "Calculer", distanceKm: "Distance (km)", distanceMi: "Distance (mi)", hours: "Heures", minutes: "Minutes", bedtime: "Heure de réveil visée", sleepIntro: "Les suggestions utilisent 15 minutes d'endormissement et des cycles de 90 minutes.", waterActivity: "Temps d'entraînement (minutes)", climate: "Climat", climateMild: "Modéré", climateWarm: "Chaud", climateHot: "Très chaud", bmiResult: "IMC", bmrResult: "MB", tdeeResult: "Dépense quotidienne", bodyFatResult: "Masse grasse", idealWeightResult: "Poids idéal", waterResult: "Objectif d'hydratation", sleepResult: "Heures de coucher recommandées", paceResult: "Allure moyenne", sedentary: "Sédentaire", light: "Exercice léger", moderate: "Exercice modéré", active: "Très actif", athlete: "Athlète / entraînement intense" },
    de: { units: "Einheiten", metric: "Metrisch", imperial: "Imperial", age: "Alter", sex: "Geschlecht", male: "Männlich", female: "Weiblich", heightCm: "Größe (cm)", heightFt: "Größe (ft)", heightIn: "Größe (in)", weightKg: "Gewicht (kg)", weightLb: "Gewicht (lb)", waistCm: "Taille (cm)", waistIn: "Taille (in)", neckCm: "Hals (cm)", neckIn: "Hals (in)", hipCm: "Hüfte (cm)", hipIn: "Hüfte (in)", activity: "Aktivitätsniveau", calculate: "Berechnen", distanceKm: "Distanz (km)", distanceMi: "Distanz (mi)", hours: "Stunden", minutes: "Minuten", bedtime: "Gewünschte Aufwachzeit", sleepIntro: "Empfehlungen nutzen 15 Minuten Einschlafzeit plus 90-Minuten-Zyklen.", waterActivity: "Trainingszeit (Minuten)", climate: "Klima", climateMild: "Mild", climateWarm: "Warm", climateHot: "Heiß", bmiResult: "BMI", bmrResult: "BMR", tdeeResult: "Tagesbedarf", bodyFatResult: "Körperfett", idealWeightResult: "Idealgewicht", waterResult: "Tägliches Trinkziel", sleepResult: "Empfohlene Schlafenszeiten", paceResult: "Durchschnittstempo", sedentary: "Sitzend", light: "Leichte Aktivität", moderate: "Mittlere Aktivität", active: "Sehr aktiv", athlete: "Athlet / intensives Training" },
    pt: { units: "Unidades", metric: "Métrico", imperial: "Imperial", age: "Idade", sex: "Sexo", male: "Masculino", female: "Feminino", heightCm: "Altura (cm)", heightFt: "Altura (ft)", heightIn: "Altura (in)", weightKg: "Peso (kg)", weightLb: "Peso (lb)", waistCm: "Cintura (cm)", waistIn: "Cintura (in)", neckCm: "Pescoço (cm)", neckIn: "Pescoço (in)", hipCm: "Quadril (cm)", hipIn: "Quadril (in)", activity: "Nível de atividade", calculate: "Calcular", distanceKm: "Distância (km)", distanceMi: "Distância (mi)", hours: "Horas", minutes: "Minutos", bedtime: "Horário desejado para acordar", sleepIntro: "As sugestões usam 15 minutos para adormecer e ciclos de 90 minutos.", waterActivity: "Tempo de treino (minutos)", climate: "Clima", climateMild: "Ameno", climateWarm: "Quente", climateHot: "Muito quente", bmiResult: "IMC", bmrResult: "TMB", tdeeResult: "Gasto diário", bodyFatResult: "Gordura corporal", idealWeightResult: "Peso ideal", waterResult: "Meta diária de água", sleepResult: "Horários recomendados para dormir", paceResult: "Ritmo médio", sedentary: "Sedentário", light: "Exercício leve", moderate: "Exercício moderado", active: "Muito ativo", athlete: "Atleta / treino intenso" },
    ru: { units: "Единицы", metric: "Метрические", imperial: "Имперские", age: "Возраст", sex: "Пол", male: "Мужской", female: "Женский", heightCm: "Рост (см)", heightFt: "Рост (фт)", heightIn: "Рост (дюймы)", weightKg: "Вес (кг)", weightLb: "Вес (фунты)", waistCm: "Талия (см)", waistIn: "Талия (дюймы)", neckCm: "Шея (см)", neckIn: "Шея (дюймы)", hipCm: "Бёдра (см)", hipIn: "Бёдра (дюймы)", activity: "Уровень активности", calculate: "Рассчитать", distanceKm: "Расстояние (км)", distanceMi: "Расстояние (мили)", hours: "Часы", minutes: "Минуты", bedtime: "Желаемое время подъёма", sleepIntro: "Расчёт использует 15 минут на засыпание и циклы по 90 минут.", waterActivity: "Время тренировки (минуты)", climate: "Климат", climateMild: "Умеренный", climateWarm: "Тёплый", climateHot: "Жаркий", bmiResult: "ИМТ", bmrResult: "Базовый обмен", tdeeResult: "Суточный расход", bodyFatResult: "Жир в организме", idealWeightResult: "Идеальный вес", waterResult: "Дневная норма воды", sleepResult: "Рекомендуемое время сна", paceResult: "Средний темп", sedentary: "Сидячий", light: "Лёгкая активность", moderate: "Умеренная активность", active: "Очень активный", athlete: "Атлет / интенсивные тренировки" },
    hi: { units: "इकाइयाँ", metric: "मेट्रिक", imperial: "इम्पीरियल", age: "आयु", sex: "लिंग", male: "पुरुष", female: "महिला", heightCm: "लंबाई (सेमी)", heightFt: "लंबाई (फुट)", heightIn: "लंबाई (इंच)", weightKg: "वज़न (किग्रा)", weightLb: "वज़न (पाउंड)", waistCm: "कमर (सेमी)", waistIn: "कमर (इंच)", neckCm: "गर्दन (सेमी)", neckIn: "गर्दन (इंच)", hipCm: "कूल्हा (सेमी)", hipIn: "कूल्हा (इंच)", activity: "गतिविधि स्तर", calculate: "गणना करें", distanceKm: "दूरी (किमी)", distanceMi: "दूरी (मील)", hours: "घंटे", minutes: "मिनट", bedtime: "उठने का लक्ष्य समय", sleepIntro: "सुझाव 15 मिनट सोने का समय और 90 मिनट के चक्र पर आधारित हैं।", waterActivity: "व्यायाम समय (मिनट)", climate: "मौसम", climateMild: "सामान्य", climateWarm: "गरम", climateHot: "बहुत गरम", bmiResult: "BMI", bmrResult: "BMR", tdeeResult: "दैनिक खर्च", bodyFatResult: "शरीर की चर्बी", idealWeightResult: "आदर्श वज़न", waterResult: "दैनिक पानी लक्ष्य", sleepResult: "सुझाया गया सोने का समय", paceResult: "औसत पेस", sedentary: "बैठे रहने वाला", light: "हल्का व्यायाम", moderate: "मध्यम व्यायाम", active: "बहुत सक्रिय", athlete: "एथलीट / कठिन प्रशिक्षण" },
    ja: { units: "単位", metric: "メートル法", imperial: "ヤード・ポンド法", age: "年齢", sex: "性別", male: "男性", female: "女性", heightCm: "身長 (cm)", heightFt: "身長 (ft)", heightIn: "身長 (in)", weightKg: "体重 (kg)", weightLb: "体重 (lb)", waistCm: "ウエスト (cm)", waistIn: "ウエスト (in)", neckCm: "首回り (cm)", neckIn: "首回り (in)", hipCm: "ヒップ (cm)", hipIn: "ヒップ (in)", activity: "活動レベル", calculate: "計算する", distanceKm: "距離 (km)", distanceMi: "距離 (mi)", hours: "時間", minutes: "分", bedtime: "起床したい時刻", sleepIntro: "入眠 15 分と 90 分サイクルを前提に提案します。", waterActivity: "運動時間 (分)", climate: "気候", climateMild: "穏やか", climateWarm: "暖かい", climateHot: "暑い", bmiResult: "BMI", bmrResult: "基礎代謝量", tdeeResult: "推定総消費カロリー", bodyFatResult: "体脂肪率", idealWeightResult: "目安体重", waterResult: "1日の水分目標", sleepResult: "おすすめ就寝時刻", paceResult: "平均ペース", sedentary: "座りがち", light: "軽い運動", moderate: "中程度の運動", active: "かなり活動的", athlete: "アスリート / 高強度" },
    ar: { units: "الوحدات", metric: "متري", imperial: "إمبراطوري", age: "العمر", sex: "الجنس", male: "ذكر", female: "أنثى", heightCm: "الطول (سم)", heightFt: "الطول (قدم)", heightIn: "الطول (بوصة)", weightKg: "الوزن (كجم)", weightLb: "الوزن (رطل)", waistCm: "محيط الخصر (سم)", waistIn: "محيط الخصر (بوصة)", neckCm: "محيط الرقبة (سم)", neckIn: "محيط الرقبة (بوصة)", hipCm: "محيط الورك (سم)", hipIn: "محيط الورك (بوصة)", activity: "مستوى النشاط", calculate: "احسب", distanceKm: "المسافة (كم)", distanceMi: "المسافة (ميل)", hours: "الساعات", minutes: "الدقائق", bedtime: "وقت الاستيقاظ المستهدف", sleepIntro: "يتم الحساب على أساس 15 دقيقة للنوم ودورات مدتها 90 دقيقة.", waterActivity: "مدة التمرين (دقائق)", climate: "المناخ", climateMild: "معتدل", climateWarm: "دافئ", climateHot: "حار", bmiResult: "مؤشر كتلة الجسم", bmrResult: "معدل الأيض الأساسي", tdeeResult: "الاحتياج اليومي", bodyFatResult: "نسبة الدهون", idealWeightResult: "الوزن المثالي", waterResult: "هدف الماء اليومي", sleepResult: "أوقات النوم المقترحة", paceResult: "متوسط الوتيرة", sedentary: "قليل الحركة", light: "نشاط خفيف", moderate: "نشاط متوسط", active: "نشاط عالٍ", athlete: "رياضي / تدريب قوي" },
    zh: { units: "单位", metric: "公制", imperial: "英制", age: "年龄", sex: "性别", male: "男性", female: "女性", heightCm: "身高 (cm)", heightFt: "身高 (ft)", heightIn: "身高 (in)", weightKg: "体重 (kg)", weightLb: "体重 (lb)", waistCm: "腰围 (cm)", waistIn: "腰围 (in)", neckCm: "颈围 (cm)", neckIn: "颈围 (in)", hipCm: "臀围 (cm)", hipIn: "臀围 (in)", activity: "活动水平", calculate: "开始计算", distanceKm: "距离 (km)", distanceMi: "距离 (mi)", hours: "小时", minutes: "分钟", bedtime: "目标起床时间", sleepIntro: "按入睡 15 分钟和 90 分钟睡眠周期估算。", waterActivity: "运动时长 (分钟)", climate: "气候", climateMild: "温和", climateWarm: "偏热", climateHot: "炎热", bmiResult: "BMI", bmrResult: "基础代谢", tdeeResult: "每日总消耗", bodyFatResult: "体脂率", idealWeightResult: "理想体重", waterResult: "每日饮水目标", sleepResult: "建议入睡时间", paceResult: "平均配速", sedentary: "久坐", light: "轻量运动", moderate: "中等运动", active: "高活动量", athlete: "运动员 / 高强度训练" }
  };

  const phraseMap = {
    "Free & Accurate": { es: "Gratis y preciso", fr: "Gratuit et précis", de: "Kostenlos und präzise", pt: "Grátis e preciso", ru: "Бесплатно и точно", hi: "मुफ़्त और सटीक", ja: "無料・高精度", ar: "مجاني ودقيق" },
    "No signup required": { es: "Sin registro", fr: "Sans inscription", de: "Keine Anmeldung nötig", pt: "Sem cadastro", ru: "Без регистрации", hi: "साइनअप आवश्यक नहीं", ja: "登録不要", ar: "لا يحتاج إلى تسجيل" },
    "Used by 100,000+ users": { es: "Usado por más de 100.000 usuarios", fr: "Utilisé par plus de 100 000 utilisateurs", de: "Von über 100.000 Nutzern verwendet", pt: "Usado por mais de 100 mil usuários", ru: "Используют более 100 000 человек", hi: "1,00,000+ उपयोगकर्ताओं द्वारा उपयोग", ja: "10万人以上が利用", ar: "يستخدمه أكثر من 100,000 شخص" },
    "Built for practical daily use": { es: "Pensado para el uso diario", fr: "Conçu pour un usage quotidien", de: "Für den täglichen Gebrauch gemacht", pt: "Feito para o uso diário", ru: "Подходит для повседневного использования", hi: "रोज़मर्रा के उपयोग के लिए बनाया गया", ja: "毎日使いやすい設計", ar: "مصمم للاستخدام اليومي" },
    "Your BMI Result": { es: "Tu resultado de IMC", fr: "Votre résultat IMC", de: "Ihr BMI-Ergebnis", pt: "Seu resultado de IMC", ru: "Ваш результат ИМТ", hi: "आपका BMI परिणाम", ja: "あなたの BMI 結果", ar: "نتيجة مؤشر كتلة الجسم" },
    "Your result": { es: "Tu resultado", fr: "Votre résultat", de: "Ihr Ergebnis", pt: "Seu resultado", ru: "Ваш результат", hi: "आपका परिणाम", ja: "あなたの結果", ar: "نتيجتك" },
    "Run the calculator to see your category, visual position, interpretation, and next steps.": { es: "Calcula para ver tu categoría, tu posición visual, la interpretación y los siguientes pasos.", fr: "Lancez le calcul pour voir votre catégorie, votre position visuelle, l'interprétation et la suite.", de: "Berechnen Sie den Wert, um Kategorie, visuelle Position, Einordnung und nächste Schritte zu sehen.", pt: "Faça o cálculo para ver a categoria, a posição visual, a interpretação e os próximos passos.", ru: "Запустите расчёт, чтобы увидеть категорию, положение на шкале, объяснение и следующие шаги.", hi: "परिणाम देखने के लिए गणना करें: श्रेणी, दृश्य स्थिति, व्याख्या और अगले कदम।", ja: "計算すると、分類、可視化位置、解釈、次のアクションが表示されます。", ar: "قم بالحساب لرؤية الفئة والموقع على المقياس والتفسير والخطوات التالية." },
    "Waiting for input": { es: "Esperando datos", fr: "En attente des données", de: "Warte auf Eingabe", pt: "Aguardando dados", ru: "Ожидание данных", hi: "इनपुट की प्रतीक्षा", ja: "入力待ち", ar: "بانتظار الإدخال" },
    "Current result": { es: "Resultado actual", fr: "Résultat actuel", de: "Aktuelles Ergebnis", pt: "Resultado atual", ru: "Текущий результат", hi: "वर्तमान परिणाम", ja: "現在の結果", ar: "النتيجة الحالية" },
    "Enter your height and weight to get category, risk notes, and personalized suggestions.": { es: "Introduce tu altura y peso para ver la categoría, notas de riesgo y sugerencias personalizadas.", fr: "Saisissez votre taille et votre poids pour voir la catégorie, les points de risque et les conseils personnalisés.", de: "Geben Sie Größe und Gewicht ein, um Kategorie, Risikohinweise und persönliche Vorschläge zu sehen.", pt: "Informe altura e peso para ver categoria, alertas de risco e sugestões personalizadas.", ru: "Введите рост и вес, чтобы увидеть категорию, риски и персональные рекомендации.", hi: "अपनी लंबाई और वजन दर्ज करें, ताकि श्रेणी, जोखिम संकेत और व्यक्तिगत सुझाव मिल सकें।", ja: "身長と体重を入力すると、分類、リスクの目安、個別の提案が表示されます。", ar: "أدخل الطول والوزن لمعرفة الفئة وملاحظات المخاطر والاقتراحات الشخصية." },
    "Deeper analysis": { es: "Análisis más profundo", fr: "Analyse approfondie", de: "Tiefere Analyse", pt: "Análise detalhada", ru: "Более глубокий анализ", hi: "विस्तृत विश्लेषण", ja: "詳しい分析", ar: "تحليل أعمق" },
    "Explanation": { es: "Explicación", fr: "Explication", de: "Erklärung", pt: "Explicação", ru: "Объяснение", hi: "व्याख्या", ja: "解説", ar: "الشرح" },
    "FAQ": { es: "Preguntas frecuentes", fr: "FAQ", de: "FAQ", pt: "FAQ", ru: "FAQ", hi: "अक्सर पूछे जाने वाले सवाल", ja: "よくある質問", ar: "الأسئلة الشائعة" },
    "Related tools": { es: "Herramientas relacionadas", fr: "Outils associés", de: "Verwandte Tools", pt: "Ferramentas relacionadas", ru: "Похожие инструменты", hi: "संबंधित टूल", ja: "関連ツール", ar: "أدوات ذات صلة" },
    "More options": { es: "Más opciones", fr: "Plus d'options", de: "Mehr Optionen", pt: "Mais opções", ru: "Дополнительные возможности", hi: "और विकल्प", ja: "追加オプション", ar: "خيارات إضافية" },
    "Save Your Result": { es: "Guardar resultado", fr: "Enregistrer le résultat", de: "Ergebnis speichern", pt: "Salvar resultado", ru: "Сохранить результат", hi: "परिणाम सहेजें", ja: "結果を保存", ar: "احفظ النتيجة" },
    "Download PDF Report": { es: "Descargar informe PDF", fr: "Télécharger le PDF", de: "PDF-Bericht herunterladen", pt: "Baixar relatório PDF", ru: "Скачать PDF-отчёт", hi: "PDF रिपोर्ट डाउनलोड करें", ja: "PDF レポートをダウンロード", ar: "تنزيل تقرير PDF" },
    "Share with Friends": { es: "Compartir con amigos", fr: "Partager avec des amis", de: "Mit Freunden teilen", pt: "Compartilhar com amigos", ru: "Поделиться с друзьями", hi: "दोस्तों के साथ साझा करें", ja: "友だちに共有", ar: "شارك مع الأصدقاء" },
    "Personal Info": { es: "Datos personales", fr: "Informations personnelles", de: "Persönliche Daten", pt: "Informações pessoais", ru: "Личные данные", hi: "व्यक्तिगत जानकारी", ja: "基本情報", ar: "البيانات الشخصية" },
    "Lifestyle": { es: "Estilo de vida", fr: "Mode de vie", de: "Lebensstil", pt: "Estilo de vida", ru: "Образ жизни", hi: "जीवनशैली", ja: "生活習慣", ar: "نمط الحياة" },
    "Switch between metric and imperial. Age and gender are optional enhancers.": { es: "Cambia entre sistema métrico e imperial. La edad y el sexo son opcionales.", fr: "Basculez entre métrique et impérial. L'âge et le sexe sont optionnels.", de: "Wechseln Sie zwischen metrisch und imperial. Alter und Geschlecht sind optional.", pt: "Alterne entre métrico e imperial. Idade e sexo são opcionais.", ru: "Переключайтесь между метрической и имперской системой. Возраст и пол — необязательные поля.", hi: "मेट्रिक और इम्पीरियल के बीच बदलें। आयु और लिंग वैकल्पिक हैं।", ja: "メートル法とヤード・ポンド法を切り替えられます。年齢と性別は任意です。", ar: "يمكن التبديل بين المتري والإمبراطوري. العمر والجنس اختياريان." },
    "These options help make the recommendations more relevant.": { es: "Estas opciones ayudan a que las recomendaciones sean más relevantes.", fr: "Ces options rendent les recommandations plus pertinentes.", de: "Diese Optionen machen die Empfehlungen passender.", pt: "Essas opções tornam as recomendações mais relevantes.", ru: "Эти параметры делают рекомендации более точными.", hi: "ये विकल्प सुझावों को अधिक प्रासंगिक बनाते हैं।", ja: "これらの項目により、提案が今の状況に合いやすくなります。", ar: "تجعل هذه الخيارات التوصيات أكثر ملاءمة." },
    "Activity Level": { es: "Nivel de actividad", fr: "Niveau d'activité", de: "Aktivitätsniveau", pt: "Nível de atividade", ru: "Уровень активности", hi: "गतिविधि स्तर", ja: "活動レベル", ar: "مستوى النشاط" },
    "Goal": { es: "Objetivo", fr: "Objectif", de: "Ziel", pt: "Objetivo", ru: "Цель", hi: "लक्ष्य", ja: "目標", ar: "الهدف" },
    "Calculate Now": { es: "Calcular ahora", fr: "Calculer maintenant", de: "Jetzt berechnen", pt: "Calcular agora", ru: "Рассчитать сейчас", hi: "अभी गणना करें", ja: "今すぐ計算", ar: "احسب الآن" },
    "Your data is private and not stored.": { es: "Tus datos son privados y no se almacenan.", fr: "Vos données restent privées et ne sont pas stockées.", de: "Ihre Daten bleiben privat und werden nicht gespeichert.", pt: "Seus dados são privados e não são armazenados.", ru: "Ваши данные приватны и не сохраняются.", hi: "आपका डेटा निजी है और सहेजा नहीं जाता।", ja: "入力データは保存されません。", ar: "بياناتك خاصة ولا يتم حفظها." },
    "Enter your details": { es: "Introduce tus datos", fr: "Entrez vos données", de: "Geben Sie Ihre Daten ein", pt: "Informe seus dados", ru: "Введите данные", hi: "अपनी जानकारी दर्ज करें", ja: "入力情報", ar: "أدخل بياناتك" },
    "After calculation, this section shows the result, interpretation, and practical next steps.": { es: "Después del cálculo, aquí verás el resultado, la interpretación y los siguientes pasos prácticos.", fr: "Après le calcul, cette section affiche le résultat, l'interprétation et les prochaines étapes.", de: "Nach der Berechnung sehen Sie hier Ergebnis, Einordnung und praktische nächste Schritte.", pt: "Após o cálculo, esta seção mostra o resultado, a interpretação e os próximos passos.", ru: "После расчёта здесь появятся результат, объяснение и практические следующие шаги.", hi: "गणना के बाद इस भाग में परिणाम, व्याख्या और अगले व्यावहारिक कदम दिखेंगे।", ja: "計算後、このセクションに結果、解釈、実践的な次の一歩が表示されます。", ar: "بعد الحساب سيعرض هذا القسم النتيجة والتفسير والخطوات العملية التالية." },
    "Fill in the inputs to unlock result guidance and related tools.": { es: "Completa los datos para ver la guía del resultado y las herramientas relacionadas.", fr: "Remplissez les champs pour afficher les explications du résultat et les outils associés.", de: "Füllen Sie die Eingaben aus, um Ergebnis-Erklärungen und verwandte Tools zu sehen.", pt: "Preencha os dados para ver a explicação do resultado e ferramentas relacionadas.", ru: "Заполните поля, чтобы увидеть пояснения к результату и связанные инструменты.", hi: "परिणाम की व्याख्या और संबंधित टूल देखने के लिए जानकारी भरें।", ja: "項目を入力すると、結果の説明と関連ツールが表示されます。", ar: "أكمل الحقول لعرض شرح النتيجة والأدوات ذات الصلة." },
    "Interpretation": { es: "Interpretación", fr: "Interprétation", de: "Einordnung", pt: "Interpretação", ru: "Интерпретация", hi: "व्याख्या", ja: "結果の見方", ar: "التفسير" },
    "Next step": { es: "Siguiente paso", fr: "Prochaine étape", de: "Nächster Schritt", pt: "Próximo passo", ru: "Следующий шаг", hi: "अगला कदम", ja: "次のステップ", ar: "الخطوة التالية" },
    "Apply it for 2 to 3 weeks, then adjust": { es: "Aplícalo durante 2 a 3 semanas y luego ajusta", fr: "Appliquez-le pendant 2 à 3 semaines puis ajustez", de: "2 bis 3 Wochen anwenden und dann anpassen", pt: "Use por 2 a 3 semanas e depois ajuste", ru: "Применяйте 2–3 недели, затем корректируйте", hi: "2 से 3 सप्ताह अपनाएँ, फिर समायोजित करें", ja: "2〜3週間続けてから調整", ar: "طبّقه لمدة 2 إلى 3 أسابيع ثم عدّل" },
    "Best use": { es: "Uso recomendado", fr: "Utilisation idéale", de: "Am besten geeignet für", pt: "Melhor uso", ru: "Лучшее применение", hi: "सबसे अच्छा उपयोग", ja: "向いている使い方", ar: "أفضل استخدام" },
    "Recommendation": { es: "Sugerencia", fr: "Recommandation", de: "Empfehlung", pt: "Recomendação", ru: "Рекомендация", hi: "सुझाव", ja: "おすすめ", ar: "التوصية" },
    "What is BMI?": { es: "¿Qué es el IMC?", fr: "Qu'est-ce que l'IMC ?", de: "Was ist der BMI?", pt: "O que é IMC?", ru: "Что такое ИМТ?", hi: "BMI क्या है?", ja: "BMI とは？", ar: "ما هو مؤشر كتلة الجسم؟" },
    "How is BMI calculated?": { es: "¿Cómo se calcula el IMC?", fr: "Comment calcule-t-on l'IMC ?", de: "Wie wird der BMI berechnet?", pt: "Como o IMC é calculado?", ru: "Как рассчитывается ИМТ?", hi: "BMI की गणना कैसे होती है?", ja: "BMI の計算方法", ar: "كيف يتم حساب مؤشر كتلة الجسم؟" },
    "BMI categories": { es: "Categorías de IMC", fr: "Catégories d'IMC", de: "BMI-Kategorien", pt: "Categorias de IMC", ru: "Категории ИМТ", hi: "BMI श्रेणियाँ", ja: "BMI の区分", ar: "فئات مؤشر كتلة الجسم" },
    "Quick read": { es: "Lectura rápida", fr: "Lecture rapide", de: "Kurzfazit", pt: "Leitura rápida", ru: "Краткий вывод", hi: "त्वरित सार", ja: "ひとことで見る", ar: "قراءة سريعة" },
    "Risk notes": { es: "Notas de riesgo", fr: "Points de risque", de: "Risikohinweise", pt: "Alertas de risco", ru: "Риски", hi: "जोखिम संकेत", ja: "リスクの目安", ar: "ملاحظات المخاطر" },
    "Personalized suggestions": { es: "Sugerencias personalizadas", fr: "Conseils personnalisés", de: "Persönliche Vorschläge", pt: "Sugestões personalizadas", ru: "Персональные рекомендации", hi: "व्यक्तिगत सुझाव", ja: "個別の提案", ar: "اقتراحات مخصصة" },
    "Ideal weight range": { es: "Rango de peso ideal", fr: "Plage de poids idéale", de: "Idealgewichtsspanne", pt: "Faixa de peso ideal", ru: "Диапазон идеального веса", hi: "आदर्श वजन सीमा", ja: "目安体重の範囲", ar: "نطاق الوزن المثالي" },
    "Estimated daily calories": { es: "Calorías diarias estimadas", fr: "Calories quotidiennes estimées", de: "Geschätzte Tageskalorien", pt: "Calorias diárias estimadas", ru: "Оценка суточных калорий", hi: "अनुमानित दैनिक कैलोरी", ja: "推定維持カロリー", ar: "السعرات اليومية المقدّرة" },
    "Weight change plan": { es: "Plan de cambio de peso", fr: "Plan d'évolution du poids", de: "Plan zur Gewichtsveränderung", pt: "Plano de mudança de peso", ru: "План изменения веса", hi: "वजन परिवर्तन योजना", ja: "体重変化プラン", ar: "خطة تغيير الوزن" },
    "Health score": { es: "Puntuación de salud", fr: "Score santé", de: "Gesundheitswert", pt: "Pontuação de saúde", ru: "Оценка здоровья", hi: "हेल्थ स्कोर", ja: "健康スコア", ar: "درجة الصحة" },
    "BMI Distribution Chart": { es: "Gráfico de distribución del IMC", fr: "Graphique de répartition de l'IMC", de: "BMI-Verteilung", pt: "Gráfico de distribuição do IMC", ru: "График распределения ИМТ", hi: "BMI वितरण चार्ट", ja: "BMI 分布チャート", ar: "مخطط توزيع مؤشر كتلة الجسم" },
    "Current vs Target Weight": { es: "Peso actual vs objetivo", fr: "Poids actuel vs cible", de: "Aktuelles vs Zielgewicht", pt: "Peso atual vs meta", ru: "Текущий и целевой вес", hi: "वर्तमान बनाम लक्ष्य वजन", ja: "現在の体重と目標体重", ar: "الوزن الحالي مقابل الهدف" },
    "Open tool →": { es: "Abrir herramienta →", fr: "Ouvrir l'outil →", de: "Tool öffnen →", pt: "Abrir ferramenta →", ru: "Открыть инструмент →", hi: "टूल खोलें →", ja: "ツールを開く →", ar: "افتح الأداة →" },
    "Home": { es: "Inicio", fr: "Accueil", de: "Startseite", pt: "Início", ru: "Главная", hi: "मुखपृष्ठ", ja: "ホーム", ar: "الرئيسية" },
    "Calculators": { es: "Calculadoras", fr: "Calculatrices", de: "Rechner", pt: "Calculadoras", ru: "Калькуляторы", hi: "कैलकुलेटर", ja: "計算ツール", ar: "الآلات الحاسبة" },
    "Why people start here": { es: "Por qué empezar aquí", fr: "Pourquoi commencer ici", de: "Warum viele hier starten", pt: "Por que começar por aqui", ru: "Почему многие начинают здесь", hi: "लोग यहाँ से क्यों शुरू करते हैं", ja: "まずここから始める理由", ar: "لماذا يبدأ الناس من هنا" },
    "What is ": { es: "Qué es ", fr: "Qu'est-ce que ", de: "Was ist ", pt: "O que é ", ru: "Что такое ", hi: "क्या है ", ja: "", ar: "ما هو " },
    "How to use the result": { es: "Cómo usar el resultado", fr: "Comment utiliser le résultat", de: "So nutzt du das Ergebnis", pt: "Como usar o resultado", ru: "Как использовать результат", hi: "परिणाम का उपयोग कैसे करें", ja: "結果の活用方法", ar: "كيفية استخدام النتيجة" },
    "How to read the reference range": { es: "Cómo leer el rango de referencia", fr: "Comment lire la plage de référence", de: "So liest du den Referenzbereich", pt: "Como interpretar a faixa de referência", ru: "Как читать диапазон нормы", hi: "संदर्भ सीमा को कैसे समझें", ja: "目安の見方", ar: "كيفية قراءة النطاق المرجعي" },
    "Is the ": { es: "¿Es precisa ", fr: "Est-ce que ", de: "Ist ", pt: "", ru: "Насколько точен ", hi: "", ja: "", ar: "هل " },
    " accurate?": { es: "?", fr: " précis ?", de: " genau?", pt: " é preciso?", ru: " точен?", hi: " सटीक है?", ja: "は正確ですか？", ar: " دقيق؟" },
    "Should this replace medical advice?": { es: "¿Debe sustituir el consejo médico?", fr: "Cela remplace-t-il un avis médical ?", de: "Ersetzt das medizinischen Rat?", pt: "Isso substitui orientação médica?", ru: "Может ли это заменить консультацию врача?", hi: "क्या यह चिकित्सकीय सलाह की जगह ले सकता है?", ja: "医療的な助言の代わりになりますか？", ar: "هل يمكن أن يحل هذا محل الاستشارة الطبية؟" },
    "How often should I check again?": { es: "¿Con qué frecuencia debería revisarlo de nuevo?", fr: "À quelle fréquence vérifier à nouveau ?", de: "Wie oft sollte ich erneut prüfen?", pt: "Com que frequência devo verificar de novo?", ru: "Как часто стоит проверять снова?", hi: "मुझे इसे फिर कब जाँचना चाहिए?", ja: "どのくらいの頻度で再確認すべきですか？", ar: "كم مرة ينبغي إعادة التحقق؟" },
    "Should I rely on this result alone?": { es: "¿Debo basarme solo en este resultado?", fr: "Dois-je me fier uniquement à ce résultat ?", de: "Sollte ich mich nur auf dieses Ergebnis verlassen?", pt: "Devo confiar apenas neste resultado?", ru: "Стоит ли полагаться только на этот результат?", hi: "क्या मुझे केवल इसी परिणाम पर निर्भर रहना चाहिए?", ja: "この結果だけで判断すべきですか？", ar: "هل ينبغي الاعتماد على هذه النتيجة وحدها؟" },
    "It is best used for lifestyle planning and trend tracking. The closer the inputs are to reality, the more useful the result tends to be.": { es: "Se utiliza mejor para planificar hábitos y seguir tendencias. Cuanto más reales sean los datos, más útil será el resultado.", fr: "Il sert surtout à planifier les habitudes et suivre les tendances. Plus les données sont réalistes, plus le résultat est utile.", de: "Am nützlichsten ist es für Lebensstilplanung und Trendbeobachtung. Je realistischer die Eingaben, desto hilfreicher ist das Ergebnis.", pt: "Funciona melhor para planejar hábitos e acompanhar tendências. Quanto mais reais forem os dados, mais útil tende a ser o resultado.", ru: "Лучше всего использовать его для планирования привычек и отслеживания тенденций. Чем реалистичнее данные, тем полезнее результат.", hi: "यह जीवनशैली योजना और रुझान देखने के लिए सबसे उपयोगी है। जितने वास्तविक इनपुट होंगे, परिणाम उतना उपयोगी होगा।", ja: "生活習慣の見直しや推移の確認に使うのが最適です。入力が現実に近いほど、結果は参考になります。", ar: "يفضل استخدامه لتخطيط نمط الحياة ومتابعة الاتجاهات. كلما كانت البيانات أقرب إلى الواقع كانت النتيجة أكثر فائدة." },
    "No. Tools like this are practical references and should not replace a clinician's assessment or diagnosis.": { es: "No. Herramientas como esta son referencias prácticas y no deben sustituir la evaluación o el diagnóstico de un profesional.", fr: "Non. Ce type d'outil est un repère pratique et ne remplace pas l'évaluation ou le diagnostic d'un professionnel.", de: "Nein. Solche Tools sind praktische Referenzen und ersetzen keine ärztliche Beurteilung oder Diagnose.", pt: "Não. Ferramentas assim são referências práticas e não substituem avaliação ou diagnóstico profissional.", ru: "Нет. Такие инструменты служат практической справкой и не заменяют оценку или диагноз врача.", hi: "नहीं। ऐसे टूल व्यावहारिक संदर्भ हैं और डॉक्टर की जाँच या निदान का विकल्प नहीं हैं।", ja: "いいえ。こうしたツールは日常の参考用であり、医師の評価や診断の代わりにはなりません。", ar: "لا. هذه الأدوات مرجعية عملية ولا ينبغي أن تحل محل تقييم الطبيب أو تشخيصه." },
    "If you are actively changing habits, checking again every 2 to 4 weeks usually works well for trend tracking.": { es: "Si estás cambiando hábitos de forma activa, revisarlo cada 2 a 4 semanas suele funcionar bien para seguir la tendencia.", fr: "Si vous changez activement vos habitudes, revérifier toutes les 2 à 4 semaines fonctionne bien pour suivre la tendance.", de: "Wenn du aktiv Gewohnheiten veränderst, ist eine erneute Prüfung alle 2 bis 4 Wochen meist sinnvoll.", pt: "Se você está mudando hábitos ativamente, verificar novamente a cada 2 a 4 semanas costuma funcionar bem.", ru: "Если вы активно меняете привычки, повторная проверка каждые 2–4 недели обычно хорошо подходит для отслеживания динамики.", hi: "यदि आप सक्रिय रूप से आदतें बदल रहे हैं, तो हर 2 से 4 सप्ताह में दोबारा जाँचना रुझान देखने के लिए अच्छा रहता है।", ja: "習慣を積極的に変えているなら、2〜4週間ごとに見直すと変化を追いやすくなります。", ar: "إذا كنت تغيّر عاداتك فعليًا، فإن إعادة التحقق كل 2 إلى 4 أسابيع تكون مناسبة عادة لمتابعة الاتجاه." },
    "Usually not. It is better to combine this result with body feedback, measurements, performance, sleep, and long-term changes.": { es: "Por lo general no. Es mejor combinar este resultado con sensaciones corporales, mediciones, rendimiento, sueño y cambios a largo plazo.", fr: "En général non. Il vaut mieux combiner ce résultat avec vos sensations, mesures, performances, sommeil et évolution à long terme.", de: "Meistens nicht. Es ist besser, das Ergebnis mit Körpergefühl, Maßen, Leistung, Schlaf und langfristigen Veränderungen zu kombinieren.", pt: "Normalmente não. É melhor combinar este resultado com sinais do corpo, medidas, desempenho, sono e mudanças de longo prazo.", ru: "Обычно нет. Лучше сопоставлять этот результат с самочувствием, измерениями, тренировками, сном и долгосрочными изменениями.", hi: "आमतौर पर नहीं। इसे शरीर की अनुभूति, माप, प्रदर्शन, नींद और दीर्घकालिक बदलावों के साथ मिलाकर देखना बेहतर है।", ja: "通常はおすすめしません。体感、計測値、パフォーマンス、睡眠、長期的な変化と合わせて見る方が適切です。", ar: "غالبًا لا. من الأفضل الجمع بين هذه النتيجة وبين إحساسك الجسدي والقياسات والأداء والنوم والتغيرات طويلة المدى." },
    "Key result": { es: "Resultado clave", fr: "Résultat clé", de: "Kernergebnis", pt: "Resultado principal", ru: "Ключевой результат", hi: "मुख्य परिणाम", ja: "主な結果", ar: "النتيجة الأساسية" },
    "Gender (optional)": { es: "Sexo (opcional)", fr: "Sexe (optionnel)", de: "Geschlecht (optional)", pt: "Sexo (opcional)", ru: "Пол (необязательно)", hi: "लिंग (वैकल्पिक)", ja: "性別（任意）", ar: "الجنس (اختياري)" },
    "Male": { es: "Hombre", fr: "Homme", de: "Männlich", pt: "Masculino", ru: "Мужской", hi: "पुरुष", ja: "男性", ar: "ذكر" },
    "Female": { es: "Mujer", fr: "Femme", de: "Weiblich", pt: "Feminino", ru: "Женский", hi: "महिला", ja: "女性", ar: "أنثى" },
    "Lose Weight": { es: "Perder peso", fr: "Perdre du poids", de: "Abnehmen", pt: "Perder peso", ru: "Снижение веса", hi: "वज़न घटाएँ", ja: "減量", ar: "خفض الوزن" },
    "Maintain": { es: "Mantener", fr: "Maintenir", de: "Halten", pt: "Manter", ru: "Поддерживать", hi: "बनाए रखें", ja: "維持", ar: "الحفاظ" },
    "Gain": { es: "Ganar", fr: "Prendre", de: "Zunehmen", pt: "Ganhar", ru: "Набор", hi: "बढ़ाएँ", ja: "増量", ar: "زيادة" },
    "Sedentary": { es: "Sedentario", fr: "Sédentaire", de: "Sitzend", pt: "Sedentário", ru: "Сидячий", hi: "बैठे रहने वाला", ja: "座りがち", ar: "قليل الحركة" },
    "Active": { es: "Activo", fr: "Actif", de: "Aktiv", pt: "Ativo", ru: "Активный", hi: "सक्रिय", ja: "活動的", ar: "نشط" },
    "Moderate": { es: "Moderado", fr: "Modéré", de: "Moderat", pt: "Moderado", ru: "Умеренный", hi: "मध्यम", ja: "中程度", ar: "متوسط" }
    ,
    "BMI stands for body mass index. It uses height and weight to quickly screen whether body weight is broadly within a common reference range. It is useful for screening and trend tracking, not diagnosis.": { es: "BMI significa índice de masa corporal. Usa la altura y el peso para evaluar rápidamente si el peso está dentro de un rango de referencia habitual. Sirve para cribado y seguimiento, no para diagnóstico.", fr: "L'IMC signifie indice de masse corporelle. Il utilise la taille et le poids pour repérer rapidement si le poids se situe globalement dans une plage de référence courante. Il sert au repérage et au suivi, pas au diagnostic.", de: "BMI steht für Body-Mass-Index. Er nutzt Größe und Gewicht, um schnell einzuordnen, ob das Körpergewicht grob in einem üblichen Referenzbereich liegt. Er dient der Orientierung und Trendbeobachtung, nicht der Diagnose.", pt: "IMC significa índice de massa corporal. Ele usa altura e peso para indicar rapidamente se o peso corporal está dentro de uma faixa de referência comum. Serve para triagem e acompanhamento, não para diagnóstico.", ru: "ИМТ означает индекс массы тела. Он использует рост и вес, чтобы быстро оценить, находится ли масса тела в распространённом справочном диапазоне. Это инструмент для ориентировки и отслеживания, а не для диагноза.", hi: "BMI का अर्थ बॉडी मास इंडेक्स है। यह लंबाई और वजन का उपयोग करके जल्दी बताता है कि शरीर का वजन सामान्य संदर्भ सीमा के भीतर है या नहीं। यह स्क्रीनिंग और ट्रेंड देखने के लिए उपयोगी है, निदान के लिए नहीं।", ja: "BMI は体格指数です。身長と体重から、体重がおおまかに一般的な目安の範囲にあるかをすばやく確認するために使われます。スクリーニングや経過確認には役立ちますが、診断ではありません。", ar: "BMI هو مؤشر كتلة الجسم. يستخدم الطول والوزن لتقدير ما إذا كان الوزن يقع تقريبًا ضمن نطاق مرجعي شائع. يفيد في الفحص الأولي ومتابعة الاتجاهات، وليس للتشخيص." },
    "If you use imperial units, the calculator converts them to kilograms and meters first.": { es: "Si usas unidades imperiales, la calculadora las convierte primero a kilogramos y metros.", fr: "Si vous utilisez les unités impériales, le calculateur les convertit d'abord en kilogrammes et en mètres.", de: "Wenn Sie imperiale Einheiten verwenden, rechnet der Rechner sie zuerst in Kilogramm und Meter um.", pt: "Se você usa unidades imperiais, a calculadora converte primeiro para quilogramas e metros.", ru: "Если вы используете имперские единицы, калькулятор сначала переведёт их в килограммы и метры.", hi: "यदि आप इम्पीरियल इकाइयाँ उपयोग करते हैं, तो कैलकुलेटर पहले उन्हें किलोग्राम और मीटर में बदलता है।", ja: "ヤード・ポンド法を使う場合は、まずキログラムとメートルに換算して計算します。", ar: "إذا استخدمت الوحدات الإمبراطورية فسيقوم الحاسب أولًا بتحويلها إلى الكيلوغرامات والأمتار." },
    "Limitations of BMI": { es: "Limitaciones del IMC", fr: "Limites de l'IMC", de: "Grenzen des BMI", pt: "Limitações do IMC", ru: "Ограничения ИМТ", hi: "BMI की सीमाएँ", ja: "BMI の限界", ar: "حدود مؤشر كتلة الجسم" },
    "It can overestimate body fat for muscular people": { es: "Puede sobreestimar la grasa corporal en personas muy musculosas", fr: "Il peut surestimer la masse grasse chez les personnes très musclées", de: "Bei muskulösen Personen kann er Körperfett überschätzen", pt: "Pode superestimar a gordura corporal em pessoas mais musculosas", ru: "У людей с высокой мышечной массой он может завышать процент жира", hi: "अधिक मांसल लोगों में यह बॉडी फैट को अधिक दिखा सकता है", ja: "筋肉量が多い人では体脂肪を高めに見積もることがあります", ar: "قد يبالغ في تقدير الدهون لدى الأشخاص ذوي الكتلة العضلية العالية" },
    "It does not directly measure body fat": { es: "No mide la grasa corporal de forma directa", fr: "Il ne mesure pas directement la masse grasse", de: "Er misst Körperfett nicht direkt", pt: "Ele não mede a gordura corporal diretamente", ru: "Он не измеряет жир напрямую", hi: "यह सीधे बॉडी फैट को नहीं मापता", ja: "体脂肪を直接測定するものではありません", ar: "لا يقيس دهون الجسم بشكل مباشر" },
    "It works best when paired with waist size, body fat, and fitness markers": { es: "Funciona mejor si se combina con cintura, grasa corporal y marcadores de forma física", fr: "Il est plus utile avec le tour de taille, la masse grasse et des indicateurs de forme", de: "Am nützlichsten ist er zusammen mit Taillenumfang, Körperfett und Fitnesswerten", pt: "Funciona melhor junto com cintura, gordura corporal e marcadores de condicionamento", ru: "Лучше оценивать его вместе с талией, жиром и показателями физической формы", hi: "कमर, बॉडी फैट और फिटनेस संकेतकों के साथ देखने पर यह अधिक उपयोगी है", ja: "ウエスト、体脂肪率、体力の目安と合わせて見るとより参考になります", ar: "يكون أكثر فائدة عند قراءته مع محيط الخصر ونسبة الدهون ومؤشرات اللياقة" },
    "How to use your result": { es: "Cómo usar tu resultado", fr: "Comment utiliser votre résultat", de: "So nutzt du dein Ergebnis", pt: "Como usar seu resultado", ru: "Как использовать результат", hi: "अपने परिणाम का उपयोग कैसे करें", ja: "結果の活かし方", ar: "كيفية استخدام النتيجة" },
    "If you are underweight": { es: "Si tienes bajo peso", fr: "Si vous êtes en insuffisance pondérale", de: "Wenn du untergewichtig bist", pt: "Se você está abaixo do peso", ru: "Если вес ниже нормы", hi: "यदि आपका वजन कम है", ja: "やせ気味の場合", ar: "إذا كان وزنك منخفضًا" },
    "Increase calorie intake gradually": { es: "Aumenta poco a poco la ingesta calórica", fr: "Augmentez progressivement l'apport calorique", de: "Kalorienzufuhr schrittweise erhöhen", pt: "Aumente gradualmente a ingestão calórica", ru: "Постепенно увеличивайте калорийность", hi: "धीरे-धीरे कैलोरी बढ़ाएँ", ja: "摂取カロリーを少しずつ増やしましょう", ar: "زد السعرات تدريجيًا" },
    "Add strength training": { es: "Añade entrenamiento de fuerza", fr: "Ajoutez du renforcement musculaire", de: "Krafttraining ergänzen", pt: "Adicione treino de força", ru: "Добавьте силовые тренировки", hi: "स्ट्रेंथ ट्रेनिंग जोड़ें", ja: "筋力トレーニングを取り入れましょう", ar: "أضف تمارين القوة" },
    "If you are overweight": { es: "Si tienes sobrepeso", fr: "Si vous êtes en surpoids", de: "Wenn du übergewichtig bist", pt: "Se você está acima do peso", ru: "Если есть лишний вес", hi: "यदि आपका वजन अधिक है", ja: "BMI が高めの場合", ar: "إذا كان وزنك زائدًا" },
    "Create a moderate calorie deficit": { es: "Crea un déficit calórico moderado", fr: "Créez un déficit calorique modéré", de: "Ein moderates Kaloriendefizit schaffen", pt: "Crie um déficit calórico moderado", ru: "Создайте умеренный дефицит калорий", hi: "मध्यम कैलोरी घाटा बनाइए", ja: "無理のないカロリー赤字を作りましょう", ar: "أنشئ عجزًا حراريًا معتدلًا" },
    "Start with daily steps and regular training": { es: "Empieza con más pasos diarios y entrenamiento regular", fr: "Commencez par plus de pas quotidiens et un entraînement régulier", de: "Mit mehr täglichen Schritten und regelmäßigem Training beginnen", pt: "Comece com mais passos diários e treino regular", ru: "Начните с большего количества шагов и регулярных тренировок", hi: "दैनिक कदम और नियमित ट्रेनिंग से शुरू करें", ja: "日々の歩数と定期的な運動から始めましょう", ar: "ابدأ بزيادة الخطوات اليومية والتدريب المنتظم" },
    "If you are in the normal range": { es: "Si estás en el rango normal", fr: "Si vous êtes dans la plage normale", de: "Wenn du im Normalbereich bist", pt: "Se você está na faixa normal", ru: "Если показатель в норме", hi: "यदि आप सामान्य सीमा में हैं", ja: "標準範囲にある場合", ar: "إذا كنت ضمن النطاق الطبيعي" },
    "Keep your current habits consistent": { es: "Mantén tus hábitos actuales de forma constante", fr: "Gardez vos habitudes actuelles avec régularité", de: "Behalte deine aktuellen Gewohnheiten konstant bei", pt: "Mantenha seus hábitos atuais com consistência", ru: "Сохраняйте текущие привычки стабильно", hi: "अपनी वर्तमान आदतों को स्थिर रखें", ja: "今の習慣を安定して続けましょう", ar: "حافظ على عاداتك الحالية باستمرار" },
    "Focus on body composition and performance": { es: "Pon el foco en la composición corporal y el rendimiento", fr: "Concentrez-vous sur la composition corporelle et la performance", de: "Fokus auf Körperzusammensetzung und Leistung", pt: "Foque na composição corporal e no desempenho", ru: "Сосредоточьтесь на составе тела и результатах", hi: "बॉडी कंपोज़िशन और प्रदर्शन पर ध्यान दें", ja: "体組成とパフォーマンスに目を向けましょう", ar: "ركز على تركيبة الجسم والأداء" },
    "BMI is useful for most people as a screening metric, but it is not a direct body fat test.": { es: "El IMC es útil para la mayoría como referencia inicial, pero no es una medición directa de grasa corporal.", fr: "L'IMC est utile comme indicateur de départ pour la plupart des gens, mais ce n'est pas une mesure directe de la masse grasse.", de: "Der BMI ist für die meisten Menschen als erster Richtwert nützlich, aber kein direkter Körperfett-Test.", pt: "O IMC é útil para a maioria como referência inicial, mas não mede gordura corporal diretamente.", ru: "ИМТ полезен для большинства как ориентир, но это не прямое измерение жира.", hi: "BMI अधिकांश लोगों के लिए शुरुआती संदर्भ के रूप में उपयोगी है, लेकिन यह बॉडी फैट का सीधा परीक्षण नहीं है।", ja: "BMI は多くの人にとって出発点として役立ちますが、体脂肪を直接測るものではありません。", ar: "BMI مفيد لمعظم الناس كمؤشر أولي، لكنه ليس قياسًا مباشرًا لدهون الجسم." },
    "The formula is the same, but body composition differs, so waist and body fat context still matter.": { es: "La fórmula es la misma, pero la composición corporal cambia, por eso la cintura y la grasa corporal siguen siendo importantes.", fr: "La formule est la même, mais la composition corporelle diffère, donc le tour de taille et la masse grasse comptent aussi.", de: "Die Formel ist gleich, aber die Körperzusammensetzung ist unterschiedlich. Daher bleiben Taille und Körperfett wichtig.", pt: "A fórmula é a mesma, mas a composição corporal muda, então cintura e gordura corporal ainda importam.", ru: "Формула одинаковая, но состав тела различается, поэтому талия и жир по-прежнему важны.", hi: "फ़ॉर्मूला एक ही है, लेकिन शरीर की संरचना अलग हो सकती है, इसलिए कमर और बॉडी फैट संदर्भ महत्वपूर्ण हैं।", ja: "計算式は同じですが、体の組成は異なるため、ウエストや体脂肪率も一緒に見ることが大切です。", ar: "المعادلة نفسها، لكن تركيبة الجسم تختلف، لذلك يبقى محيط الخصر ونسبة الدهون مهمين." },
    "The most commonly referenced range is 18.5 to 24.9.": { es: "El rango de referencia más común es de 18,5 a 24,9.", fr: "La plage de référence la plus courante est de 18,5 à 24,9.", de: "Der am häufigsten genannte Referenzbereich liegt bei 18,5 bis 24,9.", pt: "A faixa de referência mais comum vai de 18,5 a 24,9.", ru: "Наиболее распространённый ориентир — от 18,5 до 24,9.", hi: "सबसे सामान्य संदर्भ सीमा 18.5 से 24.9 है।", ja: "一般的な目安の範囲は 18.5 から 24.9 です。", ar: "النطاق المرجعي الأكثر شيوعًا هو من 18.5 إلى 24.9." },
    "For muscular people, pregnancy, or some special populations, BMI can misrepresent the real picture.": { es: "En personas muy musculosas, durante el embarazo o en grupos especiales, el IMC puede no reflejar bien la realidad.", fr: "Chez les personnes très musclées, pendant la grossesse ou dans certains cas particuliers, l'IMC peut être trompeur.", de: "Bei sehr muskulösen Personen, in der Schwangerschaft oder in speziellen Gruppen kann der BMI ein verzerrtes Bild geben.", pt: "Em pessoas muito musculosas, na gravidez ou em grupos especiais, o IMC pode distorcer a realidade.", ru: "У очень мускулистых людей, при беременности и в некоторых особых группах ИМТ может искажать картину.", hi: "अधिक मांसल लोगों, गर्भावस्था या कुछ विशेष समूहों में BMI वास्तविक स्थिति को गलत दिखा सकता है।", ja: "筋肉量が多い人、妊娠中の人、特定の条件にある人では、BMI が実態を正しく表さないことがあります。", ar: "لدى الأشخاص ذوي العضلات العالية أو أثناء الحمل أو لدى بعض الفئات الخاصة قد لا يعكس BMI الصورة الحقيقية بدقة." }
  };

  const localizedToolTitles = {
    es: { bmi: "Calculadora de IMC", bmr: "Calculadora de TMB", tdee: "Calculadora de TDEE", tdeemealplanner: "Planificador de comidas según TDEE", bodyfat: "Calculadora de grasa corporal", ideal: "Calculadora de peso ideal", leanmass: "Calculadora de masa magra", wthr: "Calculadora de cintura-altura", bodyshape: "Calculadora de forma corporal", calorieneeds: "Calculadora de calorías necesarias", healthyweightrange: "Calculadora de rango de peso saludable", deficit: "Calculadora de déficit calórico", surplus: "Calculadora de superávit calórico", weightloss: "Calculadora de tiempo para perder peso", macro: "Calculadora de macronutrientes", protein: "Calculadora de proteína", fatintake: "Calculadora de grasa diaria", carbintake: "Calculadora de carbohidratos", sugar: "Calculadora de azúcar diaria", sodium: "Calculadora de sodio", fiber: "Calculadora de fibra", caffeine: "Calculadora de cafeína", water: "Calculadora de agua diaria", hydrationcheck: "Verificador de hidratación", mealcalsplit: "Calculadora de reparto de calorías por comida", portionsize: "Calculadora de porciones", fastingcalc: "Calculadora de ayuno intermitente", fastingtimer: "Temporizador de ayuno", cheatmeal: "Planificador de comida libre", weeklydiet: "Planificador semanal de dieta", eatingscore: "Puntuación de alimentación saludable", nutritiontracker: "Registro diario de nutrición", sleep: "Calculadora de ciclo de sueño", bedtimecalc: "Calculadora de hora de dormir", wakecalc: "Calculadora de hora de despertar", napcalc: "Calculadora de siesta", sleepdebt: "Calculadora de deuda de sueño", sleepconsistency: "Seguimiento de consistencia del sueño", jetlag: "Calculadora de recuperación del jet lag", pace: "Calculadora de ritmo de carrera", walkingcal: "Calculadora de calorías caminando", cyclingcal: "Calculadora de calorías en ciclismo", hrrzones: "Calculadora de zonas de frecuencia cardíaca", targethr: "Calculadora de frecuencia cardíaca objetivo", onerepmax: "Calculadora de 1RM", workoutvolume: "Calculadora de volumen de entrenamiento", vo2max: "Calculadora estimada de VO2 máx", screentime: "Calculadora de riesgo por tiempo de pantalla", sittingrisk: "Calculadora de riesgo por sedentarismo", stresscheck: "Autochequeo de estrés", burnout: "Autoevaluación de agotamiento", energyscore: "Puntuación diaria de energía", habitscore: "Puntuación de hábitos saludables" },
    fr: { bmi: "Calculateur d'IMC", bmr: "Calculateur de métabolisme de base", tdee: "Calculateur de TDEE", tdeemealplanner: "Planificateur de repas selon le TDEE", bodyfat: "Calculateur de masse grasse", ideal: "Calculateur de poids idéal", leanmass: "Calculateur de masse maigre", wthr: "Calculateur tour de taille / taille", bodyshape: "Calculateur de morphologie", calorieneeds: "Calculateur des besoins caloriques", healthyweightrange: "Calculateur de fourchette de poids saine", deficit: "Calculateur de déficit calorique", surplus: "Calculateur de surplus calorique", weightloss: "Calculateur de délai de perte de poids", macro: "Calculateur de macronutriments", protein: "Calculateur d'apport en protéines", fatintake: "Calculateur d'apport en lipides", carbintake: "Calculateur d'apport en glucides", sugar: "Calculateur de sucre quotidien", sodium: "Calculateur de sodium", fiber: "Calculateur de fibres", caffeine: "Calculateur de caféine", water: "Calculateur d'hydratation", hydrationcheck: "Vérificateur d'hydratation", mealcalsplit: "Calculateur de répartition calorique par repas", portionsize: "Calculateur de portions", fastingcalc: "Calculateur de jeûne intermittent", fastingtimer: "Minuteur de jeûne", cheatmeal: "Planificateur de repas libre", weeklydiet: "Planificateur alimentaire hebdomadaire", eatingscore: "Score d'alimentation saine", nutritiontracker: "Suivi nutritionnel quotidien", sleep: "Calculateur de cycles du sommeil", bedtimecalc: "Calculateur d'heure de coucher", wakecalc: "Calculateur d'heure de réveil", napcalc: "Calculateur de sieste", sleepdebt: "Calculateur de dette de sommeil", sleepconsistency: "Suivi de régularité du sommeil", jetlag: "Calculateur de récupération du décalage horaire", pace: "Calculateur d'allure", walkingcal: "Calculateur de calories à la marche", cyclingcal: "Calculateur de calories à vélo", hrrzones: "Calculateur de zones de fréquence cardiaque", targethr: "Calculateur de fréquence cardiaque cible", onerepmax: "Calculateur de 1RM", workoutvolume: "Calculateur de volume d'entraînement", vo2max: "Calculateur estimatif de VO2 max", screentime: "Calculateur de risque lié au temps d'écran", sittingrisk: "Calculateur de risque de sédentarité", stresscheck: "Auto-évaluation du stress", burnout: "Auto-évaluation de l'épuisement", energyscore: "Score d'énergie quotidien", habitscore: "Score d'habitudes saines" },
    de: { bmi: "BMI-Rechner", bmr: "Grundumsatz-Rechner", tdee: "TDEE-Rechner", tdeemealplanner: "TDEE-Ernährungsplaner", bodyfat: "Körperfett-Rechner", ideal: "Idealgewicht-Rechner", leanmass: "Magermasse-Rechner", wthr: "Taille-zu-Größe-Rechner", bodyshape: "Körperform-Rechner", calorieneeds: "Kalorienbedarfs-Rechner", healthyweightrange: "Gesunder-Gewichtsbereich-Rechner", deficit: "Kaloriendefizit-Rechner", surplus: "Kalorienüberschuss-Rechner", weightloss: "Gewichtsverlust-Zeitplan-Rechner", macro: "Makro-Rechner", protein: "Proteinbedarf-Rechner", fatintake: "Fettbedarf-Rechner", carbintake: "Kohlenhydrat-Rechner", sugar: "Täglicher-Zucker-Rechner", sodium: "Natrium-Rechner", fiber: "Ballaststoff-Rechner", caffeine: "Koffein-Rechner", water: "Wasserbedarf-Rechner", hydrationcheck: "Hydrations-Check", mealcalsplit: "Kalorienaufteilung-pro-Mahlzeit", portionsize: "Portionsgrößen-Rechner", fastingcalc: "Intervallfasten-Rechner", fastingtimer: "Fasten-Timer", cheatmeal: "Cheat-Meal-Planer", weeklydiet: "Wochen-Ernährungsplaner", eatingscore: "Gesunde-Ernährung-Score", nutritiontracker: "Täglicher-Nährstoff-Tracker", sleep: "Schlafzyklus-Rechner", bedtimecalc: "Schlafenszeit-Rechner", wakecalc: "Aufwachzeit-Rechner", napcalc: "Nickerchen-Rechner", sleepdebt: "Schlafschuld-Rechner", sleepconsistency: "Schlafkonsistenz-Tracker", jetlag: "Jetlag-Erholungs-Rechner", pace: "Lauftempo-Rechner", walkingcal: "Geh-Kalorien-Rechner", cyclingcal: "Radfahr-Kalorien-Rechner", hrrzones: "Herzfrequenzzonen-Rechner", targethr: "Zielherzfrequenz-Rechner", onerepmax: "1RM-Rechner", workoutvolume: "Trainingsvolumen-Rechner", vo2max: "VO2max-Schätzer", screentime: "Bildschirmzeit-Risiko-Rechner", sittingrisk: "Sitzzeit-Risiko-Rechner", stresscheck: "Stress-Selbstcheck", burnout: "Burnout-Selbsttest", energyscore: "Täglicher-Energie-Score", habitscore: "Gesunde-Gewohnheiten-Score" },
    pt: { bmi: "Calculadora de IMC", bmr: "Calculadora de TMB", tdee: "Calculadora de TDEE", tdeemealplanner: "Planejador alimentar por TDEE", bodyfat: "Calculadora de gordura corporal", ideal: "Calculadora de peso ideal", leanmass: "Calculadora de massa magra", wthr: "Calculadora de cintura-altura", bodyshape: "Calculadora de formato corporal", calorieneeds: "Calculadora de necessidade calórica", healthyweightrange: "Calculadora de faixa de peso saudável", deficit: "Calculadora de déficit calórico", surplus: "Calculadora de superávit calórico", weightloss: "Calculadora de tempo para perder peso", macro: "Calculadora de macronutrientes", protein: "Calculadora de proteína", fatintake: "Calculadora de ingestão de gordura", carbintake: "Calculadora de carboidratos", sugar: "Calculadora de açúcar diário", sodium: "Calculadora de sódio", fiber: "Calculadora de fibra", caffeine: "Calculadora de cafeína", water: "Calculadora de ingestão de água", hydrationcheck: "Verificador de hidratação", mealcalsplit: "Calculadora de divisão de calorias por refeição", portionsize: "Calculadora de porções", fastingcalc: "Calculadora de jejum intermitente", fastingtimer: "Temporizador de jejum", cheatmeal: "Planejador de refeição livre", weeklydiet: "Planejador semanal de dieta", eatingscore: "Pontuação de alimentação saudável", nutritiontracker: "Rastreador diário de nutrição", sleep: "Calculadora de ciclo do sono", bedtimecalc: "Calculadora da hora de dormir", wakecalc: "Calculadora da hora de acordar", napcalc: "Calculadora de cochilo", sleepdebt: "Calculadora de dívida de sono", sleepconsistency: "Rastreador de consistência do sono", jetlag: "Calculadora de recuperação do jet lag", pace: "Calculadora de ritmo de corrida", walkingcal: "Calculadora de calorias caminhando", cyclingcal: "Calculadora de calorias pedalando", hrrzones: "Calculadora de zonas de frequência cardíaca", targethr: "Calculadora de frequência cardíaca alvo", onerepmax: "Calculadora de 1RM", workoutvolume: "Calculadora de volume de treino", vo2max: "Calculadora estimada de VO2 máx", screentime: "Calculadora de risco do tempo de tela", sittingrisk: "Calculadora de risco por tempo sentado", stresscheck: "Autoavaliação de estresse", burnout: "Autoavaliação de burnout", energyscore: "Pontuação diária de energia", habitscore: "Pontuação de hábitos saudáveis" },
    ru: { bmi: "Калькулятор ИМТ", bmr: "Калькулятор базового обмена", tdee: "Калькулятор TDEE", tdeemealplanner: "Планировщик питания по TDEE", bodyfat: "Калькулятор жира в организме", ideal: "Калькулятор идеального веса", leanmass: "Калькулятор безжировой массы", wthr: "Калькулятор талия/рост", bodyshape: "Калькулятор типа фигуры", calorieneeds: "Калькулятор потребности в калориях", healthyweightrange: "Калькулятор диапазона здорового веса", deficit: "Калькулятор дефицита калорий", surplus: "Калькулятор профицита калорий", weightloss: "Калькулятор срока снижения веса", macro: "Калькулятор макронутриентов", protein: "Калькулятор белка", fatintake: "Калькулятор жиров", carbintake: "Калькулятор углеводов", sugar: "Калькулятор сахара в день", sodium: "Калькулятор натрия", fiber: "Калькулятор клетчатки", caffeine: "Калькулятор кофеина", water: "Калькулятор воды", hydrationcheck: "Проверка уровня гидратации", mealcalsplit: "Калькулятор калорий по приёмам пищи", portionsize: "Калькулятор порций", fastingcalc: "Калькулятор интервального голодания", fastingtimer: "Таймер голодания", cheatmeal: "Планировщик свободного приёма пищи", weeklydiet: "Недельный план питания", eatingscore: "Оценка здорового питания", nutritiontracker: "Ежедневный трекер питания", sleep: "Калькулятор циклов сна", bedtimecalc: "Калькулятор времени сна", wakecalc: "Калькулятор времени подъёма", napcalc: "Калькулятор дневного сна", sleepdebt: "Калькулятор долга сна", sleepconsistency: "Трекер регулярности сна", jetlag: "Калькулятор восстановления после джетлага", pace: "Калькулятор бегового темпа", walkingcal: "Калькулятор калорий при ходьбе", cyclingcal: "Калькулятор калорий при езде на велосипеде", hrrzones: "Калькулятор зон пульса", targethr: "Калькулятор целевого пульса", onerepmax: "Калькулятор 1ПМ", workoutvolume: "Калькулятор тренировочного объёма", vo2max: "Оценка VO2 max", screentime: "Калькулятор риска экранного времени", sittingrisk: "Калькулятор риска сидячего образа жизни", stresscheck: "Самопроверка уровня стресса", burnout: "Самооценка выгорания", energyscore: "Ежедневный показатель энергии", habitscore: "Оценка здоровых привычек" },
    hi: { bmi: "BMI कैलकुलेटर", bmr: "BMR कैलकुलेटर", tdee: "TDEE कैलकुलेटर", tdeemealplanner: "TDEE भोजन योजना टूल", bodyfat: "बॉडी फैट कैलकुलेटर", ideal: "आदर्श वज़न कैलकुलेटर", leanmass: "लीन बॉडी मास कैलकुलेटर", wthr: "कमर-से-लंबाई कैलकुलेटर", bodyshape: "बॉडी शेप कैलकुलेटर", calorieneeds: "कैलोरी आवश्यकता कैलकुलेटर", healthyweightrange: "स्वस्थ वज़न सीमा कैलकुलेटर", deficit: "कैलोरी डेफिसिट कैलकुलेटर", surplus: "कैलोरी सरप्लस कैलकुलेटर", weightloss: "वज़न घटाने की समयरेखा कैलकुलेटर", macro: "मैक्रो कैलकुलेटर", protein: "प्रोटीन इनटेक कैलकुलेटर", fatintake: "फैट इनटेक कैलकुलेटर", carbintake: "कार्ब इनटेक कैलकुलेटर", sugar: "दैनिक शुगर कैलकुलेटर", sodium: "सोडियम इनटेक कैलकुलेटर", fiber: "फाइबर इनटेक कैलकुलेटर", caffeine: "कैफीन इनटेक कैलकुलेटर", water: "वॉटर इनटेक कैलकुलेटर", hydrationcheck: "हाइड्रेशन लेवल चेकर", mealcalsplit: "मील कैलोरी स्प्लिट कैलकुलेटर", portionsize: "पोर्टियन साइज कैलकुलेटर", fastingcalc: "इंटरमिटेंट फास्टिंग कैलकुलेटर", fastingtimer: "फास्टिंग टाइमर", cheatmeal: "चीट मील प्लानर", weeklydiet: "साप्ताहिक डाइट प्लानर", eatingscore: "हेल्दी ईटिंग स्कोर टूल", nutritiontracker: "डेली न्यूट्रिशन ट्रैकर", sleep: "स्लीप साइकल कैलकुलेटर", bedtimecalc: "बेडटाइम कैलकुलेटर", wakecalc: "वेक-अप टाइम कैलकुलेटर", napcalc: "नैप कैलकुलेटर", sleepdebt: "स्लीप डेट कैलकुलेटर", sleepconsistency: "स्लीप कंसिस्टेंसी ट्रैकर", jetlag: "जेट लैग रिकवरी कैलकुलेटर", pace: "रनिंग पेस कैलकुलेटर", walkingcal: "वॉकिंग कैलोरी कैलकुलेटर", cyclingcal: "साइक्लिंग कैलोरी कैलकुलेटर", hrrzones: "हार्ट रेट ज़ोन कैलकुलेटर", targethr: "टार्गेट हार्ट रेट कैलकुलेटर", onerepmax: "वन रेप मैक्स कैलकुलेटर", workoutvolume: "वर्कआउट वॉल्यूम कैलकुलेटर", vo2max: "VO2 Max अनुमान कैलकुलेटर", screentime: "स्क्रीन टाइम हेल्थ रिस्क कैलकुलेटर", sittingrisk: "बैठे रहने के जोखिम का कैलकुलेटर", stresscheck: "स्ट्रेस लेवल सेल्फ-चेक", burnout: "बर्नआउट सेल्फ-असेसमेंट", energyscore: "डेली एनर्जी स्कोर टूल", habitscore: "हेल्दी हैबिट स्कोर टूल" },
    ja: { bmi: "BMI 計算ツール", bmr: "基礎代謝計算ツール", tdee: "TDEE 計算ツール", tdeemealplanner: "TDEE 食事配分ツール", bodyfat: "体脂肪率計算ツール", ideal: "目安体重計算ツール", leanmass: "除脂肪体重計算ツール", wthr: "ウエスト身長比計算ツール", bodyshape: "体型計算ツール", calorieneeds: "必要カロリー計算ツール", healthyweightrange: "健康体重範囲計算ツール", deficit: "カロリー赤字計算ツール", surplus: "カロリー余剰計算ツール", weightloss: "減量期間計算ツール", macro: "マクロ栄養計算ツール", protein: "たんぱく質摂取計算ツール", fatintake: "脂質摂取計算ツール", carbintake: "炭水化物摂取計算ツール", sugar: "1日糖質計算ツール", sodium: "ナトリウム摂取計算ツール", fiber: "食物繊維摂取計算ツール", caffeine: "カフェイン摂取計算ツール", water: "水分摂取計算ツール", hydrationcheck: "水分状態チェッカー", mealcalsplit: "食事ごとのカロリー配分計算ツール", portionsize: "食事量計算ツール", fastingcalc: "断続的断食計算ツール", fastingtimer: "断食タイマー", cheatmeal: "チートミール計画ツール", weeklydiet: "週間食事プランナー", eatingscore: "健康的な食事スコア", nutritiontracker: "毎日の栄養トラッカー", sleep: "睡眠サイクル計算ツール", bedtimecalc: "就寝時刻計算ツール", wakecalc: "起床時刻計算ツール", napcalc: "昼寝計算ツール", sleepdebt: "睡眠負債計算ツール", sleepconsistency: "睡眠リズムトラッカー", jetlag: "時差回復計算ツール", pace: "ランニングペース計算ツール", walkingcal: "歩行消費カロリー計算ツール", cyclingcal: "サイクリング消費カロリー計算ツール", hrrzones: "心拍ゾーン計算ツール", targethr: "目標心拍数計算ツール", onerepmax: "1RM 計算ツール", workoutvolume: "トレーニング量計算ツール", vo2max: "VO2 Max 推定計算ツール", screentime: "スクリーン時間リスク計算ツール", sittingrisk: "座りすぎリスク計算ツール", stresscheck: "ストレスセルフチェック", burnout: "燃え尽きセルフチェック", energyscore: "毎日のエネルギースコア", habitscore: "健康習慣スコアツール" },
    ar: { bmi: "حاسبة مؤشر كتلة الجسم", bmr: "حاسبة معدل الأيض الأساسي", tdee: "حاسبة الاحتياج اليومي للطاقة", tdeemealplanner: "مخطط الوجبات حسب TDEE", bodyfat: "حاسبة دهون الجسم", ideal: "حاسبة الوزن المثالي", leanmass: "حاسبة الكتلة الخالية من الدهون", wthr: "حاسبة نسبة الخصر إلى الطول", bodyshape: "حاسبة شكل الجسم", calorieneeds: "حاسبة الاحتياج من السعرات", healthyweightrange: "حاسبة نطاق الوزن الصحي", deficit: "حاسبة العجز الحراري", surplus: "حاسبة الفائض الحراري", weightloss: "حاسبة مدة خسارة الوزن", macro: "حاسبة الماكروز", protein: "حاسبة البروتين", fatintake: "حاسبة الدهون", carbintake: "حاسبة الكربوهيدرات", sugar: "حاسبة السكر اليومي", sodium: "حاسبة الصوديوم", fiber: "حاسبة الألياف", caffeine: "حاسبة الكافيين", water: "حاسبة شرب الماء", hydrationcheck: "فاحص مستوى الترطيب", mealcalsplit: "حاسبة توزيع السعرات على الوجبات", portionsize: "حاسبة حجم الحصص", fastingcalc: "حاسبة الصيام المتقطع", fastingtimer: "مؤقت الصيام", cheatmeal: "مخطط الوجبة المفتوحة", weeklydiet: "مخطط النظام الأسبوعي", eatingscore: "أداة تقييم الأكل الصحي", nutritiontracker: "متعقب التغذية اليومي", sleep: "حاسبة دورات النوم", bedtimecalc: "حاسبة وقت النوم", wakecalc: "حاسبة وقت الاستيقاظ", napcalc: "حاسبة القيلولة", sleepdebt: "حاسبة دين النوم", sleepconsistency: "متعقب انتظام النوم", jetlag: "حاسبة التعافي من اضطراب السفر", pace: "حاسبة وتيرة الجري", walkingcal: "حاسبة سعرات المشي", cyclingcal: "حاسبة سعرات ركوب الدراجة", hrrzones: "حاسبة مناطق نبض القلب", targethr: "حاسبة النبض المستهدف", onerepmax: "حاسبة الحد الأقصى لتكرار واحد", workoutvolume: "حاسبة حجم التمرين", vo2max: "حاسبة تقدير VO2 Max", screentime: "حاسبة مخاطر وقت الشاشة", sittingrisk: "حاسبة مخاطر الجلوس", stresscheck: "فحص ذاتي لمستوى التوتر", burnout: "تقييم ذاتي للاحتراق الوظيفي", energyscore: "أداة تقييم الطاقة اليومية", habitscore: "أداة تقييم العادات الصحية" }
  };

  const womenToolTitles = {
    es: { periodcalc: "Calculadora menstrual", cyclelength: "Calculadora de duración del ciclo", cycleregularity: "Comprobador de regularidad del ciclo", ovulation: "Calculadora de ovulación", fertilitywindow: "Calculadora de ventana fértil", duedate: "Calculadora de fecha probable de parto", pregnancyweek: "Calculadora de semana de embarazo", conceptiondate: "Estimador de fecha de concepción", pregnancyweight: "Calculadora de aumento de peso en el embarazo", pmschecker: "Registro de síntomas premenstruales" },
    fr: { periodcalc: "Calculateur de règles", cyclelength: "Calculateur de durée du cycle", cycleregularity: "Vérificateur de régularité du cycle", ovulation: "Calculateur d'ovulation", fertilitywindow: "Calculateur de fenêtre fertile", duedate: "Calculateur de date prévue d'accouchement", pregnancyweek: "Calculateur de semaine de grossesse", conceptiondate: "Estimateur de date de conception", pregnancyweight: "Calculateur de prise de poids pendant la grossesse", pmschecker: "Suivi des symptômes prémenstruels" },
    de: { periodcalc: "Periodenrechner", cyclelength: "Zykluslängen-Rechner", cycleregularity: "Zyklus-Regelmäßigkeits-Check", ovulation: "Ovulationsrechner", fertilitywindow: "Fruchtbarkeitsfenster-Rechner", duedate: "Geburtstermin-Rechner", pregnancyweek: "Schwangerschaftswoche-Rechner", conceptiondate: "Empfängnisdatum-Schätzer", pregnancyweight: "Schwangerschafts-Gewichtszunahme-Rechner", pmschecker: "PMS-Symptom-Tracker" },
    pt: { periodcalc: "Calculadora menstrual", cyclelength: "Calculadora de duração do ciclo", cycleregularity: "Verificador de regularidade do ciclo", ovulation: "Calculadora de ovulação", fertilitywindow: "Calculadora da janela fértil", duedate: "Calculadora da data prevista do parto", pregnancyweek: "Calculadora da semana gestacional", conceptiondate: "Estimador da data da concepção", pregnancyweight: "Calculadora de ganho de peso na gravidez", pmschecker: "Rastreador de sintomas de TPM" },
    ru: { periodcalc: "Калькулятор цикла", cyclelength: "Калькулятор длины цикла", cycleregularity: "Проверка регулярности цикла", ovulation: "Калькулятор овуляции", fertilitywindow: "Калькулятор фертильного окна", duedate: "Калькулятор предполагаемой даты родов", pregnancyweek: "Калькулятор недели беременности", conceptiondate: "Оценка даты зачатия", pregnancyweight: "Калькулятор набора веса при беременности", pmschecker: "Трекер симптомов ПМС" },
    hi: { periodcalc: "पीरियड कैलकुलेटर", cyclelength: "साइकिल लंबाई कैलकुलेटर", cycleregularity: "साइकिल नियमितता चेकर", ovulation: "ओव्यूलेशन कैलकुलेटर", fertilitywindow: "फर्टिलिटी विंडो कैलकुलेटर", duedate: "ड्यू डेट कैलकुलेटर", pregnancyweek: "प्रेग्नेंसी वीक कैलकुलेटर", conceptiondate: "कन्सेप्शन डेट एस्टिमेटर", pregnancyweight: "प्रेग्नेंसी वेट गेन कैलकुलेटर", pmschecker: "PMS लक्षण ट्रैकर" },
    ja: { periodcalc: "月経計算ツール", cyclelength: "周期日数計算ツール", cycleregularity: "周期の安定度チェッカー", ovulation: "排卵日計算ツール", fertilitywindow: "妊娠しやすい時期計算ツール", duedate: "出産予定日計算ツール", pregnancyweek: "妊娠週数計算ツール", conceptiondate: "受胎日目安ツール", pregnancyweight: "妊娠中の体重増加計算ツール", pmschecker: "PMS 症状トラッカー" },
    ar: { periodcalc: "حاسبة الدورة الشهرية", cyclelength: "حاسبة طول الدورة", cycleregularity: "فاحص انتظام الدورة", ovulation: "حاسبة الإباضة", fertilitywindow: "حاسبة نافذة الخصوبة", duedate: "حاسبة موعد الولادة", pregnancyweek: "حاسبة أسبوع الحمل", conceptiondate: "مقدر تاريخ الحمل", pregnancyweight: "حاسبة زيادة الوزن أثناء الحمل", pmschecker: "متعقب أعراض ما قبل الدورة" }
  };

  const groupLabels = {
    health: { en: "Body metrics", zh: "身体数据", es: "Datos corporales", fr: "Mesures corporelles", de: "Körperdaten", pt: "Dados corporais", ru: "Показатели тела", hi: "शरीर संबंधी डेटा", ja: "身体データ", ar: "بيانات الجسم" },
    nutrition: { en: "Nutrition", zh: "营养与热量", es: "Nutrición", fr: "Nutrition", de: "Ernährung", pt: "Nutrição", ru: "Питание", hi: "पोषण", ja: "栄養", ar: "التغذية" },
    habits: { en: "Habits", zh: "饮食与习惯", es: "Hábitos", fr: "Habitudes", de: "Gewohnheiten", pt: "Hábitos", ru: "Привычки", hi: "आदतें", ja: "習慣", ar: "العادات" },
    sleep: { en: "Sleep", zh: "睡眠与恢复", es: "Sueño", fr: "Sommeil", de: "Schlaf", pt: "Sono", ru: "Сон", hi: "नींद", ja: "睡眠", ar: "النوم" },
    fitness: { en: "Fitness", zh: "运动与健身", es: "Fitness", fr: "Forme", de: "Fitness", pt: "Fitness", ru: "Фитнес", hi: "फिटनेस", ja: "運動", ar: "اللياقة" },
    lifestyle: { en: "Lifestyle", zh: "生活方式", es: "Estilo de vida", fr: "Mode de vie", de: "Lebensstil", pt: "Estilo de vida", ru: "Образ жизни", hi: "जीवनशैली", ja: "生活習慣", ar: "نمط الحياة" },
    women: { en: "Women's health", zh: "女性健康", es: "Salud femenina", fr: "Santé féminine", de: "Frauengesundheit", pt: "Saúde feminina", ru: "Женское здоровье", hi: "महिला स्वास्थ्य", ja: "女性の健康", ar: "صحة المرأة" }
  };

  const groupSidebar = {
    health: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It gives you a quick starting point in seconds.", "It works better when viewed alongside waist size, body fat, and activity.", "It is useful for trend tracking and habit changes."],
        zh: ["几秒内就能得到一个清晰的起点。", "和腰围、体脂、活动水平一起看会更有参考价值。", "更适合做趋势观察和习惯调整。"],
        es: ["Te da un punto de partida claro en segundos.", "Se entiende mejor junto con cintura, grasa corporal y actividad.", "Es útil para seguir tendencias y ajustar hábitos."],
        fr: ["Il donne un point de départ clair en quelques secondes.", "Il est plus utile avec le tour de taille, la masse grasse et l'activité.", "Il sert bien au suivi des tendances et des habitudes."],
        de: ["Es liefert in Sekunden einen klaren Ausgangspunkt.", "Mit Taille, Körperfett und Aktivität ist es aussagekräftiger.", "Es eignet sich gut für Trendbeobachtung und Gewohnheiten."],
        pt: ["Ele oferece um ponto de partida claro em segundos.", "Fica mais útil junto com cintura, gordura corporal e atividade.", "Serve bem para acompanhar tendências e hábitos."],
        ru: ["За несколько секунд даёт понятную отправную точку.", "Лучше оценивать вместе с талией, жиром и уровнем активности.", "Подходит для отслеживания тенденций и привычек."],
        hi: ["यह कुछ ही सेकंड में एक स्पष्ट शुरुआती बिंदु देता है।", "कमर, बॉडी फैट और गतिविधि के साथ देखने पर यह अधिक उपयोगी है।", "रुझान और आदतों को देखने के लिए यह अच्छा है।"],
        ja: ["数秒でわかりやすい出発点を確認できます。", "ウエスト、体脂肪、活動量と合わせて見るとより参考になります。", "推移の確認や習慣の見直しに向いています。"],
        ar: ["يمنحك نقطة بداية واضحة خلال ثوانٍ.", "يصبح أكثر فائدة عند قراءته مع محيط الخصر والدهون والنشاط.", "يفيد في متابعة الاتجاهات وتعديل العادات."]
      }
    },
    nutrition: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It turns broad nutrition goals into usable daily numbers.", "It works best as a starting point, not a rigid rule.", "Rechecking after two to three weeks usually works well."],
        zh: ["把大方向的营养目标拆成可执行的日常数字。", "更适合作为起点，而不是僵硬的死规定。", "执行两到三周后再复查通常更有价值。"],
        es: ["Convierte objetivos amplios en números diarios utilizables.", "Funciona mejor como punto de partida, no como regla rígida.", "Revisarlo de nuevo tras dos o tres semanas suele funcionar bien."],
        fr: ["Il transforme des objectifs larges en chiffres quotidiens utiles.", "Il sert mieux de point de départ que de règle rigide.", "Une révision après deux ou trois semaines est souvent utile."],
        de: ["Es macht aus groben Zielen alltagstaugliche Zahlen.", "Am besten als Ausgangspunkt, nicht als starre Regel.", "Nach zwei bis drei Wochen erneut prüfen ist oft sinnvoll."],
        pt: ["Transforma metas amplas em números diários utilizáveis.", "Funciona melhor como ponto de partida, não como regra rígida.", "Revisar após duas ou três semanas costuma ajudar."],
        ru: ["Превращает общие цели питания в понятные ежедневные числа.", "Лучше использовать как стартовую точку, а не жёсткое правило.", "Повторная проверка через две-три недели обычно полезна."],
        hi: ["यह बड़े पोषण लक्ष्यों को रोज़मर्रा के उपयोगी अंकों में बदलता है।", "इसे कठोर नियम नहीं, शुरुआती बिंदु की तरह इस्तेमाल करें।", "दो से तीन सप्ताह बाद दोबारा जाँचना उपयोगी रहता है।"],
        ja: ["大まかな栄養目標を毎日使える数字に変えてくれます。", "厳密なルールではなく、出発点として使うのが適切です。", "2〜3週間後に見直すと役立ちます。"],
        ar: ["يحوّل أهداف التغذية العامة إلى أرقام يومية قابلة للتطبيق.", "الأفضل استخدامه كنقطة بداية لا كقاعدة صارمة.", "إعادة المراجعة بعد أسبوعين إلى ثلاثة أسابيع تكون مفيدة عادة."]
      }
    },
    habits: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It is built for everyday execution, not just theory.", "Simple targets are usually easier to repeat consistently.", "Steady routines often matter more than perfect numbers."],
        zh: ["更偏向日常执行，不只是给出理论数字。", "简单目标通常更容易长期坚持。", "稳定的日常结构往往比完美数字更重要。"],
        es: ["Está pensado para la ejecución diaria, no solo para la teoría.", "Los objetivos simples suelen ser más sostenibles.", "Las rutinas estables suelen importar más que los números perfectos."],
        fr: ["Il est conçu pour l'exécution quotidienne, pas seulement pour la théorie.", "Les objectifs simples sont souvent plus faciles à tenir.", "Des routines stables comptent souvent plus que des chiffres parfaits."],
        de: ["Es ist für den Alltag gedacht, nicht nur für Theorie.", "Einfache Ziele lassen sich meist besser durchhalten.", "Stabile Routinen sind oft wichtiger als perfekte Zahlen."],
        pt: ["Foi feito para a prática diária, não só para a teoria.", "Metas simples costumam ser mais fáceis de manter.", "Rotinas estáveis valem mais do que números perfeitos."],
        ru: ["Он рассчитан на повседневное применение, а не только на теорию.", "Простые цели обычно легче соблюдать постоянно.", "Стабильный режим часто важнее идеальных цифр."],
        hi: ["यह रोज़मर्रा के पालन के लिए बनाया गया है, सिर्फ़ सिद्धांत के लिए नहीं।", "सरल लक्ष्य आमतौर पर लगातार निभाना आसान होते हैं।", "स्थिर दिनचर्या अक्सर परफेक्ट अंकों से अधिक महत्वपूर्ण होती है।"],
        ja: ["理論よりも、毎日の実行に向いた設計です。", "シンプルな目標の方が続けやすいことが多いです。", "完璧な数字より、安定した習慣の方が重要です。"],
        ar: ["صممت للاستخدام اليومي وليس للنظرية فقط.", "الأهداف البسيطة أسهل عادة في الالتزام المستمر.", "الروتين الثابت غالبًا أهم من الأرقام المثالية."]
      }
    },
    sleep: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It helps turn sleep timing into a practical plan.", "Consistency often matters more than one ideal night.", "Useful for recovery planning, not diagnosis."],
        zh: ["能把作息时间变成更容易执行的安排。", "规律性通常比某一晚“睡得完美”更重要。", "适合做恢复规划，不适合替代诊断。"],
        es: ["Ayuda a convertir el horario de sueño en un plan práctico.", "La constancia suele importar más que una noche perfecta.", "Sirve para planificar la recuperación, no para diagnosticar."],
        fr: ["Il aide à transformer les horaires de sommeil en plan pratique.", "La régularité compte souvent plus qu'une nuit parfaite.", "Utile pour la récupération, pas pour le diagnostic."],
        de: ["Es macht aus Schlafzeiten einen praktikablen Plan.", "Regelmäßigkeit ist oft wichtiger als eine perfekte Nacht.", "Hilfreich für Erholungsplanung, nicht für Diagnosen."],
        pt: ["Ajuda a transformar o horário do sono em um plano prático.", "Consistência costuma valer mais do que uma noite perfeita.", "Útil para recuperação, não para diagnóstico."],
        ru: ["Помогает превратить режим сна в практичный план.", "Регулярность часто важнее одной идеальной ночи.", "Подходит для планирования восстановления, а не для диагностики."],
        hi: ["यह नींद के समय को एक व्यावहारिक योजना में बदलने में मदद करता है।", "लगातार नियमितता एक आदर्श रात से अधिक महत्वपूर्ण होती है।", "यह रिकवरी योजना के लिए है, निदान के लिए नहीं।"],
        ja: ["睡眠時間を実行しやすい計画に変えやすくなります。", "理想的な一夜よりも、規則性の方が重要なことが多いです。", "診断ではなく、回復計画の参考に向いています。"],
        ar: ["يساعد على تحويل توقيت النوم إلى خطة عملية.", "الانتظام غالبًا أهم من ليلة مثالية واحدة.", "مفيد لتخطيط التعافي وليس للتشخيص."]
      }
    },
    fitness: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It gives a practical reference for training and performance.", "Useful for planning, pacing, and comparing sessions.", "Recovery still matters as much as the number itself."],
        zh: ["能给训练和表现一个实用参考。", "适合做安排、配速和不同训练之间的比较。", "恢复状态仍然和数字本身一样重要。"],
        es: ["Ofrece una referencia práctica para entrenamiento y rendimiento.", "Sirve para planificar, dosificar y comparar sesiones.", "La recuperación sigue siendo tan importante como el número."],
        fr: ["Il donne un repère pratique pour l'entraînement et la performance.", "Utile pour planifier, doser et comparer les séances.", "La récupération reste aussi importante que le chiffre."],
        de: ["Es liefert eine praktische Referenz für Training und Leistung.", "Nützlich für Planung, Steuerung und Vergleich von Einheiten.", "Erholung ist genauso wichtig wie die Zahl selbst."],
        pt: ["Oferece uma referência prática para treino e desempenho.", "Ajuda a planejar, controlar e comparar sessões.", "A recuperação continua sendo tão importante quanto o número."],
        ru: ["Даёт практическую опору для тренировок и результатов.", "Полезен для планирования, темпа и сравнения тренировок.", "Восстановление так же важно, как и само число."],
        hi: ["यह प्रशिक्षण और प्रदर्शन के लिए एक व्यावहारिक संदर्भ देता है।", "योजना, गति और सत्रों की तुलना में मदद करता है।", "रिकवरी भी संख्या जितनी ही महत्वपूर्ण है।"],
        ja: ["トレーニングやパフォーマンスの実用的な参考になります。", "計画、ペース設定、セッション比較に役立ちます。", "数字だけでなく、回復状態も同じくらい重要です。"],
        ar: ["يعطي مرجعًا عمليًا للتدريب والأداء.", "يفيد في التخطيط وضبط الوتيرة ومقارنة الجلسات.", "التعافي لا يقل أهمية عن الرقم نفسه."]
      }
    },
    lifestyle: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It helps you notice patterns in daily life.", "Useful for light self-checks, not medical judgment.", "Small consistent changes usually matter more than one big reaction."],
        zh: ["帮助你看见生活方式里的长期模式。", "适合做轻量自查，不适合医疗判断。", "稳定的小调整通常比一次性大动作更有价值。"],
        es: ["Ayuda a detectar patrones en la vida diaria.", "Sirve para autoevaluaciones ligeras, no para juzgar médicamente.", "Los cambios pequeños y constantes suelen rendir más que una gran reacción."],
        fr: ["Il aide à repérer des tendances dans la vie quotidienne.", "Utile pour de légers auto-contrôles, pas pour un jugement médical.", "De petits changements réguliers valent souvent mieux qu'une grande réaction."],
        de: ["Es hilft, Muster im Alltag zu erkennen.", "Gut für leichte Selbstchecks, nicht für medizinische Urteile.", "Kleine konstante Änderungen sind oft wertvoller als eine große Reaktion."],
        pt: ["Ajuda a perceber padrões na rotina diária.", "É útil para autoavaliações leves, não para julgamento médico.", "Pequenas mudanças consistentes costumam valer mais do que uma reação grande."],
        ru: ["Помогает замечать закономерности в повседневной жизни.", "Подходит для лёгких самопроверок, а не для медицинских выводов.", "Небольшие постоянные изменения обычно полезнее одной резкой меры."],
        hi: ["यह रोज़मर्रा की जीवनशैली के पैटर्न पहचानने में मदद करता है।", "यह हल्के आत्म-जाँच के लिए है, चिकित्सकीय निर्णय के लिए नहीं।", "छोटे और लगातार बदलाव एक बड़े अचानक कदम से अधिक उपयोगी होते हैं।"],
        ja: ["日常生活のパターンに気づきやすくなります。", "軽いセルフチェック向きで、医療判断用ではありません。", "一度の大きな反応より、小さな継続的な改善の方が役立ちます。"],
        ar: ["يساعدك على ملاحظة الأنماط في الحياة اليومية.", "مفيد للفحص الذاتي الخفيف وليس للحكم الطبي.", "التغييرات الصغيرة المستمرة عادة أفضل من رد فعل كبير واحد."]
      }
    },
    women: {
      title: { en: "Why this tool helps", zh: "为什么这个工具有帮助", es: "Por qué ayuda esta herramienta", fr: "Pourquoi cet outil aide", de: "Warum dieses Tool hilft", pt: "Por que esta ferramenta ajuda", ru: "Чем полезен этот инструмент", hi: "यह टूल क्यों उपयोगी है", ja: "このツールが役立つ理由", ar: "لماذا تفيد هذه الأداة" },
      bullets: {
        en: ["It helps turn dates and symptoms into a clearer everyday reference.", "It is built for tracking and planning, not diagnosis.", "If symptoms feel disruptive or unusual, medical guidance matters more than the number."],
        zh: ["把日期、周期和症状整理成更清楚的日常参考。", "更适合做记录、估算和规划，不做诊断。", "如果症状明显影响生活或和平时差异很大，应优先咨询医生。"],
        es: ["Convierte fechas y síntomas en una referencia diaria más clara.", "Está pensada para registrar y planificar, no para diagnosticar.", "Si los síntomas son intensos o inusuales, la orientación médica es más importante que el número."],
        fr: ["Elle transforme dates et symptômes en repère quotidien plus clair.", "Elle sert au suivi et à l'organisation, pas au diagnostic.", "Si les symptômes sont importants ou inhabituels, l'avis médical prime sur le chiffre."],
        de: ["Sie macht Termine, Zyklen und Symptome alltagstauglich nachvollziehbar.", "Sie ist für Dokumentation und Planung gedacht, nicht für Diagnosen.", "Wenn Beschwerden stark oder ungewohnt sind, ist medizinischer Rat wichtiger als das Ergebnis."],
        pt: ["Transforma datas e sintomas em uma referência diária mais clara.", "Foi feita para registro e planejamento, não para diagnóstico.", "Se os sintomas forem fortes ou incomuns, a orientação médica é mais importante do que o número."],
        ru: ["Помогает превратить даты и симптомы в более понятный повседневный ориентир.", "Подходит для отслеживания и планирования, а не для диагноза.", "Если симптомы выражены или необычны, совет врача важнее любого расчёта."],
        hi: ["यह तारीखों और लक्षणों को अधिक स्पष्ट रोज़मर्रा संदर्भ में बदलता है।", "यह ट्रैकिंग और योजना के लिए है, निदान के लिए नहीं।", "यदि लक्षण असामान्य या अधिक परेशान करने वाले हों, तो डॉक्टर की सलाह संख्या से अधिक महत्वपूर्ण है।"],
        ja: ["日付や症状を、日常で見返しやすい参考情報に整理できます。", "記録や見通しづくりのためのツールであり、診断用ではありません。", "症状が強い、いつもと違うと感じる場合は、結果より医療相談を優先してください。"],
        ar: ["يساعد على تحويل التواريخ والأعراض إلى مرجع يومي أوضح.", "صمم للتتبع والتخطيط وليس للتشخيص.", "إذا كانت الأعراض قوية أو غير معتادة فالمشورة الطبية أهم من أي نتيجة حسابية."]
      }
    }
  };

  function normalizeLang(lang) {
    const value = String(lang || "en").toLowerCase();
    if (value.startsWith("zh")) return "zh";
    return value.split("-")[0];
  }

  function pageLang() {
    const fromPath = location.pathname.split("/").filter(Boolean)[0];
    if (fromPath) {
      const normalized = normalizeLang(fromPath);
      if (translations[normalized]) return normalized;
    }
    return normalizeLang(document.documentElement.lang || "en");
  }

  function t(lang, key) {
    const current = normalizeLang(lang);
    return (translations[current] && translations[current][key]) || translations.en[key] || key;
  }

  function translateText(lang, text) {
    const current = normalizeLang(lang);
    if (Array.isArray(text)) return text.map((item) => translateText(current, item));
    if (!text || current === "en") return text;
    if (phraseMap[text] && phraseMap[text][current]) return phraseMap[text][current];
    return text;
  }

  function kgFromInput(units, metricValue, imperialValue) {
    return units === "imperial" ? Number(imperialValue) * 0.45359237 : Number(metricValue);
  }

  function cmFromInput(units, metricValue, feet, inches) {
    return units === "imperial" ? ((Number(feet) * 12) + Number(inches || 0)) * 2.54 : Number(metricValue);
  }

  function inchesFromLinear(units, value) {
    return units === "imperial" ? Number(value) : Number(value) / 2.54;
  }

  function round(value, digits) {
    return Number(value).toFixed(digits);
  }

  function statusBox(status, good, caution) {
    return status === "good" ? good : caution;
  }

  function zh(lang, cn, en) {
    const current = normalizeLang(lang);
    if (current === "zh") return cn;
    return translateText(current, en);
  }

  function labelFor(lang, value) {
    const current = normalizeLang(lang);
    if (value && typeof value === "object") {
      if (value[current]) return value[current];
      if (current === "zh" && value.zh) return value.zh;
      return translateText(current, value.en || value.zh || "");
    }
    return translateText(current, value);
  }

  function formatMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  function localeForLang(lang) {
    const current = normalizeLang(lang);
    const locales = { zh: "zh-CN", en: "en-US", es: "es-ES", fr: "fr-FR", de: "de-DE", pt: "pt-BR", ru: "ru-RU", hi: "hi-IN", ja: "ja-JP", ar: "ar-SA" };
    return locales[current] || "en-US";
  }

  function parseDateInput(value) {
    if (!value) return null;
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function addDays(date, days) {
    const next = new Date(date.getTime());
    next.setDate(next.getDate() + Number(days));
    return next;
  }

  function daysBetween(start, end) {
    return Math.round((end.getTime() - start.getTime()) / 86400000);
  }

  function formatDateForLang(lang, date) {
    return new Intl.DateTimeFormat(localeForLang(lang), { year: "numeric", month: "short", day: "numeric" }).format(date);
  }

  const womenLabels = {
    lastPeriodDate: { zh: "最近一次月经开始日期", en: "Last period start date", es: "Fecha de inicio del último período", fr: "Date de début des dernières règles", de: "Startdatum der letzten Periode", pt: "Data de início da última menstruação", ru: "Дата начала последней менструации", hi: "पिछली माहवारी शुरू होने की तारीख", ja: "直近の月経開始日", ar: "تاريخ بدء آخر دورة" },
    cycleLengthDays: { zh: "周期长度（天）", en: "Cycle length (days)", es: "Duración del ciclo (días)", fr: "Durée du cycle (jours)", de: "Zykluslänge (Tage)", pt: "Duração do ciclo (dias)", ru: "Длина цикла (дни)", hi: "चक्र की लंबाई (दिन)", ja: "周期の長さ（日）", ar: "طول الدورة (أيام)" },
    periodLengthDays: { zh: "经期天数", en: "Period length (days)", es: "Duración del período (días)", fr: "Durée des règles (jours)", de: "Dauer der Periode (Tage)", pt: "Duração da menstruação (dias)", ru: "Длительность менструации (дни)", hi: "माहवारी की अवधि (दिन)", ja: "月経日数", ar: "مدة النزف (أيام)" },
    cycleOne: { zh: "最近一次周期（天）", en: "Most recent cycle (days)", es: "Ciclo más reciente (días)", fr: "Cycle le plus récent (jours)", de: "Letzter Zyklus (Tage)", pt: "Ciclo mais recente (dias)", ru: "Последний цикл (дни)", hi: "सबसे हाल का चक्र (दिन)", ja: "直近の周期（日）", ar: "آخر دورة (أيام)" },
    cycleTwo: { zh: "上一次周期（天）", en: "Previous cycle (days)", es: "Ciclo anterior (días)", fr: "Cycle précédent (jours)", de: "Vorheriger Zyklus (Tage)", pt: "Ciclo anterior (dias)", ru: "Предыдущий цикл (дни)", hi: "पिछला चक्र (दिन)", ja: "1つ前の周期（日）", ar: "الدورة السابقة (أيام)" },
    cycleThree: { zh: "再上一次周期（天）", en: "Third recent cycle (days)", es: "Tercer ciclo reciente (días)", fr: "Troisième cycle récent (jours)", de: "Drittletzter Zyklus (Tage)", pt: "Terceiro ciclo recente (dias)", ru: "Третий недавний цикл (дни)", hi: "तीसरा हालिया चक्र (दिन)", ja: "さらに前の周期（日）", ar: "الدورة الثالثة الأخيرة (أيام)" },
    cycleFour: { zh: "第四次周期（天）", en: "Fourth recent cycle (days)", es: "Cuarto ciclo reciente (días)", fr: "Quatrième cycle récent (jours)", de: "Vierter letzter Zyklus (Tage)", pt: "Quarto ciclo recente (dias)", ru: "Четвертый недавний цикл (дни)", hi: "चौथा हालिया चक्र (दिन)", ja: "4回目の周期（日）", ar: "الدورة الرابعة الأخيرة (أيام)" },
    dueDate: { zh: "预产期", en: "Estimated due date", es: "Fecha probable de parto", fr: "Date prévue d'accouchement", de: "Voraussichtlicher Geburtstermin", pt: "Data prevista do parto", ru: "Предполагаемая дата родов", hi: "अनुमानित ड्यू डेट", ja: "出産予定日", ar: "تاريخ الولادة المتوقع" },
    heightOnly: { zh: "身高（cm）", en: "Height (cm)", es: "Altura (cm)", fr: "Taille (cm)", de: "Größe (cm)", pt: "Altura (cm)", ru: "Рост (см)", hi: "लंबाई (सेमी)", ja: "身長 (cm)", ar: "الطول (سم)" },
    weightOnly: { zh: "孕前体重（kg）", en: "Pre-pregnancy weight (kg)", es: "Peso antes del embarazo (kg)", fr: "Poids avant grossesse (kg)", de: "Gewicht vor der Schwangerschaft (kg)", pt: "Peso antes da gravidez (kg)", ru: "Вес до беременности (кг)", hi: "गर्भावस्था से पहले का वज़न (किग्रा)", ja: "妊娠前の体重 (kg)", ar: "الوزن قبل الحمل (كجم)" },
    trimester: { zh: "当前阶段", en: "Current stage", es: "Etapa actual", fr: "Stade actuel", de: "Aktuelle Phase", pt: "Fase atual", ru: "Текущий этап", hi: "वर्तमान चरण", ja: "現在の段階", ar: "المرحلة الحالية" },
    symptomCount: { zh: "本月主要症状数量", en: "Main symptom count this cycle", es: "Cantidad principal de síntomas en este ciclo", fr: "Nombre principal de symptômes ce cycle", de: "Anzahl der Hauptsymptome in diesem Zyklus", pt: "Quantidade principal de sintomas neste ciclo", ru: "Количество основных симптомов в этом цикле", hi: "इस चक्र में मुख्य लक्षणों की संख्या", ja: "今回の主な症状数", ar: "عدد الأعراض الرئيسية في هذه الدورة" },
    symptomImpact: { zh: "对日常影响程度", en: "Impact on daily life", es: "Impacto en la vida diaria", fr: "Impact au quotidien", de: "Auswirkung auf den Alltag", pt: "Impacto no dia a dia", ru: "Влияние на повседневную жизнь", hi: "दैनिक जीवन पर असर", ja: "日常生活への影響", ar: "التأثير على الحياة اليومية" },
    daysBeforePeriod: { zh: "通常在月经前几天出现", en: "Usually starts how many days before your period", es: "Suele comenzar cuántos días antes del período", fr: "Commence habituellement combien de jours avant les règles", de: "Beginnt gewöhnlich wie viele Tage vor der Periode", pt: "Costuma começar quantos dias antes da menstruação", ru: "Обычно начинается за сколько дней до менструации", hi: "आमतौर पर माहवारी से कितने दिन पहले शुरू होता है", ja: "月経の何日前から出やすいか", ar: "عادة يبدأ قبل الدورة بكم يوم" }
  };

  const womenChoices = {
    trimester: [
      { value: "first", label: { zh: "孕早期", en: "First trimester", es: "Primer trimestre", fr: "Premier trimestre", de: "Erstes Trimester", pt: "Primeiro trimestre", ru: "Первый триместр", hi: "पहली तिमाही", ja: "妊娠初期", ar: "الثلث الأول" } },
      { value: "second", label: { zh: "孕中期", en: "Second trimester", es: "Segundo trimestre", fr: "Deuxième trimestre", de: "Zweites Trimester", pt: "Segundo trimestre", ru: "Второй триместр", hi: "दूसरी तिमाही", ja: "妊娠中期", ar: "الثلث الثاني" } },
      { value: "third", label: { zh: "孕晚期", en: "Third trimester", es: "Tercer trimestre", fr: "Troisième trimestre", de: "Drittes Trimester", pt: "Terceiro trimestre", ru: "Третий триместр", hi: "तीसरी तिमाही", ja: "妊娠後期", ar: "الثلث الثالث" } }
    ],
    symptomCount: [
      { value: "1", label: { zh: "1 到 2 个", en: "1 to 2", es: "1 a 2", fr: "1 à 2", de: "1 bis 2", pt: "1 a 2", ru: "1–2", hi: "1 से 2", ja: "1〜2 個", ar: "1 إلى 2" } },
      { value: "3", label: { zh: "3 到 4 个", en: "3 to 4", es: "3 a 4", fr: "3 à 4", de: "3 bis 4", pt: "3 a 4", ru: "3–4", hi: "3 से 4", ja: "3〜4 個", ar: "3 إلى 4" } },
      { value: "5", label: { zh: "5 个以上", en: "5 or more", es: "5 o más", fr: "5 ou plus", de: "5 oder mehr", pt: "5 ou mais", ru: "5 и более", hi: "5 या अधिक", ja: "5 個以上", ar: "5 أو أكثر" } }
    ],
    symptomImpact: [
      { value: "light", label: { zh: "轻微，可正常安排", en: "Light, still manageable", es: "Leve, manejable", fr: "Léger, gérable", de: "Leicht, gut machbar", pt: "Leve, ainda manejável", ru: "Легко, терпимо", hi: "हल्का, संभालने योग्य", ja: "軽い、日常に大きな影響なし", ar: "خفيف ويمكن التعامل معه" } },
      { value: "moderate", label: { zh: "中等，需要调整安排", en: "Moderate, needs adjustment", es: "Moderado, requiere ajustes", fr: "Modéré, demande des ajustements", de: "Mittel, braucht Anpassungen", pt: "Moderado, exige ajustes", ru: "Умеренно, нужны корректировки", hi: "मध्यम, कुछ बदलाव चाहिए", ja: "中程度、予定調整が必要", ar: "متوسط ويحتاج إلى تعديل" } },
      { value: "high", label: { zh: "明显影响学习或工作", en: "High, clearly disruptive", es: "Alto, claramente afecta", fr: "Fort, perturbant clairement", de: "Stark, deutlich belastend", pt: "Alto, claramente atrapalha", ru: "Сильно мешает", hi: "अधिक, स्पष्ट रूप से बाधित करता है", ja: "強い、学業や仕事に影響", ar: "مرتفع ويؤثر بوضوح" } }
    ],
    daysBeforePeriod: [
      { value: "1", label: { zh: "1 到 2 天前", en: "1 to 2 days before", es: "1 a 2 días antes", fr: "1 à 2 jours avant", de: "1 bis 2 Tage vorher", pt: "1 a 2 dias antes", ru: "За 1–2 дня", hi: "1 से 2 दिन पहले", ja: "1〜2日前", ar: "قبل 1 إلى 2 يوم" } },
      { value: "4", label: { zh: "3 到 5 天前", en: "3 to 5 days before", es: "3 a 5 días antes", fr: "3 à 5 jours avant", de: "3 bis 5 Tage vorher", pt: "3 a 5 dias antes", ru: "За 3–5 дней", hi: "3 से 5 दिन पहले", ja: "3〜5日前", ar: "قبل 3 إلى 5 أيام" } },
      { value: "7", label: { zh: "6 天及以上", en: "6 or more days before", es: "6 o más días antes", fr: "6 jours ou plus avant", de: "6 oder mehr Tage vorher", pt: "6 ou mais dias antes", ru: "За 6 и более дней", hi: "6 या अधिक दिन पहले", ja: "6日以上前", ar: "قبل 6 أيام أو أكثر" } }
    ]
  };

  function bmiCategoryData(lang, bmi) {
    if (bmi < 18.5) {
      return {
        key: "underweight",
        label: zh(lang, "偏轻", "Underweight"),
        tone: "low",
        marker: 12,
        oneLiner: zh(lang, "你的 BMI 低于常见健康参考范围，适合优先关注营养和力量训练。", "Your BMI is below the common healthy range, so nutrition quality and strength work deserve attention first."),
        risks: zh(lang, ["可能更容易感到疲劳或恢复慢", "建议排查长期吃不够或蛋白质不足"], ["You may feel lower energy or slower recovery", "Long-term low intake or low protein may be worth reviewing"])
      };
    }
    if (bmi < 25) {
      const closeToUpper = bmi >= 23;
      return {
        key: "normal",
        label: zh(lang, "正常范围", "Normal Weight"),
        tone: "good",
        marker: Math.min(54, 32 + ((bmi - 18.5) / 6.5) * 22),
        oneLiner: zh(lang, closeToUpper ? "你处在健康范围内，但已经接近上沿。" : "你目前处在常见健康体重范围内。", closeToUpper ? "You are in a healthy range, but close to the upper limit." : "You are currently in the common healthy weight range."),
        risks: zh(lang, ["整体风险较低，重点是长期保持", closeToUpper ? "如果腰围持续增加，建议更早干预" : "继续关注腰围、睡眠和力量水平"], ["Overall risk is relatively low, with maintenance as the main focus", closeToUpper ? "If waist size keeps rising, earlier adjustments help" : "Keep watching waist size, sleep, and strength markers"])
      };
    }
    if (bmi < 30) {
      return {
        key: "overweight",
        label: zh(lang, "超重", "Overweight"),
        tone: "mid",
        marker: Math.min(78, 58 + ((bmi - 25) / 5) * 20),
        oneLiner: zh(lang, "你的 BMI 高于常见健康范围，适合从热量和活动习惯开始调整。", "Your BMI is above the common healthy range, so calories and activity habits are the best place to start."),
        risks: zh(lang, ["体重相关风险开始上升", "如果久坐较多，更建议增加步数和力量训练"], ["Weight-related risk is starting to rise", "If your days are sedentary, daily steps and resistance training matter more"])
      };
    }
    return {
      key: "obese",
      label: zh(lang, "肥胖", "Obese"),
      tone: "high",
      marker: 90,
      oneLiner: zh(lang, "你的 BMI 明显高于常见健康范围，建议尽早采取稳健的减重策略。", "Your BMI is well above the common healthy range, and a steady weight-loss plan is worth starting early."),
      risks: zh(lang, ["体重相关健康风险较高", "更适合用小步、长期可坚持的方式改善"], ["Weight-related health risk is meaningfully higher", "Small sustainable changes are more useful than aggressive short-term cuts"])
    };
  }

  function bmiRangeBar(marker) {
    const lang = pageLang();
    return `
      <div class="bmi-scale" aria-hidden="true">
        <div class="bmi-scale-track">
          <span class="bmi-band bmi-band-low"></span>
          <span class="bmi-band bmi-band-good"></span>
          <span class="bmi-band bmi-band-mid"></span>
          <span class="bmi-band bmi-band-high"></span>
          <span class="bmi-marker" style="left:${marker}%"></span>
        </div>
        <div class="bmi-scale-labels">
          <span>${zh(lang, "偏轻", "Underweight")}</span>
          <span>${zh(lang, "正常", "Normal")}</span>
          <span>${zh(lang, "超重", "Overweight")}</span>
          <span>${zh(lang, "肥胖", "Obese")}</span>
        </div>
      </div>
    `;
  }

  function scaleText(lang, values) {
    return labelFor(lang, values);
  }

  function genericRangeBar(lang, config) {
    const template = config.segments.map((segment) => `${segment.weight || 1}fr`).join(" ");
    return `
      <div class="reference-visual">
        <div class="reference-head">
          <h3>${config.title}</h3>
          <p>${config.note}</p>
        </div>
        <div class="reference-scale" aria-hidden="true">
          <div class="reference-scale-track" style="grid-template-columns:${template}">
            ${config.segments.map((segment) => `<span class="bmi-band ${segment.tone}"></span>`).join("")}
            <span class="reference-marker" style="left:${config.marker}%"></span>
          </div>
          <div class="reference-scale-labels" style="grid-template-columns:${template}">
            ${config.segments.map((segment) => `<span>${segment.label}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function clampPercent(value, min, max) {
    if (!Number.isFinite(value)) return 0;
    if (value <= min) return 0;
    if (value >= max) return 100;
    return ((value - min) / (max - min)) * 100;
  }

  function referenceVisual(lang, slug, values) {
    const current = normalizeLang(lang);
    const title = scaleText(lang, {
      zh: "结果参考图",
      en: "Reference guide",
      es: "Guía de referencia",
      fr: "Repère visuel",
      de: "Referenzübersicht",
      pt: "Guia de referência",
      ru: "Справочная шкала",
      hi: "संदर्भ मार्गदर्शिका",
      ja: "参考ガイド",
      ar: "دليل مرجعي"
    });

    if (slug === "bodyfat") {
      const height = cmFromInput(values.units, values.height, values.height, values.heightInches) / 2.54;
      const waist = inchesFromLinear(values.units, values.waist);
      const neck = inchesFromLinear(values.units, values.neck);
      const hip = inchesFromLinear(values.units, values.hip || 0);
      if (values.sex === "female" && !values.hip) return "";
      const fat = values.sex === "male"
        ? 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
        : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
      const bands = values.sex === "male"
        ? [
            { max: 10, label: scaleText(lang, { zh: "较低", en: "Low", es: "Bajo", fr: "Bas", de: "Niedrig", pt: "Baixo", ru: "Низко", hi: "कम", ja: "低め", ar: "منخفض" }), weight: 10, tone: "bmi-band-low" },
            { max: 20, label: scaleText(lang, { zh: "常见", en: "Typical", es: "Típico", fr: "Usuel", de: "Typisch", pt: "Comum", ru: "Обычно", hi: "सामान्य", ja: "一般的", ar: "شائع" }), weight: 10, tone: "bmi-band-good" },
            { max: 25, label: scaleText(lang, { zh: "偏高", en: "Higher", es: "Más alto", fr: "Plus haut", de: "Höher", pt: "Mais alto", ru: "Выше", hi: "ऊँचा", ja: "やや高め", ar: "أعلى" }), weight: 5, tone: "bmi-band-mid" },
            { max: 35, label: scaleText(lang, { zh: "较高", en: "High", es: "Alto", fr: "Élevé", de: "Hoch", pt: "Alto", ru: "Высоко", hi: "अधिक", ja: "高め", ar: "مرتفع" }), weight: 10, tone: "bmi-band-high" }
          ]
        : [
            { max: 18, label: scaleText(lang, { zh: "较低", en: "Low", es: "Bajo", fr: "Bas", de: "Niedrig", pt: "Baixo", ru: "Низко", hi: "कम", ja: "低め", ar: "منخفض" }), weight: 18, tone: "bmi-band-low" },
            { max: 30, label: scaleText(lang, { zh: "常见", en: "Typical", es: "Típico", fr: "Usuel", de: "Typisch", pt: "Comum", ru: "Обычно", hi: "सामान्य", ja: "一般的", ar: "شائع" }), weight: 12, tone: "bmi-band-good" },
            { max: 35, label: scaleText(lang, { zh: "偏高", en: "Higher", es: "Más alto", fr: "Plus haut", de: "Höher", pt: "Mais alto", ru: "Выше", hi: "ऊँचा", ja: "やや高め", ar: "أعلى" }), weight: 5, tone: "bmi-band-mid" },
            { max: 45, label: scaleText(lang, { zh: "较高", en: "High", es: "Alto", fr: "Élevé", de: "Hoch", pt: "Alto", ru: "Высоко", hi: "अधिक", ja: "高め", ar: "مرتفع" }), weight: 10, tone: "bmi-band-high" }
          ];
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: values.sex === "male" ? "男性常见参考线" : "女性常见参考线",
          en: values.sex === "male" ? "Typical male reference bands" : "Typical female reference bands",
          es: values.sex === "male" ? "Bandas de referencia masculina" : "Bandas de referencia femenina",
          fr: values.sex === "male" ? "Repères masculins usuels" : "Repères féminins usuels",
          de: values.sex === "male" ? "Übliche Referenzbereiche für Männer" : "Übliche Referenzbereiche für Frauen",
          pt: values.sex === "male" ? "Faixas de referência para homens" : "Faixas de referência para mulheres",
          ru: values.sex === "male" ? "Типичные мужские диапазоны" : "Типичные женские диапазоны",
          hi: values.sex === "male" ? "पुरुषों के सामान्य संदर्भ" : "महिलाओं के सामान्य संदर्भ",
          ja: values.sex === "male" ? "男性の一般的な目安" : "女性の一般的な目安",
          ar: values.sex === "male" ? "نطاقات مرجعية شائعة للرجال" : "نطاقات مرجعية شائعة للنساء"
        }),
        segments: bands,
        marker: clampPercent(fat, 0, bands[bands.length - 1].max)
      });
    }

    if (slug === "wthr") {
      const heightCm = cmFromInput(values.units, values.height, values.height, values.heightInches);
      const waistCm = values.units === "imperial" ? Number(values.waist) * 2.54 : Number(values.waist);
      const ratio = waistCm / heightCm;
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: "腰高比常见参考线",
          en: "Common waist-to-height reference bands",
          es: "Bandas comunes de cintura/altura",
          fr: "Repères courants taille/taille",
          de: "Übliche Referenzbänder für Taille-Größe",
          pt: "Faixas comuns de cintura/altura",
          ru: "Обычные ориентиры талия/рост",
          hi: "कमर-लंबाई सामान्य संदर्भ",
          ja: "腹囲/身長の一般的な目安",
          ar: "نطاقات شائعة لنسبة الخصر إلى الطول"
        }),
        segments: [
          { label: scaleText(lang, { zh: "较低", en: "Lower", es: "Más bajo", fr: "Plus bas", de: "Niedriger", pt: "Mais baixo", ru: "Ниже", hi: "कम", ja: "低め", ar: "أقل" }), weight: 40, tone: "bmi-band-low" },
          { label: scaleText(lang, { zh: "较理想", en: "Favorable", es: "Favorable", fr: "Favorable", de: "Günstig", pt: "Favorável", ru: "Благоприятно", hi: "उचित", ja: "良好", ar: "أفضل" }), weight: 10, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "偏高", en: "Higher", es: "Más alto", fr: "Plus haut", de: "Höher", pt: "Mais alto", ru: "Выше", hi: "ऊँचा", ja: "やや高め", ar: "أعلى" }), weight: 10, tone: "bmi-band-mid" },
          { label: scaleText(lang, { zh: "较高", en: "High", es: "Alto", fr: "Élevé", de: "Hoch", pt: "Alto", ru: "Высоко", hi: "अधिक", ja: "高め", ar: "مرتفع" }), weight: 10, tone: "bmi-band-high" }
        ],
        marker: clampPercent(ratio, 0, 0.7)
      });
    }

    if (slug === "sodium") {
      const sodium = Number(values.sodium);
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: "按每日钠摄入量看常见参考范围",
          en: "Common daily sodium reference ranges",
          es: "Rangos comunes de sodio diario",
          fr: "Repères courants de sodium quotidien",
          de: "Übliche Tagesbereiche für Natrium",
          pt: "Faixas comuns de sódio diário",
          ru: "Обычные ориентиры по натрию в день",
          hi: "दैनिक सोडियम के सामान्य संदर्भ",
          ja: "1日のナトリウム量の一般的な目安",
          ar: "نطاقات شائعة للصوديوم اليومي"
        }),
        segments: [
          { label: scaleText(lang, { zh: "较低", en: "Lower", es: "Bajo", fr: "Bas", de: "Niedrig", pt: "Baixo", ru: "Ниже", hi: "कम", ja: "少なめ", ar: "أقل" }), weight: 1500, tone: "bmi-band-low" },
          { label: scaleText(lang, { zh: "常见上限内", en: "Within limit", es: "Dentro del límite", fr: "Dans la limite", de: "Im Rahmen", pt: "Dentro do limite", ru: "В пределах", hi: "सीमा के भीतर", ja: "上限内", ar: "ضمن الحد" }), weight: 800, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "偏高", en: "High", es: "Alto", fr: "Élevé", de: "Hoch", pt: "Alto", ru: "Высоко", hi: "अधिक", ja: "高め", ar: "مرتفع" }), weight: 1700, tone: "bmi-band-high" }
        ],
        marker: clampPercent(sodium, 0, 4000)
      });
    }

    if (slug === "caffeine") {
      const weightKg = kgFromInput(values.units, values.weight, values.weight);
      const currentValue = Number(values.caffeine);
      const ceiling = Math.min(400, weightKg * 6);
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: `当前值相对建议上限 ${Math.round(ceiling)} mg/天`,
          en: `Current intake relative to a practical ceiling of ${Math.round(ceiling)} mg/day`,
          es: `Ingesta actual frente a un techo práctico de ${Math.round(ceiling)} mg/día`,
          fr: `Apport actuel par rapport à un plafond pratique de ${Math.round(ceiling)} mg/jour`,
          de: `Aktueller Wert im Verhältnis zu einer praktikablen Obergrenze von ${Math.round(ceiling)} mg/Tag`,
          pt: `Consumo atual em relação a um teto prático de ${Math.round(ceiling)} mg/dia`,
          ru: `Текущее потребление относительно практичного потолка ${Math.round(ceiling)} мг/день`,
          hi: `मौजूदा सेवन लगभग ${Math.round(ceiling)} mg/दिन की व्यावहारिक सीमा के मुकाबले`,
          ja: `実用的な上限 ${Math.round(ceiling)} mg/日 に対する現在量`,
          ar: `الكمية الحالية مقارنة بسقف عملي قدره ${Math.round(ceiling)} ملغ/اليوم`
        }),
        segments: [
          { label: scaleText(lang, { zh: "温和", en: "Moderate", es: "Moderado", fr: "Modéré", de: "Moderat", pt: "Moderado", ru: "Умеренно", hi: "मध्यम", ja: "控えめ", ar: "معتدل" }), weight: 50, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "接近上限", en: "Near ceiling", es: "Cerca del límite", fr: "Près de la limite", de: "Nahe Obergrenze", pt: "Perto do limite", ru: "Близко к пределу", hi: "सीमा के करीब", ja: "上限に近い", ar: "قريب من الحد" }), weight: 50, tone: "bmi-band-mid" },
          { label: scaleText(lang, { zh: "偏高", en: "High", es: "Alto", fr: "Élevé", de: "Hoch", pt: "Alto", ru: "Высоко", hi: "अधिक", ja: "高め", ar: "مرتفع" }), weight: 30, tone: "bmi-band-high" }
        ],
        marker: clampPercent(currentValue, 0, ceiling * 1.3)
      });
    }

    if (slug === "hydrationcheck") {
      const percent = (Number(values.actualWater) / Number(values.targetWater)) * 100;
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: "按今天对饮水目标的完成度查看",
          en: "Read against today's progress toward the hydration target",
          es: "Lectura según el progreso del objetivo de hidratación",
          fr: "Lecture selon l'avancement de l'objectif d'hydratation",
          de: "Einordnung nach dem heutigen Fortschritt zum Trinkziel",
          pt: "Leitura de acordo com o progresso da meta de hidratação",
          ru: "Оценка по сегодняшнему прогрессу к цели по воде",
          hi: "आज के जल लक्ष्य की प्रगति के आधार पर",
          ja: "今日の目標達成度で見る目安",
          ar: "القراءة وفق تقدم هدف الترطيب اليومي"
        }),
        segments: [
          { label: scaleText(lang, { zh: "不足", en: "Low", es: "Bajo", fr: "Faible", de: "Niedrig", pt: "Baixo", ru: "Низко", hi: "कम", ja: "不足", ar: "منخفض" }), weight: 50, tone: "bmi-band-low" },
          { label: scaleText(lang, { zh: "接近", en: "Approaching", es: "Acercándose", fr: "En approche", de: "Nahe dran", pt: "Aproximando", ru: "Почти", hi: "करीब", ja: "もう少し", ar: "قريب" }), weight: 30, tone: "bmi-band-mid" },
          { label: scaleText(lang, { zh: "达标", en: "On target", es: "En objetivo", fr: "Dans la cible", de: "Im Ziel", pt: "Na meta", ru: "В цели", hi: "लक्ष्य पर", ja: "達成", ar: "ضمن الهدف" }), weight: 30, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "明显超出", en: "Well above", es: "Muy por encima", fr: "Bien au-dessus", de: "Deutlich darüber", pt: "Bem acima", ru: "Сильно выше", hi: "काफी अधिक", ja: "かなり超過", ar: "أعلى بكثير" }), weight: 30, tone: "bmi-band-high" }
        ],
        marker: clampPercent(percent, 0, 140)
      });
    }

    if (slug === "sleepdebt") {
      const debtHours = Math.max(0, (Number(values.targetSleep) - Number(values.actualSleep)) * Number(values.days));
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: "按累计睡眠缺口查看",
          en: "Read against estimated accumulated sleep debt",
          es: "Lectura según la deuda de sueño acumulada",
          fr: "Lecture selon la dette de sommeil cumulée",
          de: "Einordnung nach geschätzter Schlafschuld",
          pt: "Leitura segundo a dívida de sono acumulada",
          ru: "Оценка по накопленному недосыпу",
          hi: "संचित नींद कमी के आधार पर",
          ja: "累積した睡眠不足の目安",
          ar: "القراءة وفق تراكم دين النوم"
        }),
        segments: [
          { label: scaleText(lang, { zh: "很少", en: "Low", es: "Baja", fr: "Faible", de: "Gering", pt: "Baixa", ru: "Низко", hi: "कम", ja: "少ない", ar: "منخفض" }), weight: 2, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "开始累积", en: "Building", es: "Acumulando", fr: "En hausse", de: "Steigend", pt: "Acumulando", ru: "Нарастает", hi: "जमा हो रही", ja: "蓄積中", ar: "في ازدياد" }), weight: 3, tone: "bmi-band-mid" },
          { label: scaleText(lang, { zh: "偏高", en: "High", es: "Alta", fr: "Élevée", de: "Hoch", pt: "Alta", ru: "Высоко", hi: "अधिक", ja: "高め", ar: "مرتفعة" }), weight: 5, tone: "bmi-band-high" },
          { label: scaleText(lang, { zh: "需要修复", en: "Needs reset", es: "Necesita reajuste", fr: "À corriger", de: "Braucht Erholung", pt: "Pede ajuste", ru: "Нужна коррекция", hi: "सुधार चाहिए", ja: "立て直しが必要", ar: "يحتاج إلى تصحيح" }), weight: 6, tone: "bmi-band-high" }
        ],
        marker: clampPercent(debtHours, 0, 16)
      });
    }

    if (slug === "cycleregularity") {
      const cycles = [Number(values.cycleOne), Number(values.cycleTwo), Number(values.cycleThree), Number(values.cycleFour)];
      const span = Math.max(...cycles) - Math.min(...cycles);
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: "按最近几个周期的跨度查看稳定度",
          en: "Read regularity from the spread across recent cycles",
          es: "Lee la regularidad según la diferencia entre ciclos recientes",
          fr: "Lisez la régularité selon l'écart entre les cycles récents",
          de: "Regelmäßigkeit anhand der Spannweite jüngster Zyklen",
          pt: "Leia a regularidade pela variação entre ciclos recentes",
          ru: "Оценка регулярности по разбросу последних циклов",
          hi: "हाल के चक्रों के अंतर के आधार पर नियमितता देखें",
          ja: "最近の周期差から安定度をみる目安",
          ar: "اقرئي الانتظام حسب الفارق بين الدورات الأخيرة"
        }),
        segments: [
          { label: scaleText(lang, { zh: "较稳定", en: "Steady", es: "Estable", fr: "Stable", de: "Stabil", pt: "Estável", ru: "Стабильно", hi: "स्थिर", ja: "安定", ar: "مستقرة" }), weight: 3, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "有波动", en: "Some variation", es: "Algo variable", fr: "Un peu variable", de: "Etwas wechselhaft", pt: "Alguma variação", ru: "Есть колебания", hi: "कुछ बदलाव", ja: "やや変動", ar: "بعض التفاوت" }), weight: 4, tone: "bmi-band-mid" },
          { label: scaleText(lang, { zh: "波动较大", en: "More variable", es: "Más variable", fr: "Plus variable", de: "Deutlicher schwankend", pt: "Mais variável", ru: "Более изменчиво", hi: "काफी बदलता", ja: "変動大", ar: "أكثر تباينًا" }), weight: 5, tone: "bmi-band-high" }
        ],
        marker: clampPercent(span, 0, 12)
      });
    }

    if (slug === "pregnancyweight") {
      const heightM = Number(values.height) / 100;
      const weight = Number(values.weight);
      const bmi = weight / (heightM * heightM);
      return genericRangeBar(lang, {
        title,
        note: scaleText(lang, {
          zh: "按孕前 BMI 对照孕期体重增长范围",
          en: "Pregnancy gain reference based on pre-pregnancy BMI",
          es: "Referencia de ganancia según IMC previo al embarazo",
          fr: "Repère de prise de poids selon l'IMC avant grossesse",
          de: "Gewichtszunahme-Referenz nach BMI vor der Schwangerschaft",
          pt: "Referência de ganho segundo o IMC antes da gravidez",
          ru: "Ориентир набора веса по ИМТ до беременности",
          hi: "गर्भावस्था से पहले के BMI पर आधारित संदर्भ",
          ja: "妊娠前 BMI に基づく増加目安",
          ar: "مرجع الزيادة حسب مؤشر كتلة الجسم قبل الحمل"
        }),
        segments: [
          { label: scaleText(lang, { zh: "偏轻", en: "Lower BMI", es: "IMC bajo", fr: "IMC bas", de: "Niedriger BMI", pt: "IMC baixo", ru: "Низкий ИМТ", hi: "कम BMI", ja: "低め", ar: "BMI منخفض" }), weight: 18.5, tone: "bmi-band-low" },
          { label: scaleText(lang, { zh: "常见范围", en: "Usual range", es: "Rango usual", fr: "Zone usuelle", de: "Üblicher Bereich", pt: "Faixa usual", ru: "Обычный диапазон", hi: "सामान्य सीमा", ja: "一般範囲", ar: "النطاق المعتاد" }), weight: 6.5, tone: "bmi-band-good" },
          { label: scaleText(lang, { zh: "偏高", en: "Higher BMI", es: "IMC más alto", fr: "IMC plus élevé", de: "Höherer BMI", pt: "IMC mais alto", ru: "Повышенный ИМТ", hi: "ऊँचा BMI", ja: "やや高め", ar: "BMI أعلى" }), weight: 5, tone: "bmi-band-mid" },
          { label: scaleText(lang, { zh: "较高", en: "High BMI", es: "IMC alto", fr: "IMC élevé", de: "Hoher BMI", pt: "IMC alto", ru: "Высокий ИМТ", hi: "उच्च BMI", ja: "高め", ar: "BMI مرتفع" }), weight: 10, tone: "bmi-band-high" }
        ],
        marker: clampPercent(bmi, 0, 40)
      });
    }

    return "";
  }

  function referenceInsightData(lang, slug, values) {
    const current = normalizeLang(lang);
    const pick = (map) => map[current] || map.en;

    if (slug === "bodyfat") {
      const height = cmFromInput(values.units, values.height, values.height, values.heightInches) / 2.54;
      const waist = inchesFromLinear(values.units, values.waist);
      const neck = inchesFromLinear(values.units, values.neck);
      const hip = inchesFromLinear(values.units, values.hip || 0);
      if (values.sex === "female" && !values.hip) return null;
      const fat = values.sex === "male"
        ? 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
        : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
      const male = values.sex === "male";
      if (fat < (male ? 10 : 18)) {
        return {
          value: `${round(fat, 1)}%`,
          tone: "low",
          label: pick({ zh: "较低", en: "Lower", ja: "低め", es: "Bajo", fr: "Bas", de: "Niedrig", pt: "Baixo", ru: "Ниже", hi: "कम", ar: "منخفض" }),
          oneLiner: pick({ zh: "体脂率处在偏低一侧，更适合优先关注恢复、激素状态和整体能量是否充足。", en: "Body fat sits on the lower side, so recovery, energy availability, and overall balance matter more.", ja: "体脂率は低め寄りで、回復・エネルギー不足・全体のバランス確認がより重要です。" }),
          risks: [pick({ zh: "训练量高但摄入不足时，更容易恢复差", en: "High training with low intake can hurt recovery", ja: "運動量に対して摂取が少ないと回復が落ちやすいです。" }), pick({ zh: "不必为了更低继续硬压体脂", en: "Do not chase lower numbers just because you can", ja: "下げられるからといって無理にさらに下げる必要はありません。" })],
          actions: [pick({ zh: "先确保热量和蛋白质够用", en: "Make sure calories and protein are adequate", ja: "まず総摂取量とたんぱく質を確保します。" }), pick({ zh: "结合力量表现和睡眠一起看", en: "Review it with strength and sleep, not alone", ja: "筋力や睡眠の状態と合わせて判断します。" })]
        };
      }
      if (fat < (male ? 20 : 30)) {
        return {
          value: `${round(fat, 1)}%`,
          tone: "good",
          label: pick({ zh: "常见范围", en: "Typical range", ja: "一般的な範囲", es: "Rango típico", fr: "Zone usuelle", de: "Typischer Bereich", pt: "Faixa comum", ru: "Обычный диапазон", hi: "सामान्य सीमा", ar: "نطاق شائع" }),
          oneLiner: pick({ zh: "这个结果大致落在较常见的参考区间，更适合继续关注长期趋势。", en: "This lands in a commonly referenced range, so the bigger priority is long-term trend quality.", ja: "一般的な参考範囲に入っており、次は長期の変化を追う方が価値があります。" }),
          risks: [pick({ zh: "单次结果变化有限，更值得看几周后的趋势", en: "One reading means less than the trend across weeks", ja: "単回の値より数週間の変化の方が重要です。" }), pick({ zh: "围度公式本来就不是精密检测", en: "Circumference formulas are not precision body scans", ja: "囲径ベースの推定は精密検査ではありません。" })],
          actions: [pick({ zh: "继续固定条件复测", en: "Keep measuring under similar conditions", ja: "同じ条件で継続して測定します。" }), pick({ zh: "和腰围、体重、训练表现一起看", en: "Pair it with waist, body weight, and training", ja: "腹囲・体重・トレーニング状態と合わせます。" })]
        };
      }
      if (fat < (male ? 25 : 35)) {
        return {
          value: `${round(fat, 1)}%`,
          tone: "mid",
          label: pick({ zh: "偏高", en: "Higher", ja: "やや高め", es: "Más alto", fr: "Plus haut", de: "Höher", pt: "Mais alto", ru: "Выше", hi: "ऊँचा", ar: "أعلى" }),
          oneLiner: pick({ zh: "体脂率已经高于更理想的区间，接下来更适合温和减脂而不是激进节食。", en: "Body fat is above a more favorable range, and a moderate fat-loss plan usually works better than aggressive dieting.", ja: "体脂率はやや高めで、極端な制限より穏やかな減脂の方が適しています。" }),
          risks: [pick({ zh: "如果腰围也同步升高，更值得尽早调整", en: "If waist size is also rising, earlier changes are worth it", ja: "腹囲も増えているなら早めの調整が有効です。" }), pick({ zh: "过快减重更容易丢训练质量", en: "Rapid cuts often hurt training quality", ja: "急ぎすぎる減量はトレーニング品質を落としやすいです。" })],
          actions: [pick({ zh: "从温和热量缺口开始", en: "Start with a modest calorie deficit", ja: "穏やかなカロリー赤字から始めます。" }), pick({ zh: "配合力量训练保住瘦体重", en: "Use resistance training to protect lean mass", ja: "筋トレで除脂肪量を守ります。" })]
        };
      }
      return {
        value: `${round(fat, 1)}%`,
        tone: "high",
        label: pick({ zh: "较高", en: "High", ja: "高め", es: "Alto", fr: "Élevé", de: "Hoch", pt: "Alto", ru: "Высоко", hi: "अधिक", ar: "مرتفع" }),
        oneLiner: pick({ zh: "体脂率已经明显偏高，更值得优先采用稳健、长期能坚持的改善方式。", en: "Body fat is clearly elevated, so steady and sustainable changes deserve priority.", ja: "体脂率は明確に高めで、続けられる改善策を優先する方が現実的です。" }),
        risks: [pick({ zh: "相关代谢风险通常会一起升高", en: "Related metabolic risk often rises with it", ja: "関連する代謝リスクも上がりやすくなります。" }), pick({ zh: "越激进越难长期维持", en: "The more aggressive the plan, the harder it is to sustain", ja: "極端な方法ほど続けにくくなります。" })],
        actions: [pick({ zh: "先把步数、睡眠和饮食结构稳住", en: "Stabilize steps, sleep, and food structure first", ja: "まず歩数・睡眠・食事構成を整えます。" }), pick({ zh: "用 2 到 3 周为一个调整周期", en: "Use 2-to-3-week adjustment blocks", ja: "2〜3週間単位で調整します。" })]
      };
    }

    if (slug === "wthr") {
      const heightCm = cmFromInput(values.units, values.height, values.height, values.heightInches);
      const waistCm = values.units === "imperial" ? Number(values.waist) * 2.54 : Number(values.waist);
      const ratio = waistCm / heightCm;
      if (ratio < 0.5) {
        return {
          value: round(ratio, 2),
          tone: "good",
          label: pick({ zh: "较理想", en: "Favorable", ja: "良好" }),
          oneLiner: pick({ zh: "腰高比低于 0.50，通常说明腹部脂肪风险处在更理想一侧。", en: "A waist-to-height ratio below 0.50 usually points to a more favorable abdominal-fat risk profile.", ja: "腰高比が 0.50 未満で、腹部脂肪リスクは比較的良好な側です。" }),
          risks: [pick({ zh: "体重稳定也要继续看腰围趋势", en: "Keep watching waist trend even if weight stays stable", ja: "体重が安定していても腹囲の推移は見続けましょう。" }), pick({ zh: "久坐和睡眠差也会慢慢拉高腰围", en: "Sedentary days and poor sleep can still push waist up", ja: "座りがちと睡眠不足は腹囲を押し上げやすいです。" })],
          actions: [pick({ zh: "继续保持步数、力量训练和饮食结构", en: "Keep maintaining steps, resistance training, and food quality", ja: "歩数・筋トレ・食事の質を維持します。" }), pick({ zh: "按月复查比按天盯着更有价值", en: "Monthly checks are more useful than daily obsession", ja: "毎日より月単位の確認が有効です。" })]
        };
      }
      if (ratio < 0.6) {
        return {
          value: round(ratio, 2),
          tone: "mid",
          label: pick({ zh: "偏高", en: "Higher", ja: "やや高め" }),
          oneLiner: pick({ zh: "腰高比已经高于常见 0.50 参考线，腹部脂肪管理更值得优先。", en: "The ratio is above the common 0.50 line, so abdominal-fat management deserves more attention.", ja: "0.50 の目安を超えており、腹部脂肪の管理を優先する価値があります。" }),
          risks: [pick({ zh: "腰围风险有时比体重变化更早出现", en: "Waist risk can show up before scale weight changes", ja: "体重より先に腹囲の変化が表れることがあります。" }), pick({ zh: "久坐和饮食节奏乱更容易推高结果", en: "Sedentary days and irregular eating can push it up", ja: "座りがちや食事リズムの乱れで悪化しやすいです。" })],
          actions: [pick({ zh: "优先盯腰围，不只盯体重", en: "Prioritize waist reduction, not just scale weight", ja: "体重だけでなく腹囲を優先して見ます。" }), pick({ zh: "从步数、睡眠和温和热量缺口开始", en: "Start with steps, sleep, and a moderate deficit", ja: "歩数・睡眠・穏やかな赤字から始めます。" })]
        };
      }
      return {
        value: round(ratio, 2),
        tone: "high",
        label: pick({ zh: "较高", en: "High", ja: "高め" }),
        oneLiner: pick({ zh: "腰高比明显偏高，通常比单看体重更值得尽早处理。", en: "A clearly high ratio usually deserves earlier action than waiting for body weight alone.", ja: "腰高比が高めで、体重だけを見るより早めの対応が有効です。" }),
        risks: [pick({ zh: "腹部脂肪相关风险通常更值得警惕", en: "Central-fat risk is usually the bigger concern here", ja: "腹部脂肪に伴うリスクにより注意が必要です。" }), pick({ zh: "需要更长期、可坚持的调整", en: "This usually needs steady long-term change", ja: "長く続けられる改善が必要です。" })],
        actions: [pick({ zh: "先把日常活动量拉起来", en: "Raise daily movement first", ja: "まず日常活動量を増やします。" }), pick({ zh: "配合饮食结构和力量训练", en: "Pair it with better food structure and resistance training", ja: "食事構成と筋トレを組み合わせます。" })]
      };
    }

    if (slug === "sodium") {
      const sodium = Number(values.sodium);
      if (sodium <= 2300) {
        return {
          value: `${Math.round(sodium)} mg`,
          tone: "good",
          label: pick({ zh: "上限内", en: "Within limit", ja: "上限内" }),
          oneLiner: pick({ zh: "当前钠摄入还在常见成人上限以内，重点是继续保持食品结构。", en: "Sodium is within a common adult upper limit, so the main job is keeping food choices steady.", ja: "一般的な成人上限内で、今後も食品選びを安定させることが大切です。" }),
          risks: [pick({ zh: "外卖和加工食品会让钠摄入很快抬高", en: "Restaurant and packaged foods can raise it quickly", ja: "外食や加工食品で一気に増えやすいです。" }), pick({ zh: "大量出汗时需求情况可能不同", en: "Heavy sweating can change the practical need", ja: "大量発汗時は必要量の見方が変わることがあります。" })],
          actions: [pick({ zh: "继续看标签和酱料量", en: "Keep watching labels and sauces", ja: "ラベルと調味料量を引き続き見ます。" }), pick({ zh: "把大多数餐维持在清淡范围", en: "Keep most meals on the lighter side", ja: "普段の食事を薄味寄りに保ちます。" })]
        };
      }
      if (sodium <= 3500) {
        return {
          value: `${Math.round(sodium)} mg`,
          tone: "mid",
          label: pick({ zh: "偏高", en: "Higher", ja: "やや高め" }),
          oneLiner: pick({ zh: "钠摄入已经高于常见建议上限，更适合先从最容易超标的食物下手。", en: "Sodium is above a common upper limit, so the quickest wins usually come from obvious high-salt foods.", ja: "一般的な上限を超えており、まず塩分の多い食べ物から見直すのが効果的です。" }),
          risks: [pick({ zh: "高钠常来自汤底、酱料、腌制和包装食品", en: "High sodium often comes from soups, sauces, and packaged foods", ja: "スープ・たれ・漬物・加工食品から増えやすいです。" }), pick({ zh: "不是只少放盐就能解决", en: "It is rarely solved by table salt alone", ja: "卓上の塩だけの問題ではないことが多いです。" })],
          actions: [pick({ zh: "先减少最重口的两三样", en: "Cut back the saltiest two or three items first", ja: "特に塩分の多い2〜3品から減らします。" }), pick({ zh: "用 1 到 2 周观察是否能明显降下来", en: "Recheck in 1 to 2 weeks after simpler swaps", ja: "1〜2週間後に再確認します。" })]
        };
      }
      return {
        value: `${Math.round(sodium)} mg`,
        tone: "high",
        label: pick({ zh: "较高", en: "High", ja: "高め" }),
        oneLiner: pick({ zh: "钠摄入明显偏高，更值得尽快调整外卖、包装食品和酱料结构。", en: "Sodium is meaningfully high, so restaurant food, packaged meals, and sauces are worth adjusting sooner.", ja: "塩分がかなり高めで、外食・加工食品・たれ類の調整を早めにした方がよい状況です。" }),
        risks: [pick({ zh: "持续偏高通常不只是偶尔一餐的问题", en: "Persistent excess is usually more than one salty meal", ja: "継続的な高塩分は一度の食事だけの問題ではありません。" }), pick({ zh: "高强度训练大量出汗除外，普通日常更应注意", en: "Outside heavy sweat loss, routine intake usually deserves more control", ja: "大量発汗の特殊状況を除けば、日常では抑える方が無難です。" })],
        actions: [pick({ zh: "优先减少加工食品和汤汁摄入", en: "Reduce packaged foods and salty broth first", ja: "加工食品と汁物から優先的に減らします。" }), pick({ zh: "用更清淡的调味替代重口", en: "Replace heavy sauces with lighter flavoring", ja: "濃い味つけをより軽い調味に置き換えます。" })]
      };
    }

    if (slug === "caffeine") {
      const weightKg = kgFromInput(values.units, values.weight, values.weight);
      const currentValue = Number(values.caffeine);
      const ceiling = Math.min(400, weightKg * 6);
      const ratio = currentValue / ceiling;
      if (ratio <= 0.6) {
        return {
          value: `${Math.round(currentValue)} mg`,
          tone: "good",
          label: pick({ zh: "温和", en: "Moderate", ja: "控えめ" }),
          oneLiner: pick({ zh: "当前咖啡因还在比较温和的区间，真正更要紧的是最后一次摄入时间。", en: "Caffeine is still in a moderate range, and timing now matters as much as total amount.", ja: "摂取量は比較的穏やかで、今後は総量より摂る時間が重要です。" }),
          risks: [pick({ zh: "下午和晚上摄入仍会影响睡眠", en: "Late-day intake can still hurt sleep", ja: "午後遅くの摂取でも睡眠に影響し得ます。" }), pick({ zh: "空腹和高压力时体感会更强", en: "Empty stomach and stress can amplify the effect", ja: "空腹や高ストレス時は体感が強くなりやすいです。" })],
          actions: [pick({ zh: "尽量把摄入放在更早时段", en: "Keep most intake earlier in the day", ja: "できるだけ早い時間帯に寄せます。" }), pick({ zh: "如果睡得浅，优先提前最后一杯", en: "If sleep is light, move the last dose earlier", ja: "眠りが浅いなら最後の一杯を前倒しします。" })]
        };
      }
      if (ratio <= 1) {
        return {
          value: `${Math.round(currentValue)} mg`,
          tone: "mid",
          label: pick({ zh: "接近上限", en: "Near ceiling", ja: "上限に近い" }),
          oneLiner: pick({ zh: "咖啡因已经接近建议上限，继续增加通常收益不大，副作用更可能先出现。", en: "Caffeine is near a practical ceiling, so extra intake often adds side effects before useful benefit.", ja: "実用的な上限に近く、これ以上増やしても利点より副作用が先に出やすいです。" }),
          risks: [pick({ zh: "更容易出现心慌、焦躁或睡眠浅", en: "Palpitations, jitteriness, or light sleep become more likely", ja: "動悸・落ち着かなさ・浅い睡眠が起きやすくなります。" }), pick({ zh: "高压力时期耐受通常更差", en: "Tolerance often feels worse under stress", ja: "ストレスが高い時期は耐性が落ちやすいです。" })],
          actions: [pick({ zh: "先减少额外提神饮料", en: "Trim extra energy drinks or add-on doses first", ja: "追加のエナジードリンクから減らします。" }), pick({ zh: "把最后一次摄入往前移", en: "Move the final dose earlier", ja: "最後の摂取を前倒しします。" })]
        };
      }
      return {
        value: `${Math.round(currentValue)} mg`,
        tone: "high",
        label: pick({ zh: "偏高", en: "High", ja: "高め" }),
        oneLiner: pick({ zh: "当前咖啡因已经明显偏高，更适合逐步减量，而不是继续硬顶。", en: "Caffeine is clearly high, so tapering down gradually is usually smarter than pushing through.", ja: "摂取量はかなり高めで、無理に続けるより段階的に減らす方が現実的です。" }),
        risks: [pick({ zh: "睡眠和恢复最容易先受影响", en: "Sleep and recovery are often the first things to suffer", ja: "まず睡眠と回復が崩れやすくなります。" }), pick({ zh: "突然停掉更容易头痛和疲劳", en: "Stopping abruptly can bring headaches and fatigue", ja: "急にやめると頭痛やだるさが出やすいです。" })],
        actions: [pick({ zh: "每几天小幅减一点", en: "Reduce it in small steps every few days", ja: "数日ごとに少しずつ減らします。" }), pick({ zh: "先把最后一次摄入提前", en: "Start by moving the last dose earlier", ja: "まず最後の摂取時刻を前倒しします。" })]
      };
    }

    if (slug === "hydrationcheck") {
      const percent = (Number(values.actualWater) / Number(values.targetWater)) * 100;
      if (percent < 60) {
        return {
          value: `${Math.round(percent)}%`,
          tone: "low",
          label: pick({ zh: "不足", en: "Low", ja: "不足" }),
          oneLiner: pick({ zh: "今天的补水进度明显偏低，更适合尽早分散补起来，而不是晚上一次性灌很多。", en: "Hydration progress is clearly low, so catching up gradually through the day works better than one big late intake.", ja: "補水の進みはかなり少なく、一度にまとめてではなく分けて補う方が向いています。" }),
          risks: [pick({ zh: "训练、炎热和久坐环境都会放大影响", en: "Training, heat, and dry work settings can amplify the effect", ja: "運動・暑さ・乾いた環境で影響が強くなりやすいです。" }), pick({ zh: "口渴往往已经说明落后了一些", en: "Strong thirst often means you are already behind", ja: "強い喉の渇きは遅れのサインになりやすいです。" })],
          actions: [pick({ zh: "把喝水分到接下来几次固定动作里", en: "Attach water to a few routine checkpoints", ja: "これからの行動に飲水を紐づけます。" }), pick({ zh: "训练后和每餐前都补一点", en: "Drink a little before meals and after training", ja: "食前や運動後に少しずつ補います。" })]
        };
      }
      if (percent < 90) {
        return {
          value: `${Math.round(percent)}%`,
          tone: "mid",
          label: pick({ zh: "接近目标", en: "Approaching", ja: "もう少し" }),
          oneLiner: pick({ zh: "饮水进度已经接近目标，再补一两次通常就能追上。", en: "Hydration is getting close to target, and one or two more rounds usually closes the gap.", ja: "目標にかなり近く、あと1〜2回で追いつきやすい状態です。" }),
          risks: [pick({ zh: "下午后半段最容易又忘掉", en: "Late afternoon is where people often fall behind again", ja: "午後後半でまた不足しやすいです。" }), pick({ zh: "热环境下目标还可能需要上调", en: "Hot days may still require a higher target", ja: "暑い日は目標自体の上方修正も必要です。" })],
          actions: [pick({ zh: "把剩余量平均分到余下时段", en: "Spread the remaining intake across the rest of the day", ja: "残りを時間帯に分けて補います。" }), pick({ zh: "如果训练流汗多，顺带留意钠", en: "If you sweat a lot, also think about sodium", ja: "汗が多い日は塩分も意識します。" })]
        };
      }
      if (percent <= 110) {
        return {
          value: `${Math.round(percent)}%`,
          tone: "good",
          label: pick({ zh: "达标", en: "On target", ja: "達成" }),
          oneLiner: pick({ zh: "今天的饮水进度基本在目标附近，接下来重点是继续均匀分布。", en: "Hydration is roughly on target, so the main job now is simply keeping it evenly spread.", ja: "目標付近に収まっており、あとは均等に保つことが大切です。" }),
          risks: [pick({ zh: "一次喝太多反而不如分散更舒服", en: "Huge single servings are often less comfortable than spacing it out", ja: "一度に大量より分散した方が実用的です。" }), pick({ zh: "训练或高温时还要动态调整", en: "Training and heat still require adjustment", ja: "運動や暑さでは調整が必要です。" })],
          actions: [pick({ zh: "继续按餐次和活动节奏补水", en: "Keep using meals and activity blocks as hydration anchors", ja: "食事や活動の区切りごとに補水を続けます。" }), pick({ zh: "留意尿液颜色和白天精神状态", en: "Use urine color and daytime energy as checks", ja: "尿色と日中の調子も目安にします。" })]
        };
      }
      return {
        value: `${Math.round(percent)}%`,
        tone: "high",
        label: pick({ zh: "明显超出", en: "Well above", ja: "かなり超過" }),
        oneLiner: pick({ zh: "补水量已经明显超过原定目标，接下来更值得关注是否真的需要这么高。", en: "Fluid intake is well above the original target, so it is worth checking whether this higher amount is actually necessary.", ja: "当初の目標をかなり上回っており、本当に必要な量か見直す価値があります。" }),
        risks: [pick({ zh: "大量出汗时可能合理，但普通日常不一定需要", en: "Heavy sweat loss can justify it, ordinary days may not", ja: "大量発汗なら妥当でも、通常日は必ずしも必要ではありません。" }), pick({ zh: "光看升数不如结合口渴和环境判断", en: "Volume alone matters less than thirst, heat, and activity", ja: "量だけでなく喉の渇きや環境も見ます。" })],
        actions: [pick({ zh: "看一下目标设定是否偏低", en: "Review whether the original target was set too low", ja: "元の目標が低すぎなかったか確認します。" }), pick({ zh: "按天气和活动量动态调整", en: "Adjust the target by weather and activity", ja: "天候と活動量に応じて目標を動かします。" })]
      };
    }

    if (slug === "sleepdebt") {
      const debtHours = Math.max(0, (Number(values.targetSleep) - Number(values.actualSleep)) * Number(values.days));
      if (debtHours <= 2) {
        return {
          value: `${round(debtHours, 1)} h`,
          tone: "good",
          label: pick({ zh: "很少", en: "Low", ja: "少ない" }),
          oneLiner: pick({ zh: "睡眠负债还不明显，说明当前作息大致没有持续性落后。", en: "Sleep debt is still low, so your current routine is not drifting far behind.", ja: "睡眠負債はまだ小さく、現状のリズムは大きく崩れていません。" }),
          risks: [pick({ zh: "连续几天晚睡仍会很快把负债堆起来", en: "A few late nights can still build debt quickly", ja: "数日続く夜更かしでも負債はたまりやすいです。" }), pick({ zh: "别因为现在还好就长期透支", en: "Do not use a good week to justify chronic sleep cuts", ja: "今大丈夫だからと慢性的に削らないことが大切です。" })],
          actions: [pick({ zh: "继续保持起床时间稳定", en: "Keep wake time stable", ja: "起床時刻を安定させます。" }), pick({ zh: "优先守住最容易被打乱的那几天", en: "Protect the days that usually slip first", ja: "崩れやすい日を優先して守ります。" })]
        };
      }
      if (debtHours <= 5) {
        return {
          value: `${round(debtHours, 1)} h`,
          tone: "mid",
          label: pick({ zh: "开始累积", en: "Building", ja: "蓄積中" }),
          oneLiner: pick({ zh: "睡眠负债已经开始堆积，越早把作息拉回稳定，越容易补回来。", en: "Sleep debt is beginning to build, and it is easier to correct early than later.", ja: "睡眠負債がたまり始めており、早めに立て直す方が楽です。" }),
          risks: [pick({ zh: "白天精神和训练恢复通常会先受影响", en: "Daytime energy and training recovery often fade first", ja: "日中の調子や回復が先に落ちやすいです。" }), pick({ zh: "周末一次补很多通常不如连续几天修复", en: "A few repaired days often work better than one huge catch-up sleep", ja: "週末一回より数日続けて戻す方が有効です。" })],
          actions: [pick({ zh: "先把接下来几天的起床时间固定", en: "Fix wake time for the next several days", ja: "まず数日間の起床時刻を固定します。" }), pick({ zh: "减少晚间刷屏和过晚咖啡因", en: "Reduce late screens and late caffeine", ja: "夜の画面時間と遅いカフェインを減らします。" })]
        };
      }
      if (debtHours <= 9) {
        return {
          value: `${round(debtHours, 1)} h`,
          tone: "high",
          label: pick({ zh: "偏高", en: "High", ja: "高め" }),
          oneLiner: pick({ zh: "睡眠负债已经不算少，短时间内很可能已经开始影响精神状态和恢复感。", en: "Sleep debt is now meaningfully elevated and is likely already affecting alertness and recovery.", ja: "睡眠負債はかなりたまっており、覚醒度や回復感に影響しやすい段階です。" }),
          risks: [pick({ zh: "连续拖下去通常只会更难修复", en: "Letting it continue usually makes recovery harder", ja: "このまま続くほど立て直しが難しくなります。" }), pick({ zh: "高强度训练和工作压力会放大影响", en: "Hard training and work stress magnify the impact", ja: "高強度運動や仕事のストレスで悪化しやすいです。" })],
          actions: [pick({ zh: "暂停额外熬夜，把恢复放前面", en: "Pause extra late nights and prioritize recovery", ja: "不要夜更かしを重ねず回復を優先します。" }), pick({ zh: "按 3 到 5 天为一段逐步修复", en: "Use 3-to-5-day repair blocks", ja: "3〜5日単位で戻します。" })]
        };
      }
      return {
        value: `${round(debtHours, 1)} h`,
        tone: "high",
        label: pick({ zh: "需要修复", en: "Needs reset", ja: "立て直しが必要" }),
        oneLiner: pick({ zh: "睡眠负债已经很高，靠一晚补觉通常不够，更需要连续几天修复节奏。", en: "Sleep debt is now very high, and one catch-up night is usually not enough. A multi-day reset matters more.", ja: "睡眠負債はかなり高く、一晩の寝だめでは足りず、数日単位の立て直しが必要です。" }),
        risks: [pick({ zh: "情绪、注意力和训练恢复都更容易出问题", en: "Mood, focus, and recovery all become more fragile", ja: "気分・集中力・回復のすべてが不安定になりやすいです。" }), pick({ zh: "如果持续很久，更值得排查根源", en: "If it keeps lasting, the root cause deserves review", ja: "長く続くなら原因確認が必要です。" })],
        actions: [pick({ zh: "优先恢复固定作息，而不是继续透支", en: "Restore a fixed schedule instead of borrowing more sleep", ja: "まず固定した睡眠リズムを戻します。" }), pick({ zh: "必要时降低训练和晚间工作强度", en: "Lower training or evening workload if needed", ja: "必要なら運動量や夜の負荷を下げます。" })]
      };
    }

    if (slug === "cycleregularity") {
      const cycles = [Number(values.cycleOne), Number(values.cycleTwo), Number(values.cycleThree), Number(values.cycleFour)];
      const span = Math.max(...cycles) - Math.min(...cycles);
      if (span <= 3) {
        return {
          value: `${span} d`,
          tone: "good",
          label: pick({ zh: "较稳定", en: "Steady", ja: "安定" }),
          oneLiner: pick({ zh: "最近几个周期差异不大，整体节奏相对稳定，更适合继续做趋势记录。", en: "Recent cycles are close together, so the overall rhythm looks fairly steady.", ja: "最近の周期差は小さく、全体のリズムは比較的安定しています。" }),
          risks: [pick({ zh: "偶尔一两天变化很常见", en: "One or two days of variation is common", ja: "1〜2日の差は珍しくありません。" }), pick({ zh: "仍然值得结合症状一起看", en: "Symptoms still matter alongside timing", ja: "日数だけでなく症状も合わせて見ます。" })],
          actions: [pick({ zh: "继续记录 3 到 6 个月会更清楚", en: "Three to six months of tracking makes it clearer", ja: "3〜6か月続けるとさらに見えやすくなります。" }), pick({ zh: "把睡眠和压力也一起写下来", en: "Track sleep and stress with it too", ja: "睡眠やストレスも一緒に記録します。" })]
        };
      }
      if (span <= 7) {
        return {
          value: `${span} d`,
          tone: "mid",
          label: pick({ zh: "有波动", en: "Some variation", ja: "やや変動" }),
          oneLiner: pick({ zh: "周期开始有一定波动，但还不一定代表异常，更适合继续连续观察。", en: "Cycle timing shows some variation, but it does not automatically mean something is wrong.", ja: "やや変動がありますが、すぐに異常と決める段階ではありません。" }),
          risks: [pick({ zh: "睡眠、压力、旅行和体重变化都可能影响", en: "Sleep, stress, travel, and weight changes can all influence this", ja: "睡眠・ストレス・旅行・体重変化が影響し得ます。" }), pick({ zh: "如果伴随症状加重，会更值得注意", en: "Stronger symptoms make the result more meaningful", ja: "症状の強まりを伴う場合はより注意が必要です。" })],
          actions: [pick({ zh: "再连续记录几个月再判断", en: "Track a few more months before judging", ja: "あと数か月続けて判断します。" }), pick({ zh: "同时看疼痛、出血量和情绪变化", en: "Also track pain, flow, and mood changes", ja: "痛み・出血量・気分変化も見ます。" })]
        };
      }
      return {
        value: `${span} d`,
        tone: "high",
        label: pick({ zh: "波动较大", en: "More variable", ja: "変動大" }),
        oneLiner: pick({ zh: "最近几个周期差异已经比较明显，更值得把周期和症状一起系统记录。", en: "Recent cycle spread is now fairly wide, so tracking timing and symptoms together becomes more useful.", ja: "周期差が大きめで、日数と症状をセットで記録する価値が高い状態です。" }),
        risks: [pick({ zh: "如果这种波动持续很久，更值得关注", en: "If this pattern lasts for a long time, it deserves more attention", ja: "長く続くならより注意が必要です。" }), pick({ zh: "明显疼痛或出血异常时不应只靠工具判断", en: "Strong pain or unusual bleeding should not be judged by a tool alone", ja: "強い痛みや異常出血はツールだけで判断すべきではありません。" })],
        actions: [pick({ zh: "继续记录多个周期并保留症状备注", en: "Keep tracking multiple cycles with symptom notes", ja: "複数周期を症状メモ付きで記録します。" }), pick({ zh: "如果长期异常或影响生活，优先咨询医生", en: "If it persists or affects life, seek medical advice earlier", ja: "長引く・生活に影響するなら早めに受診します。" })]
      };
    }

    if (slug === "pregnancyweight") {
      const heightM = Number(values.height) / 100;
      const weight = Number(values.weight);
      const bmi = weight / (heightM * heightM);
      if (bmi < 18.5) {
        return {
          value: round(bmi, 1),
          tone: "low",
          label: pick({ zh: "孕前 BMI 偏低", en: "Lower pre-pregnancy BMI", ja: "妊娠前 BMI 低め" }),
          oneLiner: pick({ zh: "孕前 BMI 偏低时，孕期体重增长的常见参考范围通常会更高一些。", en: "A lower pre-pregnancy BMI usually comes with a higher common weight-gain reference through pregnancy.", ja: "妊娠前 BMI が低めの場合、一般的な体重増加の目安はやや高くなります。" }),
          risks: [pick({ zh: "工具给的是范围，不是单独的好坏判断", en: "This is a range guide, not a standalone health judgment", ja: "これは範囲の目安であり単独の健康判定ではありません。" }), pick({ zh: "真正建议仍要看产检和医生意见", en: "Prenatal follow-up still matters more", ja: "最終的には健診結果や医師の説明が重要です。" })],
          actions: [pick({ zh: "按孕周和产检结果持续复查", en: "Reassess with prenatal follow-up over time", ja: "妊娠週数と健診に合わせて見直します。" }), pick({ zh: "更关注阶段变化，不必只盯单次数字", en: "Watch the phase trend, not one single weigh-in", ja: "単回より段階的な変化を見ます。" })]
        };
      }
      if (bmi < 25) {
        return {
          value: round(bmi, 1),
          tone: "good",
          label: pick({ zh: "孕前 BMI 常见范围", en: "Typical pre-pregnancy BMI", ja: "妊娠前 BMI 一般範囲" }),
          oneLiner: pick({ zh: "孕前 BMI 落在常见参考范围，孕期体重增长通常按中间范围来观察。", en: "Pre-pregnancy BMI is in a common reference range, so weight gain is usually tracked against the middle guideline band.", ja: "妊娠前 BMI は一般的な範囲で、増加も中間の目安で見ることが多いです。" }),
          risks: [pick({ zh: "不同孕周增长节奏本来就不一样", en: "Weight gain pace naturally changes across trimesters", ja: "妊娠時期によって増え方は変わります。" }), pick({ zh: "不必拿一次数据当结论", en: "One check should not be treated as a verdict", ja: "一度の数値だけで結論を出しません。" })],
          actions: [pick({ zh: "结合产检节奏看趋势", en: "Read it alongside prenatal trend checks", ja: "健診での推移と合わせて見ます。" }), pick({ zh: "把饮食和活动保持稳定", en: "Keep food quality and routine stable", ja: "食事と活動の安定を優先します。" })]
        };
      }
      if (bmi < 30) {
        return {
          value: round(bmi, 1),
          tone: "mid",
          label: pick({ zh: "孕前 BMI 偏高", en: "Higher pre-pregnancy BMI", ja: "妊娠前 BMI やや高め" }),
          oneLiner: pick({ zh: "孕前 BMI 偏高时，孕期体重增长的参考范围通常会更保守一些。", en: "A higher pre-pregnancy BMI usually means the pregnancy gain range is interpreted more conservatively.", ja: "妊娠前 BMI がやや高めの場合、増加の目安はやや控えめに見ます。" }),
          risks: [pick({ zh: "更不适合把体重增速拉得太快", en: "Faster gain is usually less helpful here", ja: "増え方が速すぎるのはあまり望ましくありません。" }), pick({ zh: "仍然要以正式产检建议为准", en: "Formal prenatal advice still comes first", ja: "正式な健診の指示が優先です。" })],
          actions: [pick({ zh: "按阶段复查，不用频繁焦虑", en: "Recheck by stage instead of worrying day to day", ja: "日ごとに心配せず段階ごとに確認します。" }), pick({ zh: "把关注点放在持续稳定上", en: "Focus on steadier change over time", ja: "継続的で安定した変化を重視します。" })]
        };
      }
      return {
        value: round(bmi, 1),
        tone: "high",
        label: pick({ zh: "孕前 BMI 较高", en: "High pre-pregnancy BMI", ja: "妊娠前 BMI 高め" }),
        oneLiner: pick({ zh: "孕前 BMI 较高时，孕期体重增长范围通常会进一步收紧，更需要按正式随访来判断。", en: "With a higher pre-pregnancy BMI, recommended gain ranges are usually narrower and should be read with formal follow-up.", ja: "妊娠前 BMI が高めの場合、増加の目安はさらに狭くなり、正式な健診に沿って判断することが重要です。" }),
        risks: [pick({ zh: "单靠工具无法替代正式孕期评估", en: "A calculator cannot replace prenatal assessment", ja: "ツールは正式な妊婦健診を代替できません。" }), pick({ zh: "过快变化更值得尽早和医生沟通", en: "Faster-than-expected changes deserve earlier discussion", ja: "想定より速い変化は早めに相談した方が安心です。" })],
        actions: [pick({ zh: "跟着产检节奏持续看", en: "Follow the prenatal schedule closely", ja: "健診スケジュールに沿って確認します。" }), pick({ zh: "把体重趋势放回医生给的范围里判断", en: "Judge the trend inside your clinician's guidance", ja: "医師から示された範囲内で推移を見ます。" })]
      };
    }

    return null;
  }

  function renderReferenceInsight(lang, slug, values) {
    const data = referenceInsightData(lang, slug, values);
    if (!data) return "";
    return `
      <div class="reference-highlight">
        <div class="reference-highlight-top">
          <div class="bmi-hero-stat">
            <span class="bmi-kicker">${scaleText(lang, { zh: "参考判断", en: "Quick read", es: "Lectura rápida", fr: "Lecture rapide", de: "Schnelle Einordnung", pt: "Leitura rápida", ru: "Быстрая оценка", hi: "त्वरित पढ़ाई", ja: "ひと目の判断", ar: "قراءة سريعة" })}</span>
            <strong class="generic-result-value">${data.value}</strong>
            <span class="bmi-pill tone-${data.tone}">${data.label}</span>
          </div>
        </div>
        ${referenceVisual(lang, slug, values)}
        <div class="bmi-advice-grid reference-insight-grid">
          <article class="info-box tone-${data.tone === "good" ? "good" : data.tone === "low" ? "low" : data.tone === "mid" ? "mid" : "caution"}">
            <h3>${scaleText(lang, { zh: "一句话解读", en: "Plain-language read", es: "Lectura simple", fr: "Lecture simple", de: "Kurz erklärt", pt: "Leitura simples", ru: "Коротко о результате", hi: "सरल व्याख्या", ja: "ひとことで言うと", ar: "شرح سريع" })}</h3>
            <p>${data.oneLiner}</p>
          </article>
          <article class="info-box">
            <h3>${scaleText(lang, { zh: "需要注意", en: "Watch for", es: "A vigilar", fr: "À surveiller", de: "Worauf achten", pt: "Fique atento", ru: "На что обратить внимание", hi: "किस पर ध्यान दें", ja: "気をつけたい点", ar: "ما الذي تنتبه له" })}</h3>
            <ul class="checklist">${data.risks.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
          <article class="info-box">
            <h3>${scaleText(lang, { zh: "下一步建议", en: "Next step", es: "Siguiente paso", fr: "Étape suivante", de: "Nächster Schritt", pt: "Próximo passo", ru: "Следующий шаг", hi: "अगला कदम", ja: "次にやること", ar: "الخطوة التالية" })}</h3>
            <ul class="checklist">${data.actions.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        </div>
      </div>
    `;
  }

  function calcBmiExtras(values, lang) {
    const units = values.units || "metric";
    const heightCm = cmFromInput(units, values.height, values.height, values.heightInches);
    const weightKg = kgFromInput(units, values.weight, values.weight);
    const age = Number(values.age || 30);
    const sex = values.sex || "male";
    const activity = values.activity || "light";
    const goal = values.goal || "maintain";
    const bmi = weightKg / Math.pow(heightCm / 100, 2);
    const category = bmiCategoryData(lang, bmi);
    const healthyMin = 18.5 * Math.pow(heightCm / 100, 2);
    const healthyMax = 24.9 * Math.pow(heightCm / 100, 2);
    const targetWeight = bmi >= 25 ? healthyMax : bmi < 18.5 ? healthyMin : Math.min(healthyMax, Math.max(healthyMin, weightKg));
    const weightDelta = Math.max(0, Math.abs(weightKg - targetWeight));
    const weeks = weightDelta > 0 ? Math.max(4, Math.round((weightDelta / 0.5) * 1.1)) : 0;
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + (sex === "male" ? 5 : -161);
    const maintenanceCalories = Math.round(bmr * activityFactors[activity]);
    const scorePenalty = bmi < 18.5 ? (18.5 - bmi) * 7 : bmi <= 24.9 ? Math.max(0, bmi - 22) * 2 : (bmi - 24.9) * 5;
    const activityPenalty = activity === "sedentary" ? 8 : activity === "light" ? 4 : 0;
    const score = Math.max(48, Math.min(96, Math.round(90 - scorePenalty - activityPenalty)));
    const goalCalories = goal === "lose" ? maintenanceCalories - 350 : goal === "gain" ? maintenanceCalories + 250 : maintenanceCalories;
    const actionItems = category.key === "underweight"
      ? zh(lang, ["先保证三餐和蛋白质充足", "每周安排 2 到 3 次力量训练", "每月观察体重和围度变化"], ["Prioritize regular meals and enough protein", "Add 2 to 3 strength sessions each week", "Review body weight and measurements monthly"])
      : category.key === "normal"
        ? zh(lang, ["维持当前热量摄入和作息", "每周做 2 到 3 次轻中等强度有氧", "每月复查体重与腰围"], ["Maintain your current calorie intake and schedule", "Add light to moderate cardio 2 to 3 times per week", "Monitor body weight and waist size monthly"])
        : zh(lang, ["从每天减少 300 到 500 千卡开始", "把日步数逐步提高到 8000 以上", "每周安排 2 到 3 次力量训练帮助保留肌肉"], ["Start with a 300 to 500 calorie daily deficit", "Gradually move daily steps above 8,000", "Keep 2 to 3 strength sessions weekly to preserve lean mass"]);
    return {
      bmi,
      category,
      healthyMin,
      healthyMax,
      maintenanceCalories,
      goalCalories,
      weeks,
      score,
      actionItems,
      rangeBar: bmiRangeBar(category.marker)
    };
  }

  function renderBmiGuidance(lang, extras) {
    const unit = zh(lang, "kg", "kg");
    return `
      <div class="bmi-advice-grid">
        <div class="info-box tone-${extras.category.tone}">
          <h3>${zh(lang, "一句话解读", "Quick read")}</h3>
          <p>${extras.category.oneLiner}</p>
        </div>
        <div class="info-box">
          <h3>${zh(lang, "风险提示", "Risk notes")}</h3>
          <ul class="checklist">${extras.category.risks.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="info-box">
          <h3>${zh(lang, "个性化建议", "Personalized suggestions")}</h3>
          <ul class="checklist">${extras.actionItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="bmi-deep-grid">
        <div class="mini-metric"><span>${zh(lang, "理想体重范围", "Ideal weight range")}</span><strong>${round(extras.healthyMin, 1)}-${round(extras.healthyMax, 1)} ${unit}</strong></div>
        <div class="mini-metric"><span>${zh(lang, "预计维持热量", "Estimated daily calories")}</span><strong>${extras.maintenanceCalories} kcal</strong></div>
        <div class="mini-metric"><span>${zh(lang, "减到目标体重", "Weight change plan")}</span><strong>${extras.weeks ? zh(lang, `约 ${extras.weeks}-${extras.weeks + 2} 周`, `~${extras.weeks}-${extras.weeks + 2} weeks`) : zh(lang, "当前以保持为主", "Maintenance is the priority")}</strong></div>
        <div class="mini-metric"><span>${zh(lang, "健康得分", "Health score")}</span><strong>${extras.score} / 100</strong></div>
      </div>
    `;
  }

  function renderBmiPage(container, tool, lang) {
    container.innerHTML = `
      <div class="tool-page-body bmi-page">
        <section class="panel tool-panel bmi-intro-panel">
          <div class="trust-points">
            <span>${zh(lang, "免费使用", "Free & Accurate")}</span>
            <span>${zh(lang, "无需注册", "No signup required")}</span>
            <span>${zh(lang, "已被大量用户使用", "Used by 100,000+ users")}</span>
          </div>
        </section>
        <section class="panel tool-panel">
          <div class="bmi-form-shell" data-tool-calculator></div>
        </section>
        <section class="panel tool-panel">
          <div class="section-head">
            <h2>${zh(lang, "你的 BMI 结果", "Your BMI Result")}</h2>
            <p>${zh(lang, "完成计算后，这里会显示分类、可视化位置、解读和下一步建议。", "Run the calculator to see your category, visual position, interpretation, and next steps.")}</p>
          </div>
          <div data-bmi-result-block>
            <div class="bmi-result-card">
              <div class="bmi-hero-stat">
                <span class="bmi-kicker">${zh(lang, "当前结果", "Current result")}</span>
                <strong>--</strong>
                <span class="bmi-pill tone-good">${zh(lang, "等待计算", "Waiting for input")}</span>
              </div>
              <div class="result">${zh(lang, "填写身高和体重后，系统会给出分类、风险提示和个性化建议。", "Enter your height and weight to get category, risk notes, and personalized suggestions.")}</div>
            </div>
          </div>
        </section>
        <section class="panel tool-panel">
          <div class="section-head">
            <h2>${zh(lang, "深入分析", "Deeper analysis")}</h2>
            <p>${zh(lang, "除了 BMI，本页还会给出理想体重区间、维持热量、预计调整周期和健康得分。", "Beyond BMI, this page also shows ideal weight range, maintenance calories, an estimated timeline, and a health score.")}</p>
          </div>
          <div class="bmi-graph-grid" data-bmi-graph>
            <div class="chart-card">
              <h3>${zh(lang, "BMI 分布可视化", "BMI Distribution Chart")}</h3>
              <p>${zh(lang, "完成计算后将显示你在常见 BMI 区间中的位置。", "Your position on the common BMI ranges appears here after calculation.")}</p>
            </div>
            <div class="chart-card">
              <h3>${zh(lang, "当前体重 vs 目标体重", "Current vs Target Weight")}</h3>
              <p>${zh(lang, "会根据你的 BMI 结果给出更适合参考的目标体重区间。", "This compares your current body weight with a more practical target range.")}</p>
            </div>
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "什么是 BMI", "What is BMI?")}</h2>
          <div class="tool-article-grid">
            <div class="info-box">
              <h3>${zh(lang, "BMI 是什么", "What is BMI?")}</h3>
              <p>${zh(lang, "BMI 是身体质量指数，常用于用身高和体重快速判断体重是否大致处在常见参考范围内。它适合做筛查和趋势观察，不是医学诊断。", "BMI stands for body mass index. It uses height and weight to quickly screen whether body weight is broadly within a common reference range. It is useful for screening and trend tracking, not diagnosis.")}</p>
            </div>
            <div class="info-box">
              <h3>${zh(lang, "如何计算", "How is BMI calculated?")}</h3>
              <p>BMI = weight (kg) / height² (m²)</p>
              <p>${zh(lang, "如果使用英制，系统会先自动换算为公斤和米。", "If you use imperial units, the calculator converts them to kilograms and meters first.")}</p>
            </div>
            <div class="info-box">
              <h3>${zh(lang, "常见分类", "BMI categories")}</h3>
              <ul class="checklist">
                <li>${zh(lang, "偏轻：< 18.5", "Underweight: < 18.5")}</li>
                <li>${zh(lang, "正常：18.5 - 24.9", "Normal: 18.5 - 24.9")}</li>
                <li>${zh(lang, "超重：25 - 29.9", "Overweight: 25 - 29.9")}</li>
                <li>${zh(lang, "肥胖：30+", "Obese: 30+")}</li>
              </ul>
            </div>
            <div class="info-box">
              <h3>${zh(lang, "BMI 的局限", "Limitations of BMI")}</h3>
              <ul class="checklist">
                <li>${zh(lang, "对肌肉量高的人可能高估脂肪水平", "It can overestimate body fat for muscular people")}</li>
                <li>${zh(lang, "不能直接测量体脂率", "It does not directly measure body fat")}</li>
                <li>${zh(lang, "最好结合腰围、体脂、运动能力一起看", "It works best when paired with waist size, body fat, and fitness markers")}</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "使用建议", "How to use your result")}</h2>
          <div class="tool-article-grid">
            <div class="info-box">
              <h3>${zh(lang, "如果 BMI 偏轻", "If you are underweight")}</h3>
              <ul class="checklist">
                <li>${zh(lang, "适度提高热量摄入", "Increase calorie intake gradually")}</li>
                <li>${zh(lang, "加入力量训练", "Add strength training")}</li>
              </ul>
            </div>
            <div class="info-box">
              <h3>${zh(lang, "如果 BMI 偏高", "If you are overweight")}</h3>
              <ul class="checklist">
                <li>${zh(lang, "建立温和热量缺口", "Create a moderate calorie deficit")}</li>
                <li>${zh(lang, "先从步数和规律训练开始", "Start with daily steps and regular training")}</li>
              </ul>
            </div>
            <div class="info-box">
              <h3>${zh(lang, "如果 BMI 正常", "If you are in the normal range")}</h3>
              <ul class="checklist">
                <li>${zh(lang, "继续维持饮食和作息", "Keep your current habits consistent")}</li>
                <li>${zh(lang, "把注意力放在体成分和体能表现", "Focus on body composition and performance")}</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "常见问题", "FAQ")}</h2>
          <div class="faq-grid">
            <article class="faq-item"><h3>${zh(lang, "BMI 准吗？", "Is BMI accurate?")}</h3><p>${zh(lang, "BMI 对大多数普通人有参考价值，但它不是体脂率检测。", "BMI is useful for most people as a screening metric, but it is not a direct body fat test.")}</p></article>
            <article class="faq-item"><h3>${zh(lang, "男女 BMI 有区别吗？", "Is BMI different for men and women?")}</h3><p>${zh(lang, "公式相同，但身体组成不同，所以建议结合腰围和体脂一起判断。", "The formula is the same, but body composition differs, so waist and body fat context still matter.")}</p></article>
            <article class="faq-item"><h3>${zh(lang, "多少 BMI 算比较好？", "What is a good BMI?")}</h3><p>${zh(lang, "常见参考范围是 18.5 到 24.9。", "The most commonly referenced range is 18.5 to 24.9.")}</p></article>
            <article class="faq-item"><h3>${zh(lang, "BMI 会不会错？", "Can BMI be wrong?")}</h3><p>${zh(lang, "对于肌肉量高的人、孕期人群或特殊人群，BMI 可能偏离真实情况。", "For muscular people, pregnancy, or some special populations, BMI can misrepresent the real picture.")}</p></article>
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "相关推荐", "Related tools")}</h2>
          <div class="tool-links">
            <a href="${toolUrl(lang, "tdee")}">${toolLabel(lang, "tdee")}</a>
            <a href="${toolUrl(lang, "deficit")}">${toolLabel(lang, "deficit")}</a>
            <a href="${toolUrl(lang, "bodyfat")}">${toolLabel(lang, "bodyfat")}</a>
            <a href="${toolUrl(lang, "ideal")}">${toolLabel(lang, "ideal")}</a>
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "更多功能", "More options")}</h2>
          <div class="hero-actions">
            <button type="button" class="button secondary">${zh(lang, "保存结果", "Save Your Result")}</button>
            <button type="button" class="button secondary">${zh(lang, "下载 PDF 报告", "Download PDF Report")}</button>
            <button type="button" class="button secondary">${zh(lang, "分享给朋友", "Share with Friends")}</button>
          </div>
        </section>
      </div>
    `;

    const calculatorMount = container.querySelector("[data-tool-calculator]");
    const resultBlock = container.querySelector("[data-bmi-result-block]");
    const graphBlock = container.querySelector("[data-bmi-graph]");

    calculatorMount.innerHTML = `
      <form class="calculator-form bmi-form">
        <div class="field-section">
          <div class="section-head compact">
            <h3>${zh(lang, "个人信息", "Personal Info")}</h3>
            <p>${zh(lang, "支持公制和英制切换，年龄和性别为可选增强信息。", "Switch between metric and imperial. Age and gender are optional enhancers.")}</p>
          </div>
          <label>${t(lang, "units")}<select name="units"><option value="metric">${t(lang, "metric")}</option><option value="imperial">${t(lang, "imperial")}</option></select></label>
          <div class="field-grid" data-fields></div>
        </div>
        <div class="field-section">
          <div class="section-head compact">
            <h3>${zh(lang, "生活方式", "Lifestyle")}</h3>
            <p>${zh(lang, "这些选项会帮助生成更贴近你的建议。", "These options help make the recommendations more relevant.")}</p>
          </div>
          <div class="field-grid">
            <label>${zh(lang, "活动水平", "Activity Level")}<select name="activity">
              <option value="sedentary">${zh(lang, "久坐", "Sedentary")}</option>
              <option value="light">${zh(lang, "轻度活跃", "Active")}</option>
              <option value="moderate">${zh(lang, "中等活跃", "Moderate")}</option>
              <option value="active">${zh(lang, "高活动量", "Very active")}</option>
            </select></label>
            <label>${zh(lang, "目标", "Goal")}<select name="goal">
              <option value="lose">${zh(lang, "减重", "Lose Weight")}</option>
              <option value="maintain">${zh(lang, "保持", "Maintain")}</option>
              <option value="gain">${zh(lang, "增重", "Gain")}</option>
            </select></label>
          </div>
        </div>
        <button type="submit">${zh(lang, "立即计算", "Calculate Now")} 🚀</button>
        <p class="fine-print">${zh(lang, "你的数据仅用于本次计算，不会被保存。", "Your data is private and not stored.")}</p>
      </form>
    `;

    const form = calculatorMount.querySelector("form");
    const fieldsBox = calculatorMount.querySelector("[data-fields]");

    const bmiFields = [
      { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
      { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
      { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
      { name: "age", metricLabel: "age", imperialLabel: "age", required: false },
      { name: "sex", labelText: { zh: "性别（可选）", en: "Gender (optional)" }, type: "select", options: [{ value: "male", label: { zh: "男性", en: "Male" } }, { value: "female", label: { zh: "女性", en: "Female" } }] }
    ];

    function updateFields() {
      fieldsBox.innerHTML = renderFields(lang, bmiFields, form.elements.units.value);
    }

    form.elements.units.addEventListener("change", updateFields);
    updateFields();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const values = Object.fromEntries(new FormData(form).entries());
        const extras = calcBmiExtras(values, lang);
        resultBlock.innerHTML = `
          <div class="bmi-result-card">
            <div class="bmi-result-top">
              <div class="bmi-hero-stat">
                <span class="bmi-kicker">${zh(lang, "你的 BMI 结果", "Your BMI Result")}</span>
                <strong>${round(extras.bmi, 1)}</strong>
                <span class="bmi-pill tone-${extras.category.tone}">${extras.category.label}</span>
              </div>
              <div class="hero-actions">
                <a class="button secondary" href="${toolUrl(lang, "tdee")}">${zh(lang, "获取热量计划", "Get Calorie Plan")}</a>
                <a class="button secondary" href="${toolUrl(lang, "ideal")}">${zh(lang, "查看理想体重", "Check Ideal Weight")}</a>
              </div>
            </div>
            ${extras.rangeBar}
            ${renderBmiGuidance(lang, extras)}
          </div>
        `;
        graphBlock.innerHTML = `
          <div class="chart-card">
            <h3>${zh(lang, "BMI 分布可视化", "BMI Distribution Chart")}</h3>
            ${extras.rangeBar}
          </div>
          <div class="chart-card">
            <h3>${zh(lang, "当前体重 vs 目标体重", "Current vs Target Weight")}</h3>
            <div class="comparison-bars">
              <div class="comparison-row"><span>${zh(lang, "当前", "Current")}</span><div><i style="width:${Math.min(100, Math.max(18, extras.healthyMax ? (Number(values.weight || 0) / extras.healthyMax) * 100 : 40))}%"></i></div><strong>${round(kgFromInput(values.units, values.weight, values.weight), 1)} kg</strong></div>
              <div class="comparison-row"><span>${zh(lang, "目标上沿", "Target upper")}</span><div><i class="target" style="width:${Math.min(100, Math.max(18, (extras.healthyMax / Math.max(extras.healthyMax, kgFromInput(values.units, values.weight, values.weight))) * 100))}%"></i></div><strong>${round(extras.healthyMax, 1)} kg</strong></div>
            </div>
            <p>${zh(lang, `如果想更稳地改善体重，可以先把每日热量控制在约 ${extras.goalCalories} kcal 左右，并连续观察 2 到 3 周。`, `A practical next step is to target about ${extras.goalCalories} kcal per day and review your progress over 2 to 3 weeks.`)}</p>
          </div>
        `;
      } catch (error) {
        resultBlock.innerHTML = `<div class="result">${error.message}</div>`;
      }
    });
  }

  function renderFields(lang, fields, units) {
    return fields.map((field) => {
      if (units === "metric" && field.onlyImperial) return "";
      if (units === "imperial" && field.onlyMetric) return "";
      if (field.type === "select") {
        return `<label>${labelFor(lang, field.labelText) || t(lang, field.label)}<select name="${field.name}">${field.options.map((option) => `<option value="${option.value || option}">${option.label ? labelFor(lang, option.label) : t(lang, option)}</option>`).join("")}</select></label>`;
      }
      if (field.type === "date") {
        return `<label>${labelFor(lang, field.labelText) || t(lang, field.label)}<input type="date" name="${field.name}" ${field.required === false ? "" : "required"}></label>`;
      }
      if (field.type === "time") {
        return `<label>${labelFor(lang, field.labelText) || t(lang, field.label)}<input type="time" name="${field.name}" required></label>`;
      }
      const labelKey = units === "imperial" ? field.imperialLabel : field.metricLabel;
      return `<label>${labelFor(lang, field.labelText) || t(lang, labelKey)}<input name="${field.name}" type="number" step="${field.step || "any"}" min="${field.min || "0"}" ${field.required === false ? "" : "required"}></label>`;
    }).join("");
  }

  const tools = {
    bmi: {
      title: "BMI Calculator",
      defaultHint: "Enter height and weight to estimate your body mass index.",
      fields: [
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" }
      ],
      compute(values, lang) {
        const extras = calcBmiExtras(values, lang);
        const bmi = extras.bmi;
        const status = extras.category.tone === "good" ? "good" : "caution";
        return {
          summary: zh(lang, `${t(lang, "bmiResult")}：${round(bmi, 1)}`, `${t(lang, "bmiResult")}: ${round(bmi, 1)}`),
          detail: extras.category.oneLiner,
          guidance: statusBox(status,
            zh(lang, "<p>你的 BMI 大致在常见参考范围内，可以继续保持规律活动、足够蛋白质、足够蔬菜水果和稳定睡眠。</p><p>即使结果不错，也建议继续关注腰围、体能状态和长期生活习惯，而不是只盯一个数字。</p>", "<p>Your BMI is in the commonly referenced range. Keep supporting it with steady activity, enough protein, fiber-rich meals, and regular sleep.</p><p>Good numbers still benefit from maintenance habits. Track waist size, energy levels, and training consistency instead of focusing on a single metric.</p>"),
            zh(lang, "<p>如果 BMI 偏高或偏低，更重要的是先回到基础习惯：规律吃饭、增加日常活动、做力量训练、改善睡眠。</p><p>BMI 不能区分肌肉和脂肪，所以建议同时结合腰围、体脂、体能和日常感受一起看。</p>", "<p>If your BMI is outside the common range, focus on sustainable basics first: regular meals, more daily movement, strength training, and sleep quality.</p><p>BMI does not separate fat from muscle, so also look at waist measurement, fitness level, and how you feel day to day.</p>")
          )
        };
      }
    },
    bmr: {
      title: "BMR Calculator",
      defaultHint: "Estimate the calories your body uses at rest.",
      fields: [
        { name: "age", metricLabel: "age", imperialLabel: "age" },
        { name: "sex", label: "sex", type: "select", options: ["male", "female"] },
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const heightCm = cmFromInput(values.units, values.height, values.height, values.heightInches);
        const age = Number(values.age);
        const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + (values.sex === "male" ? 5 : -161);
        return {
          summary: zh(lang, `${t(lang, "bmrResult")}：${Math.round(bmr)} 千卡/天`, `${t(lang, "bmrResult")}: ${Math.round(bmr)} kcal/day`),
          detail: zh(lang, "基础代谢表示身体在静息状态下大致会消耗多少能量，不包含日常活动和训练。", "BMR estimates how much energy your body uses at rest before movement and exercise."),
          guidance: zh(lang, "<p>基础代谢适合作为起点参考，不适合直接当作每天吃多少的目标。大多数人真实维持热量都会高于基础代谢，因为走路、工作、训练和消化都会消耗能量。</p><p>如果你想减脂或增肌，更适合把这个数字和活动水平、蛋白质摄入以及每周进度结合起来看，而不是一开始就把热量压得很低。</p>", "<p>Use BMR as a baseline, not as your eating target. Most people need more than BMR to maintain body weight because walking, work, training, and digestion all add energy use.</p><p>If your goal is fat loss or muscle gain, combine this number with activity level, protein intake, and weekly progress rather than making aggressive calorie cuts.</p>")
        };
      }
    },
    tdee: {
      title: "TDEE Calculator",
      defaultHint: "Estimate maintenance calories based on age, size, sex, and activity.",
      fields: [
        { name: "age", metricLabel: "age", imperialLabel: "age" },
        { name: "sex", label: "sex", type: "select", options: ["male", "female"] },
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "activity", label: "activity", type: "select", options: ["sedentary", "light", "moderate", "active", "athlete"] }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const heightCm = cmFromInput(values.units, values.height, values.height, values.heightInches);
        const age = Number(values.age);
        const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + (values.sex === "male" ? 5 : -161);
        const tdeeValue = bmr * activityFactors[values.activity];
        return {
          summary: zh(lang, `${t(lang, "tdeeResult")}：${Math.round(tdeeValue)} 千卡/天`, `${t(lang, "tdeeResult")}: ${Math.round(tdeeValue)} kcal/day`),
          detail: zh(lang, `${t(lang, "bmrResult")}：${Math.round(bmr)} 千卡/天。`, `${t(lang, "bmrResult")}: ${Math.round(bmr)} kcal/day.`),
          guidance: zh(lang, "<p>TDEE 更适合拿来作为维持热量的起点。如果你按这个结果执行两到三周后体重基本稳定，说明你的真实维持热量通常和它比较接近。</p><p>如果后续进度停滞，建议每次只微调 150 到 250 千卡，不要一次改太多。小幅调整更容易坚持，也更容易判断是否有效。</p>", "<p>TDEE is your best starting point for weight maintenance. If your body weight is stable for two to three weeks, your real maintenance calories are usually close to this estimate.</p><p>If progress stalls, adjust by 150 to 250 calories rather than making large changes. Smaller adjustments are easier to sustain and easier to evaluate.</p>")
        };
      }
    },
    bodyfat: {
      title: "Body Fat Calculator",
      defaultHint: "Use circumference measurements for a fast body fat estimate.",
      fields: [
        { name: "sex", label: "sex", type: "select", options: ["male", "female"] },
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
        { name: "waist", metricLabel: "waistCm", imperialLabel: "waistIn" },
        { name: "neck", metricLabel: "neckCm", imperialLabel: "neckIn" },
        { name: "hip", metricLabel: "hipCm", imperialLabel: "hipIn", required: false }
      ],
      compute(values, lang) {
        const height = cmFromInput(values.units, values.height, values.height, values.heightInches) / 2.54;
        const waist = inchesFromLinear(values.units, values.waist);
        const neck = inchesFromLinear(values.units, values.neck);
        const hip = inchesFromLinear(values.units, values.hip || 0);
        if (values.sex === "female" && !values.hip) {
          throw new Error("Hip measurement is required for this estimate.");
        }
        const fat = values.sex === "male"
          ? 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
          : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
        const status = fat < (values.sex === "male" ? 24 : 31) ? "good" : "caution";
        return {
          summary: zh(lang, `${t(lang, "bodyFatResult")}：${round(fat, 1)}%`, `${t(lang, "bodyFatResult")}: ${round(fat, 1)}%`),
          detail: zh(lang, "这是基于公式的估算结果，不等于医学体成分检测。", "This is a formula-based estimate, not a clinical body composition test."),
          guidance: statusBox(status,
            zh(lang, "<p>你的估算值大致在常见参考范围内，建议继续用力量训练、足够蛋白质和稳定活动量来保护肌肉量。</p><p>体脂率更适合看趋势，最好在相似条件下重复测量，而不是只看一次结果。</p>", "<p>Your estimate is within a commonly acceptable range. Keep protecting lean mass with strength training, enough protein, and steady daily movement.</p><p>Body fat trends matter more than a single reading, so repeat measurements under similar conditions.</p>"),
            zh(lang, "<p>如果结果高于你的目标，最稳妥的改善方向通常是温和热量缺口、更高蛋白、规律力量训练和更长周期的坚持。</p><p>过度节食虽然可能让体重短期下降，但更容易影响训练状态，也更难长期维持。</p>", "<p>If the estimate is higher than you want, the most reliable levers are a modest calorie deficit, higher protein intake, resistance training, and patience over several months.</p><p>Crash dieting often lowers training quality and makes maintenance harder later.</p>")
          )
        };
      }
    },
    ideal: {
      title: "Ideal Weight Calculator",
      defaultHint: "Compare your height with a simple reference weight formula.",
      fields: [
        { name: "sex", label: "sex", type: "select", options: ["male", "female"] },
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true }
      ],
      compute(values, lang) {
        const totalInches = cmFromInput(values.units, values.height, values.height, values.heightInches) / 2.54;
        const base = values.sex === "male" ? 50 : 45.5;
        const idealKg = base + Math.max(0, totalInches - 60) * 2.3;
        return {
          summary: zh(lang, `参考理想体重：${round(idealKg, 1)} kg`, `Ideal weight reference: ${round(idealKg, 1)} kg`),
          detail: zh(lang, "理想体重公式更适合用来提供方向感，无法反映肌肉量、骨架和运动背景。", "Reference formulas are useful for context, but they do not capture body composition or athletic build."),
          guidance: zh(lang, "<p>把理想体重当成参考值，而不是必须达到的唯一标准。更值得追求的目标，是能支持稳定精力、睡眠、血脂血糖和长期习惯的体重状态。</p><p>腰围、力量、恢复和长期可持续性，通常比某一个目标体重更有意义。</p>", "<p>Use ideal weight as a directional reference, not a rule. A healthier target is one that supports good blood markers, energy, sleep, and sustainable eating habits.</p><p>Waist size, strength, recovery, and long-term consistency usually tell you more than a single target weight.</p>")
        };
      }
    },
    wthr: {
      title: "Waist-to-Height Ratio Calculator",
      defaultHint: "Check waist size relative to height.",
      fields: [
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
        { name: "waist", metricLabel: "waistCm", imperialLabel: "waistIn" }
      ],
      compute(values, lang) {
        const heightCm = cmFromInput(values.units, values.height, values.height, values.heightInches);
        const waistCm = values.units === "imperial" ? Number(values.waist) * 2.54 : Number(values.waist);
        const ratio = waistCm / heightCm;
        const status = ratio < 0.5 ? "good" : "caution";
        return {
          summary: zh(lang, `腰高比：${round(ratio, 2)}`, `Waist-to-height ratio: ${round(ratio, 2)}`),
          detail: zh(lang, ratio < 0.5 ? "结果低于常见的 0.50 参考线。" : "结果高于常见的 0.50 参考线。", ratio < 0.5 ? "This is below the common 0.50 reference line." : "This is above the common 0.50 reference line."),
          guidance: statusBox(status,
            zh(lang, "<p>你的腰高比大致处于较理想的参考范围，可以继续通过规律步行、力量训练和更稳定的饮食结构来保持。</p>", "<p>Your waist-to-height ratio is in a commonly favorable range. Keep it there with resistance training, regular walking, and meals built around protein, vegetables, fruit, and minimally processed staples.</p>"),
            zh(lang, "<p>如果腰高比偏高，先把重点放在缩小腰围上，通常比只看体重更有帮助。睡眠、步数、力量训练和温和热量缺口都是更可靠的改善方向。</p>", "<p>If this ratio is high, reducing waist size often improves health markers even before body weight changes dramatically. Focus on sleep, step count, strength training, and a manageable calorie deficit.</p>")
          )
        };
      }
    },
    deficit: {
      title: "Calorie Deficit Calculator",
      defaultHint: "Choose a moderate fat-loss pace and estimate a calorie target.",
      fields: [
        { name: "tdeeValue", labelText: { zh: "估算 TDEE (kcal/天)", en: "Estimated TDEE (kcal/day)" } },
        { name: "goalRate", labelText: { zh: "每周减脂速度", en: "Weekly fat-loss pace" }, type: "select", options: [{ value: "0.25", label: { zh: "每周 0.25 kg", en: "0.25 kg per week" } }, { value: "0.5", label: { zh: "每周 0.5 kg", en: "0.5 kg per week" } }, { value: "0.75", label: { zh: "每周 0.75 kg", en: "0.75 kg per week" } }] }
      ],
      compute(values, lang) {
        const tdeeValue = Number(values.tdeeValue);
        const rate = Number(values.goalRate);
        const target = tdeeValue - ((rate * 7700) / 7);
        const status = target >= 1200 ? "good" : "caution";
        return {
          summary: zh(lang, `建议减脂热量：${Math.round(target)} 千卡/天`, `Suggested fat-loss calories: ${Math.round(target)} kcal/day`),
          detail: zh(lang, `每日热量缺口约：${Math.round(tdeeValue - target)} 千卡。`, `Daily deficit: ${Math.round(tdeeValue - target)} kcal.`),
          guidance: statusBox(status,
            zh(lang, "<p>这个目标对很多成年人来说属于相对温和、较容易坚持的减脂节奏。根据体型和适应情况，每周减重 0.25 到 0.75 kg 通常更稳妥。</p>", "<p>This target is moderate enough for many adults to sustain while keeping training and recovery reasonably strong. Aim for 0.25 to 0.75 kg loss per week depending on body size and comfort.</p>"),
            zh(lang, "<p>如果算出来的目标热量太低，建议把缺口调小，而不是一味压低摄入。过大的缺口更容易带来饥饿、疲劳和肌肉流失。</p>", "<p>If the target is very low, use a smaller deficit instead of forcing intake down too far. Very aggressive deficits make hunger, fatigue, and muscle loss more likely.</p>")
          )
        };
      }
    },
    surplus: {
      title: "Calorie Surplus Calculator",
      defaultHint: "Choose a muscle-gain pace and estimate a calorie target.",
      fields: [
        { name: "tdeeValue", labelText: { zh: "估算 TDEE (kcal/天)", en: "Estimated TDEE (kcal/day)" } },
        { name: "goalRate", labelText: { zh: "每周增重速度", en: "Weekly weight-gain pace" }, type: "select", options: [{ value: "0.15", label: { zh: "每周 0.15 kg", en: "0.15 kg per week" } }, { value: "0.25", label: { zh: "每周 0.25 kg", en: "0.25 kg per week" } }, { value: "0.35", label: { zh: "每周 0.35 kg", en: "0.35 kg per week" } }] }
      ],
      compute(values, lang) {
        const tdeeValue = Number(values.tdeeValue);
        const rate = Number(values.goalRate);
        const target = tdeeValue + ((rate * 7700) / 7);
        const status = rate <= 0.25 ? "good" : "caution";
        return {
          summary: zh(lang, `建议增重热量：${Math.round(target)} 千卡/天`, `Suggested gain calories: ${Math.round(target)} kcal/day`),
          detail: zh(lang, `每日热量盈余约：${Math.round(target - tdeeValue)} 千卡。`, `Daily surplus: ${Math.round(target - tdeeValue)} kcal.`),
          guidance: statusBox(status,
            zh(lang, "<p>更小的热量盈余通常更适合做相对干净的增肌。配合渐进超负荷训练、足够睡眠和均匀分配蛋白质，会更容易看到质量更好的增长。</p>", "<p>A smaller surplus is usually better for lean gains. Pair it with progressive overload, enough sleep, and protein spread across meals.</p>"),
            zh(lang, "<p>如果增重速度太快，往往脂肪增加会比肌肉更多。遇到这种情况，可以把热量盈余调小，观察两周后再判断。</p>", "<p>Fast weight gain often brings more fat gain than muscle. If weekly body weight jumps too quickly, scale the surplus back and reassess after two weeks.</p>")
          )
        };
      }
    },
    macro: {
      title: "Macro Calculator",
      defaultHint: "Turn your calorie target into grams of protein, carbs, and fat.",
      fields: [
        { name: "calories", labelText: { zh: "热量目标 (kcal/天)", en: "Calorie target (kcal/day)" } },
        { name: "goal", labelText: { zh: "宏量分配风格", en: "Macro style" }, type: "select", options: [{ value: "balanced", label: { zh: "均衡", en: "Balanced" } }, { value: "highprotein", label: { zh: "高蛋白", en: "Higher protein" } }, { value: "lowcarb", label: { zh: "低碳水", en: "Lower carb" } }] }
      ],
      compute(values, lang) {
        const calories = Number(values.calories);
        const splits = {
          balanced: { protein: 0.3, carbs: 0.4, fat: 0.3 },
          highprotein: { protein: 0.35, carbs: 0.35, fat: 0.3 },
          lowcarb: { protein: 0.35, carbs: 0.25, fat: 0.4 }
        };
        const split = splits[values.goal];
        const protein = Math.round((calories * split.protein) / 4);
        const carbs = Math.round((calories * split.carbs) / 4);
        const fat = Math.round((calories * split.fat) / 9);
        return {
          summary: zh(lang, `蛋白质 ${protein}g ｜ 碳水 ${carbs}g ｜ 脂肪 ${fat}g`, `Protein ${protein}g | Carbs ${carbs}g | Fat ${fat}g`),
          detail: zh(lang, "宏量营养只是规划工具，食物质量、纤维摄入和长期执行力仍然很重要。", "Macros are a planning framework. Food quality, fiber, and consistency still matter."),
          guidance: zh(lang, "<p>如果你经常感觉没精神、恢复差或很难坚持，那么最好的宏量比例，通常是那个你能长期执行、同时还能保证训练和生活状态的方案。</p><p>建议先把饮食质量做扎实，再用宏量营养去微调，而不是把每一餐都算得过于复杂。</p>", "<p>If energy, recovery, or adherence are poor, the best macro split is the one you can follow while feeling and training well. Protein adequacy matters most for body composition and recovery.</p><p>Choose mostly minimally processed foods first, then use macro numbers to fine-tune rather than overcomplicate every meal.</p>")
        };
      }
    },
    protein: {
      title: "Protein Intake Calculator",
      defaultHint: "Estimate a daily protein target based on body weight and goal.",
      fields: [
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "goal", labelText: { zh: "主要目标", en: "Primary goal" }, type: "select", options: [{ value: "general", label: { zh: "日常健康", en: "General health" } }, { value: "fatloss", label: { zh: "减脂", en: "Fat loss" } }, { value: "muscle", label: { zh: "增肌", en: "Muscle gain" } }, { value: "athlete", label: { zh: "高强度训练", en: "Heavy training" } }] }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const multiplier = { general: 1.2, fatloss: 1.8, muscle: 1.8, athlete: 2.2 }[values.goal];
        const target = weightKg * multiplier;
        return {
          summary: zh(lang, `蛋白质目标：${Math.round(target)} g/天`, `Protein target: ${Math.round(target)} g/day`),
          detail: zh(lang, `大约相当于每公斤体重 ${round(multiplier, 1)} g。`, `This equals about ${round(multiplier, 1)} g per kg of body weight.`),
          guidance: zh(lang, "<p>更高的蛋白质摄入通常有助于饱腹感、恢复和保留肌肉。对大多数人来说，把蛋白质分散到三到五餐里，会比集中在一餐更容易执行。</p><p>鸡蛋、酸奶、鱼、瘦肉、豆腐、豆类以及乳清或大豆蛋白，都是比较实用的来源。</p>", "<p>Higher protein intake usually helps satiety, muscle retention, and recovery. For most people, spreading protein across three to five meals works better than trying to eat it all at once.</p><p>Good practical sources include yogurt, eggs, fish, lean meat, tofu, tempeh, legumes, and whey or soy protein when needed.</p>")
        };
      }
    },
    water: {
      title: "Water Intake Calculator",
      defaultHint: "Estimate a hydration target using body weight, climate, and activity.",
      fields: [
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "activityMinutes", metricLabel: "waterActivity", imperialLabel: "waterActivity" },
        { name: "climate", label: "climate", type: "select", options: ["climateMild", "climateWarm", "climateHot"] }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const activityMinutes = Number(values.activityMinutes);
        const climateBoost = values.climate === "climateHot" ? 700 : values.climate === "climateWarm" ? 350 : 0;
        const waterMl = weightKg * 35 + activityMinutes * 12 + climateBoost;
        return {
          summary: zh(lang, `${t(lang, "waterResult")}：${round(waterMl / 1000, 1)} L/天`, `${t(lang, "waterResult")}: ${round(waterMl / 1000, 1)} L/day`),
          detail: zh(lang, `约 ${Math.round(waterMl)} ml/天。`, `${Math.round(waterMl)} ml per day.`),
          guidance: zh(lang, "<p>天气炎热、出汗多、海拔较高或训练时间更长时，饮水需求通常会上升。一个更实用的判断方式，是观察白天精神状态和尿液颜色是否偏浅黄。</p><p>如果你训练强度较高或大量出汗，除了补水，适当补充钠也可能有帮助。</p>", "<p>Your fluid need rises with heat, sweating, altitude, and longer training sessions. A useful real-world check is pale yellow urine and steady energy through the day.</p><p>If you train hard or sweat heavily, replacing sodium along with fluid may matter too.</p>")
        };
      }
    },
    targethr: {
      title: "Target Heart Rate Calculator",
      defaultHint: "Estimate a moderate and vigorous exercise heart-rate range.",
      fields: [
        { name: "age", metricLabel: "age", imperialLabel: "age" },
        { name: "restingHr", labelText: { zh: "静息心率 (bpm)", en: "Resting heart rate (bpm)" } }
      ],
      compute(values, lang) {
        const age = Number(values.age);
        const resting = Number(values.restingHr);
        const maxHr = 208 - (0.7 * age);
        const reserve = maxHr - resting;
        const moderateLow = resting + reserve * 0.5;
        const moderateHigh = resting + reserve * 0.7;
        const vigorousLow = resting + reserve * 0.7;
        const vigorousHigh = resting + reserve * 0.85;
        return {
          summary: zh(lang, `中等强度：${Math.round(moderateLow)}-${Math.round(moderateHigh)} 次/分`, `Moderate: ${Math.round(moderateLow)}-${Math.round(moderateHigh)} bpm`),
          detail: zh(lang, `高强度：${Math.round(vigorousLow)}-${Math.round(vigorousHigh)} 次/分。`, `Vigorous: ${Math.round(vigorousLow)}-${Math.round(vigorousHigh)} bpm.`),
          guidance: zh(lang, "<p>目标心率更像训练参考，不是必须死守的规则。如果你刚开始做有氧，把大部分训练放在中等强度附近，通常更容易建立基础又不至于太累。</p><p>如果运动时感觉明显过于吃力，可以结合说话测试和主观疲劳感一起判断，而不是只看数字。</p>", "<p>Target zones are guides, not rules. If you are new to cardio, staying in a moderate zone helps build aerobic fitness with less fatigue.</p><p>If pace feels unsustainably hard, use talk test and perceived exertion alongside heart-rate data.</p>")
        };
      }
    },
    hrrzones: {
      title: "Heart Rate Zone Calculator",
      defaultHint: "Break estimated training effort into five heart-rate zones.",
      fields: [
        { name: "age", metricLabel: "age", imperialLabel: "age" },
        { name: "restingHr", labelText: { zh: "静息心率 (bpm)", en: "Resting heart rate (bpm)" } }
      ],
      compute(values, lang) {
        const age = Number(values.age);
        const resting = Number(values.restingHr);
        const maxHr = 208 - (0.7 * age);
        const reserve = maxHr - resting;
        const zone = (low, high) => `${Math.round(resting + reserve * low)}-${Math.round(resting + reserve * high)} bpm`;
        return {
          summary: zh(lang, `1 区 ${zone(0.5, 0.6)} ｜ 2 区 ${zone(0.6, 0.7)}`, `Zone 1 ${zone(0.5, 0.6)} | Zone 2 ${zone(0.6, 0.7)}`),
          detail: zh(lang, `3 区 ${zone(0.7, 0.8)} ｜ 4 区 ${zone(0.8, 0.9)} ｜ 5 区 ${zone(0.9, 1.0)}`, `Zone 3 ${zone(0.7, 0.8)} | Zone 4 ${zone(0.8, 0.9)} | Zone 5 ${zone(0.9, 1.0)}`),
          guidance: zh(lang, "<p>大多数耐力训练其实应该放在更轻松的区间，因为这样更有利于建立有氧基础，同时恢复成本更低。高强度区间当然有价值，但不适合每次都练。</p><p>如果你经常感觉疲劳、跑不动或恢复很差，减少高强度训练量，往往比继续加练更有效。</p>", "<p>Most endurance training is usually done in easier zones because they build aerobic capacity with lower recovery cost. Hard zones are useful, but they should not dominate every session.</p><p>If you feel chronically tired, reducing high-intensity volume is often more helpful than adding more.</p>")
        };
      }
    },
    onerepmax: {
      title: "One Rep Max Calculator",
      defaultHint: "Estimate your one-rep max from a training set.",
      fields: [
        { name: "load", labelText: { zh: "举起重量", en: "Weight lifted" } },
        { name: "reps", labelText: { zh: "重复次数", en: "Repetitions" } }
      ],
      compute(values, lang) {
        const load = Number(values.load);
        const reps = Number(values.reps);
        const orm = load * (1 + reps / 30);
        return {
          summary: zh(lang, `估算 1RM：${round(orm, 1)}`, `Estimated 1RM: ${round(orm, 1)}`),
          detail: zh(lang, "这个结果使用 Epley 公式估算，在较低次数训练组中通常更有参考价值。", "This uses the Epley formula and is most reliable with lower rep sets."),
          guidance: zh(lang, "<p>1RM 估算更适合用来安排训练百分比，而不是频繁去测试真正的极限重量。动作质量始终比追一个完美数字更重要。</p><p>如果你那组动作已经明显变形或速度很慢，建议保守看待这个估算值。</p>", "<p>Use 1RM estimates to guide training percentages without testing an all-out max too often. Technique quality matters more than chasing a perfect estimate.</p><p>If reps were very slow or form broke down, treat the estimate conservatively.</p>")
        };
      }
    },
    pace: {
      title: "Running Pace Calculator",
      defaultHint: "Convert running time and distance into pace and average speed.",
      fields: [
        { name: "distance", metricLabel: "distanceKm", imperialLabel: "distanceMi" },
        { name: "hours", metricLabel: "hours", imperialLabel: "hours" },
        { name: "minutes", metricLabel: "minutes", imperialLabel: "minutes" }
      ],
      compute(values, lang) {
        const distance = Number(values.distance);
        const totalMinutes = Number(values.hours) * 60 + Number(values.minutes);
        const minutesPerUnit = totalMinutes / distance;
        const paceMinutes = Math.floor(minutesPerUnit);
        const paceSeconds = Math.round((minutesPerUnit - paceMinutes) * 60);
        const speed = (distance / totalMinutes) * 60;
        const unit = values.units === "imperial" ? "mi" : "km";
        return {
          summary: zh(lang, `${t(lang, "paceResult")}：${paceMinutes}:${String(paceSeconds).padStart(2, "0")} / ${unit}`, `${t(lang, "paceResult")}: ${paceMinutes}:${String(paceSeconds).padStart(2, "0")} / ${unit}`),
          detail: zh(lang, `平均速度：${speed.toFixed(2)} ${unit}/h。`, `${speed.toFixed(2)} ${unit}/h average speed.`),
          guidance: zh(lang, "<p>如果你想提高配速，通常最有效的做法不是每次都跑很累，而是让大部分跑量保持轻松，再加入少量高质量训练。</p><p>如果你当前配速已经接近目标，接下来更要重视恢复、睡眠和轻松跑量，而不是一味加强度。</p>", "<p>If you want to get faster, keep most weekly running easy and add one or two quality sessions. Consistency beats occasional heroic workouts.</p><p>If your pace is already strong for your goal, protect it with recovery, sleep, and enough easy mileage.</p>")
        };
      }
    },
    vo2max: {
      title: "VO2 Max Estimate Calculator",
      defaultHint: "Estimate VO2 max from age and resting heart rate.",
      fields: [
        { name: "age", metricLabel: "age", imperialLabel: "age" },
        { name: "restingHr", labelText: { zh: "静息心率 (bpm)", en: "Resting heart rate (bpm)" } }
      ],
      compute(values, lang) {
        const age = Number(values.age);
        const resting = Number(values.restingHr);
        const maxHr = 208 - (0.7 * age);
        const vo2 = 15.3 * (maxHr / resting);
        const status = vo2 >= 35 ? "good" : "caution";
        return {
          summary: zh(lang, `估算 VO2 Max：${round(vo2, 1)} ml/kg/min`, `Estimated VO2 max: ${round(vo2, 1)} ml/kg/min`),
          detail: zh(lang, "这是一个粗略估算值，不是实验室检测结果。", "This is a rough estimate, not a lab measurement."),
          guidance: statusBox(status,
            zh(lang, "<p>这个结果说明你的有氧基础大致不错。接下来更适合通过稳定的轻松有氧、适量间歇训练和充分恢复来继续提升。</p>", "<p>Your estimate suggests a reasonable aerobic base. Keep improving with easy volume, interval work in moderation, and enough recovery between hard days.</p>"),
            zh(lang, "<p>如果结果偏低，更推荐从快走、轻松骑车或轻松跑开始。有氧能力最怕三天打鱼两天晒网，最吃香的是可重复、可坚持的节奏。</p>", "<p>If the estimate is low, start with regular brisk walking, easy cycling, or easy running. Aerobic fitness improves most from repeatable routines, not maximal effort every day.</p>")
          )
        };
      }
    },
    sleep: {
      title: "Sleep Cycle Calculator",
      defaultHint: "Choose your wake-up time and get bedtime suggestions.",
      units: false,
      fields: [
        { name: "wakeTime", label: "bedtime", type: "time" }
      ],
      compute(values, lang) {
        const [hours, minutes] = values.wakeTime.split(":").map(Number);
        const wakeMinutes = hours * 60 + minutes;
        const cycles = [6, 5, 4];
        const times = cycles.map((count) => {
          let bedtime = wakeMinutes - (count * 90 + 15);
          while (bedtime < 0) bedtime += 24 * 60;
          return `${String(Math.floor(bedtime / 60)).padStart(2, "0")}:${String(bedtime % 60).padStart(2, "0")}`;
        });
        return {
          summary: zh(lang, `${t(lang, "sleepResult")}：${times.join(" / ")}`, `${t(lang, "sleepResult")}: ${times.join(" / ")}`),
          detail: t(lang, "sleepIntro"),
          guidance: zh(lang, "<p>睡眠质量不只取决于时间点。固定起床时间、减少晚间强光、保持卧室偏凉和睡前节奏稳定，通常比追求某个完美入睡时间更有效。</p><p>如果你明明睡得够久还是疲惫，可以继续检查咖啡因时间、酒精摄入、压力水平和作息是否不规律。</p>", "<p>Sleep quality is not only about timing. A dark room, consistent wake time, lower evening light exposure, and a cooler bedroom usually help more than chasing a perfect bedtime.</p><p>If you wake up tired even with enough time in bed, look at caffeine timing, alcohol, stress, and irregular sleep schedules.</p>")
        };
      }
    },
    sugar: {
      title: "Sugar Intake Calculator",
      defaultHint: "Estimate a practical upper limit for added sugar based on calories.",
      units: false,
      fields: [
        { name: "calories", labelText: { zh: "每日热量", en: "Daily calories" } }
      ],
      compute(values, lang) {
        const calories = Number(values.calories);
        const maxSugar = (calories * 0.1) / 4;
        return {
          summary: zh(lang, `添加糖参考上限：${Math.round(maxSugar)} g/天`, `Added sugar upper limit: ${Math.round(maxSugar)} g/day`),
          detail: zh(lang, "这里采用的是“添加糖不超过总热量 10%”的常见参考思路。", "This uses the common guideline of keeping added sugar under 10% of calories."),
          guidance: zh(lang, "<p>如果你的糖摄入偏高，最容易先改掉的通常是含糖饮料、甜咖啡、甜点和高糖零食。很多时候只要先从这些地方下手，就能明显改善热量控制。</p><p>如果你的摄入本来就不高，不需要追求极端“零糖”，更重要的是把水果、全谷物和高纤维食物保留下来。</p>", "<p>If your sugar intake is high, the easiest wins are sugary drinks, sweet coffee, desserts, and heavily sweetened snacks. Cutting those often improves calorie control without complex tracking.</p><p>If your intake is already low, keep making room for fruit, whole grains, and fiber-rich foods instead of chasing zero sugar at all costs.</p>")
        };
      }
    },
    sodium: {
      title: "Sodium Intake Calculator",
      defaultHint: "Compare your sodium intake with common adult guidance.",
      units: false,
      fields: [
        { name: "sodium", labelText: { zh: "每日钠摄入量 (mg)", en: "Daily sodium intake (mg)" } }
      ],
      compute(values, lang) {
        const sodium = Number(values.sodium);
        const status = sodium <= 2300 ? "good" : "caution";
        return {
          summary: zh(lang, `当前钠摄入：${Math.round(sodium)} mg/天`, `Sodium logged: ${Math.round(sodium)} mg/day`),
          detail: zh(lang, sodium <= 2300 ? "结果处于常见成人上限范围内。" : "结果高于常见成人 2300 mg/天 的参考上限。", sodium <= 2300 ? "This is within the common adult upper limit." : "This is above the common adult upper limit of 2300 mg/day."),
          guidance: statusBox(status,
            zh(lang, "<p>你的摄入大致还在常见参考范围内，但还是要留意加工食品、汤底、酱料和外卖，因为这些食物会让钠摄入很快升高。</p>", "<p>Your intake is within a commonly referenced range. Keep paying attention to ultra-processed foods, sauces, instant meals, and restaurant portions, which can raise sodium quickly.</p>"),
            zh(lang, "<p>多数钠摄入过高，主要来自包装食品和外卖，并不只是做菜多放了一点盐。更实际的做法，是从少吃重口加工食品、多做简单家常餐和看营养标签开始。</p>", "<p>Most excess sodium comes from packaged and restaurant foods, not only from table salt. Lower-sodium swaps, more home cooking, and reading labels help more than trying to cut every gram overnight.</p>")
          )
        };
      }
    },
    caffeine: {
      title: "Caffeine Intake Calculator",
      defaultHint: "Estimate a practical daily caffeine ceiling.",
      fields: [
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "caffeine", labelText: { zh: "当前咖啡因摄入量 (mg)", en: "Current caffeine intake (mg)" } }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const current = Number(values.caffeine);
        const ceiling = Math.min(400, weightKg * 6);
        const status = current <= ceiling ? "good" : "caution";
        return {
          summary: zh(lang, `建议上限：${Math.round(ceiling)} mg/天`, `Suggested ceiling: ${Math.round(ceiling)} mg/day`),
          detail: zh(lang, `当前摄入：${Math.round(current)} mg/天。`, `Current intake: ${Math.round(current)} mg/day.`),
          guidance: statusBox(status,
            zh(lang, "<p>你的摄入大致还在很多健康成年人常用的范围内，但如果晚上睡得浅、入睡慢，仍然建议把咖啡因尽量放在更早的时间段。</p>", "<p>Your intake is within a practical range for many healthy adults. Sleep quality still depends on timing, so keep caffeine earlier in the day if sleep feels light or delayed.</p>"),
            zh(lang, "<p>如果摄入偏高，建议逐步减少，而不是一下子停掉，这样更能减少头痛和疲劳。很多时候，把最后一次摄入时间提前，和减少总量一样重要。</p>", "<p>If intake is high, taper gradually to reduce headaches and fatigue. Moving the last dose earlier is often as important as lowering the total amount.</p>")
          )
        };
      }
    },
    leanmass: {
      title: "Lean Body Mass Calculator",
      defaultHint: "Estimate lean body mass from body weight and body fat percentage.",
      fields: [
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "bodyFatPercent", labelText: { zh: "体脂率 (%)", en: "Body fat (%)" } }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const bodyFatPercent = Number(values.bodyFatPercent);
        const leanMass = weightKg * (1 - bodyFatPercent / 100);
        return {
          summary: zh(lang, `瘦体重估算：${round(leanMass, 1)} kg`, `Estimated lean body mass: ${round(leanMass, 1)} kg`),
          detail: zh(lang, "瘦体重指的是体重中除脂肪外的大致部分，包括肌肉、骨骼和身体水分。", "Lean body mass is the portion of body weight that is not fat."),
          guidance: zh(lang, "<p>如果你希望提高身体质量，瘦体重通常比体重本身更值得关注。力量训练、足够蛋白质和稳定恢复，通常是影响瘦体重最关键的因素。</p><p>这个结果更适合做趋势参考，后续可以结合体脂率变化一起看。</p>", "<p>Lean body mass is often more useful than scale weight when tracking body composition. Strength training, adequate protein, and recovery are the main drivers you can influence.</p><p>Use this as a trend tool alongside body fat changes.</p>")
        };
      }
    },
    weightloss: {
      title: "Weight Loss Timeline Calculator",
      defaultHint: "Estimate how long a weight-loss goal may take at a steady weekly pace.",
      units: false,
      fields: [
        { name: "currentWeight", labelText: { zh: "当前体重 (kg)", en: "Current weight (kg)" } },
        { name: "targetWeight", labelText: { zh: "目标体重 (kg)", en: "Target weight (kg)" } },
        { name: "weeklyLoss", labelText: { zh: "每周计划减重 (kg)", en: "Weekly loss goal (kg)" } }
      ],
      compute(values, lang) {
        const current = Number(values.currentWeight);
        const target = Number(values.targetWeight);
        const weekly = Number(values.weeklyLoss);
        const weeks = Math.max(0, (current - target) / weekly);
        return {
          summary: zh(lang, `预计需要 ${Math.ceil(weeks)} 周`, `Estimated timeline: ${Math.ceil(weeks)} weeks`),
          detail: zh(lang, `从 ${current} kg 到 ${target} kg，按每周 ${weekly} kg 的节奏估算。`, `From ${current} kg to ${target} kg at ${weekly} kg per week.`),
          guidance: zh(lang, "<p>减重时间表更适合看大方向，不适合要求每周都精确一致。体重会受水分、饮食、睡眠和生理周期影响，短期波动很正常。</p><p>如果你能稳定坚持饮食和活动习惯，慢一点往往比快一点更容易长期维持。</p>", "<p>Weight-loss timelines are best treated as broad estimates. Water balance, stress, sleep, and normal fluctuations can change the week-to-week trend.</p><p>Slow and consistent progress is usually easier to maintain than aggressive short-term targets.</p>")
        };
      }
    },
    fastingcalc: {
      title: "Intermittent Fasting Calculator",
      defaultHint: "Plan a fasting schedule by choosing an eating window style.",
      units: false,
      fields: [
        { name: "lastMeal", labelText: { zh: "最后一餐时间", en: "Last meal time" }, type: "time" },
        { name: "schedule", labelText: { zh: "模式", en: "Schedule" }, type: "select", options: [{ value: "14", label: { zh: "14:10", en: "14:10" } }, { value: "16", label: { zh: "16:8", en: "16:8" } }, { value: "18", label: { zh: "18:6", en: "18:6" } }] }
      ],
      compute(values, lang) {
        const [h, m] = values.lastMeal.split(":").map(Number);
        const start = h * 60 + m;
        const fastHours = Number(values.schedule);
        const nextMeal = (start + fastHours * 60) % (24 * 60);
        const eatWindow = 24 - fastHours;
        const nextTime = `${String(Math.floor(nextMeal / 60)).padStart(2, "0")}:${String(nextMeal % 60).padStart(2, "0")}`;
        return {
          summary: zh(lang, `下一次进食时间：${nextTime}`, `Next meal time: ${nextTime}`),
          detail: zh(lang, `当前模式约为 ${fastHours}:${eatWindow}。`, `This schedule is approximately ${fastHours}:${eatWindow}.`),
          guidance: zh(lang, "<p>间歇性断食更像一种进食安排方式，而不是自动有效的减脂捷径。真正决定体重变化的，仍然是总热量、饮食质量和执行稳定性。</p><p>如果断食让你暴食、头晕或睡眠变差，就需要调整窗口，而不是硬撑。</p>", "<p>Intermittent fasting is an eating schedule, not a guarantee of fat loss on its own. Total calories, food quality, and consistency still matter most.</p><p>If the schedule leads to overeating, poor sleep, or low energy, adjust it rather than forcing it.</p>")
        };
      }
    },
    fastingtimer: {
      title: "Fasting Window Timer",
      defaultHint: "Check how long remains in your current fasting window.",
      units: false,
      fields: [
        { name: "fastStart", labelText: { zh: "开始断食时间", en: "Fast start time" }, type: "time" },
        { name: "fastHours", labelText: { zh: "断食时长 (小时)", en: "Fasting hours" } }
      ],
      compute(values, lang) {
        const [h, m] = values.fastStart.split(":").map(Number);
        const start = h * 60 + m;
        const duration = Number(values.fastHours) * 60;
        const end = (start + duration) % (24 * 60);
        const endTime = `${String(Math.floor(end / 60)).padStart(2, "0")}:${String(end % 60).padStart(2, "0")}`;
        return {
          summary: zh(lang, `断食结束时间：${endTime}`, `Fast ends at: ${endTime}`),
          detail: zh(lang, `当前断食窗口约为 ${Number(values.fastHours)} 小时。`, `The fasting window lasts about ${Number(values.fastHours)} hours.`),
          guidance: zh(lang, "<p>断食时间更适合帮助你建立节奏，而不是追求越长越好。对大多数人来说，能长期执行、状态稳定的窗口，通常比极端时长更有价值。</p>", "<p>A fasting timer is useful for structure, but longer is not automatically better. A schedule you can repeat consistently is usually the smarter choice.</p>")
        };
      }
    },
    bedtimecalc: {
      title: "Bedtime Calculator",
      defaultHint: "Choose your wake-up time and get a suggested bedtime.",
      units: false,
      fields: [
        { name: "wakeTime", labelText: { zh: "计划起床时间", en: "Planned wake-up time" }, type: "time" },
        { name: "sleepHours", labelText: { zh: "目标睡眠时长 (小时)", en: "Target sleep hours" } }
      ],
      compute(values, lang) {
        const [h, m] = values.wakeTime.split(":").map(Number);
        const wake = h * 60 + m;
        const duration = Number(values.sleepHours) * 60;
        const bedtime = (wake - duration + 24 * 60) % (24 * 60);
        const time = `${String(Math.floor(bedtime / 60)).padStart(2, "0")}:${String(bedtime % 60).padStart(2, "0")}`;
        return {
          summary: zh(lang, `建议入睡时间：${time}`, `Suggested bedtime: ${time}`),
          detail: zh(lang, `按目标睡眠 ${Number(values.sleepHours)} 小时估算。`, `Based on a target of ${Number(values.sleepHours)} hours of sleep.`),
          guidance: zh(lang, "<p>更重要的是让起床时间和睡前节奏逐渐固定，而不是偶尔早睡一次。真正让人白天状态更稳的，通常是连续几周的规律作息。</p>", "<p>Consistency matters more than a single early night. Regular wake times and repeatable evening habits usually have the biggest payoff.</p>")
        };
      }
    },
    wakecalc: {
      title: "Wake-Up Time Calculator",
      defaultHint: "Choose when you plan to sleep and estimate a wake-up time.",
      units: false,
      fields: [
        { name: "sleepTime", labelText: { zh: "预计入睡时间", en: "Planned sleep time" }, type: "time" },
        { name: "sleepHours", labelText: { zh: "目标睡眠时长 (小时)", en: "Target sleep hours" } }
      ],
      compute(values, lang) {
        const [h, m] = values.sleepTime.split(":").map(Number);
        const sleep = h * 60 + m;
        const wake = (sleep + Number(values.sleepHours) * 60) % (24 * 60);
        const time = `${String(Math.floor(wake / 60)).padStart(2, "0")}:${String(wake % 60).padStart(2, "0")}`;
        return {
          summary: zh(lang, `建议起床时间：${time}`, `Suggested wake-up time: ${time}`),
          detail: zh(lang, `按目标睡眠 ${Number(values.sleepHours)} 小时估算。`, `Based on a target of ${Number(values.sleepHours)} hours of sleep.`),
          guidance: zh(lang, "<p>如果你经常需要倒推起床时间，说明你已经开始主动管理作息。下一步更值得做的是把每天起床时间尽量稳定下来。</p>", "<p>If you often plan sleep this way, the next useful step is keeping wake-up time consistent across the week.</p>")
        };
      }
    },
    napcalc: {
      title: "Nap Calculator",
      defaultHint: "Estimate a short or full-cycle nap end time.",
      units: false,
      fields: [
        { name: "napStart", labelText: { zh: "开始小睡时间", en: "Nap start time" }, type: "time" },
        { name: "napType", labelText: { zh: "小睡类型", en: "Nap type" }, type: "select", options: [{ value: "20", label: { zh: "20 分钟快速恢复", en: "20 min power nap" } }, { value: "90", label: { zh: "90 分钟完整周期", en: "90 min full cycle" } }] }
      ],
      compute(values, lang) {
        const [h, m] = values.napStart.split(":").map(Number);
        const start = h * 60 + m;
        const wake = (start + Number(values.napType)) % (24 * 60);
        const time = `${String(Math.floor(wake / 60)).padStart(2, "0")}:${String(wake % 60).padStart(2, "0")}`;
        return {
          summary: zh(lang, `建议醒来时间：${time}`, `Suggested wake time: ${time}`),
          detail: zh(lang, `当前小睡时长约 ${Number(values.napType)} 分钟。`, `This nap lasts about ${Number(values.napType)} minutes.`),
          guidance: zh(lang, "<p>短小睡更适合快速恢复精神，完整周期小睡更适合补觉但更容易影响晚间作息。下午晚些时候的小睡时间过长，常常会拖慢晚上的入睡速度。</p>", "<p>Short naps are usually better for quick alertness. Longer naps may help recovery but can also make it harder to fall asleep later at night.</p>")
        };
      }
    },
    sleepdebt: {
      title: "Sleep Debt Calculator",
      defaultHint: "Compare your usual sleep with your target sleep amount.",
      units: false,
      fields: [
        { name: "targetSleep", labelText: { zh: "理想睡眠时长 (小时/晚)", en: "Target sleep (hours/night)" } },
        { name: "actualSleep", labelText: { zh: "实际平均睡眠 (小时/晚)", en: "Actual average sleep (hours/night)" } },
        { name: "days", labelText: { zh: "持续天数", en: "Number of days" } }
      ],
      compute(values, lang) {
        const debtHours = Math.max(0, (Number(values.targetSleep) - Number(values.actualSleep)) * Number(values.days));
        return {
          summary: zh(lang, `累计睡眠负债：${round(debtHours, 1)} 小时`, `Estimated sleep debt: ${round(debtHours, 1)} hours`),
          detail: zh(lang, "睡眠负债并不是一次补觉就能完全抵消，更像是提醒你最近恢复可能不足。", "Sleep debt is a broad estimate showing that recent recovery may have been lower than ideal."),
          guidance: zh(lang, "<p>如果睡眠负债已经累积，优先把接下来几天的起床时间和上床时间逐渐拉回稳定，而不是单靠周末一次补很多。</p><p>白天咖啡因过晚、晚间过度刷屏和高压力，往往会让睡眠负债越积越多。</p>", "<p>If debt is building up, gradual schedule repair works better than relying on one huge catch-up sleep. Late caffeine, excessive evening screen time, and stress are common contributors.</p>")
        };
      }
    },
    walkingcal: {
      title: "Walking Calories Calculator",
      defaultHint: "Estimate calories burned during walking.",
      fields: [
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "distance", metricLabel: "distanceKm", imperialLabel: "distanceMi" },
        { name: "pace", labelText: { zh: "步行速度", en: "Walking pace" }, type: "select", options: [{ value: "2.8", label: { zh: "慢走", en: "Easy walk" } }, { value: "3.5", label: { zh: "中速步行", en: "Moderate walk" } }, { value: "4.3", label: { zh: "快走", en: "Brisk walk" } }] }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const distanceKm = values.units === "imperial" ? Number(values.distance) * 1.60934 : Number(values.distance);
        const hours = distanceKm / (Number(values.pace) * 1.60934);
        const met = Number(values.pace) < 3 ? 2.8 : Number(values.pace) < 4 ? 3.5 : 4.3;
        const calories = met * weightKg * hours;
        return {
          summary: zh(lang, `步行消耗约：${Math.round(calories)} 千卡`, `Estimated walking calories: ${Math.round(calories)} kcal`),
          detail: zh(lang, `按约 ${distanceKm.toFixed(1)} km 的步行距离估算。`, `Estimated from about ${distanceKm.toFixed(1)} km of walking.`),
          guidance: zh(lang, "<p>步行是非常容易长期坚持的活动形式。对很多人来说，稳定增加步数和快走时间，比偶尔一次高强度训练更容易积累长期收益。</p>", "<p>Walking is one of the easiest activities to repeat consistently. For many people, steady daily walking adds up better than occasional hard workouts.</p>")
        };
      }
    },
    fiber: {
      title: "Fiber Intake Calculator",
      defaultHint: "Estimate a practical daily fiber target.",
      units: false,
      fields: [
        { name: "calories", labelText: { zh: "每日热量", en: "Daily calories" } }
      ],
      compute(values, lang) {
        const fiber = (Number(values.calories) / 1000) * 14;
        return {
          summary: zh(lang, `建议纤维目标：${Math.round(fiber)} g/天`, `Suggested fiber target: ${Math.round(fiber)} g/day`),
          detail: zh(lang, "这里采用常见的每 1000 千卡约 14 g 膳食纤维的参考方法。", "This uses the common guideline of about 14 g of fiber per 1000 kcal."),
          guidance: zh(lang, "<p>如果纤维摄入偏低，可以优先增加蔬菜、水果、豆类、全谷物和坚果种子，而不是一下子只靠补剂猛加。</p><p>纤维增加太快有时会带来腹胀，所以更适合逐步提高，同时注意饮水。</p>", "<p>If fiber is low, focus on vegetables, fruit, legumes, whole grains, nuts, and seeds before relying on supplements. Increase gradually and keep hydration steady.</p>")
        };
      }
    },
    habitscore: {
      title: "Healthy Habit Score Tool",
      defaultHint: "Score a few core habits and get a simple health habit snapshot.",
      units: false,
      fields: [
        { name: "sleep", labelText: { zh: "平均睡眠时长 (小时)", en: "Average sleep (hours)" } },
        { name: "steps", labelText: { zh: "日均步数", en: "Daily steps" } },
        { name: "waterLiters", labelText: { zh: "日均饮水量 (L)", en: "Water intake (L)" } },
        { name: "vegetableMeals", labelText: { zh: "每天有蔬菜的餐次数", en: "Meals with vegetables per day" } }
      ],
      compute(values, lang) {
        let score = 0;
        if (Number(values.sleep) >= 7) score += 25;
        if (Number(values.steps) >= 7000) score += 25;
        if (Number(values.waterLiters) >= 1.8) score += 25;
        if (Number(values.vegetableMeals) >= 2) score += 25;
        const status = score >= 75 ? "good" : "caution";
        return {
          summary: zh(lang, `健康习惯得分：${score}/100`, `Healthy habit score: ${score}/100`),
          detail: zh(lang, "这是一个轻量自查工具，用于帮助你观察近期基础习惯是否比较稳定。", "This is a light self-check tool to help you reflect on recent baseline habits."),
          guidance: statusBox(status,
            zh(lang, "<p>你的基础习惯大致比较稳定。下一步更值得做的是持续保持，而不是频繁大改。</p><p>真正长期有效的健康管理，通常来自普通但稳定的好习惯。</p>", "<p>Your core habits look fairly steady. The next priority is consistency rather than constant major changes.</p><p>Long-term health usually comes from ordinary habits done well over time.</p>"),
            zh(lang, "<p>如果分数不高，不需要一下子改变所有事情。先从睡眠、步数、饮水或蔬菜摄入里选一个最容易执行的点开始，通常就能带来明显变化。</p>", "<p>If the score is low, do not try to overhaul everything at once. Start with the easiest habit to improve first, such as sleep, steps, hydration, or vegetables.</p>")
          )
        };
      }
    },
    bodyshape: {
      title: "Body Shape Calculator",
      defaultHint: "Estimate a simple body-shape category from waist and hip measurements.",
      fields: [
        { name: "sex", label: "sex", type: "select", options: ["male", "female"] },
        { name: "waist", metricLabel: "waistCm", imperialLabel: "waistIn" },
        { name: "hip", metricLabel: "hipCm", imperialLabel: "hipIn" }
      ],
      compute(values, lang) {
        const waist = values.units === "imperial" ? Number(values.waist) * 2.54 : Number(values.waist);
        const hip = values.units === "imperial" ? Number(values.hip) * 2.54 : Number(values.hip);
        const ratio = waist / hip;
        const shape = ratio > (values.sex === "male" ? 0.95 : 0.85) ? zh(lang, "上身更集中型", "More central shape") : zh(lang, "下身更平衡型", "More balanced lower-body shape");
        return {
          summary: zh(lang, `腰臀比：${round(ratio, 2)}`, `Waist-to-hip ratio: ${round(ratio, 2)}`),
          detail: zh(lang, `体型倾向：${shape}。`, `Body-shape tendency: ${shape}.`),
          guidance: zh(lang, "<p>体型结果只是简单分类，不代表健康好坏。更重要的是结合腰围、体脂率、活动水平和长期习惯一起看。</p>", "<p>Body-shape categories are simple labels, not health verdicts. Use them alongside waist size, body fat, and long-term habits.</p>")
        };
      }
    },
    calorieneeds: {
      title: "Calorie Needs Calculator",
      defaultHint: "Estimate your daily calorie needs based on body size and activity.",
      fields: [
        { name: "age", metricLabel: "age", imperialLabel: "age" },
        { name: "sex", label: "sex", type: "select", options: ["male", "female"] },
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true },
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "activity", label: "activity", type: "select", options: ["sedentary", "light", "moderate", "active", "athlete"] }
      ],
      compute(values, lang) {
        return tools.tdee.compute(values, lang);
      }
    },
    healthyweightrange: {
      title: "Healthy Weight Range Calculator",
      defaultHint: "Estimate a common healthy body-weight range from height.",
      fields: [
        { name: "height", metricLabel: "heightCm", imperialLabel: "heightFt" },
        { name: "heightInches", metricLabel: "heightCm", imperialLabel: "heightIn", required: false, onlyImperial: true }
      ],
      compute(values, lang) {
        const heightCm = cmFromInput(values.units, values.height, values.height, values.heightInches);
        const meters = heightCm / 100;
        const low = 18.5 * meters * meters;
        const high = 24.9 * meters * meters;
        return {
          summary: zh(lang, `参考体重范围：${round(low, 1)} - ${round(high, 1)} kg`, `Healthy weight range: ${round(low, 1)} - ${round(high, 1)} kg`),
          detail: zh(lang, "这里使用的是常见 BMI 18.5 到 24.9 的参考区间。", "This uses the commonly referenced BMI range of 18.5 to 24.9."),
          guidance: zh(lang, "<p>这个范围适合做大方向参考，但不能代替对体脂率、腰围、力量和精神状态的观察。</p>", "<p>This range is useful for context, but it does not replace body fat, waist, strength, and recovery indicators.</p>")
        };
      }
    },
    fatintake: {
      title: "Fat Intake Calculator",
      defaultHint: "Estimate a daily fat intake target from total calories.",
      units: false,
      fields: [
        { name: "calories", labelText: { zh: "每日热量", en: "Daily calories" } },
        { name: "style", labelText: { zh: "脂肪占比", en: "Fat split" }, type: "select", options: [{ value: "0.25", label: { zh: "25%", en: "25%" } }, { value: "0.3", label: { zh: "30%", en: "30%" } }, { value: "0.35", label: { zh: "35%", en: "35%" } }] }
      ],
      compute(values, lang) {
        const grams = (Number(values.calories) * Number(values.style)) / 9;
        return {
          summary: zh(lang, `脂肪目标：${Math.round(grams)} g/天`, `Fat target: ${Math.round(grams)} g/day`),
          detail: zh(lang, "这是按总热量占比换算出来的脂肪摄入参考值。", "This converts a percentage of total calories into a daily fat target."),
          guidance: zh(lang, "<p>脂肪摄入过低会影响饱腹感和饮食满足度。更实用的做法是优先保证基础脂肪摄入，再去微调碳水和蛋白质。</p>", "<p>Fat intake that is too low can hurt satiety and make a diet harder to follow. Set a reasonable baseline first, then fine-tune from there.</p>")
        };
      }
    },
    carbintake: {
      title: "Carb Intake Calculator",
      defaultHint: "Estimate a daily carbohydrate target from total calories.",
      units: false,
      fields: [
        { name: "calories", labelText: { zh: "每日热量", en: "Daily calories" } },
        { name: "style", labelText: { zh: "碳水占比", en: "Carb split" }, type: "select", options: [{ value: "0.35", label: { zh: "35%", en: "35%" } }, { value: "0.45", label: { zh: "45%", en: "45%" } }, { value: "0.55", label: { zh: "55%", en: "55%" } }] }
      ],
      compute(values, lang) {
        const grams = (Number(values.calories) * Number(values.style)) / 4;
        return {
          summary: zh(lang, `碳水目标：${Math.round(grams)} g/天`, `Carb target: ${Math.round(grams)} g/day`),
          detail: zh(lang, "这是按总热量占比换算出来的碳水摄入参考值。", "This converts a percentage of total calories into a daily carbohydrate target."),
          guidance: zh(lang, "<p>训练量较高的人通常更适合保留一定碳水。真正关键的是找到一个你能稳定执行、又不影响训练和精神状态的比例。</p>", "<p>Higher training loads usually benefit from keeping enough carbohydrate in place. The best split is one you can follow while feeling and performing well.</p>")
        };
      }
    },
    hydrationcheck: {
      title: "Hydration Level Checker",
      defaultHint: "Compare your current water intake with a simple daily target.",
      units: false,
      fields: [
        { name: "targetWater", labelText: { zh: "目标饮水量 (L)", en: "Target water (L)" } },
        { name: "actualWater", labelText: { zh: "今天已喝水量 (L)", en: "Water consumed today (L)" } }
      ],
      compute(values, lang) {
        const percent = (Number(values.actualWater) / Number(values.targetWater)) * 100;
        return {
          summary: zh(lang, `完成度：${Math.round(percent)}%`, `Hydration progress: ${Math.round(percent)}%`),
          detail: zh(lang, `今天已完成约 ${Math.round(percent)}% 的饮水目标。`, `You have reached about ${Math.round(percent)}% of your water target today.`),
          guidance: zh(lang, "<p>饮水更适合均匀分布在一天里，而不是晚上一次性补很多。如果白天总忘记喝水，可以把饮水和固定动作绑定，比如每次起身、每餐前或每次训练后。</p>", "<p>Hydration works better when spread across the day rather than catching up all at once. Pairing water with routines such as meals or breaks often helps.</p>")
        };
      }
    },
    mealcalsplit: {
      title: "Meal Calorie Split Calculator",
      defaultHint: "Split daily calories into a simple meal pattern.",
      units: false,
      fields: [
        { name: "calories", labelText: { zh: "每日总热量", en: "Daily calories" } },
        { name: "meals", labelText: { zh: "每天吃几餐", en: "Meals per day" }, type: "select", options: [{ value: "3", label: { zh: "3 餐", en: "3 meals" } }, { value: "4", label: { zh: "4 餐", en: "4 meals" } }, { value: "5", label: { zh: "5 餐", en: "5 meals" } }] }
      ],
      compute(values, lang) {
        const perMeal = Number(values.calories) / Number(values.meals);
        return {
          summary: zh(lang, `每餐约：${Math.round(perMeal)} 千卡`, `Per-meal target: ${Math.round(perMeal)} kcal`),
          detail: zh(lang, `按每天 ${values.meals} 餐平均分配。`, `Split evenly across ${values.meals} meals per day.`),
          guidance: zh(lang, "<p>平均分配只是起点。如果你喜欢早餐吃少一点、晚餐吃多一点，也完全可以按个人习惯微调。</p>", "<p>An even split is just a starting point. You can still bias calories toward meals that fit your appetite and routine better.</p>")
        };
      }
    },
    portionsize: {
      title: "Portion Size Calculator",
      defaultHint: "Estimate a practical portion target for one meal.",
      units: false,
      fields: [
        { name: "mealCalories", labelText: { zh: "单餐目标热量", en: "Target meal calories" } },
        { name: "plateStyle", labelText: { zh: "餐盘风格", en: "Plate style" }, type: "select", options: [{ value: "balanced", label: { zh: "均衡餐盘", en: "Balanced plate" } }, { value: "highprotein", label: { zh: "高蛋白", en: "High protein" } }] }
      ],
      compute(values, lang) {
        const mealCalories = Number(values.mealCalories);
        const protein = values.plateStyle === "highprotein" ? mealCalories * 0.35 / 4 : mealCalories * 0.25 / 4;
        return {
          summary: zh(lang, `建议蛋白质约：${Math.round(protein)} g/餐`, `Suggested protein per meal: ${Math.round(protein)} g`),
          detail: zh(lang, "这是把单餐热量转成一个更容易执行的分量参考。", "This turns meal calories into a simpler serving target."),
          guidance: zh(lang, "<p>分量控制更适合用来建立“每餐大概要吃多少”的直觉，而不是每一口都精确计算。长期来看，盘子结构和吃饭节奏比某一次分量更重要。</p>", "<p>Portion planning is most useful for building better meal intuition rather than precision on every bite. Long-term meal structure matters more than one perfect plate.</p>")
        };
      }
    },
    cheatmeal: {
      title: "Cheat Meal Planner",
      defaultHint: "Estimate how to fit a higher-calorie meal into the week.",
      units: false,
      fields: [
        { name: "weeklyCalories", labelText: { zh: "每周总热量目标", en: "Weekly calorie target" } },
        { name: "cheatMeal", labelText: { zh: "高热量餐预计热量", en: "Cheat meal calories" } }
      ],
      compute(values, lang) {
        const spare = Number(values.weeklyCalories) - Number(values.cheatMeal);
        return {
          summary: zh(lang, `其余时间可分配：${Math.round(spare)} 千卡/周`, `Remaining weekly calories: ${Math.round(spare)} kcal`),
          detail: zh(lang, "这个结果只是帮助你把一顿高热量餐放进整周安排里。", "This helps you fit one higher-calorie meal into a weekly plan."),
          guidance: zh(lang, "<p>更实用的思路不是“作弊”，而是提前预留空间。这样更不容易出现前后极端节食和暴食循环。</p>", "<p>It is usually better to plan room for a higher-calorie meal than to frame it as cheating and then overcorrect later.</p>")
        };
      }
    },
    weeklydiet: {
      title: "Weekly Diet Planner",
      defaultHint: "Turn a daily calorie target into a simple weekly nutrition plan.",
      units: false,
      fields: [
        { name: "dailyCalories", labelText: { zh: "每日热量目标", en: "Daily calorie target" } },
        { name: "goalDays", labelText: { zh: "执行天数", en: "Planned days" } }
      ],
      compute(values, lang) {
        const weekly = Number(values.dailyCalories) * Number(values.goalDays);
        return {
          summary: zh(lang, `本周计划总热量：${Math.round(weekly)} 千卡`, `Weekly calorie plan: ${Math.round(weekly)} kcal`),
          detail: zh(lang, `按每天 ${values.dailyCalories} 千卡、共 ${values.goalDays} 天计算。`, `Based on ${values.dailyCalories} kcal for ${values.goalDays} days.`),
          guidance: zh(lang, "<p>周计划的价值在于让你看到整体节奏，而不是被某一顿饭影响心态。只要一周大方向稳定，偶尔一天偏高或偏低都不必过度焦虑。</p>", "<p>Weekly planning helps you think in longer trends instead of reacting to one meal. If the week is broadly on track, single-day swings matter less.</p>")
        };
      }
    },
    eatingscore: {
      title: "Healthy Eating Score Tool",
      defaultHint: "Score a few basic eating habits and get a simple snapshot.",
      units: false,
      fields: [
        { name: "vegetables", labelText: { zh: "每天有蔬菜的餐次数", en: "Meals with vegetables per day" } },
        { name: "proteinMeals", labelText: { zh: "每天有蛋白质的餐次数", en: "Meals with protein per day" } },
        { name: "sugaryDrinks", labelText: { zh: "每天含糖饮料杯数", en: "Sugary drinks per day" } }
      ],
      compute(values, lang) {
        let score = 100;
        if (Number(values.vegetables) < 2) score -= 25;
        if (Number(values.proteinMeals) < 2) score -= 25;
        score -= Math.min(50, Number(values.sugaryDrinks) * 15);
        return {
          summary: zh(lang, `饮食得分：${Math.max(0, score)}/100`, `Healthy eating score: ${Math.max(0, score)}/100`),
          detail: zh(lang, "这是一个轻量饮食习惯自查，不代表医学评估。", "This is a light eating-habit self-check, not a medical assessment."),
          guidance: zh(lang, "<p>想把饮食做得更稳，不一定要一下子追求完美。先从每餐有蛋白质、每天有蔬菜、少喝含糖饮料这几件事开始，通常就已经很有帮助。</p>", "<p>You do not need perfect eating to make progress. Starting with protein at meals, vegetables most days, and fewer sugary drinks often goes a long way.</p>")
        };
      }
    },
    nutritiontracker: {
      title: "Daily Nutrition Tracker",
      defaultHint: "Compare a few core intake numbers with your daily targets.",
      units: false,
      fields: [
        { name: "targetCalories", labelText: { zh: "目标热量", en: "Target calories" } },
        { name: "actualCalories", labelText: { zh: "实际热量", en: "Actual calories" } },
        { name: "targetProtein", labelText: { zh: "目标蛋白质 (g)", en: "Target protein (g)" } },
        { name: "actualProtein", labelText: { zh: "实际蛋白质 (g)", en: "Actual protein (g)" } }
      ],
      compute(values, lang) {
        const calDiff = Number(values.actualCalories) - Number(values.targetCalories);
        const proteinDiff = Number(values.actualProtein) - Number(values.targetProtein);
        return {
          summary: zh(lang, `热量差：${Math.round(calDiff)} ｜ 蛋白质差：${Math.round(proteinDiff)}g`, `Calories diff: ${Math.round(calDiff)} | Protein diff: ${Math.round(proteinDiff)}g`),
          detail: zh(lang, "这个轻量记录工具适合帮助你快速回顾当天有没有偏差太大。", "This light tracker is meant for quick daily review rather than detailed logging."),
          guidance: zh(lang, "<p>记录工具真正的价值在于帮助你发现模式，而不是让你对某一天过分苛刻。连续几天的趋势，通常比单日结果更重要。</p>", "<p>The value of tracking is spotting patterns, not overreacting to one day. Multi-day trends usually matter more than single entries.</p>")
        };
      }
    },
    sleepconsistency: {
      title: "Sleep Consistency Tracker",
      defaultHint: "Check how far your bedtime and wake time vary across days.",
      units: false,
      fields: [
        { name: "earliestBed", labelText: { zh: "最早入睡时间", en: "Earliest bedtime" }, type: "time" },
        { name: "latestBed", labelText: { zh: "最晚入睡时间", en: "Latest bedtime" }, type: "time" }
      ],
      compute(values, lang) {
        const toMin = (value) => { const [h, m] = value.split(":").map(Number); return h * 60 + m; };
        let diff = Math.abs(toMin(values.latestBed) - toMin(values.earliestBed));
        if (diff > 720) diff = 1440 - diff;
        return {
          summary: zh(lang, `作息波动约：${formatMinutes(diff)}`, `Sleep schedule variation: ${formatMinutes(diff)}`),
          detail: zh(lang, "波动越小，通常越有利于形成更稳定的睡眠节奏。", "Smaller variation usually supports a steadier sleep rhythm."),
          guidance: zh(lang, "<p>如果你的睡眠时间每天差很多，先别急着追求完美。把起床时间拉近，通常比先改睡觉时间更容易见效。</p>", "<p>If your sleep timing varies a lot, narrowing wake-up time first is often more effective than obsessing over bedtime.</p>")
        };
      }
    },
    jetlag: {
      title: "Jet Lag Recovery Calculator",
      defaultHint: "Estimate a rough adjustment window after a time-zone shift.",
      units: false,
      fields: [
        { name: "timeDifference", labelText: { zh: "时差小时数", en: "Time-zone difference (hours)" } }
      ],
      compute(values, lang) {
        const days = Math.max(1, Math.ceil(Number(values.timeDifference) / 1.5));
        return {
          summary: zh(lang, `预计调整时间：${days} 天`, `Estimated adjustment time: ${days} days`),
          detail: zh(lang, "这是一个粗略估算，实际恢复还会受到飞行方向、光照和作息影响。", "This is a rough estimate. Direction of travel, light exposure, and sleep habits also matter."),
          guidance: zh(lang, "<p>时差恢复通常不只是“多睡一点”就够了。到达后尽快接近当地光照和作息，会更有帮助。</p>", "<p>Jet lag recovery is not only about sleeping longer. Aligning with local light and local routines usually helps more.</p>")
        };
      }
    },
    cyclingcal: {
      title: "Cycling Calories Calculator",
      defaultHint: "Estimate calories burned during cycling.",
      fields: [
        { name: "weight", metricLabel: "weightKg", imperialLabel: "weightLb" },
        { name: "minutes", metricLabel: "minutes", imperialLabel: "minutes" },
        { name: "intensity", labelText: { zh: "骑行强度", en: "Cycling intensity" }, type: "select", options: [{ value: "5.5", label: { zh: "轻松骑", en: "Easy ride" } }, { value: "7.0", label: { zh: "中等强度", en: "Moderate ride" } }, { value: "9.0", label: { zh: "高强度", en: "Hard ride" } }] }
      ],
      compute(values, lang) {
        const weightKg = kgFromInput(values.units, values.weight, values.weight);
        const hours = Number(values.minutes) / 60;
        const calories = Number(values.intensity) * weightKg * hours;
        return {
          summary: zh(lang, `骑行消耗约：${Math.round(calories)} 千卡`, `Estimated cycling calories: ${Math.round(calories)} kcal`),
          detail: zh(lang, "结果会受到强度、风阻、地形和骑行效率影响。", "Actual burn also depends on terrain, wind, and riding efficiency."),
          guidance: zh(lang, "<p>骑行和步行一样，最有价值的地方在于容易形成规律。对多数人来说，稳定做比偶尔拼一次更有用。</p>", "<p>Like walking, cycling is powerful because it is repeatable. Consistent sessions usually beat occasional all-out efforts.</p>")
        };
      }
    },
    workoutvolume: {
      title: "Workout Volume Calculator",
      defaultHint: "Estimate basic training volume from sets, reps, and load.",
      units: false,
      fields: [
        { name: "sets", labelText: { zh: "组数", en: "Sets" } },
        { name: "reps", labelText: { zh: "每组次数", en: "Reps per set" } },
        { name: "weight", labelText: { zh: "重量", en: "Weight used" } }
      ],
      compute(values, lang) {
        const volume = Number(values.sets) * Number(values.reps) * Number(values.weight);
        return {
          summary: zh(lang, `训练总量：${Math.round(volume)}`, `Workout volume: ${Math.round(volume)}`),
          detail: zh(lang, "训练总量适合用来对比不同训练日或不同周期的大方向。", "Volume is useful for comparing the broad workload between sessions or blocks."),
          guidance: zh(lang, "<p>训练总量高不一定就更好。真正重要的是总量、强度和恢复之间是否平衡。</p>", "<p>More volume is not always better. The key is balancing workload, intensity, and recovery.</p>")
        };
      }
    },
    screentime: {
      title: "Screen Time Health Risk Calculator",
      defaultHint: "Check whether daily screen time may be crowding out healthier habits.",
      units: false,
      fields: [
        { name: "hours", labelText: { zh: "每天屏幕时间 (小时)", en: "Daily screen time (hours)" } }
      ],
      compute(values, lang) {
        const hours = Number(values.hours);
        const level = hours <= 4 ? zh(lang, "相对较低", "relatively low") : hours <= 7 ? zh(lang, "中等偏高", "moderately high") : zh(lang, "偏高", "high");
        return {
          summary: zh(lang, `风险提示：${level}`, `Screen-time note: ${level}`),
          detail: zh(lang, "这个工具主要提醒你屏幕时间是否可能挤占了睡眠、活动和专注。", "This tool highlights whether screen time may be crowding out sleep, movement, and focus."),
          guidance: zh(lang, "<p>如果时间偏高，不一定要立刻大幅减少。先从睡前 1 小时少看屏幕、每坐 1 小时起身活动一次开始，通常更容易坚持。</p>", "<p>If time is high, start with smaller changes like reducing evening screen exposure and taking regular movement breaks.</p>")
        };
      }
    },
    sittingrisk: {
      title: "Sitting Time Risk Calculator",
      defaultHint: "Check whether your daily sitting time may be too high.",
      units: false,
      fields: [
        { name: "hours", labelText: { zh: "每天久坐时间 (小时)", en: "Daily sitting time (hours)" } }
      ],
      compute(values, lang) {
        const hours = Number(values.hours);
        const level = hours < 6 ? zh(lang, "较低", "lower") : hours < 9 ? zh(lang, "偏高", "moderately high") : zh(lang, "较高", "higher");
        return {
          summary: zh(lang, `久坐风险提示：${level}`, `Sitting-time note: ${level}`),
          detail: zh(lang, "久坐本身并不等于一定不健康，但长时间不动确实会削弱日常活动量。", "Sitting does not automatically mean poor health, but long unbroken sitting can reduce overall activity."),
          guidance: zh(lang, "<p>比起焦虑“坐了多久”，更值得做的是把中断久坐变成习惯。每小时站起来活动几分钟，通常就已经很有价值。</p>", "<p>Breaking up long sitting periods is often more practical than worrying about the total number alone. Short movement breaks add up.</p>")
        };
      }
    },
    stresscheck: {
      title: "Stress Level Self-Check",
      defaultHint: "Score a few stress signals and get a light daily check-in.",
      units: false,
      fields: [
        { name: "sleepQuality", labelText: { zh: "最近睡眠质量 (1-5)", en: "Recent sleep quality (1-5)" } },
        { name: "irritability", labelText: { zh: "最近烦躁程度 (1-5)", en: "Recent irritability (1-5)" } },
        { name: "focus", labelText: { zh: "最近专注状态 (1-5)", en: "Recent focus (1-5)" } }
      ],
      compute(values, lang) {
        const score = (6 - Number(values.sleepQuality)) + Number(values.irritability) + (6 - Number(values.focus));
        return {
          summary: zh(lang, `压力自查分：${score}/15`, `Stress self-check score: ${score}/15`),
          detail: zh(lang, "这是一个轻量状态自查，不是心理诊断工具。", "This is a light self-check, not a mental-health diagnosis tool."),
          guidance: zh(lang, "<p>如果分数偏高，建议先从睡眠、走路、减少晚间刺激和给自己留一点恢复空白开始。</p>", "<p>If the score is high, start with sleep, movement, lower evening stimulation, and small recovery breaks.</p>")
        };
      }
    },
    burnout: {
      title: "Burnout Self-Assessment",
      defaultHint: "Check a few fatigue and motivation signals.",
      units: false,
      fields: [
        { name: "fatigue", labelText: { zh: "持续疲劳感 (1-5)", en: "Ongoing fatigue (1-5)" } },
        { name: "motivation", labelText: { zh: "动力下降程度 (1-5)", en: "Motivation drop (1-5)" } },
        { name: "detachment", labelText: { zh: "情绪抽离感 (1-5)", en: "Detachment (1-5)" } }
      ],
      compute(values, lang) {
        const score = Number(values.fatigue) + Number(values.motivation) + Number(values.detachment);
        return {
          summary: zh(lang, `疲惫风险提示分：${score}/15`, `Burnout self-check score: ${score}/15`),
          detail: zh(lang, "这个结果只用于提醒你最近是否需要更多恢复和边界感。", "This result is only a reminder that you may need more recovery and clearer limits."),
          guidance: zh(lang, "<p>如果分数持续偏高，先减少不必要的消耗、拉开休息节奏，并认真看待持续疲惫和情绪低落带来的影响。</p>", "<p>If this stays high, reduce unnecessary load, create more recovery space, and take persistent fatigue seriously.</p>")
        };
      }
    },
    energyscore: {
      title: "Daily Energy Score Tool",
      defaultHint: "Check a few daily energy signals and get a simple snapshot.",
      units: false,
      fields: [
        { name: "sleepHours", labelText: { zh: "昨晚睡眠时长", en: "Sleep last night" } },
        { name: "morningEnergy", labelText: { zh: "晨间精力 (1-5)", en: "Morning energy (1-5)" } },
        { name: "afternoonEnergy", labelText: { zh: "下午精力 (1-5)", en: "Afternoon energy (1-5)" } }
      ],
      compute(values, lang) {
        let score = Number(values.morningEnergy) * 10 + Number(values.afternoonEnergy) * 10;
        if (Number(values.sleepHours) >= 7) score += 20;
        return {
          summary: zh(lang, `每日精力得分：${score}/100`, `Daily energy score: ${score}/100`),
          detail: zh(lang, "这是一个轻量状态分数，用来帮助你观察精力是否越来越稳定。", "This is a light daily score to help you notice whether your energy is becoming more stable."),
          guidance: zh(lang, "<p>如果得分偏低，最优先检查的是睡眠、饮食节奏、步数和压力。精力问题很多时候并不是意志力问题，而是恢复和生活结构问题。</p>", "<p>If the score is low, look first at sleep, meal rhythm, steps, and stress. Energy dips are often about recovery and daily structure, not willpower.</p>")
        };
      }
    },
    periodcalc: {
      title: "Period Calculator",
      defaultHint: "Estimate your next period and the likely cycle rhythm from your latest start date.",
      hintText: { zh: "根据最近一次月经开始日期和周期长度，估算下一次月经时间。", en: "Estimate your next period using your latest cycle start date and typical cycle length.", es: "Estima tu próximo período usando la fecha de inicio más reciente y la duración habitual del ciclo.", fr: "Estimez vos prochaines règles à partir de la dernière date de début et de la durée habituelle du cycle.", de: "Schätzen Sie die nächste Periode anhand des letzten Zyklusbeginns und der üblichen Zykluslänge.", pt: "Estime a próxima menstruação a partir da data mais recente e da duração habitual do ciclo.", ru: "Оцените дату следующих месячных по последнему началу цикла и обычной длине цикла.", hi: "पिछली माहवारी की शुरुआत और सामान्य चक्र लंबाई के आधार पर अगली माहवारी का अनुमान लगाएँ।", ja: "直近の月経開始日と周期日数から、次の月経開始時期を見積もります。", ar: "قدّري موعد الدورة التالية اعتمادًا على آخر تاريخ بدء وطول الدورة المعتاد." },
      units: false,
      fields: [
        { name: "lastPeriodDate", labelText: womenLabels.lastPeriodDate, type: "date" },
        { name: "cycleLength", labelText: womenLabels.cycleLengthDays, min: 20, step: 1 },
        { name: "periodLength", labelText: womenLabels.periodLengthDays, min: 2, step: 1, required: false }
      ],
      compute(values, lang) {
        const start = parseDateInput(values.lastPeriodDate);
        if (!start) throw new Error(labelFor(lang, { zh: "请输入有效日期。", en: "Enter a valid date." }));
        const cycleLength = Number(values.cycleLength);
        const nextPeriod = addDays(start, cycleLength);
        const fertileStart = addDays(nextPeriod, -19);
        const fertileEnd = addDays(nextPeriod, -13);
        return {
          summary: labelFor(lang, { zh: `预计下次月经：${formatDateForLang(lang, nextPeriod)}`, en: `Estimated next period: ${formatDateForLang(lang, nextPeriod)}`, es: `Próximo período estimado: ${formatDateForLang(lang, nextPeriod)}`, fr: `Prochaines règles estimées : ${formatDateForLang(lang, nextPeriod)}`, de: `Geschätzte nächste Periode: ${formatDateForLang(lang, nextPeriod)}`, pt: `Próxima menstruação estimada: ${formatDateForLang(lang, nextPeriod)}`, ru: `Предполагаемая следующая менструация: ${formatDateForLang(lang, nextPeriod)}`, hi: `अनुमानित अगली माहवारी: ${formatDateForLang(lang, nextPeriod)}`, ja: `次回の月経予想: ${formatDateForLang(lang, nextPeriod)}`, ar: `موعد الدورة التالي المتوقع: ${formatDateForLang(lang, nextPeriod)}` }),
          detail: labelFor(lang, { zh: `参考受孕窗口大致在 ${formatDateForLang(lang, fertileStart)} 到 ${formatDateForLang(lang, fertileEnd)}。`, en: `A practical fertility-window reference is about ${formatDateForLang(lang, fertileStart)} to ${formatDateForLang(lang, fertileEnd)}.`, es: `Como referencia práctica, la ventana fértil sería aproximadamente del ${formatDateForLang(lang, fertileStart)} al ${formatDateForLang(lang, fertileEnd)}.`, fr: `À titre indicatif, la fenêtre fertile se situerait autour du ${formatDateForLang(lang, fertileStart)} au ${formatDateForLang(lang, fertileEnd)}.`, de: `Als grobe Orientierung läge das fruchtbare Fenster etwa zwischen ${formatDateForLang(lang, fertileStart)} und ${formatDateForLang(lang, fertileEnd)}.`, pt: `Como referência prática, a janela fértil ficaria por volta de ${formatDateForLang(lang, fertileStart)} a ${formatDateForLang(lang, fertileEnd)}.`, ru: `Как ориентир, фертильное окно может приходиться примерно на период с ${formatDateForLang(lang, fertileStart)} по ${formatDateForLang(lang, fertileEnd)}.`, hi: `संदर्भ के लिए, फर्टिलिटी विंडो लगभग ${formatDateForLang(lang, fertileStart)} से ${formatDateForLang(lang, fertileEnd)} तक हो सकती है।`, ja: `妊娠しやすい時期の目安は ${formatDateForLang(lang, fertileStart)} から ${formatDateForLang(lang, fertileEnd)} ごろです。`, ar: `كمرجع عملي، قد تكون نافذة الخصوبة تقريبًا من ${formatDateForLang(lang, fertileStart)} إلى ${formatDateForLang(lang, fertileEnd)}.` }),
          guidance: `<p>${labelFor(lang, { zh: "这个结果更适合做日程安排和提前准备，不适合用来判断是否存在疾病或受孕结果。", en: "Use this as a planning reference for daily life and preparation, not to judge diagnosis or confirm conception.", es: "Úsalo como referencia para planificar y prepararte, no para diagnosticar ni confirmar embarazo.", fr: "Utilisez-le comme repère d'organisation, pas pour poser un diagnostic ni confirmer une grossesse.", de: "Nutzen Sie dies als Planungsreferenz, nicht zur Diagnose oder Bestätigung einer Schwangerschaft.", pt: "Use como referência de planejamento, não para diagnóstico nem confirmação de gravidez.", ru: "Используйте это как ориентир для планирования, а не для диагностики или подтверждения беременности.", hi: "इसे योजना और तैयारी के संदर्भ के रूप में उपयोग करें, निदान या गर्भधारण की पुष्टि के लिए नहीं।", ja: "予定調整や準備の目安として使い、診断や妊娠判定には使わないでください。", ar: "استخدميه كمرجع للتخطيط والاستعداد، وليس للتشخيص أو تأكيد الحمل." })}</p>`
        };
      }
    },
    cyclelength: {
      title: "Cycle Length Calculator",
      defaultHint: "Average your recent cycle lengths for a steadier cycle estimate.",
      hintText: { zh: "把最近几个周期合在一起，算出一个更稳的平均周期长度。", en: "Average several recent cycles to get a steadier cycle-length reference.", es: "Promedia varios ciclos recientes para obtener una referencia más estable.", fr: "Faites la moyenne de plusieurs cycles récents pour obtenir un repère plus stable.", de: "Mitteln Sie mehrere letzte Zyklen für eine stabilere Referenz.", pt: "Faça a média de ciclos recentes para ter uma referência mais estável.", ru: "Возьмите среднее нескольких последних циклов, чтобы получить более устойчивый ориентир.", hi: "हाल के कई चक्रों का औसत लेकर अधिक स्थिर चक्र संदर्भ पाएँ।", ja: "複数回の周期日数を平均して、より安定した目安を確認します。", ar: "احسبي متوسط عدة دورات حديثة للحصول على مرجع أكثر ثباتًا." },
      units: false,
      fields: [
        { name: "cycleOne", labelText: womenLabels.cycleOne, min: 20, step: 1 },
        { name: "cycleTwo", labelText: womenLabels.cycleTwo, min: 20, step: 1 },
        { name: "cycleThree", labelText: womenLabels.cycleThree, min: 20, step: 1 }
      ],
      compute(values, lang) {
        const cycles = [Number(values.cycleOne), Number(values.cycleTwo), Number(values.cycleThree)];
        const avg = cycles.reduce((sum, item) => sum + item, 0) / cycles.length;
        const span = Math.max(...cycles) - Math.min(...cycles);
        return {
          summary: labelFor(lang, { zh: `平均周期长度：${round(avg, 1)} 天`, en: `Average cycle length: ${round(avg, 1)} days`, es: `Duración media del ciclo: ${round(avg, 1)} días`, fr: `Durée moyenne du cycle : ${round(avg, 1)} jours`, de: `Durchschnittliche Zykluslänge: ${round(avg, 1)} Tage`, pt: `Duração média do ciclo: ${round(avg, 1)} dias`, ru: `Средняя длина цикла: ${round(avg, 1)} дней`, hi: `औसत चक्र लंबाई: ${round(avg, 1)} दिन`, ja: `平均周期日数: ${round(avg, 1)} 日`, ar: `متوسط طول الدورة: ${round(avg, 1)} يومًا` }),
          detail: labelFor(lang, { zh: `最近几次周期波动约 ${span} 天。`, en: `Recent cycle variation is about ${span} days.`, es: `La variación reciente del ciclo es de unos ${span} días.`, fr: `La variation récente du cycle est d'environ ${span} jours.`, de: `Die jüngste Zyklusschwankung liegt bei etwa ${span} Tagen.`, pt: `A variação recente do ciclo foi de cerca de ${span} dias.`, ru: `Недавний разброс циклов составляет около ${span} дней.`, hi: `हाल के चक्रों में लगभग ${span} दिन का अंतर रहा।`, ja: `最近の周期のばらつきは約 ${span} 日です。`, ar: `تفاوت الدورات الأخيرة يبلغ نحو ${span} أيام.` }),
          guidance: `<p>${labelFor(lang, { zh: "平均值通常比只看单次周期更稳定，适合用来安排下个月的大致节奏。", en: "Averages are usually steadier than relying on a single cycle, so they work better for next-month planning.", es: "El promedio suele ser más estable que un solo ciclo, por lo que ayuda mejor a planificar el mes siguiente.", fr: "La moyenne est souvent plus stable qu'un seul cycle et aide mieux à planifier le mois suivant.", de: "Ein Durchschnitt ist meist stabiler als nur ein einzelner Zyklus und eignet sich besser zur Planung.", pt: "A média costuma ser mais estável do que um ciclo isolado e ajuda melhor no planejamento do próximo mês.", ru: "Среднее значение обычно надёжнее одного цикла и лучше подходит для планирования следующего месяца.", hi: "औसत एक ही चक्र से अधिक स्थिर होता है और अगले महीने की योजना के लिए अधिक उपयोगी रहता है।", ja: "単回の周期より平均値の方が安定しやすく、次月の予定の目安に向いています。", ar: "يكون المتوسط عادة أكثر ثباتًا من دورة واحدة، لذلك يفيد أكثر في التخطيط للشهر التالي." })}</p>`
        };
      }
    },
    cycleregularity: {
      title: "Cycle Regularity Checker",
      defaultHint: "Compare recent cycle lengths to see whether your cycle rhythm looks steady or variable.",
      hintText: { zh: "比较最近几个周期，看看整体节奏是稳定还是波动较大。", en: "Compare recent cycles to see whether the overall rhythm looks steady or more variable.", es: "Compara los ciclos recientes para ver si el ritmo es estable o más variable.", fr: "Comparez les cycles récents pour voir si le rythme semble stable ou variable.", de: "Vergleichen Sie die letzten Zyklen, um zu sehen, ob der Rhythmus eher stabil oder wechselhaft ist.", pt: "Compare os ciclos recentes para ver se o ritmo está estável ou mais variável.", ru: "Сравните последние циклы, чтобы понять, выглядит ли ритм стабильным или более изменчивым.", hi: "हाल के चक्रों की तुलना करके देखें कि लय स्थिर है या अधिक बदल रही है।", ja: "最近の周期を比べて、全体のリズムが安定しているかを確認します。", ar: "قارني بين الدورات الأخيرة لمعرفة ما إذا كان الإيقاع مستقرًا أو متغيرًا." },
      units: false,
      fields: [
        { name: "cycleOne", labelText: womenLabels.cycleOne, min: 20, step: 1 },
        { name: "cycleTwo", labelText: womenLabels.cycleTwo, min: 20, step: 1 },
        { name: "cycleThree", labelText: womenLabels.cycleThree, min: 20, step: 1 },
        { name: "cycleFour", labelText: womenLabels.cycleFour, min: 20, step: 1 }
      ],
      compute(values, lang) {
        const cycles = [Number(values.cycleOne), Number(values.cycleTwo), Number(values.cycleThree), Number(values.cycleFour)];
        const span = Math.max(...cycles) - Math.min(...cycles);
        const state = span <= 3
          ? labelFor(lang, { zh: "相对稳定", en: "relatively steady", es: "relativamente estable", fr: "relativement stable", de: "relativ stabil", pt: "relativamente estável", ru: "относительно стабилен", hi: "काफ़ी स्थिर", ja: "比較的安定", ar: "مستقرة نسبيًا" })
          : span <= 7
            ? labelFor(lang, { zh: "有一定波动", en: "somewhat variable", es: "algo variable", fr: "un peu variable", de: "leicht schwankend", pt: "um pouco variável", ru: "умеренно изменчив", hi: "कुछ उतार-चढ़ाव", ja: "やや変動あり", ar: "متغيرة إلى حد ما" })
            : labelFor(lang, { zh: "波动较大", en: "more variable", es: "más variable", fr: "plus variable", de: "deutlich wechselhaft", pt: "mais variável", ru: "довольно изменчив", hi: "काफी परिवर्तनशील", ja: "変動が大きめ", ar: "متغيرة بشكل أوضح" });
        return {
          summary: labelFor(lang, { zh: `周期稳定度：${state}`, en: `Cycle regularity: ${state}`, es: `Regularidad del ciclo: ${state}`, fr: `Régularité du cycle : ${state}`, de: `Zyklus-Regelmäßigkeit: ${state}`, pt: `Regularidade do ciclo: ${state}`, ru: `Регулярность цикла: ${state}`, hi: `चक्र नियमितता: ${state}`, ja: `周期の安定度: ${state}`, ar: `انتظام الدورة: ${state}` }),
          detail: labelFor(lang, { zh: `最近 4 次周期的跨度约为 ${span} 天。`, en: `The spread across your last 4 cycles is about ${span} days.`, es: `La diferencia entre los últimos 4 ciclos es de unos ${span} días.`, fr: `L'écart entre les 4 derniers cycles est d'environ ${span} jours.`, de: `Die Spannweite der letzten 4 Zyklen liegt bei etwa ${span} Tagen.`, pt: `A variação entre os últimos 4 ciclos é de cerca de ${span} dias.`, ru: `Разброс за последние 4 цикла составляет около ${span} дней.`, hi: `पिछले 4 चक्रों में लगभग ${span} दिन का अंतर है।`, ja: `直近4周期の差は約 ${span} 日です。`, ar: `الفارق بين آخر 4 دورات يبلغ نحو ${span} أيام.` }),
          guidance: `<p>${labelFor(lang, { zh: "偶尔波动是常见现象。更值得关注的是这种波动是否持续很久、是否越来越明显，或者是否伴随明显不适。", en: "Some variation is common. What matters more is whether it lasts for a long time, becomes more noticeable, or comes with stronger symptoms.", es: "Cierta variación es normal. Lo importante es si se mantiene durante mucho tiempo, aumenta o viene acompañada de síntomas más claros.", fr: "Une certaine variation est fréquente. L'important est surtout de voir si elle dure, s'accentue ou s'accompagne de symptômes plus marqués.", de: "Gewisse Schwankungen sind normal. Wichtiger ist, ob sie lange anhalten, stärker werden oder mit Beschwerden einhergehen.", pt: "Alguma variação é comum. O mais importante é observar se isso dura muito, aumenta ou vem com sintomas mais fortes.", ru: "Некоторая вариабельность — обычное явление. Важнее, держится ли она долго, усиливается ли и сопровождается ли выраженными симптомами.", hi: "कुछ बदलाव सामान्य होते हैं। ज़्यादा महत्वपूर्ण यह है कि क्या यह लंबे समय तक बना रहता है, बढ़ता जा रहा है या स्पष्ट लक्षणों के साथ है।", ja: "多少の変動は珍しくありません。大切なのは、それが長く続くか、強くなるか、強い不調を伴うかです。", ar: "بعض التفاوت أمر شائع. الأهم هو ما إذا كان يستمر لفترة طويلة أو يزداد وضوحًا أو يترافق مع أعراض ملحوظة." })}</p>`
        };
      }
    },
    ovulation: {
      title: "Ovulation Calculator",
      defaultHint: "Estimate the likely ovulation day from your cycle rhythm.",
      hintText: { zh: "根据周期长度，估算更可能接近排卵的日期。", en: "Estimate the date most likely to be near ovulation from your cycle rhythm.", es: "Estima la fecha más probable de ovulación a partir de la duración del ciclo.", fr: "Estimez la date la plus probable d'ovulation à partir du rythme du cycle.", de: "Schätzen Sie den wahrscheinlichen Eisprungtag anhand Ihrer Zykluslänge.", pt: "Estime a data mais provável da ovulação com base no ciclo.", ru: "Оцените наиболее вероятную дату овуляции по длине цикла.", hi: "चक्र लंबाई के आधार पर संभावित ओव्यूलेशन तारीख का अनुमान लगाएँ।", ja: "周期日数から、排卵日に近いと考えられる日を見積もります。", ar: "قدّري اليوم الأقرب لحدوث الإباضة اعتمادًا على طول الدورة." },
      units: false,
      fields: [
        { name: "lastPeriodDate", labelText: womenLabels.lastPeriodDate, type: "date" },
        { name: "cycleLength", labelText: womenLabels.cycleLengthDays, min: 20, step: 1 }
      ],
      compute(values, lang) {
        const start = parseDateInput(values.lastPeriodDate);
        if (!start) throw new Error(labelFor(lang, { zh: "请输入有效日期。", en: "Enter a valid date." }));
        const cycleLength = Number(values.cycleLength);
        const ovulationDate = addDays(start, cycleLength - 14);
        return {
          summary: labelFor(lang, { zh: `预计排卵日：${formatDateForLang(lang, ovulationDate)}`, en: `Estimated ovulation day: ${formatDateForLang(lang, ovulationDate)}`, es: `Ovulación estimada: ${formatDateForLang(lang, ovulationDate)}`, fr: `Ovulation estimée : ${formatDateForLang(lang, ovulationDate)}`, de: `Geschätzter Eisprung: ${formatDateForLang(lang, ovulationDate)}`, pt: `Ovulação estimada: ${formatDateForLang(lang, ovulationDate)}`, ru: `Предполагаемая овуляция: ${formatDateForLang(lang, ovulationDate)}`, hi: `अनुमानित ओव्यूलेशन दिन: ${formatDateForLang(lang, ovulationDate)}`, ja: `排卵日の目安: ${formatDateForLang(lang, ovulationDate)}`, ar: `يوم الإباضة المتوقع: ${formatDateForLang(lang, ovulationDate)}` }),
          detail: labelFor(lang, { zh: "常见算法会把排卵时间估在下一次月经前约 14 天左右。", en: "A common estimate places ovulation about 14 days before the next period.", es: "Una estimación habitual sitúa la ovulación unos 14 días antes del siguiente período.", fr: "Une estimation courante place l'ovulation environ 14 jours avant les prochaines règles.", de: "Eine gängige Schätzung legt den Eisprung etwa 14 Tage vor der nächsten Periode.", pt: "Uma estimativa comum coloca a ovulação cerca de 14 dias antes da próxima menstruação.", ru: "Обычно овуляцию ориентировочно ставят примерно за 14 дней до следующей менструации.", hi: "सामान्य अनुमान के अनुसार ओव्यूलेशन अगली माहवारी से लगभग 14 दिन पहले होता है।", ja: "一般的には、排卵は次の月経開始の約14日前と見積もられます。", ar: "يُقدّر توقيت الإباضة غالبًا بحوالي 14 يومًا قبل الدورة التالية." }),
          guidance: `<p>${labelFor(lang, { zh: "这个日期更适合当作时间窗口中心点。若你需要更精细判断，通常还会结合基础体温、宫颈黏液或医生建议一起看。", en: "Use this as the center point of a likely window. More precise tracking usually combines it with body temperature, cervical mucus, or professional guidance.", es: "Úsalo como punto central de una ventana probable. Para más precisión suele combinarse con temperatura basal, moco cervical o guía profesional.", fr: "Considérez-le comme le centre d'une fenêtre probable. Pour plus de précision, on le combine souvent avec la température basale, la glaire cervicale ou un avis professionnel.", de: "Verwenden Sie dies als Mittelpunkt eines wahrscheinlichen Fensters. Für mehr Genauigkeit werden oft Temperatur, Zervixschleim oder ärztlicher Rat ergänzt.", pt: "Use isto como ponto central de uma janela provável. Para mais precisão, costuma-se combinar com temperatura basal, muco cervical ou orientação profissional.", ru: "Используйте эту дату как центр вероятного окна. Для большей точности обычно смотрят также базальную температуру, цервикальную слизь или совет врача.", hi: "इसे संभावित विंडो के केंद्र बिंदु की तरह देखें। अधिक सटीकता के लिए बेसल तापमान, सर्वाइकल म्यूकस या डॉक्टर की सलाह भी देखी जाती है।", ja: "この日付は妊娠しやすい時期の中心目安として使うのが適切です。より細かく見たい場合は基礎体温や頸管粘液なども参考になります。", ar: "اعتبري هذا التاريخ نقطة وسط لنافذة محتملة. وللمتابعة الأدق غالبًا ما يُجمع معه قياس الحرارة الأساسية أو ملاحظة الإفرازات أو استشارة مختص." })}</p>`
        };
      }
    },
    fertilitywindow: {
      title: "Fertility Window Calculator",
      defaultHint: "Estimate the broader fertile window around ovulation.",
      hintText: { zh: "估算更适合作为参考的受孕窗口，而不是只看单一天。", en: "Estimate the broader fertile window instead of focusing on a single day.", es: "Estima una ventana fértil más amplia en lugar de un solo día.", fr: "Estimez une fenêtre fertile plus large plutôt qu'un seul jour.", de: "Schätzen Sie ein breiteres fruchtbares Fenster statt nur eines einzelnen Tages.", pt: "Estime uma janela fértil mais ampla em vez de olhar só um dia.", ru: "Оцените более широкое фертильное окно, а не только один день.", hi: "केवल एक दिन नहीं, बल्कि व्यापक फर्टिलिटी विंडो का अनुमान लगाएँ।", ja: "1日だけでなく、妊娠しやすい時期の幅を見積もります。", ar: "قدّري نافذة الخصوبة الأوسع بدل التركيز على يوم واحد فقط." },
      units: false,
      fields: [
        { name: "lastPeriodDate", labelText: womenLabels.lastPeriodDate, type: "date" },
        { name: "cycleLength", labelText: womenLabels.cycleLengthDays, min: 20, step: 1 }
      ],
      compute(values, lang) {
        const start = parseDateInput(values.lastPeriodDate);
        if (!start) throw new Error(labelFor(lang, { zh: "请输入有效日期。", en: "Enter a valid date." }));
        const cycleLength = Number(values.cycleLength);
        const ovulationDate = addDays(start, cycleLength - 14);
        const fertileStart = addDays(ovulationDate, -5);
        const fertileEnd = addDays(ovulationDate, 1);
        return {
          summary: labelFor(lang, { zh: `受孕窗口参考：${formatDateForLang(lang, fertileStart)} 至 ${formatDateForLang(lang, fertileEnd)}`, en: `Estimated fertile window: ${formatDateForLang(lang, fertileStart)} to ${formatDateForLang(lang, fertileEnd)}`, es: `Ventana fértil estimada: ${formatDateForLang(lang, fertileStart)} al ${formatDateForLang(lang, fertileEnd)}`, fr: `Fenêtre fertile estimée : du ${formatDateForLang(lang, fertileStart)} au ${formatDateForLang(lang, fertileEnd)}`, de: `Geschätztes fruchtbares Fenster: ${formatDateForLang(lang, fertileStart)} bis ${formatDateForLang(lang, fertileEnd)}`, pt: `Janela fértil estimada: ${formatDateForLang(lang, fertileStart)} a ${formatDateForLang(lang, fertileEnd)}`, ru: `Предполагаемое фертильное окно: с ${formatDateForLang(lang, fertileStart)} по ${formatDateForLang(lang, fertileEnd)}`, hi: `अनुमानित फर्टिलिटी विंडो: ${formatDateForLang(lang, fertileStart)} से ${formatDateForLang(lang, fertileEnd)} तक`, ja: `妊娠しやすい時期の目安: ${formatDateForLang(lang, fertileStart)} から ${formatDateForLang(lang, fertileEnd)}`, ar: `نافذة الخصوبة المتوقعة: من ${formatDateForLang(lang, fertileStart)} إلى ${formatDateForLang(lang, fertileEnd)}` }),
          detail: labelFor(lang, { zh: `窗口中点通常更接近 ${formatDateForLang(lang, ovulationDate)}。`, en: `The middle of that window is often closest to ${formatDateForLang(lang, ovulationDate)}.`, es: `El punto medio de esa ventana suele acercarse al ${formatDateForLang(lang, ovulationDate)}.`, fr: `Le centre de cette fenêtre se rapproche souvent du ${formatDateForLang(lang, ovulationDate)}.`, de: `Die Mitte dieses Fensters liegt oft nahe bei ${formatDateForLang(lang, ovulationDate)}.`, pt: `O ponto central dessa janela costuma ficar perto de ${formatDateForLang(lang, ovulationDate)}.`, ru: `Середина этого окна обычно ближе всего к ${formatDateForLang(lang, ovulationDate)}.`, hi: `इस विंडो का मध्य बिंदु अक्सर ${formatDateForLang(lang, ovulationDate)} के आसपास होता है।`, ja: `この期間の中心は ${formatDateForLang(lang, ovulationDate)} ごろと考えられます。`, ar: `غالبًا ما يكون منتصف هذه النافذة أقرب إلى ${formatDateForLang(lang, ovulationDate)}.` }),
          guidance: `<p>${labelFor(lang, { zh: "受孕窗口是概率参考，并不是固定保证。更适合用来安排记录、观察和生活节奏。", en: "A fertile window is a probability-based reference, not a guarantee. It is most useful for planning, observation, and daily timing.", es: "La ventana fértil es una referencia de probabilidad, no una garantía. Sirve mejor para planificar, observar y organizar tiempos.", fr: "La fenêtre fertile est un repère probabiliste, pas une garantie. Elle sert surtout à organiser l'observation et le planning.", de: "Das fruchtbare Fenster ist eine Wahrscheinlichkeitsangabe, keine Garantie. Es eignet sich am besten für Planung und Beobachtung.", pt: "A janela fértil é uma referência de probabilidade, não uma garantia. Ela ajuda mais no planejamento e na observação.", ru: "Фертильное окно — это вероятностный ориентир, а не гарантия. Оно полезнее всего для планирования и наблюдения.", hi: "फर्टिलिटी विंडो एक संभाव्यता-आधारित संदर्भ है, कोई गारंटी नहीं। यह योजना और अवलोकन के लिए सबसे उपयोगी है।", ja: "妊娠しやすい時期は確率の目安であって保証ではありません。記録や予定調整の参考として使うのが適切です。", ar: "نافذة الخصوبة مرجع احتمالي وليست ضمانًا. وهي أكثر فائدة للتخطيط والملاحظة وتنظيم الروتين." })}</p>`
        };
      }
    },
    duedate: {
      title: "Due Date Calculator",
      defaultHint: "Estimate the expected due date from the first day of your last period.",
      hintText: { zh: "根据最近一次月经开始日，估算预产期和当前阶段。", en: "Estimate the due date and current timing from the first day of your last period.", es: "Estima la fecha probable de parto y el momento actual a partir del inicio del último período.", fr: "Estimez la date prévue d'accouchement à partir du premier jour des dernières règles.", de: "Schätzen Sie den Geburtstermin anhand des ersten Tages der letzten Periode.", pt: "Estime a data prevista do parto a partir do primeiro dia da última menstruação.", ru: "Оцените предполагаемую дату родов по первому дню последней менструации.", hi: "पिछली माहवारी के पहले दिन से ड्यू डेट का अनुमान लगाएँ।", ja: "最終月経開始日から出産予定日を見積もります。", ar: "قدّري موعد الولادة المتوقع انطلاقًا من أول يوم في آخر دورة." },
      units: false,
      fields: [
        { name: "lastPeriodDate", labelText: womenLabels.lastPeriodDate, type: "date" }
      ],
      compute(values, lang) {
        const start = parseDateInput(values.lastPeriodDate);
        if (!start) throw new Error(labelFor(lang, { zh: "请输入有效日期。", en: "Enter a valid date." }));
        const dueDate = addDays(start, 280);
        const conceptionRef = addDays(start, 14);
        return {
          summary: labelFor(lang, { zh: `预计预产期：${formatDateForLang(lang, dueDate)}`, en: `Estimated due date: ${formatDateForLang(lang, dueDate)}`, es: `Fecha probable de parto: ${formatDateForLang(lang, dueDate)}`, fr: `Date prévue d'accouchement : ${formatDateForLang(lang, dueDate)}`, de: `Voraussichtlicher Geburtstermin: ${formatDateForLang(lang, dueDate)}`, pt: `Data prevista do parto: ${formatDateForLang(lang, dueDate)}`, ru: `Предполагаемая дата родов: ${formatDateForLang(lang, dueDate)}`, hi: `अनुमानित ड्यू डेट: ${formatDateForLang(lang, dueDate)}`, ja: `出産予定日: ${formatDateForLang(lang, dueDate)}`, ar: `موعد الولادة المتوقع: ${formatDateForLang(lang, dueDate)}` }),
          detail: labelFor(lang, { zh: `按常见算法，受孕时间常会落在 ${formatDateForLang(lang, conceptionRef)} 附近。`, en: `Using the common calculation, conception often falls around ${formatDateForLang(lang, conceptionRef)}.`, es: `Con el cálculo habitual, la concepción suele situarse cerca del ${formatDateForLang(lang, conceptionRef)}.`, fr: `Avec le calcul courant, la conception se situe souvent autour du ${formatDateForLang(lang, conceptionRef)}.`, de: `Nach der üblichen Berechnung liegt die Empfängnis oft in der Nähe des ${formatDateForLang(lang, conceptionRef)}.`, pt: `Pelo cálculo mais comum, a concepção costuma cair perto de ${formatDateForLang(lang, conceptionRef)}.`, ru: `По распространённой формуле зачатие часто приходится примерно на ${formatDateForLang(lang, conceptionRef)}.`, hi: `सामान्य गणना के अनुसार गर्भधारण अक्सर ${formatDateForLang(lang, conceptionRef)} के आसपास माना जाता है।`, ja: `一般的な計算では、受胎時期の目安は ${formatDateForLang(lang, conceptionRef)} ごろです。`, ar: `بحسب الحساب الشائع، غالبًا ما يكون وقت الحمل التقريبي حول ${formatDateForLang(lang, conceptionRef)}.` }),
          guidance: `<p>${labelFor(lang, { zh: "预产期只是时间参考。正式产检中的超声、医生评估和个人情况，通常比单一公式更重要。", en: "A due date is a timing reference only. Ultrasound findings, clinical review, and your individual situation matter more than one formula.", es: "La fecha probable de parto es solo una referencia. La ecografía, la revisión clínica y tu situación individual importan más que una sola fórmula.", fr: "La date prévue d'accouchement reste un repère. L'échographie, l'avis clinique et votre situation comptent davantage qu'une formule unique.", de: "Der Geburtstermin ist nur eine Orientierung. Ultraschall, ärztliche Einschätzung und die persönliche Situation sind wichtiger als eine einzelne Formel.", pt: "A data prevista do parto é apenas uma referência. Ultrassom, avaliação clínica e a situação individual contam mais do que uma única fórmula.", ru: "Дата родов — лишь ориентир по времени. УЗИ, врачебная оценка и индивидуальные особенности важнее любой одной формулы.", hi: "ड्यू डेट केवल समय का संदर्भ है। अल्ट्रासाउंड, चिकित्सकीय समीक्षा और आपकी व्यक्तिगत स्थिति एक ही फ़ॉर्मूले से अधिक महत्वपूर्ण हैं।", ja: "出産予定日はあくまで目安です。超音波所見や医師の判断、個別の状況の方が単一の計算式より重要です。", ar: "موعد الولادة المتوقع مجرد مرجع زمني. وتبقى نتائج السونار والتقييم الطبي والحالة الفردية أهم من أي معادلة واحدة." })}</p>`
        };
      }
    },
    pregnancyweek: {
      title: "Pregnancy Week Calculator",
      defaultHint: "Estimate the current pregnancy week using your last period date.",
      hintText: { zh: "根据最近一次月经开始日，查看当前大概处在孕几周。", en: "Estimate your current pregnancy week from the last period start date.", es: "Estima la semana de embarazo actual desde la fecha del último período.", fr: "Estimez la semaine de grossesse actuelle à partir de la date des dernières règles.", de: "Schätzen Sie die aktuelle Schwangerschaftswoche anhand des letzten Periodenbeginns.", pt: "Estime a semana atual da gravidez pela data da última menstruação.", ru: "Оцените текущую неделю беременности по дате последней менструации.", hi: "पिछली माहवारी शुरू होने की तारीख से वर्तमान गर्भावस्था सप्ताह का अनुमान लगाएँ।", ja: "最終月経開始日から、現在のおおよその妊娠週数を確認します。", ar: "قدّري أسبوع الحمل الحالي انطلاقًا من تاريخ بدء آخر دورة." },
      units: false,
      fields: [
        { name: "lastPeriodDate", labelText: womenLabels.lastPeriodDate, type: "date" }
      ],
      compute(values, lang) {
        const start = parseDateInput(values.lastPeriodDate);
        if (!start) throw new Error(labelFor(lang, { zh: "请输入有效日期。", en: "Enter a valid date." }));
        const today = new Date();
        const totalDays = Math.max(0, daysBetween(start, today));
        const weeks = Math.floor(totalDays / 7);
        const extraDays = totalDays % 7;
        const trimester = weeks < 13 ? labelFor(lang, womenChoices.trimester[0].label) : weeks < 27 ? labelFor(lang, womenChoices.trimester[1].label) : labelFor(lang, womenChoices.trimester[2].label);
        return {
          summary: labelFor(lang, { zh: `当前约为孕 ${weeks} 周 ${extraDays} 天`, en: `Current estimate: ${weeks} weeks ${extraDays} days`, es: `Estimación actual: ${weeks} semanas y ${extraDays} días`, fr: `Estimation actuelle : ${weeks} semaines et ${extraDays} jours`, de: `Aktueller Stand: ${weeks} Wochen und ${extraDays} Tage`, pt: `Estimativa atual: ${weeks} semanas e ${extraDays} dias`, ru: `Текущий срок: ${weeks} недель и ${extraDays} дней`, hi: `वर्तमान अनुमान: ${weeks} सप्ताह ${extraDays} दिन`, ja: `現在の目安: 妊娠 ${weeks} 週 ${extraDays} 日`, ar: `التقدير الحالي: ${weeks} أسبوعًا و${extraDays} يومًا` }),
          detail: labelFor(lang, { zh: `大致对应 ${trimester}。`, en: `That roughly places you in the ${trimester}.`, es: `Eso te sitúa aproximadamente en el ${trimester}.`, fr: `Cela vous place approximativement dans le ${trimester}.`, de: `Das entspricht ungefähr dem ${trimester}.`, pt: `Isso a coloca aproximadamente no ${trimester}.`, ru: `Это примерно соответствует периоду: ${trimester}.`, hi: `यह लगभग ${trimester} में आता है।`, ja: `おおよそ ${trimester} にあたります。`, ar: `وهذا يضعك تقريبًا في ${trimester}.` }),
          guidance: `<p>${labelFor(lang, { zh: "孕周结果更适合帮你理解当前阶段和准备事项。若产检结果与公式不同，应优先以医生和正式检查为准。", en: "This estimate is best for understanding your stage and planning ahead. If clinical findings differ, follow your clinician and formal prenatal checks.", es: "Esta estimación sirve para ubicar la etapa actual y planificar. Si la revisión clínica difiere, sigue la indicación profesional.", fr: "Cette estimation aide surtout à situer l'étape actuelle. Si le suivi clinique diffère, suivez l'avis professionnel.", de: "Diese Schätzung hilft vor allem zur Einordnung der aktuellen Phase. Wenn klinische Befunde abweichen, folgen Sie der ärztlichen Einschätzung.", pt: "Esta estimativa ajuda a entender a fase atual e planejar. Se os exames mostrarem algo diferente, siga a orientação profissional.", ru: "Эта оценка полезна для понимания текущего этапа и планирования. Если обследования показывают иное, ориентируйтесь на врача.", hi: "यह अनुमान वर्तमान चरण समझने और योजना बनाने में मदद करता है। यदि चिकित्सकीय जाँच अलग बताए, तो डॉक्टर की सलाह को प्राथमिकता दें।", ja: "この結果は現在の段階を把握する目安です。健診結果と異なる場合は、医師や正式な検査結果を優先してください。", ar: "هذا التقدير يفيد في فهم المرحلة الحالية والتخطيط لها. وإذا اختلف عن نتائج المتابعة الطبية فاتبعي التقييم الطبي الرسمي." })}</p>`
        };
      }
    },
    conceptiondate: {
      title: "Conception Date Estimator",
      defaultHint: "Estimate a likely conception date from the due date.",
      hintText: { zh: "根据预产期，反推一个大致的受孕时间参考。", en: "Estimate a likely conception date by counting back from the due date.", es: "Estima una posible fecha de concepción a partir de la fecha probable de parto.", fr: "Estimez une date probable de conception à partir de la date prévue d'accouchement.", de: "Schätzen Sie ein wahrscheinliches Empfängnisdatum vom Geburtstermin aus zurück.", pt: "Estime uma data provável de concepção a partir da data prevista do parto.", ru: "Оцените вероятную дату зачатия, отсчитав назад от предполагаемой даты родов.", hi: "ड्यू डेट से पीछे गिनकर संभावित गर्भधारण तारीख का अनुमान लगाएँ।", ja: "出産予定日から逆算して、受胎時期の目安を確認します。", ar: "قدّري تاريخ الحمل المحتمل بالرجوع من موعد الولادة المتوقع." },
      units: false,
      fields: [
        { name: "dueDate", labelText: womenLabels.dueDate, type: "date" }
      ],
      compute(values, lang) {
        const dueDate = parseDateInput(values.dueDate);
        if (!dueDate) throw new Error(labelFor(lang, { zh: "请输入有效日期。", en: "Enter a valid date." }));
        const conceptionDate = addDays(dueDate, -266);
        return {
          summary: labelFor(lang, { zh: `受孕时间参考：${formatDateForLang(lang, conceptionDate)}`, en: `Estimated conception date: ${formatDateForLang(lang, conceptionDate)}`, es: `Fecha estimada de concepción: ${formatDateForLang(lang, conceptionDate)}`, fr: `Date estimée de conception : ${formatDateForLang(lang, conceptionDate)}`, de: `Geschätztes Empfängnisdatum: ${formatDateForLang(lang, conceptionDate)}`, pt: `Data estimada da concepção: ${formatDateForLang(lang, conceptionDate)}`, ru: `Предполагаемая дата зачатия: ${formatDateForLang(lang, conceptionDate)}`, hi: `अनुमानित गर्भधारण तिथि: ${formatDateForLang(lang, conceptionDate)}`, ja: `受胎時期の目安: ${formatDateForLang(lang, conceptionDate)}`, ar: `تاريخ الحمل التقديري: ${formatDateForLang(lang, conceptionDate)}` }),
          detail: labelFor(lang, { zh: "常见估算会用预产期向前推 266 天左右。", en: "A common estimate counts back about 266 days from the due date.", es: "Una estimación habitual retrocede unos 266 días desde la fecha probable de parto.", fr: "Une estimation courante remonte d'environ 266 jours à partir de la date prévue d'accouchement.", de: "Eine gängige Schätzung rechnet etwa 266 Tage vom Geburtstermin zurück.", pt: "Uma estimativa comum recua cerca de 266 dias a partir da data prevista do parto.", ru: "Обычно для оценки от предполагаемой даты родов отсчитывают назад около 266 дней.", hi: "सामान्य अनुमान ड्यू डेट से लगभग 266 दिन पीछे जाता है।", ja: "一般的な目安では、出産予定日から約266日前をさかのぼります。", ar: "يعتمد التقدير الشائع على الرجوع حوالي 266 يومًا من موعد الولادة المتوقع." }),
          guidance: `<p>${labelFor(lang, { zh: "这个结果适合作为时间参考，不适合作为法律、医学或亲子关系判断依据。", en: "Treat this as a timing reference only, not as evidence for legal, medical, or parentage decisions.", es: "Tómalo solo como referencia temporal, no como prueba para decisiones legales, médicas o de filiación.", fr: "Considérez-le uniquement comme un repère temporel, pas comme preuve pour des décisions juridiques, médicales ou de filiation.", de: "Nutzen Sie das nur als zeitliche Orientierung, nicht als Beleg für rechtliche, medizinische oder Abstammungsfragen.", pt: "Use apenas como referência de tempo, não como prova para decisões legais, médicas ou de paternidade.", ru: "Рассматривайте это только как временной ориентир, а не как доказательство для юридических, медицинских или родственных решений.", hi: "इसे केवल समय संदर्भ की तरह देखें, कानूनी, चिकित्सकीय या पितृत्व संबंधी निर्णय का प्रमाण नहीं।", ja: "この結果は時期の目安にとどめ、法的・医学的・親子関係の判断材料にはしないでください。", ar: "استخدمي النتيجة كمرجع زمني فقط، وليس كدليل لقرارات قانونية أو طبية أو تتعلق بإثبات النسب." })}</p>`
        };
      }
    },
    pregnancyweight: {
      title: "Pregnancy Weight Gain Calculator",
      defaultHint: "Use pre-pregnancy BMI and trimester to see a broad healthy weight-gain reference.",
      hintText: { zh: "结合孕前 BMI 和当前阶段，查看体重增长的大致参考范围。", en: "Use pre-pregnancy BMI and current stage to view a broad weight-gain reference.", es: "Usa el IMC previo al embarazo y la etapa actual para ver una referencia general de ganancia de peso.", fr: "Utilisez l'IMC avant grossesse et le stade actuel pour voir une fourchette générale de prise de poids.", de: "Nutzen Sie den BMI vor der Schwangerschaft und die aktuelle Phase für eine grobe Orientierung zur Gewichtszunahme.", pt: "Use o IMC antes da gravidez e a fase atual para ver uma faixa geral de ganho de peso.", ru: "Используйте ИМТ до беременности и текущий этап, чтобы увидеть общий ориентир по набору веса.", hi: "गर्भावस्था से पहले के BMI और वर्तमान चरण के आधार पर वजन बढ़ने की सामान्य सीमा देखें।", ja: "妊娠前 BMI と現在の段階から、体重増加の大まかな目安を確認します。", ar: "استخدمي مؤشر كتلة الجسم قبل الحمل والمرحلة الحالية لرؤية نطاق عام لزيادة الوزن." },
      units: false,
      fields: [
        { name: "height", labelText: womenLabels.heightOnly, min: 120, step: 0.1 },
        { name: "weight", labelText: womenLabels.weightOnly, min: 30, step: 0.1 },
        { name: "trimester", labelText: womenLabels.trimester, type: "select", options: womenChoices.trimester }
      ],
      compute(values, lang) {
        const heightM = Number(values.height) / 100;
        const weight = Number(values.weight);
        const bmi = weight / (heightM * heightM);
        let totalRange;
        if (bmi < 18.5) totalRange = [12.5, 18];
        else if (bmi < 25) totalRange = [11.5, 16];
        else if (bmi < 30) totalRange = [7, 11.5];
        else totalRange = [5, 9];
        const stageRange = values.trimester === "first"
          ? [0.5, 2]
          : values.trimester === "second"
            ? [round(totalRange[0] * 0.45, 1), round(totalRange[1] * 0.55, 1)]
            : [round(totalRange[0] * 0.7, 1), round(totalRange[1] * 0.85, 1)];
        return {
          summary: labelFor(lang, { zh: `参考增长范围：${stageRange[0]} 到 ${stageRange[1]} kg`, en: `Reference gain range: ${stageRange[0]} to ${stageRange[1]} kg`, es: `Rango de referencia: ${stageRange[0]} a ${stageRange[1]} kg`, fr: `Fourchette de référence : ${stageRange[0]} à ${stageRange[1]} kg`, de: `Referenzbereich: ${stageRange[0]} bis ${stageRange[1]} kg`, pt: `Faixa de referência: ${stageRange[0]} a ${stageRange[1]} kg`, ru: `Ориентир набора веса: ${stageRange[0]}–${stageRange[1]} кг`, hi: `संदर्भ वृद्धि सीमा: ${stageRange[0]} से ${stageRange[1]} किग्रा`, ja: `増加の目安: ${stageRange[0]} 〜 ${stageRange[1]} kg`, ar: `نطاق الزيادة المرجعي: ${stageRange[0]} إلى ${stageRange[1]} كجم` }),
          detail: labelFor(lang, { zh: `孕前 BMI 约为 ${round(bmi, 1)}，整段孕期常见参考范围约 ${totalRange[0]} 到 ${totalRange[1]} kg。`, en: `Pre-pregnancy BMI is about ${round(bmi, 1)}, with a common total-pregnancy reference of roughly ${totalRange[0]} to ${totalRange[1]} kg.`, es: `El IMC previo al embarazo es de aproximadamente ${round(bmi, 1)}, con una referencia total de ${totalRange[0]} a ${totalRange[1]} kg.`, fr: `L'IMC avant grossesse est d'environ ${round(bmi, 1)}, avec une référence totale d'environ ${totalRange[0]} à ${totalRange[1]} kg.`, de: `Der BMI vor der Schwangerschaft liegt bei etwa ${round(bmi, 1)}; der grobe Gesamtbereich liegt bei ${totalRange[0]} bis ${totalRange[1]} kg.`, pt: `O IMC antes da gravidez é cerca de ${round(bmi, 1)}, com referência total de ${totalRange[0]} a ${totalRange[1]} kg.`, ru: `ИМТ до беременности составляет около ${round(bmi, 1)}, общий ориентир набора — примерно ${totalRange[0]}–${totalRange[1]} кг.`, hi: `गर्भावस्था से पहले का BMI लगभग ${round(bmi, 1)} है, और कुल गर्भावस्था के लिए सामान्य संदर्भ लगभग ${totalRange[0]} से ${totalRange[1]} किग्रा है।`, ja: `妊娠前 BMI は約 ${round(bmi, 1)} で、妊娠全期間の一般的な目安は ${totalRange[0]} 〜 ${totalRange[1]} kg です。`, ar: `مؤشر كتلة الجسم قبل الحمل يقارب ${round(bmi, 1)}، والنطاق الكلي الشائع للزيادة خلال الحمل نحو ${totalRange[0]} إلى ${totalRange[1]} كجم.` }),
          guidance: `<p>${labelFor(lang, { zh: "这个范围适合用来和产检中的体重变化做对照，不适合单独判断是否健康。真正的建议仍要结合孕周、检查结果和医生意见。", en: "Use this range as a comparison point alongside prenatal checkups, not as a standalone health judgment. Real guidance still depends on stage, test results, and your clinician.", es: "Usa este rango como referencia junto con los controles prenatales, no como juicio aislado de salud. La recomendación real depende de la etapa, los resultados y el profesional.", fr: "Utilisez cette fourchette comme repère avec le suivi prénatal, pas comme jugement isolé. L'avis réel dépend du stade, des examens et du professionnel.", de: "Nutzen Sie diesen Bereich als Vergleichspunkt zusammen mit Vorsorgeuntersuchungen, nicht als alleinige Gesundheitsbewertung. Entscheidend sind Phase, Befunde und ärztlicher Rat.", pt: "Use esta faixa como comparação junto ao pré-natal, não como julgamento isolado de saúde. A orientação real depende da fase, dos exames e da equipe clínica.", ru: "Используйте этот диапазон как ориентир вместе с наблюдением по беременности, а не как самостоятельную оценку здоровья. Важны срок, обследования и мнение врача.", hi: "इस सीमा को प्रसवपूर्व जांचों के साथ तुलना के रूप में देखें, अकेले स्वास्थ्य निर्णय की तरह नहीं। वास्तविक सलाह चरण, जांच और डॉक्टर की राय पर निर्भर करती है।", ja: "この範囲は健診時の体重推移と見比べるための目安です。健康かどうかを単独で判断するものではなく、妊娠週数や検査結果、医師の説明が重要です。", ar: "استخدمي هذا النطاق كنقطة مقارنة مع متابعة الحمل، وليس كحكم صحي مستقل. فالتوصية الفعلية تعتمد على المرحلة ونتائج الفحوصات ورأي الطبيب." })}</p>`
        };
      }
    },
    pmschecker: {
      title: "PMS Symptom Tracker",
      defaultHint: "Record symptom load and daily impact to get a lighter month-to-month reference.",
      hintText: { zh: "记录症状数量和对生活的影响，形成更清楚的月度参考。", en: "Track symptom load and daily impact for a clearer month-to-month reference.", es: "Registra los síntomas y su impacto diario para tener una referencia más clara mes a mes.", fr: "Suivez les symptômes et leur impact pour un repère plus clair d'un mois à l'autre.", de: "Erfassen Sie Symptome und Alltagsauswirkung für eine klarere Monatsübersicht.", pt: "Registre sintomas e impacto diário para ter uma referência mais clara mês a mês.", ru: "Отмечайте симптомы и их влияние на жизнь, чтобы видеть более понятную картину из месяца в месяц.", hi: "लक्षणों और दैनिक असर को ट्रैक करके महीने-दर-महीने स्पष्ट संदर्भ पाएँ।", ja: "症状数と日常への影響を記録し、月ごとの傾向を見やすくします。", ar: "سجلي الأعراض وتأثيرها اليومي للحصول على مرجع أوضح من شهر إلى آخر." },
      units: false,
      fields: [
        { name: "symptomCount", labelText: womenLabels.symptomCount, type: "select", options: womenChoices.symptomCount },
        { name: "symptomImpact", labelText: womenLabels.symptomImpact, type: "select", options: womenChoices.symptomImpact },
        { name: "daysBeforePeriod", labelText: womenLabels.daysBeforePeriod, type: "select", options: womenChoices.daysBeforePeriod }
      ],
      compute(values, lang) {
        const score = Number(values.symptomCount) + (values.symptomImpact === "light" ? 1 : values.symptomImpact === "moderate" ? 3 : 5) + Number(values.daysBeforePeriod);
        const level = score <= 6
          ? labelFor(lang, { zh: "轻度参考", en: "lighter pattern", es: "patrón leve", fr: "profil léger", de: "eher leichtes Muster", pt: "padrão leve", ru: "более лёгкий паттерн", hi: "हल्का पैटर्न", ja: "軽めの傾向", ar: "نمط خفيف" })
          : score <= 10
            ? labelFor(lang, { zh: "中等参考", en: "moderate pattern", es: "patrón moderado", fr: "profil modéré", de: "mittleres Muster", pt: "padrão moderado", ru: "умеренный паттерн", hi: "मध्यम पैटर्न", ja: "中程度の傾向", ar: "نمط متوسط" })
            : labelFor(lang, { zh: "影响较明显", en: "more disruptive pattern", es: "patrón más intenso", fr: "profil plus marqué", de: "deutlicheres Muster", pt: "padrão mais intenso", ru: "более выраженный паттерн", hi: "अधिक प्रभावी पैटर्न", ja: "影響が大きめの傾向", ar: "نمط أكثر تأثيرًا" });
        return {
          summary: labelFor(lang, { zh: `本月症状参考：${level}`, en: `This cycle reference: ${level}`, es: `Referencia de este ciclo: ${level}`, fr: `Repère de ce cycle : ${level}`, de: `Einordnung dieses Zyklus: ${level}`, pt: `Referência deste ciclo: ${level}`, ru: `Ориентир по этому циклу: ${level}`, hi: `इस चक्र का संदर्भ: ${level}`, ja: `今周期の目安: ${level}`, ar: `مرجع هذه الدورة: ${level}` }),
          detail: labelFor(lang, { zh: "这类记录更适合帮助你发现月月是否在加重、提前，或是否影响到工作和休息。", en: "Tracking like this is most useful for spotting whether symptoms are getting stronger, starting earlier, or interfering more with work and rest.", es: "Este tipo de seguimiento ayuda a ver si los síntomas aumentan, aparecen antes o afectan más al trabajo y al descanso.", fr: "Ce suivi aide surtout à voir si les symptômes s'intensifient, apparaissent plus tôt ou gênent davantage le quotidien.", de: "Solche Aufzeichnungen helfen vor allem zu erkennen, ob Symptome stärker werden, früher beginnen oder den Alltag mehr beeinträchtigen.", pt: "Esse registro ajuda a perceber se os sintomas estão ficando mais fortes, começando antes ou atrapalhando mais a rotina.", ru: "Такое отслеживание полезно, чтобы замечать, усиливаются ли симптомы, начинаются ли раньше и сильнее ли мешают работе и отдыху.", hi: "ऐसा ट्रैकिंग यह देखने में मदद करता है कि लक्षण बढ़ रहे हैं, पहले शुरू हो रहे हैं या काम और आराम पर ज़्यादा असर डाल रहे हैं।", ja: "この記録は、症状が強くなっていないか、早く始まっていないか、生活への影響が大きくなっていないかを見るのに役立ちます。", ar: "يفيد هذا النوع من التتبع في ملاحظة ما إذا كانت الأعراض تزداد أو تبدأ أبكر أو تؤثر أكثر على العمل والراحة." }),
          guidance: `<p>${labelFor(lang, { zh: "这个结果不是疾病判断。如果症状越来越重、持续时间很长，或伴随明显异常出血、剧痛、情绪问题，应尽快咨询医生。", en: "This is not a diagnosis. If symptoms keep worsening, last a long time, or come with unusual bleeding, severe pain, or mood changes, get medical advice.", es: "Esto no es un diagnóstico. Si los síntomas empeoran, duran mucho o se acompañan de sangrado inusual, dolor fuerte o cambios de ánimo, busca orientación médica.", fr: "Ce n'est pas un diagnostic. Si les symptômes s'aggravent, durent longtemps ou s'accompagnent de saignements inhabituels, de fortes douleurs ou d'un mal-être important, consultez.", de: "Dies ist keine Diagnose. Wenn Beschwerden zunehmen, lange anhalten oder mit ungewöhnlichen Blutungen, starken Schmerzen oder Stimmungsschwankungen einhergehen, holen Sie ärztlichen Rat ein.", pt: "Isto não é diagnóstico. Se os sintomas piorarem, durarem muito ou vierem com sangramento incomum, dor forte ou alterações de humor importantes, procure orientação médica.", ru: "Это не диагноз. Если симптомы усиливаются, долго держатся или сопровождаются необычным кровотечением, сильной болью или заметными изменениями настроения, обратитесь к врачу.", hi: "यह निदान नहीं है। यदि लक्षण बढ़ते जाएँ, लंबे समय तक रहें या असामान्य रक्तस्राव, तेज दर्द या मूड बदलाव के साथ हों, तो डॉक्टर से सलाह लें।", ja: "これは診断ではありません。症状が強くなる、長く続く、異常な出血や強い痛み、気分の大きな変化を伴う場合は医療相談を優先してください。", ar: "هذه ليست أداة تشخيص. وإذا كانت الأعراض تزداد أو تستمر طويلًا أو ترافقها نزوف غير معتادة أو ألم شديد أو تغيرات مزاجية واضحة فاطلبي المشورة الطبية." })}</p>`
        };
      }
    }
  };

  const toolCatalog = {
    bmi: { path: "bmi.html", group: "health", zhTitle: "BMI 计算器", enTitle: "BMI Calculator" },
    bmr: { path: "bmr.html", group: "health", zhTitle: "基础代谢计算器", enTitle: "BMR Calculator" },
    tdee: { path: "tdee.html", group: "health", zhTitle: "每日总消耗计算器", enTitle: "TDEE Calculator" },
    bodyfat: { path: "body-fat.html", group: "health", zhTitle: "体脂率计算器", enTitle: "Body Fat Calculator" },
    ideal: { path: "ideal-weight.html", group: "health", zhTitle: "理想体重计算器", enTitle: "Ideal Weight Calculator" },
    leanmass: { path: "lean-body-mass.html", group: "health", zhTitle: "瘦体重计算器", enTitle: "Lean Body Mass Calculator" },
    wthr: { path: "waist-height-ratio.html", group: "health", zhTitle: "腰高比计算器", enTitle: "Waist-to-Height Ratio Calculator" },
    bodyshape: { path: "body-shape.html", group: "health", zhTitle: "体型计算器", enTitle: "Body Shape Calculator" },
    calorieneeds: { path: "calorie-needs.html", group: "health", zhTitle: "热量需求计算器", enTitle: "Calorie Needs Calculator" },
    healthyweightrange: { path: "healthy-weight-range.html", group: "health", zhTitle: "健康体重范围计算器", enTitle: "Healthy Weight Range Calculator" },
    deficit: { path: "calorie-deficit.html", group: "nutrition", zhTitle: "热量缺口计算器", enTitle: "Calorie Deficit Calculator" },
    surplus: { path: "calorie-surplus.html", group: "nutrition", zhTitle: "热量盈余计算器", enTitle: "Calorie Surplus Calculator" },
    weightloss: { path: "weight-loss-timeline.html", group: "nutrition", zhTitle: "减重时间线计算器", enTitle: "Weight Loss Timeline Calculator" },
    tdeemealplanner: { path: "tdee-meal-planner.html", group: "nutrition", zhTitle: "TDEE 饮食分配规划器", enTitle: "TDEE Meal Planner" },
    macro: { path: "macro-calculator.html", group: "nutrition", zhTitle: "宏量营养计算器", enTitle: "Macro Calculator" },
    protein: { path: "protein-intake.html", group: "nutrition", zhTitle: "蛋白质摄入计算器", enTitle: "Protein Intake Calculator" },
    fatintake: { path: "fat-intake.html", group: "nutrition", zhTitle: "脂肪摄入计算器", enTitle: "Fat Intake Calculator" },
    carbintake: { path: "carb-intake.html", group: "nutrition", zhTitle: "碳水摄入计算器", enTitle: "Carb Intake Calculator" },
    sugar: { path: "sugar-intake.html", group: "nutrition", zhTitle: "每日糖摄入计算器", enTitle: "Daily Sugar Intake Calculator" },
    sodium: { path: "sodium-intake.html", group: "nutrition", zhTitle: "钠摄入计算器", enTitle: "Sodium Intake Calculator" },
    fiber: { path: "fiber-intake.html", group: "nutrition", zhTitle: "膳食纤维摄入计算器", enTitle: "Fiber Intake Calculator" },
    caffeine: { path: "caffeine-intake.html", group: "nutrition", zhTitle: "咖啡因摄入计算器", enTitle: "Caffeine Intake Calculator" },
    water: { path: "water-intake.html", group: "habits", zhTitle: "饮水量计算器", enTitle: "Water Intake Calculator" },
    hydrationcheck: { path: "hydration-level-checker.html", group: "habits", zhTitle: "补水状态检查器", enTitle: "Hydration Level Checker" },
    mealcalsplit: { path: "meal-calorie-split.html", group: "habits", zhTitle: "单日餐次热量分配计算器", enTitle: "Meal Calorie Split Calculator" },
    portionsize: { path: "portion-size.html", group: "habits", zhTitle: "分量计算器", enTitle: "Portion Size Calculator" },
    fastingcalc: { path: "intermittent-fasting.html", group: "habits", zhTitle: "间歇性断食计算器", enTitle: "Intermittent Fasting Calculator" },
    fastingtimer: { path: "fasting-window-timer.html", group: "habits", zhTitle: "断食计时工具", enTitle: "Fasting Timer Tool" },
    cheatmeal: { path: "cheat-meal-planner.html", group: "habits", zhTitle: "放松餐计划器", enTitle: "Cheat Meal Planner" },
    weeklydiet: { path: "weekly-diet-planner.html", group: "habits", zhTitle: "每周饮食计划器", enTitle: "Weekly Diet Planner" },
    eatingscore: { path: "healthy-eating-score.html", group: "habits", zhTitle: "健康饮食得分工具", enTitle: "Healthy Eating Score Tool" },
    nutritiontracker: { path: "daily-nutrition-tracker.html", group: "habits", zhTitle: "每日营养记录器", enTitle: "Daily Nutrition Tracker" },
    sleep: { path: "sleep-cycle.html", group: "sleep", zhTitle: "睡眠周期计算器", enTitle: "Sleep Cycle Calculator" },
    bedtimecalc: { path: "bedtime-calculator.html", group: "sleep", zhTitle: "入睡时间计算器", enTitle: "Bedtime Calculator" },
    wakecalc: { path: "wake-up-time.html", group: "sleep", zhTitle: "起床时间计算器", enTitle: "Wake-Up Time Calculator" },
    napcalc: { path: "nap-calculator.html", group: "sleep", zhTitle: "午睡计算器", enTitle: "Nap Calculator" },
    sleepdebt: { path: "sleep-debt.html", group: "sleep", zhTitle: "睡眠负债计算器", enTitle: "Sleep Debt Calculator" },
    sleepconsistency: { path: "sleep-consistency-tracker.html", group: "sleep", zhTitle: "睡眠规律追踪器", enTitle: "Sleep Consistency Tracker" },
    jetlag: { path: "jet-lag-recovery.html", group: "sleep", zhTitle: "时差恢复计算器", enTitle: "Jet Lag Recovery Calculator" },
    pace: { path: "running-pace.html", group: "fitness", zhTitle: "跑步配速计算器", enTitle: "Running Pace Calculator" },
    walkingcal: { path: "walking-calories.html", group: "fitness", zhTitle: "步行热量消耗计算器", enTitle: "Walking Calories Calculator" },
    cyclingcal: { path: "cycling-calories.html", group: "fitness", zhTitle: "骑行热量消耗计算器", enTitle: "Cycling Calories Calculator" },
    hrrzones: { path: "heart-rate-zones.html", group: "fitness", zhTitle: "心率分区计算器", enTitle: "Heart Rate Zone Calculator" },
    targethr: { path: "target-heart-rate.html", group: "fitness", zhTitle: "目标心率计算器", enTitle: "Target Heart Rate Calculator" },
    onerepmax: { path: "one-rep-max.html", group: "fitness", zhTitle: "1RM 计算器", enTitle: "One Rep Max Calculator" },
    workoutvolume: { path: "workout-volume.html", group: "fitness", zhTitle: "训练总量计算器", enTitle: "Workout Volume Calculator" },
    vo2max: { path: "vo2-max.html", group: "fitness", zhTitle: "VO2 Max 估算计算器", enTitle: "VO2 Max Estimate Calculator" },
    screentime: { path: "screen-time-health-risk.html", group: "lifestyle", zhTitle: "屏幕时长健康风险计算器", enTitle: "Screen Time Health Risk Calculator" },
    sittingrisk: { path: "sitting-time-risk.html", group: "lifestyle", zhTitle: "久坐风险计算器", enTitle: "Sitting Time Risk Calculator" },
    stresscheck: { path: "stress-level-self-check.html", group: "lifestyle", zhTitle: "压力水平自查", enTitle: "Stress Level Self-Check" },
    burnout: { path: "burnout-self-assessment.html", group: "lifestyle", zhTitle: "倦怠自评", enTitle: "Burnout Self-Assessment" },
    energyscore: { path: "daily-energy-score.html", group: "lifestyle", zhTitle: "每日精力得分工具", enTitle: "Daily Energy Score Tool" },
    habitscore: { path: "healthy-habit-score.html", group: "lifestyle", zhTitle: "健康习惯得分工具", enTitle: "Healthy Habit Score Tool" },
    periodcalc: { path: "period-calculator.html", group: "women", zhTitle: "经期计算器", enTitle: "Period Calculator" },
    cyclelength: { path: "cycle-length-calculator.html", group: "women", zhTitle: "周期长度计算器", enTitle: "Cycle Length Calculator" },
    cycleregularity: { path: "cycle-regularity-checker.html", group: "women", zhTitle: "周期稳定度检查器", enTitle: "Cycle Regularity Checker" },
    ovulation: { path: "ovulation-calculator.html", group: "women", zhTitle: "排卵日计算器", enTitle: "Ovulation Calculator" },
    fertilitywindow: { path: "fertility-window-calculator.html", group: "women", zhTitle: "受孕窗口计算器", enTitle: "Fertility Window Calculator" },
    duedate: { path: "due-date-calculator.html", group: "women", zhTitle: "预产期计算器", enTitle: "Due Date Calculator" },
    pregnancyweek: { path: "pregnancy-week-calculator.html", group: "women", zhTitle: "孕周计算器", enTitle: "Pregnancy Week Calculator" },
    conceptiondate: { path: "conception-date-estimator.html", group: "women", zhTitle: "受孕日期估算器", enTitle: "Conception Date Estimator" },
    pregnancyweight: { path: "pregnancy-weight-gain-calculator.html", group: "women", zhTitle: "孕期体重增长计算器", enTitle: "Pregnancy Weight Gain Calculator" },
    pmschecker: { path: "pms-symptom-tracker.html", group: "women", zhTitle: "经前症状追踪器", enTitle: "PMS Symptom Tracker" }
  };

  const groupMeta = {
    health: {
      zhLabel: "身体数据",
      enLabel: "Body metrics",
      zhWhat: "这一类工具主要帮助你用身体尺寸、体重或基础公式，快速得到一个适合日常参考的健康指标。",
      enWhat: "These tools use body size, weight, and simple formulas to produce practical everyday health reference points.",
      zhHow: "结果通常来自公开常见公式，更适合做趋势观察和生活方式调整，不适合替代医学评估。",
      enHow: "Most results come from widely used public formulas. They are best for trend tracking and habit changes, not clinical diagnosis.",
      zhRange: "更推荐把结果和腰围、体脂、睡眠、训练和长期变化一起看。",
      enRange: "It is usually better to read the result alongside waist size, body fat, sleep, training, and long-term changes."
    },
    nutrition: {
      zhLabel: "营养与热量",
      enLabel: "Nutrition",
      zhWhat: "这类工具帮助你更清楚地安排热量、宏量营养和饮食目标。",
      enWhat: "These tools help you set clearer targets for calories, macros, and everyday nutrition decisions.",
      zhHow: "它更适合作为起点，而不是一成不变的最终答案。执行 2 到 3 周后再根据真实变化调整更有用。",
      enHow: "They work best as a starting point, not a final fixed answer. Rechecking after 2 to 3 weeks is usually more useful.",
      zhRange: "营养结果需要结合体重趋势、饱腹感、训练恢复和作息一起看。",
      enRange: "Nutrition targets make more sense when paired with body-weight trends, hunger, recovery, and routine."
    },
    habits: {
      zhLabel: "饮食与习惯",
      enLabel: "Habits",
      zhWhat: "这类工具偏向日常执行，帮助你把饮水、餐次、断食和饮食结构变成更容易坚持的计划。",
      enWhat: "These tools focus on day-to-day execution, turning hydration, meal timing, and structure into practical routines.",
      zhHow: "重点不是算得越复杂越好，而是让计划更容易长期坚持。",
      enHow: "The goal is not complexity. The goal is turning a plan into something easier to follow consistently.",
      zhRange: "如果结果太激进或难坚持，通常说明需要把目标调得更现实。",
      enRange: "If a target feels too aggressive or hard to follow, it usually needs to become more realistic."
    },
    sleep: {
      zhLabel: "睡眠与恢复",
      enLabel: "Sleep",
      zhWhat: "这类工具帮助你用睡眠时长、入睡时间和作息规律来优化恢复。",
      enWhat: "These tools use sleep duration, timing, and consistency to help you improve recovery.",
      zhHow: "睡眠工具给的是执行建议，不是医疗诊断。真正关键的是持续的规律性。",
      enHow: "Sleep tools offer planning guidance, not diagnosis. Consistency matters more than one ideal night.",
      zhRange: "如果长期睡不好、白天嗜睡或严重疲劳，更适合尽快咨询医生。",
      enRange: "If poor sleep, daytime sleepiness, or heavy fatigue persist, medical advice is more appropriate."
    },
    fitness: {
      zhLabel: "运动与健身",
      enLabel: "Fitness",
      zhWhat: "这类工具适合用来安排训练强度、训练量和运动表现参考。",
      enWhat: "These tools are useful for planning training intensity, volume, and simple performance targets.",
      zhHow: "结果主要是训练参考值，真正有效的是结合主观体感和恢复情况一起调整。",
      enHow: "The output is a training reference. Real progress still depends on recovery, consistency, and how the effort feels.",
      zhRange: "如果训练后长期恢复差、疼痛明显或异常不适，建议先降低强度。",
      enRange: "If recovery stays poor or pain keeps building, lowering training stress is usually the smarter move."
    },
    lifestyle: {
      zhLabel: "生活方式",
      enLabel: "Lifestyle",
      zhWhat: "这类工具帮助你从压力、久坐、屏幕时间和精力状态里看到生活方式信号。",
      enWhat: "These tools help you spot lifestyle patterns in stress, sitting time, screen time, and daily energy.",
      zhHow: "它们更适合做轻量自查和日常记录，不用于医疗判断。",
      enHow: "They are best used for light self-checks and daily tracking, not medical judgment.",
      zhRange: "如果分数持续很差，建议回到睡眠、活动、工作节奏和寻求专业支持。",
      enRange: "If scores stay poor over time, look first at sleep, movement, work structure, and professional support."
    },
    women: {
      zhLabel: "女性健康",
      enLabel: "Women's health",
      zhWhat: "这类工具帮助你整理经期、排卵、孕周和常见周期症状，让记录和查看变化更直观。",
      enWhat: "These tools help you organize cycle timing, ovulation, pregnancy timing, and common symptom patterns in a clearer way.",
      zhHow: "它们更适合做日常记录、估算和参考，不用于诊断疾病、判断受孕结果或替代正式产检建议。",
      enHow: "They are best used for everyday tracking and estimates, not for diagnosis, confirming conception, or replacing formal prenatal advice.",
      zhRange: "如果月经长期不规律、症状明显加重、出血异常或孕期有不适，应优先咨询医生。",
      enRange: "If cycles stay irregular, symptoms worsen, bleeding feels unusual, or pregnancy discomfort is significant, medical guidance should come first."
    }
  };

  function toolUrl(lang, slug) {
    const entry = toolCatalog[slug];
    return entry ? `/${normalizeLang(lang)}/calculators/${entry.path}` : "#";
  }

  function toolLabel(lang, slug) {
    const entry = toolCatalog[slug];
    if (!entry) return slug;
    const current = normalizeLang(lang);
    if (current === "zh") return entry.zhTitle;
    if (localizedToolTitles[current] && localizedToolTitles[current][slug]) {
      return localizedToolTitles[current][slug];
    }
    if (womenToolTitles[current] && womenToolTitles[current][slug]) {
      return womenToolTitles[current][slug];
    }
    return entry.enTitle;
  }

  function toolGroup(slug) {
    return (toolCatalog[slug] && toolCatalog[slug].group) || "health";
  }

  function toolHint(lang, slug) {
    const current = normalizeLang(lang);
    const title = toolLabel(lang, slug);
    if (tools[slug] && tools[slug].hintText) {
      return labelFor(lang, tools[slug].hintText);
    }
    if (current === "zh") return `输入相关信息后，查看${title}结果、解释和建议。`;
    if (current === "ja") return `入力後に、${title}の結果、見方、次の行動を確認できます。`;
    if (current === "es") return `Introduce tus datos para ver el resultado, la explicación y las sugerencias de ${title}.`;
    if (current === "fr") return `Saisissez vos données pour voir le résultat, l'explication et les conseils de ${title}.`;
    if (current === "de") return `Geben Sie Ihre Daten ein, um Ergebnis, Einordnung und Empfehlungen für ${title} zu sehen.`;
    if (current === "pt") return `Preencha seus dados para ver o resultado, a explicação e as sugestões do ${title}.`;
    if (current === "ru") return `Введите данные, чтобы увидеть результат, объяснение и рекомендации для ${title}.`;
    if (current === "hi") return `अपनी जानकारी भरें और ${title} का परिणाम, व्याख्या और सुझाव देखें।`;
    if (current === "ar") return `أدخل بياناتك لعرض نتيجة ${title} والتفسير والاقتراحات العملية.`;
    return tools[slug] ? tools[slug].defaultHint : "";
  }

  function groupLabel(lang, group) {
    const current = normalizeLang(lang);
    return (groupLabels[group] && groupLabels[group][current]) || (groupLabels[group] && groupLabels[group].en) || group;
  }

  function localizeToolShell(container, slug, lang) {
    const panel = container.closest(".tool-panel");
    const layout = container.closest(".tool-layout");
    const current = normalizeLang(lang);
    if (!panel) return;

    const title = toolLabel(lang, slug);
    const group = toolGroup(slug);
    const breadcrumbs = panel.querySelector(".breadcrumbs");
    if (breadcrumbs) {
      const links = breadcrumbs.querySelectorAll("a");
      if (links[0]) links[0].textContent = zh(lang, "首页", "Home");
      if (links[1]) links[1].textContent = zh(lang, "计算器", "Calculators");
      const last = breadcrumbs.querySelector("span:last-child");
      if (last) last.textContent = title;
    }

    const eyebrow = panel.querySelector(".eyebrow");
    if (eyebrow) eyebrow.textContent = groupLabel(lang, group);

    const titleNode = panel.querySelector("h1");
    if (titleNode) titleNode.textContent = title;

    const introNode = panel.querySelector("p");
    if (introNode) introNode.textContent = toolHint(lang, slug);

    const sidebar = layout && layout.querySelector(".tool-sidebar");
    if (sidebar) {
      const sidebarMeta = groupSidebar[group];
      const titleNode = sidebar.querySelector("h2");
      if (titleNode) {
        titleNode.textContent = (sidebarMeta && sidebarMeta.title[current]) || (sidebarMeta && sidebarMeta.title.en) || translateText(lang, "Why people start here");
      }
      const list = sidebar.querySelector(".checklist");
      if (list && sidebarMeta) {
        const bullets = sidebarMeta.bullets[current] || sidebarMeta.bullets.en;
        list.innerHTML = bullets.map((item) => `<li>${item}</li>`).join("");
      }
    }

    const extraSidebar = ensureSidebarExtra(layout);
    if (extraSidebar) {
      const cards = sidebarCards(lang, slug);
      const standards = standardCards(lang, slug);
      extraSidebar.innerHTML = `
        <div class="section-head compact">
          <h3>${sidebarLearnTitle(lang)}</h3>
          <p>${toolHint(lang, slug)}</p>
        </div>
        <div class="sidebar-facts">
          ${cards.map((card) => `
            <article class="info-box sidebar-fact">
              <h4>${card.heading}</h4>
              <p>${card.body}</p>
            </article>
          `).join("")}
        </div>
        <div class="section-head compact sidebar-standard-head">
          <h3>${sidebarStandardTitle(lang)}</h3>
          <p>${sidebarStandardNote(lang)}</p>
        </div>
        <div class="sidebar-facts sidebar-standard-list">
          ${standards.map((card) => `
            <article class="info-box sidebar-fact sidebar-standard-card">
              <h4>${card.heading}</h4>
              <p>${card.body}</p>
            </article>
          `).join("")}
        </div>
      `;
    }

    document.title = `${title} | Health Toolkit Lab`;
  }

  function relatedTools(slug) {
    const group = toolGroup(slug);
    return Object.keys(toolCatalog).filter((key) => key !== slug && toolGroup(key) === group).slice(0, 4);
  }

  function groupWhatCopy(lang, group) {
    const current = normalizeLang(lang);
    if (current === "zh") return groupMeta[group].zhWhat;
    if (current === "en") return groupMeta[group].enWhat;
    if (current === "ja") return `この${groupLabel(lang, group)}ツールは、日常の参考や計画づくりに使いやすいよう設計されています。`;
    if (current === "es") return `Esta herramienta de ${groupLabel(lang, group)} está pensada para ayudarte con referencias diarias y planes prácticos.`;
    if (current === "fr") return `Cet outil de ${groupLabel(lang, group)} est conçu pour servir de repère pratique au quotidien.`;
    if (current === "de") return `Dieses ${groupLabel(lang, group)}-Tool ist für alltagstaugliche Orientierung und Planung gedacht.`;
    if (current === "pt") return `Esta ferramenta de ${groupLabel(lang, group)} foi feita para servir como referência prática no dia a dia.`;
    if (current === "ru") return `Этот инструмент из раздела ${groupLabel(lang, group)} подходит для повседневных ориентиров и практического планирования.`;
    if (current === "hi") return `यह ${groupLabel(lang, group)} टूल रोज़मर्रा की योजना और व्यावहारिक संदर्भ के लिए बनाया गया है।`;
    if (current === "ar") return `تم تصميم أداة ${groupLabel(lang, group)} هذه لتكون مرجعًا عمليًا للاستخدام اليومي.`;
    return groupMeta[group].enWhat;
  }

  function groupHowCopy(lang, group) {
    const current = normalizeLang(lang);
    if (current === "zh") return groupMeta[group].zhHow;
    if (current === "en") return groupMeta[group].enHow;
    if (current === "ja") return "厳密な診断ではなく、日々の判断や習慣調整の参考として使うのが適切です。";
    if (current === "es") return "Lo más útil es tomarlo como una guía práctica y ajustarlo según tus cambios reales con el tiempo.";
    if (current === "fr") return "Le plus utile est de l'utiliser comme repère pratique puis de l'ajuster selon l'évolution réelle.";
    if (current === "de") return "Am sinnvollsten ist es als praktische Orientierung, die du anhand echter Veränderungen anpasst.";
    if (current === "pt") return "O melhor uso é tratá-la como uma referência prática e ajustar conforme suas mudanças reais.";
    if (current === "ru") return "Лучше воспринимать результат как практический ориентир и корректировать его по реальным изменениям.";
    if (current === "hi") return "इसे एक व्यावहारिक मार्गदर्शक की तरह देखें और वास्तविक बदलावों के अनुसार समायोजित करें।";
    if (current === "ar") return "الأفضل استخدام النتيجة كمرجع عملي ثم تعديلها حسب التغيرات الفعلية مع الوقت.";
    return groupMeta[group].enHow;
  }

  function groupRangeCopy(lang, group) {
    const current = normalizeLang(lang);
    if (current === "zh") return groupMeta[group].zhRange;
    if (current === "en") return groupMeta[group].enRange;
    if (current === "ja") return "この結果だけで判断せず、体感、睡眠、活動量、長期的な変化と合わせて見るのがおすすめです。";
    if (current === "es") return "Conviene leer este resultado junto con tus sensaciones, tu rutina y los cambios a largo plazo.";
    if (current === "fr") return "Il vaut mieux lire ce résultat avec vos sensations, votre routine et l'évolution à long terme.";
    if (current === "de") return "Am besten liest du dieses Ergebnis zusammen mit Körpergefühl, Alltag und langfristigen Veränderungen.";
    if (current === "pt") return "Vale mais a pena ler este resultado junto com sensação corporal, rotina e mudanças ao longo do tempo.";
    if (current === "ru") return "Лучше рассматривать этот результат вместе с самочувствием, режимом и долгосрочной динамикой.";
    if (current === "hi") return "इस परिणाम को शरीर की अनुभूति, दिनचर्या और लंबे समय के बदलावों के साथ मिलाकर देखना बेहतर है।";
    if (current === "ar") return "من الأفضل قراءة هذه النتيجة مع الإحساس الجسدي والروتين اليومي والتغيرات طويلة المدى.";
    return groupMeta[group].enRange;
  }

  function sidebarLearnTitle(lang) {
    const current = normalizeLang(lang);
    if (current === "zh") return "补充参考";
    if (current === "ja") return "あわせて知っておきたいこと";
    if (current === "es") return "Información útil";
    if (current === "fr") return "À retenir";
    if (current === "de") return "Wichtige Hinweise";
    if (current === "pt") return "Referências úteis";
    if (current === "ru") return "Полезные ориентиры";
    if (current === "hi") return "काम की जानकारी";
    if (current === "ar") return "معلومات إضافية";
    return "Useful context";
  }

  function sidebarCards(lang, slug) {
    const title = toolLabel(lang, slug);
    const group = toolGroup(slug);
    const current = normalizeLang(lang);
    if (current === "zh") {
      return [
        { heading: "这个结果更适合怎么看", body: `${title}更适合作为日常参考和趋势观察工具，连续记录、定期回看，通常比只看一次结果更有价值。` },
        { heading: "最好搭配什么一起看", body: `${groupLabel(lang, group)}这类结果，通常更适合和睡眠、饮食、活动量、周期变化或主观感受放在一起看，而不是单独判断。` },
        { heading: "什么时候要提高警惕", body: "如果结果长期异常、波动明显，或者已经影响到生活、训练、情绪、睡眠或生理节奏，应该优先咨询专业人士。" },
        { heading: "更适合看趋势，不要只看一次", body: "很多健康指标都会受到饮食、作息、压力、活动量和周期变化影响。把多次记录放在一起看，通常更容易看清真正的变化方向。" },
        { heading: "可以先从哪些地方调整", body: "大多数情况下，先从规律睡眠、稳定饮食、适度活动和连续记录开始，会比一次性做很大改动更容易坚持，也更容易判断是否有效。" },
        { heading: "不要把工具结果当成唯一结论", body: `${title}适合帮助你快速建立参考框架，但真正有价值的判断，通常还需要结合你的目标、身体感受、既往情况和长期变化一起看。` }
      ];
    }
    if (current === "ja") {
      return [
        { heading: "この結果の見方", body: `${title}は一度だけで判断するより、日々の記録や変化の流れを見返す使い方のほうが実用的です。` },
        { heading: "あわせて確認したいこと", body: `${groupLabel(lang, group)}の結果は、睡眠、食事、活動量、周期の変化、体感などと一緒に見ると判断しやすくなります。` },
        { heading: "専門家に相談したい場面", body: "異常が長く続く場合、変化が大きい場合、または日常生活や体調に影響している場合は、早めに専門家へ相談するのが安心です。" },
        { heading: "1回だけで決めないこと", body: "健康に関する数値は、睡眠、食事、ストレス、活動量、周期の違いでも動きます。複数回の記録を並べて見たほうが傾向をつかみやすくなります。" },
        { heading: "まず整えたい基本習慣", body: "急に大きく変えるよりも、睡眠、食事、軽い運動、記録の継続といった土台を整えるほうが、結果を見直しやすくなります。" },
        { heading: "この結果だけに頼らない", body: `${title}は参考情報として便利ですが、最終的には目標、体感、これまでの経過、長期的な変化も一緒に見ることが大切です。` }
      ];
    }
    if (current === "es") {
      return [
        { heading: "Cómo leer mejor este resultado", body: `${title} suele ser más útil como referencia diaria y para seguir tendencias que como un juicio basado en un solo cálculo.` },
        { heading: "Con qué conviene compararlo", body: `Los resultados de ${groupLabel(lang, group)} se entienden mejor junto con sueño, alimentación, actividad, cambios del ciclo o sensaciones del día a día.` },
        { heading: "Cuándo pedir ayuda profesional", body: "Si el resultado sigue alterado durante mucho tiempo, cambia de forma marcada o afecta tu rutina, lo prudente es consultarlo con un profesional." },
        { heading: "No te quedes con un solo dato", body: "Muchos indicadores cambian por sueño, estrés, alimentación, actividad o cambios del ciclo. Varias mediciones suelen dar una imagen más fiable que un único cálculo." },
        { heading: "Por dónde empezar a mejorar", body: "En la mayoría de los casos, conviene empezar por hábitos básicos: sueño regular, alimentación estable, algo más de movimiento y seguimiento durante varias semanas." },
        { heading: "Úsalo como apoyo, no como conclusión final", body: `${title} ayuda a ordenar una primera referencia, pero la interpretación más útil casi siempre requiere contexto personal y cambios observados con el tiempo.` }
      ];
    }
    if (current === "fr") {
      return [
        { heading: "Comment lire ce résultat", body: `${title} est souvent plus utile comme repère de suivi et d'évolution que comme conclusion fondée sur une seule mesure.` },
        { heading: "À comparer avec quoi", body: `Les résultats liés à ${groupLabel(lang, group)} prennent plus de sens lorsqu'on les relie au sommeil, à l'alimentation, à l'activité et aux sensations du quotidien.` },
        { heading: "Quand demander un avis", body: "Si le résultat reste inhabituel, varie fortement ou commence à perturber la vie quotidienne, mieux vaut demander un avis professionnel." },
        { heading: "Évitez de juger sur une seule mesure", body: "Le sommeil, le stress, l'alimentation, l'activité ou le cycle peuvent modifier beaucoup d'indicateurs. Plusieurs relevés montrent souvent mieux la vraie tendance." },
        { heading: "Par quoi commencer", body: "Avant de chercher des solutions complexes, il est souvent plus utile d'améliorer les bases: sommeil régulier, repas stables, activité modérée et suivi sur plusieurs semaines." },
        { heading: "Un repère, pas un verdict", body: `${title} sert surtout à structurer une première lecture. Le contexte personnel, les objectifs et l'évolution dans le temps restent essentiels pour bien interpréter le résultat.` }
      ];
    }
    if (current === "de") {
      return [
        { heading: "So liest du das Ergebnis besser", body: `${title} ist meist hilfreicher als Alltagsreferenz und Trendanzeige als als endgültige Aussage nach nur einer Eingabe.` },
        { heading: "Womit du es verbinden solltest", body: `Ergebnisse aus dem Bereich ${groupLabel(lang, group)} sind meist aussagekräftiger zusammen mit Schlaf, Ernährung, Aktivität, Zyklusverlauf oder subjektivem Befinden.` },
        { heading: "Wann fachlicher Rat sinnvoll ist", body: "Wenn der Wert langfristig auffällig bleibt, stark schwankt oder deinen Alltag beeinflusst, ist professionelle Abklärung sinnvoll." },
        { heading: "Nicht nur eine Eingabe bewerten", body: "Viele Werte verändern sich durch Schlaf, Stress, Ernährung, Aktivität oder Zyklusverlauf. Mehrere Messpunkte zeigen die echte Richtung oft besser als ein Einzelwert." },
        { heading: "Womit du am besten anfängst", body: "In vielen Fällen lohnt es sich, zuerst die Grundlagen zu stabilisieren: Schlaf, regelmäßige Mahlzeiten, etwas mehr Bewegung und mehrere Wochen Beobachtung." },
        { heading: "Nutze es als Orientierung", body: `${title} hilft dir vor allem dabei, eine erste Struktur zu bekommen. Die sinnvollste Einordnung entsteht aber meist erst zusammen mit deinem Alltag und längerfristigen Veränderungen.` }
      ];
    }
    if (current === "pt") {
      return [
        { heading: "Como interpretar melhor este resultado", body: `${title} tende a ser mais útil como referência prática e acompanhamento de tendência do que como conclusão baseada em um único cálculo.` },
        { heading: "Com o que vale comparar", body: `Resultados de ${groupLabel(lang, group)} costumam fazer mais sentido quando vistos junto com sono, alimentação, atividade, mudanças do ciclo ou percepção corporal.` },
        { heading: "Quando procurar orientação profissional", body: "Se o resultado continuar fora do esperado, oscilar muito ou começar a afetar sua rotina, vale buscar avaliação profissional." },
        { heading: "Não tire conclusão de uma única vez", body: "Muitos indicadores mudam por sono, estresse, alimentação, atividade ou variações do ciclo. Ver várias medições costuma mostrar melhor a tendência real." },
        { heading: "Por onde começar a ajustar", body: "Na maioria dos casos, vale primeiro organizar o básico: sono mais regular, alimentação estável, movimento moderado e acompanhamento por algumas semanas." },
        { heading: "Use como apoio, não como sentença", body: `${title} é útil para criar uma referência inicial, mas a leitura mais inteligente quase sempre depende do seu contexto, objetivo e evolução ao longo do tempo.` }
      ];
    }
    if (current === "ru") {
      return [
        { heading: "Как лучше читать результат", body: `${title} обычно полезнее как ориентир для повседневного наблюдения и динамики, чем как вывод по одному измерению.` },
        { heading: "С чем его стоит сопоставлять", body: `Результаты из раздела ${groupLabel(lang, group)} лучше понимать вместе со сном, питанием, активностью, изменениями цикла и самочувствием.` },
        { heading: "Когда лучше обратиться к специалисту", body: "Если показатель долго остаётся необычным, резко меняется или начинает мешать повседневной жизни, лучше получить профессиональную консультацию." },
        { heading: "Не делайте вывод по одному значению", body: "Многие показатели меняются из-за сна, стресса, питания, активности или особенностей цикла. Несколько измерений обычно лучше показывают реальную тенденцию." },
        { heading: "С чего начать изменения", body: "Во многих случаях полезнее сначала наладить базовые вещи: сон, питание, умеренную активность и наблюдение в течение нескольких недель." },
        { heading: "Используйте как ориентир", body: `${title} полезен как отправная точка, но наиболее разумная интерпретация обычно требует учёта личного контекста и долгосрочных изменений.` }
      ];
    }
    if (current === "hi") {
      return [
        { heading: "इस परिणाम को कैसे देखें", body: `${title} एक बार के निर्णय से अधिक, रोज़मर्रा संदर्भ और ट्रेंड देखने के लिए उपयोगी होता है।` },
        { heading: "किन चीज़ों के साथ मिलाकर देखें", body: `${groupLabel(lang, group)} के परिणाम को नींद, भोजन, गतिविधि, चक्र परिवर्तन या शरीर की अनुभूति के साथ पढ़ना बेहतर होता है।` },
        { heading: "कब विशेषज्ञ से बात करनी चाहिए", body: "यदि परिणाम लंबे समय तक असामान्य रहे, बहुत उतार-चढ़ाव दिखाए या रोज़मर्रा जीवन पर असर डालने लगे, तो विशेषज्ञ सलाह लेना बेहतर है।" },
        { heading: "एक बार के परिणाम पर मत टिकिए", body: "कई संकेतक नींद, तनाव, भोजन, गतिविधि या चक्र बदलाव से बदल सकते हैं। कई बार की प्रविष्टियाँ आमतौर पर अधिक भरोसेमंद तस्वीर देती हैं।" },
        { heading: "शुरुआत कहाँ से करें", body: "अधिकांश स्थितियों में पहले नींद, भोजन, हल्की गतिविधि और कुछ हफ्तों की निरंतर ट्रैकिंग को स्थिर करना बेहतर शुरुआती कदम होता है।" },
        { heading: "इसे सहायक संदर्भ की तरह उपयोग करें", body: `${title} शुरुआती समझ बनाने में मदद करता है, लेकिन बेहतर निष्कर्ष के लिए आपके लक्ष्य, शरीर की प्रतिक्रिया और लंबे समय की दिशा भी देखनी चाहिए।` }
      ];
    }
    if (current === "ar") {
      return [
        { heading: "كيف تقرأ هذه النتيجة بشكل أفضل", body: `تكون ${title} أكثر فائدة كمرجع عملي ومتابعة للتغير مع الوقت، لا كحكم نهائي من قراءة واحدة فقط.` },
        { heading: "ما الذي يفيد مقارنته معها", body: `نتائج ${groupLabel(lang, group)} تصبح أوضح عند قراءتها مع النوم، والغذاء، والنشاط، وتغيرات الدورة أو الإحساس العام بالجسم.` },
        { heading: "متى تحتاج إلى استشارة مختص", body: "إذا استمرت النتيجة غير المعتادة لفترة طويلة، أو تغيرت بشكل واضح، أو بدأت تؤثر في الحياة اليومية، فمن الأفضل استشارة مختص." },
        { heading: "لا تعتمد على قراءة واحدة فقط", body: "كثير من المؤشرات قد تتغير بسبب النوم أو التوتر أو الغذاء أو النشاط أو تغيرات الدورة. قراءة عدة قياسات معًا تعطي صورة أوضح عادة." },
        { heading: "من أين تبدأ التعديل", body: "في أغلب الحالات، يكون من الأفضل أولًا تنظيم الأساسيات مثل النوم المنتظم، والغذاء المستقر، والنشاط المعتدل، والاستمرار في المتابعة لعدة أسابيع." },
        { heading: "استخدمها كمرجع مساعد", body: `${title} مفيدة لبناء تصور أولي، لكن القراءة الأذكى تحتاج أيضًا إلى النظر في الهدف الشخصي والإحساس الجسدي والتغير على المدى الطويل.` }
      ];
    }
    return [
      { heading: "How to read this result", body: `${title} works best as a practical reference and trend tool, not as a final judgment from one calculation.` },
      { heading: "What to compare it with", body: `${groupLabel(lang, group)} results are usually more useful when reviewed alongside sleep, nutrition, activity, cycle changes, or how you feel day to day.` },
      { heading: "When to get extra help", body: "If the result stays unusual, changes sharply, or starts affecting daily life, it is worth checking it with a qualified professional." },
      { heading: "Do not rely on a single reading", body: "Many health-related numbers move with sleep, stress, food intake, activity, and normal short-term variation. Several entries usually tell a better story than one result." },
      { heading: "Where to start making changes", body: "In most cases, the most useful first step is improving basics such as sleep rhythm, meal consistency, moderate activity, and reviewing progress over a few weeks." },
      { heading: "Use it as a guide, not a verdict", body: `${title} is best used to build an early reference point. The most useful interpretation still depends on your goals, context, and long-term change.` }
    ];
  }

  function sidebarStandardTitle(lang) {
    const current = normalizeLang(lang);
    if (current === "zh") return "参考标准";
    if (current === "ja") return "判断の目安";
    if (current === "es") return "Guía de referencia";
    if (current === "fr") return "Repères utiles";
    if (current === "de") return "Praktische Richtwerte";
    if (current === "pt") return "Padrões de referência";
    if (current === "ru") return "Ориентиры";
    if (current === "hi") return "संदर्भ मानक";
    if (current === "ar") return "معايير مرجعية";
    return "Reference guide";
  }

  function sidebarStandardNote(lang) {
    const current = normalizeLang(lang);
    if (current === "zh") return "这部分用于帮助你理解结果大概该怎么判断；不同年龄、疾病、孕期、训练背景和地区标准下，适用范围可能不同。";
    if (current === "ja") return "結果の見方をつかむための一般的な目安です。年齢、妊娠、疾患、競技背景などにより適切な基準は変わることがあります。";
    if (current === "es") return "Estos valores sirven como orientación general. La edad, el embarazo, enfermedades, entrenamiento o contexto local pueden cambiar la referencia adecuada.";
    if (current === "fr") return "Ces repères servent d’orientation générale. L’âge, la grossesse, certaines maladies ou le niveau d’entraînement peuvent modifier l’interprétation utile.";
    if (current === "de") return "Diese Angaben sind allgemeine Richtwerte. Alter, Schwangerschaft, Erkrankungen oder Trainingshintergrund können die sinnvolle Einordnung verändern.";
    if (current === "pt") return "Esses valores servem como referência geral. Idade, gravidez, doenças e nível de treino podem mudar a leitura mais adequada.";
    if (current === "ru") return "Это общие ориентиры для понимания результата. Возраст, беременность, заболевания и тренировочный фон могут менять подходящую интерпретацию.";
    if (current === "hi") return "ये सामान्य संदर्भ मानक हैं। आयु, गर्भावस्था, बीमारी, प्रशिक्षण स्तर या स्थानीय संदर्भ के अनुसार सही व्याख्या बदल सकती है।";
    if (current === "ar") return "هذه معايير عامة لفهم النتيجة بشكل أولي. قد يختلف التفسير الأنسب حسب العمر أو الحمل أو المرض أو مستوى التدريب.";
    return "These are general reference standards to help you read the result. Age, pregnancy, disease state, training background, and local guidance can change the best interpretation.";
  }

  function standardCard(heading, body) {
    return { heading, body };
  }

  function standardCards(lang, slug) {
    const group = toolGroup(slug);
    const nutritionSlugs = new Set(["bmr", "tdee", "deficit", "surplus", "macro", "protein", "water", "sugar", "sodium", "caffeine", "fiberintake", "calorieneeds", "fatintake", "carbintake", "mealcaloriesplit", "portionsize", "fastingcalc", "fastingtimer", "cheatmeal", "weeklydiet", "healthyeating", "nutritiontracker"]);
    const bodySlugs = new Set(["bmi", "bodyfat", "ideal", "wthr", "leanmass", "bodyshape", "healthyweightrange"]);
    const fitnessSlugs = new Set(["targethr", "hrrzones", "onerepmax", "pace", "walkingcal", "cyclingcal", "workoutvolume", "vo2max"]);
    const sleepSlugs = new Set(["sleep", "bedtimecalc", "wakecalc", "napcalc", "sleepdebt", "sleepconsistency", "jetlag"]);
    const womenSlugs = new Set(["periodcalc", "cyclelength", "cycleregularity", "ovulation", "fertilitywindow", "duedate", "pregnancyweek", "conceptiondate", "pregnancyweight", "pms"]);
    const lifestyleSlugs = new Set(["screentime", "sittingrisk", "stresscheck", "burnout", "energyscore", "habitscore"]);

    if (slug === "bmi") {
      return [
        standardCard(zh(lang, "常见成人 BMI 参考线", "Common adult BMI cutoffs"), zh(lang, "偏轻：<18.5；正常：18.5-24.9；超重：25-29.9；肥胖：≥30。更适合成年人日常参考。", "Underweight: <18.5; usual range: 18.5-24.9; overweight: 25-29.9; obese: ≥30. This is mainly a practical adult reference.")),
        standardCard(zh(lang, "什么时候更值得警惕", "When to pay more attention"), zh(lang, "如果 BMI 长期高于 25 且腰围也偏高，或长期低于 18.5 并伴随疲劳、恢复差、食欲差，就更值得进一步检查。", "If BMI stays above 25 together with a higher waist size, or remains under 18.5 with fatigue, low appetite, or poor recovery, the result deserves more attention.")),
        standardCard(zh(lang, "不要单独只看 BMI", "Do not rely on BMI alone"), zh(lang, "BMI 无法区分脂肪和肌肉。最好同时看腰围、体脂率、训练状态和长期体重变化。", "BMI does not separate fat from muscle. Waist size, body fat, training status, and longer-term weight trends matter too."))
      ];
    }

    if (slug === "bodyfat") {
      return [
        standardCard(zh(lang, "体脂率常见参考", "Common body-fat references"), zh(lang, "男性大致可参考：10-20% 较常见；女性大致可参考：18-30% 较常见。不同年龄和训练背景下范围会变。", "For many adults, a rough practical reference is about 10-20% for men and 18-30% for women, though age and training background can shift what is typical.")),
        standardCard(zh(lang, "这类结果更看趋势", "This result is best used for trends"), zh(lang, "围度公式估算更适合做趋势追踪，而不是把单次结果当成精确检测值。", "Circumference formulas are more useful for trend tracking than for treating one result as a precise body-composition test.")),
        standardCard(zh(lang, "更适合搭配什么一起看", "What to pair it with"), zh(lang, "建议和腰围、体重、力量水平、照片记录一起看，这样更容易判断到底在减脂、保肌，还是只是体重波动。", "Compare it with waist size, body weight, strength level, and photos to understand whether body composition is really changing."))
      ];
    }

    if (slug === "wthr") {
      return [
        standardCard(zh(lang, "腰高比常见参考线", "Common waist-to-height references"), zh(lang, "<0.50 常被视作更理想；0.50-0.59 说明腹部脂肪风险在升高；≥0.60 通常更值得重视。", "<0.50 is commonly treated as a more favorable line; 0.50-0.59 suggests rising central-fat risk; ≥0.60 usually deserves more attention.")),
        standardCard(zh(lang, "为什么腰高比有价值", "Why waist-to-height ratio matters"), zh(lang, "和单纯体重相比，腰围相对身高的比例更能帮助判断腹部脂肪相关风险。", "Compared with body weight alone, the ratio between waist size and height often gives more practical context for central-fat risk.")),
        standardCard(zh(lang, "什么时候优先看腰围变化", "When to focus on waist change"), zh(lang, "如果体重变化不大，但腰高比在下降，往往也说明方向在变好。", "If body weight is not moving much but waist-to-height ratio is improving, the direction may still be favorable."))
      ];
    }

    if (slug === "bmr") {
      return [
        standardCard(zh(lang, "BMR 应该怎么理解", "How to read BMR"), zh(lang, "BMR 是静息消耗，不是日常真实维持热量。多数人的维持热量通常明显高于 BMR。", "BMR reflects resting energy use, not true day-to-day maintenance calories. Most people maintain body weight on a value well above BMR.")),
        standardCard(zh(lang, "常见使用方式", "Most practical use"), zh(lang, "更适合先把 BMR 当基线，再结合活动水平估算 TDEE。", "The most practical use is to treat BMR as a baseline and then estimate TDEE with activity level.")),
        standardCard(zh(lang, "什么时候这个数字偏低", "When the number becomes too low"), zh(lang, "如果你直接把 BMR 当作长期摄入目标，通常会偏低，较容易带来疲劳、饥饿或训练状态下降。", "If you use BMR itself as a long-term intake target, it is often too low and may increase fatigue, hunger, or poor training quality."))
      ];
    }

    if (slug === "tdee") {
      return [
        standardCard(zh(lang, "TDEE 的实际意义", "What TDEE usually means"), zh(lang, "TDEE 更像维持热量起点。如果按这个结果吃两到三周后体重基本稳定，说明它和你的真实维持热量接近。", "TDEE is best treated as a maintenance starting point. If body weight stays fairly stable after two to three weeks, the estimate is probably close.")),
        standardCard(zh(lang, "减脂和增重常见调整幅度", "Common adjustment ranges"), zh(lang, "减脂常从 -300 到 -500 kcal/天 开始；增重或增肌常从 +150 到 +300 kcal/天 开始。", "A common starting range is about -300 to -500 kcal/day for fat loss and +150 to +300 kcal/day for weight gain or lean gain.")),
        standardCard(zh(lang, "多久复查一次更合适", "How often to reassess"), zh(lang, "通常每 2 到 3 周结合体重、腰围和训练状态复查一次，比天天大改更有效。", "Reassessing every 2 to 3 weeks with body weight, waist size, and training feedback is usually more useful than making daily big changes."))
      ];
    }

    if (slug === "macro") {
      return [
        standardCard(zh(lang, "宏量营养常见起点", "Common macro starting points"), zh(lang, "蛋白质常见起点可参考 1.2-2.2 g/kg 体重；脂肪常见起点约 0.6-1.0 g/kg；剩余热量再分给碳水。", "A common starting range is about 1.2-2.2 g/kg for protein and around 0.6-1.0 g/kg for fat, with remaining calories going to carbs.")),
        standardCard(zh(lang, "什么情况更该优先提蛋白", "When protein matters more"), zh(lang, "如果你在减脂、做力量训练或恢复较慢，通常更值得优先保证蛋白质。", "Protein usually deserves extra attention when you are dieting, doing resistance training, or recovering poorly.")),
        standardCard(zh(lang, "不要把比例看得太死", "Do not treat the split as rigid"), zh(lang, "宏量比例更像执行框架。真正更重要的是长期能不能吃得下去、练得动、睡得好。", "Macro splits are execution frameworks, not rigid laws. Adherence, training quality, and recovery matter more than chasing a perfect ratio."))
      ];
    }

    if (slug === "protein") {
      return [
        standardCard(zh(lang, "蛋白质常见参考", "Common protein references"), zh(lang, "日常健康可先参考 1.2-1.6 g/kg；减脂或力量训练常参考 1.6-2.2 g/kg。", "For general health, a practical starting range is around 1.2-1.6 g/kg; for fat loss or resistance training, 1.6-2.2 g/kg is often used.")),
        standardCard(zh(lang, "什么时候更值得分散到多餐", "When to spread it across meals"), zh(lang, "如果单次很难吃够，分到 3 到 5 餐通常比集中在一餐更容易执行。", "If one big serving feels difficult, spreading protein across 3 to 5 meals is usually easier than relying on one meal.")),
        standardCard(zh(lang, "高于多少不一定更划算", "When more is not always better"), zh(lang, "很多人超过约 2.2 g/kg 后，边际收益会下降，反而更容易压缩其他食物选择。", "For many people, benefits diminish beyond roughly 2.2 g/kg, while diet flexibility often becomes worse."))
      ];
    }

    if (nutritionSlugs.has(slug)) {
      return [
        standardCard(zh(lang, "更适合作为起点参考", "Best used as a starting point"), zh(lang, "这类营养结果更适合作为日常执行起点，而不是一次算完就长期不变。", "Nutrition outputs like this are most useful as a practical starting point rather than a number you never revisit.")),
        standardCard(zh(lang, "通常怎么复查更有价值", "How to reassess it well"), zh(lang, "通常连续执行 2 到 3 周，再结合体重、腰围、精力、饱腹感和训练状态回看，更容易判断是否适合。", "Apply it for two to three weeks, then reassess with body weight, waist size, energy, hunger, and training quality.")),
        standardCard(zh(lang, "什么时候不该只看数字", "When not to focus only on the number"), zh(lang, "如果你已经有明显疲劳、暴食、睡眠变差、训练恢复差或特殊疾病，单靠数字并不够。", "If you already have marked fatigue, overeating, worse sleep, poor recovery, or special medical conditions, the number alone is not enough."))
      ];
    }

    if (slug === "sleep") {
      return [
        standardCard(zh(lang, "成人睡眠常见参考", "Common adult sleep reference"), zh(lang, "多数成年人常见参考是每晚约 7 到 9 小时。这个工具还默认加入约 15 分钟入睡时间和 90 分钟睡眠周期。", "For most adults, a common reference is roughly 7 to 9 hours per night. This tool also assumes about 15 minutes to fall asleep and 90-minute cycles.")),
        standardCard(zh(lang, "为什么固定起床时间更重要", "Why wake time often matters more"), zh(lang, "规律起床通常比偶尔一晚“睡满”更能帮助稳定睡眠节奏。", "A regular wake time usually helps sleep rhythm more than occasionally getting one perfect night.")),
        standardCard(zh(lang, "什么时候说明节奏可能有问题", "When sleep rhythm may need extra attention"), zh(lang, "如果明明给了足够睡眠时间，却长期仍很困、恢复差或白天精神差，就值得继续检查作息和其他因素。", "If you consistently allow enough time in bed but still feel persistently tired, poorly recovered, or foggy, your rhythm may need more attention."))
      ];
    }

    if (sleepSlugs.has(slug)) {
      return [
        standardCard(zh(lang, "睡眠工具更看规律", "Sleep tools work best with consistency"), zh(lang, "这类工具更适合帮助你安排作息，而不是保证某一晚一定睡得好。", "These tools are most useful for organizing sleep timing, not for guaranteeing one perfect night.")),
        standardCard(zh(lang, "多数成人的常见范围", "Common adult reference range"), zh(lang, "很多成年人仍然可以先把 7 到 9 小时睡眠作为基础参考，再根据工作和恢复状态微调。", "For many adults, a practical starting reference is still about 7 to 9 hours of sleep, adjusted to workload and recovery needs.")),
        standardCard(zh(lang, "什么时候更该关注恢复感受", "When recovery matters more than the clock"), zh(lang, "如果时间看起来足够但醒来依然疲惫，说明不只是睡多久的问题，还要看规律性、压力、咖啡因和夜间环境。", "If the time in bed looks adequate but recovery still feels poor, the issue may be regularity, stress, caffeine, or sleep environment, not just total hours."))
      ];
    }

    if (slug === "targethr" || slug === "hrrzones") {
      return [
        standardCard(zh(lang, "心率分区常见参考", "Common heart-rate zone references"), zh(lang, "按心率储备法常见可参考：中等强度约 50%-70%，高强度约 70%-85%；分区法常把 50%-60% 视作 1 区，60%-70% 视作 2 区。", "With the heart-rate reserve method, moderate work is often about 50%-70% and vigorous work about 70%-85%. Zone systems often place 50%-60% in zone 1 and 60%-70% in zone 2.")),
        standardCard(zh(lang, "大多数训练不必太高强度", "Most training does not need to be hard"), zh(lang, "很多耐力训练的主量更适合放在较轻松区间，而不是每次都追高心率。", "A large share of endurance training usually works better in easier zones rather than pushing heart rate high every session.")),
        standardCard(zh(lang, "数字要结合主观感受", "Use the number with perceived effort"), zh(lang, "天气、压力、睡眠、咖啡因和脱水都会影响心率，所以仍要结合说话测试和主观疲劳感。", "Heat, stress, sleep, caffeine, and dehydration can all shift heart rate, so use talk test and perceived effort alongside the number."))
      ];
    }

    if (slug === "onerepmax") {
      return [
        standardCard(zh(lang, "1RM 估算更适合低次数组", "1RM estimates work best from lower reps"), zh(lang, "很多 1RM 公式在约 1 到 10 次的训练组中更有参考价值，次数太高时误差通常会更大。", "Most 1RM formulas are more useful when the set is roughly in the 1 to 10 rep range. Error usually grows as reps get higher.")),
        standardCard(zh(lang, "它更像训练安排工具", "It is mainly a programming tool"), zh(lang, "更适合拿来安排训练百分比，而不是频繁去测试真正极限。", "Use it to set training percentages rather than to chase true maximal testing too often.")),
        standardCard(zh(lang, "什么情况下估算会偏高", "When the estimate can run high"), zh(lang, "如果那组动作已经明显变形、速度极慢或借力太多，估算值通常会偏乐观。", "If technique broke down, bar speed was very slow, or the set was very loose technically, the estimate is often too optimistic."))
      ];
    }

    if (fitnessSlugs.has(slug)) {
      return [
        standardCard(zh(lang, "更适合做训练参考", "Best used for training reference"), zh(lang, "这类运动结果更适合安排训练、比较阶段进展，而不是把单次数字当成绝对水平判断。", "Fitness outputs like this are usually better for planning training and comparing phases than for treating one number as an absolute judgment.")),
        standardCard(zh(lang, "趋势比单次更重要", "Trends matter more than one session"), zh(lang, "一次表现会受睡眠、天气、补给和疲劳影响，连续几次对比通常更可靠。", "One session can be affected by sleep, weather, fueling, and fatigue. Several comparisons are usually more reliable.")),
        standardCard(zh(lang, "过度追数字的常见问题", "A common problem with chasing numbers"), zh(lang, "如果你为了追数字而频繁高强度训练，恢复和持续性往往会先出问题。", "If you chase the number by pushing hard too often, recovery and long-term consistency usually break first."))
      ];
    }

    if (womenSlugs.has(slug)) {
      return [
        standardCard(zh(lang, "周期和经期常见参考", "Common cycle references"), zh(lang, "很多成年人常见月经周期约 21 到 35 天，经期大致 2 到 7 天。月月完全一样并不是必须条件。", "For many adults, a common cycle reference is about 21 to 35 days, with bleeding often around 2 to 7 days. Cycles do not have to look identical every month.")),
        standardCard(zh(lang, "更适合看多个周期", "Best viewed across multiple cycles"), zh(lang, "这类工具通常更适合把几个月的日期和症状放在一起看，而不是只凭单个周期下判断。", "These tools are usually more useful when several months of dates and symptoms are viewed together rather than drawing conclusions from one cycle.")),
        standardCard(zh(lang, "什么时候更该优先求助", "When to seek help sooner"), zh(lang, "如果周期长期明显异常、疼痛严重、症状强烈影响工作学习，或者孕期相关问题让你担心，就更值得尽早咨询医生。", "If cycles stay clearly unusual, pain is strong, symptoms disrupt daily life, or pregnancy-related changes are worrying, earlier medical advice is more appropriate."))
      ];
    }

    if (lifestyleSlugs.has(slug)) {
      return [
        standardCard(zh(lang, "这类工具通常没有唯一标准线", "These tools often have no single ideal cutoff"), zh(lang, "压力、精力、久坐、屏幕时间和习惯分数，更适合作为日常管理提示，而不是医学判断。", "Stress, energy, sitting time, screen time, and habit scores are usually better treated as management prompts than as medical judgments.")),
        standardCard(zh(lang, "更值得看长期模式", "Longer-term patterns matter more"), zh(lang, "如果连续几周都偏差较大，通常比偶尔一天状态差更值得重视。", "If the pattern stays poor for several weeks, it usually matters more than one bad day.")),
        standardCard(zh(lang, "先从最小可执行改变开始", "Start with the smallest workable change"), zh(lang, "与其一次想全改，不如先从睡眠、步数、吃饭规律或屏幕时间里选一个最容易坚持的点开始。", "Instead of trying to change everything at once, start with the one area that feels easiest to repeat: sleep, steps, meal rhythm, or screen-time control."))
      ];
    }

    if (bodySlugs.has(slug) || group === "health") {
      return [
        standardCard(zh(lang, "这类结果更适合配合围度和趋势", "These results work best with measurements and trends"), zh(lang, "身体数据工具通常更适合和腰围、体脂、照片或长期体重变化一起看，而不是只看单个数字。", "Body-metric tools are usually more useful when paired with waist size, body fat, photos, or longer-term weight change instead of a single number.")),
        standardCard(zh(lang, "没有一个数字能代表全部", "No single number captures everything"), zh(lang, "即使结果好看，也不代表饮食、睡眠、训练和恢复就一定都理想；反过来也一样。", "Even a favorable number does not mean nutrition, sleep, training, and recovery are automatically in a good place, and the reverse is also true.")),
        standardCard(zh(lang, "更推荐的查看节奏", "A better review rhythm"), zh(lang, "通常按周或按月复查比按天盯着更有价值，特别是体重和围度这类波动较大的数据。", "Weekly or monthly review usually works better than checking daily, especially for values like body weight and measurements that fluctuate a lot."))
      ];
    }

    return [
      standardCard(zh(lang, "先把它当作参考框架", "Treat it as a reference framework"), zh(lang, "这类工具更适合帮助你快速建立判断框架，而不是代替长期观察和专业判断。", "This kind of tool is best used to build a quick reference framework rather than replace long-term observation or professional judgment.")),
      standardCard(zh(lang, "连续观察通常更有价值", "Repeated checks are usually more useful"), zh(lang, "很多结果更适合连续记录几次后再看趋势，而不是只看一次。", "Many results are more useful when you compare several entries over time instead of focusing on one check.")),
      standardCard(zh(lang, "结果要放回生活里理解", "Interpret the result in real life"), zh(lang, "睡眠、饮食、活动量、压力、训练和个人目标，通常都会改变这个结果的意义。", "Sleep, diet, activity, stress, training, and your personal goal can all change what this result really means."))
    ];
  }

  function ensureSidebarExtra(layout) {
    if (!layout) return null;
    let stack = layout.querySelector(".sidebar-stack");
    let sidebar = layout.querySelector(".tool-sidebar");
    if (!stack && sidebar) {
      stack = document.createElement("div");
      stack.className = "sidebar-stack";
      sidebar.parentNode.insertBefore(stack, sidebar);
      stack.appendChild(sidebar);
    }
    if (!stack) return null;
    let extra = stack.querySelector("[data-sidebar-extra]");
    if (!extra) {
      extra = document.createElement("aside");
      extra.className = "panel tool-sidebar tool-sidebar-extra";
      extra.setAttribute("data-sidebar-extra", "true");
      stack.appendChild(extra);
    }
    return extra;
  }

  function pageDisplayTitle(container, lang, slug) {
    const titleNode = container.closest(".tool-panel") && container.closest(".tool-panel").querySelector("h1");
    return titleNode ? titleNode.textContent.trim() : toolLabel(lang, slug);
  }

  function genericFaqs(lang, title) {
    const current = normalizeLang(lang);
    const q1 = current === "zh" ? `${title} 准吗？` : current === "ja" ? `${title} は正確ですか？` : current === "es" ? `¿${title} es preciso?` : current === "fr" ? `Est-ce que ${title} est précis ?` : current === "de" ? `Ist ${title} genau?` : current === "pt" ? `${title} é preciso?` : current === "ru" ? `Насколько точен ${title}?` : current === "hi" ? `क्या ${title} सटीक है?` : current === "ar" ? `هل ${title} دقيق؟` : `Is the ${title} accurate?`;
    return [
      {
        q: q1,
        a: zh(lang, "它更适合做生活方式参考和趋势观察。输入越接近真实情况，结果通常越有参考价值。", "It is best used for lifestyle planning and trend tracking. The closer the inputs are to reality, the more useful the result tends to be.")
      },
      {
        q: zh(lang, "它能代替医疗建议吗？", `Should this replace medical advice?`),
        a: zh(lang, "不能。这类工具适合做日常参考，不适合代替医生的评估或诊断。", "No. Tools like this are practical references and should not replace a clinician's assessment or diagnosis.")
      },
      {
        q: zh(lang, "多久重新测一次比较好？", "How often should I check again?"),
        a: zh(lang, "如果你在主动调整饮食、睡眠或训练，通常每 2 到 4 周复查一次更容易看到趋势。", "If you are actively changing habits, checking again every 2 to 4 weeks usually works well for trend tracking.")
      },
      {
        q: zh(lang, "我应该只看这一个数字吗？", "Should I rely on this result alone?"),
        a: zh(lang, "不建议。把这个结果和你的体感、围度、训练表现、睡眠和长期变化一起看会更可靠。", "Usually not. It is better to combine this result with body feedback, measurements, performance, sleep, and long-term changes.")
      }
    ];
  }

  function renderGenericGuidance(lang, result, slug, displayTitle) {
    const group = groupMeta[toolGroup(slug)];
    const current = normalizeLang(lang);
    return `
      <div class="analysis-grid">
        <div class="mini-metric">
          <span>${zh(lang, "结果解读", "Interpretation")}</span>
          <strong>${result.summary}</strong>
        </div>
        <div class="mini-metric">
          <span>${zh(lang, "你现在可以怎么做", "Next step")}</span>
          <strong>${zh(lang, "先执行 2 到 3 周，再根据变化调整", "Apply it for 2 to 3 weeks, then adjust")}</strong>
        </div>
        <div class="mini-metric">
          <span>${zh(lang, "使用场景", "Best use")}</span>
          <strong>${normalizeLang(lang) === "zh" ? group.zhLabel : group.enLabel}</strong>
        </div>
      </div>
      <div class="info-box">
        <h3>${zh(lang, "建议与说明", "Recommendation")}</h3>
        ${result.guidance || `<p>${result.detail}</p>`}
      </div>
      <div class="tool-article-grid">
        <div class="info-box">
          <h3>${current === "zh" ? `什么是 ${displayTitle}` : current === "ja" ? `${displayTitle} とは？` : current === "es" ? `¿Qué es ${displayTitle}?` : current === "fr" ? `Qu'est-ce que ${displayTitle} ?` : current === "de" ? `Was ist ${displayTitle}?` : current === "pt" ? `O que é ${displayTitle}?` : current === "ru" ? `Что такое ${displayTitle}?` : current === "hi" ? `${displayTitle} क्या है?` : current === "ar" ? `ما هو ${displayTitle}؟` : `What is ${displayTitle}?`}</h3>
          <p>${groupWhatCopy(lang, toolGroup(slug))}</p>
        </div>
        <div class="info-box">
          <h3>${zh(lang, "如何使用这个结果", "How to use the result")}</h3>
          <p>${groupHowCopy(lang, toolGroup(slug))}</p>
        </div>
        <div class="info-box">
          <h3>${zh(lang, "正常范围怎么看", "How to read the reference range")}</h3>
          <p>${groupRangeCopy(lang, toolGroup(slug))}</p>
        </div>
      </div>
    `;
  }

  function renderGenericToolPage(container, slug, lang) {
    const tool = tools[slug];
    const displayTitle = pageDisplayTitle(container, lang, slug);
    const related = relatedTools(slug);
    const unitsEnabled = tool.units !== false;
    const faqs = genericFaqs(lang, displayTitle);

    container.innerHTML = `
      <div class="tool-page-body enhanced-tool-page">
        <section class="panel tool-panel bmi-intro-panel">
          <div class="trust-points">
            <span>${zh(lang, "免费使用", "Free & Accurate")}</span>
            <span>${zh(lang, "无需注册", "No signup required")}</span>
            <span>${zh(lang, "适合快速做日常参考", "Built for practical daily use")}</span>
          </div>
        </section>
        <section class="panel tool-panel">
          <div class="section-head">
            <h2>${zh(lang, "输入信息", "Enter your details")}</h2>
            <p>${toolHint(lang, slug)}</p>
          </div>
          <div data-generic-calculator></div>
        </section>
        <section class="panel tool-panel">
          <div class="section-head">
            <h2>${zh(lang, "计算结果", "Your result")}</h2>
            <p>${zh(lang, "完成计算后，这里会显示结果、解读和下一步建议。", "After calculation, this section shows the result, interpretation, and practical next steps.")}</p>
          </div>
          <div data-generic-result>
            <div class="result-hero">
              <span class="bmi-kicker">${zh(lang, "等待计算", "Waiting for input")}</span>
              <strong class="generic-result-value">--</strong>
              <p>${zh(lang, "先填写输入项，再查看结果说明和相关推荐。", "Fill in the inputs to unlock result guidance and related tools.")}</p>
            </div>
          </div>
        </section>
        <section class="panel tool-panel">
          <div class="section-head">
            <h2>${zh(lang, "解释模块", "Explanation")}</h2>
            <p>${zh(lang, "用更容易理解的方式说明这个工具是什么、如何计算，以及结果应当怎么用。", "This section explains what the tool does, how it works, and how to use the output.")}</p>
          </div>
          <div data-generic-guidance>${renderGenericGuidance(lang, { summary: toolLabel(lang, slug), detail: toolHint(lang, slug), guidance: `<p>${toolHint(lang, slug)}</p>` }, slug, displayTitle)}</div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "常见问题", "FAQ")}</h2>
          <div class="faq-grid">
            ${faqs.map((item) => `<article class="faq-item"><h3>${item.q}</h3><p>${item.a}</p></article>`).join("")}
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "相关推荐", "Related tools")}</h2>
          <div class="tool-links">
            ${related.map((key) => `<a href="${toolUrl(lang, key)}">${toolLabel(lang, key)}</a>`).join("")}
          </div>
        </section>
        <section class="panel tool-panel">
          <h2>${zh(lang, "更多功能", "More options")}</h2>
          <div class="hero-actions">
            <button type="button" class="button secondary">${zh(lang, "保存结果", "Save Your Result")}</button>
            <button type="button" class="button secondary">${zh(lang, "下载 PDF 报告", "Download PDF Report")}</button>
            <button type="button" class="button secondary">${zh(lang, "分享给朋友", "Share with Friends")}</button>
          </div>
        </section>
      </div>
    `;

    const calculatorMount = container.querySelector("[data-generic-calculator]");
    const resultMount = container.querySelector("[data-generic-result]");
    const guidanceMount = container.querySelector("[data-generic-guidance]");

    calculatorMount.innerHTML = `
      <form class="calculator-form">
        ${unitsEnabled ? `<label>${t(lang, "units")}<select name="units"><option value="metric">${t(lang, "metric")}</option><option value="imperial">${t(lang, "imperial")}</option></select></label>` : ""}
        <div class="field-grid" data-fields></div>
        <button type="submit">${zh(lang, "立即计算", "Calculate Now")} 🚀</button>
        <p class="fine-print">${zh(lang, "你的数据仅用于本次计算，不会被保存。", "Your data is private and not stored.")}</p>
      </form>
    `;

    const form = calculatorMount.querySelector("form");
    const fieldsBox = calculatorMount.querySelector("[data-fields]");

    function updateFields() {
      const units = unitsEnabled ? form.elements.units.value : "metric";
      fieldsBox.innerHTML = renderFields(lang, tool.fields, units);
    }

    if (unitsEnabled) {
      form.elements.units.addEventListener("change", updateFields);
    }
    updateFields();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const values = Object.fromEntries(new FormData(form).entries());
        const result = tool.compute(values, lang);
        const current = normalizeLang(lang);
        const resultDetail = current === "zh" || current === "en" ? result.detail : toolHint(lang, slug);
        const guidanceResult = current === "zh" || current === "en"
          ? result
          : {
              summary: result.summary,
              detail: resultDetail,
              guidance: `<p>${groupHowCopy(lang, toolGroup(slug))}</p>`
            };
        const visualGuide = referenceVisual(lang, slug, values);
        resultMount.innerHTML = `
          <div class="result-hero">
            <span class="bmi-kicker">${zh(lang, "核心结果", "Key result")}</span>
            <strong class="generic-result-value">${result.summary}</strong>
            <p>${resultDetail}</p>
            ${renderReferenceInsight(lang, slug, values) || visualGuide}
          </div>
          <div class="cta-strip">
            ${related.slice(0, 2).map((key) => `<a class="button secondary" href="${toolUrl(lang, key)}">${toolLabel(lang, key)}</a>`).join("")}
          </div>
        `;
        guidanceMount.innerHTML = renderGenericGuidance(lang, guidanceResult, slug, displayTitle);
      } catch (error) {
        resultMount.innerHTML = `<div class="result">${error.message}</div>`;
      }
    });
  }

  function renderToolDirectory(container, lang, group) {
    const items = Object.keys(toolCatalog).filter((slug) => group === "all" ? true : toolCatalog[slug].group === group);
    container.innerHTML = items.map((slug) => `
      <a href="${toolUrl(lang, slug)}">
        <div class="tool-card-top">
          <span class="tool-card-icon">${toolLabel(lang, slug).replace(/ Calculator| Tool| 计算器| 工具/g, "").slice(0, 3)}</span>
          <span class="tool-card-tag">${groupLabel(lang, toolCatalog[slug].group)}</span>
        </div>
        <strong>${toolLabel(lang, slug)}</strong>
        <p class="tool-card-desc">${toolHint(lang, slug)}</p>
        <span class="tool-card-link">${zh(lang, "打开工具 →", "Open tool →")}</span>
      </a>
    `).join("");
  }

  function attachCalculator(container, lang, tool) {
    const unitsEnabled = tool.units !== false;
    container.innerHTML = `
      <form class="calculator-form">
        ${unitsEnabled ? `<label>${t(lang, "units")}<select name="units"><option value="metric">${t(lang, "metric")}</option><option value="imperial">${t(lang, "imperial")}</option></select></label>` : ""}
        <div class="field-grid" data-fields></div>
        <button type="submit">${t(lang, "calculate")}</button>
        <div class="result" data-result>${zh(lang, "请先输入数据并开始计算。", tool.defaultHint)}</div>
      </form>
    `;

    const form = container.querySelector("form");
    const fieldsBox = container.querySelector("[data-fields]");
    const resultBox = container.querySelector("[data-result]");

    function updateFields() {
      const units = unitsEnabled ? form.elements.units.value : "metric";
      fieldsBox.innerHTML = renderFields(lang, tool.fields, units);
    }

    if (unitsEnabled) {
      form.elements.units.addEventListener("change", updateFields);
    }
    updateFields();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const values = Object.fromEntries(new FormData(form).entries());
        const result = tool.compute(values, lang);
        resultBox.innerHTML = `<strong>${result.summary}</strong><span>${result.detail}</span>`;
      } catch (error) {
        resultBox.textContent = error.message;
      }
    });
  }

  function attachToolPage(container, slug, lang) {
    const tool = tools[slug];
    if (!tool) return;
    localizeToolShell(container, slug, lang);
    if (slug === "bmi") {
      renderBmiPage(container, tool, lang);
      return;
    }
    renderGenericToolPage(container, slug, lang);
  }

  document.querySelectorAll("[data-calculator]").forEach((node) => {
    const lang = pageLang();
    const key = node.getAttribute("data-calculator");
    if (tools[key]) {
      attachCalculator(node, lang, tools[key]);
    }
  });

  document.querySelectorAll("[data-tool-page]").forEach((node) => {
    const lang = pageLang();
    attachToolPage(node, node.getAttribute("data-tool-page"), lang);
  });

  document.querySelectorAll("[data-tool-directory]").forEach((node) => {
    const lang = pageLang();
    renderToolDirectory(node, lang, node.getAttribute("data-tool-directory"));
  });
})();
