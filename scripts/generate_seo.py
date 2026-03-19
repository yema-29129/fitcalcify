import json
import re
from datetime import date
from pathlib import Path
from typing import Optional

ROOT = Path(__file__).resolve().parent.parent
DOMAIN = "https://fitcalcify.com"
VERSION = "20260319-33"
TODAY = date(2026, 3, 17).isoformat()
BAIDU_ANALYTICS_SNIPPET = """<script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?8a3923317915e8601c56fa31b5f16316";
      hm.async = true;
      hm.setAttribute("data-baidu-analytics", "true");
      var s = document.getElementsByTagName("script")[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(hm, s);
      } else {
        document.head.appendChild(hm);
      }
    })();
    </script>"""

LANGS = {
    "en": {"html": "en", "locale": "en_US", "site_name": "Health Toolkit Lab"},
    "zh": {"html": "zh-Hans", "locale": "zh_CN", "site_name": "Health Toolkit Lab"},
    "es": {"html": "es", "locale": "es_ES", "site_name": "Health Toolkit Lab"},
    "fr": {"html": "fr", "locale": "fr_FR", "site_name": "Health Toolkit Lab"},
    "de": {"html": "de", "locale": "de_DE", "site_name": "Health Toolkit Lab"},
    "pt": {"html": "pt", "locale": "pt_BR", "site_name": "Health Toolkit Lab"},
    "ru": {"html": "ru", "locale": "ru_RU", "site_name": "Health Toolkit Lab"},
    "hi": {"html": "hi", "locale": "hi_IN", "site_name": "Health Toolkit Lab"},
    "ja": {"html": "ja", "locale": "ja_JP", "site_name": "Health Toolkit Lab"},
    "ar": {"html": "ar", "locale": "ar_AR", "site_name": "Health Toolkit Lab"},
    "zh-Hans": {"html": "zh-Hans", "locale": "zh_CN", "site_name": "Health Toolkit Lab"},
}

LANG_FOLDERS = ["en", "zh", "es", "fr", "de", "pt", "ru", "hi", "ja", "ar", "zh-Hans"]
INDEXABLE_LANGS = ["en", "zh", "es", "fr", "de", "pt", "ru", "hi", "ja", "ar"]
ROOT_DUPLICATES = {"about.html", "privacy.html", "terms.html", "disclaimer.html", "contact.html"}

GROUP_KEYWORDS = {
    "calculators": {
        "en": ["health calculator", "wellness calculator", "body metrics", "nutrition", "sleep", "fitness"],
        "zh": ["健康计算器", "健康工具", "身体数据", "营养", "睡眠", "健身"],
        "es": ["calculadora de salud", "herramientas de bienestar", "nutrición", "sueño", "fitness"],
        "fr": ["calculateur santé", "outils bien-être", "nutrition", "sommeil", "fitness"],
        "de": ["Gesundheitsrechner", "Wellness-Tools", "Ernährung", "Schlaf", "Fitness"],
        "pt": ["calculadora de saúde", "ferramentas de bem-estar", "nutrição", "sono", "fitness"],
        "ru": ["калькулятор здоровья", "инструменты здоровья", "питание", "сон", "фитнес"],
        "hi": ["हेल्थ कैलकुलेटर", "वेलनेस टूल", "पोषण", "नींद", "फिटनेस"],
        "ja": ["健康計算ツール", "健康ツール", "栄養", "睡眠", "運動"],
        "ar": ["حاسبة صحية", "أدوات الصحة", "التغذية", "النوم", "اللياقة"],
    },
    "womens-health-tools": {
        "en": ["women's health tools", "period calculator", "ovulation calculator", "pregnancy week calculator"],
        "zh": ["女性健康工具", "经期计算器", "排卵日计算器", "孕周计算器"],
        "es": ["salud femenina", "calculadora de ovulación", "calculadora del período"],
        "fr": ["santé féminine", "calculateur d'ovulation", "calculateur des règles"],
        "de": ["Frauengesundheit", "Ovulationsrechner", "Periodenrechner"],
        "pt": ["saúde feminina", "calculadora de ovulação", "calculadora menstrual"],
        "ru": ["женское здоровье", "калькулятор овуляции", "калькулятор цикла"],
        "hi": ["महिला स्वास्थ्य", "पीरियड कैलकुलेटर", "ओव्यूलेशन कैलकुलेटर"],
        "ja": ["女性の健康", "月経計算ツール", "排卵日計算ツール"],
        "ar": ["صحة المرأة", "حاسبة الدورة", "حاسبة الإباضة"],
    },
}

SPECIAL_PAGE_KEYWORDS = {
    "tdee-meal-planner.html": {
        "en": ["TDEE meal planner", "daily meal planner", "TDEE food split", "meal plan by calories", "daily food portions"],
        "zh": ["TDEE 饮食分配", "每日饮食规划", "按热量分配三餐", "TDEE 食谱规划", "每日食物份量"],
        "es": ["planificador de comidas TDEE", "reparto diario de comidas", "plan de comidas por calorías"],
        "fr": ["planificateur de repas TDEE", "répartition des repas", "plan alimentaire selon calories"],
        "de": ["TDEE Ernährungsplaner", "tägliche Mahlzeitenplanung", "Ernährung nach Kalorien"],
        "pt": ["planejador alimentar TDEE", "divisão diária de refeições", "plano alimentar por calorias"],
        "ru": ["планировщик питания TDEE", "распределение еды на день", "питание по калориям"],
        "hi": ["TDEE भोजन योजना", "दैनिक भोजन विभाजन", "कैलोरी आधारित भोजन योजना"],
        "ja": ["TDEE 食事配分", "1日の食事計画", "カロリー別食事プラン"],
        "ar": ["مخطط وجبات TDEE", "توزيع الطعام اليومي", "خطة غذائية حسب السعرات"],
    }
}


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def extract_tag(text: str, pattern: str, default: str = "") -> str:
    match = re.search(pattern, text, flags=re.I | re.S)
    return match.group(1).strip() if match else default


def clean_title(title: str) -> str:
    return re.sub(r"\s*\|\s*Health Toolkit Lab\s*$", "", title).strip()


def page_url(path: Path) -> str:
    rel = path.relative_to(ROOT).as_posix()
    if rel == "index.html":
        return f"{DOMAIN}/"
    if rel.endswith("/index.html"):
        return f"{DOMAIN}/{rel[:-10].rstrip('/')}/"
    return f"{DOMAIN}/{rel}"


def path_lang(path: Path) -> Optional[str]:
    parts = path.relative_to(ROOT).parts
    if not parts:
        return None
    return parts[0] if parts[0] in LANGS else None


def normalized_rel(path: Path) -> str:
    rel = path.relative_to(ROOT)
    lang = path_lang(path)
    if lang:
        parts = rel.parts[1:]
        if not parts:
            return "index.html"
        return "/".join(parts)
    return rel.as_posix()


def canonical_url(path: Path) -> str:
    rel = normalized_rel(path)
    lang = path_lang(path)
    if lang == "zh-Hans":
        if rel == "index.html":
            return f"{DOMAIN}/zh/"
        if rel.endswith("index.html"):
            return f"{DOMAIN}/zh/{rel[:-10].rstrip('/')}/"
        return f"{DOMAIN}/zh/{rel}"
    if lang:
        if rel == "index.html":
            return f"{DOMAIN}/{lang}/"
        if rel.endswith("index.html"):
            return f"{DOMAIN}/{lang}/{rel[:-10].rstrip('/')}/"
        return f"{DOMAIN}/{lang}/{rel}"
    if path.name in ROOT_DUPLICATES:
        return f"{DOMAIN}/en/{path.name}"
    return page_url(path)


def is_indexable(path: Path) -> bool:
    lang = path_lang(path)
    if lang == "zh-Hans":
        return False
    if lang is None and path.name in ROOT_DUPLICATES:
        return False
    return True


def robots_value(path: Path) -> str:
    return "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" if is_indexable(path) else "noindex, follow"


def alternate_pairs(path: Path) -> list[tuple[str, str]]:
    rel = normalized_rel(path)
    if path.relative_to(ROOT).as_posix() == "index.html":
        pairs = [(lang, f"{DOMAIN}/{lang}/") for lang in INDEXABLE_LANGS]
        pairs.append(("x-default", f"{DOMAIN}/"))
        return pairs
    if path.name in ROOT_DUPLICATES:
        pairs = []
        for alt_lang in INDEXABLE_LANGS:
            candidate = ROOT / alt_lang / path.name
            if candidate.exists():
                pairs.append((alt_lang, canonical_url(candidate)))
        if pairs:
            default_href = next((href for code, href in pairs if code == "en"), pairs[0][1])
            pairs.append(("x-default", default_href))
        return pairs
    lang = path_lang(path)
    pairs = []
    if lang in LANGS:
        for alt_lang in INDEXABLE_LANGS:
            candidate = ROOT / alt_lang / rel
            if candidate.exists():
                pairs.append((alt_lang, canonical_url(candidate)))
        if pairs:
            default_href = next((href for code, href in pairs if code == "en"), canonical_url(path))
            pairs.append(("x-default", default_href))
    return pairs


def hreflang_links(path: Path) -> str:
    links = alternate_pairs(path)
    return "\n    ".join(f'<link rel="alternate" hreflang="{code}" href="{href}">' for code, href in links)


def page_keywords(path: Path, title: str, description: str) -> str:
    lang = path_lang(path) or "en"
    if lang == "zh-Hans":
        lang = "zh"
    parts = path.relative_to(ROOT).parts
    group = parts[1] if len(parts) > 1 and parts[0] in LANGS else (parts[0] if parts else "")
    extras = GROUP_KEYWORDS.get(group, {}).get(lang, [])
    extras = SPECIAL_PAGE_KEYWORDS.get(path.name, {}).get(lang, []) + extras
    base = [clean_title(title), description.split("。")[0].split(".")[0], "Health Toolkit Lab"]
    merged = []
    for item in base + extras:
        item = re.sub(r"\s+", " ", item).strip(" ,|")
        if item and item not in merged:
            merged.append(item)
    return ", ".join(merged[:10])


def breadcrumb_data(path: Path, title: str) -> list[dict]:
    rel = path.relative_to(ROOT).as_posix()
    items = [{"@type": "ListItem", "position": 1, "name": "Health Toolkit Lab", "item": f"{DOMAIN}/"}]
    if rel == "index.html":
        return items
    lang = path_lang(path)
    if lang:
        items.append({"@type": "ListItem", "position": 2, "name": lang, "item": f"{DOMAIN}/{lang}/"})
        rel_norm = normalized_rel(path)
        if rel_norm != "index.html":
            pieces = rel_norm.split("/")
            if len(pieces) > 1:
                section = pieces[0]
                section_url = f"{DOMAIN}/{lang}/{section}/" if pieces[-1] == "index.html" or len(pieces) > 1 else f"{DOMAIN}/{lang}/"
                items.append({"@type": "ListItem", "position": 3, "name": section, "item": section_url})
            items.append({"@type": "ListItem", "position": len(items) + 1, "name": clean_title(title), "item": canonical_url(path)})
    else:
        items.append({"@type": "ListItem", "position": 2, "name": clean_title(title), "item": canonical_url(path)})
    return items


def structured_data(path: Path, title: str, description: str) -> str:
    lang = path_lang(path) or "en"
    html_lang = LANGS.get(lang, LANGS["en"])["html"]
    url = canonical_url(path)
    data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": f"{DOMAIN}/#website",
                "url": f"{DOMAIN}/",
                "name": "Health Toolkit Lab",
                "inLanguage": html_lang
            },
            {
                "@type": "WebPage",
                "@id": f"{url}#webpage",
                "url": url,
                "name": clean_title(title),
                "description": description,
                "isPartOf": {"@id": f"{DOMAIN}/#website"},
                "inLanguage": html_lang
            },
            {
                "@type": "BreadcrumbList",
                "@id": f"{url}#breadcrumb",
                "itemListElement": breadcrumb_data(path, title)
            }
        ]
    }
    return json.dumps(data, ensure_ascii=False, separators=(",", ":"))


def render_head(path: Path, original: str) -> str:
    title = extract_tag(original, r"<title>(.*?)</title>", "Health Toolkit Lab")
    description = extract_tag(original, r'<meta\s+name="description"\s+content="(.*?)"', "Health Toolkit Lab multilingual health calculators.")
    lang = path_lang(path) or "en"
    html_lang = LANGS.get(lang, LANGS["en"])["html"]
    locale = LANGS.get(lang, LANGS["en"])["locale"]
    url = canonical_url(path)
    robots = robots_value(path)
    keywords = page_keywords(path, title, description)
    alternates = hreflang_links(path)
    head = f"""<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
    <meta name="robots" content="{robots}">
    <link rel="canonical" href="{url}">
    {alternates}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Health Toolkit Lab">
    <meta property="og:locale" content="{locale}">
    <meta property="og:title" content="{clean_title(title)}">
    <meta property="og:description" content="{description}">
    <meta property="og:url" content="{url}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{clean_title(title)}">
    <meta name="twitter:description" content="{description}">
    <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
    <link rel="shortcut icon" href="/assets/favicon.svg">
    <link rel="apple-touch-icon" href="/assets/favicon.svg">
    <script type="application/ld+json">{structured_data(path, title, description)}</script>
    {BAIDU_ANALYTICS_SNIPPET}
    <link rel="stylesheet" href="/assets/styles.css?{VERSION}">
  </head>"""
    updated = re.sub(r"<head>.*?</head>", head, original, flags=re.S | re.I)
    updated = re.sub(r'<html[^>]*lang="[^"]+"', lambda m: re.sub(r'lang="[^"]+"', f'lang="{html_lang}"', m.group(0)), updated, count=1)
    updated = re.sub(r"/assets/app\.js\?[^\"']+", f"/assets/app.js?{VERSION}", updated)
    updated = re.sub(r"/assets/site\.js\?[^\"']+", f"/assets/site.js?{VERSION}", updated)
    updated = re.sub(r"/assets/styles\.css\?[^\"']+", f"/assets/styles.css?{VERSION}", updated)
    return updated


def sitemap_entries() -> list[str]:
    entries = []
    for path in sorted(ROOT.rglob("*.html")):
        rel = path.relative_to(ROOT).as_posix()
        if "node_modules" in rel:
            continue
        if not is_indexable(path):
            continue
        alternates = "\n".join(
            f'    <xhtml:link rel="alternate" hreflang="{code}" href="{href}" />'
            for code, href in alternate_pairs(path)
        )
        if alternates:
            alternates = "\n" + alternates
        entries.append(
            f"  <url>\n"
            f"    <loc>{canonical_url(path)}</loc>\n"
            f"    <lastmod>{TODAY}</lastmod>{alternates}\n"
            f"  </url>"
        )
    return entries


def build_sitemap() -> str:
    entries = "\n".join(sitemap_entries())
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        f"{entries}\n"
        "</urlset>\n"
    )


for path in ROOT.rglob("*.html"):
    rel = path.relative_to(ROOT).as_posix()
    if "node_modules" in rel:
        continue
    write(path, render_head(path, read(path)))

write(ROOT / "sitemap.xml", build_sitemap())

robots = """User-agent: *
Allow: /

Host: fitcalcify.com
Sitemap: https://fitcalcify.com/sitemap.xml
"""
write(ROOT / "robots.txt", robots)

ads = """# Add your real Google AdSense publisher record after account approval.
# Example:
# google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
#
# Google may show an 'earnings at risk' warning if ads.txt is missing or incorrect.
"""
write(ROOT / "ads.txt", ads)
