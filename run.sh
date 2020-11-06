#!/bin/bash
set -e

exec deno run --allow-net --allow-read index.tsx "$@"