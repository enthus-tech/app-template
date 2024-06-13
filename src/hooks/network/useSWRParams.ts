export function useSWRParams() {
  const getParamsFromInifiniteUrl = (url: string) => {
    const params = url.split("/");
    return {
      page: Number(params[2]),
      limit: Number(params[3]),
    };
  };

  return {
    getParamsFromInifiniteUrl,
  };
}
