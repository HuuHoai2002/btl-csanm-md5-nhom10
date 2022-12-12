import React from "react";

interface Props {
  file: File;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept: string;
  title: string;
}

const Upload: React.FC<Props> = React.memo(
  ({ onChange, className, file, accept, title }) => {
    return (
      <label
        htmlFor="upload"
        className={`relative w-full lg:h-[220px] h-48 bg-white rounded-2xl cursor-pointer border border-dashed border-green-500 hover:bg-green-100 transition-all ${file && "bg-green-100"
          } ${className}`}
      >
        <input
          type="file"
          name="upload"
          id="upload"
          className="hidden"
          onChange={onChange}
          accept={accept}
        />
        <div className="w-full h-full flex items-center justify-center">
          <div className="mx-auto">
            <div className="flex items-center justify-center flex-col gap-y-4">
              <img
                src="/upload.png"
                className="w-20 h-20 object-cover"
                alt=""
              />
              {!file ? (
                <span className="text-sm text-zinc-700">{title}</span>
              ) : (
                <span className="text-sm text-zinc-700">{file.name}</span>
              )}
            </div>
          </div>
        </div>
      </label>
    );
  }
);

export default Upload;
