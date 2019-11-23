import * as request from "../request";

export const getEvent = async ({
  keyword,
  ymdList
}: {
  keyword: string;
  ymdList: number[];
}) => {
  const res = await request.post("http://localhost:7777/connpass/event", {
    Keyword: keyword,
    YmdList: ymdList
  });

  return res;
};
