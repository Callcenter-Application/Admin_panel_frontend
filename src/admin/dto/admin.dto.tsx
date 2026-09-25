export type UserRole = 1 | 2 | 3;

export interface CreateUserFormState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: UserRole;
}

export interface PasswordRequirements {
    minLength: boolean;
    maxLength: boolean;
    hasUpper: boolean;
    hasLower: boolean;
    hasNumber: boolean;
}

export interface RoleOption {
    id: UserRole;
    name: string;
    description: string;
    icon: string;
    footerIcon: string;
    footerLabel: string;
}