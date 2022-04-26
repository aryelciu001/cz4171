# kill running node, if any
pkill -f node

# copy nginx config
yes | cp -rf ./nginx.conf /etc/nginx

# prepare client
cd client
npm install
npm run build
(npm run deploy&)

# restart nginx, if running
sudo systemctl restart nginx

# prepare server
cd ..
cd server 
npm install
(npm run start&)