import { Button } from "antd";
import { ClearOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { decrease, deleteCart, increase } from "../../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-500 px-2 py-4 text-center text-white font-bold text-lg tracking-wide shadow-md">
        Sepetteki Ürünler
      </h2>

      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.length > 0 ? (
          cart.cartItems.map((item, index) => (
            <li className="cart-item flex justify-between" key={index}>
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-16 h-16 object-cover cursor-pointer"
                  onClick={() => dispatch(deleteCart(item))}
                />
                <div className="flex flex-col ml-2">
                  <b>{item.title}</b>
                  <span>
                    {item.price}₺ x {item.quantity}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Button
                  type="primary"
                  size="small"
                  className="w-full flex items-center justify-center !rounded-full"
                  icon={<PlusOutlined />}
                  onClick={() => dispatch(increase(item))}
                />
                <span className="">{item.quantity}</span>
                <Button
                  type="primary"
                  size="small"
                  className="w-full flex items-center justify-center !rounded-full"
                  icon={<MinusOutlined />}
                  onClick={() => {
                    if (item.quantity === 1) {
                      if (window.confirm("Ürün Silinsin mi?")) {
                        dispatch(decrease(item));
                      }
                    }
                    if (item.quantity > 1) {
                      dispatch(decrease(item));
                    }
                  }}
                />
              </div>
            </li>
          ))
        ) : (
          <span>Sepette hiç ürün yok...</span>
        )}
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>
              {cart.total > 0
                ? (cart.total - cart.total / cart.tax).toFixed(2)
                : 0}
              ₺
            </span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV % {cart.tax}</b>
            <span className="text-red-700">
              {cart.total > 0 ? (cart.total / cart.tax).toFixed(2) : 0}₺
            </span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-red-600">Genel Toplam</b>
            <span className="text-xl">{cart.total.toFixed(2)}₺</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            icon={<ClearOutlined />}
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
