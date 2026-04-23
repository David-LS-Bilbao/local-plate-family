export type Role = "Adulto/a" | "Niño/a" | "Adolescente" | "Mayor" | "Otro";
export type Ration = "pequeña" | "media" | "grande";

export interface FamilyMember {
  id: string;
  name: string;
  role: Role;
  ration: Ration;
  preferences: string;
}

const FAMILY_KEY = "est_family_members_v1";
const OPTION_KEY = "est_menu_option_v1";

export const loadFamily = (): FamilyMember[] => {
  try {
    const raw = localStorage.getItem(FAMILY_KEY);
    return raw ? (JSON.parse(raw) as FamilyMember[]) : [];
  } catch {
    return [];
  }
};

export const saveFamily = (members: FamilyMember[]) => {
  localStorage.setItem(FAMILY_KEY, JSON.stringify(members));
};

export const loadOption = (): number | null => {
  const raw = localStorage.getItem(OPTION_KEY);
  return raw ? Number(raw) : null;
};

export const saveOption = (option: number) => {
  localStorage.setItem(OPTION_KEY, String(option));
};

/** Strip forbidden characters from text inputs as a defense-in-depth measure. */
export const sanitizeInput = (value: string, maxLength = 60): string => {
  return value
    .replace(/[<>/\\*|;:@¿?¡!]/g, "")
    .slice(0, maxLength);
};