# discordid-lookup

Simple discord id lookup api.

## Required Environment Variables

```
TOKEN=your-discord-bot-token
```

### Note:

```yaml
# ... Spacefile
public: true # set app to public
```

API is default to public, so make sure to secure your app url.

## API

- `GET /id/{discordId}`

  Will return a user object.

  ```json
  {
    "id": "475085200414605334",
    "username": "joshue?",
    "global_name": null,
    "display_name": null,
    "avatar": "3144b3c21c6969a51e702cdd8497ea2b",
    "avatar_decoration": null,
    "discriminator": "5745",
    "public_flags": 4194432,
    "banner": null,
    "banner_color": null,
    "accent_color": null
  }
  ```
