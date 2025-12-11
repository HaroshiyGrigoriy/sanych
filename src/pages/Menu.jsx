import { Link } from "react-router-dom";

export default function MenuPage() {
  return (
    <main className="sn-container">
      Здесь собрано меню
      <div>
        <Link to="/menu/drinks">
          <button>Перейти в напитки</button>
        </Link>
      </div>
    </main>
  );
}