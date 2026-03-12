import { styles } from "../../../utils/cli-styles.utils.js";

export const intakeCreatedScreen = ({ amount, selectedUser }) => {

    return `
---------------------------------------------------------------------------

${styles.bold}Nova Ingestão de Água${styles.reset}

Ingestão de ${amount} ml de água adicionada para ${selectedUser.name}.

---------------------------------------------------------------------------`
} 
    