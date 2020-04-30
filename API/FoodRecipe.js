import axios from "axios";

export default axios.create({
  baseURL: "https://foodrecipesapp-6ee74.firebaseio.com/",
  headers: {
    key: "AIzaSyDWiTSzzp8p2MBSa0h2eMjJToZifsPV-bc",
  },
});
