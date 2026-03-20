import { dailySummary } from "../../../services/intake/daily-summary.service.js";
import { styles } from "../../../utils/cli-styles.utils.js";


export const mainMenuScreen  = (state) => {

    if (state.users.length === 0) {
return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}ÁguaDaily™${styles.reset}


⚠︎  Nenhum usuário encontrado.


${styles.dim}1 - ${styles.reset}Criar usuário
${styles.dim}0 - ${styles.reset}Sair

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}
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
`${styles.dim}Usuário:${styles.reset}        ${activeUser.name}
${styles.dim}Meta diária:${styles.reset}    ${activeUser.dailyGoal} ml
${styles.dim}Consumido hoje:${styles.reset} ${totalIntakeToday} ml` 
: 
`⚠︎  Nenhum usuário selecionado`
}`

    
return `
${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.bold}ÁguaDaily™${styles.reset}

${activeUserHeader}

${activeUser ? `
${styles.dim}MENU${styles.reset}

${styles.dim}1 - ${styles.reset}Registrar consumo
<<<<<<< HEAD
${styles.dim}2 - ${styles.reset}Editar consumo
${styles.dim}3 - ${styles.reset}Ver progresso de hoje
=======
${styles.dim}2 - ${styles.reset}Ver progresso de hoje
${styles.dim}3 - ${styles.reset}Gerenciar consumos
>>>>>>> 689c491 (feat(intake): add edit option for water intake entries)

${styles.dim}4 - ${styles.reset}Histórico
${styles.dim}5 - ${styles.reset}Estatísticas

${styles.dim}6 - ${styles.reset}Trocar usuário
${styles.dim}7 - ${styles.reset}Gerenciar usuários

${styles.dim}0 - ${styles.reset}Sair

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.dim}Digite o número da opção:${styles.reset} `
: 
`
${styles.dim}5 - ${styles.reset}Selecionar usuário
${styles.dim}0 - ${styles.reset}Sair

${styles.dim}- - - - - - - - - - - - - - - - - - - - - - - - - - - - -${styles.reset}

${styles.dim}Digite o número da opção:${styles.reset} `
}`
}
