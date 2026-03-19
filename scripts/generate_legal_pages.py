# -*- coding: utf-8 -*-
from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
LANGS = ["zh", "en", "ja", "es", "fr", "de", "pt", "ru", "hi", "ar"]
BRAND = "Health Toolkit Lab"
DOMAIN = "https://www.healthtoolkitlab.com"
EMAIL = "mashuya29129@gmail.com"
VERSION = "20260317-16"


PAGES = {
    "zh": {
        "dir": "ltr",
        "home": "返回首页",
        "updated": "更新日期：2026年3月17日",
        "about": {
            "title": f"关于我们 | {BRAND}",
            "description": f"了解 {BRAND}：一个面向日常决策场景的计算器与信息工具站。",
            "h1": f"关于 {BRAND}",
            "lead": [
                f"欢迎访问 {BRAND}。我们致力于打造一个面向日常决策场景的计算器与信息工具站，帮助用户在健康、营养、睡眠、运动、体重管理及其他日常规划场景中，更快看清关键数字并完成初步判断。",
                "我们相信，很多复杂决策并不是因为公式难，而是因为信息分散、解释不清、比较不方便。为此，我们把常见测算场景整理成独立网页工具，并尽量配套结果说明、图表分析、常见问题与延伸阅读，让用户不只算出一个数字，还能理解数字背后的含义。",
            ],
            "sections": [
                (
                    "我们提供什么",
                    [
                        "身体数据、热量、饮食、睡眠、健身和健康生活方式相关的测算工具。",
                        "围绕体重、热量、饮水、营养分配、睡眠节律、运动表现等常见场景的独立工具页。",
                        "配套结果解读、图表、FAQ 与相关推荐，帮助用户更快做出下一步判断。",
                    ],
                ),
                (
                    "我们的内容原则",
                    [
                        "优先提供高频、实用、可解释、可重复使用的工具页面。",
                        "尽量以清晰的结构呈现结果、说明、图表和常见问题，减少理解成本。",
                        "持续更新页面内容，但不承诺所有规则、标准、研究结论或第三方数据实时同步。",
                        "尊重用户体验，努力让工具、内容与广告保持合理边界。",
                    ],
                ),
                (
                    "服务说明",
                    [
                        "本站内容主要用于信息整理、经验分享、测算参考与学习研究，不构成投资建议、税务建议、法律建议、医疗建议、贷款审批建议或任何形式的官方承诺。",
                        "对于涉及实际交易、报税、签约、借贷、医疗或其他重要事项，请以相关机构、专业人士及正式文件为准。",
                    ],
                ),
                (
                    "联系方式",
                    [
                        "如果您对本站内容、工具逻辑、版权问题或合作事宜有疑问，欢迎通过公开联系方式与我们联系。",
                        f"联系邮箱：{EMAIL}",
                    ],
                ),
            ],
        },
        "terms": {
            "title": f"使用条款 | {BRAND}",
            "description": f"{BRAND} 的使用条款。",
            "h1": "使用条款",
            "lead": [
                "访问和使用本站，即表示你理解并同意本站仅提供一般信息展示和工具测算服务。",
                "用户应自行判断页面结果是否适用于自身场景，并对基于本站信息作出的决定负责。",
            ],
            "sections": [
                (
                    "使用规则",
                    [
                        "本站保留更新、暂停或移除任意计算器页面的权利。",
                        "用户不得利用本站从事违法、侵权、抓取滥用或破坏性行为。",
                        "本站内容不构成专业投资、法律、医疗、税务或贷款建议。",
                    ],
                ),
                (
                    "结果使用说明",
                    [
                        "所有计算结果均基于用户输入、预设参数或公开常见公式自动生成，仅适合作为展示、估算、比较与辅助判断之用。",
                        "若涉及签约、报税、交易、医疗、借贷或其他重要事项，请以官方或专业机构意见为准。",
                    ],
                ),
                (
                    "知识产权",
                    [
                        "本站原创内容、页面结构、工具说明及相关视觉呈现，除另有说明外，均受适用法律保护。",
                        "未经授权，不得擅自复制、镜像、转载或用于商业用途。",
                    ],
                ),
            ],
        },
        "privacy": {
            "title": f"隐私政策 | {BRAND}",
            "description": f"{BRAND} 的隐私政策。",
            "h1": "隐私政策",
            "lead": [
                f"欢迎您访问 {BRAND}（网址：{DOMAIN}）。我们重视用户隐私，并承诺在合法、正当、必要的范围内处理与站点运行相关的数据。",
                "当您继续访问或使用本站时，即表示您已阅读并理解本隐私政策。",
            ],
            "sections": [
                (
                    "一、我们可能收集的信息",
                    [
                        "访问日志信息，例如访问时间、访问页面、来源渠道、设备类型、浏览器类型、操作系统、IP 地址、语言设置和停留时长等基础访问数据。",
                        "Cookie、本地存储或类似技术，用于记住语言偏好、改善页面体验、统计访问表现及辅助广告展示。",
                        "您主动提交的信息，例如通过联系方式页发送给我们的邮箱内容、咨询信息或反馈内容。",
                    ],
                ),
                (
                    "二、我们如何使用这些信息",
                    [
                        "保障站点正常运行，提升页面性能、兼容性和访问稳定性。",
                        "记住您选择的语言、地区或其他基础偏好设置，优化后续使用体验。",
                        "统计页面访问表现，用于分析受欢迎内容、改进工具结构与内容布局。",
                        "在站点接入广告服务时，用于广告展示、频次控制和广告效果衡量。",
                        "响应您主动发起的咨询、建议、反馈或版权投诉。",
                    ],
                ),
                (
                    "三、关于 Cookie 与本地存储",
                    [
                        "本站可能会使用 Cookie、本地存储或类似技术保存必要的偏好信息，例如语言选择、地区识别结果或基础访问行为统计。",
                        "您可以通过浏览器设置清除、限制或拒绝 Cookie，但部分功能在关闭相关技术后可能无法保持最优体验。",
                    ],
                ),
                (
                    "四、广告与第三方服务",
                    [
                        "本站可能接入第三方广告与统计服务，例如 Google AdSense、Google Search Console、Bing Webmaster Tools、百度统计或其他类似服务。",
                        "对于第三方服务如何处理数据，请以其各自的隐私政策和服务条款为准。本站无法控制第三方平台的数据处理方式。",
                    ],
                ),
                (
                    "五、外部链接与嵌入内容",
                    [
                        "本站部分页面可能包含指向第三方网站的链接，或展示来自第三方平台的嵌入内容。",
                        "对于第三方网站的隐私实践、安全性或内容准确性，本站不承担责任。",
                    ],
                ),
                (
                    "六、信息保留与安全",
                    [
                        "我们会在实现本政策所述目的所需的合理期限内保留相关数据，并采取合理措施防止数据被未经授权访问、披露、篡改或丢失。",
                        "但互联网传输和存储无法保证绝对安全，您理解并接受相关风险的客观存在。",
                    ],
                ),
                (
                    "七、您的权利",
                    [
                        "对于您主动提供给我们的联系信息或反馈内容，您可以通过公开联系方式联系我们，要求查询、更正或删除在合理范围内可处理的信息。",
                        "对于 Cookie 与本地存储，您也可以自行通过浏览器设置进行控制或清除。",
                    ],
                ),
                (
                    "八、未成年人说明",
                    [
                        "本站主要面向具备独立判断能力的普通互联网用户。若未成年人使用本站，应在监护人指导下访问和理解相关内容。"
                    ],
                ),
                (
                    "九、政策更新",
                    [
                        "我们可能会根据站点功能、法律要求或第三方服务变化对本政策进行更新。更新后的版本将发布在本页面，并以页面显示的更新时间为准。"
                    ],
                ),
            ],
        },
        "disclaimer": {
            "title": f"免责声明 | {BRAND}",
            "description": f"{BRAND} 的免责声明。",
            "h1": "免责声明",
            "lead": [
                f"欢迎您访问 {BRAND}（{DOMAIN}）。在您浏览和使用本站前，请仔细阅读以下免责声明内容。",
                "您一旦访问、浏览或使用本站，即表示您已阅读、理解并同意受本声明约束。",
            ],
            "sections": [
                (
                    "一、信息与工具内容说明",
                    [
                        "本站展示的内容，包括但不限于文章、说明文字、图表、计算器工具、公式演示、结果估算、经验性建议及相关页面信息，仅用于信息分享、学习参考与初步测算。",
                        "上述内容不构成任何形式的投资建议、税务建议、法律建议、医疗建议、贷款审批建议或官方指导意见。",
                    ],
                ),
                (
                    "二、工具结果说明",
                    [
                        "本站的热量、营养、睡眠、运动、BMI 及其他计算器结果，均基于用户输入信息、预设参数或通用公式自动生成，仅适合作为演示、估算、比较与辅助判断之用。",
                        "实际结果可能因标准变化、个体差异、地区规则、数据更新时间或输入条件不同而产生差异。",
                    ],
                ),
                (
                    "三、版权声明",
                    [
                        "本站原创内容的著作权归本站所有。未经明确授权，任何单位或个人不得擅自转载、复制、修改、传播或用于商业用途。"
                    ],
                ),
                (
                    "四、外部链接说明",
                    [
                        "本站可能包含指向第三方网站、平台、产品页面或外部服务的链接，仅为用户提供更多参考信息或使用便利。",
                        "对于第三方网站的内容准确性、合法性、可用性、安全性、隐私政策及后续服务，本站不作任何保证，也不承担任何责任。",
                    ],
                ),
                (
                    "五、广告与推广说明",
                    [
                        "本站部分页面可能展示由第三方广告平台、联盟平台或合作方提供的广告、推广信息、赞助内容或推荐模块。",
                        "相关内容由相应提供方负责，其真实性、合法性、有效性及后续履约责任应由相关主体自行承担。",
                    ],
                ),
                (
                    "六、责任限制",
                    [
                        "对于因用户依据本站内容或工具结果作出的个人决策、政策变动、市场变化、数据延迟、第三方接口问题、输入错误或理解偏差所导致的任何后果，本站在法律允许范围内不承担责任。"
                    ],
                ),
                (
                    "七、最终解释与更新",
                    [
                        "本站有权根据业务调整、法律要求或站点功能变化，对本免责声明进行更新或修订。更新后的版本自发布之日起生效。"
                    ],
                ),
            ],
        },
        "contact": {
            "title": f"联系我们 | {BRAND}",
            "description": f"联系 {BRAND}。",
            "h1": "联系我们",
            "lead": [
                "如果您对本站内容、工具逻辑、版权问题、合作事宜或页面建议有疑问，欢迎通过下列方式联系我们。",
                "我们会在合理范围内持续优化站点体验与内容质量。",
            ],
            "sections": [
                (
                    "联系方式",
                    [
                        f"联系邮箱：{EMAIL}",
                        f"网站名称：{BRAND}",
                        f"网站地址：{DOMAIN}",
                    ],
                ),
                (
                    "适合联系的事项",
                    [
                        "内容反馈与错误更正",
                        "版权投诉与引用说明",
                        "商务合作与广告咨询",
                        "工具逻辑建议与用户体验问题",
                    ],
                ),
            ],
        },
    },
    "en": {
        "dir": "ltr",
        "home": "Back to home",
        "updated": "Last updated: March 17, 2026",
        "about": {
            "title": f"About | {BRAND}",
            "description": f"Learn more about {BRAND}, a calculator and information hub for everyday decision-making.",
            "h1": f"About {BRAND}",
            "lead": [
                f"Welcome to {BRAND}. We are building a calculator and information hub designed for everyday decision-making, helping people understand key numbers faster across health, nutrition, sleep, fitness, weight management, and practical planning scenarios.",
                "We believe many decisions feel difficult not because the formulas are hard, but because the information is scattered, the explanations are unclear, and comparisons are inconvenient. That is why we organize common scenarios into dedicated tool pages with result explanations, charts, FAQs, and related reading.",
            ],
            "sections": [
                (
                    "What We Provide",
                    [
                        "Independent tools for body metrics, calories, nutrition, hydration, sleep, training, and lifestyle planning.",
                        "Result interpretation, chart-based context, FAQs, and related tools that help users move from a number to an informed next step.",
                        "A multilingual experience designed to reduce friction for global users.",
                    ],
                ),
                (
                    "Our Content Principles",
                    [
                        "We prioritize high-frequency, practical, explainable, and reusable tool pages.",
                        "We try to present results, explanations, charts, and FAQs in a clear structure that lowers interpretation cost.",
                        "We continue updating content, but we do not guarantee that every rule, standard, research conclusion, or third-party dataset is perfectly real-time.",
                        "We respect user experience and aim to keep clear boundaries between tools, content, and advertising.",
                    ],
                ),
                (
                    "Service Notice",
                    [
                        "This website is provided for information organization, educational use, general reference, and scenario-based estimation.",
                        "Nothing on this website constitutes investment, tax, legal, medical, lending, or other professional advice. For important real-world decisions, please rely on qualified professionals, official institutions, and formal documents.",
                    ],
                ),
                ("Contact", [f"For questions about site content, tool logic, copyright issues, or partnerships, please contact us at {EMAIL}."]),
            ],
        },
        "terms": {
            "title": f"Terms of Use | {BRAND}",
            "description": f"Terms of use for {BRAND}.",
            "h1": "Terms of Use",
            "lead": [
                "By accessing or using this website, you understand and agree that the site provides general informational content and calculator-based estimation tools only.",
                "You are responsible for deciding whether any page result is suitable for your own situation and for any decisions made based on site content.",
            ],
            "sections": [
                (
                    "Usage Rules",
                    [
                        "We reserve the right to update, suspend, or remove any calculator page at any time.",
                        "You may not use this website for unlawful, infringing, abusive, or destructive activity.",
                        "Site content does not constitute professional investment, legal, medical, tax, or lending advice.",
                    ],
                ),
                (
                    "How to Use Results",
                    [
                        "All calculator outputs are generated automatically from user inputs, preset parameters, or common public formulas and should be used for illustration, estimation, comparison, and general guidance only.",
                        "If a matter involves contracts, taxes, transactions, medical care, lending, or other important obligations, you should rely on official or professional guidance.",
                    ],
                ),
                (
                    "Intellectual Property",
                    [
                        "Original site content, page structures, tool explanations, and visual presentation are protected by applicable law unless otherwise stated.",
                        "Unauthorized copying, mirroring, republication, or commercial use is not permitted.",
                    ],
                ),
            ],
        },
        "privacy": {
            "title": f"Privacy Policy | {BRAND}",
            "description": f"Privacy policy for {BRAND}.",
            "h1": "Privacy Policy",
            "lead": [
                f"Welcome to {BRAND} ({DOMAIN}). We value user privacy and process website-related data only within lawful, proper, and necessary boundaries.",
                "By continuing to access or use this site, you confirm that you have read and understood this privacy policy.",
            ],
            "sections": [
                (
                    "1. Information We May Collect",
                    [
                        "Basic access log data such as visit time, page views, referral sources, device type, browser type, operating system, IP address, language settings, and session duration.",
                        "Cookies, local storage, or similar technologies used to remember language preferences, improve page experience, analyze usage, and support advertising display.",
                        "Information you choose to send us voluntarily, such as messages, inquiries, or feedback sent through a public contact address.",
                    ],
                ),
                (
                    "2. How We Use This Information",
                    [
                        "To keep the website running properly and improve performance, compatibility, and stability.",
                        "To remember your selected language, region, or other basic preferences for a smoother return experience.",
                        "To analyze site performance and improve tool structure, page layout, and content priorities.",
                        "To support ad display, frequency control, and ad effectiveness measurement when advertising services are enabled.",
                        "To respond to your inquiries, feedback, suggestions, or copyright complaints.",
                    ],
                ),
                (
                    "3. Cookies and Local Storage",
                    [
                        "This site may use cookies, local storage, or similar technologies to store necessary preference information such as language selection, region detection, and basic usage statistics.",
                        "You may clear, limit, or refuse cookies through your browser settings, but some functions may not work optimally if these technologies are disabled.",
                    ],
                ),
                (
                    "4. Advertising and Third-Party Services",
                    [
                        "This site may use third-party advertising or analytics services such as Google AdSense, Google Search Console, Bing Webmaster Tools, Baidu Analytics, or similar services.",
                        "Please refer to the privacy policies and service terms of those third parties for how they handle data. We do not control their data processing practices.",
                    ],
                ),
                (
                    "5. External Links and Embedded Content",
                    [
                        "Some pages may include links to third-party websites or embedded content from external platforms.",
                        "Once you click or visit those resources, you may be subject to the policies of the relevant third party. We are not responsible for their privacy practices, security, or content accuracy.",
                    ],
                ),
                (
                    "6. Data Retention and Security",
                    [
                        "We retain relevant data only for a reasonable period needed to fulfill the purposes described in this policy and take reasonable measures to prevent unauthorized access, disclosure, alteration, or loss.",
                        "However, internet transmission and storage cannot be guaranteed to be absolutely secure, and you acknowledge that objective risk exists.",
                    ],
                ),
                (
                    "7. Your Rights",
                    [
                        "For contact information or feedback you voluntarily provide, you may contact us through our public contact address to request access, correction, or deletion where reasonably applicable.",
                        "You can also manage or clear cookies and local storage through your browser settings.",
                    ],
                ),
                ("8. Minors", ["This site is intended for ordinary internet users who can make independent judgments. If minors use this site, they should do so under the guidance of a parent or guardian."]),
                ("9. Policy Updates", ["We may update this policy in response to site functions, legal requirements, or third-party service changes. The updated version will be posted on this page and the date shown on the page will control."]),
            ],
        },
        "disclaimer": {
            "title": f"Disclaimer | {BRAND}",
            "description": f"Disclaimer for {BRAND}.",
            "h1": "Disclaimer",
            "lead": [
                f"Welcome to {BRAND} ({DOMAIN}). Please read the following disclaimer carefully before browsing or using this website.",
                "By accessing, browsing, or using this site, you confirm that you have read, understood, and agreed to this disclaimer.",
            ],
            "sections": [
                (
                    "1. Information and Tool Content",
                    [
                        "Content on this website, including articles, explanatory text, charts, calculators, formula demonstrations, estimated results, and general suggestions, is provided for information sharing, learning reference, and preliminary estimation only.",
                        "Nothing on this site constitutes investment, tax, legal, medical, lending, or official guidance.",
                    ],
                ),
                (
                    "2. Calculator Results",
                    [
                        "Outputs from calorie, nutrition, sleep, fitness, BMI, and other calculators are generated automatically from user inputs, preset parameters, or general formulas and should be treated as demonstrations, estimates, comparisons, and decision aids only.",
                        "Actual results may differ due to standards, individual conditions, regional rules, data update timing, rounding methods, or input assumptions.",
                    ],
                ),
                ("3. Copyright", ["Original site content is owned by this website unless otherwise stated. No person or organization may reproduce, copy, modify, republish, or use it commercially without clear authorization."]),
                (
                    "4. External Links",
                    [
                        "This site may include links to third-party websites, platforms, product pages, or external services for convenience or additional reference.",
                        "We make no guarantee regarding the legality, accuracy, availability, security, privacy practices, or follow-up services of those third-party resources.",
                    ],
                ),
                (
                    "5. Advertising and Promotions",
                    [
                        "Some pages may display advertising, sponsored content, affiliate modules, or promotional information provided by third parties.",
                        "Those materials are the responsibility of the relevant provider, including their truthfulness, legality, effectiveness, and follow-up performance.",
                    ],
                ),
                ("6. Limitation of Liability", ["To the fullest extent permitted by law, this site is not responsible for consequences arising from personal decisions, policy changes, market changes, delayed data, third-party service issues, incorrect inputs, or interpretation differences related to site content or tool outputs."]),
                ("7. Updates", ["We may revise this disclaimer in response to business changes, legal requirements, or site feature updates. Updated versions take effect once published."]),
            ],
        },
        "contact": {
            "title": f"Contact | {BRAND}",
            "description": f"Contact {BRAND}.",
            "h1": "Contact",
            "lead": [
                "If you have questions about site content, tool logic, copyright issues, partnerships, or page suggestions, please contact us using the details below.",
                "We will continue improving site quality and user experience within a reasonable scope.",
            ],
            "sections": [
                ("Contact Details", [f"Email: {EMAIL}", f"Website name: {BRAND}", f"Website: {DOMAIN}"]),
                ("Suitable Topics", ["Content feedback and corrections", "Copyright and citation requests", "Business cooperation and advertising inquiries", "Tool logic suggestions and user experience issues"]),
            ],
        },
    },
}

CLONES = {
    "ja": {
        "dir": "ltr",
        "home": "ホームへ戻る",
        "updated": "更新日: 2026年3月17日",
        "titles": {"about": "運営情報", "terms": "利用規約", "privacy": "プライバシーポリシー", "disclaimer": "免責事項", "contact": "お問い合わせ"},
        "content": {
            "about": {
                "lead": [f"{BRAND} へようこそ。日々の意思決定に役立つ計算ツールと情報ページをまとめ、健康、栄養、睡眠、運動、体重管理などの場面で重要な数値をすばやく把握できるようにしています。", "難しいのは数式そのものより、情報が散らばり、説明が分かりにくく、比較しづらいことです。そのため、私たちは各テーマを独立したツールページに整理し、結果の解説、FAQ、関連ページをあわせて提供しています。"],
                "sections": [("私たちが提供するもの", ["身体指標、カロリー、栄養、水分、睡眠、トレーニング、生活習慣に関する独立ツール。", "結果の見方、FAQ、関連ツールをセットで提示し、次の行動につなげやすくします。"]), ("コンテンツ方針", ["高頻度で実用的、説明可能で再利用しやすいページを優先します。", "内容は継続的に更新しますが、すべての基準や第三者データの完全なリアルタイム性は保証しません。", "広告、コンテンツ、ツールの境界をできるだけ明確に保ちます。"]), ("サービスに関する説明", ["本サイトは情報整理、学習参考、一般的な試算のためのものであり、投資、税務、法律、医療、融資等の専門助言ではありません。"]), ("連絡先", [f"著作権、提携、内容に関するお問い合わせ: {EMAIL}"])],
            },
            "terms": {
                "lead": ["本サイトを利用することで、一般情報と計算ツールのみを提供するサイトであることを理解し、同意したものとみなします。", "各結果が自分の状況に適するかどうかは利用者自身が判断してください。"],
                "sections": [("利用ルール", ["当サイトは任意の計算ページを更新、停止、削除する権利を留保します。", "違法行為、権利侵害、破壊的行為に利用してはいけません。", "内容は投資、法律、医療、税務、融資に関する専門助言ではありません。"]), ("結果の利用について", ["すべての結果は入力値、既定パラメータ、一般式に基づく自動計算であり、参考・比較・補助判断用です。"]), ("知的財産", ["サイトのオリジナル文章、構成、説明、表示は法的保護の対象です。無断複製や商用利用はできません。"])],
            },
            "privacy": {
                "lead": [f"{BRAND}（{DOMAIN}）へようこそ。私たちは、サイト運営に必要な範囲でのみデータを取り扱います。", "本サイトを利用することで、本ポリシーを読み理解したものとみなします。"],
                "sections": [("1. 収集する可能性のある情報", ["アクセス時間、閲覧ページ、参照元、端末種別、ブラウザ、OS、IP、言語設定、滞在時間などの基本ログ。", "言語設定や表示改善、利用分析、広告表示補助のための Cookie やローカル保存。", "お問い合わせ時に自発的に送信された情報。"]), ("2. 利用目的", ["サイト運営、表示安定性、互換性の向上。", "言語や地域設定の記憶。", "人気ページ分析と構成改善。", "広告表示や効果測定。", "お問い合わせ対応。"]), ("3. Cookie とローカル保存", ["必要な設定保存のため Cookie や類似技術を利用する場合があります。ブラウザ設定で削除や制限が可能ですが、一部機能に影響する場合があります。"]), ("4. 第三者サービス", ["Google AdSense、Search Console、Bing Webmaster Tools などの第三者サービスを利用する場合があります。データ処理は各サービスのポリシーに従います。"]), ("5. 外部リンク", ["第三者サイトのリンクや埋め込み先について、当サイトはそのプライバシーや安全性を保証しません。"]), ("6. 保持と安全", ["合理的な期間だけ保持し、合理的な安全対策を講じますが、インターネット上の絶対的安全性は保証できません。"]), ("7. 利用者の権利", ["自発的に送信した連絡情報については、合理的範囲で照会、訂正、削除を依頼できます。"]), ("8. 未成年者", ["未成年者は保護者の指導の下で利用してください。"]), ("9. 更新", ["本ポリシーは必要に応じて更新され、このページの更新日が基準になります。"])],
            },
            "disclaimer": {
                "lead": [f"{BRAND}（{DOMAIN}）をご利用になる前に、以下の免責事項をご確認ください。", "本サイトを利用した時点で、本声明に同意したものとみなします。"],
                "sections": [("1. 情報とツールについて", ["記事、説明文、図表、計算ツール、推定結果は情報共有と初期判断のためのものです。", "投資、税務、法律、医療、融資等の正式助言ではありません。"]), ("2. 計算結果について", ["各結果は入力値や一般式に基づく自動計算であり、参考・比較・補助判断用です。実際の結果は条件差により異なります。"]), ("3. 著作権", ["オリジナルコンテンツの著作権は当サイトに帰属します。無断転載や商用利用はできません。"]), ("4. 外部リンク", ["第三者サイトやサービスの正確性、安全性、プライバシーについて当サイトは責任を負いません。"]), ("5. 広告とプロモーション", ["広告や提携情報の内容と履行責任は各提供者が負います。"]), ("6. 責任制限", ["本サイトの内容や結果に基づく判断によって生じた結果について、法令上許される範囲で責任を負いません。"]), ("7. 更新", ["本免責事項は必要に応じて修訂され、公表時点から効力を持ちます。"])],
            },
            "contact": {
                "lead": ["コンテンツ、ツール仕様、著作権、提携、改善提案については下記までご連絡ください。", "合理的な範囲で品質向上を継続します。"],
                "sections": [("連絡先", [f"メール: {EMAIL}", f"サイト名: {BRAND}", f"URL: {DOMAIN}"]), ("お問い合わせ内容の例", ["内容の誤り報告", "著作権・引用に関する相談", "広告・提携の相談", "ツールロジックやUX改善提案"])],
            },
        },
    },
}


def add_clone(lang, home, updated, titles, content, direction="ltr"):
    PAGES[lang] = {"dir": direction, "home": home, "updated": updated}
    for slug in ["about", "terms", "privacy", "disclaimer", "contact"]:
        PAGES[lang][slug] = {
            "title": f"{titles[slug]} | {BRAND}",
            "description": f"{titles[slug]} | {BRAND}",
            "h1": titles[slug],
            "lead": content[slug]["lead"],
            "sections": content[slug]["sections"],
        }


for code, meta in CLONES.items():
    add_clone(code, meta["home"], meta["updated"], meta["titles"], meta["content"], meta["dir"])


SHORT_TRANSLATIONS = {
    "es": {
        "dir": "ltr",
        "home": "Volver al inicio",
        "updated": "Actualizado: 17 de marzo de 2026",
        "titles": {"about": "Acerca de", "terms": "Términos de uso", "privacy": "Política de privacidad", "disclaimer": "Aviso legal", "contact": "Contacto"},
        "content": {
            "about": {"lead": [f"Bienvenido a {BRAND}. Reunimos calculadoras y páginas informativas para ayudar a los usuarios a entender números clave en salud, nutrición, sueño, ejercicio y control del peso.", "Muchas decisiones parecen difíciles no por la fórmula, sino porque la información está dispersa y mal explicada. Por eso organizamos cada escenario en páginas independientes con explicaciones, preguntas frecuentes y herramientas relacionadas."], "sections": [("Qué ofrecemos", ["Herramientas para métricas corporales, calorías, nutrición, hidratación, sueño, entrenamiento y estilo de vida.", "Explicación de resultados, FAQ y enlaces relacionados para facilitar el siguiente paso."]), ("Nuestros principios", ["Priorizamos páginas prácticas, reutilizables y fáciles de explicar.", "Actualizamos el contenido de forma continua, pero no garantizamos sincronización perfecta en tiempo real con todas las normas o datos externos.", "Buscamos mantener límites razonables entre herramientas, contenido y publicidad."]), ("Aviso de servicio", ["El sitio se ofrece para organización de información, aprendizaje y estimaciones generales. No constituye asesoramiento profesional."]), ("Contacto", [f"Consultas sobre contenido, derechos o colaboración: {EMAIL}"])]},
            "terms": {"lead": ["Al acceder o usar este sitio, aceptas que solo proporciona información general y herramientas de cálculo.", "Debes decidir por tu cuenta si los resultados son adecuados para tu situación."], "sections": [("Reglas de uso", ["Podemos actualizar, suspender o eliminar cualquier calculadora en cualquier momento.", "No puedes usar este sitio para actividades ilegales, infractoras o destructivas.", "El contenido no constituye asesoramiento profesional."]), ("Uso de resultados", ["Los resultados se generan automáticamente y sirven solo como estimación, comparación y referencia."]), ("Propiedad intelectual", ["El contenido original y la estructura del sitio están protegidos; no se permite copia o uso comercial no autorizado."])]},
            "privacy": {"lead": [f"Bienvenido a {BRAND} ({DOMAIN}). Valoramos la privacidad y tratamos los datos del sitio solo dentro de límites legales y necesarios.", "Al seguir usando el sitio, confirmas que has leído esta política."], "sections": [("1. Información que podemos recopilar", ["Datos básicos de acceso, como hora, páginas visitadas, dispositivo, navegador, sistema operativo, IP, idioma y duración.", "Cookies o almacenamiento local para recordar idioma, mejorar la experiencia y medir uso o anuncios.", "Información enviada voluntariamente en mensajes o comentarios."]), ("2. Cómo usamos la información", ["Mantener el sitio funcionando y mejorar compatibilidad y estabilidad.", "Recordar idioma o preferencias básicas.", "Analizar rendimiento y mejorar estructura y contenido.", "Medir publicidad y responder consultas."]), ("3. Cookies y almacenamiento local", ["Puedes limitar o eliminar estas tecnologías desde tu navegador, aunque algunas funciones podrían verse afectadas."]), ("4. Servicios de terceros", ["Podemos usar servicios externos de analítica o publicidad; su tratamiento de datos se rige por sus propias políticas."]), ("5. Enlaces externos", ["No somos responsables de las prácticas de privacidad ni de la seguridad de sitios externos."]), ("6. Conservación y seguridad", ["Conservamos los datos solo el tiempo razonable y aplicamos medidas de seguridad razonables."]), ("7. Tus derechos", ["Puedes solicitar acceso, corrección o eliminación de la información que nos hayas enviado voluntariamente."]), ("8. Menores", ["Los menores deberían usar este sitio con orientación de un tutor."]), ("9. Actualizaciones", ["Esta política puede actualizarse y la fecha mostrada en la página será la referencia."])]},
            "disclaimer": {"lead": [f"Antes de usar {BRAND} ({DOMAIN}), lee este aviso legal.", "Al usar el sitio, aceptas este contenido."], "sections": [("1. Contenido informativo", ["Los artículos, gráficos y calculadoras son solo para información, aprendizaje y estimación inicial.", "No constituyen asesoramiento profesional oficial."]), ("2. Resultados de herramientas", ["Los resultados son automáticos y pueden diferir de la realidad por normas, datos o condiciones individuales."]), ("3. Derechos de autor", ["El contenido original pertenece al sitio y no puede reutilizarse comercialmente sin permiso."]), ("4. Enlaces externos", ["No garantizamos exactitud, legalidad, seguridad ni servicios de terceros."]), ("5. Publicidad", ["La publicidad o promoción de terceros es responsabilidad de sus respectivos proveedores."]), ("6. Limitación de responsabilidad", ["No asumimos responsabilidad por decisiones tomadas con base en este sitio dentro del máximo permitido por la ley."]), ("7. Actualizaciones", ["Podemos revisar este aviso en cualquier momento."])]},
            "contact": {"lead": ["Si tienes dudas sobre contenido, lógica de herramientas, derechos de autor o cooperación, puedes escribirnos.", "Seguiremos mejorando la experiencia del sitio dentro de un alcance razonable."], "sections": [("Datos de contacto", [f"Correo: {EMAIL}", f"Nombre del sitio: {BRAND}", f"Sitio web: {DOMAIN}"]), ("Temas adecuados", ["Correcciones y feedback", "Consultas de copyright", "Cooperación comercial y publicidad", "Sugerencias de lógica y experiencia"])]},
        },
    },
    "fr": {
        "dir": "ltr",
        "home": "Retour à l’accueil",
        "updated": "Mise à jour: 17 mars 2026",
        "titles": {"about": "À propos", "terms": "Conditions d’utilisation", "privacy": "Politique de confidentialité", "disclaimer": "Clause de non-responsabilité", "contact": "Contact"},
        "content": {
            "about": {"lead": [f"Bienvenue sur {BRAND}. Nous réunissons des calculateurs et des pages d’information pour aider les utilisateurs à comprendre plus vite les chiffres clés liés à la santé, à la nutrition, au sommeil, à l’activité physique et à la gestion du poids.", "Beaucoup de décisions semblent complexes non pas à cause de la formule, mais parce que l’information est dispersée et difficile à comparer. Nous organisons donc ces scénarios dans des pages dédiées avec explications, FAQ et outils liés."], "sections": [("Ce que nous proposons", ["Des outils pour les mesures corporelles, les calories, la nutrition, l’hydratation, le sommeil, l’entraînement et le mode de vie.", "Des explications de résultats, des FAQ et des liens liés pour faciliter la suite."]), ("Nos principes", ["Nous privilégions des pages pratiques, réutilisables et faciles à comprendre.", "Nous mettons le contenu à jour régulièrement, sans garantir une synchronisation parfaite en temps réel avec toutes les règles ou données tierces.", "Nous cherchons à maintenir une frontière claire entre outils, contenu et publicité."]), ("Avis de service", ["Le site est fourni à des fins d’information, d’apprentissage et d’estimation générale. Il ne constitue pas un conseil professionnel."]), ("Contact", [f"Questions sur le contenu, les droits ou la coopération : {EMAIL}"])]},
            "terms": {"lead": ["En utilisant ce site, vous acceptez qu’il fournisse uniquement des informations générales et des outils de calcul.", "Vous devez déterminer vous-même si les résultats sont adaptés à votre situation."], "sections": [("Règles d’utilisation", ["Nous pouvons mettre à jour, suspendre ou supprimer toute calculatrice à tout moment.", "Toute utilisation illégale, intrusive ou destructrice est interdite.", "Le contenu ne constitue pas un conseil professionnel."]), ("Utilisation des résultats", ["Les résultats sont générés automatiquement et servent uniquement à l’estimation, à la comparaison et à la référence."]), ("Propriété intellectuelle", ["Le contenu original et la structure du site sont protégés ; toute copie ou utilisation commerciale non autorisée est interdite."])]},
            "privacy": {"lead": [f"Bienvenue sur {BRAND} ({DOMAIN}). Nous accordons de l’importance à la vie privée et traitons les données du site uniquement dans des limites légales et nécessaires.", "En continuant à utiliser ce site, vous confirmez avoir lu cette politique."], "sections": [("1. Informations collectées", ["Données de visite de base : heure, pages, appareil, navigateur, système, IP, langue et durée.", "Cookies ou stockage local pour mémoriser la langue, améliorer l’expérience et mesurer l’usage ou la publicité.", "Informations que vous nous envoyez volontairement."]), ("2. Utilisation des informations", ["Assurer le bon fonctionnement du site et améliorer sa stabilité.", "Mémoriser la langue et les préférences de base.", "Analyser les performances et améliorer la structure du site.", "Gérer la publicité et répondre aux demandes."]), ("3. Cookies et stockage local", ["Vous pouvez les limiter via votre navigateur, mais certaines fonctions peuvent être affectées."]), ("4. Services tiers", ["Des services externes d’analyse ou de publicité peuvent être utilisés et appliquent leurs propres règles."]), ("5. Liens externes", ["Nous ne sommes pas responsables des pratiques de confidentialité ou de la sécurité de sites externes."]), ("6. Conservation et sécurité", ["Les données sont conservées pendant une durée raisonnable et protégées par des mesures raisonnables."]), ("7. Vos droits", ["Vous pouvez demander l’accès, la correction ou la suppression des informations que vous avez fournies volontairement."]), ("8. Mineurs", ["Les mineurs devraient utiliser ce site sous la supervision d’un responsable."]), ("9. Mises à jour", ["Cette politique peut être modifiée ; la date affichée sur la page fait foi."])]},
            "disclaimer": {"lead": [f"Avant d’utiliser {BRAND} ({DOMAIN}), veuillez lire cette clause de non-responsabilité.", "En utilisant le site, vous acceptez cette clause."], "sections": [("1. Contenu informatif", ["Les articles, graphiques et calculateurs sont fournis à titre d’information, d’apprentissage et d’estimation préliminaire.", "Ils ne constituent pas un conseil professionnel officiel."]), ("2. Résultats des outils", ["Les résultats sont automatiques et peuvent différer de la réalité selon les règles, les données ou les conditions individuelles."]), ("3. Droit d’auteur", ["Le contenu original appartient au site et ne peut être réutilisé commercialement sans autorisation."]), ("4. Liens externes", ["Nous ne garantissons ni l’exactitude ni la sécurité ni la légalité des ressources tierces."]), ("5. Publicité", ["Les contenus promotionnels tiers relèvent de la responsabilité de leurs fournisseurs."]), ("6. Limitation de responsabilité", ["Nous ne sommes pas responsables des décisions prises sur la base du site dans les limites autorisées par la loi."]), ("7. Mises à jour", ["Cette clause peut être révisée à tout moment."])]},
            "contact": {"lead": ["Pour toute question concernant le contenu, la logique des outils, le droit d’auteur ou la coopération, vous pouvez nous écrire.", "Nous continuerons à améliorer le site dans une mesure raisonnable."], "sections": [("Coordonnées", [f"E-mail : {EMAIL}", f"Nom du site : {BRAND}", f"Site : {DOMAIN}"]), ("Sujets appropriés", ["Retours et corrections", "Demandes liées au copyright", "Coopération commerciale et publicité", "Suggestions sur la logique des outils et l’expérience"])]},
        },
    },
    "de": {
        "dir": "ltr",
        "home": "Zur Startseite",
        "updated": "Aktualisiert: 17. März 2026",
        "titles": {"about": "Über uns", "terms": "Nutzungsbedingungen", "privacy": "Datenschutz", "disclaimer": "Haftungsausschluss", "contact": "Kontakt"},
        "content": {
            "about": {"lead": [f"Willkommen bei {BRAND}. Wir bündeln Rechner und Informationsseiten, damit Nutzer wichtige Zahlen zu Gesundheit, Ernährung, Schlaf, Bewegung und Gewichtsmanagement schneller verstehen können.", "Viele Entscheidungen wirken kompliziert, nicht wegen der Formel, sondern wegen verstreuter Informationen und unklarer Erklärungen. Deshalb ordnen wir typische Szenarien in eigenständigen Seiten mit Erläuterungen, FAQ und verwandten Tools."], "sections": [("Was wir anbieten", ["Tools für Körperwerte, Kalorien, Ernährung, Flüssigkeit, Schlaf, Training und Lebensstil.", "Ergebnis-Erklärungen, FAQ und verwandte Links für den nächsten Schritt."]), ("Unsere Grundsätze", ["Wir priorisieren praktische, wiederverwendbare und gut erklärbare Seiten.", "Wir aktualisieren Inhalte laufend, garantieren aber keine perfekte Echtzeit-Synchronität aller Regeln oder Fremddaten.", "Wir achten auf klare Grenzen zwischen Tools, Inhalten und Werbung."]), ("Servicehinweis", ["Die Website dient Informationszwecken, dem Lernen und allgemeinen Schätzungen. Sie ist keine professionelle Beratung."]), ("Kontakt", [f"Fragen zu Inhalten, Rechten oder Kooperation: {EMAIL}"])]},
            "terms": {"lead": ["Mit der Nutzung dieser Website stimmen Sie zu, dass sie nur allgemeine Informationen und Berechnungstools bereitstellt.", "Sie müssen selbst beurteilen, ob Ergebnisse zu Ihrer Situation passen."], "sections": [("Nutzungsregeln", ["Wir können jede Rechnerseite jederzeit aktualisieren, pausieren oder entfernen.", "Rechtswidrige, verletzende oder destruktive Nutzung ist untersagt.", "Die Inhalte stellen keine professionelle Beratung dar."]), ("Nutzung der Ergebnisse", ["Ergebnisse werden automatisch erzeugt und dienen nur der Schätzung, dem Vergleich und der Orientierung."]), ("Geistiges Eigentum", ["Originalinhalte und Seitenstruktur sind geschützt; unautorisierte Kopien oder kommerzielle Nutzung sind nicht erlaubt."])]},
            "privacy": {"lead": [f"Willkommen bei {BRAND} ({DOMAIN}). Wir achten auf Datenschutz und verarbeiten Seitendaten nur im rechtmäßigen und erforderlichen Rahmen.", "Mit weiterer Nutzung bestätigen Sie, diese Richtlinie gelesen zu haben."], "sections": [("1. Welche Informationen wir erfassen können", ["Grundlegende Zugriffsdaten wie Zeit, Seitenaufrufe, Gerät, Browser, System, IP, Sprache und Dauer.", "Cookies oder lokaler Speicher für Sprache, Nutzungskomfort und Analyse.", "Freiwillig übermittelte Nachrichten oder Rückmeldungen."]), ("2. Wie wir diese Informationen nutzen", ["Betrieb und Stabilität der Website verbessern.", "Sprache und Grundpräferenzen speichern.", "Leistung analysieren und Inhalte verbessern.", "Werbung messen und Anfragen beantworten."]), ("3. Cookies und lokaler Speicher", ["Sie können diese Technologien im Browser einschränken; einige Funktionen könnten dann beeinträchtigt sein."]), ("4. Drittanbieter-Dienste", ["Es können externe Analyse- oder Werbedienste verwendet werden, die eigenen Richtlinien folgen."]), ("5. Externe Links", ["Für Datenschutz oder Sicherheit externer Seiten sind wir nicht verantwortlich."]), ("6. Aufbewahrung und Sicherheit", ["Daten werden nur angemessen lange gespeichert und mit angemessenen Maßnahmen geschützt."]), ("7. Ihre Rechte", ["Für freiwillig bereitgestellte Informationen können Sie Zugang, Korrektur oder Löschung anfragen."]), ("8. Minderjährige", ["Minderjährige sollten die Website unter Aufsicht nutzen."]), ("9. Aktualisierungen", ["Diese Richtlinie kann aktualisiert werden; maßgeblich ist das Datum auf dieser Seite."])]},
            "disclaimer": {"lead": [f"Bitte lesen Sie diesen Haftungsausschluss, bevor Sie {BRAND} ({DOMAIN}) nutzen.", "Mit Nutzung der Website stimmen Sie diesem Hinweis zu."], "sections": [("1. Informationscharakter", ["Artikel, Grafiken und Rechner dienen nur der Information, dem Lernen und einer ersten Schätzung.", "Sie sind keine offizielle professionelle Beratung."]), ("2. Rechnerergebnisse", ["Ergebnisse werden automatisch erzeugt und können wegen Regeln, Daten oder individueller Bedingungen abweichen."]), ("3. Urheberrecht", ["Originalinhalte gehören der Website und dürfen ohne Erlaubnis nicht kommerziell genutzt werden."]), ("4. Externe Links", ["Für Richtigkeit, Sicherheit oder Rechtmäßigkeit externer Ressourcen übernehmen wir keine Gewähr."]), ("5. Werbung", ["Werbeinhalte Dritter liegen in der Verantwortung der jeweiligen Anbieter."]), ("6. Haftungsbegrenzung", ["Für Entscheidungen auf Basis der Website übernehmen wir im gesetzlich zulässigen Rahmen keine Haftung."]), ("7. Aktualisierungen", ["Dieser Haftungsausschluss kann jederzeit geändert werden."])]},
            "contact": {"lead": ["Bei Fragen zu Inhalt, Tool-Logik, Urheberrecht oder Kooperation können Sie uns schreiben.", "Wir verbessern die Website in angemessenem Umfang fortlaufend."], "sections": [("Kontaktangaben", [f"E-Mail: {EMAIL}", f"Website-Name: {BRAND}", f"Website: {DOMAIN}"]), ("Geeignete Themen", ["Feedback und Korrekturen", "Urheberrechtsanfragen", "Werbung und Kooperation", "Vorschläge zur Tool-Logik und Nutzererfahrung"])]},
        },
    },
    "pt": {
        "dir": "ltr",
        "home": "Voltar ao início",
        "updated": "Atualizado em 17 de março de 2026",
        "titles": {"about": "Sobre", "terms": "Termos de uso", "privacy": "Política de privacidade", "disclaimer": "Aviso legal", "contact": "Contato"},
        "content": {
            "about": {"lead": [f"Bem-vindo ao {BRAND}. Reunimos calculadoras e páginas informativas para ajudar os usuários a entender números importantes em saúde, nutrição, sono, exercício e controle de peso.", "Muitas decisões parecem difíceis não por causa da fórmula, mas porque a informação está dispersa e mal explicada. Por isso organizamos cenários comuns em páginas próprias com explicações, FAQ e ferramentas relacionadas."], "sections": [("O que oferecemos", ["Ferramentas para medidas corporais, calorias, nutrição, hidratação, sono, treino e estilo de vida.", "Explicações de resultados, FAQ e links relacionados para facilitar o próximo passo."]), ("Nossos princípios", ["Priorizamos páginas práticas, reutilizáveis e fáceis de explicar.", "Atualizamos o conteúdo continuamente, mas não garantimos sincronização perfeita em tempo real com todas as regras ou dados externos.", "Buscamos manter limites claros entre ferramentas, conteúdo e publicidade."]), ("Aviso de serviço", ["O site é fornecido para organização de informação, aprendizado e estimativas gerais. Não constitui aconselhamento profissional."]), ("Contato", [f"Dúvidas sobre conteúdo, direitos ou parcerias: {EMAIL}"])]},
            "terms": {"lead": ["Ao acessar este site, você concorda que ele fornece apenas informações gerais e ferramentas de cálculo.", "Cabe ao usuário decidir se os resultados se aplicam à sua situação."], "sections": [("Regras de uso", ["Podemos atualizar, suspender ou remover qualquer calculadora a qualquer momento.", "Não é permitido uso ilegal, infrator ou destrutivo.", "O conteúdo não constitui aconselhamento profissional."]), ("Uso dos resultados", ["Os resultados são gerados automaticamente e servem apenas como estimativa, comparação e referência."]), ("Propriedade intelectual", ["O conteúdo original e a estrutura do site são protegidos; não é permitida cópia ou uso comercial sem autorização."])]},
            "privacy": {"lead": [f"Bem-vindo ao {BRAND} ({DOMAIN}). Valorizamos a privacidade e tratamos dados do site apenas dentro de limites legais e necessários.", "Ao continuar usando o site, você confirma que leu esta política."], "sections": [("1. Informações que podemos coletar", ["Dados básicos de acesso, como horário, páginas, dispositivo, navegador, sistema, IP, idioma e duração.", "Cookies ou armazenamento local para idioma, experiência, análise e anúncios.", "Informações enviadas voluntariamente em mensagens ou feedbacks."]), ("2. Como usamos as informações", ["Manter o site funcionando e melhorar estabilidade e compatibilidade.", "Lembrar idioma e preferências básicas.", "Analisar desempenho e melhorar estrutura e conteúdo.", "Mensurar publicidade e responder contatos."]), ("3. Cookies e armazenamento local", ["Você pode limitar essas tecnologias no navegador, mas algumas funções podem ser afetadas."]), ("4. Serviços de terceiros", ["Serviços externos de análise ou publicidade podem ser usados e seguem suas próprias políticas."]), ("5. Links externos", ["Não somos responsáveis pela privacidade ou segurança de sites externos."]), ("6. Retenção e segurança", ["Os dados são mantidos por período razoável e protegidos com medidas razoáveis."]), ("7. Seus direitos", ["Você pode solicitar acesso, correção ou exclusão das informações enviadas voluntariamente."]), ("8. Menores", ["Menores devem usar o site com orientação de um responsável."]), ("9. Atualizações", ["Esta política pode ser atualizada; a data exibida na página será a referência."])]},
            "disclaimer": {"lead": [f"Antes de usar {BRAND} ({DOMAIN}), leia este aviso legal.", "Ao usar o site, você concorda com este conteúdo."], "sections": [("1. Conteúdo informativo", ["Artigos, gráficos e calculadoras são apenas para informação, aprendizado e estimativa inicial.", "Não constituem aconselhamento profissional oficial."]), ("2. Resultados das ferramentas", ["Os resultados são automáticos e podem diferir da realidade devido a regras, dados ou condições individuais."]), ("3. Direitos autorais", ["O conteúdo original pertence ao site e não pode ser reutilizado comercialmente sem autorização."]), ("4. Links externos", ["Não garantimos exatidão, segurança ou legalidade de recursos de terceiros."]), ("5. Publicidade", ["Conteúdos promocionais de terceiros são responsabilidade de seus fornecedores."]), ("6. Limitação de responsabilidade", ["Não assumimos responsabilidade por decisões tomadas com base no site dentro do permitido por lei."]), ("7. Atualizações", ["Este aviso pode ser revisado a qualquer momento."])]},
            "contact": {"lead": ["Se você tiver dúvidas sobre conteúdo, lógica das ferramentas, direitos autorais ou cooperação, pode nos escrever.", "Continuaremos melhorando o site dentro de um escopo razoável."], "sections": [("Detalhes de contato", [f"E-mail: {EMAIL}", f"Nome do site: {BRAND}", f"Site: {DOMAIN}"]), ("Assuntos adequados", ["Feedback e correções", "Questões de copyright", "Cooperação comercial e publicidade", "Sugestões sobre lógica e experiência"])]},
        },
    },
    "ru": {
        "dir": "ltr",
        "home": "На главную",
        "updated": "Обновлено: 17 марта 2026 г.",
        "titles": {"about": "О сайте", "terms": "Условия использования", "privacy": "Политика конфиденциальности", "disclaimer": "Отказ от ответственности", "contact": "Контакты"},
        "content": {
            "about": {"lead": [f"Добро пожаловать в {BRAND}. Мы собрали калькуляторы и информационные страницы, чтобы пользователи быстрее понимали важные числа, связанные со здоровьем, питанием, сном, физической активностью и контролем веса.", "Многие решения кажутся сложными не из-за формулы, а из-за разрозненной информации и неясных объяснений. Поэтому мы оформляем типичные сценарии в отдельные страницы с пояснениями, FAQ и связанными инструментами."], "sections": [("Что мы предлагаем", ["Инструменты для показателей тела, калорий, питания, гидратации, сна, тренировок и образа жизни.", "Пояснения результатов, FAQ и связанные ссылки для следующего шага."]), ("Наши принципы", ["Мы отдаём приоритет практичным, повторно используемым и понятным страницам.", "Мы обновляем контент, но не гарантируем идеальную синхронизацию всех правил или внешних данных в реальном времени.", "Мы стараемся сохранять разумные границы между инструментами, контентом и рекламой."]), ("Сервисное примечание", ["Сайт предназначен для информационных целей, обучения и общих оценок. Он не является профессиональной консультацией."]), ("Контакты", [f"Вопросы по контенту, правам или сотрудничеству: {EMAIL}"])]},
            "terms": {"lead": ["Используя этот сайт, вы соглашаетесь с тем, что он предоставляет только общую информацию и расчётные инструменты.", "Пользователь самостоятельно оценивает применимость результатов к своей ситуации."], "sections": [("Правила использования", ["Мы можем в любое время обновить, приостановить или удалить любую страницу калькулятора.", "Запрещено незаконное, нарушающее права или разрушительное использование.", "Содержимое не является профессиональной консультацией."]), ("Использование результатов", ["Результаты формируются автоматически и служат только для оценки, сравнения и справочной информации."]), ("Интеллектуальная собственность", ["Оригинальный контент и структура сайта защищены; копирование и коммерческое использование без разрешения запрещены."])]},
            "privacy": {"lead": [f"Добро пожаловать в {BRAND} ({DOMAIN}). Мы уважаем конфиденциальность и обрабатываем данные сайта только в законных и необходимых пределах.", "Продолжая пользоваться сайтом, вы подтверждаете, что прочитали эту политику."], "sections": [("1. Какие данные мы можем собирать", ["Базовые данные доступа: время, страницы, устройство, браузер, система, IP, язык и продолжительность.", "Cookie или локальное хранилище для языка, удобства использования, аналитики и рекламы.", "Информация, добровольно отправленная вами в сообщениях или обратной связи."]), ("2. Как мы используем информацию", ["Поддержка работы сайта и повышение стабильности.", "Запоминание языка и базовых настроек.", "Анализ эффективности и улучшение структуры и контента.", "Измерение рекламы и ответы на обращения."]), ("3. Cookie и локальное хранилище", ["Вы можете ограничить эти технологии через браузер, но часть функций может работать хуже."]), ("4. Сторонние сервисы", ["Могут использоваться внешние аналитические и рекламные сервисы со своими правилами обработки данных."]), ("5. Внешние ссылки", ["Мы не отвечаем за конфиденциальность и безопасность внешних сайтов."]), ("6. Хранение и безопасность", ["Данные хранятся разумный срок и защищаются разумными мерами."]), ("7. Ваши права", ["Вы можете запросить доступ, исправление или удаление добровольно переданной информации."]), ("8. Несовершеннолетние", ["Несовершеннолетним следует использовать сайт под контролем взрослого."]), ("9. Обновления", ["Политика может обновляться; ориентируйтесь на дату на странице."])]},
            "disclaimer": {"lead": [f"Перед использованием {BRAND} ({DOMAIN}) ознакомьтесь с этим отказом от ответственности.", "Используя сайт, вы соглашаетесь с данным текстом."], "sections": [("1. Информационный характер", ["Статьи, графики и калькуляторы предоставляются только для информации, обучения и предварительной оценки.", "Это не официальная профессиональная рекомендация."]), ("2. Результаты инструментов", ["Результаты формируются автоматически и могут отличаться от реальности из-за правил, данных или индивидуальных условий."]), ("3. Авторские права", ["Оригинальный контент принадлежит сайту и не может использоваться в коммерческих целях без разрешения."]), ("4. Внешние ссылки", ["Мы не гарантируем точность, безопасность или законность сторонних ресурсов."]), ("5. Реклама", ["Промоматериалы третьих лиц находятся в зоне ответственности соответствующих поставщиков."]), ("6. Ограничение ответственности", ["Мы не несём ответственности за решения, принятые на основе сайта, в максимально допустимых законом пределах."]), ("7. Обновления", ["Этот документ может пересматриваться в любое время."])]},
            "contact": {"lead": ["Если у вас есть вопросы по контенту, логике инструментов, авторским правам или сотрудничеству, вы можете написать нам.", "Мы будем продолжать улучшать сайт в разумных пределах."], "sections": [("Контакты", [f"E-mail: {EMAIL}", f"Название сайта: {BRAND}", f"Сайт: {DOMAIN}"]), ("Подходящие темы", ["Обратная связь и исправления", "Вопросы по авторским правам", "Реклама и партнёрство", "Предложения по логике инструментов и UX"])]},
        },
    },
    "hi": {
        "dir": "ltr",
        "home": "मुखपृष्ठ पर लौटें",
        "updated": "अपडेट: 17 मार्च 2026",
        "titles": {"about": "हमारे बारे में", "terms": "उपयोग की शर्तें", "privacy": "गोपनीयता नीति", "disclaimer": "अस्वीकरण", "contact": "संपर्क"},
        "content": {
            "about": {"lead": [f"{BRAND} में आपका स्वागत है। हम कैलकुलेटर और जानकारी वाले पेज एक जगह लाते हैं ताकि उपयोगकर्ता स्वास्थ्य, पोषण, नींद, व्यायाम और वजन प्रबंधन से जुड़े महत्वपूर्ण नंबर जल्दी समझ सकें।", "कई फैसले इसलिए कठिन लगते हैं क्योंकि जानकारी बिखरी हुई होती है और तुलना आसान नहीं होती। इसलिए हम सामान्य परिदृश्यों को अलग-अलग टूल पेज में समझ, FAQ और संबंधित लिंक के साथ प्रस्तुत करते हैं।"], "sections": [("हम क्या प्रदान करते हैं", ["शारीरिक माप, कैलोरी, पोषण, पानी, नींद, ट्रेनिंग और जीवनशैली से जुड़े टूल।", "परिणाम की व्याख्या, FAQ और संबंधित टूल ताकि अगला कदम आसान हो।"]), ("हमारे सिद्धांत", ["हम उपयोगी, दोबारा इस्तेमाल योग्य और आसानी से समझ आने वाले पेज को प्राथमिकता देते हैं।", "हम सामग्री अपडेट करते हैं, लेकिन हर नियम या बाहरी डेटा के पूरी तरह रियल-टाइम होने की गारंटी नहीं देते।", "हम टूल, सामग्री और विज्ञापन के बीच उचित सीमा बनाए रखने की कोशिश करते हैं।"]), ("सेवा सूचना", ["यह साइट जानकारी, सीखने और सामान्य अनुमान के लिए है। यह पेशेवर सलाह नहीं है।"]), ("संपर्क", [f"सामग्री, अधिकार या सहयोग से जुड़े प्रश्न: {EMAIL}"])]},
            "terms": {"lead": ["इस साइट का उपयोग करके आप सहमत होते हैं कि यह केवल सामान्य जानकारी और कैलकुलेशन टूल प्रदान करती है।", "किसी भी परिणाम को अपनी स्थिति के लिए उपयुक्त मानना या न मानना आपकी जिम्मेदारी है।"], "sections": [("उपयोग नियम", ["हम किसी भी कैलकुलेटर पेज को अपडेट, रोक या हटाने का अधिकार रखते हैं।", "गैरकानूनी, उल्लंघनकारी या विनाशकारी उपयोग की अनुमति नहीं है।", "साइट की सामग्री पेशेवर सलाह नहीं है।"]), ("परिणामों का उपयोग", ["सभी परिणाम स्वचालित रूप से बनते हैं और केवल अनुमान, तुलना और संदर्भ के लिए हैं।"]), ("बौद्धिक संपदा", ["मूल सामग्री और साइट संरचना संरक्षित हैं; बिना अनुमति कॉपी या व्यावसायिक उपयोग नहीं किया जा सकता।"])]},
            "privacy": {"lead": [f"{BRAND} ({DOMAIN}) में आपका स्वागत है। हम गोपनीयता का सम्मान करते हैं और केवल कानूनी व आवश्यक सीमा में ही साइट डेटा का उपयोग करते हैं।", "साइट का उपयोग जारी रखकर आप इस नीति को पढ़ने और समझने की पुष्टि करते हैं।"], "sections": [("1. हम कौन-सी जानकारी एकत्र कर सकते हैं", ["बुनियादी एक्सेस डेटा जैसे समय, पेज, डिवाइस, ब्राउज़र, सिस्टम, IP, भाषा और अवधि।", "भाषा, अनुभव, विश्लेषण और विज्ञापन के लिए कुकी या लोकल स्टोरेज।", "आपके द्वारा स्वेच्छा से भेजे गए संदेश या प्रतिक्रिया।"]), ("2. हम जानकारी का उपयोग कैसे करते हैं", ["साइट को चलाने और स्थिरता सुधारने के लिए।", "भाषा और बुनियादी प्राथमिकताएँ याद रखने के लिए।", "प्रदर्शन विश्लेषण और संरचना सुधारने के लिए।", "विज्ञापन मापन और जवाब देने के लिए।"]), ("3. कुकी और लोकल स्टोरेज", ["आप इन्हें ब्राउज़र से सीमित कर सकते हैं, लेकिन कुछ सुविधाएँ प्रभावित हो सकती हैं।"]), ("4. तृतीय-पक्ष सेवाएँ", ["बाहरी विज्ञापन या विश्लेषण सेवाएँ उपयोग हो सकती हैं और उनकी अपनी नीतियाँ लागू होंगी।"]), ("5. बाहरी लिंक", ["बाहरी साइटों की गोपनीयता या सुरक्षा के लिए हम जिम्मेदार नहीं हैं।"]), ("6. डेटा संरक्षण और सुरक्षा", ["डेटा उचित समय तक रखा जाता है और उचित सुरक्षा उपाय लागू किए जाते हैं।"]), ("7. आपके अधिकार", ["आप स्वेच्छा से भेजी गई जानकारी के लिए एक्सेस, सुधार या हटाने का अनुरोध कर सकते हैं।"]), ("8. नाबालिग", ["नाबालिगों को अभिभावक के मार्गदर्शन में साइट का उपयोग करना चाहिए।"]), ("9. नीति अपडेट", ["यह नीति समय-समय पर अपडेट हो सकती है; पेज पर दी गई तारीख मान्य होगी।"])]},
            "disclaimer": {"lead": [f"{BRAND} ({DOMAIN}) का उपयोग करने से पहले यह अस्वीकरण पढ़ें।", "साइट का उपयोग करके आप इस कथन से सहमत होते हैं।"], "sections": [("1. सूचनात्मक सामग्री", ["लेख, चार्ट और कैलकुलेटर केवल जानकारी, सीखने और शुरुआती अनुमान के लिए हैं।", "ये कोई आधिकारिक पेशेवर सलाह नहीं हैं।"]), ("2. टूल परिणाम", ["परिणाम स्वचालित होते हैं और नियम, डेटा या व्यक्तिगत स्थिति के कारण वास्तविकता से अलग हो सकते हैं।"]), ("3. कॉपीराइट", ["मूल सामग्री साइट की है और बिना अनुमति व्यावसायिक उपयोग नहीं किया जा सकता।"]), ("4. बाहरी लिंक", ["हम तीसरे पक्ष के संसाधनों की सटीकता, सुरक्षा या वैधता की गारंटी नहीं देते।"]), ("5. विज्ञापन", ["तीसरे पक्ष की प्रचार सामग्री के लिए संबंधित प्रदाता जिम्मेदार हैं।"]), ("6. दायित्व सीमा", ["कानून द्वारा अनुमत सीमा तक, साइट के आधार पर लिए गए निर्णयों के लिए हम जिम्मेदार नहीं हैं।"]), ("7. अपडेट", ["यह अस्वीकरण समय-समय पर संशोधित किया जा सकता है।"])]},
            "contact": {"lead": ["यदि आपको सामग्री, टूल लॉजिक, कॉपीराइट या सहयोग के बारे में प्रश्न हों, तो आप हमें लिख सकते हैं।", "हम उचित सीमा में साइट की गुणवत्ता बेहतर करते रहेंगे।"], "sections": [("संपर्क विवरण", [f"ईमेल: {EMAIL}", f"साइट का नाम: {BRAND}", f"वेबसाइट: {DOMAIN}"]), ("उपयुक्त विषय", ["फीडबैक और सुधार", "कॉपीराइट संबंधी प्रश्न", "व्यावसायिक सहयोग और विज्ञापन", "टूल लॉजिक और उपयोग अनुभव संबंधी सुझाव"])]},
        },
    },
    "ar": {
        "dir": "rtl",
        "home": "العودة إلى الرئيسية",
        "updated": "تاريخ التحديث: 17 مارس 2026",
        "titles": {"about": "من نحن", "terms": "شروط الاستخدام", "privacy": "سياسة الخصوصية", "disclaimer": "إخلاء المسؤولية", "contact": "اتصل بنا"},
        "content": {
            "about": {"lead": [f"مرحبًا بك في {BRAND}. نجمع أدوات الحساب وصفحات المعلومات في مكان واحد لمساعدة المستخدمين على فهم الأرقام المهمة بسرعة في مجالات الصحة والتغذية والنوم والرياضة وإدارة الوزن.", "كثير من القرارات تبدو معقدة ليس بسبب المعادلة نفسها، بل لأن المعلومات متفرقة وصعبة المقارنة. لذلك ننظم السيناريوهات الشائعة في صفحات مستقلة مع شرح وFAQ وروابط ذات صلة."], "sections": [("ما الذي نقدمه", ["أدوات لمقاييس الجسم والسعرات والتغذية والترطيب والنوم والتمرين ونمط الحياة.", "شرح للنتائج وأسئلة شائعة وروابط ذات صلة لتسهيل الخطوة التالية."]), ("مبادئ المحتوى", ["نركز على الصفحات العملية القابلة لإعادة الاستخدام وسهلة الفهم.", "نحدّث المحتوى باستمرار، لكننا لا نضمن تزامنًا لحظيًا كاملًا لكل القواعد أو البيانات الخارجية.", "نحافظ على حدود معقولة بين الأدوات والمحتوى والإعلانات."]), ("بيان الخدمة", ["يُقدَّم هذا الموقع لأغراض المعلومات والتعلّم والتقدير العام، وليس نصيحة مهنية متخصصة."]), ("التواصل", [f"للاستفسارات حول المحتوى أو الحقوق أو التعاون: {EMAIL}"])]},
            "terms": {"lead": ["باستخدام هذا الموقع، فإنك توافق على أنه يقدّم معلومات عامة وأدوات حساب فقط.", "تقع على عاتقك مسؤولية تقييم مدى ملاءمة النتائج لوضعك الخاص."], "sections": [("قواعد الاستخدام", ["نحتفظ بحق تحديث أو إيقاف أو إزالة أي أداة في أي وقت.", "يُمنع استخدام الموقع في أي نشاط غير قانوني أو اعتدائي أو تخريبي.", "المحتوى لا يشكّل نصيحة مهنية متخصصة."]), ("استخدام النتائج", ["تُنشأ النتائج تلقائيًا وتُستخدم فقط للتقدير والمقارنة والاسترشاد."]), ("الملكية الفكرية", ["المحتوى الأصلي وبنية الموقع محميان، ولا يجوز النسخ أو الاستخدام التجاري دون إذن."])]},
            "privacy": {"lead": [f"مرحبًا بك في {BRAND} ({DOMAIN}). نحن نحترم الخصوصية ونعالج بيانات الموقع فقط في الحدود القانونية والضرورية.", "باستمرارك في استخدام الموقع، فإنك تؤكد أنك قرأت هذه السياسة وفهمتها."], "sections": [("1. المعلومات التي قد نجمعها", ["بيانات دخول أساسية مثل وقت الزيارة والصفحات والجهاز والمتصفح والنظام وIP واللغة والمدة.", "ملفات تعريف الارتباط أو التخزين المحلي لحفظ اللغة وتحسين التجربة والقياس والإعلانات.", "المعلومات التي ترسلها إلينا طوعًا في الرسائل أو الملاحظات."]), ("2. كيف نستخدم هذه المعلومات", ["تشغيل الموقع وتحسين الاستقرار والتوافق.", "تذكر اللغة والتفضيلات الأساسية.", "تحليل الأداء وتحسين الهيكل والمحتوى.", "قياس الإعلانات والرد على الاستفسارات."]), ("3. ملفات الارتباط والتخزين المحلي", ["يمكنك تقييد هذه التقنيات من خلال المتصفح، لكن بعض الوظائف قد تتأثر."]), ("4. خدمات الطرف الثالث", ["قد نستخدم خدمات خارجية للإحصاءات أو الإعلانات، وتخضع هذه الخدمات لسياساتها الخاصة."]), ("5. الروابط الخارجية", ["لسنا مسؤولين عن ممارسات الخصوصية أو الأمان في المواقع الخارجية."]), ("6. الاحتفاظ بالبيانات والأمان", ["نحتفظ بالبيانات لفترة معقولة ونتخذ إجراءات أمنية معقولة."]), ("7. حقوقك", ["يمكنك طلب الوصول إلى المعلومات التي أرسلتها طوعًا أو تصحيحها أو حذفها."]), ("8. القاصرون", ["يجب أن يستخدم القاصرون الموقع تحت إشراف ولي أمر."]), ("9. تحديث السياسة", ["قد يتم تحديث هذه السياسة ويكون التاريخ الظاهر في الصفحة هو المرجع."])]},
            "disclaimer": {"lead": [f"قبل استخدام {BRAND} ({DOMAIN})، يرجى قراءة إخلاء المسؤولية هذا.", "باستخدامك للموقع فإنك توافق على هذا البيان."], "sections": [("1. طبيعة المحتوى", ["المقالات والرسوم البيانية والأدوات مقدمة لأغراض المعلومات والتعلّم والتقدير الأولي فقط.", "ولا تشكّل نصيحة مهنية رسمية."]), ("2. نتائج الأدوات", ["النتائج تُنشأ تلقائيًا وقد تختلف عن الواقع بسبب القواعد أو البيانات أو الظروف الفردية."]), ("3. حقوق النشر", ["المحتوى الأصلي مملوك للموقع ولا يجوز استخدامه تجاريًا دون إذن."]), ("4. الروابط الخارجية", ["لا نضمن دقة أو أمان أو قانونية موارد الطرف الثالث."]), ("5. الإعلانات", ["المحتوى الترويجي من طرف ثالث يقع ضمن مسؤولية مزوديه."]), ("6. حدود المسؤولية", ["في الحدود التي يسمح بها القانون، لا نتحمل المسؤولية عن القرارات المبنية على هذا الموقع."]), ("7. التحديثات", ["يجوز تعديل هذا الإخلاء عند الحاجة."])]},
            "contact": {"lead": ["إذا كانت لديك أسئلة حول المحتوى أو منطق الأدوات أو حقوق النشر أو التعاون، يمكنك مراسلتنا.", "سنواصل تحسين جودة الموقع ضمن نطاق معقول."], "sections": [("بيانات التواصل", [f"البريد الإلكتروني: {EMAIL}", f"اسم الموقع: {BRAND}", f"الموقع: {DOMAIN}"]), ("موضوعات مناسبة للتواصل", ["ملاحظات وتصحيحات", "استفسارات حقوق النشر", "التعاون التجاري والإعلانات", "اقتراحات منطق الأدوات وتجربة الاستخدام"])]},
        },
    },
}

for code, meta in SHORT_TRANSLATIONS.items():
    add_clone(code, meta["home"], meta["updated"], meta["titles"], meta["content"], meta["dir"])


def render_page(lang, slug, data):
    body = [
        '    <main class="shell section-wrap">',
        '      <section class="legal panel">',
        f"        <h1>{escape(data['h1'])}</h1>",
    ]
    for item in data["lead"]:
        body.append(f"        <p>{escape(item)}</p>")
    for heading, items in data["sections"]:
        body.append('        <section class="legal-section">')
        body.append(f"          <h2>{escape(heading)}</h2>")
        body.append("          <ul>")
        for item in items:
            body.append(f"            <li>{escape(item)}</li>")
        body.append("          </ul>")
        body.append("        </section>")
    body.append(f'        <p class="legal-updated">{escape(PAGES[lang]["updated"])}</p>')
    body.append(f'        <p><a href="/{lang}/">{escape(PAGES[lang]["home"])}</a></p>')
    body.append("      </section>")
    body.append("    </main>")
    return "\n".join(
        [
            "<!doctype html>",
            f'<html lang="{lang}" dir="{PAGES[lang]["dir"]}">',
            "  <head>",
            '    <meta charset="utf-8">',
            '    <meta name="viewport" content="width=device-width, initial-scale=1">',
            f"    <title>{escape(data['title'])}</title>",
            f'    <meta name="description" content="{escape(data["description"])}">',
            '    <meta name="robots" content="index,follow">',
            f'    <link rel="canonical" href="{DOMAIN}/{lang}/{slug}.html">',
            f'    <link rel="stylesheet" href="/assets/styles.css?v={VERSION}">',
            "  </head>",
            "  <body>",
            *body,
            f'    <script src="/assets/site.js?v={VERSION}"></script>',
            "  </body>",
            "</html>",
            "",
        ]
    )


for lang in LANGS:
    for slug in ["about", "terms", "privacy", "disclaimer", "contact"]:
        target = ROOT / lang / f"{slug}.html"
        target.write_text(render_page(lang, slug, PAGES[lang][slug]), encoding="utf-8")

for html in ROOT.rglob("*.html"):
    text = html.read_text(encoding="utf-8")
    text = text.replace("v=20260317-14", VERSION)
    html.write_text(text, encoding="utf-8")

print("generated", len(LANGS) * 5, "pages")
