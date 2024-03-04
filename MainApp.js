import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Countries from "./Countries";
import ViewCountry from "./ViewCountry";
import Loader from "./Loader";
import Error from "./Error";

const countries1 = [
  {
    name: {
      common: "Eritrea",
      official: "State of Eritrea",
      nativeName: {
        ara: {
          official: "دولة إرتريا",
          common: "إرتريا‎",
        },
        eng: {
          official: "State of Eritrea",
          common: "Eritrea",
        },
        tir: {
          official: "ሃገረ ኤርትራ",
          common: "ኤርትራ",
        },
      },
    },
    tld: [".er"],
    cca2: "ER",
    ccn3: "232",
    cca3: "ERI",
    cioc: "ERI",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      ERN: {
        name: "Eritrean nakfa",
        symbol: "Nfk",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["91"],
    },
    capital: ["Asmara"],
    altSpellings: [
      "ER",
      "State of Eritrea",
      "ሃገረ ኤርትራ",
      "Dawlat Iritriyá",
      "ʾErtrā",
      "Iritriyā",
    ],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      ara: "Arabic",
      eng: "English",
      tir: "Tigrinya",
    },
    translations: {
      ara: {
        official: "دولة إريتريا",
        common: "إريتريا",
      },
      bre: {
        official: "Stad Eritrea",
        common: "Eritrea",
      },
      ces: {
        official: "Stát Eritrea",
        common: "Eritrea",
      },
      cym: {
        official: "Gwladwriaeth Eritrea",
        common: "Eritrea",
      },
      deu: {
        official: "Staat Eritrea",
        common: "Eritrea",
      },
      est: {
        official: "Eritrea Riik",
        common: "Eritrea",
      },
      fin: {
        official: "Eritrean valtio",
        common: "Eritrea",
      },
      fra: {
        official: "État d'Érythrée",
        common: "Érythrée",
      },
      hrv: {
        official: "Država Eritreji",
        common: "Eritreja",
      },
      hun: {
        official: "Eritrea",
        common: "Eritrea",
      },
      ita: {
        official: "Stato di Eritrea",
        common: "Eritrea",
      },
      jpn: {
        official: "エリトリア国",
        common: "エリトリア",
      },
      kor: {
        official: "에리트레아국",
        common: "에리트레아",
      },
      nld: {
        official: "Staat Eritrea",
        common: "Eritrea",
      },
      per: {
        official: "جمهوری اریتره",
        common: "اریتره",
      },
      pol: {
        official: "Państwo Erytrea",
        common: "Erytrea",
      },
      por: {
        official: "Estado da Eritreia",
        common: "Eritreia",
      },
      rus: {
        official: "Государство Эритрея",
        common: "Эритрея",
      },
      slk: {
        official: "Eritrejský štát",
        common: "Eritrea",
      },
      spa: {
        official: "Estado de Eritrea",
        common: "Eritrea",
      },
      srp: {
        official: "Држава Еритреја",
        common: "Еритреја",
      },
      swe: {
        official: "Staten Eritrea",
        common: "Eritrea",
      },
      tur: {
        official: "Eritre Devleti",
        common: "Eritre",
      },
      urd: {
        official: "ریاستِ ارتریا",
        common: "ارتریا",
      },
      zho: {
        official: "厄立特里亚",
        common: "厄立特里亚",
      },
    },
    latlng: [15, 39],
    landlocked: false,
    borders: ["DJI", "ETH", "SDN"],
    area: 117600,
    demonyms: {
      eng: {
        f: "Eritrean",
        m: "Eritrean",
      },
      fra: {
        f: "Érythréenne",
        m: "Érythréen",
      },
    },
    flag: "🇪🇷",
    maps: {
      googleMaps: "https://goo.gl/maps/HRyqUpnPwwG6jY5j6",
      openStreetMaps: "https://www.openstreetmap.org/relation/296961",
    },
    population: 5352000,
    fifa: "ERI",
    car: {
      signs: ["ER"],
      side: "right",
    },
    timezones: ["UTC+03:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/er.png",
      svg: "https://flagcdn.com/er.svg",
      alt: "The flag of Eritrea comprises three triangles — a large red isosceles triangle with its base spanning the hoist end and its apex at the midpoint on the fly end, and a green and blue right-angled triangle above and beneath the red triangle. On the hoist side of the red triangle is a golden vertical olive branch encircled by a golden olive wreath.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/er.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/er.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [15.33, 38.93],
    },
  },

  {
    name: {
      common: "Liberia",
      official: "Republic of Liberia",
      nativeName: {
        eng: {
          official: "Republic of Liberia",
          common: "Liberia",
        },
      },
    },
    tld: [".lr"],
    cca2: "LR",
    ccn3: "430",
    cca3: "LBR",
    cioc: "LBR",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      LRD: {
        name: "Liberian dollar",
        symbol: "$",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["31"],
    },
    capital: ["Monrovia"],
    altSpellings: ["LR", "Republic of Liberia"],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
      eng: "English",
    },
    translations: {
      ara: {
        official: "جمهورية ليبيريا",
        common: "ليبيريا",
      },
      bre: {
        official: "Republik Liberia",
        common: "Liberia",
      },
      ces: {
        official: "Liberijská republika",
        common: "Libérie",
      },
      cym: {
        official: "Republic of Liberia",
        common: "Liberia",
      },
      deu: {
        official: "Republik Liberia",
        common: "Liberia",
      },
      est: {
        official: "Libeeria Vabariik",
        common: "Libeeria",
      },
      fin: {
        official: "Liberian tasavalta",
        common: "Liberia",
      },
      fra: {
        official: "République du Libéria",
        common: "Liberia",
      },
      hrv: {
        official: "Republika Liberija",
        common: "Liberija",
      },
      hun: {
        official: "Libériai Köztársaság",
        common: "Libéria",
      },
      ita: {
        official: "Repubblica di Liberia",
        common: "Liberia",
      },
      jpn: {
        official: "リベリア共和国",
        common: "リベリア",
      },
      kor: {
        official: "라이베리아 공화국",
        common: "라이베리아",
      },
      nld: {
        official: "Republiek Liberia",
        common: "Liberia",
      },
      per: {
        official: "جمهوری لیبریا",
        common: "لیبـِریا",
      },
      pol: {
        official: "Republika Liberii",
        common: "Liberia",
      },
      por: {
        official: "República da Libéria",
        common: "Libéria",
      },
      rus: {
        official: "Республика Либерия",
        common: "Либерия",
      },
      slk: {
        official: "Libérijská republika",
        common: "Libéria",
      },
      spa: {
        official: "República de Liberia",
        common: "Liberia",
      },
      srp: {
        official: "Република Либерија",
        common: "Либерија",
      },
      swe: {
        official: "Republiken Liberia",
        common: "Liberia",
      },
      tur: {
        official: "Liberya Cumhuriyeti",
        common: "Liberya",
      },
      urd: {
        official: "جمہوریہ لائبیریا",
        common: "لائبیریا",
      },
      zho: {
        official: "利比里亚共和国",
        common: "利比里亚",
      },
    },
    latlng: [6.5, -9.5],
    landlocked: false,
    borders: ["GIN", "CIV", "SLE"],
    area: 111369,
    demonyms: {
      eng: {
        f: "Liberian",
        m: "Liberian",
      },
      fra: {
        f: "Libérienne",
        m: "Libérien",
      },
    },
    flag: "🇱🇷",
    maps: {
      googleMaps: "https://goo.gl/maps/4VsHsc2oeGeRL3wg6",
      openStreetMaps: "https://www.openstreetmap.org/relation/192780",
    },
    population: 5057677,
    gini: {
      2016: 35.3,
    },
    fifa: "LBR",
    car: {
      signs: ["LB"],
      side: "right",
    },
    timezones: ["UTC"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/lr.png",
      svg: "https://flagcdn.com/lr.svg",
      alt: "The flag of Liberia is composed of eleven equal horizontal bands of red alternating with white. A blue square bearing a five-pointed white star is superimposed in the canton.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/lr.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/lr.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [6.3, -10.8],
    },
    postalCode: {
      format: "####",
      regex: "^(\\d{4})$",
    },
  },

  {
    name: {
      common: "Uganda",
      official: "Republic of Uganda",
      nativeName: {
        eng: {
          official: "Republic of Uganda",
          common: "Uganda",
        },
        swa: {
          official: "Republic of Uganda",
          common: "Uganda",
        },
      },
    },
    tld: [".ug"],
    cca2: "UG",
    ccn3: "800",
    cca3: "UGA",
    cioc: "UGA",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      UGX: {
        name: "Ugandan shilling",
        symbol: "Sh",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["56"],
    },
    capital: ["Kampala"],
    altSpellings: ["UG", "Republic of Uganda", "Jamhuri ya Uganda"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    translations: {
      ara: {
        official: "جمهورية أوغندا",
        common: "أوغندا",
      },
      bre: {
        official: "Republik Ouganda",
        common: "Ouganda",
      },
      ces: {
        official: "Ugandská republika",
        common: "Uganda",
      },
      cym: {
        official: "Republic of Uganda",
        common: "Uganda",
      },
      deu: {
        official: "Republik Uganda",
        common: "Uganda",
      },
      est: {
        official: "Uganda Vabariik",
        common: "Uganda",
      },
      fin: {
        official: "Ugandan tasavalta",
        common: "Uganda",
      },
      fra: {
        official: "République de l'Ouganda",
        common: "Ouganda",
      },
      hrv: {
        official: "Republika Uganda",
        common: "Uganda",
      },
      hun: {
        official: "Ugandai Köztársaság",
        common: "Uganda",
      },
      ita: {
        official: "Repubblica di Uganda",
        common: "Uganda",
      },
      jpn: {
        official: "ウガンダ共和国",
        common: "ウガンダ",
      },
      kor: {
        official: "우간다 공화국",
        common: "우간다",
      },
      nld: {
        official: "Republiek Uganda",
        common: "Oeganda",
      },
      per: {
        official: "جمهوری اوگاندا",
        common: "اوگاندا",
      },
      pol: {
        official: "Republika Ugandy",
        common: "Uganda",
      },
      por: {
        official: "República do Uganda",
        common: "Uganda",
      },
      rus: {
        official: "Республика Уганда",
        common: "Уганда",
      },
      slk: {
        official: "Ugandská republika",
        common: "Uganda",
      },
      spa: {
        official: "República de Uganda",
        common: "Uganda",
      },
      srp: {
        official: "Република Уганда",
        common: "Уганда",
      },
      swe: {
        official: "Republiken Uganda",
        common: "Uganda",
      },
      tur: {
        official: "Uganda Cumhuriyeti",
        common: "Uganda",
      },
      urd: {
        official: "جمہوریہ یوگنڈا",
        common: "یوگنڈا",
      },
      zho: {
        official: "乌干达共和国",
        common: "乌干达",
      },
    },
    latlng: [1, 32],
    landlocked: true,
    borders: ["COD", "KEN", "RWA", "SSD", "TZA"],
    area: 241550,
    demonyms: {
      eng: {
        f: "Ugandan",
        m: "Ugandan",
      },
      fra: {
        f: "Ougandaise",
        m: "Ougandais",
      },
    },
    flag: "🇺🇬",
    maps: {
      googleMaps: "https://goo.gl/maps/Y7812hFiGa8LD9N68",
      openStreetMaps: "https://www.openstreetmap.org/relation/192796",
    },
    population: 45741000,
    gini: {
      2016: 42.8,
    },
    fifa: "UGA",
    car: {
      signs: ["EAU"],
      side: "left",
    },
    timezones: ["UTC+03:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/ug.png",
      svg: "https://flagcdn.com/ug.svg",
      alt: "The flag of Uganda is composed of six equal horizontal bands of black, yellow, red, black, yellow and red. A white circle bearing a hoist-side facing grey red-crested crane is superimposed in the center of the field.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/ug.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/ug.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [0.32, 32.55],
    },
  },

  {
    name: {
      common: "Somalia",
      official: "Federal Republic of Somalia",
      nativeName: {
        ara: {
          official: "جمهورية الصومال‎‎",
          common: "الصومال‎‎",
        },
        som: {
          official: "Jamhuuriyadda Federaalka Soomaaliya",
          common: "Soomaaliya",
        },
      },
    },
    tld: [".so"],
    cca2: "SO",
    ccn3: "706",
    cca3: "SOM",
    cioc: "SOM",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      SOS: {
        name: "Somali shilling",
        symbol: "Sh",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["52"],
    },
    capital: ["Mogadishu"],
    altSpellings: [
      "SO",
      "aṣ-Ṣūmāl",
      "Federal Republic of Somalia",
      "Jamhuuriyadda Federaalka Soomaaliya",
      "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya",
    ],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      ara: "Arabic",
      som: "Somali",
    },
    translations: {
      ara: {
        official: "جمهورية الصومال الفيدرالية",
        common: "الصومال",
      },
      bre: {
        official: "Republik Kevreadel Somalia",
        common: "Somalia",
      },
      ces: {
        official: "Somálská demokratická republika",
        common: "Somálsko",
      },
      cym: {
        official: "Federal Republic of Somalia",
        common: "Somalia",
      },
      deu: {
        official: "Bundesrepublik Somalia",
        common: "Somalia",
      },
      est: {
        official: "Somaalia Liitvabariik",
        common: "Somaalia",
      },
      fin: {
        official: "Somalian liittotasavalta",
        common: "Somalia",
      },
      fra: {
        official: "République fédérale de Somalie",
        common: "Somalie",
      },
      hrv: {
        official: "Savezna Republika Somaliji",
        common: "Somalija",
      },
      hun: {
        official: "Szomáli Szövetségi Köztársaság",
        common: "Szomália",
      },
      ita: {
        official: "Repubblica federale di Somalia",
        common: "Somalia",
      },
      jpn: {
        official: "ソマリア連邦共和国",
        common: "ソマリア",
      },
      kor: {
        official: " 소말리아 연방 공화국",
        common: "소말리아",
      },
      nld: {
        official: "Federale Republiek Somalië",
        common: "Somalië",
      },
      per: {
        official: "جمهوری فدرال سومالی",
        common: "سومالی",
      },
      pol: {
        official: "Federalna Republika Somalii",
        common: "Somalia",
      },
      por: {
        official: "República Federal da Somália",
        common: "Somália",
      },
      rus: {
        official: "Федеративная Республика Сомали",
        common: "Сомали",
      },
      slk: {
        official: "Somálska federatívna republika",
        common: "Somálsko",
      },
      spa: {
        official: "República Federal de Somalia",
        common: "Somalia",
      },
      srp: {
        official: "Савезна Република Сомалија",
        common: "Сомалија",
      },
      swe: {
        official: "Förbundsrepubliken Somalia",
        common: "Somalia",
      },
      tur: {
        official: "Somali Federal Cumhuriyeti",
        common: "Somali",
      },
      urd: {
        official: "وفاقی جمہوریہ صومالیہ",
        common: "صومالیہ",
      },
      zho: {
        official: "索马里共和国",
        common: "索马里",
      },
    },
    latlng: [10, 49],
    landlocked: false,
    borders: ["DJI", "ETH", "KEN"],
    area: 637657,
    demonyms: {
      eng: {
        f: "Somali",
        m: "Somali",
      },
      fra: {
        f: "Somalienne",
        m: "Somalien",
      },
    },
    flag: "🇸🇴",
    maps: {
      googleMaps: "https://goo.gl/maps/8of8q7D1a8p7R6Fc9",
      openStreetMaps: "https://www.openstreetmap.org/relation/192799",
    },
    population: 15893219,
    gini: {
      2017: 36.8,
    },
    fifa: "SOM",
    car: {
      signs: ["SO"],
      side: "right",
    },
    timezones: ["UTC+03:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/so.png",
      svg: "https://flagcdn.com/so.svg",
      alt: "The flag of Somalia features a large five-pointed white star centered on a light blue field.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/so.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/so.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [2.07, 45.33],
    },
    postalCode: {
      format: "@@  #####",
      regex: "^([A-Z]{2}\\d{5})$",
    },
  },

  {
    name: {
      common: "Zambia",
      official: "Republic of Zambia",
      nativeName: {
        eng: {
          official: "Republic of Zambia",
          common: "Zambia",
        },
      },
    },
    tld: [".zm"],
    cca2: "ZM",
    ccn3: "894",
    cca3: "ZMB",
    cioc: "ZAM",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      ZMW: {
        name: "Zambian kwacha",
        symbol: "ZK",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["60"],
    },
    capital: ["Lusaka"],
    altSpellings: ["ZM", "Republic of Zambia"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      eng: "English",
    },
    translations: {
      ara: {
        official: "جمهورية زامبيا",
        common: "زامبيا",
      },
      bre: {
        official: "Republik Zambia",
        common: "Zambia",
      },
      ces: {
        official: "Zambijská republika",
        common: "Zambie",
      },
      cym: {
        official: "Republic of Zambia",
        common: "Zambia",
      },
      deu: {
        official: "Republik Sambia",
        common: "Sambia",
      },
      est: {
        official: "Sambia Vabariik",
        common: "Sambia",
      },
      fin: {
        official: "Sambian tasavalta",
        common: "Sambia",
      },
      fra: {
        official: "République de Zambie",
        common: "Zambie",
      },
      hrv: {
        official: "Republika Zambija",
        common: "Zambija",
      },
      hun: {
        official: "Zambiai Köztársaság",
        common: "Zambia",
      },
      ita: {
        official: "Repubblica di Zambia",
        common: "Zambia",
      },
      jpn: {
        official: "ザンビア共和国",
        common: "ザンビア",
      },
      kor: {
        official: "잠비아 공화국",
        common: "잠비아",
      },
      nld: {
        official: "Republiek Zambia",
        common: "Zambia",
      },
      per: {
        official: "جمهوری زامبیا",
        common: "زامبیا",
      },
      pol: {
        official: "Republika Zambii",
        common: "Zambia",
      },
      por: {
        official: "República da Zâmbia",
        common: "Zâmbia",
      },
      rus: {
        official: "Республика Замбия",
        common: "Замбия",
      },
      slk: {
        official: "Zambijská republika",
        common: "Zambia",
      },
      spa: {
        official: "República de Zambia",
        common: "Zambia",
      },
      srp: {
        official: "Република Замбија",
        common: "Замбија",
      },
      swe: {
        official: "Republiken Zambia",
        common: "Zambia",
      },
      tur: {
        official: "Zambiya Cumhuriyeti",
        common: "Zambiya",
      },
      urd: {
        official: "جمہوریہ زیمبیا",
        common: "زیمبیا",
      },
      zho: {
        official: "赞比亚共和国",
        common: "赞比亚",
      },
    },
    latlng: [-15, 30],
    landlocked: true,
    borders: ["AGO", "BWA", "COD", "MWI", "MOZ", "NAM", "TZA", "ZWE"],
    area: 752612,
    demonyms: {
      eng: {
        f: "Zambian",
        m: "Zambian",
      },
      fra: {
        f: "Zambienne",
        m: "Zambien",
      },
    },
    flag: "🇿🇲",
    maps: {
      googleMaps: "https://goo.gl/maps/mweBcqvW8TppZW6q9",
      openStreetMaps: "https://www.openstreetmap.org/relation/195271",
    },
    population: 18383956,
    gini: {
      2015: 57.1,
    },
    fifa: "ZAM",
    car: {
      signs: ["RNR"],
      side: "left",
    },
    timezones: ["UTC+02:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/zm.png",
      svg: "https://flagcdn.com/zm.svg",
      alt: "The flag of Zambia has a green field, on the fly side of which is a soaring orange African fish eagle above a rectangular area divided into three equal vertical bands of red, black and orange.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/zm.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/zm.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-15.42, 28.28],
    },
    postalCode: {
      format: "#####",
      regex: "^(\\d{5})$",
    },
  },

  {
    name: {
      common: "Algeria",
      official: "People's Democratic Republic of Algeria",
      nativeName: {
        ara: {
          official: "الجمهورية الديمقراطية الشعبية الجزائرية",
          common: "الجزائر",
        },
      },
    },
    tld: [".dz", "الجزائر."],
    cca2: "DZ",
    ccn3: "012",
    cca3: "DZA",
    cioc: "ALG",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      DZD: {
        name: "Algerian dinar",
        symbol: "د.ج",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["13"],
    },
    capital: ["Algiers"],
    altSpellings: ["DZ", "Dzayer", "Algérie"],
    region: "Africa",
    subregion: "Northern Africa",
    languages: {
      ara: "Arabic",
    },
    translations: {
      ara: {
        official: "الجمهورية الديمقراطية الشعبية الجزائرية",
        common: "الجزائر",
      },
      bre: {
        official: "Republik Aljerian Demokratel ha Poblel",
        common: "Aljeria",
      },
      ces: {
        official: "Alžírská demokratická a lidová republika",
        common: "Alžírsko",
      },
      cym: {
        official: "Gweriniaeth Ddemocrataidd Pobl Algeria",
        common: "Algeria",
      },
      deu: {
        official: "Demokratische Volksrepublik Algerien",
        common: "Algerien",
      },
      est: {
        official: "Alžeeria Demokraatlik Rahvavabariik",
        common: "Alžeeria",
      },
      fin: {
        official: "Algerian demokraattinen kansantasavalta",
        common: "Algeria",
      },
      fra: {
        official: "République démocratique et populaire d'Algérie",
        common: "Algérie",
      },
      hrv: {
        official: "Narodna Demokratska Republika Alžir",
        common: "Alžir",
      },
      hun: {
        official: "Algériai Népi Demokratikus Köztársaság",
        common: "Algéria",
      },
      ita: {
        official: "Repubblica popolare democratica di Algeria",
        common: "Algeria",
      },
      jpn: {
        official: "アルジェリア人民民主共和国",
        common: "アルジェリア",
      },
      kor: {
        official: "알제리 인민 민주 공화국",
        common: "알제리",
      },
      nld: {
        official: "Democratische Volksrepubliek Algerije",
        common: "Algerije",
      },
      per: {
        official: "جمهوری دموکراتیک خلق الجزایر",
        common: "الجزایر",
      },
      pol: {
        official: "Algierska Republika Ludowo-Demokratyczna",
        common: "Algieria",
      },
      por: {
        official: "República Argelina Democrática e Popular",
        common: "Argélia",
      },
      rus: {
        official: "Народно-Демократическая Республика Алжир",
        common: "Алжир",
      },
      slk: {
        official: "Alžírska demokratická ľudová republika",
        common: "Alžírsko",
      },
      spa: {
        official: "República Argelina Democrática y Popular",
        common: "Argelia",
      },
      srp: {
        official: "Народна Демократска Република Алжир",
        common: "Алжир",
      },
      swe: {
        official: "Demokratiska folkrepubliken Algeriet",
        common: "Algeriet",
      },
      tur: {
        official: "Cezayir Demokratik Halk Cumhuriyeti",
        common: "Cezayir",
      },
      urd: {
        official: "عوامی جمہوری جمہوریہ الجزائر",
        common: "الجزائر",
      },
      zho: {
        official: "阿尔及利亚人民民主共和国",
        common: "阿尔及利亚",
      },
    },
    latlng: [28, 3],
    landlocked: false,
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    area: 2381741,
    demonyms: {
      eng: {
        f: "Algerian",
        m: "Algerian",
      },
      fra: {
        f: "Algérienne",
        m: "Algérien",
      },
    },
    flag: "🇩🇿",
    maps: {
      googleMaps: "https://goo.gl/maps/RsAyAfyaiNVb8DpW8",
      openStreetMaps: "https://www.openstreetmap.org/relation/192756",
    },
    population: 44700000,
    gini: {
      2011: 27.6,
    },
    fifa: "ALG",
    car: {
      signs: ["DZ"],
      side: "right",
    },
    timezones: ["UTC+01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/dz.png",
      svg: "https://flagcdn.com/dz.svg",
      alt: "The flag of Algeria features two equal vertical bands of green and white. A five-pointed red star within a fly-side facing red crescent is centered over the two-color boundary.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/dz.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/dz.svg",
    },
    startOfWeek: "sunday",
    capitalInfo: {
      latlng: [36.75, 3.05],
    },
    postalCode: {
      format: "#####",
      regex: "^(\\d{5})$",
    },
  },

  {
    name: {
      common: "Egypt",
      official: "Arab Republic of Egypt",
      nativeName: {
        ara: {
          official: "جمهورية مصر العربية",
          common: "مصر",
        },
      },
    },
    tld: [".eg", ".مصر"],
    cca2: "EG",
    ccn3: "818",
    cca3: "EGY",
    cioc: "EGY",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      EGP: {
        name: "Egyptian pound",
        symbol: "£",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["0"],
    },
    capital: ["Cairo"],
    altSpellings: ["EG", "Arab Republic of Egypt"],
    region: "Africa",
    subregion: "Northern Africa",
    languages: {
      ara: "Arabic",
    },
    translations: {
      ara: {
        official: "جمهورية مصر العربية",
        common: "مصر",
      },
      bre: {
        official: "Republik arab Egipt",
        common: "Egipt",
      },
      ces: {
        official: "Egyptská arabská republika",
        common: "Egypt",
      },
      cym: {
        official: "Gweriniaeth Arabaidd yr Aifft",
        common: "Yr Aifft",
      },
      deu: {
        official: "Arabische Republik Ägypten",
        common: "Ägypten",
      },
      est: {
        official: "Egiptuse Araabia Vabariik",
        common: "Egiptus",
      },
      fin: {
        official: "Egyptin arabitasavalta",
        common: "Egypti",
      },
      fra: {
        official: "République arabe d'Égypte",
        common: "Égypte",
      },
      hrv: {
        official: "Arapska Republika Egipat",
        common: "Egipat",
      },
      hun: {
        official: "Egyiptomi Arab Köztársaság",
        common: "Egyiptom",
      },
      ita: {
        official: "Repubblica araba d'Egitto",
        common: "Egitto",
      },
      jpn: {
        official: "エジプト·アラブ共和国",
        common: "エジプト",
      },
      kor: {
        official: "이집트 아랍 공화국",
        common: "이집트",
      },
      nld: {
        official: "Arabische Republiek Egypte",
        common: "Egypte",
      },
      per: {
        official: "جمهوری عربی مصر",
        common: "مصر",
      },
      pol: {
        official: "Arabska Republika Egiptu",
        common: "Egipt",
      },
      por: {
        official: "República Árabe do Egipto",
        common: "Egito",
      },
      rus: {
        official: "Арабская Республика Египет",
        common: "Египет",
      },
      slk: {
        official: "Egyptská arabská republika",
        common: "Egypt",
      },
      spa: {
        official: "República Árabe de Egipto",
        common: "Egipto",
      },
      srp: {
        official: "Арапска Република Египат",
        common: "Египат",
      },
      swe: {
        official: "Arabrepubliken Egypten",
        common: "Egypten",
      },
      tur: {
        official: "Mısır Arap Cumhuriyeti",
        common: "Mısır",
      },
      urd: {
        official: "مصری عرب جمہوریہ",
        common: "مصر",
      },
      zho: {
        official: "阿拉伯埃及共和国",
        common: "埃及",
      },
    },
    latlng: [27, 30],
    landlocked: false,
    borders: ["ISR", "LBY", "PSE", "SDN"],
    area: 1002450,
    demonyms: {
      eng: {
        f: "Egyptian",
        m: "Egyptian",
      },
      fra: {
        f: "Égyptienne",
        m: "Égyptien",
      },
    },
    flag: "🇪🇬",
    maps: {
      googleMaps: "https://goo.gl/maps/uoDRhXbsqjG6L7VG7",
      openStreetMaps: "https://www.openstreetmap.org/relation/1473947",
    },
    population: 102334403,
    gini: {
      2017: 31.5,
    },
    fifa: "EGY",
    car: {
      signs: ["ET"],
      side: "right",
    },
    timezones: ["UTC+02:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/eg.png",
      svg: "https://flagcdn.com/eg.svg",
      alt: "The flag of Egypt is composed of three equal horizontal bands of red, white and black, with Egypt's national emblem — a hoist-side facing gold eagle of Saladin — centered in the white band.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/eg.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/eg.svg",
    },
    startOfWeek: "sunday",
    capitalInfo: {
      latlng: [30.05, 31.25],
    },
    postalCode: {
      format: "#####",
      regex: "^(\\d{5})$",
    },
  },

  {
    name: {
      common: "Madagascar",
      official: "Republic of Madagascar",
      nativeName: {
        fra: {
          official: "République de Madagascar",
          common: "Madagascar",
        },
        mlg: {
          official: "Repoblikan'i Madagasikara",
          common: "Madagasikara",
        },
      },
    },
    tld: [".mg"],
    cca2: "MG",
    ccn3: "450",
    cca3: "MDG",
    cioc: "MAD",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      MGA: {
        name: "Malagasy ariary",
        symbol: "Ar",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["61"],
    },
    capital: ["Antananarivo"],
    altSpellings: [
      "MG",
      "Republic of Madagascar",
      "Repoblikan'i Madagasikara",
      "République de Madagascar",
    ],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      fra: "French",
      mlg: "Malagasy",
    },
    translations: {
      ara: {
        official: "جمهورية مدغشقر",
        common: "مدغشقر",
      },
      bre: {
        official: "Republik Madagaskar",
        common: "Madagaskar",
      },
      ces: {
        official: "Madagaskarská republika",
        common: "Madagaskar",
      },
      cym: {
        official: "Republic of Madagascar",
        common: "Madagascar",
      },
      deu: {
        official: "Republik Madagaskar",
        common: "Madagaskar",
      },
      est: {
        official: "Madagaskari Vabariik",
        common: "Madagaskar",
      },
      fin: {
        official: "Madagaskarin tasavalta",
        common: "Madagaskar",
      },
      fra: {
        official: "République de Madagascar",
        common: "Madagascar",
      },
      hrv: {
        official: "Republika Madagaskar",
        common: "Madagaskar",
      },
      hun: {
        official: "Madagaszkári Köztársaság",
        common: "Madagaszkár",
      },
      ita: {
        official: "Repubblica del Madagascar",
        common: "Madagascar",
      },
      jpn: {
        official: "マダガスカル共和国",
        common: "マダガスカル",
      },
      kor: {
        official: "마다가스카르 공화국",
        common: "마다가스카르",
      },
      nld: {
        official: "Republiek Madagaskar",
        common: "Madagaskar",
      },
      per: {
        official: "جمهوری ماداگاسکار",
        common: "ماداگاسکار",
      },
      pol: {
        official: "Republika Madagaskaru",
        common: "Madagaskar",
      },
      por: {
        official: "República de Madagáscar",
        common: "Madagáscar",
      },
      rus: {
        official: "Республика Мадагаскар",
        common: "Мадагаскар",
      },
      slk: {
        official: "Madagaskarská republika",
        common: "Madagaskar",
      },
      spa: {
        official: "República de Madagascar",
        common: "Madagascar",
      },
      srp: {
        official: "Република Мадагаскар",
        common: "Мадагаскар",
      },
      swe: {
        official: "Republiken Madagaskar",
        common: "Madagaskar",
      },
      tur: {
        official: "Madagaskar Cumhuriyeti",
        common: "Madagaskar",
      },
      urd: {
        official: "جمہوریہ مڈغاسکر",
        common: "مڈغاسکر",
      },
      zho: {
        official: "马达加斯加共和国",
        common: "马达加斯加",
      },
    },
    latlng: [-20, 47],
    landlocked: false,
    area: 587041,
    demonyms: {
      eng: {
        f: "Malagasy",
        m: "Malagasy",
      },
      fra: {
        f: "Malgache",
        m: "Malgache",
      },
    },
    flag: "🇲🇬",
    maps: {
      googleMaps: "https://goo.gl/maps/AHQh2ABBaFW6Ngj26",
      openStreetMaps: "https://www.openstreetmap.org/relation/447325",
    },
    population: 27691019,
    gini: {
      2012: 42.6,
    },
    fifa: "MAD",
    car: {
      signs: ["RM"],
      side: "right",
    },
    timezones: ["UTC+03:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/mg.png",
      svg: "https://flagcdn.com/mg.svg",
      alt: "The flag of Madagascar features a white vertical band on the hoist side that takes up about one-third the width of the field, and two equal horizontal bands of red and green adjoining the vertical band.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/mg.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/mg.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-18.92, 47.52],
    },
    postalCode: {
      format: "###",
      regex: "^(\\d{3})$",
    },
  },
];

export default function MainApp({ onMode, isDarkMode }) {
  const [name, setName] = useState("");
  const [countries2, setCountries2] = useState("");
  const [region, setRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountries() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${name}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();

          setCountries2(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            console.error(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (name.length < 3) {
        setError("");
        return;
      }
      fetchCountries();

      return function () {
        controller.abort();
      };
    },
    [name]
  );

  useEffect(
    function () {
      async function fetchByRegion() {
        try {
          setIsLoading(true);
          const request = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );
          const data = await request.json();
          setCountries2(data);
        } finally {
          setIsLoading(false);
        }
      }

      if (region.length < 3) return;
      fetchByRegion();
    },
    [region]
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
      }
    },
    [isDarkMode]
  );

  function handleRegion(e) {
    setRegion(e);
    setName("");
  }

  function handleName(e) {
    setName(e);
  }

  function handleSelected(country) {
    setSelected(country);
    setIsOpen(true);
  }

  return (
    <div className="main-app">
      {!isOpen && (
        <Inputs
          name={name}
          onSetName={handleName}
          region={region}
          onSetRegion={handleRegion}
          isDarkMode={isDarkMode}
        />
      )}
      {!isOpen && !isLoading && (
        <Countries
          countries={countries2 ? countries2 : countries1}
          selected={selected}
          onSelect={handleSelected}
          isDarkMode={isDarkMode}
        />
      )}

      {error && !isLoading && <Error error={error} />}

      {isLoading && <Loader />}

      {isOpen && !isLoading && (
        <ViewCountry
          selected={selected}
          setIsOpen={setIsOpen}
          setSelected={setSelected}
          isDarkMode={isDarkMode}
        />
      )}

      {/* {!isOpen ? (
        <Countries
          countries={countries2 ? countries2 : countries1}
          selected={selected}
          onSelect={handleSelected}
        />
      ) : (
        <ViewCountry
          selected={selected}
          setIsOpen={setIsOpen}
          setSelected={setSelected}
        />
      )} */}
    </div>
  );
}
