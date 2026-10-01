#!/bin/bash
echo "🚀 Starting Truth API & AI Router..."
mkdir -p logs
echo "  → Starting Main API on :3000..."
nohup node truthApi.js > logs/main-api.log 2>&1 &
echo "  → Starting Code-Gen API on :3005..."
cd scripts
nohup node truthApi.js > ../logs/code-gen.log 2>&1 &
echo "  → Starting AI Service on :8001..."
cd ../backend
nohup uvicorn adaptive_learning:router --host 0.0.0.0 --port 8001 > ../logs/ai-service.log 2>&1 &
cd ..
