import { useCallback } from "react";
import { useUsersUsecase } from "./home.usecase";

export function useUsersController() {
  const { isLoadingUsers, setUsersSize, users, usersSize } = useUsersUsecase({
    page: 1,
    quantity: 10,
  });

  const paginateUsers = useCallback(() => {
    if (isLoadingUsers || usersSize === 0) return;
    setUsersSize(usersSize + 1);
  }, [isLoadingUsers, setUsersSize, usersSize]);

  return {
    isLoadingUsers,
    users,
    paginateUsers,
  };
}
