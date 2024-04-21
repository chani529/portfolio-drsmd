// Default axios config File
import axios from "./config";
import { Result } from "@type/responseType";

const Base = {
  /**
   * @param {any} params : Search conditions
   * @returns {Array}
   */
  /**get mamber data */
  async getDataList(params?: any): Promise<Result<any>> {
    try {
      return await axios.get("categories", { params });
    } catch (e: any) {
      console.log(e);
      return e.message;
    }
  },
  /**
   * Request Map Data
   * @param {any} params : Search conditions
   * @returns {Array}
   */
  async getData(id?: number): Promise<Result<any>> {
    try {
      return await axios.get("test/" + id);
    } catch (e) {
      return Promise.reject({});
    }
  },
  /**
   * update Map Data
   * @param {any} params
   * @returns
   */
  async insert(params: any): Promise<Result<any>> {
    try {
      return await axios.post("test", params);
    } catch (e) {
      return Promise.reject([]);
    }
  },
  /**
   * update Map Data
   * @param {any} params
   * @returns
   */
  async update(params: any) {
    try {
      return await axios.put("test", params);
    } catch (e) {
      return Promise.reject([]);
    }
  },
};

export default Base;
