# Users API Spec

## Register Users

Endpoint : POST `/api/users`

Request Body:

```json
{
  "username": "daffamrizqi",
  "email": "daffa@mail.com",
  "name": "daffa m rizqi",
  "password": "secret"
}
```

Response Body (Success)

```json
{
  "data": {
    "username": "daffamrizqi",
    "name": "daffa m rizqi"
  }
}
```

Response Body (Failed)

```json
{
  "error": "error message"
}
```

## Login Users

Endpoint : POST `/api/users/login`

Request Body:

```json
{
  "username": "daffamrizqi",
  "password": "secret"
}
```

Response Body (Success)

```json
{
  "data": {
    "username": "daffamrizqi",
    "name": "daffa m rizqi",
    "token": "token1231133211332"
  }
}
```

Response Body (Failed)

```json
{
  "error": "Incorrect username or password"
}
```

## Get Users

Endpoint : Get `/api/users/`

Response Body (Success)

```json
{
  "username": "daffamrizqi",
  "password": "secret"
}
```

Response Body (Failed)

```json
{
  "error": "Incorrect username or password"
}
```

## Update Users

## Logout Users
