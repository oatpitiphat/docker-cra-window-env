console.log(process.env)
console.log(window._env_)
let env = null;
if (process.env.NODE_ENV === "production") {
    env = window._env_;
} else {
    env = process.env;
}

const config = {
    env: window._env_.NODE_ENV,
    url: {
        test: window._env_.REACT_APP_BASEURL_TEST
    }
};

export default config;