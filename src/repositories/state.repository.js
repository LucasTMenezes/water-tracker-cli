import fs from "fs/promises";

const PATH = "src/data/db.json";

export const getInitialState = () => ({
        selectedUser: {},
        users: [],
        intakes: [],
        settings: {},
        selectedUser: null
});

export const loadStateFromDisk = async () => {

    try {
        const data = await fs.readFile(PATH, "utf-8");

        if (!data.trim()) {
            return getInitialState();
        }
        return JSON.parse(data);
    } catch (error) {
        console.error("Error:", error);
        return getInitialState();
    }

}

export const saveStateToDisk = async (state) => {
    await fs.writeFile(PATH, JSON.stringify(state, null, 2));
}