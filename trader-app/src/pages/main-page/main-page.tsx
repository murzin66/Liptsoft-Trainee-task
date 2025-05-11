import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./main-page.css";

function MainPage () {
  const handleActionChange = (action: string) => {
    console.log("изменение акции на");
    console.log(action);
  }
  return (
    <div id = "content-container">
      <Header handleActionChange = {handleActionChange}/>
      <Footer/>
    </div>
  );
}
export default MainPage;