function FormatText(paramA, paramB) {
    return paramA === "NENHUM" ? paramB[2] : "(" + paramB[0] + ") " + paramB[2]
}
export default FormatText