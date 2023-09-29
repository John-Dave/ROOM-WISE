## FOR RUM-ACCOUNTS API ##
container_name: "rumacc-api"
docker build . -t swaleh1513/api.rumaccounts:v2
docker-compose up -d
docker exec -it rumacc sh

docker-compose down

## FOR RUM-ACCOUNTS UI ##
container_name: "rumacc-ui"
docker build . -t swaleh1513/ui.rumaccounts:v2
docker-compose up -d
docker exec -it rumacc-ui sh

docker-compose down




