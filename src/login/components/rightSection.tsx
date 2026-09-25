import { useState } from "react";
import type { FormEvent } from "react";
import {
    getPasswordFieldType,
    getPasswordVisibilityIcon,
    getSubmitIcon,
    getSubmitIconClasses,
    getSubmitLabel,
    login,
} from "../controllers/login.controller";

export const RightSection = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const formData = new FormData(event.currentTarget);
        setIsSubmitting(true);
        try {
            await login({
                email: String(formData.get("email") ?? ""),
                password: String(formData.get("password") ?? ""),
            });
            setShowAlert(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col justify-between overflow-y-auto border-l border-outline-variant/40 bg-surface-container-low p-8 sm:p-12 lg:col-span-7 lg:p-16">
            <div className="mx-auto my-auto w-full max-w-md">
                {/* Login Card */}
                <div className="space-y-6 rounded-2xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm sm:p-10">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="mb-2 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-low text-primary shadow-xs">
                                <span className="material-symbols-outlined text-2xl" data-icon="lock_person">
                                    lock_person
                                </span>
                            </div>

                            <div>
                                <span className="font-headline-sm text-lg font-bold tracking-tight text-primary">
                                    Iniciar sesión
                                </span>

                                <p className="font-label-sm text-sm font-medium text-on-surface-variant">
                                    CallCenter Enterprise
                                </p>
                            </div>
                        </div>

                        <div className="pt-1">
                            <h2 className="font-headline-lg text-2xl font-bold tracking-tight text-on-surface">
                                Bienvenido de nuevo
                            </h2>

                            <p className="mt-1 font-body-md text-sm text-on-surface-variant">
                                Ingresa tus credenciales para acceder al panel de
                                administración.
                            </p>
                        </div>
                    </div>

                    {/* Error Alert */}
                    {showAlert && (
                        <div className="flex items-start gap-3 rounded-lg border border-error/20 bg-error-container p-3 text-on-error-container" role="alert">
                            <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-error" data-icon="error">
                                error
                            </span>

                            <div className="flex-1">
                                <p className="font-label-md text-sm font-semibold text-error">
                                    No fue posible iniciar sesión
                                </p>

                                <p className="mt-0.5 font-body-sm text-sm text-on-surface-variant">
                                    El correo electrónico o la contraseña no son
                                    correctos. Verifica tus credenciales e inténtalo
                                    nuevamente.
                                </p>
                            </div>

                            <button type="button" aria-label="Cerrar alerta" className="rounded p-0.5 text-on-surface-variant transition-colors hover:text-on-surface" onClick={() => setShowAlert(false)}>
                                <span className="material-symbols-outlined text-base" data-icon="close">
                                    close
                                </span>
                            </button>
                        </div>
                    )}

                    {/* Login Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block font-label-md text-sm font-semibold text-on-surface">
                                Correo electrónico
                            </label>

                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-outline">
                                    <span className="material-symbols-outlined text-lg" data-icon="mail">
                                        mail
                                    </span>
                                </div>

                                <input id="email" name="email" type="email" autoComplete="email" placeholder="usuario@empresa.com" required className="block w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-2.5 pl-10 pr-3 text-on-surface placeholder:text-outline transition duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary" />
                            </div>

                            <p className="font-body-sm text-xs text-on-surface-variant">
                                Utiliza el correo electrónico asociado a tu cuenta.
                            </p>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block font-label-md text-sm font-semibold text-on-surface">
                                    Contraseña
                                </label>

                                <a href="#" className="font-label-md text-sm text-secondary transition-colors hover:text-primary hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>

                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-outline">
                                    <span className="material-symbols-outlined text-lg" data-icon="lock">
                                        lock
                                    </span>
                                </div>

                                <input id="password" name="password" type={getPasswordFieldType(showPassword)} autoComplete="current-password" placeholder="Ingresa tu contraseña" required className="block w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-2.5 pl-10 pr-10 text-on-surface placeholder:text-outline transition duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary" />

                                <button type="button" aria-label="Mostrar u ocultar contraseña" className="absolute inset-y-0 right-0 flex items-center pr-3 text-outline hover:text-on-surface focus:outline-none" onClick={() => setShowPassword((visible) => !visible)}>
                                    <span className="material-symbols-outlined text-lg" data-icon={getPasswordVisibilityIcon(showPassword)}>
                                        {getPasswordVisibilityIcon(showPassword)}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Remember Session */}
                        <div className="flex items-center justify-between pt-1">
                            <label className="flex cursor-pointer items-center gap-2.5">
                                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-outline-variant text-primary-container transition focus:ring-secondary focus:ring-offset-0" />

                                <span className="select-none font-body-md text-sm text-on-surface-variant">
                                    Mantener mi sesión iniciada
                                </span>
                            </label>
                        </div>

                        {/* Submit */}
                        <button type="submit" disabled={isSubmitting} className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-label-lg text-sm font-semibold text-on-primary shadow-sm transition-all duration-150 hover:bg-primary-container active:scale-[0.99] disabled:opacity-75">
                            <span>{getSubmitLabel(isSubmitting)}</span>

                            <span className={getSubmitIconClasses(isSubmitting)} data-icon={getSubmitIcon(isSubmitting)}>
                                {getSubmitIcon(isSubmitting)}
                            </span>
                        </button>
                    </form>

                    {/* Security Indicator */}
                    <div className="flex items-center justify-center border-t border-outline-variant/60 pt-4 text-center">
                        <div className="flex items-center gap-1.5 font-label-sm text-xs text-outline">
                            <span className="material-symbols-outlined text-sm" data-icon="verified_user">
                                verified_user
                            </span>

                            <span>Acceso protegido y autenticado</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-xs text-on-surface-variant">
                    <p className="font-body-sm">
                        ¿Necesitas ayuda para ingresar? Contacta al{" "}
                        <a href="#" className="font-medium text-secondary underline hover:text-primary">
                            administrador de operaciones
                        </a>
                        .
                    </p>

                    <p className="mt-2 text-[11px] text-outline">
                        © 2026 CallCenter Enterprise. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </section>
    );
};
