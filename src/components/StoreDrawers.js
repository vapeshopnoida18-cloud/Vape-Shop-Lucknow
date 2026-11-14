"use client";

import { FiHeart, FiShoppingCart, FiX, FiPlus, FiMinus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useStore } from "@/context/StoreContext";

const WHATSAPP_NUMBER = "917726005950";

export default function StoreDrawers() {
  const {
    cart,
    wishlist,
    cartCount,
    wishlistCount,
    cartTotal,
    cartOpen,
    setCartOpen,
    wishlistOpen,
    setWishlistOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
  } = useStore();

  const buildWhatsAppOrderUrl = () => {
    const lines = cart.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} x${item.quantity} - ₹${(
          item.price * item.quantity
        ).toLocaleString("en-IN")}`
    );
    const message = `Hi Vape Shop Lucknow, I want to place an order:\n\n${lines.join(
      "\n"
    )}\n\nTotal: ₹${cartTotal.toLocaleString("en-IN")}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  if (!cartOpen && !wishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1e2223]/45 backdrop-blur-[2px] transition-opacity"
        onClick={() => {
          setCartOpen(false);
          setWishlistOpen(false);
        }}
        aria-hidden="true"
      />

      {/* Wishlist Drawer */}
      {wishlistOpen && (
        <aside
          aria-label="Wishlist"
          className="relative z-10 w-full max-w-md bg-white h-full shadow-2xl border-l border-[#1e2223]/10 flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2223]/10">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#1e2223] text-[#E2C16B] flex items-center justify-center">
                <FiHeart className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#1e2223]">
                  Your Wishlist ({wishlistCount})
                </h2>
                <p className="text-xs text-[#1e2223]/60">Saved vapes &amp; flavors</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setWishlistOpen(false)}
              aria-label="Close wishlist"
              className="w-8 h-8 rounded-full border border-[#1e2223]/12 flex items-center justify-center text-[#1e2223] hover:border-[#C9A24D] cursor-pointer"
            >
              <FiX className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {wishlist.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-sm font-medium text-[#1e2223]">
                  Your wishlist is empty
                </p>
                <p className="text-xs text-[#1e2223]/60 mt-1">
                  Tap the heart icon on any product to save it here.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-[#1e2223]/10 bg-[#1e2223]/[0.02]"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#C9A24D]">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-semibold text-[#1e2223] truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-[#1e2223] mt-0.5">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(item);
                        setWishlistOpen(false);
                        setCartOpen(true);
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#1e2223] text-[#E2C16B] text-xs font-semibold hover:bg-[#2a2f30] transition-colors cursor-pointer"
                    >
                      Move to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(item)}
                      aria-label={`Remove ${item.name} from wishlist`}
                      className="w-7 h-7 rounded-full border border-[#1e2223]/12 flex items-center justify-center text-[#1e2223]/60 hover:text-red-600 hover:border-red-300 cursor-pointer"
                    >
                      <FiX className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <aside
          aria-label="Shopping Cart"
          className="relative z-10 w-full max-w-md bg-white h-full shadow-2xl border-l border-[#1e2223]/10 flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e2223]/10">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#1e2223] text-[#E2C16B] flex items-center justify-center">
                <FiShoppingCart className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#1e2223]">
                  Your Cart ({cartCount})
                </h2>
                <p className="text-xs text-[#1e2223]/60">
                  30–45 min delivery in Lucknow
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full border border-[#1e2223]/12 flex items-center justify-center text-[#1e2223] hover:border-[#C9A24D] cursor-pointer"
            >
              <FiX className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-sm font-medium text-[#1e2223]">
                  Your cart is empty
                </p>
                <p className="text-xs text-[#1e2223]/60 mt-1">
                  Add authentic vapes or e-liquids to order in Lucknow.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-[#1e2223]/10 bg-[#1e2223]/[0.02]"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#C9A24D]">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-semibold text-[#1e2223] truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-[#1e2223] mt-0.5">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center rounded-full border border-[#1e2223]/15 bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="w-7 h-7 flex items-center justify-center text-[#1e2223] hover:text-[#C9A24D] cursor-pointer"
                      >
                        <FiMinus className="w-3 h-3" aria-hidden="true" />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#1e2223]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="w-7 h-7 flex items-center justify-center text-[#1e2223] hover:text-[#C9A24D] cursor-pointer"
                      >
                        <FiPlus className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="w-7 h-7 rounded-full border border-[#1e2223]/12 flex items-center justify-center text-[#1e2223]/60 hover:text-red-600 hover:border-red-300 cursor-pointer"
                    >
                      <FiX className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-5 border-t border-[#1e2223]/10 bg-white space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#1e2223]/70">Subtotal</span>
                <span className="text-lg font-bold text-[#1e2223]">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="px-4 h-11 rounded-full border border-[#1e2223]/15 text-xs font-semibold text-[#1e2223] hover:border-[#C9A24D] cursor-pointer"
                >
                  Clear
                </button>
                <a
                  href={buildWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-11 rounded-full bg-[#1e2223] text-[#E2C16B] text-sm font-semibold border border-[#C9A24D]/50 flex items-center justify-center gap-2 hover:bg-[#2a2f30] transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
