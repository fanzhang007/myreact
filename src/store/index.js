import { handleActions, createAction } from 'redux-actions';

const addAction = createAction('ADD');

export const actions = {
    addAction
}

export default handleActions(
    {
        [addAction]: (state, { payload }) => ({
            ...state,
            add: payload
        })
    },
    {}
)