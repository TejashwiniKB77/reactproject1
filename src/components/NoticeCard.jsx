export default function NoticeCard({ title, date, description }) {
  return (
    <article className="event">
      <h3>{title}</h3>
      <time>{date}</time>
      <p>{description}</p>
    </article>
  );
}
