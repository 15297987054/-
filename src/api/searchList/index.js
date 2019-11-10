import http from "@utils/http";


export const Search_list=(val)=>http.get("/api/search/relatedKeywords",{
    keywords:val
})