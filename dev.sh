#!/bin/bash

SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
alias navigate_to_base_dir="cd '${SCRIPT_DIR}' && echo '--> Inside Base folder'"
alias navigate_to_next_app="cd ./next-app && echo '--> Inside Next App folder'"
alias navigate_to_db_data="cd ./db_data && echo '--> Inside DB data folder'"

navigate_to_base_dir

sudo chown -R $USER:$USER db_data
sudo chmod -R 700 db_data

mkdir -p db_data/pg_tblspc
mkdir -p db_data/pg_snapshots
mkdir -p db_data/pg_logical/mappings
mkdir -p db_data/pg_logical/snapshots
mkdir -p db_data/pg_notify
mkdir -p db_data/pg_replslot
mkdir -p db_data/pg_twophase
mkdir -p db_data/pg_commit_ts

navigate_to_db_data

navigate_to_base_dir

docker compose down -v --remove-orphans
gnome-terminal --tab -- bash -c 'export $(grep -v '^#' .env.local | xargs) && docker compose up --build'

navigate_to_next_app

if [ -f package-lock.json ] 
then
rm package-lock.json
echo "--> Deleted previous package-lock.json file"
else
echo "--> Previous package-lock.json file already deleted"
fi

echo "--> Installing NPM dependencies"
npm install --legacy-peer-deps

echo "--> Starting Next JS server"
gnome-terminal --tab -- bash -c 'npm run dev'