resource "aws_s3_bucket" "connpass-map-front" {
  bucket = "connpass-map-front"
  acl    = "private"
  region = "ap-northeast-1"
}
