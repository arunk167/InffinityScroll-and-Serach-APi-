import * as home from "./home"
import * as auth from './auth'
import * as userSearch from './userSearch'

export default{
    ...auth,
    ...home,
    ...userSearch 
}