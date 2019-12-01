data "aws_iam_policy_document" "cf_to_s3_policy" {
  statement {
    actions = ["s3:GetObject"]

    resources = [
      "${aws_s3_bucket.connpass-map-front.arn}",
      "${aws_s3_bucket.connpass-map-front.arn}/*",
    ]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket_policy" "cf-to-s3" {
  bucket = "${aws_s3_bucket.connpass-map-front.id}"
  policy = "${data.aws_iam_policy_document.cf_to_s3_policy.json}"
}
