extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}


extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

function extractRegion(locale) {
  return locale.split('_')[1].split('.')[0];
}