# node_js_docker
docker build -t appnodejs:1.0 .
docker run -d –name appnodejs -p 3000:3000 appnodejs:1.0
docker ps
open browser localhost:3000
