#!/bin/bash
echo "Starting Backend Server..."
cd backend
echo "Installing dependencies..."
npm install
echo "Starting server..."
node server.js
