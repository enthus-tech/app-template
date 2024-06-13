import useUsers from "@/src/hooks/use-users";

interface IUserUsecase {
  page: number;
  quantity: number;
}

export function useUsersUsecase({ page, quantity }: IUserUsecase) {
  const {
    isLoading: isLoadingUsers,
    setSize: setUsersSize,
    size: usersSize,
    users,
  } = useUsers({ page, quantity });

  return {
    isLoadingUsers,
    setUsersSize,
    usersSize,
    users,
  };
}
