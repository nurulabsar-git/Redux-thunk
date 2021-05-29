import axios from "axios";
import * as types from "./ActionType";


const fetchCockTailStart = () => ({
    type: types.FETCH_COCKTAIL_START
})

const fetchCockTailSuccess = (cocktails) => ({
    type: types.FETCH_COCKTAIL_SUCCESS,
    payload: cocktails,
})

const fetchCockTailFail = (error) => ({
    type: types.FETCH_COCKTAIL_FAIL,
    payload: error,
})


export const fetchCockTail = () => {
 return function (dispatch) {
     dispatch(fetchCockTailStart());
     axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
     .then(result => {
         const cocktails = result.data.drinks;
         dispatch(fetchCockTailSuccess(cocktails));
     })

     .catch(error => {
        dispatch(fetchCockTailFail(error));
    }) 
 }
}