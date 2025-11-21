
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const MAX_STORY_PAGES = 10;
export const BACK_COVER_PAGE = 11;
export const TOTAL_PAGES = 11;
export const INITIAL_PAGES = 2;
export const GATE_PAGE = 2;
export const BATCH_SIZE = 6;
export const DECISION_PAGES = [3];

export const GENRES = [
    "Поездка в Шерегеш",
    "Классический хоррор",
    "Супергеройский боевик",
    "Мрачная фантастика",
    "Высокое фэнтези",
    "Нео-нуар детектив",
    "Постапокалипсис",
    "Легкая комедия",
    "Подростковая драма / Повседневность",
    "Свой сюжет"
];

export const TONES = [
    "ЭКШН (Короткие диалоги, динамика)",
    "ВНУТРЕННИЙ МОНОЛОГ (Много мыслей героя)",
    "ОСТРОУМНЫЙ (Юмор, сарказм)",
    "ПАФОСНЫЙ (Драматично, высокие ставки)",
    "ОБЫЧНЫЙ (Естественные диалоги)",
    "ДОБРЫЙ (Теплый, оптимистичный)"
];

export const LANGUAGES = [
    { code: 'ru-RU', name: 'Русский' },
    { code: 'en-US', name: 'English (US)' },
    { code: 'ar-EG', name: 'Arabic (Egypt)' },
    { code: 'de-DE', name: 'German (Germany)' },
    { code: 'es-MX', name: 'Spanish (Mexico)' },
    { code: 'fr-FR', name: 'French (France)' },
    { code: 'hi-IN', name: 'Hindi (India)' },
    { code: 'id-ID', name: 'Indonesian (Indonesia)' },
    { code: 'it-IT', name: 'Italian (Italy)' },
    { code: 'ja-JP', name: 'Japanese (Japan)' },
    { code: 'ko-KR', name: 'Korean (South Korea)' },
    { code: 'pt-BR', name: 'Portuguese (Brazil)' },
    { code: 'ua-UA', name: 'Ukrainian (Ukraine)' },
    { code: 'vi-VN', name: 'Vietnamese (Vietnam)' },
    { code: 'zh-CN', name: 'Chinese (China)' }
];

export interface ComicFace {
  id: string;
  type: 'cover' | 'story' | 'back_cover';
  imageUrl?: string;
  narrative?: Beat;
  choices: string[];
  resolvedChoice?: string;
  isLoading: boolean;
  pageIndex?: number;
  isDecisionPage?: boolean;
}

export interface Beat {
  caption?: string;
  dialogue?: string;
  scene: string;
  choices: string[];
  focus_char: 'hero' | 'friend' | 'other';
}

export interface Persona {
  base64: string;
  desc: string;
}
