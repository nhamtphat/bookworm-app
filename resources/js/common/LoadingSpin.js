import {Spin} from "antd";
import React from "react";

export default function LoadingSpin(props) {
  return (
    <div className="mx-auto padding-y text-center">
      <Spin size="large" />
      <p className="d-block text-secondary">Loading...</p>
    </div>
  )
}