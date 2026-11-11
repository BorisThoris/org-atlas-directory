// operations.js
import { Creators } from "./actions";

const requestInitialDataAction = Creators.requestInitialData;
const receiveInitialDataAction = Creators.receiveInitialData;
const failInitialDataAction = Creators.failInitialData;

const startProjectUpdate = Creators.startProjectUpdate;

const getResponseData = (responseData) => responseData.db || responseData;

// In development the directory comes from json-server (npm run json-server). The
// deployed demo has no server, so it reads the same data as a static file shipped
// with the build, and edits stay in this browser session.
const LOCAL_API = "http://localhost:5000/db";
const DATA_URL =
  process.env.REACT_APP_DB_URL ||
  (process.env.NODE_ENV === "development" ? LOCAL_API : `${process.env.PUBLIC_URL}/db.json`);
const canSave = DATA_URL === LOCAL_API || Boolean(process.env.REACT_APP_DB_URL);

const fetchInitialData = () => {
  return (dispatch) => {
    dispatch(requestInitialDataAction());

    /*eslint-disable */
    //suppress all warnings between comments
    return fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load directory data.");
        }

        return response.json();
      })
      .then((json) => {
        const data = getResponseData(json);

        dispatch(receiveInitialDataAction(data));
      })
      .catch((error) => {
        dispatch(failInitialDataAction(error.message));
      });
    /*eslint-enable */
  };
};

const updateProject = (passedState) => {
  return (dispatch) => {
    dispatch(startProjectUpdate());

    // Nothing to save to on the static demo: keep the edit in memory.
    const request = canSave
      ? fetch(DATA_URL, {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(passedState),
        }).then((response) => {
          if (!response.ok) {
            throw new Error("Unable to update directory data.");
          }

          return response.json();
        })
      : Promise.resolve(passedState);

    return request
      .then((json) => {
        const responseData = getResponseData(json);

        dispatch(receiveInitialDataAction(responseData));
      })
      .catch((error) => {
        dispatch(failInitialDataAction(error.message));
      });
  };
};

export default {
  fetchInitialData,
  updateProject,
};
