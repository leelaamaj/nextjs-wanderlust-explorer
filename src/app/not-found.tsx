import Link from "next/link";
export default function NotFound() {
  return (
    <div className="empty-state">
      <h1>That story is still unwritten.</h1>
      <p>
        We couldn’t find this experience. There are plenty more to discover.
      </p>
      <Link className="button" href="/experiences">
        Explore experiences
      </Link>
    </div>
  );
}
