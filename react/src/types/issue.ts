export interface Issue {
  issueId: number;
  issueType: string;
  title: string;
  reportType: string;
  status: number;
  issueDt: string;
  goodsSerialNo: string;
  btSerialNo1: string;
  btSerialNo2: string;
  address: string;
  remark: string;
  writerId: string;
  reporterId: string;
  handlerId: string;
  useFg: number;
  createdAt: string;
  updatedAt: string;
  parentId: number;
  categoryNm: string;
}

export interface IssueDesc {
  issueDescId: number;
  issueId: number;
  descTy: number;
  contents: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}

export interface IssueResult {
  issue: Issue;
  issueDesc: IssueDesc;
}
