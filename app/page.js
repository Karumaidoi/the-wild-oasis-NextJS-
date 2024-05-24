import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <h3>The wild oasis, welcome to paradise.</h3>

      <Link href="/cabins">Explore Luxury Cabins</Link>
    </div>
  );
}
