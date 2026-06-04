/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type BodySystemId = 'nervous' | 'circulatory' | 'respiratory' | 'digestive' | 'skeletal';

export interface BodySystem {
  id: BodySystemId;
  name: string;
  icon: string;
  color: string; // Tailwind class color base like 'primary'
  description: string;
  stats: { label: string; value: string }[];
  fact: string;
  imageUrl: string;
}

export interface Question {
  id: number;
  text: string;
  options: { label: string; text: string; isCorrect: boolean }[];
  systemId: BodySystemId;
  imageUrl: string;
}

export const SYSTEMS: BodySystem[] = [
  {
    id: 'nervous',
    name: 'מערכת העצבים',
    icon: 'Brain',
    color: 'primary',
    description: 'מרכז הבקרה של הגוף המעבד מידע מכל החושים.',
    stats: [{ label: 'תאי עצב', value: '86 מיליארד' }],
    fact: 'המידע במערכת העצבים עובר במהירות של עד 400 קמ"ש!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  {
    id: 'circulatory',
    name: 'מערכת הדם',
    icon: 'Heart',
    color: 'secondary',
    description: 'המשאבה של הגוף המזרימה חמצן לכל תא ותא.',
    stats: [
      { label: 'פעימות ביום', value: '100,000' },
      { label: 'גודל הלב', value: 'כגודל אגרוף' }
    ],
    fact: 'הלב מסוגל להמשיך לפעום גם מחוץ לגוף בזכות מערכת חשמלית עצמאית!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  {
    id: 'respiratory',
    name: 'מערכת הנשימה',
    icon: 'Wind',
    color: 'primary',
    description: 'המערכת שמחברת אותנו לאוויר שאנחנו נושמים ומספקת חמצן לדם.',
    stats: [{ label: 'נשימות ביום', value: '20,000' }],
    fact: 'הריאה הימנית גדולה יותר מהריאה השמאלית כדי לפנות מקום ללב!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 'digestive',
    name: 'מערכת העיכול',
    icon: 'Utensils',
    color: 'tertiary',
    description: 'המערכת שאחראית על פירוק המזון והפיכתו לאנרגיה.',
    stats: [{ label: 'אורך המעיים', value: '7-8 מטרים' }],
    fact: 'הקיבה שלנו יכולה להתרחב ולהכיל עד 2 ליטרים של מזון ושתייה!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 'skeletal',
    name: 'מערכת השלד',
    icon: 'Accessibility',
    color: 'primary',
    description: 'המסגרת של הגוף ששומרת על הצורה שלנו ומגנה על האיברים הפנימיים.',
    stats: [{ label: 'מספר עצמות', value: '206' }],
    fact: 'תינוקות נולדים עם כ-300 עצמות, אבל ככל שגדלים חלקן מתאחות!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  }
];

export const QUESTIONS: Question[] = [
  // Circulatory
  {
    id: 1,
    text: 'איזה איבר מזרים דם לכל הגוף?',
    systemId: 'circulatory',
    options: [
      { label: 'א', text: 'מוח', isCorrect: false },
      { label: 'ב', text: 'לב', isCorrect: true },
      { label: 'ג', text: 'כבד', isCorrect: false },
      { label: 'ד', text: 'ריאה', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  {
    id: 2,
    text: 'מה הלב מעביר לכל חלקי הגוף דרך הדם?',
    systemId: 'circulatory',
    options: [
      { label: 'א', text: 'אוכל בלבד', isCorrect: false },
      { label: 'ב', text: 'חמצן וחומרי מזון', isCorrect: true },
      { label: 'ג', text: 'מים בלבד', isCorrect: false },
      { label: 'ד', text: 'פחמן דו חמצני', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  {
    id: 3,
    text: 'איזה צבע יש לדם שלנו?',
    systemId: 'circulatory',
    options: [
      { label: 'א', text: 'כחול', isCorrect: false },
      { label: 'ב', text: 'ירוק', isCorrect: false },
      { label: 'ג', text: 'אדום', isCorrect: true },
      { label: 'ד', text: 'צהוב', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  {
    id: 4,
    text: 'מה גורם ללב לפעום מהר יותר?',
    systemId: 'circulatory',
    options: [
      { label: 'א', text: 'שינה', isCorrect: false },
      { label: 'ב', text: 'פעילות גופנית', isCorrect: true },
      { label: 'ג', text: 'קריאת ספר', isCorrect: false },
      { label: 'ד', text: 'צפייה בטלוויזיה', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  {
    id: 5,
    text: 'איזה כלי דם מחזירים דם אל הלב?',
    systemId: 'circulatory',
    options: [
      { label: 'א', text: 'עורקים', isCorrect: false },
      { label: 'ב', text: 'ורידים', isCorrect: true },
      { label: 'ג', text: 'נימים', isCorrect: false },
      { label: 'ד', text: 'עצבים', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  // Nervous
  {
    id: 6,
    text: 'איזה איבר הוא "מנהל העבודה" של הגוף?',
    systemId: 'nervous',
    options: [
      { label: 'א', text: 'הקיבה', isCorrect: false },
      { label: 'ב', text: 'הלב', isCorrect: false },
      { label: 'ג', text: 'המוח', isCorrect: true },
      { label: 'ד', text: 'הכבד', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  {
    id: 7,
    text: 'איך המוח שולח הוראות לשאר הגוף?',
    systemId: 'nervous',
    options: [
      { label: 'א', text: 'במכתבים', isCorrect: false },
      { label: 'ב', text: 'באותות חשמליים', isCorrect: true },
      { label: 'ג', text: 'דרך זרם הדם', isCorrect: false },
      { label: 'ד', text: 'באמצעות שרירים', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  {
    id: 8,
    text: 'איזה חושים קשורים למערכת העצבים?',
    systemId: 'nervous',
    options: [
      { label: 'א', text: 'ראייה ושמיעה', isCorrect: false },
      { label: 'ב', text: 'טעם וריח', isCorrect: false },
      { label: 'ג', text: 'מישוש', isCorrect: false },
      { label: 'ד', text: 'כל התשובות נכונות', isCorrect: true }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  {
    id: 9,
    text: 'מה מגן על המוח שלנו?',
    systemId: 'nervous',
    options: [
      { label: 'א', text: 'הגולגולת', isCorrect: true },
      { label: 'ב', text: 'הצלעות', isCorrect: false },
      { label: 'ג', text: 'העור', isCorrect: false },
      { label: 'ד', text: 'השרירים', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  {
    id: 10,
    text: 'איזה חלק במוח אחראי על שיווי המשקל?',
    systemId: 'nervous',
    options: [
      { label: 'א', text: 'המוח הגדול', isCorrect: false },
      { label: 'ב', text: 'המוח הקטן', isCorrect: true },
      { label: 'ג', text: 'גזע המוח', isCorrect: false },
      { label: 'ד', text: 'חוט השדרה', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  // Respiratory
  {
    id: 11,
    text: 'איזה גז אנחנו שואפים מהאוויר?',
    systemId: 'respiratory',
    options: [
      { label: 'א', text: 'פחמן דו חמצני', isCorrect: false },
      { label: 'ב', text: 'חמצן', isCorrect: true },
      { label: 'ג', text: 'חנקן', isCorrect: false },
      { label: 'ד', text: 'מימן', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 12,
    text: 'איפה מתבצע חילוף הגזים בגוף?',
    systemId: 'respiratory',
    options: [
      { label: 'א', text: 'בלב', isCorrect: false },
      { label: 'ב', text: 'בקיבה', isCorrect: false },
      { label: 'ג', text: 'בריאות', isCorrect: true },
      { label: 'ד', text: 'בכליות', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 13,
    text: 'איזה שריר עוזר לנו לנשום?',
    systemId: 'respiratory',
    options: [
      { label: 'א', text: 'הלב', isCorrect: false },
      { label: 'ב', text: 'הסרעפת', isCorrect: true },
      { label: 'ג', text: 'שריר הזרוע', isCorrect: false },
      { label: 'ד', text: 'הלשון', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 14,
    text: 'איך קוראים לצינור שדרכו האוויר עובר לריאות?',
    systemId: 'respiratory',
    options: [
      { label: 'א', text: 'הוושט', isCorrect: false },
      { label: 'ב', text: 'קנה הנשימה', isCorrect: true },
      { label: 'ג', text: 'כלי דם', isCorrect: false },
      { label: 'ד', text: 'המעי', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 15,
    text: 'מה קורה לבית החזה כשאנחנו שואפים אוויר?',
    systemId: 'respiratory',
    options: [
      { label: 'א', text: 'הוא מתכווץ', isCorrect: false },
      { label: 'ב', text: 'הוא מתרחב', isCorrect: true },
      { label: 'ג', text: 'הוא נשאר באותו גודל', isCorrect: false },
      { label: 'ד', text: 'הוא נעלם', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  // Digestive
  {
    id: 16,
    text: 'איפה מתחיל תהליך העיכול?',
    systemId: 'digestive',
    options: [
      { label: 'א', text: 'בקיבה', isCorrect: false },
      { label: 'ב', text: 'בפה', isCorrect: true },
      { label: 'ג', text: 'במעיים', isCorrect: false },
      { label: 'ד', text: 'בוושט', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 17,
    text: 'איזה איבר טוחן את האוכל בפה?',
    systemId: 'digestive',
    options: [
      { label: 'א', text: 'הלשון', isCorrect: false },
      { label: 'ב', text: 'השיניים', isCorrect: true },
      { label: 'ג', text: 'הלחיים', isCorrect: false },
      { label: 'ד', text: 'החניכיים', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 18,
    text: 'לאן האוכל עובר אחרי הוושט?',
    systemId: 'digestive',
    options: [
      { label: 'א', text: 'למעי הדק', isCorrect: false },
      { label: 'ב', text: 'לקיבה', isCorrect: true },
      { label: 'ג', text: 'למעי הגס', isCorrect: false },
      { label: 'ד', text: 'לכבד', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 19,
    text: 'מה תפקיד הקיבה?',
    systemId: 'digestive',
    options: [
      { label: 'א', text: 'לשאוב אוויר', isCorrect: false },
      { label: 'ב', text: 'לפרק את המזון בעזרת שרירים וחומצה', isCorrect: true },
      { label: 'ג', text: 'להזרים דם', isCorrect: false },
      { label: 'ד', text: 'לחשוב', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 20,
    text: 'איפה נספגים רוב חומרי המזון אל הדם?',
    systemId: 'digestive',
    options: [
      { label: 'א', text: 'בקיבה', isCorrect: false },
      { label: 'ב', text: 'במעי הדק', isCorrect: true },
      { label: 'ג', text: 'במעי הגס', isCorrect: false },
      { label: 'ד', text: 'בפה', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  // Skeletal
  {
    id: 21,
    text: 'כמה עצמות יש לאדם מבוגר?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: '100', isCorrect: false },
      { label: 'ב', text: '206', isCorrect: true },
      { label: 'ג', text: '300', isCorrect: false },
      { label: 'ד', text: '500', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 22,
    text: 'מה מחזיק את כל העצמות שלנו יחד?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: 'דבק', isCorrect: false },
      { label: 'ב', text: 'השלד והמפרקים', isCorrect: true },
      { label: 'ג', text: 'הדם', isCorrect: false },
      { label: 'ד', text: 'העור', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 23,
    text: 'איזה ויטמין עוזר לעצמות שלנו להיות חזקות?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: 'ויטמין C', isCorrect: false },
      { label: 'ב', text: 'ויטמין D', isCorrect: true },
      { label: 'ג', text: 'ויטמין A', isCorrect: false },
      { label: 'ד', text: 'ויטמין E', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 24,
    text: 'מה נמצא בתוך העצמות ומייצר תאי דם?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: 'אוויר', isCorrect: false },
      { label: 'ב', text: 'מח העצם', isCorrect: true },
      { label: 'ג', text: 'מים', isCorrect: false },
      { label: 'ד', text: 'שומן בלבד', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 25,
    text: 'איזה עצם מגנה על הלב והריאות?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: 'עצם הירך', isCorrect: false },
      { label: 'ב', text: 'הצלעות', isCorrect: true },
      { label: 'ג', text: 'עמוד השדרה', isCorrect: false },
      { label: 'ד', text: 'הגולגולת', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  // Mixed / General
  {
    id: 26,
    text: 'מהו האיבר הגדול ביותר בגוף האדם?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: 'הכבד', isCorrect: false },
      { label: 'ב', text: 'העור', isCorrect: true },
      { label: 'ג', text: 'המוח', isCorrect: false },
      { label: 'ד', text: 'המעי הגס', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 27,
    text: 'איזה מערכת אחראית על פינוי פסולת מהגוף?',
    systemId: 'digestive',
    options: [
      { label: 'א', text: 'מערכת הנשימה', isCorrect: false },
      { label: 'ב', text: 'מערכת ההפרשה', isCorrect: true },
      { label: 'ג', text: 'מערכת השרירים', isCorrect: false },
      { label: 'ד', text: 'מערכת העצבים', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  },
  {
    id: 28,
    text: 'איזה איבר מנקה את הדם שלנו מרעלים?',
    systemId: 'circulatory',
    options: [
      { label: 'א', text: 'הלב', isCorrect: false },
      { label: 'ב', text: 'הכבד', isCorrect: true },
      { label: 'ג', text: 'הקיבה', isCorrect: false },
      { label: 'ד', text: 'הלבלב', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg'
  },
  {
    id: 29,
    text: 'למה אנחנו מצמצמים את העיניים באור חזק?',
    systemId: 'nervous',
    options: [
      { label: 'א', text: 'כי המוח שולח הוראה להגן על הראייה', isCorrect: true },
      { label: 'ב', text: 'כי העיניים עייפות', isCorrect: false },
      { label: 'ג', text: 'כי יש יותר מדי חמצן באוויר', isCorrect: false },
      { label: 'ד', text: 'זה קורה בלי שום סיבה', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk'
  },
  {
    id: 30,
    text: 'מהו תפקידו של השלד?',
    systemId: 'skeletal',
    options: [
      { label: 'א', text: 'לעזור לנו לחשוב', isCorrect: false },
      { label: 'ב', text: 'לתת לגוף צורה ולהגן על איברים פנימיים', isCorrect: true },
      { label: 'ג', text: 'לעכל אוכל', isCorrect: false },
      { label: 'ד', text: 'לשאוף אוויר', isCorrect: false }
    ],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  }
];
