"use client";
import { Button } from "@/components/ui/button";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@radix-ui/react-select";
import {
  Headphones,
  ImagePlus,
  Loader2Icon,
  LoaderIcon,
  Monitor,
  Smartphone,
  Sparkles,
  Square,
} from "lucide-react";
import Image from "next/image";
import React from "react";
const sampleProduct = [
  "/headphone.png",
  "/juice-can.png",
  "/perfume2.png",
  "/burger.png",
  "/ice-creame.png",
];
type Props = {
  onHandleInputChange: any;
  OnGenerate: any;
  loading: boolean;
};
function FormInput({ onHandleInputChange, loading, OnGenerate }: Props) {
  const [preview, setPreview] = React.useState<string | null>(null);
  const onFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];

    if (file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit");
      return;
    }
    onHandleInputChange("file", file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <div>
        <h2 className="font-semibold">1. Upload product image</h2>
        <div>
          <label
            htmlFor="file-upload"
            className=" cursor-pointer mt-2 border-dashed border-2 rounded-xl min-h-[200px]  flex flex-col p-4 items-center justify-center  "
          >
            {!preview ? (
              <div className="flex flex-col items-center gap-3">
                <ImagePlus className="h-8 w-8 opacity-40" />
                <h2 className="text-xl"> Click here to upload image </h2>
                <p className="opacity-45"> Upload image upto 5MB</p>
              </div>
            ) : (
              <Image
                src={preview}
                alt="preview"
                width={400}
                height={400}
                className="w-full h-full object-contain max-h-[200px] rounded-lg"
              />
            )}
          </label>
          <input
            type="file"
            className="hidden"
            id="file-upload"
            accept="image/*"
            onChange={(event) => onFileSelect(event.target.files)}
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className=" opacity-45 text-center mt-3 mb-2">
          Select Sample product images
        </h2>
        <div className="flex gap-5 items-center flex-wrap">
          {sampleProduct.map((product, index) => (
            <Image
              src={product}
              alt={product}
              width={60}
              height={60}
              key={index}
              className="w-[60px] h-[60px] object-cover rounded-lg cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setPreview(product);
                onHandleInputChange("imageUrl", product);
              }}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="  mt-3 mb-2">2. Enter product description</h2>
        <Textarea
          placeholder="e.g. A pair of wireless headphones with noise-cancellation and long battery life."
          className="min-h-[150px] mt-2"
          rows={4}
          onChange={(event) =>
            onHandleInputChange("description", event.target.value)
          }
        />
      </div>
      <div className="mt-8">
        <h2 className="  mt-3 mb-2">3. Select Iamge size</h2>
        <Select onValueChange={(value) => onHandleInputChange("size", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1024x1024">
              <div className="flex gap-2 items-center">
                <Square className="h-4 w-4" />
                <span>1:1</span>
              </div>
            </SelectItem>
            <SelectItem value="1536x1024">
              <div className="flex gap-2 items-center">
                <Monitor className="h-4 w-4" />
                <span>16:9</span>
              </div>
            </SelectItem>
            <SelectItem value="1024x1536">
              <div className="flex gap-2 items-center">
                <Smartphone className="h-4 w-4" />
                <span>9:16</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="mt-5 w-full" onClick={OnGenerate} disabled={loading}>
        {loading ? (
          <>
            <Loader2Icon className="animate-spin mr-2" /> Generating...
          </>
        ) : (
          <>
            <Sparkles /> Generate
          </>
        )}
      </Button>
      <h2 className="mt-1 text-xs opacity-35 text-center">
        5 Credit to Generate
      </h2>
    </div>
  );
}

export default FormInput;
