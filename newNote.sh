curl -s -XPOST \
  -H 'content-type: application/json' http://localhost:3000/notes \
  -d "{\"title\":\"$1\", \"content\": \"$2\"}" | jq

