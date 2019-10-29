import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
const forbiddenWords = ["spam", "money"];

import { foundBadWord } from "../actions";

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch(foundBadWord(action.payload));
        }
      }
      return next(action);
    };
  };
};

export const customMiddleware = ({ dispatch }) => {
    return function (next) {
        return function(action) {
            console.log(action.type);
            console.log(dispatch);

            return next(action);
        }
    }
};

export const testMiddleware = ({ }) => ((next) => ((action) => {
    console.log(action);

    return next(action);
}));