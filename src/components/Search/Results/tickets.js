const tickets = [
  {
    id: 1,
    outbound: {
      origin: {
        city: "",
        airport: "",
        dateTime: 0
      },
      destination: {
        city: "",
        airport: "",
        dateTime: 0
      },
      duration: 0
    },
    return: {
      origin: {
        city: "",
        airport: "",
        dateTime: 0
      },
      destination: {
        city: "",
        airport: "",
        dateTime: 0
      },
      duration: 0
    },
    isCharter: false,
    airlines: [],
    offers: [],
    baggage: {
      mini: "",
      full: ""
    }
  }
];
export default tickets;
