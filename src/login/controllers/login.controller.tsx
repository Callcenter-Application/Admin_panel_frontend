export function getPasswordFieldType(isVisible: boolean): "text" | "password" {
    return isVisible ? "text" : "password";
}

export function getPasswordVisibilityIcon(isVisible: boolean): string {
    return isVisible ? "visibility_off" : "visibility";
}

export function getSubmitIcon(isSubmitting: boolean): string {
    return isSubmitting ? "progress_activity" : "arrow_forward";
}

export function getSubmitIconClasses(isSubmitting: boolean): string {
    return isSubmitting
        ? "material-symbols-outlined text-lg animate-spin"
        : "material-symbols-outlined text-lg";
}

export function getSubmitLabel(isSubmitting: boolean): string {
    return isSubmitting ? "Autenticando en FastAPI..." : "Iniciar sesión";
}

/** Simulates the backend call (no API exists yet in this project). */
export function login(payload: {
    email: string;
    password: string;
}): Promise<void> {
    void payload;
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
