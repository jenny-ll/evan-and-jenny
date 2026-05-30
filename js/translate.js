(function () {
    const storageKey = 'je_language';

    const text = {
        zh: {
            'nav.about': '关于我们',
            'nav.events': '活动安排',
            'nav.stay': '住宿',
            'nav.rsvp': 'RSVP',
            'footer.names': 'Jenny & Evan',

            'home.names': 'Jenny 和 Evan',
            'home.date': '2027年5月30日 · 温哥华',
            'home.introTitle': '我们要结婚啦！',
            'home.copy1': '很开心能和你一起分享这个特别的周末。这里整理了婚礼相关的信息；随着 2027 年 5 月 30 日临近，我们也会陆续更新更多细节。若有任何问题，欢迎随时直接联系我们。',
            'home.copy2': '期待很快和你相聚，一起庆祝、跳舞，留下许多难忘的回忆。',

            'about.eyebrow': '我们的故事',
            'about.title': '关于我们',
            'about.photoAlt': 'Jenny 和 Evan',
            'about.kicker': 'Cornell Tech，2021年8月',
            'about.story1': 'Jenny 和 Evan 的故事，开始于研究生开学第一周。那时，他们在 Cornell Tech 学生宿舍 The House 的一场屋顶派对上第一次见面。虽然两个人对那次初见的记忆不太一样，但那个屋顶，悄悄成了一切的开始。',
            'about.story2': '接下来的一年里，他们因为攀岩、朋友聚会和无数次深夜谈心，慢慢成为彼此很亲近的朋友。很多个夜晚，他们又回到同一个屋顶，聊到天边渐亮，纽约的天际线被清晨的阳光照亮。',
            'about.story3': '后来，友情一点点变成了更深的喜欢。毕竟，能打 18 个小时不睡觉的 FaceTime，也很难再说只是普通朋友了。于是，在 2022 年 8 月 10 日，他们终于走到了一起。几年后，Evan 带 Jenny 回到毕业后再也没有去过的那个屋顶，并在那里向她求婚。Jenny 说了 yes。',
            'about.story4': '他们很期待一起开启人生的下一章，也很期待和最爱的家人朋友们一起庆祝。',

            'events.eyebrow': '婚礼周末',
            'events.title': '活动安排',
            'events.date1': '2027年5月29日，星期六',
            'events.welcomeTitle': '欢迎派对',
            'events.welcomeMeta': '家中 · 晚上 7:00',
            'events.welcomeCopy': '婚礼前一晚，我们会准备一个轻松的欢迎派对。欢迎大家来喝点东西、吃些小食，也和亲朋好友好好聚一聚，为这个周末暖暖身。',
            'events.date2': '2027年5月30日，星期日',
            'events.weddingTitle': '婚礼当天',
            'events.weddingCopy': '婚礼庆祝将于下午开始，随后是鸡尾酒时间和晚宴，一起陪我们把这一天庆祝到夜晚。',
            'events.dressButton': '着装建议',
            'events.dressTitle': '着装建议',

            'stay.eyebrow': '温哥华',
            'stay.title': '住宿参考',
            'stay.intro': '我们不会为宾客统一安排指定酒店，希望大家可以按照自己的行程更灵活地选择住宿。为了方便从外地来的亲友，我们整理了几个推荐区域供大家参考。也建议大家尽早预订！',
            'stay.nearTitle': 'Cecil Green Park House 附近',
            'stay.nearNote': '适合想住得离婚礼场地近一些，也顺便感受 UBC 校园环境的宾客。',
            'stay.kitsTitle': 'Kitsilano / West Broadway',
            'stay.kitsNote': '这是温哥华很舒服的区域，靠近海边，也有不少短租选择，开车前往 Cecil Green Park House 也很方便。',
            'stay.downtownTitle': '温哥华市中心',
            'stay.downtownNote': '适合想把观光、餐厅和购物都安排进旅程的宾客，距离婚礼场地约 20-30 分钟车程。',

            'rsvp.eyebrow': '敬请回复',
            'rsvp.title': 'RSVP',
            'rsvp.comingSoon': '暂未开放',
            'rsvp.copy': '正式请柬将于 2027 年初寄送到你的地址。届时，请柬中会请宾客通过本网站的 RSVP 表单确认是否出席。'
        }
    };

    const html = {
        zh: {
            'events.weddingMeta': '<a href="https://www.google.com/maps/place/Cecil+Green+Park+House/@49.2705956,-123.264963,15.26z/data=!4m6!3m5!1s0x548672b1a4606653:0xba00269da2e1e9f0!8m2!3d49.2713887!4d-123.2577044!16s%2Fg%2F11b5pj9y_v?entry=ttu&amp;g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">Cecil Green Park House</a> · 下午 4:00',
            'events.dressWelcome': '<strong>精致休闲</strong><br>欢迎选择舒服但有质感的穿搭，例如衬衫、上衣、长裤、半裙或连衣裙。',
            'events.dressWedding': '<strong>鸡尾酒会着装</strong><br>建议选择优雅、正式一些的穿搭，例如西装领带、中长款或长款连衣裙、鸡尾酒裙或连体裤。',
            'stay.nearList': 'Gage Suites at UBC<br>West Coast Suites at UBC',
            'stay.kitsList': '短租住宿<br>Airbnb 或 Vrbo',
            'stay.downtownList': 'JW Marriott Parq<br>Hyatt Regency Vancouver<br>Fairmont Hotel Vancouver<br>The Westin Bayshore'
        }
    };

    function cacheOriginals() {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            if (!element.dataset.i18nOriginal) {
                element.dataset.i18nOriginal = element.textContent;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            if (!element.dataset.i18nOriginalHtml) {
                element.dataset.i18nOriginalHtml = element.innerHTML;
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
            element.dataset.i18nAttr.split(',').forEach((pair) => {
                const attr = pair.split(':')[0].trim();
                const cacheKey = 'i18nOriginal' + attr.charAt(0).toUpperCase() + attr.slice(1);

                if (attr && !element.dataset[cacheKey]) {
                    element.dataset[cacheKey] = element.getAttribute(attr) || '';
                }
            });
        });
    }

    function translateAttributes(language) {
        document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
            element.dataset.i18nAttr.split(',').forEach((pair) => {
                const parts = pair.split(':');
                const attr = parts[0].trim();
                const key = parts[1] && parts[1].trim();
                const cacheKey = 'i18nOriginal' + attr.charAt(0).toUpperCase() + attr.slice(1);

                if (!attr || !key) return;

                if (language === 'zh' && text.zh[key]) {
                    element.setAttribute(attr, text.zh[key]);
                } else {
                    element.setAttribute(attr, element.dataset[cacheKey] || '');
                }
            });
        });
    }

    function updateButtons(language) {
        document.querySelectorAll('[data-translate-toggle]').forEach((button) => {
            button.textContent = language === 'zh' ? 'English' : '中文';
            button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Translate to Chinese');
        });
    }

    function setLanguage(language) {
        const useChinese = language === 'zh';

        document.documentElement.lang = useChinese ? 'zh-Hans' : 'en';
        document.body.classList.toggle('is-zh', useChinese);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            element.textContent = useChinese && text.zh[key] ? text.zh[key] : element.dataset.i18nOriginal;
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            const key = element.dataset.i18nHtml;
            element.innerHTML = useChinese && html.zh[key] ? html.zh[key] : element.dataset.i18nOriginalHtml;
        });

        translateAttributes(useChinese ? 'zh' : 'en');
        updateButtons(useChinese ? 'zh' : 'en');
        localStorage.setItem(storageKey, useChinese ? 'zh' : 'en');
    }

    document.addEventListener('DOMContentLoaded', () => {
        cacheOriginals();
        const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
        const initialLanguage = requestedLanguage === 'zh' || requestedLanguage === 'en'
            ? requestedLanguage
            : localStorage.getItem(storageKey);

        setLanguage(initialLanguage === 'zh' ? 'zh' : 'en');

        document.querySelectorAll('[data-translate-toggle]').forEach((button) => {
            button.addEventListener('click', () => {
                setLanguage(document.documentElement.lang === 'zh-Hans' ? 'en' : 'zh');
            });
        });
    });
}());
