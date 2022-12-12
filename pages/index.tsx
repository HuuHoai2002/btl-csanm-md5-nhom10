import { Button, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Transform from "../components/icons/Transform";
import Loading from "../components/loading/Loading";
import Upload from "../components/upload/Upload";
import useFileReader from "../hooks/useFileReader";
import useHash from "../hooks/useHash";
import Hash from "../utils/hash";

const Home: React.FC = () => {
  const { file, fileContent, handleFileChange, loading } = useFileReader();
  const { hash, onAutoHashChange, onClickHashChange, onValueChange, setHash } =
    useHash();
  const [autoEncode, setAutoEncode] = React.useState<boolean>(false);

  const handleAutoEncodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoEncode(e.target.checked);
    setHash("");
  };

  return (
    <div>
      <Head>
        <title>Bài Tập Lớn Cơ Sở An Ninh Mạng Nhóm 10</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Bài tập lớn môn cơ sở an ninh mạng nhóm 10, nhóm sinh viên: Nghiêm Hữu Hoài, Đặng Ngọc Hoàn, Bùi Phúc Hải, Nguyễn Quang Huy, Vũ Trung Hậu"
        />
        <meta
          name="keywords"
          content="Bài tập lớn môn cơ sở an ninh mạng nhóm 10, nhóm sinh viên: Nghiêm Hữu Hoài, Đặng Ngọc Hoàn, Bùi Phúc Hải, Nguyễn Quang Huy, Vũ Trung Hậu"
        />
        <meta property="og:rich_attachment" content="true" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/MD5.png" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Bài Tập Lớn Cơ Sở An Ninh Mạng Nhóm 10"
        />
        <meta
          property="og:title"
          content="Bài Tập Lớn Cơ Sở An Ninh Mạng Nhóm 10"
        />
        <meta
          property="og:description"
          content="Bài tập lớn môn cơ sở an ninh mạng nhóm 10, nhóm sinh viên: Nghiêm Hữu Hoài, Đặng Ngọc Hoàn, Bùi Phúc Hải, Nguyễn Quang Huy, Vũ Trung Hậu"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full max-w-[1140px] mx-auto">
        <div className="p-10">
          <div className="w-full flex flex-col gap-y-5">
            <h1 className="font-bold text-xl text-green-500">
              Mã Hóa MD5: Bài Tập Lớn Nhóm 10
            </h1>
            <Upload
              file={file as File}
              title="Chọn tệp muốn mã hóa"
              onChange={handleFileChange}
              accept=".txt"
            />
            {!loading && fileContent && (
              <TextField
                multiline
                fullWidth
                value={Hash(fileContent)}
                contentEditable={false}
                maxRows={8}
                label="File sau khi mã hóa"
                focused={fileContent ? true : false}
              />
            )}
            {loading && (
              <div className="flex items-center gap-x-5">
                <h3 className="font-medium">Đang tiến hành mã hóa</h3>
                <Loading title="Đang tiến hành mã hóa" />
              </div>
            )}
            <div className="flex flex-col gap-y-5">
              <span>Hoặc nhập vào đoạn văn bản mà bạn muốn mã hóa</span>
              <div className="flex items-center gap-x-5">
                <span className="font-medium text-base">Tự động mã hóa</span>
                <Switch onChange={handleAutoEncodeChange}></Switch>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 items-center justify-between gap-x-5">
                <TextField
                  label="Đoạn văn bản muốn mã hóa"
                  multiline
                  fullWidth
                  onChange={autoEncode ? onAutoHashChange : onValueChange}
                />
                <div className="w-8 text-green-400">
                  <Transform />
                </div>
                <div className="relative w-full">
                  <TextField
                    multiline
                    fullWidth
                    value={hash}
                    contentEditable={false}
                    maxRows={8}
                    label="Đoạn văn bản sau khi mã hóa"
                    focused={hash ? true : false}
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-5 mt-2">
                {!autoEncode && (
                  <Button variant="outlined" onClick={onClickHashChange}>
                    Mã hóa
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
