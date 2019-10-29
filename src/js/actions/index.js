import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, DATA_REQUESTED, API_ERRORED } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
};

export function foundBadWord(payload) {
    return { type: FOUND_BAD_WORD, payload };
};

export function getData(payload) {
    return { type: DATA_REQUESTED, payload };
};