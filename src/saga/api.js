import {all} from 'redux-saga/effects'
import GitSaga from './getapidata'

export default function* (){
    yield all ([GitSaga()])
}