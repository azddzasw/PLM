use actix_web::{HttpResponse, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct Product {
    name: String,
    price: u32,
}

pub async fn get_products() -> impl Responder {
    let products = vec![
        Product { name: "Product 1".to_string(), price: 100 },
        Product { name: "Product 2".to_string(), price: 200 },
    ];
    HttpResponse::Ok().json(products)
}


