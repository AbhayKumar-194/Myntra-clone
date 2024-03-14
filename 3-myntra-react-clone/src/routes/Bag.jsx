import Bagsummary from "../components/Bagsummary";
import BagItem from "../components/BagItem";
import {useSelector} from "react-redux"
const Bag=()=>
{
 const bagItems=useSelector(store=>store.bag);
 const items=useSelector(store=>store.items);
 const finalItems=items.filter((item)=>{
  const itemindex=bagItems.indexOf(item.id);
  return itemindex>=0;
 });
    return (
        
       
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item)=>(<BagItem item={item}/>))}
          
           </div>
          <Bagsummary/>
       
        

      </div>
    </main>
    
    
    )
}
export default Bag;