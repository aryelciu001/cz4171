pkill -f node
yes | cp -rf ./nginx.conf /etc/nginx
mkdir /var/www
yes | cp ./client/build /var/www
sudo systemctl restart nginx
cd server 
npm start