export const PadraoAtestado = () => {
    return [
        // os nomes que estão aqui não devem ser mudados, pois senão não irá mais encontrar os antigo
        // na hora de salvar no bando de dados, ele grava como um string
        // atestado.padrao = 'Indeterminado' por exemplo
        // então manter os normes antigos e só adicionar novos
        // de mudar de `Definitivo` para `Definitivamente` então não ira encontrar os antigos 
        'Determinado',
        'Indeterminado',
        'Definitivo',
        'Mudança',
        'Indeter -> Determ',
        'Nada',
        'Fibromialgia'
    ]
}