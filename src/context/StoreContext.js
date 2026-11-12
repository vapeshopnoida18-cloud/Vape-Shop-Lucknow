"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";

const StoreContext = createContext(null);

const CART_STORAGE_KEY = "vsl_cart_v1";
const WISHLIST_STORAGE_KEY = "vsl_wishlist_v1";
const STORE_EVENT = "vsl-store-update";
const EMPTY_ARRAY = [];

let cachedCartRaw = null;
let cachedCartParsed = EMPTY_ARRAY;
let cachedWishlistRaw = null;
let cachedWishlistParsed = EMPTY_ARRAY;

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener(STORE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(STORE_EVENT, handler);
  };
}

function getCartSnapshot() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw === cachedCartRaw) return cachedCartParsed;
    cachedCartRaw = raw;
    cachedCartParsed = raw ? JSON.parse(raw) : EMPTY_ARRAY;
    return cachedCartParsed;
  } catch {
    return EMPTY_ARRAY;
  }
}

function getWishlistSnapshot() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (raw === cachedWishlistRaw) return cachedWishlistParsed;
    cachedWishlistRaw = raw;
    cachedWishlistParsed = raw ? JSON.parse(raw) : EMPTY_ARRAY;
    return cachedWishlistParsed;
  } catch {
    return EMPTY_ARRAY;
  }
}

function getServerSnapshot() {
  return EMPTY_ARRAY;
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event(STORE_EVENT));
  } catch {
    // Ignore storage errors in restricted environments
  }
}

export function StoreProvider({ children }) {
  const cart = useSyncExternalStore(
    subscribe,
    getCartSnapshot,
    getServerSnapshot
  );
  const wishlist = useSyncExternalStore(
    subscribe,
    getWishlistSnapshot,
    getServerSnapshot
  );

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const addToCart = useCallback((product) => {
    const current = getCartSnapshot();
    const existing = current.find((item) => item.id === product.id);
    const next = existing
      ? current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...current, { ...product, quantity: 1 }];
    writeStore(CART_STORAGE_KEY, next);
  }, []);

  const removeFromCart = useCallback((productId) => {
    const next = getCartSnapshot().filter((item) => item.id !== productId);
    writeStore(CART_STORAGE_KEY, next);
  }, []);

  const updateQuantity = useCallback((productId, delta) => {
    const next = getCartSnapshot()
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => item.quantity > 0);
    writeStore(CART_STORAGE_KEY, next);
  }, []);

  const clearCart = useCallback(() => {
    writeStore(CART_STORAGE_KEY, []);
  }, []);

  const toggleWishlist = useCallback((product) => {
    const current = getWishlistSnapshot();
    const exists = current.some((item) => item.id === product.id);
    const next = exists
      ? current.filter((item) => item.id !== product.id)
      : [...current, product];
    writeStore(WISHLIST_STORAGE_KEY, next);
  }, []);

  const isWishlisted = useCallback(
    (productId) => wishlist.some((item) => item.id === productId),
    [wishlist]
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <StoreContext.Provider
      value={{
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
        isWishlisted,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("useStore must be used inside StoreProvider");
  }
  return ctx;
}
