import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

export default function Dropzone({ setFiles }) {
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);
    console.log(acceptedFiles);
    acceptedFiles.map(file => {
      Object.assign(file, {
        preview: URL.createObjectURL(file) // copy the object file and add a property preview to be abel to preview it
      });
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  const thumbs = acceptedFiles.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));
  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{thumbs}</ul>
      </aside>
    </section>
  );
}
