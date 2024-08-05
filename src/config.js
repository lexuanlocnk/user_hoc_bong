const config = {
  host: "http://192.168.245.180:8000/api",
  hostsv1: "http://mediank.ketnoi365.com/api",
  image: "http://mediank.ketnoi365.com/",
  img: "http://192.168.245.180:8000/upload/",
  contract: "http://192.168.245.180:8000/storage/",

  headersMember: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("membervtnk"),
  },
  headersStudent: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("studentvtnk"),
  },
};
export default config;
