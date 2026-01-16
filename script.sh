pnpm run docs:build
cd ./docs/.vitepress/dist
tar -czf web.tgz *
scp -P 59521 web.tgz fungus@s.2ob.top:~
ssh -p 59521 fungus@s.2ob.top "rm -rf /data/web/*; tar -xzf web.tgz -C /data/web"
