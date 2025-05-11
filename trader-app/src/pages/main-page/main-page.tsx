import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useAppDispatch } from "../../hooks";
import { fetchActionPrice } from "../../store/api-actions";
import "./main-page.css";

function MainPage () {
  const dispatch = useAppDispatch();
  const handleActionChange = (action: string) => {
    dispatch (fetchActionPrice(action));
  }
  return (
    <div id = "content-container">
      <Header handleActionChange = {handleActionChange}/>
      <Footer/>
    </div>
  );
}
export default MainPage;