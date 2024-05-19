import axios from "./config";
import { Auth, Result } from "@type/responseType";
import { ApiResponse, LoginParams } from "@type/authTypes";

export default {
  /**
   * 로그인
   * @param params
   * @returns
   */
  async login(params: LoginParams): Promise<Result<ApiResponse>> {
    try {
      return await axios.post("auth", params);
    } catch (e: any) {
      return e.message;
    }
  },
  // TODO CHECK :: REFRESH TOKEN
};
