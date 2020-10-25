<div align="center">
<img src="https://github.com/fastify/graphics/raw/master/full-logo.png" width="650" height="auto"/>
</div>

<div align="center">

[![Build Status](https://travis-ci.org/fastify/fastify.svg?branch=master)](https://travis-ci.org/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/fastify)
</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is, fast and low overhead web framework for Node.js
* This package shows how fast it is comparatively.

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks
* __Machine:__ Linux fv-az16 5.4.0-1031-azure #32~18.04.1-Ubuntu SMP Tue Oct 6 10:03:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux | 2 vCPUs | 7GB.
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure).
* __Node:__ `v12.19.0`
* __Run:__ Sun Oct 25 05:47:26 UTC 2020

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 45298.4    | 2.10    | 8.08          |
| fastify                  | 3.7.0   | ✓      | 42932.8    | 2.23    | 7.66          |
| bare                     | 10.13.0 | ✗      | 41348.0    | 2.33    | 7.37          |
| nest-fastify             | 7.4.4   | ✓      | 40434.4    | 2.38    | 6.79          |
| micro                    | 9.3.4   | ✗      | 40373.6    | 2.38    | 7.20          |
| frourio                  | 0.18.1  | ✓      | 39383.2    | 2.44    | 7.02          |
| polka                    | 0.5.2   | ✓      | 37643.2    | 2.56    | 6.71          |
| rayo                     | 1.3.5   | ✓      | 37031.0    | 2.61    | 6.60          |
| connect                  | 3.7.0   | ✗      | 36313.0    | 2.66    | 6.48          |
| yeps                     | 1.1.1   | ✗      | 35976.2    | 2.68    | 6.42          |
| foxify                   | 0.10.20 | ✓      | 34639.4    | 2.79    | 5.68          |
| server-base              | 6.1.5   | ✗      | 33351.6    | 2.90    | 5.95          |
| micro-route              | 2.5.0   | ✓      | 33104.6    | 2.93    | 5.90          |
| connect-router           | 1.3.5   | ✓      | 31591.6    | 3.07    | 5.63          |
| server-base-router       | 6.1.5   | ✓      | 31498.4    | 3.08    | 5.62          |
| spirit                   | 0.6.1   | ✗      | 31438.2    | 2.68    | 5.61          |
| spirit-router            | 0.5.0   | ✓      | 31235.8    | 2.73    | 5.57          |
| trek-engine              | 1.0.5   | ✗      | 30576.8    | 3.18    | 5.02          |
| yeps-router              | 1.2.0   | ✓      | 30069.6    | 3.23    | 5.36          |
| trek-router              | 1.2.0   | ✓      | 29617.2    | 3.29    | 4.86          |
| koa                      | 2.13.0  | ✗      | 26821.6    | 3.64    | 4.78          |
| restify                  | 8.5.1   | ✓      | 26735.6    | 3.65    | 4.82          |
| vapr                     | 0.5.5   | ✓      | 26290.4    | 3.70    | 4.31          |
| koa-router               | 7.4.0   | ✓      | 25310.8    | 3.86    | 4.51          |
| total.js                 | 3.4.5   | ✓      | 24968.0    | 3.90    | 7.64          |
| microrouter              | 3.1.3   | ✓      | 19552.0    | 5.00    | 3.49          |
| hapi                     | 18.4.1  | ✓      | 19179.2    | 5.14    | 3.42          |
| egg.js                   | 2.29.1  | ✓      | 13966.4    | 7.08    | 4.91          |
| express                  | 4.17.1  | ✓      | 9119.8     | 10.82   | 1.63          |
| fastify-big-json         | 3.7.0   | ✓      | 9089.5     | 10.86   | 104.56        |
| frourio-express          | 0.18.1  | ✓      | 8473.0     | 11.65   | 1.51          |
| express-route-prefix     | 4.17.1  | ✓      | 7721.6     | 12.84   | 2.86          |
| nest                     | 7.4.4   | ✓      | 7521.9     | 13.16   | 1.71          |
| express-with-middlewares | 4.17.1  | ✓      | 7158.7     | 13.81   | 2.74          |
