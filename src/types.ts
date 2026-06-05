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
  explanation: string;
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
    description: 'השלד מעניק לגוף יציבות, מגן על האיברים ומאפשר תנועה.',
    stats: [{ label: 'מספר עצמות', value: '206' }],
    fact: 'תינוקות נולדים עם כ-300 עצמות, אבל ככל שגדלים חלקן מתאחות!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRy3Awlp7J-fiwfPd36oRjpQ4iMSkErKH7RdDrsN8MWHdA_oiwheVJu9Y1zzmKzWPKpjIK7v7JRna4FQwaOZ3J0fYRGtGvAiDyBkhTu3EZ_Bbe6QvzvajnMUW0aXwqSee3XXjLBaylmsZDD_U33cbGLUm_KyDReQlkjTbGhy8Dus0-4cNXK3OObwM-f9oXT9tp7oAJDuJVj4kxTbQZwPeplmBHFzl4PSzrfBAMuIRBDJ1WURZsUfEya22E0RRXxH5slnVcieeBIk'
  }
];

import { QUESTIONS as IMPORTED_QUESTIONS } from './questionsData';
export const QUESTIONS: Question[] = IMPORTED_QUESTIONS;
