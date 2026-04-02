import { styles } from "../../../utils/cli-styles.utils.js";

export const askUserEdit = async (prompt) => {
    const property = await prompt(`    
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}Deseja editar:${styles.reset}

${styles.dim}1 -${styles.reset} Peso
${styles.dim}2 -${styles.reset} Meta Diária de Água

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}
    `);
    
        let newValue;

        switch(property) {
            case "1":
                newValue = await prompt(`${styles.dim}Informe novo peso (kg): `);
                return { property: "weight", newValue: Number(newValue) };
            case "2":
                newValue = await prompt(`${styles.dim}Informe nova meta diária (ml): `);
                return { property: "dailyGoal", newValue: Number(newValue)};
            default:
            console.log("Comando inválido");
            return null;
        }

}