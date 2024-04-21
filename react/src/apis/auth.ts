import { LoginFormData } from "@type/formType";
import axios from "./config";
import { Auth, Result } from "@type/responseType";

export default {
  /**
   * 로그인
   * @param params
   * @returns
   */
  async login(params: LoginFormData): Promise<Result<Auth>> {
    try {
      return await axios.post("auth", params);
    } catch (e: any) {
      return e.message;
    }
  },
  // TODO CHECK :: REFRESH TOKEN
};
