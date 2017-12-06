[![CircleCI](https://circleci.com/gh/efavre/random-pick/tree/master.svg?style=svg)](https://circleci.com/gh/efavre/random-pick/tree/master)

# random-pick
picks and returns a random value from a provided list


# Run locally:

```
npm install
npm test
npm start
```

# Run on docker

```
docker build -t $IMAGE_NAME .
docker run -p 3000:3000 -d $IMAGE_NAME
```

# Query

```
curl -d '["ape","monkey"]' -H "Content-type: application/json" http://localhost:3000/random-pick -v
```
