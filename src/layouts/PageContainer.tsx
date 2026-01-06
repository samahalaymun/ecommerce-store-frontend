import { Outlet } from "react-router-dom";

function PageContainer() {
  return (
    <main className="min-h-screen bg-background px-4 lg:px-10">
      <Outlet />
    </main>
  );
}

export default PageContainer;
