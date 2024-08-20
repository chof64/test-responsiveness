import React, { Fragment } from "react";

export default function SegmentPublic({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>SEGMENT PUBLIC PAGE</div>
      {children}
    </>
  );
}
