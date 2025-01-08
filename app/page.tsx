// "use client";
import PostList from "@/components/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-yellow-500">
      <PostList />
      {/* <Image
        src="/images/regions/ba-dinh-district.jpeg"
        alt="ba-dinh-district"
        width={1000}
        height={1000}
        // className="h-10 w-10"
      /> */}
    </div>
  );
}
