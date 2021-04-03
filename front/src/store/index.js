import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UserData } from './User';

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: "form",
        storage,
        debug: true,
        blacklist: ['foo'],
      },
      UserData
    ),
  });

  const store = createStore(persistReducer({
    key: "root",
    debug: true,
    storage,
    whitelist: ['auth'],
  }, reducer), initialState);


  const persistor = persistStore(store, null, () => {
  });

  return { store, persistor };
}

export default configureStore;
