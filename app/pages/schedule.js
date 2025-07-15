import Navbar from "@/components/Navbar";
import ScheduleTable from "@/components/ScheduleTable";

const schedule = [
  { date: "20/07/2025", match: "Lakers vs Warriors" },
  { date: "21/07/2025", match: "Heat vs Bulls" }
];

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl mb-4">ตารางแข่งขัน</h1>
        <ScheduleTable data={schedule} />
      </div>
    </>
  );
}
