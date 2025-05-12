import React, { useState } from 'react';

// component
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Asterisk from '@/components/asterisk';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function addproduct() {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files).slice(0, 3); // batasi hanya 3
    setImages(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
    console.log('preview photo==>', files);

  };
  
  return (
    <div className="p-4">
      <p className="text-4xl font-bold mb-10">Add Your Product</p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="product's name">
            Product's Name <Asterisk />
          </Label>
          <Input className="w-[900px]" id="product's name" placeholder="Product's Name" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="Category">
            Category <Asterisk />
          </Label>
          <Input className="w-[900px]" id="Category" placeholder="Category" />
        </div>
        <div className="flex flex-row">
        <Label className="font-bold" htmlFor="product's name">
            Photo <Asterisk />
          </Label>
          <div className='ml-[165px]'>
          <input type="file" accept="image/png, image/jpeg" multiple onChange={handleChange} />
          <div className="flex gap-2 mt-4">
            {previews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 object-cover border"
              />
            ))}
          </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <Label className="font-bold" htmlFor="Description">
            Description <Asterisk />
          </Label>
          <Textarea className="w-[900px] h-[200px]" id="Description" placeholder="Description" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <Label className="font-bold" htmlFor="variant">
              Product's Variant
            </Label>
            <p className="text-sm">
              Add up to 2 variant types to let customers choose the product that suits them best.
            </p>
          </div>
          <Button className="w-[200px]"> + Add Variant</Button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="Price">
            Price <Asterisk />
          </Label>
          <Input className="w-[900px]" id="Price" placeholder="IDR" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="Quantity">
            Quantity <Asterisk />
          </Label>
          <Input className="w-[900px]" id="Quantity" placeholder="Quantity" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="SKU">
            SKU <Asterisk />
          </Label>
          <Input className="w-[900px]" id="SKU" placeholder="SKU" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="Weight">
            Weight <Asterisk />
          </Label>
          <Input className="w-[900px]" id="Weight" placeholder="grams" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label className="font-bold" htmlFor="Discount">
            Discount
          </Label>
          <Input className="w-[900px]" id="Discount" placeholder="IDR" />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button className="w-[200px] mt-10">Add Product</Button>
      </div>
    </div>
  );
}
