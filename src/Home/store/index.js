import { handleActions, createAction } from 'redux-actions';

const numAction = createAction('NUM');
const arrAction = createAction('ARR');
const objAction = createAction('OBJ');

export const actions = {
    numAction,
    arrAction,
    objAction
}

export default handleActions(
    {
        [numAction]: (state, { payload }) => ({
            ...state,
            num: payload
        }),
        [arrAction]: (state, { payload }) => ({
            ...state,
            arr: payload
        }),
        [objAction]: (state, { payload }) => ({
            ...state,
            obj: payload
        })
    },
    {}
)