#!/bin/bash
set -e
BUCKET="palais-fruit.tdweb.fr"

echo "📦 Build React..."
npm install && npm run build

echo "🪣 Création bucket..."
gsutil mb -l europe-west1 gs://$BUCKET/ 2>/dev/null || echo "Bucket déjà existant"

echo "🌐 Config site statique..."
gsutil web set -m index.html -e index.html gs://$BUCKET/

echo "🔓 Permissions publiques..."
gsutil iam ch allUsers:objectViewer,legacyBucketReader gs://$BUCKET/

echo "🚀 Upload..."
gsutil -m cp -r dist/** gs://$BUCKET/

echo "✅ En ligne : https://$BUCKET"