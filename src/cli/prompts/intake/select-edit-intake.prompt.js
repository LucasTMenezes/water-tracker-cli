import { styles } from "../../../utils/cli-styles.utils.js";

export const askIntakeEdit = async (prompt) => {

    // console.clear();

    const property = await prompt(`    
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Deseja editar:${styles.reset}

${styles.dim}1 -${styles.reset} Quantidade
${styles.dim}2 -${styles.reset} Data

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}
    `);


    let newValue;

    switch (property) {
        case "1":
            newValue = await prompt(`${styles.dim}Informe nova quantidade: `);
            return { property: "amount", newValue: Number(newValue) };
        
        case "2":
            newValue = await prompt(`${styles.dim}Informe nova data no formato dd/mm/aaaa `);
            return { property: "date", newValue: new Date(Number(newValue.slice(6)), Number(newValue.slice(3, 5)) -1, Number(newValue.slice(0, 2))).toISOString() };
            
        default:
            console.log("Comando inválido");
            return null;
    }
}