export default function EventCard({ title, date }) {
  return (
    <article className="event">
      <h3>{title}</h3>
      <time>{date}</time>
    </article>
  );
}
