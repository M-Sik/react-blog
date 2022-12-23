import React, { ChangeEvent, useState } from 'react';

function CameraIcon() {
  const [imgs, setImgs] = useState('');

  const onClick = () => {
    document.getElementById('file-input')?.click();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const files = target.files as FileList;
    console.log('??? => ', URL.createObjectURL(files[0]));
    setImgs(URL.createObjectURL(files[0]));
    // const target = e.target;
    // const files = target.files as FileList;
    // const fileURLs = [] as ArrayBuffer[];
    // const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     console.log('파일 업로드 결과 => ', reader.result);

    //     // fileURLs[i] = reader.result as ArrayBuffer;
    //     setImgs(files.con);
    //     console.log('zzz => ', files);
    //   };
    //   reader.readAsDataURL(file);
    // }
    // files.forEach((file: any) => {
    //   formData.append('files', file);
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     // this.imgPreviewList.push(e.target?.result);
    //     console.log(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // });
  };
  return (
    <div>
      <svg
        onClick={onClick}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 21.3333C18.2091 21.3333 20 19.5424 20 17.3333C20 15.1241 18.2091 13.3333 16 13.3333C13.7909 13.3333 12 15.1241 12 17.3333C12 19.5424 13.7909 21.3333 16 21.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 22.3999V12.2666C4 10.7731 4 10.0264 4.29065 9.45594C4.54631 8.95418 4.95426 8.54623 5.45603 8.29057C6.02646 7.99992 6.77319 7.99992 8.26667 7.99992H9.67286C9.83677 7.99992 9.91873 7.99992 9.99435 7.99126C10.3889 7.94607 10.7427 7.72737 10.9596 7.39471C11.0012 7.33095 11.0378 7.25762 11.1111 7.11103C11.2577 6.81781 11.331 6.6712 11.4142 6.54368C11.8479 5.87834 12.5556 5.44095 13.3446 5.35057C13.4959 5.33325 13.6598 5.33325 13.9876 5.33325H18.0124C18.3402 5.33325 18.5041 5.33325 18.6554 5.35057C19.4444 5.44095 20.1521 5.87834 20.5858 6.54368C20.669 6.67119 20.7423 6.81785 20.8889 7.11103C20.9622 7.25764 20.9988 7.33095 21.0404 7.39471C21.2573 7.72737 21.6111 7.94607 22.0057 7.99126C22.0813 7.99992 22.1632 7.99992 22.3271 7.99992H23.7333C25.2268 7.99992 25.9735 7.99992 26.544 8.29057C27.0457 8.54623 27.4537 8.95418 27.7094 9.45594C28 10.0264 28 10.7731 28 12.2666V22.3999C28 23.8934 28 24.6401 27.7094 25.2106C27.4537 25.7123 27.0457 26.1203 26.544 26.3759C25.9735 26.6666 25.2268 26.6666 23.7333 26.6666H8.26667C6.77319 26.6666 6.02646 26.6666 5.45603 26.3759C4.95426 26.1203 4.54631 25.7123 4.29065 25.2106C4 24.6401 4 23.8934 4 22.3999Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        onChange={onChange}
        multiple
        id="file-input"
        className="d-none"
        type="file"
        accept=".png,.jpeg,.jpg"
      />
      <div>{imgs && <img alt="sample" src={imgs} />}</div>
    </div>
  );
}

export default CameraIcon;
