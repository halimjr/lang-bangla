var numbers = {
  0:'০',
  1:'১',
  2:'২',
  3:'৩',
  4:'৪',
  5:'৫',
  6:'৬',
  7:'৭',
  8: '৮',
  9:'৯'
};

function replaceNumbers(input) {
  var output = [];
  for (var i = 0; i < input.length; ++i) {
    if (numbers.hasOwnProperty(input[i])) {
      output.push(numbers[input[i]]);
    } else {
      output.push(input[i]);
    }
  }
  return output.join('');
}

const texts = {
  s: 'কয়েক সেকেন্ড',
  m: ['এক মিনিট', 'এক মিনিট'],
  mm: '%d মিনিট',
  h: ['এক ঘন্টা', 'এক ঘন্টা'],
  hh: '%d ঘন্টা',
  d: ['এক দিন', 'এক দিন'],
  dd: ['%d দিন', '%d দিন'],
  M: ['এক মাস', 'এক মাস'],
  MM: ['%d মাস', '%d মাস'],
  y: ['এক বছর', 'এক বছর'],
  yy: ['%d বছর', '%d বছর']
}

function relativeTimeFormatter(number, withoutSuffix, key) {
  let l = texts[key]
  if (Array.isArray(l)) {
    l = l[withoutSuffix ? 0 : 1]
  }
  return replaceNumbers(l.replace('%d', number))
}

dayjs.locale({
  name: 'en',
  weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
  weekdaysShort: 'রবি._সোম._মঙ্গল._বুধ._বৃহস্পতি._শুক্র._শনি.'.split('_'),
  weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
  months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
  monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 5,
  yearStart: 4,
  formats: {
    LTS: 'hh:mm:ss A',
    LT: 'hh:mm A',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY hh:mm A',
    LLLL: 'dddd, D MMMM, YYYY hh:mm A'
  },
  relativeTime: {
    future: '%s ভিতরে',
    past: '%s আগে',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  }
})
