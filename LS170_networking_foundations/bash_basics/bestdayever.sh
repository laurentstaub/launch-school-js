#!/bin/bash

name=$1
attribute=$2

user=$(whoami)
date=$(date)
whereami=$(pwd)

echo "Morning $name!"
sleep 1
echo "You're looking good today $name!"
sleep 1
echo "Nice $attribute $name"
sleep 2

echo "You are logged in as $user and you are in the directory $whereami. Also, today is: $date"