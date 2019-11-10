import http from "@utils/http"

export const home_goods=(type,channel_type)=>http.get( "/api/homefis/getNews",{
        pageSize:20,
        param_str:"",
        type:type,
        channel_type:channel_type
    })
  


  