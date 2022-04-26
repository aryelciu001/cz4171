pkill -f node
yes | cp -rf ./nginx.conf /etc/nginx
rm -r /var/www/html/*
cd client 
npm run build
(npm run deploy&)
sudo systemctl restart nginx
cd ..
cd server 
(npm run start&)