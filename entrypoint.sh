#!/usr/bin/env bash

# fail fast
set -e

export NODE_ENV=$SVC_ENV

function setup_env {
  if [[ -z $AWS_DEFAULT_REGION ]]; then
    export AVAILABILITY_ZONE="$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone)"
    export AWS_DEFAULT_REGION="$(echo $AVAILABILITY_ZONE | sed -e 's/[a-z]$//')"
  fi
}
export -f setup_env

function app_init {
  # useful in dev
  if [[ "$SVC_ENV" == "development" ]]; then
    yarn install
  fi
}
export -f app_init

function start_app {
  echo "Starting app"
  echo "PORT=$SVC_PORT" > .env.local
  exec yarn start
}
export -f start_app

action=$1; shift
setup_env

case $action in

  app)
    app_init
    start_app
  ;;

  bash)
    if [ "$#" -eq 0 ]; then
      bash_args=( -il )
    else
      bash_args=( "$@" )
    fi
    exec bash "${bash_args[@]}"
  ;;

  exec)
    exec "$@"
  ;;

  # This entry is needed to support remote debugging from RubyMine. RubyMine runs a shell script command (i.e., `sh -c`),
  # but is generally expecting the entrypoint to another shell. Consequently, we need to intercept the "sh" invocation
  # (fortunately, they expect "sh" to just be on the PATH) and delegate to the actual "sh" shell to invoke the debugger
  # command.
  sh)
    exec sh "$@"
  ;;

  *)
    echo "Invalid action: $action"
    exit 1
  ;;

esac
