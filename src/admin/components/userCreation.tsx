import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { ADMIN_PATHS } from "../admin.routes";
import {
    EMPTY_CREATE_USER_FORM,
    NAME_MAX_LENGTH,
    NAME_MIN_LENGTH,
    ROLE_OPTIONS,
    canSubmitCreateUserForm,
    createUser,
    doPasswordsMatch,
    getMatchIcon,
    getMatchIndicatorClasses,
    getMatchLabel,
    getNameCounterText,
    getPasswordFieldType,
    getPasswordRequirements,
    getPasswordVisibilityIcon,
    getRequirementBadgeClasses,
    getRequirementIcon,
    getRequirementIconClasses,
    getRoleCardClasses,
    getRoleFooterClasses,
    getRoleIconBoxClasses,
    getRoleName,
    getRoleRadioDotClasses,
    getRoleRadioOuterClasses,
    getRoleTitleClasses,
    getSubmitIcon,
    getSubmitIconClasses,
    getSubmitLabel,
    isCreateUserSubmitDisabled,
    type CreateUserFormState,
} from "../admin.controller";

export const UserCreationSection = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<CreateUserFormState>(EMPTY_CREATE_USER_FORM);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const passwordRequirements = getPasswordRequirements(form.password);
    const passwordsMatch = doPasswordsMatch(form.password, form.confirmPassword);

    const handleChange =
        (field: keyof CreateUserFormState) => (event: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({ ...prev, [field]: event.target.value }));
        };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!canSubmitCreateUserForm(form) || isSubmitting) return;

        setIsSubmitting(true);
        await createUser({
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role,
        });
        setIsSubmitting(false);
        setShowSuccessModal(true);
    };

    const handleCreateAnother = () => {
        setForm(EMPTY_CREATE_USER_FORM);
        setShowPassword(false);
        setShowConfirmPassword(false);
        setShowSuccessModal(false);
    };

    const handleGoToUsers = () => {
        navigate(ADMIN_PATHS.usuarios);
    };

    return (
        <div className="flex justify-center flex-1 px-6 py-6 overflow-y-auto sm:px-8" data-purpose="user-creation-viewport">
            <div className="w-full pb-16 max-w-230">
                {/* Header de la vista */}
                <div className="mb-6">
                    <Link
                        to={ADMIN_PATHS.usuarios}
                        className="inline-flex items-center gap-1.5 text-label-md font-label-md text-primary hover:text-secondary mb-3 group transition-colors"
                    >
                        <span className="text-lg transition-transform material-symbols-outlined group-hover:-translate-x-0.5">arrow_back</span>
                        <span className="">Volver a usuarios</span>
                    </Link>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                            <h1 className="tracking-tight text-headline-lg font-headline-lg text-on-surface">Crear nuevo usuario</h1>
                            <p className="mt-1 text-body-md font-body-md text-on-surface-variant">Registra un nuevo usuario para darle acceso a la plataforma.</p>
                        </div>
                    </div>
                </div>

                {/* FORM CONTAINER CARD */}
                <form className="overflow-hidden border shadow-sm bg-surface-container-lowest border-outline-variant rounded-xl" onSubmit={handleSubmit}>
                    {/* SECCIÓN 1: Información del usuario */}
                    <div className="p-6 border-b md:p-8 border-outline-variant/70">
                        <div className="mb-6">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-surface-container-high text-primary">1</span>
                                <h2 className="text-headline-sm font-headline-sm text-on-surface">Información del usuario</h2>
                            </div>
                            <p className="mt-1 ml-8 text-body-sm font-body-sm text-on-surface-variant">Completa los datos básicos del nuevo usuario.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 ml-0 md:grid-cols-2 md:ml-8">
                            {/* Campo 1: Nombre completo */}
                            <div>
                                <label className="block text-label-md font-label-md text-on-surface mb-1.5" htmlFor="nameInput">
                                    Nombre completo <span className="text-error">*</span>
                                </label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-outline">
                                        <span className="material-symbols-outlined text-[20px]">person</span>
                                    </div>
                                    <input
                                        id="nameInput"
                                        name="name"
                                        type="text"
                                        required
                                        minLength={NAME_MIN_LENGTH}
                                        maxLength={NAME_MAX_LENGTH}
                                        placeholder="Ingresa el nombre completo"
                                        value={form.name}
                                        onChange={handleChange("name")}
                                        className="block w-full py-2 pl-10 pr-3 transition-all border rounded-lg border-outline-variant text-body-md font-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-surface-container-lowest"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-1.5 px-0.5">
                                    <p className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">Entre 3 y 50 caracteres. Solo letras y espacios.</p>
                                    <span className="text-[10px] text-outline font-mono">{getNameCounterText(form.name)}</span>
                                </div>
                            </div>
                            {/* Campo 2: Correo electrónico */}
                            <div>
                                <label className="block text-label-md font-label-md text-on-surface mb-1.5" htmlFor="emailInput">
                                    Correo electrónico <span className="text-error">*</span>
                                </label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-outline">
                                        <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                                    </div>
                                    <input
                                        id="emailInput"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="usuario@empresa.com"
                                        value={form.email}
                                        onChange={handleChange("email")}
                                        className="block w-full py-2 pl-10 pr-3 transition-all border rounded-lg border-outline-variant text-body-md font-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-surface-container-lowest"
                                    />
                                </div>
                                <p className="mt-1.5 px-0.5 text-body-sm font-body-sm text-on-surface-variant text-[11px]">Utiliza un correo electrónico válido.</p>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 2: Credenciales de acceso */}
                    <div className="p-6 border-b md:p-8 border-outline-variant/70 bg-surface-bright/40">
                        <div className="mb-6">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-surface-container-high text-primary">2</span>
                                <h2 className="text-headline-sm font-headline-sm text-on-surface">Credenciales de acceso</h2>
                            </div>
                            <p className="mt-1 ml-8 text-body-sm font-body-sm text-on-surface-variant">Configura las credenciales que utilizará el usuario para iniciar sesión.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 ml-0 md:grid-cols-2 md:ml-8">
                            {/* Campo: Contraseña */}
                            <div>
                                <label className="block text-label-md font-label-md text-on-surface mb-1.5" htmlFor="passwordInput">
                                    Contraseña <span className="text-error">*</span>
                                </label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-outline">
                                        <span className="material-symbols-outlined text-[20px]">lock</span>
                                    </div>
                                    <input
                                        id="passwordInput"
                                        name="password"
                                        type={getPasswordFieldType(showPassword)}
                                        required
                                        placeholder="Ingresa una contraseña"
                                        value={form.password}
                                        onChange={handleChange("password")}
                                        className="block w-full py-2 pl-10 pr-10 transition-all border rounded-lg font-body-md border-outline-variant text-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-surface-container-lowest"
                                    />
                                    <button
                                        type="button"
                                        aria-label="Mostrar u ocultar contraseña"
                                        onClick={() => setShowPassword((visible) => !visible)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 transition-colors text-outline hover:text-on-surface"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{getPasswordVisibilityIcon(showPassword)}</span>
                                    </button>
                                </div>
                                {/* Indicador visual de requisitos */}
                                <div className="p-3 mt-3 border rounded-lg bg-surface-container-low border-outline-variant/50">
                                    <span className="block mb-2 text-label-sm font-label-sm text-outline">Requisitos de seguridad:</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className={getRequirementBadgeClasses(passwordRequirements.minLength)}>
                                            <span className={getRequirementIconClasses(passwordRequirements.minLength)}>{getRequirementIcon(passwordRequirements.minLength)}</span>
                                            <span className="">Mínimo 8 caracteres</span>
                                        </span>
                                        <span className={getRequirementBadgeClasses(passwordRequirements.maxLength)}>
                                            <span className={getRequirementIconClasses(passwordRequirements.maxLength)}>{getRequirementIcon(passwordRequirements.maxLength)}</span>
                                            <span className="">Máximo 50 caracteres</span>
                                        </span>
                                        <span className={getRequirementBadgeClasses(passwordRequirements.hasUpper)}>
                                            <span className={getRequirementIconClasses(passwordRequirements.hasUpper)}>{getRequirementIcon(passwordRequirements.hasUpper)}</span>
                                            <span className="">Una letra mayúscula</span>
                                        </span>
                                        <span className={getRequirementBadgeClasses(passwordRequirements.hasLower)}>
                                            <span className={getRequirementIconClasses(passwordRequirements.hasLower)}>{getRequirementIcon(passwordRequirements.hasLower)}</span>
                                            <span className="">Una letra minúscula</span>
                                        </span>
                                        <span className={getRequirementBadgeClasses(passwordRequirements.hasNumber)}>
                                            <span className={getRequirementIconClasses(passwordRequirements.hasNumber)}>{getRequirementIcon(passwordRequirements.hasNumber)}</span>
                                            <span className="">Un número</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Campo: Confirmar contraseña */}
                            <div>
                                <label className="block text-label-md font-label-md text-on-surface mb-1.5" htmlFor="confirmPasswordInput">
                                    Confirmar contraseña <span className="text-error">*</span>
                                </label>
                                <div className="relative rounded-lg shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-outline">
                                        <span className="material-symbols-outlined text-[20px]">lock_clock</span>
                                    </div>
                                    <input
                                        id="confirmPasswordInput"
                                        name="confirm_password"
                                        type={getPasswordFieldType(showConfirmPassword)}
                                        required
                                        placeholder="Confirma la contraseña"
                                        value={form.confirmPassword}
                                        onChange={handleChange("confirmPassword")}
                                        className="block w-full py-2 pl-10 pr-10 transition-all border rounded-lg font-body-md border-outline-variant text-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-surface-container-lowest"
                                    />
                                    <button
                                        type="button"
                                        aria-label="Mostrar u ocultar confirmación de contraseña"
                                        onClick={() => setShowConfirmPassword((visible) => !visible)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 transition-colors text-outline hover:text-on-surface"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{getPasswordVisibilityIcon(showConfirmPassword)}</span>
                                    </button>
                                </div>
                                {/* Indicador de coincidencia */}
                                {form.confirmPassword.length > 0 && (
                                    <div className="mt-3">
                                        <span className={getMatchIndicatorClasses(passwordsMatch)}>
                                            <span className="text-base material-symbols-outlined">{getMatchIcon(passwordsMatch)}</span>
                                            <span>{getMatchLabel(passwordsMatch)}</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 3: Rol del usuario */}
                    <div className="p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-surface-container-high text-primary">3</span>
                                <h2 className="text-headline-sm font-headline-sm text-on-surface">Rol del usuario</h2>
                            </div>
                            <p className="mt-1 ml-8 text-body-sm font-body-sm text-on-surface-variant">Selecciona el nivel de acceso que tendrá el usuario dentro de la plataforma.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 ml-0 md:grid-cols-3 md:ml-8">
                            {ROLE_OPTIONS.map((role) => {
                                const isSelected = form.role === role.id;
                                return (
                                    <label key={role.id} className={getRoleCardClasses(isSelected)}>
                                        <input
                                            className="sr-only"
                                            name="role"
                                            type="radio"
                                            value={role.id}
                                            checked={isSelected}
                                            onChange={() => setForm((prev) => ({ ...prev, role: role.id }))}
                                        />
                                        <div>
                                            <div className="flex items-start justify-between mb-3">
                                                <div className={getRoleIconBoxClasses(isSelected)}>
                                                    <span className="text-2xl material-symbols-outlined">{role.icon}</span>
                                                </div>
                                                <div className={getRoleRadioOuterClasses(isSelected)}>
                                                    <div className={getRoleRadioDotClasses(isSelected)}></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className={getRoleTitleClasses(isSelected)}>{role.name}</span>
                                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-bold">ID: {role.id}</span>
                                            </div>
                                            <p className="mt-2 leading-relaxed text-body-sm font-body-sm text-on-surface-variant">{role.description}</p>
                                        </div>
                                        <div className={getRoleFooterClasses(isSelected)}>
                                            <span className="material-symbols-outlined text-[14px] mr-1">{role.footerIcon}</span>
                                            <span className="">{role.footerLabel}</span>
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* PIE DEL FORMULARIO CON ACCIONES */}
                    <div className="flex flex-col-reverse items-center justify-between gap-4 p-6 border-t md:p-8 bg-surface-container-low/60 border-outline-variant sm:flex-row">
                        <div className="flex items-center gap-2 text-body-sm font-body-sm text-outline">
                            <span className="text-sm material-symbols-outlined">info</span>
                            <span className="">Todos los campos marcados con (*) son obligatorios.</span>
                        </div>
                        <div className="flex items-center w-full gap-3 sm:w-auto">
                            <Link
                                to={ADMIN_PATHS.usuarios}
                                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-label-lg font-label-lg font-semibold hover:bg-surface-container hover:border-outline transition-colors active:scale-[0.98] text-center"
                            >
                                Cancelar
                            </Link>
                            <button
                                type="submit"
                                disabled={isCreateUserSubmitDisabled(form, isSubmitting)}
                                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary-container text-on-secondary text-label-lg font-label-lg font-semibold hover:bg-secondary focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <span className={getSubmitIconClasses(isSubmitting)}>{getSubmitIcon(isSubmitting)}</span>
                                <span className="">{getSubmitLabel(isSubmitting)}</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* MODAL DE ÉXITO */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/40 backdrop-blur-sm">
                    <div className="w-full max-w-md p-6 border shadow-xl bg-surface-container-lowest rounded-xl border-outline-variant">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-emerald-50 border-emerald-200 text-emerald-600">
                                <span className="text-2xl material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <h3 className="text-headline-sm font-headline-sm text-on-surface">Usuario creado correctamente</h3>
                                <p className="text-body-sm font-body-sm text-on-surface-variant">El registro se insertó en la base de datos con éxito.</p>
                            </div>
                        </div>
                        <div className="p-3 mb-6 border rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface border-outline-variant/50">
                            <div className="flex justify-between py-1">
                                <span className="text-outline">Usuario:</span>
                                <span className="font-medium">{form.name}</span>
                            </div>
                            <div className="flex justify-between py-1">
                                <span className="text-outline">Correo:</span>
                                <span className="font-medium">{form.email}</span>
                            </div>
                            <div className="flex justify-between py-1">
                                <span className="text-outline">Rol asignado:</span>
                                <span className="font-medium text-primary">{getRoleName(form.role)} (ID: {form.role})</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleCreateAnother}
                                className="px-4 py-2 font-semibold transition-colors border rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface text-label-md font-label-md hover:bg-surface-container"
                            >
                                Crear otro usuario
                            </button>
                            <button
                                type="button"
                                onClick={handleGoToUsers}
                                className="px-4 py-2 font-semibold transition-colors rounded-lg bg-primary-container text-on-secondary text-label-md font-label-md hover:bg-secondary"
                            >
                                Ver usuarios
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
