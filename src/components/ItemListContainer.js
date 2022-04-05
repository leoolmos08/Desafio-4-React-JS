import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <p>{greeting}</p>
        <ItemCount stock="5" initial="0" />
        </>
    );
}
export default ItemListContainer;