docker build -t products --file  Dockerfile.products ../.
docker run -d -p 5003:4003 products
export process=docker ps -q --filter ancestor=products
docker stop $process
echo $process
