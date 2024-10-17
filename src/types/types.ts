export interface item {
    id: number;
    name: string;
    image: string;
    price: number;
    discount: string;
    rating: number;
    reviews: number;
    fastDelivery: boolean;
    bestPrice: boolean;
}

export interface CartItem extends item {
    quantity: number;
}