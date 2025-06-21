import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100%] flex gap-[20px]">
      <Link href={"/Links"}>Links</Link>
      <Link href={"/Profile-Details"}>Profile-Details</Link>
    </div>
  );
}
