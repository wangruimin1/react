import ajax from './request';
export const getGoods = (params)=>{
    return ajax.get("/api/goods",{
        params:{...params}
    })
}
export const getSeller = (params)=>{
    return ajax.get("/api/seller",{
        params:{...params}
    })
}
export const getRatings = (params)=>{
    return ajax.get("/api/ratings",{
        params:{...params}
    })
}