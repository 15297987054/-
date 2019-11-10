import http from "@utils/http";

export const Basketball_list=(channel_type)=>http.get("/api/sports/getNews",{
    pageSize:20,
    param_str:"",
    type:"basketball",
    newsId:"",
    channel_type:channel_type
})

export const Running_list=(channel_type)=>http.get("/api/sports/getNews",{
    pageSize:20,
    param_str:"",
    type:"running",
    newsId:"",
    channel_type:channel_type
})

export const Hit_list=(channel_type)=>http.get("/api/sports/getNews",{
    pageSize:20,
    param_str:"",
    type:"fitness",
    newsId:"",
    channel_type:channel_type
})

export const Football_list=(channel_type)=>http.get("/api/sports/getNews",{
    pageSize:20,
    param_str:"",
    type:"football",
    newsId:"",
    channel_type:channel_type
})

export const Freestyle_list=(channel_type)=>http.get("/api/sports/getNews",{
    pageSize:20,
    param_str:"",
    type:"freestyle",
    newsId:"",
    channel_type:channel_type
})

export const Digital_list=(channel_type)=>http.get("/api/sports/getNews",{
    pageSize:20,
    param_str:"",
    type:"digital",
    newsId:"",
    channel_type:channel_type
})