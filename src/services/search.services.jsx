import http from "../axiosInstance";

class searchDataService {
  getAll() {
    return http.get("/?results=10");
  }
}

const searchService = new searchDataService();
export default searchService;
