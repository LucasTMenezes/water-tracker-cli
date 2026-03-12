export const Result = {
    
    view(screen, data = {}){
        return {
            type: "view",
            screen, 
            data
        };
    },

    navigate(screen) {
        return {
            type: "navigate",
            screen
        };
    },

    message(message) {
        return {
            type: "message",
            message
        };
    },

    error(message) {
        return {
            type: "error",
            message
        };
    },

    exit() {
        return {
            type: "exit"
        };
    }
    
};