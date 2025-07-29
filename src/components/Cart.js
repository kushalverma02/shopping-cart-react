import { useEffect } from 'react';
import { Link } from 'react-router';

export default function Cart(props) {
  const cartItems = props.cartData;

  // Modify quantity
  function modifyCount(itemId, delta) {
    props.setCartData(prevCart =>
      prevCart
        .map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  // Remove item
  function removeItem(itemId) {
    props.setCartData(prevCart => prevCart.filter(item => item.id !== itemId));
  }

  // Update total item count in header
  useEffect(() => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    props.setCartCount(totalQuantity);
  }, [cartItems, props]);

  // Calculate totals
  const totalOriginalPrice = cartItems.reduce(
    (total, item) => total + (item.originalPrice ?? item.price) * item.quantity,
    0
  );

  const totalDiscountedPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          <p className="text-gray-700 text-lg mb-6">
            Your cart is currently empty.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6 w-full">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-6 rounded bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-6 flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex flex-col flex-grow text-left">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {/* Replace this with actual description if needed */}
                    High-quality product with excellent features.
                  </p>

                  {/* Prices */}
                  <p className="text-sm text-gray-500 mt-1">
                    Unit Price:{' '}
                    <span className="line-through text-gray-400">
                      ₹{(item.originalPrice ?? item.price).toFixed(2)}
                    </span>{' '}
                    <span className="font-medium text-green-600">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </p>

                  {item.discount && item.discount > 0 && (
                    <p className="text-sm text-red-500 font-semibold mt-1">
                      Discount: {item.discount}%
                    </p>
                  )}

                  {/* Quantity Controls */}
                  {/* Quantity Controls */}
                  <div className="flex flex-col gap-1 mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => modifyCount(item.id, -1)}
                        className={`text-black font-bold text-xl px-5 rounded-full shadow-sm transition 
                        ${item.quantity <=1 ? "bg-gray-200 cursor-not-allowed opacity-50" : "hover:bg-gray-200"}`}
                           disabled={item.quantity <=1 }
                      >
                        -
                      </button>
                      <span className="font-semibold text-lg">{item.quantity}</span>
                      <button
                        onClick={() => modifyCount(item.id, 1)}
                        className={`text-black font-bold text-xl px-5 rounded-full shadow-sm transition 
                        ${item.quantity >= 5 ? "bg-gray-200 cursor-not-allowed opacity-50" : "hover:bg-gray-200"}`}
                        disabled={item.quantity >= 5}
                      >
                        +
                      </button>
  {item.quantity >= 5 && (
                      <p className="text-red-500 text-sm font-small mt-1">
                        Max limit reached (5 per item)
                      </p>
                    )}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-6 text-red-600 font-semibold hover:underline"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>

                    {/* Max limit message */}
                  
                  </div>

                </div>
              </div>

              {/* Subtotal */}
              <div className="text-right font-semibold text-green-600 min-w-[120px]">
                <div className="text-sm text-gray-600 mb-1">Subtotal</div>
                <div className="text-sm text-gray-500 line-through">
                  ₹{((item.originalPrice ?? item.price) * item.quantity).toFixed(2)}
                </div>
                <div className="text-green-600">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}

          {/* Totals */}
          <div className="text-right text-xl font-bold text-gray-800 mt-8 space-y-2">
            <div>
              <span className="text-gray-500 mr-2">Total Original:</span>
              <span className="line-through text-gray-500">
                ₹{totalOriginalPrice.toFixed(2)}
              </span>
            </div>
            <div>

              <span className="text-gray-700 mr-2">Total Discounted:</span>
              <span className="text-green-600">
                ₹{totalDiscountedPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
