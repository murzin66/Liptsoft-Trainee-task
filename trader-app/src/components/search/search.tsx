import "./search.css";
import { useRef } from "react";
import {toast} from "react-toastify";

export type SearchProp = {
  handleActionChange: (action:string)=> void;
}
function Search( {handleActionChange}: SearchProp){
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearchButtonClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    const action = searchRef.current;
    if (action?.value){
      handleActionChange(action.value);
    }
    else {
      toast.warning("Введите название акции для поиска");
    }
  }
  return (
    <>
      <input className="search-form" placeholder="Поиск акции" ref = {searchRef}/>
      <button className="search-button" onClick={handleSearchButtonClick}>
        Поиск
      </button>
    </>
  )
}
export default Search;