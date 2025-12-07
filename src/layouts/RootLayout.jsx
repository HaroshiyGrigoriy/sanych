import { Outlet } from "react-router-dom";
import SanychHeader from "../components/SanychHeader"; // твой хедер без навигации

export default function RootLayout() {
  return (
    <>
      <SanychHeader />

      {/* Общая обёртка для контента страниц */}
      <main className="sn-main">
        <Outlet />
      </main>
    </>
  );
}
