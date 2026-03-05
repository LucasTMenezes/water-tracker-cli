export const gerarID = () => {
    return `${Date.now()}${Math.floor(Math.random() * 11)}`;
}