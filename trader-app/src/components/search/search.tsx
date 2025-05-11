import "./search.css";
import { useRef } from "react";
import {toast} from "react-toastify";
import { useAppSelector } from "../../hooks";
import { getSecurities } from "../../store/selectors";
import { Action } from "../../types/state";

export type SearchProp = {
  handleActionChange: (action:string)=> void;
}
function Search( {handleActionChange}: SearchProp){
  const searchRef = useRef<HTMLInputElement>(null);
  const actionList = useAppSelector(getSecurities);
  const hasSecId = (items: Action[], targetSecId: string): boolean => {
    return items.some(item => item.SECID === targetSecId.toUpperCase());
  };
  const handleSearchButtonClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    const action = searchRef.current;
    if (action?.value){
      if (hasSecId(actionList, action?.value))
        handleActionChange(action.value);
      else{
        toast.info(`Нет информации о акции ${action.value}`);
      }
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