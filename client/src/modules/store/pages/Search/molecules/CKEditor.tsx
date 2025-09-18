import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";

// استايلات Froala
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

export default function ProductEditor() {
  const [description, setDescription] = useState("");
  const [localImages, setLocalImages] = useState<File[]>([]); // نخزن الصور لحد ما يتحفظ

  // Config عشان نتحكم في الصور (blob مؤقت)
  const config = {
    imageUpload: false, // نوقف الرفع المباشر
    events: {
      "image.beforeUpload": function (images: File[]) {
        if (images.length) {
          const file = images[0];

          // نخزن الصورة في state عشان نرفعها بعدين
          setLocalImages((prev) => [...prev, file]);

          // نعرض الصورة كـ blob مؤقت
          const blobUrl = URL.createObjectURL(file);
          this.image.insert(blobUrl, null, null, this.image.get());

          // نوقف Froala من الرفع العادي
          return false;
        }
      },
    },
  };

  // Save product
  const handleSave = async () => {
    let finalDescription = description;

    // نرفع الصور اللي اتخزنت
    for (const file of localImages) {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: data,
      });

      const { url } = await res.json();

      // استبدل blob بالرابط النهائي
      finalDescription = finalDescription.replace(
        new RegExp(`src=["']blob:[^"']+["']`, "g"),
        `src="${url}"`
      );
    }

    // ابعت الوصف النهائي للسيرفر
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: finalDescription }),
    });

    alert("تم حفظ المنتج بنجاح!");
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Product Description</h2>

      {/* الـ Editor */}
      <FroalaEditor
        tag="textarea"
        config={config}
        model={description}
        onModelChange={(content: string) => setDescription(content)}
      />

      {/* Preview */}
      <div>
        <h3 className="text-lg font-semibold">Preview:</h3>
        <div
          className="border p-3 rounded bg-gray-50 fr-view"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* زرار حفظ */}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save Product
      </button>
    </div>
  );
}
