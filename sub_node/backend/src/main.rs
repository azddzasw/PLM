use actix_web::{App, HttpServer};

use dotenv::dotenv;
use actix_cors::Cors;
use std::env;
use log::info;

mod db;
mod routes;
mod models;
mod controllers;


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();  // 使用环境日志
    info!("Server is starting...");
    dotenv().ok();
    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let db_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    // 初始化数据库连接池
    let db_pool = db::init_pool(&db_url).await.expect("Failed to create pool");

    // 启动 Actix-Web 服务器
    HttpServer::new(move || {
        let cors = Cors::default()
        .allowed_origin("http://127.0.0.1:8080")
        .allow_any_header()
        .allow_any_method()
        .expose_any_header();

        App::new()
            .app_data(actix_web::web::Data::new(db_pool.clone()))
            .wrap(cors)
            .configure(routes::configure) // 加载路由
    })
    .bind(("0.0.0.0", port.parse::<u16>().unwrap()))?
    .run()
    .await
}


