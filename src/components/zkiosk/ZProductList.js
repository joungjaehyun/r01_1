
const products = [
    { pno: 1, pname: "Americano", price: 10000, imgFile: 'americano.jpg' },
    { pno: 2, pname: "Vanilla", price: 8000, imgFile: 'vanillaLatte.jpg' },
    { pno: 3, pname: "Iced Capp", price: 4000, imgFile: 'IcedCapp.jpeg' },
    { pno: 4, pname: "Green Tea", price: 2000, imgFile: 'GreenTea.jpg' },   
    { pno: 5, pname: "Black Tea", price: 4500, imgFile: 'blacktea.jpg' }   
]
// 받을 props 지정
const ZProductList = ({cur,buyProduct, viewProduct}) => {
    
    return (  
        <div className="w-3/4 bg-red-500 text-4xl font-serif  text-white">
            <ul className="flex">
                {products.map( p=>
                    <li key={p.pno} className="m-5 p-3">
                        <img className="h-20" src={require(`../../images/${p.imgFile}`)}
                        onClick={()=>viewProduct(p)}></img>
                        {p.pname}<br></br>
                        {p.price}<br></br>
                        <button 
                        className="m-3 bg-red-400" 
                        // p로만 던지면 products가 바뀌면 데이터 변조된다
                        // 복사본으로 던져줘야된다.
                        onClick={()=>buyProduct({...p})}
                        >BUY</button>
                        </li>
            )}
            
            </ul>
            <div className="text-4xl text-white font-extrabold">
                    <div>확인창</div><br></br>
                    <div>View</div><br></br>
                    {cur ? 
                        <div >
                        <div>상품명: &nbsp;{cur.pname}</div>
                        <br></br>
                        <img className="w-40 h-40" 
                        src={require(`../../images/${cur.imgFile}`)}></img>
                       </div>
                        : <></>}
                        <br></br>
                </div>

        </div>
    );
}
 
export default ZProductList;