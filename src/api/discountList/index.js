import http from "@utils/http"

export const discount_goods=(r)=>http.get("/api/youhui/list",{
        r:r,
        page:1,
        page_size:30,
        publish_date:""
  })