import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import timeStamps from '../../assets/timeStamps.json';
// import metaData from '../../assets/data.json';
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";
import { useEffect, useState } from "react";
// import timeStamps from '../../assets/timeStamps.json'

const List = ({ rows , currency , searchText }) => {
const[data , setData ] =  useState();
const [selectedOrder , setSelectedOrder] = useState(undefined); 
  
  useEffect(()=>{
    let arr = rows.filter((curr , index) => {
   
      return searchText ===  curr['&id']    ;
    }  ); 
    


    searchText.length === 0  ? setData(rows) :setData(arr)  ;
    if(selectedOrder) {

       arr = rows.filter((curr , index) => {
     console.log(index , selectedOrder  )
        return  curr['&id' ] !== selectedOrder.children[0].props.children   ;
      }  ); 
      setData(arr); 
      console.log(arr);
    }
console.log('hi')
  },[searchText ,selectedOrder])
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader >

          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / { currency }</ListHeaderCell>
         
        </ListHeader>
      </thead>
      <tbody>
        {  selectedOrder  && (
           <ListRow  >
            <ListRowCell>{selectedOrder.children[0].props.children}</ListRowCell>
          <ListRowCell>{selectedOrder.children[1].props.children}</ListRowCell>
          <ListRowCell>{selectedOrder.children[2].props.children}</ListRowCell>
          <ListRowCell>{selectedOrder.children[3].props.children}</ListRowCell>
          <ListRowCell>{selectedOrder.children[4].props.children}</ListRowCell>
           </ListRow> 
            

        )}
        {  data && data.map((row , index) => (
          <ListRow  key ={index} setSelectedOrder={setSelectedOrder} index={index}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{timeStamps.results[index].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
