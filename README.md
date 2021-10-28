# Statusly

A Status Page built on Cloudflare Worker and Pages (Vue + Tailwind).  
Inspired by [Cachet](https://cachethq.io/), [Statusfy](https://github.com/juliomrqz/statusfy), and [Atlassian Statuspage](https://www.atlassian.com/software/statuspage).


⚠️ This is still work in progress, so there might be bugs and stuff missing.

## Setup
- Create a Pages project with Vue preset.
- Create a KV and Worker.
- Copy `worker/wrangler.toml.sample` to `worker/wrangler.toml` and add your _account_id_, _api_token_, and _kv_namespaces_.
- `wrangler build` and `wrangler publish`

## Contributing

Contributions are welcome 😄