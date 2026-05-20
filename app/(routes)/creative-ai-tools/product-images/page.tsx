"use client";
import React from "react";
import FormInput from "../_components/FormInput";
import PerviewResult from "../_components/PerviewResult";
import axios from "axios";

type formData = {
  file?: File | undefined;
  description?: string;
  size?: string;
  imageUrl?: string;
};
function ProductImages() {
  const [formData, setFormData] = React.useState<formData>({});
  const [loading, setLoading] = React.useState(false);
  const onHandleInputChange = (field: string, value: string | File) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log("Field:", field, "Value:", value);
  };
  const OnGenerate = async () => {
    console.log("Form Data:", formData);
    if (!formData?.file && formData?.imageUrl) {
      alert("Please upload a product image before generating.");
      return;
    }
    if (!formData.description || !formData.size) {
      alert(
        "Please enter a product description and select an image size before generating.",
      );
      return;
    }
    setLoading(true);
    const formData_ = new FormData();
    formData_.append("file", formData?.file ?? new Blob());
    formData_.append("description", formData?.description ?? "");
    formData_?.append("size", formData?.size ?? "1028x1028");
    const response = await fetch("/api/generate-product-image", {
      method: "POST",
      body: formData_,
    }).then((res) => res.json());

    console.log("response:", response);
    setLoading(false);
  };
  return (
    <div>
      <h2 className="font-bold text-2xl mb-3">AI Product Image Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <FormInput
            onHandleInputChange={(field: string, value: string | File) =>
              onHandleInputChange(field, value)
            }
            OnGenerate={OnGenerate}
            loading={loading}
          />
        </div>
        <div className="md: grid-cols-2">
          <PerviewResult />
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
