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
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}ÁguaDaily™ CLI App${styles.reset}

${styles.bold}${styles.dim}GERENCIAR USUÁRIOS${styles.reset}

${styles.dim}1 - ${styles.reset}Criar usuário
${styles.dim}2 - ${styles.reset}Editar usuário
${styles.dim}3 - ${styles.reset}Deletar usuário
${styles.dim}4 - ${styles.reset}Listar usuários
${styles.dim}5 - ${styles.reset}Selecionar usuário ativo

${styles.dim}0 - ${styles.reset}Voltar

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.dim}Digite o número da opção:${styles.reset} `
}
