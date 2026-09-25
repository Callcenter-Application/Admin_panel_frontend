import { useState } from "react";
import {
    CODEC_OPTIONS,
    DENSITY_OPTIONS,
    THEME_OPTIONS,
    getCodecCardClasses,
    getCodecTitleClasses,
    getDensityButtonClasses,
    getThemeCardClasses,
    getThemeIconClasses,
} from "../controllers/adminConfiguration.controller";
import type {
    AudioCodec,
    Density,
    ThemeMode,
} from "../controllers/adminConfiguration.controller";

export const ConfigurationSection = () => {
    const [themeMode, setThemeMode] = useState<ThemeMode>("light");
    const [density, setDensity] = useState<Density>("comfortable");
    const [codec, setCodec] = useState<AudioCodec>("opus");

    return (
        <main className="flex-1 p-8 space-y-8 overflow-y-auto bg-surface" data-purpose="configuration-viewport">
            {/* Top Banner Notice */}
            <div className="flex items-center justify-between gap-4 p-4 border bg-surface-container-high/40 border-outline-variant/70 rounded-xl">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-container text-on-primary">
                        <span className="text-xl material-symbols-outlined" data-icon="sync">sync</span>
                    </div>
                    <div>
                        <h2 className="font-semibold text-headline-sm font-headline-sm text-on-surface">Sincronización de Perfiles Activa</h2>
                        <p className="text-body-sm font-body-sm text-on-surface-variant">Los cambios guardados se aplicarán de inmediato a los 42 puestos de agentes conectados en este grupo.</p>
                    </div>
                </div>
                <span className="text-label-sm font-label-sm px-2.5 py-1 bg-surface-container-lowest rounded-md border border-outline-variant text-primary font-medium">Instancia: LatAm-East-01</span>
            </div>

            {/* SECTION 1: APARIENCIA Y VISUALIZACIÓN */}
            <section className="space-y-4" id="apariencia">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="flex items-center gap-2 font-bold text-headline-md font-headline-md text-on-surface">
                            <span className="material-symbols-outlined text-primary" data-icon="display_settings">display_settings</span>
                            Apariencia y Visualización
                        </h2>
                        <p className="text-body-sm font-body-sm text-on-surface-variant">Personaliza la interfaz del supervisor y terminal de agente para confort visual durante turnos de alta demanda.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Card: Theme Selector (Interactive Cards) */}
                    <div className="p-6 space-y-5 border shadow-sm lg:col-span-8 bg-surface-container-lowest border-outline-variant rounded-xl">
                        <div>
                            <h3 className="font-semibold text-headline-sm font-headline-sm text-on-surface">Tema de la Plataforma</h3>
                            <p className="text-body-sm font-body-sm text-on-surface-variant">Selecciona el modo de contraste cromático predeterminado para el espacio de trabajo.</p>
                        </div>
                        {/* Bento selector cards */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {THEME_OPTIONS.map((theme) => {
                                const isSelected = themeMode === theme.id;
                                return (
                                    <label key={theme.id} className={getThemeCardClasses(isSelected)}>
                                        <input checked={isSelected} className="sr-only" name="theme_mode" type="radio" value={theme.id} onChange={() => setThemeMode(theme.id)} />
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className={getThemeIconClasses(isSelected)} data-icon={theme.icon}>{theme.icon}</span>
                                                <span className="font-semibold text-label-md font-label-md text-on-surface">{theme.label}</span>
                                            </div>
                                            {isSelected ? (
                                                <span className="text-lg material-symbols-outlined text-secondary" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                            ) : (
                                                <div className="w-4 h-4 border rounded-full border-outline" />
                                            )}
                                        </div>
                                        {/* Mini preview */}
                                        {theme.id === "light" && (
                                            <div className="flex flex-col justify-between h-20 p-2 border rounded-lg bg-surface border-outline-variant">
                                                <div className="w-1/3 h-3 rounded bg-primary-container" />
                                                <div className="space-y-1">
                                                    <div className="w-full h-2 rounded bg-outline-variant/40" />
                                                    <div className="w-2/3 h-2 rounded bg-outline-variant/30" />
                                                </div>
                                            </div>
                                        )}
                                        {theme.id === "dark" && (
                                            <div className="flex flex-col justify-between h-20 p-2 border rounded-lg bg-slate-900 border-slate-700">
                                                <div className="w-1/3 h-3 bg-blue-600 rounded" />
                                                <div className="space-y-1">
                                                    <div className="w-full h-2 rounded bg-slate-700" />
                                                    <div className="w-2/3 h-2 rounded bg-slate-800" />
                                                </div>
                                            </div>
                                        )}
                                        {theme.id === "system" && (
                                            <div className="flex items-center justify-center h-20 p-2 border rounded-lg bg-gradient-to-r from-surface to-slate-900 border-outline-variant">
                                                <span className="text-2xl material-symbols-outlined text-outline" data-icon="brightness_auto">brightness_auto</span>
                                            </div>
                                        )}
                                        <span className="mt-3 text-label-sm font-label-sm text-on-surface-variant">{theme.hint}</span>
                                    </label>
                                );
                            })}
                        </div>
                        {/* Additional Accessibility & Layout Toggles */}
                        <div className="pt-4 space-y-4 border-t border-outline-variant/60">
                            {/* Toggle 1 */}
                            <div className="flex items-center justify-between py-1">
                                <div className="space-y-0.5">
                                    <div className="font-semibold text-label-lg font-label-lg text-on-surface">Modo oscuro programado por horario</div>
                                    <div className="text-body-sm font-body-sm text-on-surface-variant">Activar automáticamente entre las 20:00 y las 07:00 hora local.</div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
                                </label>
                            </div>
                            {/* Toggle 2 */}
                            <div className="flex items-center justify-between py-1">
                                <div className="space-y-0.5">
                                    <div className="font-semibold text-label-lg font-label-lg text-on-surface">Alto contraste en panel de cola de llamadas</div>
                                    <div className="text-body-sm font-body-sm text-on-surface-variant">Aumenta la prominencia de estados 'Crítico', 'En Espera' y temporizadores SLA.</div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
                                </label>
                            </div>
                            {/* Toggle 3 */}
                            <div className="flex items-center justify-between py-1">
                                <div className="space-y-0.5">
                                    <div className="font-semibold text-label-lg font-label-lg text-on-surface">Reducir animaciones en monitoreo en vivo</div>
                                    <div className="text-body-sm font-body-sm text-on-surface-variant">Desactiva transiciones fluidas de gráficos para optimizar consumo de CPU en puestos remotos.</div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Card: Table Density & Interface Scale */}
                    <div className="flex flex-col justify-between p-6 space-y-6 border shadow-sm lg:col-span-4 bg-surface-container-lowest border-outline-variant rounded-xl">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-headline-sm font-headline-sm text-on-surface">Densidad de Registros</h3>
                                <p className="text-body-sm font-body-sm text-on-surface-variant">Ajusta la altura de filas en el listado de llamadas, agentes y auditorías.</p>
                            </div>
                            {/* Density selector buttons */}
                            <div className="grid grid-cols-3 gap-2 p-1 border rounded-lg bg-surface-container-low border-outline-variant">
                                {DENSITY_OPTIONS.map((option) => (
                                    <button key={option.id} type="button" className={getDensityButtonClasses(density === option.id)} onClick={() => setDensity(option.id)}>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                            {/* Visual Preview of Density */}
                            <div className="p-3 space-y-2 border rounded-lg border-outline-variant/60 bg-surface">
                                <div className="flex items-center justify-between text-[11px] text-outline font-semibold border-b border-outline-variant/40 pb-1">
                                    <span>AGENTE</span>
                                    <span>ESTADO</span>
                                </div>
                                <div className="flex items-center justify-between py-1 border-b text-body-sm border-outline-variant/20">
                                    <span className="font-medium text-on-surface">M. González</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Disponible</span>
                                </div>
                                <div className="flex items-center justify-between py-1 text-body-sm">
                                    <span className="font-medium text-on-surface">C. Vargas</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">En Llamada</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border rounded-lg bg-surface-container-high/50 border-outline-variant/40">
                            <span className="block font-medium text-label-sm font-label-sm text-on-surface-variant">Resolución óptima detectada</span>
                            <span className="font-semibold text-body-sm font-body-sm text-primary">1920 x 1080 (Escala nativa 100%)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: TELEFONÍA & HARDWARE SOFTPHONE */}
            <section className="space-y-4" id="telefonia">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="flex items-center gap-2 font-bold text-headline-md font-headline-md text-on-surface">
                            <span className="material-symbols-outlined text-primary" data-icon="headset">headset</span>
                            Telefonía y Hardware Softphone (WebRTC)
                        </h2>
                        <p className="text-body-sm font-body-sm text-on-surface-variant">Calibra dispositivos de entrada y salida, códecs de compresión y parámetros de post-llamada.</p>
                    </div>
                    <span className="text-label-sm font-label-sm px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-300 rounded font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        WebRTC Engine: v118 Stable
                    </span>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Hardware Card: Dispositivos de Audio */}
                    <div className="p-6 space-y-5 border shadow-sm bg-surface-container-lowest border-outline-variant rounded-xl">
                        <h3 className="flex items-center gap-2 font-semibold text-headline-sm font-headline-sm text-on-surface">
                            <span className="material-symbols-outlined text-outline" data-icon="mic">mic</span>
                            Dispositivos de Captura y Reproducción
                        </h3>
                        {/* Entrada de Audio */}
                        <div className="space-y-2">
                            <label className="flex items-center justify-between font-medium text-label-md font-label-md text-on-surface">
                                <span>Micrófono de entrada (Softphone)</span>
                                <span className="flex items-center gap-1 text-emerald-700 text-label-sm font-label-sm">
                                    <span className="text-sm material-symbols-outlined" data-icon="check_circle">check_circle</span>
                                    Dispositivo verificado
                                </span>
                            </label>
                            <div className="relative">
                                <select defaultValue="Jabra Evolve 65 MS Mono (Bluetooth / USB)" className="w-full px-3 py-2 border rounded-lg bg-surface-container-lowest border-outline-variant text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
                                    <option>Jabra Evolve 65 MS Mono (Bluetooth / USB)</option>
                                    <option>Micrófono interno Realtek High Definition Audio</option>
                                    <option>Plantronics Blackwire 3220</option>
                                </select>
                            </div>
                            {/* Nivel de prueba de Micrófono */}
                            <div className="pt-2 space-y-1.5">
                                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                                    <span>Sensibilidad en tiempo real:</span>
                                    <span className="font-mono font-semibold text-primary">-14 dB</span>
                                </div>
                                <div className="flex w-full h-2 overflow-hidden rounded-full bg-surface-container-high">
                                    <div className="w-2/3 h-full transition-all duration-300 rounded-full bg-emerald-500" />
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline">
                                        <span className="text-xs material-symbols-outlined" data-icon="volume_up">volume_up</span>
                                        Probar micrófono (Eco 3s)
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Salida de Audio Auriculares */}
                        <div className="pt-2 space-y-2 border-t border-outline-variant/40">
                            <label className="font-medium text-label-md font-label-md text-on-surface">
                                Auriculares / Canal de llamada principal
                            </label>
                            <select defaultValue="Jabra Evolve 65 MS (Salida predeterminada)" className="w-full px-3 py-2 border rounded-lg bg-surface-container-lowest border-outline-variant text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
                                <option>Jabra Evolve 65 MS (Salida predeterminada)</option>
                                <option>Altavoces de la pantalla (Display Audio)</option>
                                <option>Salida analógica 3.5mm Realtek</option>
                            </select>
                        </div>
                        {/* Timbre secundario */}
                        <div className="space-y-2">
                            <label className="font-medium text-label-md font-label-md text-on-surface">
                                Dispositivo de timbre para llamada entrante (Ringer secundario)
                            </label>
                            <select defaultValue="Altavoces de PC (Realtek Audio - Timbre en sala)" className="w-full px-3 py-2 border rounded-lg bg-surface-container-lowest border-outline-variant text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
                                <option>Altavoces de PC (Realtek Audio - Timbre en sala)</option>
                                <option>Solo en auriculares de agente</option>
                                <option>Reproducir simultáneamente en ambos</option>
                            </select>
                        </div>
                    </div>
                    {/* Configuration Card: Protocolos y Grabación */}
                    <div className="p-6 space-y-5 border shadow-sm bg-surface-container-lowest border-outline-variant rounded-xl">
                        <h3 className="flex items-center gap-2 font-semibold text-headline-sm font-headline-sm text-on-surface">
                            <span className="material-symbols-outlined text-outline" data-icon="tune">tune</span>
                            Protocolo SIP &amp; Wrap-up Time
                        </h3>
                        {/* Toggle Grabación */}
                        <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-lg border border-outline-variant/60">
                            <div className="space-y-0.5 pr-4">
                                <span className="block font-semibold text-label-lg font-label-lg text-on-surface">Grabación obligatoria de llamadas entrantes</span>
                                <span className="block text-body-sm font-body-sm text-on-surface-variant">Almacena audio estéreo cifrado (AES-256) en el bucket de cumplimiento regulatorio.</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                <input className="sr-only peer" type="checkbox" />
                                <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
                            </label>
                        </div>
                        {/* Audio Codec Selection */}
                        <div className="space-y-2">
                            <label className="font-medium text-label-md font-label-md text-on-surface">Códec de Audio Principal</label>
                            <div className="grid grid-cols-2 gap-3">
                                {CODEC_OPTIONS.map((option) => {
                                    const isSelected = codec === option.id;
                                    return (
                                        <label key={option.id} className={getCodecCardClasses(isSelected)}>
                                            <input checked={isSelected} className="sr-only" name="codec" type="radio" value={option.id} onChange={() => setCodec(option.id)} />
                                            <span className={getCodecTitleClasses(isSelected)}>{option.label}</span>
                                            <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px] mt-0.5">{option.hint}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Grace period after call (ACW / Wrap-up Time) */}
                        <div className="pt-2 space-y-2 border-t border-outline-variant/40">
                            <div className="flex items-center justify-between">
                                <label className="font-medium text-label-md font-label-md text-on-surface">
                                    Tiempo de gracia post-llamada (ACW / Wrap-up Time)
                                </label>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">Tipificación y notas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <select defaultValue="60 segundos (Recomendado)" className="w-48 px-3 py-2 border rounded-lg bg-surface-container-lowest border-outline-variant text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
                                    <option>30 segundos</option>
                                    <option>60 segundos (Recomendado)</option>
                                    <option>120 segundos</option>
                                    <option>Manual / Ilimitado</option>
                                </select>
                                <p className="text-body-sm font-body-sm text-on-surface-variant text-[12px]">
                                    El agente pasa a 'Disponible' de forma automática tras cumplirse el intervalo seleccionado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: NOTIFICACIONES & ALERTAS OPERACIONALES */}
            <section className="space-y-4" id="alertas">
                <div>
                    <h2 className="flex items-center gap-2 font-bold text-headline-md font-headline-md text-on-surface">
                        <span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
                        Notificaciones y Alertas Operativas
                    </h2>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Configura disparadores en tiempo real para evitar pérdida de llamadas y degradación de Service Level Agreement.</p>
                </div>
                <div className="p-6 border shadow-sm bg-surface-container-lowest border-outline-variant rounded-xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Alert: Llamadas en espera > 2 min */}
                        <div className="flex flex-col justify-between p-4 space-y-4 border border-outline-variant/80 rounded-xl bg-surface-container-low/40">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="p-2 rounded-lg bg-amber-100 text-amber-800">
                                        <span className="text-xl material-symbols-outlined" data-icon="timer">timer</span>
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary" />
                                    </label>
                                </div>
                                <h3 className="font-semibold text-headline-sm font-headline-sm text-on-surface">Llamadas en espera &gt; 2 min</h3>
                                <p className="text-body-sm font-body-sm text-on-surface-variant">Emitir alerta flotante en el navegador del supervisor cuando un usuario aguarda en cola más de 120 segundos.</p>
                            </div>
                            <div className="flex items-center gap-1 font-semibold text-label-sm font-label-sm text-primary">
                                <span className="text-sm material-symbols-outlined" data-icon="desktop_windows">desktop_windows</span>
                                Notificación push + Sonido
                            </div>
                        </div>
                        {/* Alert: Tono acústico de llamada */}
                        <div className="flex flex-col justify-between p-4 space-y-4 border border-outline-variant/80 rounded-xl bg-surface-container-low/40">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="p-2 bg-blue-100 rounded-lg text-primary">
                                        <span className="text-xl material-symbols-outlined" data-icon="ring_volume">ring_volume</span>
                                    </span>
                                    <button type="button" className="flex items-center gap-1 font-semibold text-label-sm font-label-sm text-secondary hover:underline">
                                        <span className="text-sm material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
                                        Probar tono
                                    </button>
                                </div>
                                <h3 className="font-semibold text-headline-sm font-headline-sm text-on-surface">Tono acústico de llamada</h3>
                                <p className="text-body-sm font-body-sm text-on-surface-variant">Perfil de audio discreto y reconocible diseñado para no saturar al agente en audífonos.</p>
                            </div>
                            <select defaultValue="Chime Enterprise Standard (Suave)" className="w-full bg-surface-container-lowest border border-outline-variant rounded-md px-2.5 py-1.5 text-body-sm font-body-sm text-on-surface">
                                <option>Chime Enterprise Standard (Suave)</option>
                                <option>Bell Dual Pulse (Clásico)</option>
                                <option>Synthetic Gentle (Minimalista)</option>
                            </select>
                        </div>
                        {/* Alert: Umbral crítico de SLA */}
                        <div className="flex flex-col justify-between p-4 space-y-4 border border-outline-variant/80 rounded-xl bg-surface-container-low/40">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="p-2 rounded-lg bg-rose-100 text-rose-800">
                                        <span className="text-xl material-symbols-outlined" data-icon="warning">warning</span>
                                    </span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary" />
                                    </label>
                                </div>
                                <h3 className="font-semibold text-headline-sm font-headline-sm text-on-surface">Umbral crítico de SLA</h3>
                                <p className="text-body-sm font-body-sm text-on-surface-variant">Notificar a coordinadores de turno si el nivel de atención en primeros 20s baja del estándar operativo.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-body-sm font-body-sm text-on-surface">Umbral mínimo:</span>
                                <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-mono text-label-sm font-bold">90.0%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Info Card */}
            <section className="p-6 border shadow-sm bg-surface-container-lowest border-outline-variant rounded-xl">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                    <div className="space-y-1">
                        <h3 className="flex items-center gap-2 font-semibold text-headline-sm font-headline-sm text-on-surface">
                            <span className="material-symbols-outlined text-primary" data-icon="dns">dns</span>
                            Estado de la Plataforma e Infraestructura
                        </h3>
                        <p className="text-body-sm font-body-sm text-on-surface-variant">Información técnica de conexión telefónica, troncales SIP en clúster y versión de compilación.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-body-sm">
                        <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-surface border-outline-variant/60">
                            <span className="text-on-surface-variant">Core Engine:</span>
                            <span className="font-mono font-semibold text-on-surface">v4.2.1-enterprise</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-surface border-outline-variant/60">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-on-surface-variant">Troncal SIP:</span>
                            <span className="font-semibold text-on-surface">Conectada (IP PBX Cloud LatAm)</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-surface border-outline-variant/60">
                            <span className="text-on-surface-variant">Latencia de red:</span>
                            <span className="font-mono font-bold text-emerald-700">18 ms</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer: comfortable review & save */}
            <div className="flex items-center justify-between pt-4 pb-8 border-t border-outline-variant/60">
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                    Última modificación guardada: Hoy a las 14:32 por <span className="font-semibold text-on-surface">Luis Pérez</span>.
                </div>
                <div className="flex items-center gap-3">
                    <button type="button" className="px-4 py-2 border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-lg text-label-md font-label-md transition-colors active:scale-[0.98]">
                        Descartar cambios
                    </button>
                    <button type="button" className="flex items-center gap-2 px-5 py-2 bg-primary-container text-on-primary hover:bg-blue-800 rounded-lg text-label-md font-label-md transition-all active:scale-[0.98] shadow-sm">
                        <span className="text-lg material-symbols-outlined" data-icon="save">save</span>
                        <span>Aplicar configuración</span>
                    </button>
                </div>
            </div>
        </main>
    );
};
