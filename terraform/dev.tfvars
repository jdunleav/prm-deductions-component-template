environment          = "dev"
component_name       = "generic-component"
dns_name             = "generic-component"

task_cpu             = 256
task_memory          = 512
port                 = 3000

service_desired_count   = "1"

alb_deregistration_delay = 15