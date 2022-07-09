.SILENT:
.ONESHELL:

update:
	echo "============ Updating the project ============"
	make npm-install
	make deploy-commands.js
	make copy-env
	make restart-bot

deploy-commands:
	echo "============ Deploying the discord commands ============"
	if [ ! -f "deploy-commands.js" ]; then
		echo "ERROR: deploy-commands.js not found"
		exit 1
	fi

	node deploy-commands.js

npm-install:
	echo "===== Installing npm dependencies ====="
	if [ ! -f package-lock.json ]; then
		echo "Error! No package-lock.json file found. Skipping npm install."
		exit 0
	fi

	npm ci
	echo "===== Installing npm dependencies...done ====="

restart-bot:
	echo "======== Restarting Discord bot ========"
	if [ ! -f ecosystem.config.js ]; then
		echo "Error: No ecosystem.config.js file found. Skipping restart"
		exit 0
	fi

	pm2 restart ecosystem.config.js --only Discord-Bot --env dev;
	echo "======== Restarting Discord bot...done ========"

copy-env:
	echo "======== Copying .env file to project ========"
	if [ ! -f ~/git/bots/envs/discord ]; then
		echo "Error: No .env file found. Please provide env file"
		exit 0
	fi

	cp ~/git/bots/envs/discord ./.env
	echo "======== Copying .env file to project...done ========"