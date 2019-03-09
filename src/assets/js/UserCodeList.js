const SexList = [
  {
    'code': '1',
    'name': '男'
  },
  {
    'code': '2',
    'name': '女'
  },
  {
    'code': 'U',
    'name': '未知'
  }
]
const Familylist = [
  {
    'code': '10',
    'name': '配偶'
  }, {
     'code': '12',
     'name': '子'
  }, {
     'code': '14',
     'name': '女婿'
  }, {
     'code': '16',
     'name': '女'
  }, {
     'code': '18',
     'name': '儿媳'
   }, {
     'code': '20',
     'name': '孙子/孙女'
   }, {
     'code': '22',
     'name': '父/母'
   }, {
     'code': '24',
     'name': '公/婆'
   }, {
     'code': '26',
     'name': '岳父/母'
   }, {
     'code': '28',
     'name': '兄/嫂'
   }, {
     'code': '30',
     'name': '弟/弟媳'
   }, {
     'code': '32',
     'name': '姐/姐夫'
   }, {
     'code': '34',
     'name': '妹/妹夫'
   }, {
     'code': '36',
     'name': '夫兄/姐'
   }, {
    'code': '38',
    'name': '夫弟/妹'
  }, {
    'code': '40',
    'name': '妻兄/姐'
  }, {
    'code': '42',
    'name': '妻弟/妹'
  }, {
    'code': '44',
    'name': '伯父/母'
  }, {
    'code': '46',
    'name': '叔父/母'
  }, {
    'code': '48',
    'name': '舅父/母'
  }, {
    'code': '50',
    'name': '姨父/母'
  }, {
    'code': '52',
    'name': '姑父/母'
  }, {
    'code': '54',
    'name': '堂/表兄弟姐妹'
  }, {
    'code': '56',
    'name': '侄子/女'
  }, {
    'code': '58',
    'name': '外甥/外甥女'
  }, {
    'code': '60',
    'name': '外公/外婆'
  }, {
    'code': '62',
    'name': '爷爷/奶奶'
  }, {
    'code': '64',
    'name': '其他'
  }]
const PoliticalList = [
  {
    'code': '01',
    'name': '中共党员'
  },
  {
    'code': '02',
    'name': '中共预备党员'
  },
  {
    'code': '03',
    'name': '共青团员'
  },
  {
    'code': '04',
    'name': '民革会员'
  },
  {
    'code': '05',
    'name': '民盟盟员'
  },
  {
    'code': '06',
    'name': '民建会员'
  },
  {
    'code': '07',
    'name': '民进会员'
  },
  {
    'code': '08',
    'name': '农工党党员'
  },
  {
    'code': '09',
    'name': '致公党党员'
  },
  {
    'code': '10',
    'name': '九三学社社员'
  },
  {
    'code': '11',
    'name': '台盟盟员'
  },
  {
    'code': '12',
    'name': '无党派民主人士'
  },
  {
    'code': '13',
    'name': '群众'
  }
]
const MarriageList = [
  {
    'code': '1',
    'name': '未婚'
  },
  {
    'code': '2',
    'name': '已婚'
  },
  {
    'code': '3',
    'name': '丧偶'
  },
  {
    'code': '4',
    'name': '离婚'
  }
]
const AccountList = [
  {
    'code': '1',
    'name': '农业'
  },
  {
    'code': '2',
    'name': '非农'
  },
  {
    'code': '3',
    'name': '台湾籍'
  },
  {
    'code': '4',
    'name': '其他'
  },
  {
    'code': '5',
    'name': '居民'
  }
]
const NoList = [
  {
    'code': 'Y',
    'name': '是'
  },
  {
    'code': 'N',
    'name': '否'
  }
]
const EducationList = [
  {
    'code': '81',
    'name': '初中及以下'
  },
  {
    'code': '71',
    'name': '高中'
  },
  {
    'code': '75',
    'name': '职业高中'
  },
  {
    'code': '61',
    'name': '中技'
  },
  {
    'code': '51',
    'name': '中专'
  },
  {
    'code': '41',
    'name': '大专'
  },
  {
    'code': '30',
    'name': '大学'
  },
  {
    'code': '20',
    'name': '硕士研究生'
  },
  {
    'code': '10',
    'name': '博士研究生'
  },
  {
    'code': '0',
    'name': '博士后'
  }
]
const SchoolType = [
  {
    'code': '00',
    'name': '211高等学校'
  },
  {
    'code': '10',
    'name': '普通高等学校'
  },
  {
    'code': '20',
    'name': '成人高等学校'
  },
  {
    'code': '30',
    'name': '党校'
  },
  {
    'code': '40',
    'name': '专业类院校'
  },
  {
    'code': '50',
    'name': '科研机构'
  },
  {
    'code': '60',
    'name': '985高等学校'
  },
  {
    'code': '70',
    'name': '网络教育'
  },
  {
    'code': '90',
    'name': '民办学校'
  },
  {
    'code': '99',
    'name': '其他'
  }
]
const TeachTypeList = [
  {
    'code': '1',
    'name': '普通全日制'
  },
  {
    'code': '10',
    'name': '全日制'
  },
  {
    'code': '11',
    'name': '业余'
  },
  {
    'code': '12',
    'name': '脱产'
  },
  {
    'code': '2',
    'name': '在职全脱产'
  },
  {
    'code': '3',
    'name': '在职半脱产'
  },
  {
    'code': '4',
    'name': '在职不脱产'
  },
  {
    'code': '5',
    'name': '远程教育'
  },
  {
    'code': '6',
    'name': '函授'
  },
  {
    'code': '7',
    'name': '成人教育'
  },
  {
    'code': '8',
    'name': '网络教育'
  },
  {
    'code': '9',
    'name': '自学考试'
  }
]
const ProfessionTypeList = [
  {
    'code': '01',
    'name': '哲学'
  },
  {
    'code': '02',
    'name': '经济学'
  },
  {
    'code': '03',
    'name': '法学'
  },
  {
    'code': '04',
    'name': '教育学'
  },
  {
    'code': '05',
    'name': '文学'
  },
  {
    'code': '06',
    'name': '历史学'
  },
  {
    'code': '07',
    'name': '理学'
  },
  {
    'code': '08',
    'name': '工学'
  },
  {
    'code': '09',
    'name': '农学'
  },
  {
    'code': '10',
    'name': '医学'
  },
  {
    'code': '11',
    'name': '管理学'
  },
  {
    'code': '12',
    'name': '军事学'
  },
  {
    'code': '13',
    'name': '艺术学'
  }
]
const LanguageList = [
  {
    'code': '1',
    'name': '英语'
  },
  {
    'code': '2',
    'name': '德语'
  },
  {
    'code': '3',
    'name': '日语'
  },
  {
    'code': '4',
    'name': '法语'
  },
  {
    'code': '5',
    'name': '俄语'
  },
  {
    'code': '6',
    'name': '韩语'
  },
  {
    'code': '7',
    'name': '汉语'
  },
  {
    'code': '8',
    'name': '西班牙语'
  },
  {
    'code': '9',
    'name': '阿拉伯语'
  },
  {
    'code': '10',
    'name': '葡萄牙语'
  },
  {
    'code': '11',
    'name': '越南语'
  },
  {
    'code': '12',
    'name': '拉丁语'
  },
  {
    'code': '13',
    'name': '蒙语'
  }
]
// 英语
const languageENList = [
  {
    'code': '1',
    'name': '英语4级'
  },
  {
    'code': '2',
    'name': '英语6级'
  },
  {
    'code': '3',
    'name': '英语专业4级'
  },
  {
    'code': '4',
    'name': '英语托业'
  },
  {
    'code': '5',
    'name': '英语专业8级'
  },
  {
    'code': '22',
    'name': '英语雅思'
  },
  {
    'code': '23',
    'name': '英语托福'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 德语
const LanguageGermanList = [
  {
    'code': '18',
    'name': '德语4级'
  },
  {
    'code': '19',
    'name': '德语6级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 日语
const LanguageJapaneseList = [
  {
    'code': '6',
    'name': '日语1级'
  },
  {
    'code': '7',
    'name': '日语2级'
  },
  {
    'code': '8',
    'name': '日语3级'
  },
  {
    'code': '9',
    'name': '日语4级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 法语
const LanguageFrenchList = [
  {
    'code': '25',
    'name': '法语专业4级'
  },
  {
    'code': '26',
    'name': '法语专业8级'
  },
  {
    'code': '27',
    'name': '法语公共4级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 俄语
const LanguageRussianList = [
  {
    'code': '21',
    'name': '俄语3级'
  },
  {
    'code': '16',
    'name': '俄语4级'
  },
  {
    'code': '24',
    'name': '俄语6级'
  },
  {
    'code': '17',
    'name': '俄语8级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 韩语
const LanguageKoreanList = [
  {
    'code': '10',
    'name': '韩语1级'
  },
  {
    'code': '11',
    'name': '韩语2级'
  },
  {
    'code': '12',
    'name': '韩语3级'
  },
  {
    'code': '13',
    'name': '韩语4级'
  },
  {
    'code': '14',
    'name': '韩语5级'
  },
  {
    'code': '15',
    'name': '韩语6级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 其他语言
const LanguageOtherList = [
  {
    'code': '40',
    'name': '其他'
  }
]
// 熟练程度
const SkilledList = [
  {
    'code': '4',
    'name': '一般'
  },
  {
    'code': '3',
    'name': '良好'
  },
  {
    'code': '2',
    'name': '熟练'
  },
  {
    'code': '1',
    'name': '精通'
  }
]
const DegreeList = [
  {
    'code': '4',
    'name': '学士'
  },
  {
    'code': '3',
    'name': '硕士'
  },
  {
    'code': '2',
    'name': '博士'
  },
  {
    'code': '1',
    'name': '名誉博士'
  }
]
const CareerLeveList = [
  {
    'code': '',
    'name': '无'
  },
  {
    'code': '10',
    'name': '初级'
  },
  {
    'code': '20',
    'name': '中级'
  },
  {
    'code': '30',
    'name': '高级'
  },
  {
    'code': '40',
    'name': '技师'
  },
  {
    'code': '50',
    'name': '高级技师'
  } 
]
export default {
  Familylist,
  SexList,
  PoliticalList,
  MarriageList,
  AccountList,
  NoList,
  EducationList,
  SchoolType,
  TeachTypeList,
  ProfessionTypeList,
  LanguageList,
  languageENList,
  LanguageGermanList,
  LanguageJapaneseList,
  LanguageRussianList,
  LanguageFrenchList,
  LanguageKoreanList,
  LanguageOtherList,
  SkilledList,
  DegreeList,
  CareerLeveList
}
