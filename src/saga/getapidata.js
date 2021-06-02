import {all, takeEvery,call} from 'redux-saga/effects';
import {GET_GIT_USER} from '../store/actions';
import {getGitHubUsers} from '../utils/apifetching';

function* getPostsSaga() {
    const data = yield call(getGitHubUsers)
    console.log(data)
}
function* getPostWatcher(){
    yield takeEvery(GET_GIT_USER,getPostsSaga)
}

export default function* postsSaga(){
    yield all([getPostWatcher()])
}