"use client";
import { useState, useEffect } from "react";
import './DynamicForm.css';
import axios from "axios";
import Image from "next/image";
import React from "react";

interface DynamicFormProps<T extends Record<string, unknown>> {
  initialData: T;
  onChange?: (updatedData: T) => void;
  onSubmit?: (finalData: T) => void;
}

export default function RecurFormGallery<T extends Record<string, unknown>>({
  initialData,
  onChange,
  onSubmit,
}: DynamicFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  useEffect(() => {
    onChange?.(formData);
  }, [formData, onChange]);

  const handleChange = (path: string[], value: unknown) => {
    setFormData(prev => {
      const updated = structuredClone(prev);
      let current: Record<string, unknown> = updated as Record<string, unknown>;

      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) current[path[i]] = {};
        current = current[path[i]] as Record<string, unknown>;
      }

      const lastKey = path[path.length - 1];
      if (Array.isArray(current) && !isNaN(Number(lastKey))) {
        current[Number(lastKey)] = value;
      } else {
        current[lastKey] = value;
      }

      return updated;
    });
  };

  const addSlot = (category: string) => {
    setFormData(prev => {
      const updated = structuredClone(prev) as Record<string, unknown>;
      if (!Array.isArray(updated[category])) updated[category] = [];
      (updated[category] as unknown[]).push({
        shootTitle: "",
        shootDetails: "",
        shootImages: [""],
      });
      return updated as T;
    });
  };

  const addImage = (path: string[], value: string) => {
    setFormData(prev => {
      const updated = structuredClone(prev);
       let current: Record<string, unknown> = updated as Record<string, unknown>;

      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) current[path[i]] = {};
        current = current[path[i]] as Record<string, unknown>;
      }

      if (Array.isArray(current)) {
        current.push(value);
      }

      return updated;
    });
  };

  const uploadImage = async (file: File, category: string): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    formData.append("file_name", file.name.split(".")[0]);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/upload/upload-picture`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.url;
    } catch (error) {
      console.error("Error While Uploading: ", error);
      return null;
    }
  };

  const renderFields = (data: unknown, path: string[] = []): React.JSX.Element[] => {
  if (typeof data !== "object" || data === null) return [];

  return (
    Object.entries(data as Record<string, unknown>)
      .map(([key, value]) => {
        const currentPath = [...path, key];
        const uniqueKey = currentPath.join("-");

        if (Array.isArray(value)) {
          return (
            <div key={uniqueKey}>
              <h2>{key.toUpperCase()}</h2>
              {value.map((item, index) => {
                const itemPath = [...currentPath, index.toString()];
                const itemKey = itemPath.join("-");

                if (typeof item === "object" && item !== null) {
                  return (
                    <div key={itemKey}>
                      {renderFields(item, itemPath)}
                      <button onClick={() => addSlot(key)}>Add Slot</button>
                    </div>
                  );
                }

                if (typeof item === "string" && itemKey.toLowerCase().includes("image")) {
                  return (
                    <div key={itemKey}>
                      {item && (
                        <Image
                          src={item}
                          alt="uploaded image"
                          width={200}
                          height={200}
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                        />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const uploadedUrl = await uploadImage(file, key);
                            if (uploadedUrl) {
                              handleChange(itemPath, uploadedUrl);
                            }
                          }
                        }}
                      />
                      <button onClick={() => addImage(itemPath, "")}>Add Image</button>
                    </div>
                  );
                }

                if (typeof item === "string" || typeof item === "number") {
                  return (
                    <div key={itemKey}>
                      <label>{itemPath.join("/")}</label>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleChange(itemPath, e.target.value)}
                      />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          );
        }

        if (typeof value === "string" || typeof value === "number") {
          return (
            <div key={uniqueKey} className="dynamic-form-field">
              <label className="dynamic-form-label">{currentPath.join("/")}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(currentPath, e.target.value)}
                className="dynamic-form-input"
              />
            </div>
          );
        }

        if (value instanceof Date) {
          return (
            <div key={uniqueKey} style={{ paddingLeft: "20px", borderLeft: "2px solid #ddd", margin: "10px 0" }}>
              <label>{currentPath.join("/")}</label>
              <input
                type="datetime-local"
                value={new Date(value).toISOString().slice(0, 16)}
                onChange={(e) => handleChange(currentPath, new Date(e.target.value))}
              />
            </div>
          );
        }

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          return (
            <div key={uniqueKey} style={{ paddingLeft: "20px", borderLeft: "2px solid #ddd", margin: "10px 0" }}>
              <strong>{key}</strong>
              {renderFields(value, currentPath)}
            </div>
          );
        }

        return null;
      })
      .filter((el): el is React.JSX.Element => el !== null) // ✅ this line fixes the error
  );
};


  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Final Form Data:", formData);
      alert("Check console for final form data.");
    }
  };

  return (
    <div className="dynamic-form-component">
      <h2>Dynamic Recursive Portfolio Form</h2>
      {renderFields(formData)}
      <button className="dynamic-form-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
