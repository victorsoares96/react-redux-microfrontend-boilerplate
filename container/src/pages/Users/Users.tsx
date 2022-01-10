import React, { Suspense } from "react";

const UsersGrid = React.lazy(
  () => import("users/components/UsersGrid/UsersGrid")
);

function Users() {
  return (
    <Suspense fallback="Loading...">
      <UsersGrid />
    </Suspense>
  );
}

export default Users;
