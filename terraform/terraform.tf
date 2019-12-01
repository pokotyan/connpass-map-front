terraform {
  required_version = "0.12.6"

  backend "remote" {
    organization = "connpass-map-front"

    workspaces {
      name = "connpass-map-front-workspace"
    }
  }
}
