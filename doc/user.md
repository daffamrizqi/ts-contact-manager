# Users API Spec

## Register Users

**Endpoint** : POST `/api/users`

**Request Body** :

```json
{
  "username": "daffamrizqi",
  "email": "daffa@mail.com",
  "name": "daffa m rizqi",
  "password": "secret"
}
```

**Response Body** (Success) :

```json
{
  "message": "Success register user",
  "data": {
    "username": "daffamrizqi",
    "name": "daffa m rizqi"
  }
}
```

**Response Body** (Failed) :

```json
{
  "error": "error message"
}
```

## Login Users

**Endpoint** : POST `/api/users/login`

**Request Body**:

```json
{
  "username": "daffamrizqi",
  "password": "secret"
}
```

**Response Body** (Success) :

```json
{
  "message": "User logged in!",
  "data": {
    "username": "daffamrizqi",
    "name": "daffa m rizqi",
    "token": "token1231133211332" // UUID
  }
}
```

**Response Body** (Failed) :

```json
{
  "error": "Incorrect username or password"
}
```

## Get Users

**Endpoint** : Get `/api/users`

**To define whether a user has logged in or not**
**Request Header** :

- X-API-TOKEN : token (UUID)

**Response Body** (Success) :

```json
{
  "message": "",
  "data": {
    "username": "daffamrizqi",
    "password": "secret"
  }
}
```

**Response Body** (Failed) :

```json
{
  "error": "Incorrect username or password"
}
```

## Update Users

**Endpoint** : PATCH `/api/users`

**Request Header** :

- X-API-TOKEN : token (UUID)

**Request Body**:

```json
{
  "username": "daffamrizqi", // not required
  "password": "secret" // not required
}
```

**Response Body** (Success) :

```json
{
  "message": "User updated!",
  "data": {
    "username": "daffamrizqi",
    "name": "daffa m rizqi"
  }
}
```

**Response Body** (Failed) :

```json
{
  "error": "Failed to update user!"
}
```

## Logout Users

**Endpoint** : DELETE `/api/users/logout`

**Request Header** :

- X-API-TOKEN : token (UUID)

**Response Body** (Success) :

```json
{
  "message": "Logout success",
  "data": {}
}
```

**Response Body** (Failed) :

```json
{
  "error": "Failed to logout"
}
```
