export interface FetchTokensResponse {
  tokens: Token[];
}

export interface Token {
  contractAddress: string;
  imageURL: string;
  name: string;
  tokenID: number;
  tokenURI: string;
}
