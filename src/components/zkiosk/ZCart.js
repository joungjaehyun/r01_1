import ZCartItem from "./ZCartItem";

// 받을 props 지정
const ZCart = ({ arr, changeQty }) => {

    console.log(arr)
    if (arr === null || arr.length === 0) {
        return (
            <></>
        )
    }

    return (
        // 배열처리
        <div>
            <ul>
                {arr.map((cartItem, idx) => 
                <li key={idx}><ZCartItem {...cartItem} changeQty={changeQty}></ZCartItem></li>)}
            </ul>
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