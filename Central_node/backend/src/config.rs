use std::env;

pub struct Config {
    pub host: String,
    pub port: u16,
}

pub fn get_config() -> Config {
    Config {
        host: env::var("HOST").unwrap_or_else(|_| "0.0.0.0".to_string()),
        port: env::var("PORT").unwrap_or_else(|_| "8080".to_string()).parse().unwrap(),
    }
}
