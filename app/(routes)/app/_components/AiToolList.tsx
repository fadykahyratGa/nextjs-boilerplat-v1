import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ApiToolsList = [
  {
    name: "AI Products Images",
    desc: "Generate high-quality, professional product images instantly with AI.",
    bannerImage: "/product-image.jpg",
    path: "/creative-ai-tools/product-images",
  },
  {
    name: "AI Products Video",
    desc: "Create engaging product showcase videos using AI.",
    bannerImage: "/product-video.jpg",
    path: "/app/creative-tools/ai-products-with-avatar",
  },
  {
    name: "AI Products With Avatar",
    desc: "Bring your products to life with AI avatars.",
    bannerImage: "/product-avatar.jpg",
    path: "/app/creative-tools/ai-products-with-avatar",
  },
];
function AiToolList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {ApiToolsList.map((tool, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-7 bg-zinc-800 rounded-2xl"
          >
            <div>
              <h2 className="text-xl font-bold">{tool.name}</h2>
              <p className="opacity-60 mt-2">{tool.desc}</p>
              <Link href={tool.path}>
                <Button className="mt-4"> Create now</Button>
              </Link>
            </div>
            <Image
              src={tool.bannerImage}
              alt={tool.name}
              width={300}
              height={300}
              className="w-[200px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default AiToolList;
