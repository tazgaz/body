/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types';

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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg',
    explanation: 'הלב הוא המשאבה של הגוף. הוא פועם ללא הפסקה ומזרים דם עשיר בחמצן לכל תאי הגוף השונים!'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg',
    explanation: 'הדם שלנו מתפקד כמו רשת רכבות מהירה - הוא אוסף חמצן מהריאות ואבות מזון ממערכת העיכול, ומוביל אותם לכל תא ותא.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg',
    explanation: 'צבע הדם שלנו הוא תמיד אדום! הוא נראה כך בזכות חלבון מיוחד בשם המוגלובין שמכיל ברזל ונקשר לחמצן.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg',
    explanation: 'כשאתם רצים או מתאמצים, השרירים עובדים קשה וצורכים יותר חמצן. הלב פועם מהר יותר כדי להזרים להם דם עשיר בחמצן במהירות!'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg',
    explanation: 'העורקים מובילים דם טרי מהלב אל הגוף, בעוד שהורידים אוספים את הדם המשומש והדל בחמצן מכל הגוף ומחזירים אותו חזרה ללב ולריאות.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk',
    explanation: 'המוח הוא המחשב ומרכז העצבים הראשי. הוא אחראי על מחשבות, תחושות, רגשות, תנועה, ואפילו על פעולות אוטומטיות כמו נשימה.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk',
    explanation: 'תאי עצב שולחים הבזקים קטנטנים של זרם חשמלי במהירות הבזק לאורך סיבי העצבים כדי לתקשר עם הידיים, הרגליים וכל שאר האיברים!'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk',
    explanation: 'כל החושים קשורים ישירות למערכת העצבים! קולטנים בעיניים, באוזניים ובאור שולחים מידע קבוע למוח כדי שיפרש אותו.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk',
    explanation: 'הגולגולת היא קבוצת עצמות קשיחה וחזקה במיוחד המתפקדת כמו קסדה מובנית המגינה על המוח הרך והרגיש.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk',
    explanation: 'המוח הקטן (צרבלום) אחראי על התיאום התנועתי (קואורדינציה), שיווי משקל ועוזר לנו לבצע תנועות מורכבות כמו רכיבה על אופניים!'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'חמצן הכרחי להפקת אנרגיה בכל תאי גופנו. אנחנו שואפים אותו מהאוויר ישירות לריאות.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'בריאות ישנן מיליוני בועיות אוויר קטנות מאוד הנקראות נאדיות. דרכן החמצן חודר לזרם הדם, ופחמן דו-חמצני נפלט החוצה בשאיפה.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'הסרעפת היא שריר דק ורחב שנמצא מתחת לריאות. התכווצותו כלפי מטה מייצרת תת-לחץ המרחיב את הריאות ושואב לתוכן אוויר.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'קנה הנשימה עשוי מטבעות סחוס נוקשות השומרות עליו פתוח תמיד ומאפשרות לאוויר לעבור בצורה חופשית ובטוחה.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'כשהשרירים הבין-צלעיים והסרעפת פועלים, בית החזה מתרחב ויוצר מקום נוסף לריאות להתנפח ולהתמלא בחמצן.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'תהליך העיכול מתחיל ישירות בפה! השיניים טוחנות את המזון והרוק מכיל אנזימים מיוחדים שמתחילים לפרק פחמימות מורכבות.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'השיניים שלנו חותכות, קורעות וגורסות את חתיכות המזון לחלקים קטנים ונוחים לבליעה ועיכול הקיבה.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'הוושט דוחף את האוכל באמצעות התכווצויות גליות של שרירי הדופן (תנועה פריסטלטית) ישירות לתוך שק הקיבה.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'הקיבה היא כמו מיקסר עוצמתי. היא מעבדת ומערבבת את המזון עם חומצה מרוכזת ואנזימים עד שהמזון הופך לנוזל אחיד.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'המעי הדק הוא באורך מדהים של כ-6 מטרים! שם רוב ויטמינים, סוכרים, מלחים וחלבונים נספגים ועוברים לדמנו.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'תינוק נולד עם כ-300 עצמות רכות וסחוסיות, אך עם ההתבגרות חלקן מתאחות יחדיו עד שנותרות 206 עצמות חזקות.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'מפרקים (כמו המרפקים, הברכיים והכתפיים) בסיוע רצועות מקשרים בין העצמות השונות ומאפשרים גמישות תנועתית מופלאה.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'ויטמין D מסייע לגוף לקלוט סידן - המינרל המרכזי ששומר על העצמות שלנו חזקות וצפופות. אפשר לקבל אותו מחשיפה בריאה לשמש, מזון או תוספים.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'מח העצם הוא איבר ספוגי הממוקם בחלק הפנימי של העצמות הגדולות. הוא אחראי על ייצור בלתי פוסק של תאי דם אדומים, לבנים וטסיות דם.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'הצלעות יוצרות מבנה גמיש וחזק הנקרא כלוב בית החזה, השומר על האיברים העדינים ביותר שלנו: הלב והריאות.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'העור שלכם הוא איבר חי המכסה את כל השטח החיצוני של הגוף! הוא מגן עלינו מפני חיידקים, מווסת חום ולוכד ריגושים תחושתיים.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'מערכת ההפרשה (הכוללת בעיקר את הכליות) מסננת לכלוך ונוזלים עודפים מהדם ומפרישה אותם כשתן.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAprZCvuNUvik82rwdCgBfCgRDV4Fpfqh5TfAzfSYTSHp1SEyRTUntAhEWr_CFO9Rgfz6dp2x_FLKsH7ArhGup1xySnXi4cK4ooPaqdKeW92XwXKEWY1sYz-Y-jCf6dzmf-tv_BhasRp6sl-KPs3yqjES5pMErAOFERReRRXe6-IIM6eN4TZh97ZFOyuQ8qAGIFSj_rDLTf-A68ZHqUbAy5PIWe_8xxnnnF3kV2MdyWmJ1iIhFFebFqkuzI4TGpDuXZYEVrbRZ0TWg',
    explanation: 'הכבד הוא מעבדה כימית מתוחכמת המפרקת רעלים, מייצרת חלבוני דם, ומאחסנת פחמימות מיוחדות כמאגר אנרגיה לשעת חירום.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoKxtwKcQJQesTzP63BecdzFksioEbsBImxW1wDNRKmmi2_cgEUPe9LDcogftxr8JyBRyw295r8TW9BDovNUAhCKZy51TDqu0vVWNnZfhl8QLj6A-N3TjYnTNuhU-gRXrKRGvNZkNDeWDNoBdDLq53Xse1OwcglmRrNLZO0dw2B7zTgLJkTujqtgIsgC1xUHpgxBISwwWnYAghrxPNE0x2kqShuQh77rySMf6l6_CfJGnkG-YimXWRbofKElFNu0-OHoj0u40Nvk',
    explanation: 'זהו מנגנון הגנה אוטומטי מהיר ביותר. קליטת אור חזק מעוררת קשת רפלקס המפחיתה מיד את גודל האישון כדי למנוע נזק ברשתית העין.'
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk',
    explanation: 'בלי השלד היינו פשוט שלולית רכה! השלד מאפשר לנו לעמוד איתן, מעגן את השרירים כדי שנוכל לנוע, ומגן על איברים חיוניים.'
  }
];
