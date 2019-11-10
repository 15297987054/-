import http from "@utils/http";

export const Detail_list=(val)=>http.get("/api/sports/getComment",{
    id:"98310",
    tag_id:val,
    page:"1",
    page_size:"5",
    sort:"hot"
})