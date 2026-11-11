export interface DashboardData {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  priceChangePercentage24h: number;
  marketCap: string;
}

export const DASHBOARD_DATA = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    currentPrice: 65000.00,
    priceChangePercentage24h: 2.4,
    marketCap: "1.28T"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    currentPrice: 3200.00,
    priceChangePercentage24h: -1.2,
    marketCap: "385B"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    currentPrice: 145.00,
    priceChangePercentage24h: 5.6,
    marketCap: "65B"
  },
  {
    id: "binancecoin",
    name: "BNB",
    symbol: "BNB",
    currentPrice: 580.00,
    priceChangePercentage24h: 0.8,
    marketCap: "86B"
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    currentPrice: 0.62,
    priceChangePercentage24h: -2.1,
    marketCap: "34B"
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    currentPrice: 0.45,
    priceChangePercentage24h: 1.3,
    marketCap: "16B"
  },
  {
    id: "avalanche-2",
    name: "Avalanche",
    symbol: "AVAX",
    currentPrice: 36.00,
    priceChangePercentage24h: 3.2,
    marketCap: "14B"
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    currentPrice: 18.50,
    priceChangePercentage24h: -0.6,
    marketCap: "11B"
  },
  {
    id: "uniswap",
    name: "Uniswap",
    symbol: "UNI",
    currentPrice: 9.20,
    priceChangePercentage24h: 4.1,
    marketCap: "5.5B"
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    currentPrice: 1.00,
    priceChangePercentage24h: 0.01,
    marketCap: "33B"
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    currentPrice: 0.16,
    priceChangePercentage24h: -3.5,
    marketCap: "23B"
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    symbol: "SHIB",
    currentPrice: 0.000025,
    priceChangePercentage24h: 2.8,
    marketCap: "15B"
  }
] as DashboardData[]