export interface BettingSite {
  id: number
  rank: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  reviews: number
  features: string[]
  isTopChoice?: boolean
  badge?: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    rank: 1,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.8,
    bonus: "20 Jogadas Grátis",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    url: "https://www.casinoportugal.pt/",
    reviews: 4251,
  },
  {
    id: 2,
    rank: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.6,
    bonus: "5€ Registo + Até 500€ Bónus",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    badge: "MELHOR ESCOLHA",
    url: "https://www.luckia.pt/",
    reviews: 4673,
  },
  {
    id: 3,
    rank: 3,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.5,
    bonus: "25 FreeSpins no Registo",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    badge: "MAIS POPULAR",
    isTopChoice: true,
    url: "https://www.lebull.pt/",
    reviews: 3948,
  },
  {
    id: 4,
    rank: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.3,
    bonus: "100% Até 20€",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
    reviews: 4025,
  },
  {
    id: 5,
    rank: 5,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.2,
    bonus: "Deposita 10€ e joga com 50€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    badge: "RECOMENDADO",
    url: "https://www.betclic.pt/",
    reviews: 4281,
  },
]
