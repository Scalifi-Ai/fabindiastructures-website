#!/bin/bash

SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
alias navigate_to_base_dir="cd '${SCRIPT_DIR}' && echo '--> Inside Base folder'"

navigate_to_base_dir

docker compose down -v --remove-orphans

sudo chown -R $USER:$USER db_data
sudo chmod -R 700 db_data