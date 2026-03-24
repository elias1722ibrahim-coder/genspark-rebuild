export interface Product {
  id: number;
  nameEn: string;
  nameAm: string;
  price: number;
  categoryKey: 'vegetables' | 'spices' | 'dairy';
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
  }
];