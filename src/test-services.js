
import { intakeHistory } from "./use-cases/intake/intake-history.usecase.js";
import { state } from "./state/app.state.js";
import { loadStateUseCase } from "./use-cases/state/load-state.usecase.js";

const testData = {
    intakes: [
    {
      id: "17732730423462",
      userId: "17732726453048",
      amount: 250,
      date: "2026-03-11T23:50:42.346Z"
    },
    ],
    selectedUser: {
    id: "17732726453048",
    name: "Lucas",
    weight: 72,
    dailyGoal: 2592
    }

}

console.log(intakeHistory(testData.intakes, testData.selectedUser.id));