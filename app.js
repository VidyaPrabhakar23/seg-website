let trackId = 0;

eventNames = [
  "Products Searched",
  "Product List Viewed",
  "Product List Filtered",
  "Promotion Viewed",
  "Promotion Clicked",
  "Product Clicked",
  "Product Viewed",
  "Product Removed",
  "Cart Viewed",
  "Checkout Started",
  "Checkout Step Viewed",
  "Checkout Step Completed",
  "Order Updated",
  "Order Completed",
  "identify",
  "group",
  "Order Refunded",
  "Coupon Entered",
  "Coupon Applied",
  "Coupon Denied",
  "Coupon Removed",
  "Product Added to Wishlist",
  "Product Removed from Wishlist",
  "Wishlist Product Added to Cart",
  "Product Shared",
  "Cart Viewed",
  "Product Reviewed",
];
trackObjects = [
  {
    query: "blue roses",
  },
  {
    list_id: "hot_deals_1",
    category: "Deals",
    products: [
      {
        product_id: "507f1f77bcf86cd799439011",
        sku: "45790-32",
        name: "Monopoly: 3rd Edition",
        price: 19,
        position: 1,
        category: "Games",
        url: "https://www.example.com/product/path",
        image_url: "https://www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc183733",
        sku: "46493-32",
        name: "Uno Card Game",
        price: 3,
        position: 2,
        category: "Games",
      },
    ],
  },
  {
    list_id: "todays_deals_may_11_2019",
    filters: [
      {
        type: "department",
        value: "beauty",
      },
      {
        type: "price",
        value: "under-$25",
      },
    ],
    sorts: [
      {
        type: "price",
        value: "desc",
      },
    ],
    products: [
      {
        product_id: "507f1f77bcf86cd798439011",
        sku: "45360-32",
        name: "Special Facial Soap",
        price: 12.6,
        position: 1,
        category: "Beauty",
        url: "https://www.example.com/product/path",
        image_url: "https://www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc283733",
        sku: "46573-32",
        name: "Fancy Hairbrush",
        price: 7.6,
        position: 2,
        category: "Beauty",
      },
    ],
  },
  {
    promotion_id: "promo_1",
    creative: "top_banner_2",
    name: "75% store-wide shoe sale",
    position: "home_banner_top",
  },
  {
    promotion_id: "promo_1",
    creative: "top_banner_2",
    name: "75% store-wide shoe sale",
    position: "home_banner_top",
  },
  {
    product_id: "507f1f77bcf86cd799439011",
    sku: "G-32",
    category: "Games",
    name: "Monopoly: 3rd Edition",
    brand: "Hasbro",
    variant: "200 pieces",
    price: 18.99,
    quantity: 1,
    coupon: "MAYDEALS",
    position: 3,
    url: "https://www.example.com/product/path",
    image_url: "https://www.example.com/product/path.jpg",
  },
  {
    product_id: "507f1f77bcf86cd799439011",
    sku: "G-32",
    category: "Games",
    name: "Monopoly: 3rd Edition",
    brand: "Hasbro",
    variant: "200 pieces",
    price: 18.99,
    quantity: 1,
    coupon: "MAYDEALS",
    currency: "usd",
    position: 3,
    value: 18.99,
    url: "https://www.example.com/product/path",
    image_url: "https://www.example.com/product/path.jpg",
  },
  {
    cart_id: "ksjdj92dj29dj92d2j",
    product_id: "507f1f77bcf86cd799439011",
    sku: "G-32",
    category: "Games",
    name: "Monopoly: 3rd Edition",
    brand: "Hasbro",
    variant: "200 pieces",
    price: 18.99,
    quantity: 1,
    coupon: "MAYDEALS",
    position: 3,
    url: "https://www.example.com/product/path",
    image_url: "https://www.example.com/product/path.jpg",
  },
  {
    cart_id: "d92jd29jd92jd29j92d92jd",
    products: [
      {
        product_id: "507f1f77bcf86cd799439011",
        sku: "45790-32",
        name: "Monopoly: 3rd Edition",
        price: 19,
        position: 1,
        category: "Games",
        url: "https://www.example.com/product/path",
        image_url: "https://www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc183733",
        sku: "46493-32",
        name: "Uno Card Game",
        price: 3,
        position: 2,
        category: "Games",
      },
    ],
  },
  {
    order_id: "50314b8e9bcf000000000000",
    affiliation: "Google Store",
    value: 30,
    revenue: 25.0,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: "hasbros",
    currency: "USD",
    products: [
      {
        product_id: "507f1f77bcf86cd799439011",
        sku: "45790-32",
        name: "Monopoly: 3rd Edition",
        price: 19,
        quantity: 1,
        category: "Games",
        url: "https://www.example.com/product/path",
        image_url: "https://www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc183733",
        sku: "46493-32",
        name: "Uno Card Game",
        price: 3,
        quantity: 2,
        category: "Games",
      },
    ],
  },
  {
    checkout_id: "50314b8e9bcf000000000000",
    step: 2,
    shipping_method: "Fedex",
    payment_method: "Visa",
  },
  {
    checkout_id: "50314b8e9bcf000000000000",
    step: 2,
    shipping_method: "Fedex",
    payment_method: "Visa",
  },
  {
    order_id: "50314b8e9bcf000000000000",
    affiliation: "Google Store",
    total: 27.5,
    revenue: 25.0,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: "hasbros",
    currency: "USD",
    products: [
      {
        product_id: "507f1f77bcf86cd799439011",
        sku: "45790-32",
        name: "Monopoly: 3rd Edition",
        price: 19,
        quantity: 1,
        category: "Games",
        url: "https://www.example.com/product/path",
        image_url: "https://www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc183733",
        sku: "46493-32",
        name: "Uno Card Game",
        price: 3,
        quantity: 2,
        category: "Games",
      },
    ],
  },
  {
    checkout_id: "fksdjfsdjfisjf9sdfjsd9f",
    order_id: "50314b8e9bcf000000000000",
    affiliation: "Google Store",
    total: 27.5,
    subtotal: 22.5,
    revenue: 25.0,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: "hasbros",
    currency: "USD",
    products: [
      {
        product_id: "507f1f77bcf86cd799439011",
        sku: "45790-32",
        name: "Monopoly: 3rd Edition",
        price: 19,
        quantity: 1,
        category: "Games",
        url: "https://www.example.com/product/path",
        image_url: "https:///www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc183733",
        sku: "46493-32",
        name: "Uno Card Game",
        price: 3,
        quantity: 2,
        category: "Games",
      },
    ],
  },
  {
    name: "Peter Gibbons",
    email: "peter@example.com",
    plan: "premium",
    logins: 5,
  },
  {
    name: "Initech",
    industry: "Technology",
    employees: 329,
    plan: "enterprise",
    "total billed": 830,
  },
  {
    order_id: "50314b8e9bcf000000000000",
    total: 30,
    currency: "USD",
    products: [
      {
        product_id: "507f1f77bcf86cd799439011",
        sku: "45790-32",
        name: "Monopoly: 3rd Edition",
        price: 19,
        quantity: 1,
        category: "Games",
        url: "https://www.example.com/product/path",
        image_url: "https://www.example.com/product/path.jpg",
      },
      {
        product_id: "505bd76785ebb509fc183733",
        sku: "46493-32",
        name: "Uno Card Game",
        price: 3,
        quantity: 2,
        category: "Games",
      },
    ],
  },
  {
    order_id: "50314b8e9bcf000000000000",
    cart_id: "923923929jd29jd92dj9j93fj3",
    coupon_id: "may_deals_2016",
  },
  {
    order_id: "50314b8e9bcf000000000000",
    cart_id: "923923929jd29jd92dj9j93fj3",
    coupon_id: "may_deals_2016",
    coupon_name: "May Deals 2016",
    discount: 23.32,
  },
  {
    order_id: "50314b8e9bcf000000000000",
    cart_id: "923923929jd29jd92dj9j93fj3",
    coupon: "may_deals_2016",
    reason: "Coupon expired",
  },
  {
    order_id: "50314b8e9bcf000000000000",
    cart_id: "923923929jd29jd92dj9j93fj3",
    coupon_id: "may_deals_2016",
    coupon_name: "May Deals 2016",
    discount: 23.32,
  },
  {
    wishlist_id: "skdjsidjsdkdj29j",
    wishlist_name: "Loved Games",
    product_id: "507f1f77bcf86cd799439011",
    sku: "G-32",
    category: "Games",
    name: "Monopoly: 3rd Edition",
    brand: "Hasbro",
    variant: "200 pieces",
    price: 18.99,
    quantity: 1,
    coupon: "MAYDEALS",
    position: 3,
    url: "https://www.example.com/product/path",
    image_url: "https://www.example.com/product/path.jpg",
  },
  {
    wishlist_id: "skdjsidjsdkdj29j",
    wishlist_name: "Loved Games",
    cart_id: "99j2d92j9dj29dj29d2d",
    product_id: "507f1f77bcf86cd799439011",
    sku: "G-32",
    category: "Games",
    name: "Monopoly: 3rd Edition",
    brand: "Hasbro",
    variant: "200 pieces",
    price: 18.99,
    quantity: 1,
    coupon: "MAYDEALS",
    position: 3,
    url: "https://www.example.com/product/path",
    image_url: "https://www.example.com/product/path.jpg",
  },
  {
    share_via: "email",
    share_message: "Hey, check out this item",
    recipient: "friend@example.com",
    product_id: "507f1f77bcf86cd799439011",
    sku: "G-32",
    category: "Games",
    name: "Monopoly: 3rd Edition",
    brand: "Hasbro",
    variant: "200 pieces",
    price: 18.99,
    url: "https://www.example.com/product/path",
    image_url: "https://www.example.com/product/path.jpg",
  },
  {
    share_via: "email",
    share_message: "Hey, check out this item",
    recipient: "friend@example.com",
    cart_id: "d92jd29jd92jd29j92d92jd",
    products: [
      { product_id: "507f1f77bcf86cd799439011" },
      { product_id: "505bd76785ebb509fc183733" },
    ],
  },
  {
    product_id: "507f1f77bcf86cd799439011",
    review_id: "kdfjrj39fj39jf3",
    review_body: "I love this product",
    rating: "5",
  },
];

triggerEvent = () => {
  for (let i = 0; i <= 50000; i++) {
    const trackIndex = Math.floor(Math.random() * 27);

    if (eventNames[trackIndex] === "identify") {
      analytics.identify("test", trackObjects[trackIndex]);
    } else if (eventNames[trackIndex] === "group") {
      analytics.group("test", trackObjects[trackIndex]);
    } else {
      analytics.track(eventNames[trackIndex], trackObjects[trackIndex]);
    }
  }
};
