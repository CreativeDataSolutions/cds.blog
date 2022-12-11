FROM ubuntu:20.04

RUN apt update -y && \
    apt upgrade -y && \
    apt-get install -y curl software-properties-common
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g gatsby-cli

#seems peach theme needs this e.g. python for node-sass
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt update
RUN apt install  -y python2 
RUN npm config set python /usr/bin/python2.7

RUN apt-get install -y build-essential
RUN apt-get -y install make

WORKDIR /app
