import ProductDetail from './ProductDetail.jsx';
import './ProductList.css';
import { useState } from 'react';

function ProductList() {
  const products = [
    {id: 0, title: '바지', info: '좋은 바지', price: 10000, img: 'https://picsum.photos/id/40/4106/2806'},
    {id: 1, title: '티셔츠', info: '좋은 티셔츠', price: 5000, img: 'https://picsum.photos/id/41/1280/805'},
    {id: 2, title: '양말', info: '좋은 양말', price: 1000, img: 'https://picsum.photos/id/42/3456/2304'},
  ];

  const [modalFlg, setModalFlg] = useState(false);

  const [propsProduct, setPropsProduct] = useState({});

  const viewModal = (item) => {
    setPropsProduct({...item});
    setModalFlg(true);
  }
    // 리액트는 최상단 요소 하나만 올라가야되서 <> 빈걸로 묶어.. html엔 표시 안됨..
  return (
    <>
      { modalFlg && <ProductDetail product={propsProduct} setModalFlg={setModalFlg}></ProductDetail> }
      <div className='card-container'>
        {
          products.map((item) => {
            return (
              <div className='card' key={item.id} onClick={() => {viewModal(item)}}>
                <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
                <p className="card-title">{item.title}</p>
                <p className="card-price">{item.price}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ProductList;















//   return (
//     <div className="card-container">
//       <div className="card">
//         <div className="card-img" style={{backgroundImage: `url(https://picsum.photos/id/7/4728/3168)`}}></div>
//         <p className="card-title">바지</p>
//         <p className="card-price">10000</p>
//       </div>
//       <div className="card">
//         <div className="card-img" style={{backgroundImage: `url(https://picsum.photos/id/7/4728/3168)`}}></div>
//         <p className="card-title">바지</p>
//         <p className="card-price">10000</p>
//       </div>
//       <div className="card">
//         <div className="card-img" style={{backgroundImage: `url(https://picsum.photos/id/7/4728/3168)`}}></div>
//         <p className="card-title">바지</p>
//         <p className="card-price">10000</p>
//       </div>
//     </div>
//   )
// }