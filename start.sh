yes | cp -rf ./nginx.conf /etc/nginx
mkdir /var/www
cp ./client/build /var/www
sudo systemctl restart nginx
cd server 
npm start