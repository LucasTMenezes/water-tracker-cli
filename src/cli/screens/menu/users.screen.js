import { styles } from "../../../utils/cli-styles.utils.js";


export const usersMenuScreen  = (state) => {
    const activeUser = state.selectedUser ?? null;
    
    // let totalIntakeToday;
    // if (activeUser) {
    //     const todayIntakeSummary = dailySummary(state.intakes, activeUser);
    //     totalIntakeToday = todayIntakeSummary.consumed;
    // }
    // const activeUserHeader = 
    // `${activeUser ? 
    //     `${styles.bold}Usuário selecionado:${styles.reset} ${activeUser.name}
    //     ${styles.bold}Meta diária:${styles.reset} ${activeUser.dailyGoal}
    //     ${styles.bold}Consumido hoje: ${activeUser.totalIntakeToday}
    //     ` 
    //     : 
    //     `⚠︎ Nenhum usuário selecionado`}`
    return `
------------------------------------------------

${styles.bold}ÁguaDaily™ CLI App${styles.reset}

${styles.bold}${styles.dim}GERENCIAR USUÁRIOS${styles.reset}

1 - Criar usuário
2 - Editar usuário
3 - Deletar usuário
4 - Listar usuários
5 - Selecionar usuário ativo

0 - Voltar`
}
