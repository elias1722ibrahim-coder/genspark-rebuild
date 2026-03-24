export interface Product {
  id: number;
  nameEn: string;
  nameAm: string;
  price: number;
  categoryKey: 'vegetables' | 'spices' | 'dairy' | 'fruits';
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    nameEn: 'Fresh Vegetables Mix',
    nameAm: 'የአትክልት ድብልቅ',
    price: 80,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/fresh-vegetables-6c84d8fa-1774368198134.webp'
  },
  {
    id: 2,
    nameEn: 'Farm Fresh Eggs (Dozen)',
    nameAm: 'ትኩስ እንቁላል (ደርዘን)',
    price: 150,
    categoryKey: 'dairy',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/farm-fresh-eggs-18abec5e-1774368191606.webp'
  },
  {
    id: 3,
    nameEn: 'Organic Whole Milk (1L)',
    nameAm: 'የላም ወተት (1 ሊትር)',
    price: 90,
    categoryKey: 'dairy',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/organic-milk-990a8f63-1774368193879.webp'
  },
  {
    id: 4,
    nameEn: 'Authentic Berbere Spice',
    nameAm: 'ንጹህ በርበሬ',
    price: 120,
    categoryKey: 'spices',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/authentic-spices-7c60638d-1774368199448.webp'
  },
  {
    id: 5,
    nameEn: 'Premium Shiro Powder',
    nameAm: 'ጥራት ያለው ሽሮ',
    price: 100,
    categoryKey: 'spices',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&h=400&fit=crop'
  },
  {
    id: 6,
    nameEn: 'Organic Tomatoes',
    nameAm: 'ኦርጋኒክ ቲማቲም',
    price: 45,
    categoryKey: 'vegetables',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=400&h=400&fit=crop'
  },
  {
    id: 7,
    nameEn: 'Fresh Red Onions',
    nameAm: 'ቀይ ሽንኩርት',
    price: 40,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/red-onion-14e36b40-1774369001236.webp'
  },
  {
    id: 8,
    nameEn: 'Organic Potatoes',
    nameAm: 'ድንች',
    price: 35,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/potatoes-ccf7029f-1774369002229.webp'
  },
  {
    id: 9,
    nameEn: 'Fresh Carrots',
    nameAm: 'ካሮት',
    price: 30,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/carrots-164bbde4-1774369001029.webp'
  },
  {
    id: 10,
    nameEn: 'Green Cabbage',
    nameAm: 'ጥቅል ጎመን',
    price: 25,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/cabbage-b7d8eb95-1774369001424.webp'
  },
  {
    id: 11,
    nameEn: 'Green Pepper',
    nameAm: 'ቃሪያ',
    price: 50,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/green-pepper-5042b8c7-1774369001763.webp'
  },
  {
    id: 12,
    nameEn: 'Fresh Spinach',
    nameAm: 'ቆስጣ',
    price: 20,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/spinach-ad627737-1774369001508.webp'
  },
  {
    id: 13,
    nameEn: 'Organic Garlic',
    nameAm: 'ነጭ ሽንኩርት',
    price: 150,
    categoryKey: 'vegetables',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/garlic-a8aa64e5-1774369001891.webp'
  },
  {
    id: 14,
    nameEn: 'Red Apples',
    nameAm: 'ፖም',
    price: 200,
    categoryKey: 'fruits',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/apples-85015be3-1774369001712.webp'
  },
  {
    id: 15,
    nameEn: 'Ripe Bananas',
    nameAm: 'ሙዝ',
    price: 60,
    categoryKey: 'fruits',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/bananas-bbec791a-1774369005137.webp'
  },
  {
    id: 16,
    nameEn: 'Sweet Oranges',
    nameAm: 'ብርቱካን',
    price: 100,
    categoryKey: 'fruits',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/oranges-2ee31a0d-1774369008162.webp'
  },
  {
    id: 17,
    nameEn: 'Fresh Grapes',
    nameAm: 'ወይን',
    price: 250,
    categoryKey: 'fruits',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/grapes-e9a83636-1774369012931.webp'
  },
  {
    id: 18,
    nameEn: 'Ripe Mangoes',
    nameAm: 'ማንጎ',
    price: 80,
    categoryKey: 'fruits',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/mangoes-ca7aa2ec-1774369015283.webp'
  },
  {
    id: 19,
    nameEn: 'Fresh Strawberries',
    nameAm: 'እንጆሪ',
    price: 150,
    categoryKey: 'fruits',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/strawberries-3962de6f-1774369012980.webp'
  }
];