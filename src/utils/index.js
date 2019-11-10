// export function throttle(callback) {
//     var iNow = 0;
//     return (value) => {
//         var lastINow = new Date().getTime();
//         if (lastINow - iNow > 300) {
//             callback(value);
//             iNow = new Date().getTime();
//         }
//     }
// }
export function throttle (callback){
    var now=0;
    return (value)=>{
        var lastNow=new Date().getTime();
        if(lastNow-now>300){
            callback(value);
            now=new Date().getTime();
        }
    }
}

