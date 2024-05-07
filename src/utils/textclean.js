export const TextClean = (param) => {
    let value = param
        .replace(/ã/g, 'a')
        .replace(/à/g, 'a')
        .replace(/â/g, 'a')
        .replace(/é/g, 'e')
        .replace(/ê/g, 'e')
        .replace(/í/g, 'i')
        .replace(/õ/g, 'o')
        .replace(/ó/g, 'o')
        .replace(/ô/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/ç/g, 'c')
    return value
}