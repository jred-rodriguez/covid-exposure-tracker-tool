
import http from "../common/http";
import IVisitedPlaceData from "../types/IVisitedPlaceData";


class VisitedPlacesService {
  getAll() {
    return http.get<Array<IVisitedPlaceData>>("/visited-places");
  }

  get(id: string) {
    return http.get<IVisitedPlaceData>(`/visited-places/${id}`);
  }

  create(data: IVisitedPlaceData) {
    return http.post<IVisitedPlaceData>("/visited-places", data);
  }

  update(data: IVisitedPlaceData, id: any) {
    return http.put<any>(`/visited-places/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/visited-places${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/visited-places`);
  }

  findByTitle(title: string) {
    return http.get<Array<IVisitedPlaceData>>(`/visited-places?title=${title}`);
  }
}
