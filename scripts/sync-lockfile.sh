#!/bin/sh
set -e

cd "$(dirname "$0")/.."

echo "Sincronizando package-lock.json com package.json (Node 22 Alpine)..."
docker run --rm -v "$(pwd)":/app -w /app node:22-alpine npm install

echo "Validando com npm ci..."
docker run --rm -v "$(pwd)":/app -w /app node:22-alpine npm ci

echo "package-lock.json sincronizado e validado."
