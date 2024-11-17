use actix_web::{web, App, HttpServer};
mod handlers;
mod config;
mod sync;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let config = config::get_config();
    HttpServer::new(|| {
        App::new()
            .route("/products", web::get().to(handlers::get_products))
            .service(sync::sync_data)  
    })
    .bind((config.host.as_str(), config.port))?
    .run()
    .await
}
