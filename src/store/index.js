import { createStore } from "vuex";
import { userDataStore } from "@/store/userDataStore";
import { avatarStore } from "@/store/avatarStore";

export default createStore({
    modules: {
        user: userDataStore,
        avatar: avatarStore
    }
})