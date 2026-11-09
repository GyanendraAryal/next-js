import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-betweeen">
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
      <h1>Welcome to home.</h1>
    </>
  );
}
