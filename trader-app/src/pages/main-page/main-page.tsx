import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchActionPrice } from "../../store/api-actions";
import { getCurrentAction, getPrice } from "../../store/selectors";
import "./main-page.css";
import Chart from "../../components/chart/chart";
import { changeCurrentAction } from "../../store/action-list-process/action-list-process";

function MainPage () {
  const dispatch = useAppDispatch();
  const currentAction = useAppSelector(getCurrentAction);
  const handleActionChange = async (action: string) => {
    await dispatch (fetchActionPrice(action));
    await dispatch(changeCurrentAction(action));
  }
  const PriceData = useAppSelector(getPrice);

  return (
    <div className = "content-container">
      <Header handleActionChange = {handleActionChange}/>
      <div className = "text-content">Графики продаж для компании {currentAction}
      </div>
      <Chart stockData={PriceData.series[0].candles}/>
      <Footer/>
    </div>
  );
}
export default MainPage;