export function formatToMXN(
  raw: string,
  fallback = "—"
): string {
  if (!raw) return fallback;

  // 1. Elimina todo lo que no sea dígito, punto o signo menos
  const sanitized = raw.replace(/[^\d.-]+/g, "");

  // 2. Intenta parsear a número
  const value = Number.parseFloat(sanitized);

  if (Number.isNaN(value)) return fallback;

  // 3. Formatea como moneda MXN
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    // Puedes fijar mínimo/máximo de fracción si deseas: minimumFractionDigits: 2
  }).format(value);
}