import styles from "./ListRow.module.css";
// , setSelectedOrder ,index
const ListCell = ({ children , setSelectedOrder , index  }) => {
  const setIndex = () =>{
    setSelectedOrder({children , index});
  }
  return <tr onClick={setIndex}  className={styles.cell}>{children}</tr>;
};

export default ListCell;
