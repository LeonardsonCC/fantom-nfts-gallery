export interface Token {
  contractAddress: string;
  imageURL: string;
  isAppropriate: boolean;
  lastSalePrice: number;
  lastSalePriceInUSD: number;
  lastSalePricePaymentToken: PaymentToken;
  liked: number;
  name: string;
  paymentToken: PaymentToken;
  price: number;
  priceInUSD: number;
  saleEndsAt: Date;
  supply: number;
  thumbnailPath: string;
  tokenID: number;
  tokenType: number;
  tokenURI: string;
  _id: string;
}

enum PaymentToken {
  "ftm",
  "usdc",
}
