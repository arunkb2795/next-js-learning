import React from "react";
import { useRouter } from "next/router";
export default function ReviewDetails() {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  return <div>ReviewDetails{reviewId}</div>;
}
