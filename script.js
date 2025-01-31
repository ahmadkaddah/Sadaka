
    // نظام الدعوات
    function showPrayerForm() {
      document.getElementById('prayerForm').style.display = 'block';
    }

    function savePrayer() {
      const prayerText = document.getElementById('prayerInput').value.trim();

      if (prayerText) {
        let prayers = JSON.parse(localStorage.getItem('prayers') || '[]');
        prayers.push({
          text: prayerText,
          date: new Date().toLocaleString('ar-EG')
        });

        localStorage.setItem('prayers', JSON.stringify(prayers));
        document.getElementById('prayerInput').value = '';
        alert('تم حفظ الدعاء بنجاح 🙏');
        document.getElementById('prayerForm').style.display = 'none';
      } else {
        alert('الرجاء كتابة دعاء قبل الإرسال');
      }
    }

    // قائمة تحتوي على أكثر من 100 آية مع التفسير والدعاء
    const versesData = [
      {
        verse: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ",
        reference: "(النحل: 128)",
        explanation: "أي أن الله ينصر ويعين الذين يخافونه ويجتنبون المعاصي، والذين يعملون الأعمال الصالحة.",
        prayer: "اللهم اجعلنا من المتقين وأهل الإحسان."
      },
      {
        verse: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ",
        reference: "(البقرة: 215)",
        explanation: "كل عمل خير تقوم به، فإن الله على علم به وسيجازيك عليه.",
        prayer: "اللهم تقبل منا صالح الأعمال واجعلها خالصة لوجهك الكريم."
      },
      {
        verse: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتُ النَّعِيمِ",
        reference: "(لقمان: 8)",
        explanation: "المؤمنون الذين يعملون الطاعات لهم الجنة والنعيم المقيم.",
        prayer: "اللهم ارزقنا جنات النعيم وادخلنا إياها برحمتك."
      },
      {
        verse: "وَأَنِيبُوا إِلَى رَبِّكُمْ وَأَسْلِمُوا لَهُ",
        reference: "(الزمر: 54)",
        explanation: "أي ارجعوا إلى الله بالتوبة والإخلاص في العبادة.",
        prayer: "اللهم تب علينا واغفر ذنوبنا وارحمنا برحمتك يا أرحم الراحمين."
      },
      {
        verse: "وَقُلْ رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
        reference: "(المؤمنون: 118)",
        explanation: "دعاء لله بأن يغفر الذنوب ويمن بالرحمة.",
        prayer: "اللهم اغفر لنا ذنوبنا وارحمنا برحمتك الواسعة."
      },
      {
        verse: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
        reference: "(البقرة: 186)",
        explanation: "الله قريب من عباده ويستجيب دعاءهم عند حاجتهم.",
        prayer: "اللهم استجب دعائنا واقربنا إليك يا قريب."
      },
      {
        verse: "وَالْعَصْرِ * إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
        reference: "(العصر: 1-2)",
        explanation: "الإنسان في خسران إلا من آمن وعمل صالحاً.",
        prayer: "اللهم اهدنا للإيمان ووفقنا لأعمال الخير."
      },
      {
        verse: "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ",
        reference: "(البقرة: 6)",
        explanation: "الكافرون لا يؤمنون حتى لو أنذرهم النبي صلى الله عليه وسلم.",
        prayer: "اللهم اهد ضال المسلمين وأدخلهم في دينك الحق."
      },
      {
        verse: "وَمَا خَلَقْنَا السَّمَاءَ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ",
        reference: "(الأنبياء: 16)",
        explanation: "خلق الله السماوات والأرض له غاية عظيمة وليس عبثاً.",
        prayer: "سبحانك اللهم وبحمدك، نشهد أن لا إله إلا أنت."
      },
      {
        verse: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ",
        reference: "(الإسراء: 70)",
        explanation: "تكريم الله للإنسان حيث سخر له البر والبحر.",
        prayer: "اللهم لك الحمد على نعمائك التي لا تعد ولا تحصى."
      },
      {
        verse: "وَإِنَّ اللَّهَ لَهُوَ خَيْرُ الرَّازِقِينَ",
        reference: "(الحج: 58)",
        explanation: "الله تعالى هو أفضل من يرزق، وهو الكريم الوهاب.",
        prayer: "اللهم ارزقنا رزقاً حلالاً طيباً وبارك لنا فيه."
      },
      {
        verse: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
        reference: "(هود: 88)",
        explanation: "التوفيق من عند الله وحده، وعليه التوكل والإنابة.",
        prayer: "اللهم وفقنا في جميع أمورنا وأعنا على طاعتك."
      },
      {
        verse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        reference: "(البقرة: 153)",
        explanation: "الله تعالى مع الصابرين في كل ما يمرون به.",
        prayer: "اللهم اجعلنا من الصابرين وثبتنا على دينك."
      },
      {
        verse: "وَاللَّهُ يَسْمَعُ مَنْ يَشَاءُ",
        reference: "(فاطر: 22)",
        explanation: "الله تعالى يسمع دعاء كل من يشاء ويستجيب له.",
        prayer: "اللهم استجب دعاءنا وارحم ضعفنا."
      },
      {
        verse: "إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ",
        reference: "(إبراهيم: 39)",
        explanation: "ربي يسمع الدعاء ويستجيبه، وهو القريب المجيب.",
        prayer: "اللهم يا سميع الدعاء استجب دعاءنا وحقق لنا ما نتمناه."
      },
      {
        verse: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
        reference: "(الطلاق: 2)",
        explanation: "من يتق الله، يجعل له مخرجاً من كل ضيق.",
        prayer: "اللهم اجعل لنا من كل هم فرجاً ومن كل ضيق مخرجاً."
      },
      {
        verse: "وَاللَّهُ غَالِبٌ عَلَى أَمْرِهِ وَلَكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
        reference: "(يوسف: 21)",
        explanation: "الله تعالى هو الغالب على كل شيء، ولكن أكثر الناس لا يعلمون ذلك.",
        prayer: "اللهم سلم أمرنا كله إليك وأنت خير المتوكلين."
      },
      {
        verse: "وَكَفَى بِاللَّهِ وَكِيلًا",
        reference: "(النساء: 171)",
        explanation: "يكفي بالله وكيلاً يدبر الأمور ويتولى شؤون العباد.",
        prayer: "اللهم يا ربنا أنت حسبنا ونعم الوكيل."
      },
      {
        verse: "إِنَّ اللَّهَ يُدَافِعُ عَنِ الَّذِينَ آمَنُوا",
        reference: "(الحج: 38)",
        explanation: "الله تعالى يدافع عن المؤمنين ويحميهم.",
        prayer: "اللهم دافع عنا شر الأشرار وكيد الفجار."
      },
      {
        verse: "وَعَسَى أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ",
        reference: "(البقرة: 216)",
        explanation: "قد تكرهون شيئاً وهو في حقيقته خير لكم.",
        prayer: "اللهم ارزقنا الرضا بقضائك وقدرك."
      },
      {
        verse: "وَاللَّهُ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ",
        reference: "(البقرة: 212)",
        explanation: "الله تعالى يرزق من يشاء بغير حساب ولا تقدير.",
        prayer: "اللهم ارزقنا من فضلك الواسع بغير حساب."
      },
      {
        verse: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
        reference: "(هود: 115)",
        explanation: "الله تعالى لا يضيع أجر من أحسن العمل.",
        prayer: "اللهم اجعلنا من المحسنين وتقبل منا أعمالنا."
      },
      {
        verse: "وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ",
        reference: "(الأنفال: 33)",
        explanation: "الله تعالى لا يعذب قوماً وهم يستغفرونه.",
        prayer: "اللهم اغفر لنا ذنوبنا وتجاوز عن سيئاتنا."
      },
      {
        verse: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا",
        reference: "(النصر: 3)",
        explanation: "استغفر الله وتب إليه، فهو التواب الرحيم.",
        prayer: "اللهم تب علينا وارحمنا إنك أنت التواب الرحيم."
      },
      {
        verse: "إِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ لِلنَّاسِ عَلَى ظُلْمِهِمْ",
        reference: "(الرعد: 6)",
        explanation: "الله تعالى يغفر للناس على ظلمهم ويتجاوز عنهم.",
        prayer: "اللهم اغفر لنا وارحمنا وتجاوز عن خطايانا."
      },
      {
        verse: "وَهُوَ الْغَفُورُ الرَّحِيمُ",
        reference: "(البقرة: 173)",
        explanation: "الله تعالى هو الغفور الرحيم، يغفر الذنوب ويرحم العباد.",
        prayer: "اللهم يا غفور يا رحيم اغفر لنا وارحمنا."
      },
      {
        verse: "إِنَّ اللَّهَ تَوَّابٌ رَحِيمٌ",
        reference: "(التوبة: 104)",
        explanation: "الله تعالى هو التواب الرحيم، يتوب على من يشاء ويرحمهم.",
        prayer: "اللهم تب علينا وأحسن توبتنا."
      },
      {
        verse: "وَمَنْ يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَحِيمًا",
        reference: "(النساء: 110)",
        explanation: "من يعمل سوءاً أو يظلم نفسه ثم يستغفر الله، يجد الله غفوراً رحيماً.",
        prayer: "اللهم اغفر لنا وارحمنا وتب علينا إنك أنت التواب الرحيم."
      },
      {
        verse: "وَإِنَّ رَبَّكَ لَذُو فَضْلٍ عَلَى النَّاسِ وَلَكِنَّ أَكْثَرَهُمْ لَا يَشْكُرُونَ",
        reference: "(النمل: 73)",
        explanation: "الله تعالى ذو فضل عظيم على الناس، ولكن أكثرهم لا يشكرون.",
        prayer: "اللهم اجعلنا من الشاكرين لنعمك."
      },
      {
        verse: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
        reference: "(الأنبياء: 107)",
        explanation: "أرسل الله تعالى النبي محمداً صلى الله عليه وسلم رحمة للعالمين أجمعين.",
        prayer: "اللهم صل وسلم وبارك على نبينا محمد وعلى آله وصحبه أجمعين."
      },
      {
        verse: "لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا",
        reference: "(الأحزاب: 21)",
        explanation: "في رسول الله صلى الله عليه وسلم قدوة حسنة لمن يرجو الله واليوم الآخر.",
        prayer: "اللهم ارزقنا التأسي بنبيك محمد صلى الله عليه وسلم في جميع أقواله وأفعاله."
      },
      {
        verse: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
        reference: "(الأحزاب: 56)",
        explanation: "الله تعالى وملائكته يصلون على النبي، فأكثروا من الصلاة عليه.",
        prayer: "اللهم صل وسلم وبارك على نبينا محمد وعلى آله وصحبه أجمعين."
      },
      {
        verse: "وَمَا أَنْزَلْنَا عَلَيْكَ الْكِتَابَ إِلَّا لِتُبَيِّنَ لَهُمُ الَّذِي اخْتَلَفُوا فِيهِ وَهُدًى وَرَحْمَةً لِقَوْمٍ يُؤْمِنُونَ",
        reference: "(النحل: 64)",
        explanation: "أنزل الله القرآن ليبين للناس ما اختلفوا فيه، وهو هدى ورحمة للمؤمنين.",
        prayer: "اللهم اجعل القرآن ربيع قلوبنا ونور صدورنا."
      },
      {
        verse: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
        reference: "(الحجر: 9)",
        explanation: "الله تعالى حفظ القرآن الكريم من التحريف والتبديل.",
        prayer: "اللهم اجعلنا من العاملين بالقرآن الكريم وحافظيه."
      },
      {
        verse: "قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
        reference: "(الإخلاص: 1-4)",
        explanation: "هذه السورة العظيمة تبين وحدانية الله تعالى وصفاته.",
        prayer: "اللهم يا أحد يا صمد، ثبت قلوبنا على توحيدك."
      },
      {
        verse: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِنْ شَرِّ مَا خَلَقَ * وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        reference: "(الفلق: 1-5)",
        explanation: "هذه السورة العظيمة فيها استعاذة بالله تعالى من جميع الشرور.",
        prayer: "اللهم يا رب الفلق، أعذنا من شر ما خلقت."
      },
      {
        verse: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ",
        reference: "(الناس: 1-6)",
        explanation: "هذه السورة العظيمة فيها استعاذة بالله تعالى من شر الوسواس الخناس.",
        prayer: "اللهم يا رب الناس، أعذنا من شر الوسواس الخناس."
      },
      {
        verse: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ",
        reference: "(البقرة: 186)",
        explanation: "الله تعالى قريب من عباده ويجيب دعوة الداعي إذا دعاه.",
        prayer: "اللهم يا قريب يا مجيب، استجب دعاءنا وحقق لنا ما نتمناه."
      },
      {
        verse: "أَمَّنْ يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ السُّوءَ",
        reference: "(النمل: 62)",
        explanation: "الله تعالى هو الذي يجيب المضطر إذا دعاه ويكشف عنه السوء.",
        prayer: "اللهم يا كاشف السوء، اكشف عنا كل سوء وبلاء."
      },
      {
        verse: "وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
        reference: "(التوبة: 51)",
        explanation: "على المؤمنين أن يتوكلوا على الله في جميع أمورهم.",
        prayer: "اللهم يا ربنا عليك توكلنا وإليك أنبنا."
      },
      {
        verse: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        reference: "(آل عمران: 173)",
        explanation: "الله تعالى هو حسبنا ونعم الوكيل، وهو كافينا في كل شيء.",
        prayer: "اللهم يا حسبنا ونعم الوكيل، اكفنا كل ما أهمنا."
      },
      {
        verse: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
        reference: "(الأنبياء: 87)",
        explanation: "هذا الدعاء العظيم فيه اعتراف بالذنب وتوبة إلى الله تعالى.",
        prayer: "اللهم اغفر لنا وارحمنا وتب علينا إنك أنت التواب الرحيم."
      },
      {
        verse: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        reference: "(البقرة: 201)",
        explanation: "هذا الدعاء العظيم فيه سؤال الله تعالى خير الدنيا والآخرة.",
        prayer: "اللهم آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار."
      },
      {
        verse: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
        reference: "(البقرة: 286)",
        explanation: "هذا الدعاء العظيم فيه سؤال الله تعالى العفو والمغفرة.",
        prayer: "اللهم لا تؤاخذنا إن نسينا أو أخطأنا."
      },
      {
        verse: "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا",
        reference: "(البقرة: 286)",
        explanation: "هذا الدعاء العظيم فيه سؤال الله تعالى التخفيف والتيسير.",
        prayer: "اللهم لا تحمل علينا إصرًا كما حملته على الذين من قبلنا."
      }
    ];

    // متغير لتخزين الآيات التي تم عرضها
    let displayedVerses = [];

    // دالة لجلب بيانات عشوائية بدون تكرار
    function getRandomContent() {
      if (displayedVerses.length === versesData.length) {
        displayedVerses = []; // إعادة التعيين إذا تم عرض جميع الآيات
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * versesData.length);
      } while (displayedVerses.includes(randomIndex));
      displayedVerses.push(randomIndex);
      return versesData[randomIndex];
}
    

    function refreshContent() {
      const randomContent = getRandomContent();
      document.getElementById('verse').innerHTML = `<strong>${randomContent.verse}</strong>`;
      document.getElementById('reference').innerText = randomContent.reference;
      document.getElementById('explanation').innerText = randomContent.explanation;
    }

    window.onload = refreshContent;