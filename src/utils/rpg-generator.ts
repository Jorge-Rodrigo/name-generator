const getRandomElement = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const generateRandomSyllable = () => {
  const syllables = [
    "ba",
    "be",
    "bi",
    "bo",
    "bu",
    "ca",
    "ce",
    "ci",
    "co",
    "cu",
    "da",
    "de",
    "di",
    "do",
    "du",
    "fa",
    "fe",
    "fi",
    "fo",
    "fu",
    "ga",
    "ge",
    "gi",
    "go",
    "gu",
    "ha",
    "he",
    "hi",
    "ho",
    "hu",
    "ja",
    "je",
    "ji",
    "jo",
    "ju",
    "ka",
    "ke",
    "ki",
    "ko",
    "ku",
    "la",
    "le",
    "li",
    "lo",
    "lu",
    "ma",
    "me",
    "mi",
    "mo",
    "mu",
    "na",
    "ne",
    "ni",
    "no",
    "nu",
    "pa",
    "pe",
    "pi",
    "po",
    "pu",
    "ra",
    "re",
    "ri",
    "ro",
    "ru",
    "sa",
    "se",
    "si",
    "so",
    "su",
    "ta",
    "te",
    "ti",
    "to",
    "tu",
    "va",
    "ve",
    "vi",
    "vo",
    "vu",
    "wa",
    "we",
    "wi",
    "wo",
    "wu",
    "xa",
    "xe",
    "xi",
    "xo",
    "xu",
    "ya",
    "ye",
    "yi",
    "yo",
    "yu",
    "za",
    "ze",
    "zi",
    "zo",
    "zu",
  ];

  return getRandomElement(syllables);
};

export const generateRandomName = (length: number) => {
  let name = "";
  for (let i = 0; i < length; i++) {
    name += generateRandomSyllable();
  }
  return name;
};

export const generateDnDName = (length: number) => {
  const prefixes = [
    "Vor",
    "Thor",
    "Gim",
    "Bal",
    "Kor",
    "Zor",
    "Mak",
    "Lor",
    "Kil",
    "Al",
    "El",
    "Lil",
    "Gal",
    "Kil",
    "Zil",
    "Myl",
    "Lyr",
    "Shi",
  ];
  const suffixes = [
    "dor",
    "gar",
    "morn",
    "grim",
    "drek",
    "thar",
    "rak",
    "thos",
    "mar",
    "a",
    "ra",
    "la",
    "na",
    "thra",
    "sha",
    "lya",
    "thys",
    "mi",
  ];

  let name = getRandomElement(prefixes) + getRandomElement(suffixes);

  while (name.length < length) {
    name += generateRandomSyllable();
  }

  return name.slice(0, length);
};

export const generateMaleName = (length: number) => {
  const prefixes = [
    "Vor",
    "Thor",
    "Gim",
    "Bal",
    "Kor",
    "Zor",
    "Mak",
    "Lor",
    "Kil",
    "Rog",
    "Bran",
    "Drog",
  ];
  const suffixes = [
    "dor",
    "gar",
    "morn",
    "grim",
    "drek",
    "thar",
    "rak",
    "thos",
    "mar",
    "don",
    "bar",
    "tor",
  ];

  let name = getRandomElement(prefixes) + getRandomElement(suffixes);

  while (name.length < length) {
    name += generateRandomSyllable();
  }

  return name.slice(0, length);
};

export const generateFemaleName = (length: number) => {
  const prefixes = [
    "Al",
    "El",
    "Lil",
    "Gal",
    "Kil",
    "Zil",
    "Myl",
    "Lyr",
    "Shi",
    "Ari",
    "Cer",
    "Eil",
  ];
  const suffixes = [
    "a",
    "ra",
    "la",
    "na",
    "thra",
    "sha",
    "lya",
    "thys",
    "mi",
    "di",
    "si",
    "vi",
  ];

  let name = getRandomElement(prefixes) + getRandomElement(suffixes);

  while (name.length < length) {
    name += generateRandomSyllable();
  }

  return name.slice(0, length);
};
