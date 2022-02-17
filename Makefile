apisix-gateway:
	docker-compose -p apisix-gateway up -d

hardware-monitor:
	docker-compose -f docker-compose.hardware-monitoring.yml -p hardware-monitor up -d
