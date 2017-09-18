import * as types from '../constans/ActionTypes'

export function getCollectionList(collections) {
    return {
        type: types.GET_COLLECTION_LIST,
        collections
    }
}