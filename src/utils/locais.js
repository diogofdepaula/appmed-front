export const Locais = (local) => {

   let loc = null

   const Locais = [
      {
         cod: "cis5rs",
         dados: {
            fantasia: "Consórcio Intergestores de Saúde da 5ª Região de Saúde",
            abreviatura: "CIS5RS",
            razaosocial: "Consórcio Intergestores de Saúde da 5ª Região de Saúde do Paraná",
            cnes: "0984795",
            ans: "",
            endereco: "Rua Brigadeiro Rocha nº 901 - Bairro Trianon, 85012-260, Guarapuava-PR",
            cnpj: "36.330.988/0001-02",
            imagem: "",
         },
      },
      {
         cod: "consultorio",
         dados: {
            fantasia: "Clinique - Centro Médico",
            abreviatura: "Consultório",
            razaosocial: "Clínica Médica Diéguez de Paula",
            cnes: "7275714",
            ans: "",
            endereco: "R. Pres. Getúlio Vargas, 1070 - Centro, 85010-280, Guarapuava-PR",
            cnpj: "",
            imagem: "",
         },
      }
   ]

   loc = local === "todos" ? Locais : Locais.find(p => p.cod === local)

   return loc

}

