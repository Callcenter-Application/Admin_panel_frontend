export const LeftSection = () => <section className="relative flex flex-col justify-between overflow-hidden bg-linear-to-br from-primary via-on-secondary-fixed to-[#000d2c] p-8 text-white sm:p-12 lg:col-span-7 lg:p-16">
    {/* Background decoration */}
    <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-container/30 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(colors.secondary-container)_1px,transparent_1px)] opacity-10 bg-size-[24px_24px]" />

    {/* Brand */}
    <div className="relative z-10 flex items-center">
        <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-secondary-fixed shadow-sm backdrop-blur-md">
            <span
            className="material-symbols-outlined text-2xl"
            data-icon="headset_mic"
            >
            headset_mic
            </span>
        </div>

        <div>
            <span className="font-headline-sm text-xl font-bold tracking-tight text-white">
            CallCenter
            </span>

            <p className="text-xs font-medium text-secondary-fixed-dim/80">
            Workforce &amp; Telephony Management
            </p>
        </div>
        </div>
    </div>

    {/* Product Overview */}
    <div className="relative z-10 my-auto max-w-xl space-y-8 py-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-fixed/20 bg-primary-container/50 px-3 py-1 text-xs font-medium text-primary-fixed">
        <span
            className="material-symbols-outlined text-sm"
            data-icon="verified"
        >
            verified
        </span>

        <span>Enterprise Operations Platform</span>
        </div>

        <div className="space-y-4">
        <h1 className="font-headline-xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Gestión integral para operaciones de contact center
        </h1>

        <p className="text-base font-normal leading-relaxed text-secondary-fixed-dim/90 sm:text-lg">
            Administra usuarios, roles y operaciones desde una plataforma
            centralizada, diseñada para facilitar el control y seguimiento
            de equipos de atención telefónica.
        </p>
        </div>

        {/* Features */}
        <div className="space-y-3.5 pt-2">
        <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-container/30 text-secondary-fixed">
            <span
                className="material-symbols-outlined text-xl"
                data-icon="manage_accounts"
            >
                manage_accounts
            </span>
            </div>

            <div>
            <h2 className="font-label-lg text-sm font-semibold text-white">
                Gestión de usuarios y roles
            </h2>

            <p className="mt-0.5 text-xs text-secondary-fixed-dim/80">
                Administra operadores, supervisores y administradores
                mediante una gestión centralizada de accesos y permisos.
            </p>
            </div>
        </div>

        <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-container/30 text-secondary-fixed">
            <span
                className="material-symbols-outlined text-xl"
                data-icon="phone_in_talk"
            >
                phone_in_talk
            </span>
            </div>

            <div>
            <h2 className="font-label-lg text-sm font-semibold text-white">
                Gestión de operaciones telefónicas
            </h2>

            <p className="mt-0.5 text-xs text-secondary-fixed-dim/80">
                Centraliza la administración de servicios y recursos
                relacionados con la operación de llamadas.
            </p>
            </div>
        </div>

        <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-container/30 text-secondary-fixed">
            <span
                className="material-symbols-outlined text-xl"
                data-icon="security"
            >
                security
            </span>
            </div>

            <div>
            <h2 className="font-label-lg text-sm font-semibold text-white">
                Control de acceso
            </h2>

            <p className="mt-0.5 text-xs text-secondary-fixed-dim/80">
                Protege el acceso a la plataforma mediante autenticación
                y control de permisos según el perfil del usuario.
            </p>
            </div>
        </div>
        </div>
    </div>

    {/* Status */}
    <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-secondary-fixed-dim/70">
        <div className="flex items-center gap-1.5">
        <span
            className="material-symbols-outlined text-sm"
            data-icon="shield_lock"
        >
            shield_lock
        </span>
        <span>Cifrado extremo a extremo</span>
        </div>

        <div className="flex items-center gap-1.5">
        <span
            className="material-symbols-outlined text-sm"
            data-icon="bolt"
        >
            bolt
        </span>
        <span>Disponibilidad 24/7</span>
        </div>
    </div>
    </section>