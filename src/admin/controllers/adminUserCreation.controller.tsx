import type { CreateUserFormState, PasswordRequirements, UserRole } from "../dto/admin.dto";
import { DEFAULT_ROLE } from "./adminUsers.controller";

export const NAME_MIN_LENGTH = 3;
export const NAME_MAX_LENGTH = 50;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 50;

export const EMPTY_CREATE_USER_FORM: CreateUserFormState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: DEFAULT_ROLE,
};

export function getNameCounterText(name: string): string {
    return `${name.length}/${NAME_MAX_LENGTH}`;
}

export function getPasswordRequirements(
    password: string,
): PasswordRequirements {
    return {
        minLength: password.length >= PASSWORD_MIN_LENGTH,
        maxLength:
            password.length > 0 && password.length <= PASSWORD_MAX_LENGTH,
        hasUpper: /[A-Z]/.test(password),
        hasLower: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
    };
}

export function isPasswordValid(requirements: PasswordRequirements): boolean {
    return Object.values(requirements).every(Boolean);
}

export function doPasswordsMatch(
    password: string,
    confirmPassword: string,
): boolean {
    return confirmPassword.length > 0 && password === confirmPassword;
}

export function canSubmitCreateUserForm(form: CreateUserFormState): boolean {
    const nameLength = form.name.trim().length;
    const nameValid =
        nameLength >= NAME_MIN_LENGTH && nameLength <= NAME_MAX_LENGTH;
    const emailValid = form.email.trim().length > 0;
    const passwordValid = isPasswordValid(
        getPasswordRequirements(form.password),
    );
    const passwordsMatch = doPasswordsMatch(
        form.password,
        form.confirmPassword,
    );

    return nameValid && emailValid && passwordValid && passwordsMatch;
}

export function getPasswordFieldType(isVisible: boolean): "text" | "password" {
    return isVisible ? "text" : "password";
}

export function getPasswordVisibilityIcon(isVisible: boolean): string {
    return isVisible ? "visibility_off" : "visibility";
}

export function getRequirementBadgeClasses(isValid: boolean): string {
    return isValid
        ? "inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-emerald-50 border border-emerald-300 text-emerald-800 transition-colors"
        : "inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-surface-container-lowest border border-outline-variant text-on-surface-variant transition-colors";
}

export function getRequirementIconClasses(isValid: boolean): string {
    return isValid
        ? "material-symbols-outlined text-xs text-emerald-600 font-bold"
        : "material-symbols-outlined text-xs text-outline";
}

export function getRequirementIcon(isValid: boolean): string {
    return isValid ? "check_circle" : "radio_button_unchecked";
}

export function getMatchIndicatorClasses(matches: boolean): string {
    return matches
        ? "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-label-sm font-label-sm bg-emerald-50 border border-emerald-200 text-emerald-800 transition-all"
        : "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-label-sm font-label-sm bg-rose-50 border border-rose-200 text-rose-800 transition-all";
}

export function getMatchIcon(matches: boolean): string {
    return matches ? "check_circle" : "cancel";
}

export function getMatchLabel(matches: boolean): string {
    return matches
        ? "Las contraseñas coinciden"
        : "Las contraseñas no coinciden";
}

export function getRoleCardClasses(isSelected: boolean): string {
    return isSelected
        ? "relative flex flex-col justify-between p-4 transition-all duration-150 border-2 shadow-sm cursor-pointer rounded-xl border-primary bg-surface-container-low/50"
        : "relative flex flex-col justify-between p-4 transition-all duration-150 border cursor-pointer rounded-xl border-outline-variant bg-surface-container-lowest hover:border-secondary/60 hover:bg-surface-bright group";
}

export function getRoleIconBoxClasses(isSelected: boolean): string {
    return isSelected
        ? "flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary"
        : "flex items-center justify-center w-10 h-10 transition-colors rounded-lg bg-surface-container-low text-on-surface-variant group-hover:text-primary";
}

export function getRoleRadioOuterClasses(isSelected: boolean): string {
    return isSelected
        ? "flex items-center justify-center w-5 h-5 border-2 rounded-full border-primary bg-surface-container-lowest"
        : "flex items-center justify-center w-5 h-5 border rounded-full border-outline bg-surface-container-lowest";
}

export function getRoleRadioDotClasses(isSelected: boolean): string {
    return isSelected
        ? "w-2.5 h-2.5 rounded-full bg-primary"
        : "w-2.5 h-2.5 rounded-full bg-transparent";
}

export function getRoleTitleClasses(isSelected: boolean): string {
    return isSelected
        ? "font-semibold text-label-lg font-label-lg text-primary"
        : "font-semibold text-label-lg font-label-lg text-on-surface";
}

export function getRoleFooterClasses(isSelected: boolean): string {
    return isSelected
        ? "mt-4 pt-3 border-t border-primary/20 flex items-center text-[11px] text-primary font-medium"
        : "mt-4 pt-3 border-t border-outline-variant/40 flex items-center text-[11px] text-outline";
}

export function isCreateUserSubmitDisabled(
    form: CreateUserFormState,
    isSubmitting: boolean,
): boolean {
    return isSubmitting || !canSubmitCreateUserForm(form);
}

export function getSubmitIcon(isSubmitting: boolean): string {
    return isSubmitting ? "progress_activity" : "person_add";
}

export function getSubmitIconClasses(isSubmitting: boolean): string {
    return isSubmitting
        ? "text-lg material-symbols-outlined animate-spin"
        : "text-lg material-symbols-outlined";
}

export function getSubmitLabel(isSubmitting: boolean): string {
    return isSubmitting ? "Creando usuario..." : "Crear usuario";
}

/** Simulates the backend call (no API exists yet in this project). */
export function createUser(payload: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}): Promise<void> {
    void payload;
    return new Promise((resolve) => setTimeout(resolve, 1200));
}
