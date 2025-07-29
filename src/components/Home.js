import { useState, useEffect } from "react";
import { shopingItems } from "./data";
import { Link } from 'react-router';

export default function Home(props) {
    let isInCart = null;
    const [activeCouponId, setActiveCouponId] = useState(null);
    const [couponCodes, setCouponCodes] = useState({});
    const [appliedCoupons, setAppliedCoupons] = useState({});
    const [discounts, setDiscounts] = useState({}); // coupon-based discounts
    const [warningPopup, setWarningPopup] = useState(null); // for warning message


    // New state to track recently added item for popup
    const [recentlyAddedItem, setRecentlyAddedItem] = useState(null);



    function handleOnClick(items) {
        const discount = discounts[items.id] ?? items.discount ?? 0;
        const finalPrice = +(items.price * ((100 - discount) / 100)).toFixed(2);

        const discountedItem = {
            ...items,
            originalPrice: items.price, // store original price
            price: finalPrice,          // discounted price
            discount,                   // store applied discount
            quantity: 1,
        };

        const existingItem = props.cartData.find((item) => item.id === items.id);

        if (existingItem) {
            setWarningPopup({
                id: items.id,
                name: items.name,
                image: items.image,
            });

            setTimeout(() => setWarningPopup(null), 3000);
            return;
        }

        props.setCartData((prev) => [...prev, discountedItem]);
        props.setCartCount((prev) => prev + 1);

        setRecentlyAddedItem(discountedItem);
        setTimeout(() => setRecentlyAddedItem(null), 3000);
    }



    const handleCouponChange = (id, value) => {
        setCouponCodes((prev) => ({ ...prev, [id]: value }));
    };

    const applyCoupon = (id) => {
        const code = couponCodes[id] || "";
        const digits = code.match(/\d{2}$/); // get last 2 digits

        if (digits) {
            const offer = parseInt(digits[0]);
            if (offer >= 1 && offer <= 99) {
                setDiscounts((prev) => ({ ...prev, [id]: offer }));
                setAppliedCoupons((prev) => ({ ...prev, [id]: true }));
                setActiveCouponId(null); // hide input
            }
        } else {
            alert("Invalid coupon. Use codes ending with two digits (e.g., SAVE20).");
        }
    };

    return (
        <>
            {/* Warning popup if item already exist */}
            {warningPopup ? (
                <div className="fixed top-20 right-4 z-500 bg-red-100 bg-opacity-90 rounded-lg p-4 shadow-lg max-w-sm w-full">
                    <div className="flex items-center gap-4">
                        <img
                            src={warningPopup.image}
                            alt={warningPopup.name}
                            className="w-16 object-fit rounded"
                        />
                        <div>
                            <p className="text-lg font-semibold text-red-800 mb-1">{warningPopup.name}</p>
                            <p className="text-red-800 font-semibold">
                                This item is already in your cart. Go to{" "}
                                <Link to="/cart" className="text-green-700 font-bold underline hover:text-green-900 transition-colors">
                                    Cart
                                </Link>{" "}
                                to add more.
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}

            {/*item adding conformation popup */}
            {recentlyAddedItem ? (
                <div className="fixed top-20 right-4 z-400  bg-white  bg-opacity-90 rounded-lg p-4 shadow-lg max-w-sm w-full">
                    <div className="flex items-center gap-4">
                        <img
                            src={recentlyAddedItem.image}
                            alt={recentlyAddedItem.name}
                            className="w-14  object-fit rounded"
                        />
                        <div>
                            <p className="text-lg font-semibold text-black">{recentlyAddedItem.name}</p>
                            <p className="text-green-600 font-bold">
                                ₹{recentlyAddedItem.price.toFixed(2)} added to cart!
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}



            <section className="px-14 py-3 bg-gray-50 mx-15 mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {shopingItems.map((items) => {
                        const cartItem = props.cartData.find((i) => i.id === items.id);
                        const isCouponApplied = Boolean(cartItem?.discount);  // use discount from cart if exists
                        const discount = isCouponApplied
                            ? cartItem.discount
                            : discounts[items.id] ?? items.discount ?? 0;

                        const finalPrice = +(
                            items.price *
                            ((100 - discount) / 100)
                        ).toFixed(2);


                        return (
                            <div
                                key={items.id}
                                className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-900 ease-in-out hover:scale-105"
                            >
                                <div className="h-48 w-full overflow-hidden flex justify-center items-center bg-white">
                                    <img
                                        src={items.image}
                                        alt={items.name}
                                        className="h-40 object-fit rounded"
                                    />
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {items.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        This is a short description of the product.
                                    </p>

                                    <div className="relative flex items-center gap-2 mb-2 min-h-[32px]">
                                        <span className="text-gray-500 line-through text-sm">
                                            ₹{items.price}
                                        </span>
                                        <span className="text-red-500 text-sm font-semibold">
                                            -{discount}%
                                        </span>

                                        {isCouponApplied ? (
                                            <span className="text-green-600 text-sm font-semibold absolute right-0">
                                                Offer Applied
                                            </span>
                                        ) : activeCouponId === items.id ? (
                                            <div className="absolute right-0 flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter coupon"
                                                    value={couponCodes[items.id] || ""}
                                                    onChange={(e) =>
                                                        handleCouponChange(items.id, e.target.value)
                                                    }
                                                    className="border border-gray-300 rounded px-2 py-1 text-sm w-28"
                                                />
                                                <button
                                                    onClick={() => applyCoupon(items.id)}
                                                    className="bg-green-600 text-white text-sm rounded hover:bg-green-700 px-2"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                className="text-blue-500 text-sm font-semibold absolute right-0"
                                                onClick={() => setActiveCouponId(items.id)}
                                            >
                                                Apply Coupon Code
                                            </button>
                                        )}
                                    </div>

                                    <div className="text-lg font-bold text-green-600 mb-4">
                                        ₹{finalPrice}
                                    </div>

                                    {isInCart = props.cartData.some((item) => item.id === items.id)} {/* setting the cart variable value  */}

                                    <button onClick={() => handleOnClick({ ...items })}
                                        className={`mt-auto font-semibold py-2 rounded-md transition-colors 
                                                     ${isInCart ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700 text-white"}`} >
                                        {isInCart ? "Added to cart" : "Add to cart"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
