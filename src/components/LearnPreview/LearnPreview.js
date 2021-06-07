import React from "react";
import { Link } from "react-router-dom";

export default function LearnPreview() {
  return (
    <div className="row mt-5 justify-content-center">
      <div className="row w-75 mb-4">
        <div className="mb-2 fs-3 fw-bold border-bottom border-primary border-3">
          KANJIS
        </div>
        <div className="d-flex flex-wrap">
          <Link
            to="/kanji/一"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            一
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            二
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            三
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            四
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            五
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            六
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            七
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            八
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            九
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            十
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            識
          </Link>
          <Link
            to="/"
            className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
          >
            鼻
          </Link>
        </div>
      </div>
      <div className="row w-75">
        <div className="fs-3 fw-bold border-bottom border-primary border-3">
          VOCABULARIO
        </div>
      </div>
    </div>
  );
}
