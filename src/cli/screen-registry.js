import { intakeCreatedScreen } from "./screens/intake/intake-created.screen.js";
import { intakeProgressScreen } from "./screens/intake/intake-progress.screen.js";
import { intakeHistoryScreen } from "./screens/intake/intake-history.screen.js";
import { intakeEditScreen } from "./screens/intake/intake-edited.screen.js";

import { userCreatedScreen } from "./screens/user/user-created.screen.js";
import { userDeletedScreen } from "./screens/user/user-deleted.screen.js";
import { userSelectedScreen } from "./screens/user/user-selected.screen.js";
import { usersListScreen } from "./screens/user/users-list.screen.js";
import { intakeEditScreen } from "./screens/intake/intake-edited.screen.js";

export const screens = {
    // USER
    userCreated: userCreatedScreen,
    userDeleted: userDeletedScreen,
    usersList: usersListScreen,
    selectedUser: userSelectedScreen,

    // DAILY GOALS


    // INTAKE
    intakeCreated: intakeCreatedScreen,
    intakeProgress: intakeProgressScreen,
    intakeHistory: intakeHistoryScreen,
    intakeEdited: intakeEditScreen
}