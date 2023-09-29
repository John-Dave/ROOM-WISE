#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker exec rumacc-db sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > "$CURRENT_DIR/dumpData/webapidb.sql"

docker exec rumacc-db sh -c 'exec mysqldump  --user=root --password="$MYSQL_ROOT_PASSWORD" --host=rumacc-db --protocol=tcp --port=3306 --default-character-set=utf8 --single-transaction=TRUE --routines --events "webapidb"' > "$CURRENT_DIR/dumpData/webapidbS.sql"

docker-compose down
