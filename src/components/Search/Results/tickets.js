import rossia from "./Ticket/rossia.png";
import redWings from "./Ticket/red-wings.png";
const tickets = [
  {
    //вместо айди теперь будем использовать аргумент индекс у функции мэп
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    back: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    isCharter: true,
    airlines: [rossia, redWings],
    offers: [{ airlines: "Clickavia", price: 18899 }],
    baggage: {
      mini: 5,
      full: 15
    }
  },
  {
    //вместо айди теперь будем использовать аргумент индекс у функции мэп
    outbound: {
      origin: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    back: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520023300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520027000
      },
      duration: 16500
    },
    isCharter: false,
    airlines: [redWings],
    offers: [{ airlines: "Clickavia", price: 12899 }],
    baggage: {
      mini: 5,
      full: 15
    }
  },
  {
    //вместо айди теперь будем использовать аргумент индекс у функции мэп
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    back: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    isCharter: false,
    airlines: [redWings],
    offers: [{ airlines: "Clickavia", price: 18899 }],
    baggage: {
      mini: 5,
      full: 15
    }
  }
];
export default tickets;
