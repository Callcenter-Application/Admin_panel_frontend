export type ThemeMode = "light" | "dark" | "system";
export type Density = "compact" | "comfortable" | "wide";
export type AudioCodec = "opus" | "g711";

export const THEME_OPTIONS: {
    id: ThemeMode;
    icon: string;
    label: string;
    hint: string;
}[] = [
    {
        id: "light",
        icon: "light_mode",
        label: "Modo Claro",
        hint: "Optimizado para ambientes iluminados de oficina",
    },
    {
        id: "dark",
        icon: "dark_mode",
        label: "Modo Oscuro",
        hint: "Reduce fatiga en turnos nocturnos o cuartos SOC",
    },
    {
        id: "system",
        icon: "settings_system_daydream",
        label: "Automático",
        hint: "Sincroniza con el esquema de color del sistema operativo",
    },
];

export const DENSITY_OPTIONS: { id: Density; label: string }[] = [
    { id: "compact", label: "Compacta" },
    { id: "comfortable", label: "Cómoda" },
    { id: "wide", label: "Amplia" },
];

export const CODEC_OPTIONS: {
    id: AudioCodec;
    label: string;
    hint: string;
}[] = [
    {
        id: "opus",
        label: "Opus HD (48 kHz)",
        hint: "Máxima inteligibilidad y supresión de ruido activa",
    },
    {
        id: "g711",
        label: "G.711u / PCMU (8 kHz)",
        hint: "Compatibilidad con troncales analógicas heredadas",
    },
];

export function getThemeCardClasses(isSelected: boolean): string {
    return isSelected
        ? "relative flex flex-col p-4 transition-all border-2 cursor-pointer border-secondary bg-surface-container-low rounded-xl"
        : "relative flex flex-col p-4 transition-all border cursor-pointer border-outline-variant bg-surface-container-lowest hover:border-outline rounded-xl";
}

export function getThemeIconClasses(isSelected: boolean): string {
    return isSelected
        ? "material-symbols-outlined text-primary"
        : "material-symbols-outlined text-outline";
}

export function getDensityButtonClasses(isSelected: boolean): string {
    return isSelected
        ? "py-2 font-semibold text-center rounded-md shadow-sm text-label-sm font-label-sm bg-surface-container-lowest text-primary"
        : "py-2 font-semibold text-center transition-colors rounded-md text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface";
}

export function getCodecCardClasses(isSelected: boolean): string {
    return isSelected
        ? "flex flex-col p-3 border-2 rounded-lg cursor-pointer border-secondary bg-surface-container-low"
        : "flex flex-col p-3 border rounded-lg cursor-pointer border-outline-variant bg-surface-container-lowest hover:border-outline";
}

export function getCodecTitleClasses(isSelected: boolean): string {
    return isSelected
        ? "font-semibold text-label-md font-label-md text-primary"
        : "font-semibold text-label-md font-label-md text-on-surface";
}
