#! /bin/bash

#activate the firefox

cd ~/Documents/addon-sdk-1.17
source bin/activate
cd ~/Documents/GitHub/a0ce36b2/

#this will create the profile if it does not exist
cfx run --profiledir=./profiles/storage_test