FROM node:12

ENV SVC_ENV production
ENV SVC_PORT 8888
ENV SVC_DIR /srv/app
ENV NODE_MODULES_PATH=${SVC_DIR}/node_modules
ENV NODE_BIN=${NODE_MODULES_PATH}/.bin
ENV PATH="${SVC_DIR}:${NODE_BIN}:${PATH}"

RUN mkdir -p $SVC_DIR
WORKDIR $SVC_DIR

ENV BUILD_PACKAGES="git autoconf automake build-essential python-dev libssl-dev libtool"
ENV APP_PACKAGES="bash curl vim netcat tzdata apt-utils nodejs yarn ruby awscli"

RUN apt-get update -qq && \
    DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -q -y \
        $BUILD_PACKAGES \
        $APP_PACKAGES

COPY package.json yarn.lock $SVC_DIR/
RUN yarn install

COPY src public entrypoint.sh .env* $SVC_DIR/

# Specify the script to use when running the container
ENTRYPOINT ["entrypoint.sh"]
# Start the main app process by sending the "app" parameter to the entrypoint
CMD ["app"]

EXPOSE $SVC_PORT
