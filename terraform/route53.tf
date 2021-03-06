locals {
  # deductions_private_alb_dns = data.aws_ssm_parameter.deductions_private_alb_dns.value
  deductions_private_internal_alb_dns = data.aws_ssm_parameter.deductions_private_alb_internal_dns.value
  # zone_id = data.aws_ssm_parameter.root_zone_id.value
  private_zone_id = data.aws_ssm_parameter.private_zone_id.value
}

# resource "aws_route53_record" "r53-record" {
#   zone_id = local.zone_id
#   name    = "${var.environment}.${var.component_name}"
#   type    = "CNAME"
#   ttl     = "300"
#   records = [local.deductions_private_alb_dns]
# }

resource "aws_route53_record" "gp-to-repo-r53-private-record" {
  zone_id = data.aws_ssm_parameter.private_zone_id.value
  name    = "${var.environment}.${var.dns_name}"
  type    = "CNAME"
  ttl     = "300"
  records = [local.deductions_private_internal_alb_dns]
}
