use actix_web::{App, HttpServer};
use dotenv::dotenv;
use std::env;

mod db;
mod routes;
mod controllers;
//mod models;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let db_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    // 初始化数据库连接池
    let db_pool = db::init_pool(&db_url).await.expect("Failed to create pool");

    // 启动 Actix-Web 服务器
    HttpServer::new(move || {
        App::new()
            .app_data(db_pool.clone())
            .configure(routes::configure) // 加载路由
    })
    .bind(("0.0.0.0", port.parse::<u16>().unwrap()))?
    .run()
    .await
}


