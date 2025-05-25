#!/bin/bash
echo "🚀 Starting Truth API & AI Router..."
cd scripts
nohup node truthApi.js &
cd ../backend
nohup uvicorn adaptive_learning:router --host 0.0.0.0 --port 8001 &
cd ..
