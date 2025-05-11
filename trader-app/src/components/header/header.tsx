import Search, { SearchProp } from "../search/search";
import "./header.css";

function Header ( {handleActionChange}:SearchProp){
  return (
    <div className = "header">
      Московская биржа
      <Search handleActionChange={handleActionChange}/>
    </div>
  )
}
export default Header;