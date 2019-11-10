import {getCity} from "@api/city";
const state={
    hotCity : JSON.parse(sessionStorage.getItem("hotCity"))||[],
    cityList: JSON.parse(sessionStorage.getItem("cityList"))||[],
    nm:sessionStorage.getItem("nm")||"北京",
    id:sessionStorage.getItem("id")||1
}

const actions={
    async handleGetCity({commit}){
        let data = await getCity();
        console.log(data)
        commit("handleMutationGetCity",data.data)
    },
}

const mutations={
    handleModifyCityInfo(state,info){
        state.nm = info.nm;
        state.id = info.id

        sessionStorage.setItem("nm",info.nm);
        sessionStorage.setItem("id",info.id);
    },
    handleMutationGetCity(state,params){
        let city = params.cities
        let hotCity = [],cityList = [];
        for(var i=0;i<city.length;i++){
            if(city[i].isHot){
                hotCity.push({id:city[i].id,nm:city[i].nm})
            }
        }

        for(var i=0;i<city.length;i++){
            let first = city[i].py.slice(0,1).toUpperCase()

            if(isIndex(first)){
                cityList.push({index:first,list:[{id:city[i].id,nm:city[i].nm}]})
            }else{

                for(var j=0;j<cityList.length;j++){
                    if(first == cityList[j].index){
                        cityList[j].list.push({id:city[i].id,nm:city[i].nm});
                        break;
                    }
                }
            }
        }
        function isIndex(first){
            var bStop = true;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == first){
                    bStop = false;
                    break;
                }
            }
            return bStop;
        }
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })
        state.hotCity = hotCity;
        state.cityList = cityList;
        sessionStorage.setItem("hotCity",JSON.stringify(hotCity))
        sessionStorage.setItem("cityList",JSON.stringify(cityList))
    }
}

const getter={}

export default{
    state,
    actions,
    mutations,
    getter,
    namespaced:true
}