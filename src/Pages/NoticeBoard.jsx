import { useEffect, useState } from "react";
import NoticeCard from "../components/NoticeCard";
import "../styles/events.css";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Notice Board | Infomatics College";

    const timer = setTimeout(() => {
      setNotices([
        {
          title: "Mid-Term Examination",
          date: "15 Jan 2026",
          description: "Mid-term exams will begin from 20th January."
        },
        {
          title: "Republic Day Holiday",
          date: "26 Jan 2026",
          description: "College will remain closed."
        },
        {
          title: "Parent Teacher Meeting",
          date: "05 Feb 2026",
          description: "PTM scheduled for all streams."
        }
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container">
      <h2>Academic Notice Board</h2>

      {loading ? (
        <p>Loading notices...</p>
      ) : (
        <section className="events-list">
          {notices.map((n, i) => (
            <NoticeCard
              key={i}
              title={n.title}
              date={n.date}
              description={n.description}
            />
          ))}
        </section>
      )}
    </main>
  );
}
