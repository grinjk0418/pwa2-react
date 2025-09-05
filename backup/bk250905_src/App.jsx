import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Link, Outlet } from 'react-router-dom';
// import ProductList from './components/ProductList.jsx';
// import TabUi from './components/TabUi.jsx';
import './App.css';
// import { useState } from 'react';

function App() {
  // const [prodFlg, setProdFlg] = useState(true);
  // const [tabFlg, setTabFlg] = useState(false);

  // const viewProductList = () => {
  //   setProdFlg(true);
  //   setTabFlg(false);
  // }

  // const viewTabUi = () => {
  //   setProdFlg(false);
  //   setTabFlg(true);
  // }

  return (
    <>
      <Header></Header>
      <main>
          <div>
            <Link to={'/'}>상품 리스트</Link>
            <Link to={'/test'}>테스트</Link>
          </div>
          <Outlet></Outlet>
        {/* <div>
          <span onClick={viewProductList}>상품 리스트</span>
          <span onClick={viewTabUi}>테스트</span>
        </div>
        { tabFlg && <TabUi></TabUi> }
        { prodFlg && <ProductList></ProductList> }   */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App; //내보낼때 디폴트 적으면 메인에서 임포트 할때 다른이름으로 받을수 있다.