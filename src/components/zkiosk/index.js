import { useState } from "react"
import ZCart from "./ZCart"
import ZProductList from "./ZProductList"
const ZKiosk = () => {

    // Cart에 보내줄 배열 생성
    const [items, setItems] = useState([])
    const [current, setCurrent] = useState(null)
    // 함수는 선언시 console로 적용되는지
    // 논리 작성전 확인해준다.
    // ProductList로 내려줄 함수들
    const buyProduct = (product) => {
        // 시작할떄 console만찍어본다
        console.log("buy product", product)
        // 해당상품 검사
        const targetArr = items.filter(item => item.pno === product.pno)
        if (targetArr.length === 0) {
            setItems([...items, { ...product, qty: 1 }])
            return
        }
        targetArr[0].qty += 1
        setItems([...items])
    }

    const viewProduct = (p) => {

        console.log(p)

        setCurrent({ ...p })

        
    }

    const getTotal = (arr) => {
        if (!arr || arr.length === 0) {
            return 0
        }

        const reSum = arr.reduce((accmulator, currentObject) => {
            return accmulator + (currentObject.price * currentObject.qty)
        }, 0)

        return reSum
    }

    // Cart에서 보내줄 기능 
    const changeQty = (pno, amount) => {
        console.log("changeQty")

        // 배열인데 1개짜리 배열이 나온다
        const targetItem = items.filter(item => item.pno === pno)[0]
        targetItem.qty += amount

        if (targetItem.qty === 0) {

            setItems(items.filter(item => item.pno !== pno))
            return
        }

        setItems([...items])
    }
    const removeList = () => {
        setItems([])
    }

    return (<div className="w-full h-[100vh] flex">
        <ZProductList cur={current} buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
        <ZCart arr={items} changeQty={changeQty} removeList={removeList} getTotal={getTotal}></ZCart>
    </div>);
}

export default ZKiosk;