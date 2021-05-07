let trackId = 0;
identifyObj = {
  name: "Peter Gibbons",
  email: "peter@example.com",
  plan: "premium",
  logins: 5,
};
eventNames = [
  "Products Searched",
  "Product List Viewed",
  "Product List Filtered",
  "Promotion Viewed",
  "Promotion Clicked",
  "Product Clicked",
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
];
groupObj={name: "Initech",
industry: "Technology",
employees: 329,
plan: "enterprise",
"total billed": 830
}

track = () => {
  if(trackId==6){
      trackId=0
  }
  /*    analytics.track(eventNames[i],trackObjects[i]) */
  const res=analytics.track(eventNames[trackId], trackObjects[trackId]);
  console.log(res)
  if (trackId <= 5) {
    trackId++;
  } 
};
identify = () => {
  const res=analytics.identify("test", identifyObj);
  console.log(res)
};

group = () => {
    analytics.group("tester",groupObj)
};
screen = () => {};