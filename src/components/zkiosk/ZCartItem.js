const ZCartItem = ({pno,pname,price,qty, changeQty}) => {
    return (  
        <div>
  
            <div className="text-3xl font-extrabold">{pname} - {price}</div>
            <div className="flex text-2xl">
                <button className="rounded-lg bg-amber-700 p-4 m-1" onClick={()=> {changeQty(pno,1)}}>+</button>
                <div className="p-2 m-2 text-gray-950">{qty}</div>
                <button className="rounded-lg bg-amber-700 p-4 m-1" onClick={()=>{changeQty(pno,-1)}}>-</button>
            </div>
        </div>
    );
}
 
export default ZCartItem;