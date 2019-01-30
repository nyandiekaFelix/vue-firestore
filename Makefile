DOCKER_COMPOSE := docker/docker-compose.yml
DOCKER_COMPOSE_BUILD := docker/docker-compose.builder.yml
COLOR = \033[1;96m
NO_COLOR = \033[0m

# Start up dev environment
start:
	@ echo "\n${COLOR}_____ Building Docker Image ______${NO_COLOR}\n"
	@ docker-compose -f $(DOCKER_COMPOSE) build dev
	@ echo "\n${COLOR}_____ Starting Dev Server _____${NO_COLOR}\n"
	@ docker-compose -f $(DOCKER_COMPOSE) up

clean_up:
	@echo "\n${COLOR}_____ Cleaning Up Containers ______${NO_COLOR}\n"
	@ docker system prune