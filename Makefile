.SILENT:
.ONESHELL:

update:
	echo "============ Updating the project ============"
	make npm-install
	make copy-env
	make restart-bot

npm-install:
	echo "===== Installing npm dependencies ====="
	if [ ! -f package.json ]; then
		echo "!!!!!!!! No package.json file found. Skipping npm install. !!!!!!!!!"
		exit 0
	fi

	npm ci
	echo "===== Installing npm dependencies...done ====="

restart-bot:
	echo "======== Restarting Discord bot ========"
	if [ ! -f ecosystem.config.js ]; then
		echo "!!!!!!!!!!!! No ecosystem.config.js file found. Skipping restart. !!!!!!!!!!!!!"
		exit 0
	fi

	pm2 restart ecosystem.config.js --only Discord-Bot --env dev;
	echo "======== Restarting Discord bot...done ========"

copy-env:
	echo "======== Copying .env file to project ========"
	if [ ! -f ~/git/bots/envs/discord ]; then
		echo "!!!!!!!!!!!! No .env file found. Please provide env file !!!!!!!!!!!!!"
		exit 0
	fi

	cp ~/git/bots/envs/discord ./.env
	echo "======== Copying .env file to project...done ========"