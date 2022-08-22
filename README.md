# node_js_docker - build image

docker build -t appnodejs:1.0 .

docker run -d --name="appnodejs" -p 3000:3000 appnodejs:1.0

docker ps

open browser localhost:3000


## node js scaling 
docker compose up --scale app=2
