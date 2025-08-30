

dev:
	docker run -it \
		-v $(REPO_PATH)/floki-web:/app \
		-w /app \
		-p 3000:3000 \
		node bash -c "npm run dev"

build: 
	docker run -it \
		-v $(REPO_PATH)/floki-web:/app \
		-w /app \
		-p 3000:3000 \
		node bash -c "npm run build && npm run inject"