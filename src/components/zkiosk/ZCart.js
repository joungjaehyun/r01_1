import ZCartItem from "./ZCartItem";

// 받을 props 지정
const ZCart = ({ arr, changeQty, removeList,getTotal }) => {

    console.log(arr)
    if (arr === null || arr.length === 0) {
        return (
            <></>
        )
    }

    return (
        // 배열처리
        <div className="w-1/4 bg-orange-300">
                     <div className="text-4xl font-serif text-amber-700">Cart
                    <button className="float-right border-2  rounded-sm bg-slate-500 text-white text-xl"
                    onClick={removeList}>비우기</button>
                </div>
                <ul>
                {arr.map((cartItem, idx) => 
                <li key={idx}><ZCartItem {...cartItem} changeQty={changeQty}></ZCartItem></li>)}
            </ul>
            <div className=" text-5xl float-right ">
                    TOTAL {getTotal(arr)} 원
                </div>
        </div>
    );

}
//하위 컴포넌트를 함수로 선언할수있다
// const CartItem = () => {
//     return (
//         <div>Items</div>
//     )
// }

export default ZCart;