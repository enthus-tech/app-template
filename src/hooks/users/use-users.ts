import useSWRInfinite from "swr/infinite";
import { getUsers } from "@services/user/user.services";
import { IUserData } from "@/types";
import { useSWRParams } from "@hooks/network/useSWRParams";

interface IUseUsersProps {
  page: number;
  quantity: number;
}

function useUsers({ page, quantity }: IUseUsersProps) {
  const { getParamsFromInifiniteUrl } = useSWRParams();
  const getKey = (pageIndex: number, previousPageData: IUserData[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/users/${pageIndex}/10`;
  };

  const { data, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    (url) => {
      const { page } = getParamsFromInifiniteUrl(url);
      return getUsers(Number(page + 1), quantity);
    },
    {
      revalidateFirstPage: true,
    }
  );

  return {
    users: data,
    size,
    setSize,
    isLoading,
  };
}

export default useUsers;
