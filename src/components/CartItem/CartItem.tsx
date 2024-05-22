import './CartItem.scss';
import img from '../../images/Product.png';
import Delete from '../../icons/Close.svg';

type Props = {
  id: number;
};

export const CartItem: React.FC<Props> = ({ id }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__mobail-top">
        <button type="button" className="cartItem__delete-btn">
          <img src={Delete} alt="Delete" />
        </button>

        <img src={img} alt="Phone" className="cartItem__img" />

        <span className="cartItem__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023) | id: {id}
        </span>
      </div>

      <div className="cartItem__calculation">
        <div className="cartItem__quantity">
          <button type="button" className="cartItem__btn">
            -
          </button>

          <span className="cartItem__number">1</span>

          <button type="button" className="cartItem__btn">
            +
          </button>
        </div>

        <div className="cartItem__price">$999</div>
      </div>
    </div>
  );
};
