// 변수 선언을 컴포넌트 외에 선언하는 이유
// 컴포넌트 내에서 한다면, re-rendering을 할때마다 변수 자체도 계속해서 새로 생성되기때문
// 이를 방지하고자 변수를 외부에서 선언한다.

import { useState } from "react"

const products = [
    { pno: 1, pname: "Americano", price: 10000, imgFile: 'americano.jpg' },
    { pno: 2, pname: "Vanilla Latte", price: 8000, imgFile: 'vanillaLatte.jpg' },
    { pno: 3, pname: "Iced Capp", price: 4000, imgFile: 'IcedCapp.jpeg' },
    { pno: 4, pname: "Green Tea", price: 2000, imgFile: 'GreenTea.jpg' },
    { pno: 5, pname: "Black Tea", price: 4000, imgFile: 'blacktea.jpg' }
]

// 총합을 구하는 함수
const getTotal = (arr) => {
    if (!arr || arr.length === 0) {
        return 0
    }
    // reduce 방식
    const reSum = arr.reduce((accmulator, currentObject) => {
        return accmulator + (currentObject.price * currentObject.qty)
    }, 0)
    // 루프를 돌려서 만드는 방식
    // let sum =0;
    // for(const ele of arr){
    //     sum +=(ele.price*ele.qty)
    // }
    // return sum
    return reSum
}


const Kiosk = () => {
    // 2-1 카트에 담기 위해서 (useState로 re-rendering)
    const [items, setItems] = useState([])
    const [current, setCurrent] = useState(null)
    // Buy버튼을 누를시 카트에 보내주는 함수 
    const handleClickBuy = (product) => {
        // console 1차적 확인
        console.log({ product, qty: 1 })
        // 실제로 item이 있는지 아닌지 확인을위한 배열의 filter
        // ele.pno가 실제 변수 pno와 같는지 확인
        const result = items.filter(ele => ele.pno === product.pno)
        // result가 어떻게 나오는지 확인 하는 console
        console.log("result", result)
        // 배열 1개가 생성되거나 아예없거나 이므로 없다면 
        // 새로 items를 만들어줌 또한 다음진행이 안되게 하기위해 return처리
        if (result.length === 0) {
            setItems([...items, { ...product, qty: 1 }])
            return
        }
        // if의 경우가 아닐경우 result의 처음 배열인덱스값에
        // qty 수치 변경 및 setItems로 실제로 수정되게함
        const cartItem = result[0]
        cartItem.qty += 1
        setItems([...items])


    }
    // 카트내에서 추가 삭제를 위한 함수
    const hadleClickQty = (pno, amount) => {
        console.log("pno", pno, "amount", amount)
        // 실제 버튼눌리는 곳을 찾기 시작
        const target = items.filter(item => item.pno === pno)[0]
        console.log(target)
        // increase
        if (amount === 1) {
            target.qty += 1
            setItems([...items])
        }// decrease
        else {
            if (target.qty === 1) {
                setItems(items.filter(ele => ele.pno !== pno))
            } else {
                target.qty -= 1
                setItems([...items])
            }
        }


    }


    // 이미지 클릭시 상세정보 나오게하기
    const handleClickInfo = (product) => {
        console.log(product)

        setCurrent({...product})

    }


    return (
        <div className="w-full h-[100vh] flex ">

            <div className="w-3/4 bg-red-500">

                <div className="text-4xl font-serif underline text-white">Coffee & Tea Lists</div>
                <ul className="flex">

                    {products.map(p =>

                        <li key={p.pno} className="text-2xl  m-3 p-3 text-white"
                        >
                            <div>
                                <img className="w-20 h-15 mr-3 p-2"
                                    onClick={() => { handleClickInfo(p) }}
                                    src={require(`../images/${p.imgFile}`)}></img>

                                {p.pname}<br></br> {p.price} 원<br></br>


                                <button className="border-2 m-2 p-2 rounded-sm bg-amber-900 text-white"
                                    onClick={() => { handleClickBuy(p) }}>BUY</button>
                            </div>
                        </li>

                    )}

                </ul>
                <div>
                    <div>View</div>
                    {current ? <div>Currnet
                        <div>{current.pname}</div>
                    </div>
                        : <></>}
                </div>
            </div>

            <div className="w-1/4 bg-orange-300">
                <div className="text-4xl font-serif text-amber-700">Cart
                    <button className="float-right border-2  rounded-sm bg-slate-500 text-white text-xl" onClick={() => {
                        setItems([])
                    }}>비우기</button>
                </div>

                <ul>
                    {items.map((item, idx) =>
                        <li key={idx} className="">
                            <div className="flex text-3xl m-4 p-4 underline text-gray-950">
                                <div> {item.pname}  </div>
                                <div> &nbsp; Price: {item.price} 원</div>
                            </div>
                            <div className="flex justify-center text-2xl">
                                <button className="rounded-lg bg-amber-700 p-4 m-1"
                                    onClick={() => { hadleClickQty(item.pno, 1) }}>+</button>
                                <p className="p-2 m-2 text-gray-950">Quantity: {item.qty}</p>
                                <button className="rounded-lg bg-orange-700 p-4 m-1"
                                    onClick={() => { hadleClickQty(item.pno, -1) }}>-</button>
                            </div>

                        </li>)}
                </ul>
                <div className=" text-5xl float-right ">
                    TOTAL {getTotal(items)} 원
                </div>

            </div>

        </div>
    );
}
export default Kiosk;