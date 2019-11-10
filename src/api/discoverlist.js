import http from "@utils/http";
export const getdiscoverlist=(tag_id,str="")=>http.get("/api/find/mobileList",{
    tag_id:tag_id,
    param_str:str,
})

//最新
export const getdisnewlist =(str="")=>http.get("/api/column/ColumnList",{
    key:"collect_article",
    val:"sort_new",
    page_size:20,
    param_str:str
})