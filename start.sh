pkill -f node
yes | cp -rf ./nginx.conf /etc/nginx
rm -r /var/www/html/*
cd client 
npm run build
cp -a ./build/. /var/www/html/
sudo systemctl restart nginx
cd ..
cd server 
npm start