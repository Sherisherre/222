export interface LinkItem {
  id: string;
  name: string;
  url: string;
  iconName: string; // Used to select Lucide icon
  subCategory?: string; // e.g. "مستديم", "حوسب", "Moves", "مبادرات الدفعة"
  keywords: string[]; // for quick search
}

export interface LevelData {
  number: number;
  name: string;
  sections: {
    title: string;
    icon: string;
    links: LinkItem[];
  }[];
}

export const COLLEGE_LINKS: LinkItem[] = [
  {
    id: "col-1",
    name: "قناة كلية الحاسب",
    url: "https://t.me/qassimuniversityc",
    iconName: "Megaphone",
    keywords: ["قناة", "كلية", "كليه", "الحاسب", "حاسب", "عام", "قنوات", "qassimuniversityc"],
  },
  {
    id: "col-2",
    name: "مناقشة كلية الحاسب",
    url: "https://t.me/qassimuniversityIT",
    iconName: "MessageSquare",
    keywords: ["مناقشة", "مناقشه", "جروب", "قروب", "كلية", "كليه", "الحاسب", "حاسب", "عام", "qassimuniversityIT"],
  },
  {
    id: "col-3",
    name: "قناة كلية الحاسب",
    url: "https://t.me/COC_QU_channel",
    iconName: "Laptop",
    keywords: ["قناة", "قناه", "حوسب", "حوسب عام", "مبادرة", "مبادره", "COC_QU_channel"],
  },
  {
    id: "col-4",
    name: "مناقشة كلية الحاسب",
    url: "https://t.me/COC_QU",
    iconName: "MessageSquare",
    keywords: ["مناقشة", "مناقشه", "جروب", "قروب", "حوسب", "إستفسارات", "استفسارات", "COC_QU"],
  },
];

export const LEVELS_DATA: LevelData[] = [
  {
    number: 1,
    name: "المستوى الأول",
    sections: [
      {
        title: "مستديم",
        icon: "Star",
        links: [
          {
            id: "lvl1-1",
            name: "قنوات المواد",
            url: "https://t.me/addlist/LH-wE8fs_4ExNjE0",
            iconName: "Bookmark",
            keywords: ["قنوات", "قناه", "مواد", "مقررات", "مستديم", "المستوى الاول", "الاول", "مجلد", "فولدر"],
          },
        ],
      },
      {
        title: "حوسب",
        icon: "Laptop",
        links: [
          {
            id: "lvl1-2",
            name: "قناة المستوى الأول",
            url: "https://t.me/hawsib1",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "حوسب", "المستوى الاول", "الاول", "hawsib1"],
          },
          {
            id: "lvl1-3",
            name: "مناقشة المستوى الأول",
            url: "https://t.me/hawsib_1",
            iconName: "MessageSquare",
            keywords: ["مناقشة", "مناقشه", "جروب", "قروب", "حوسب", "المستوى الاول", "الاول", "hawsib_1"],
          },
        ],
      },
    ],
  },
  {
    number: 2,
    name: "المستوى الثاني",
    sections: [
      {
        title: "مستديم",
        icon: "Star",
        links: [
          {
            id: "lvl2-1",
            name: "قنوات المواد",
            url: "https://t.me/addlist/UZHn4fPZTvI4ODBk",
            iconName: "Bookmark",
            keywords: ["قنوات", "قناه", "مواد", "مقررات", "مستديم", "المستوى الثاني", "الثاني", "مجلد", "فولدر"],
          },
        ],
      },
      {
        title: "حوسب",
        icon: "Laptop",
        links: [
          {
            id: "lvl2-2",
            name: "قناة المستوى الثاني",
            url: "https://t.me/hawsib2",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "حوسب", "المستوى الثاني", "الثاني", "hawsib2"],
          },
          {
            id: "lvl2-3",
            name: "مناقشة المستوى الثاني",
            url: "https://t.me/hawsib2", // Note: original used hawsib2 for both
            iconName: "MessageSquare",
            keywords: ["مناقشة", "مناقشه", "جروب", "قروب", "حوسب", "المستوى الثاني", "الثاني", "hawsib2"],
          },
        ],
      },
    ],
  },
  {
    number: 3,
    name: "المستوى الثالث",
    sections: [
      {
        title: "مستديم",
        icon: "Star",
        links: [
          {
            id: "lvl3-1",
            name: "قنوات المواد",
            url: "https://t.me/addlist/WY-nb6Wz4EtkYjZk",
            iconName: "Bookmark",
            keywords: ["قنوات", "قناه", "مواد", "مقررات", "مستديم", "المستوى الثالث", "الثالث", "مجلد", "فولدر"],
          },
        ],
      },
      {
        title: "حوسب",
        icon: "Laptop",
        links: [
          {
            id: "lvl3-2",
            name: "قناة المستوى الثالث",
            url: "https://t.me/hawsib3",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "حوسب", "المستوى الثالث", "الثالث", "hawsib3"],
          },
          {
            id: "lvl3-3",
            name: "مناقشة المستوى الثالث",
            url: "https://t.me/hawsib_3",
            iconName: "MessageSquare",
            keywords: ["مناقشة", "مناقشه", "جروب", "قروب", "حوسب", "المستوى الثالث", "الثالث", "hawsib_3"],
          },
        ],
      },
    ],
  },
  {
    number: 4,
    name: "المستوى الرابع",
    sections: [
      {
        title: "مستديم",
        icon: "Star",
        links: [
          {
            id: "lvl4-1",
            name: "قنوات المواد",
            url: "https://t.me/addlist/ED-1PugxTU42NjE8",
            iconName: "Bookmark",
            keywords: ["قنوات", "قناه", "مواد", "مقررات", "مستديم", "المستوى الرابع", "الرابع", "مجلد", "فولدر"],
          },
        ],
      },
      {
        title: "حوسب",
        icon: "Laptop",
        links: [
          {
            id: "lvl4-2",
            name: "قناة المستوى الرابع",
            url: "https://t.me/hawsib3", // Exact as original code
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "حوسب", "المستوى الرابع", "الرابع", "hawsib3"],
          },
          {
            id: "lvl4-3",
            name: "مناقشة المستوى الرابع",
            url: "https://t.me/hawsib4",
            iconName: "MessageSquare",
            keywords: ["مناقشة", "مناقشه", "جروب", "قروب", "حوسب", "المستوى الرابع", "الرابع", "hawsib4"],
          },
        ],
      },
    ],
  },
  {
    number: 5,
    name: "المستوى الخامس",
    sections: [
      {
        title: "Moves",
        icon: "Compass",
        links: [
          {
            id: "lvl5-1",
            name: "IT",
            url: "https://t.me/IT_5_moves",
            iconName: "Network",
            keywords: ["it", "تقنية المعلومات", "تقنيه", "المستوى الخامس", "الخامس", "moves", "IT_5_moves"],
          },
          {
            id: "lvl5-2",
            name: "CS",
            url: "https://t.me/Brightofcs5",
            iconName: "Network",
            keywords: ["cs", "علوم الحاسب", "علوم", "المستوى الخامس", "الخامس", "moves", "Brightofcs5"],
          },
          {
            id: "lvl5-3",
            name: "CE",
            url: "https://t.me/CEGOATS/1",
            iconName: "Network",
            keywords: ["ce", "هندسة الحاسب", "هندسه", "المستوى الخامس", "الخامس", "moves", "CEGOATS"],
          },
        ],
      },
      {
        title: "مبادرات الدفعة",
        icon: "Users",
        links: [
          {
            id: "lvl5-4",
            name: "قناة المستوى",
            url: "https://t.me/COMPUTERLEVEL5",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "مستوى خامس", "المستوى الخامس", "الخامس", "مبادرات", "COMPUTERLEVEL5"],
          },
        ],
      },
    ],
  },
  {
    number: 6,
    name: "المستوى السادس",
    sections: [
      {
        title: "Moves",
        icon: "Compass",
        links: [
          {
            id: "lvl6-1",
            name: "جميع التخصصات",
            url: "https://t.me/COC_6_moves",
            iconName: "Globe",
            keywords: ["جميع التخصصات", "تخصصات", "المستوى السادس", "السادس", "moves", "COC_6_moves"],
          },
        ],
      },
      {
        title: "مبادرات الدفعة",
        icon: "Users",
        links: [
          {
            id: "lvl6-2",
            name: "قناة المستوى",
            url: "https://t.me/computerlevel6",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "مستوى سادس", "المستوى السادس", "السادس", "مبادرات", "computerlevel6"],
          },
        ],
      },
    ],
  },
  {
    number: 7,
    name: "المستوى السابع",
    sections: [
      {
        title: "Moves",
        icon: "Compass",
        links: [
          {
            id: "lvl7-1",
            name: "جميع التخصصات",
            url: "https://t.me/COC_7_moves",
            iconName: "Globe",
            keywords: ["جميع التخصصات", "تخصصات", "المستوى السابع", "السابع", "moves", "COC_7_moves"],
          },
        ],
      },
      {
        title: "مبادرات الدفعة",
        icon: "Users",
        links: [
          {
            id: "lvl7-2",
            name: "قناة المستوى",
            url: "https://t.me/COMPUTERLEVEL_7",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "مستوى سابع", "المستوى السابع", "السابع", "مبادرات", "COMPUTERLEVEL_7"],
          },
        ],
      },
    ],
  },
  {
    number: 8,
    name: "المستوى الثامن",
    sections: [
      {
        title: "Moves",
        icon: "Compass",
        links: [
          {
            id: "lvl8-1",
            name: "جميع التخصصات",
            url: "https://t.me/COC_8_moves",
            iconName: "Globe",
            keywords: ["جميع التخصصات", "تخصصات", "المستوى الثامن", "الثامن", "moves", "COC_8_moves"],
          },
        ],
      },
      {
        title: "مبادرات الدفعة",
        icon: "Users",
        links: [
          {
            id: "lvl8-2",
            name: "قناة المستوى",
            url: "https://t.me/+e5BVsgTxwzE2YTQ0",
            iconName: "Megaphone",
            keywords: ["قناة", "قناه", "مستوى ثامن", "المستوى الثامن", "الثامن", "مبادرات"],
          },
        ],
      },
    ],
  },
];
