import {combineReducers, legacy_createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})
let store = legacy_createStore(reducers);
window.store=store;
export default store