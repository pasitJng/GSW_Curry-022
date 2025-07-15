import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";

const newsList = [
  { id: 1, title: "NBA เปิดฤดูกาลใหม่", summary: "เตรียมตัวให้พร้อมกับการแข่งขัน NBA ฤดูกาลใหม่" },
  { id: 2, title: "ทีมชาติไทยคว้าชัย", summary: "ทีมชาติไทยเอาชนะคู่แข่งในศึกซีเกมส์" }
];

export default function News() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl mb-4">ข่าวบาสเกตบอล</h1>
        {newsList.map(news => (
          <NewsCard key={news.id} title={news.title} summary={news.summary} />
        ))}
      </div>
    </>
  );
}
