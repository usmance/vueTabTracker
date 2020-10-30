import Api from './api.js'

export default{
    register(credentials)
    {
        console.log(credentials)
        return Api().post('register',credentials)
        
    }
}