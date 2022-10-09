export interface Cart {
  id:number;
  name:string;
  image_url:string;
  price:number;
  dimensions:string;
}

export function createCart(params: Partial<Cart>) {
  return {

  } as Cart;
}
