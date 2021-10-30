# Statuside

A Status Page built on Cloudflare Worker and Pages (Vue + Tailwind).  
Inspired by [Cachet](https://cachethq.io/), [Statusfy](https://github.com/juliomrqz/statusfy), and [Atlassian Statuspage](https://www.atlassian.com/software/statuspage).


⚠️ This is still work in progress, so there might be bugs and stuff missing.

## Setup
- Create a Pages project with Vue preset.
- Create a KV and Worker.
- Create an Environment Variable in the worker for `AUTH_SECRET` with a `<secret>` as value for authentication.
- Copy `worker/wrangler.toml.sample` to `worker/wrangler.toml` and add your `account_id`, `api_token`, and `kv_namespaces`.
- `wrangler build` and `wrangler publish`

## API Usage

### Update Systems:
`POST (header: Authorization: <secret>) /system`
```
[
    {
        "name": "Website",
        "level": 1
    },
    {
        "name": "API",
        "level": 3
    },
    {
        "name": "CDN",
        "level": 4
    }
]
```

### New Incident:
`POST (header: Authorization: <secret>) /incident/new`
```
{
    "name": "Incident Title",
    "open": true,
    "maintenance": false,
    "level": 5,
    "systems": ["api", "website"],
    "activities": [
        {
            "timestamp": "2021-10-28T14:59:02.999Z", 
            "status": "Investigating",
            "message": "Something."
        }
    ]
}
```

### Update Incident:
`POST (header: Authorization: <secret>) /incident/<YYYY-MM>/<id>`
```
{
    "name": "New Incident Title",
    "open": false,
    "maintenance": false,
    "level": 5,
    "systems": ["api", "website"],
    "activities": [
        {
            "timestamp": "2021-10-28T14:59:02.999Z",
            "status": "Investigating",
            "message": "Something."
        },
        {
            "timestamp": "2021-10-28T15:22:13.999Z",
            "status": "Resolved",
            "message": "Fixed it."
        }
    ],
    "date": "2021-10-30",
    "timestamp": 1635619333,
    "id": "kve5iqpyijjcl8qj1g"
}
```

## Contributing

Contributions are welcome 😄