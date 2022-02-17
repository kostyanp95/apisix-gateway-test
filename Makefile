apisix-gateway:
	docker-compose up -d

hardware-monitor:
	docker-compose -f docker-compose.hardware-monitoring.yml -p hardware-monitor-apisix up -d
