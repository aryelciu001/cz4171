pkill -f node
yes | cp -rf ./nginx.conf /etc/nginx
rm -r /var/www/html/*
cp -a ./client/build/. /var/www/html/
sudo systemctl restart nginx
cd server 
npm start