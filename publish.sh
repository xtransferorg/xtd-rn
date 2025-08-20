#!/bin/bash
source /etc/profile
#运维透传变量是否为生产
is_prod=$1
export APP_NAME=$2

#node
nvm install v18.20.4 && nvm use v18.20.4

#默认是yarn安装
yarn
if [ "$is_prod" == "false" ]; then
    yarn publish:beta
else
    yarn publish:prod
fi

