import { handleActions, createAction } from 'redux-actions';

const publicAction = createAction('PUBLIC');

export const actions = {
    publicAction
}

export default handleActions(
    {
        [publicAction]: (state, { payload }) => ({
            ...state,
            publicmsg: payload
        })
    },
    {}
)