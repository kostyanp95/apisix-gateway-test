# APISix Gateway with Dashboard, Prometheus, Grafana and hardware monitoring using node_exporter and cAdvisor.

## How to run test?
* `docker-compose up -d` - just run only [APISix Gateway](https://apisix.apache.org/) with [APISix Dashboard](https://apisix.apache.org/docs/dashboard/USER_GUIDE).

## If you want to enable server or local machine performance monitors, try:

* `make hardware-monitor`

or

* `docker-compose -f docker-compose.hardware-monitoring.yml -p hardware-monitor-apisix up -d`

This will launch the [node_exporter](https://github.com/prometheus/node_exporter) and [cAdvisor](https://github.com/google/cadvisor) services necessary to monitor the status of the server or local machine.
