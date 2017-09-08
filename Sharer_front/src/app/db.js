import DBF from './dbFactory'

export default DBF.context;

let prefix = ''
if(__LOCAL__){
    // prefix = 'http://localhost:6060'
    prefix = 'http://localhost:8000'
    // prefix = 'http://101.132.71.185'
}
// if(__PRO__){
//     prefix = ''
// }

DBF.create('Choose',{
    getBookType:{
        url         :prefix+'/api/choose_book',
        method      :'GET',
    },
})
