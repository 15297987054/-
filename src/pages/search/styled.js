import styled from "styled-components";

export const Search_wrapper=styled.div `
    .searchBox{
    width:100%;
    height:0.3833rem;
    position: absolute;
    top:0;
    display: flex;
    justify-content:center;
    align-items:center;
    background:#f7f7f7;
}
.search{
    width:2.3708rem;
    padding-left:0.0833rem;
    display:flex;
    justify-content:right;
    align-items:center;
    height:0.2583rem;
    background:white;
    
}
.search input{
    width:2.5708rem;
    height:0.2583rem;
    margin-top:0.0625rem;
    margin-bottom:0.0625rem;
    padding-left:0.0667rem;
    border:none;
    background: white;
    border-radius: 0.0625rem;
}
#icon{
    line-height: 0.375rem;
    font-size:0.1167rem;
    color:#444;
    margin-left:0.1933rem;
   
}
.inner{
    padding:0.0833rem 0 0 0.0833rem;
    height:0.9625rem;
    width:100%;
    margin-top:0.375rem;
    .dt{
        width:100%;
        color:#999;
        font-size:0.1083rem;
        margin-bottom:0.0833rem;
    }
    ul{
        display:flex;
        justify-content:checked;
        align-items:center;
        flex-wrap:wrap;
        li{
        height:0.2542rem;
        width:auto;
        border:1px solid #ccc;
        margin-right:0.0408rem;
        font-size:0.1083rem;
        color:#444;
        margin-bottom:0.0833rem;
        padding:0.0417rem;
        }
    }
    
}
.keywords{
    li{
        color:#444;
        padding-left:0.0833rem;
        height:0.3708rem;
        line-height:0.3708rem;
        font-size:0.125rem;
        border-bottom:1px solid #e6e6e6;
    }
}
`