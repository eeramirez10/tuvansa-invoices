


export function folioToPdfFilename(folio: string): string {

  const m = /^([A-Z]{2})0*([1-9]\d*)$/.exec(folio);
  if (!m) {
    throw new Error(
      `Folio inválido (“${folio}”). Debe ser 2 letras mayúsculas, ceros opcionales y luego dígitos.`
    );
  }
  const [, prefix, numberPart] = m;
  return `${prefix}.${numberPart}`;
}