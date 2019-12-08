import * as request from "../request";

export const getEvent = async ({
  keyword,
  ymdList
}: {
  keyword: string;
  ymdList: number[];
}) => {
  const res = await request.post(
    `${process.env.REACT_APP_API_URL}/connpass/event`,
    {
      Keyword: keyword,
      YmdList: ymdList
    }
  );

  return res;
};
