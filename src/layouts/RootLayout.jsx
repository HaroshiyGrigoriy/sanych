import { Outlet } from "react-router-dom";
import SanychHeader from "../components/SanychHeader"; // твой хедер без навигации

export default function RootLayout() {
  return (
    <>
      <SanychHeader />

        <main className="sn-main">
        <div className="sn-shell">
          <div className="sn-shell__inner">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
