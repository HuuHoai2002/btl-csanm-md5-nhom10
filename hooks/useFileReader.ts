import { useCallback, useState } from "react";

export default function useFileReader() {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [fileContent, setFileContent] = useState<string>();

  console.log('render useFileReader')

  const readFile = useCallback((file: File) => {
    try {
      if (!file) throw new Error("No file selected");
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onloadstart = () => setLoading(true);
      reader.onloadend = () => setLoading(false);
      reader.onload = () => setFileContent(reader.result as any);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const file = e.target.files?.[0];
        if (file) {
          setFile(file);
          readFile(file);
        }
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  return { fileContent, handleFileChange, loading, file };
}
