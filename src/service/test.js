import $http from '../utils/axios'
import qs from 'qs'

function testService () {
    return $http({
        url:'/article/test',
        method:'GET',
        params:{
            id:'123',
            html:'321'
        }
    })
}
function articleMoridfy(params){
    return $http({
        url:'/article/modify',
        method:'POST',
        contentType:'application/x-www-form-urlencoded',
        data:qs.stringify(params)
    })
}

export {
    testService,
    articleMoridfy
}