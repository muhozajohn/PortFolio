import http from "../axiosInstance";
class contactDataService {
  getAll() {
    return http.get("/contact");
  }
  getcontact(id) {
    return http.get(`/contact/${id}`);
  }
  update(id, data) {
    return http.put(`/contact/${id}`, data);
  }
  create(data) {
    return http.post(`/contact`, data);
  }
  delete(id) {
    return http.delete(`/contact/${id}`);
  }
}

const contactService = new contactDataService();
export default contactService;