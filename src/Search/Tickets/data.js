import firstTypeLuggage from "./svg/firstTypeLuggage.svg";
import secondTypeLuggage from "./svg/secondTypeLuggage.svg";
import thirdTypeLuggage from "./svg/thirdTypeLuggage.svg";
import fourthTypeLuggage from "./svg/fourthTypeLuggage.svg";
import russiaAirlines from "./svg/russiaAirlines.svg";
import nordwingAirlines from "./svg/nordwingAirlines.svg";
import redWingsAirlines from "./svg/redWingsAirlines.svg";
import flyAirlines from "./svg/flyAirlines.svg";

export const TicketData = [
  {
    key: 0,
    status: "Самый дешевый 🤑",
    statusColor: "#83D40B",
    ticketPrice: "7 712",
    tabs: [
      {
        luggageType: [firstTypeLuggage],
        luggageTypeAlt: "5 kg carry on and 15 kg luggage"
      }
    ],
    company: "Clickavia",
    offers: [],
    logo: [russiaAirlines],
    logoAlt: "Russia Airlines",
    charter: true,
    departure: {
      departureTime: "00:05",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "03:05",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "5 ч",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "10:35",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:10",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 35 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "Прямой"
    }
  },
  {
    key: 1,
    status: "Самый быстрый ⚡",
    statusColor: "#AF7542",
    ticketPrice: "8 029",
    tabs: [
      {
        luggageType: [secondTypeLuggage],
        luggageTypeAlt: "5 kg carry on and no luggage"
      }
    ],
    company: "Билетик Аэро",
    offers: [],
    logo: [nordwingAirlines],
    logoAlt: "Norwing Airlines",
    charter: false,
    departure: {
      departureTime: "00:15",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "03:10",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "4 ч 55 м",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "10:45",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:15",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 30 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "CDG"
    }
  },
  {
    key: 2,
    status: "Лучший билет 😍",
    statusColor: "#C279D1",
    ticketPrice: "8 164",
    tabs: [
      {
        luggageType: [thirdTypeLuggage],
        luggageTypeAlt: "5 kg carry on and no luggage",
        caption: "Нет багажа"
      },
      {
        luggageType: [fourthTypeLuggage],
        luggageTypeAlt: "5 kg carry on and 12 luggage",
        caption: "- 136 ₽"
      }
    ],
    company: "Aviakassa",
    offers: [],
    logo: [nordwingAirlines],
    logoAlt: "Nordwing Airlines",
    charter: true,
    departure: {
      departureTime: "00:15",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "03:10",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "4 ч 55 м",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "10:45",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:15",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 30 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "Прямой"
    }
  },
  {
    key: 3,
    ticketPrice: "8 240",
    tabs: [
      {
        luggageType: [thirdTypeLuggage],
        luggageTypeAlt: "10 kg carry on and no luggage",
        caption: "Нет багажа"
      },
      {
        luggageType: [fourthTypeLuggage],
        luggageTypeAlt: "10 kg carry on and 20 kg luggage",
        caption: "- 267 ₽"
      }
    ],
    company: "Билетик Аэро",
    offers: [],
    logo: [redWingsAirlines],
    logoAlt: "Red Wings Airlines",
    charter: true,
    departure: {
      departureTime: "07:00",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "09:30",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "4 ч 30 м",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "11:00",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:10",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 10 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "Прямой"
    }
  },
  {
    key: 4,
    ticketPrice: "9 108",
    tabs: [
      {
        luggageType: [fourthTypeLuggage],
        luggageTypeAlt: "10 kg carry on and 15 kg luggage",
        caption: "Осталось 5 билетов"
      }
    ],
    company: "Clickavia",
    offers: [],
    logo: [russiaAirlines],
    logoAlt: "Russia Airlines",
    charter: true,
    departure: {
      departureTime: "00:05",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "03:05",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "5 ч",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "11:00",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:10",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 10 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "Прямой"
    }
  },
  {
    key: 5,
    ticketPrice: "9 269",
    tabs: [
      {
        luggageType: [thirdTypeLuggage],
        luggageTypeAlt: "? carry on and 20 kg luggage"
      }
    ],
    company: "Biletix",
    offers: [
      {
        offerAgent: "Svyaznoy Travel",
        offerPrice: "9 275"
      },
      {
        offerAgent: "Билетик Аэро",
        offerPrice: "9 587"
      }
    ],
    logo: [flyAirlines],
    logoAlt: "Fly Airlines",
    charter: true,
    departure: {
      departureTime: "07:30",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "09:50",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "4 ч 20 м",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "11:20",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:35",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 15 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "Прямой"
    }
  },
  {
    key: 6,
    ticketPrice: "9 485",
    tabs: [
      {
        luggageType: [thirdTypeLuggage],
        luggageTypeAlt: "? carry on and 15 kg luggage"
      }
    ],
    company: "Clickavia",
    offers: [],
    logo: [redWingsAirlines],
    logoAlt: "Red Wings Airlines",
    charter: true,
    departure: {
      departureTime: "00:05",
      departureCity: "Москва",
      departureDate: "24 фев 2018, Cб",
      arrivalTime: "03:05",
      arrivalCity: "Барселона",
      arrivalDate: "24 фев 2018, Cб",
      timeDuration: "5 ч",
      departureAirport: "VKO",
      arrivalAirport: "BCN",
      routeType: "Прямой"
    },
    arrival: {
      departureTime: "11:20",
      departureCity: "Барселона",
      departureDate: "3 мар 2018, Cб",
      arrivalTime: "17:35",
      arrivalCity: "Москва",
      arrivalDate: "3 мар 2018, Cб",
      timeDuration: "4 ч 15 м",
      departureAirport: "BCN",
      arrivalAirport: "SVO",
      routeType: "Прямой"
    }
  }
];
