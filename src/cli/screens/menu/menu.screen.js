import { dailySummary } from "../../../services/intake/daily-summary.service.js";
import { styles } from "../../../utils/cli-styles.utils.js";


export const mainMenuScreen  = (state) => {

    if (state.users.length === 0) {
       return `
${styles.bold}ÁguaDaily™ CLI App${styles.reset}

⚠︎ Nenhum usuário encontrado.

1 - Criar usuário
0 - Sair
`
       }

    const activeUser = state.selectedUser ?? null;
    
    let totalIntakeToday;

    if (activeUser) {
        const todayIntakeSummary = dailySummary(state.intakes, activeUser);
        totalIntakeToday = todayIntakeSummary.consumed;
    }

    const activeUserHeader = 
    `${activeUser ? 
`${styles.bold}Usuário selecionado:${styles.reset} ${activeUser.name}
${styles.bold}Meta diária:${styles.reset} ${activeUser.dailyGoal} ml
${styles.bold}Consumido hoje:${styles.reset} ${totalIntakeToday} ml` 
: 
`⚠︎ Nenhum usuário selecionado`
    }`

    
return `
------------------------------------------------

${styles.bold}ÁguaDaily™ CLI App${styles.reset}

${activeUserHeader}
${activeUser ? `
1 - Registrar consumo
2 - Ver progresso de hoje

3 - Histórico
4 - Estatísticas

5 - Trocar usuário
6 - Gerenciar usuários

0 - Sair
`: 
`
5 - Selecionar usuário
0 - Sair
------------------------------------------------
`
}`
}
