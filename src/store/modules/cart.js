const initState = {
    goodsData:[],
    cartList:[]
}
const reducer = (state=initState,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "init_goods":
            newState.goodsData = action.data.goods;
        break;
        default:
        break;
        case "add_count":
        const obj = newState.cartList.find(item=>item.name===action.obj.name);
        if(obj){
            obj.count++;
        }else{
            action.obj.count = 1;
            state.cartList.push(action.obj);
        }
    }
    return newState;
}
export default reducer;