use actix_web::{web, HttpResponse};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

#[derive(serde::Serialize, serde::Deserialize)]
pub struct Inspiration {
    pub id: i32,
    pub title: Option<String>,
    pub description: Option<String>,
}

pub async fn get_inspirations(pool: web::Data<PgPool>) -> HttpResponse {
    let inspirations = match sqlx::query_as!(
        Inspiration,
        "SELECT id, title, description FROM inspirations"
    )
    .fetch_all(pool.get_ref())
    .await
    {
        Ok(rows) => rows,
        Err(_) => return HttpResponse::InternalServerError().finish(),
    };

    HttpResponse::Ok().json(inspirations)
}

pub async fn add_inspiration(
    pool: web::Data<PgPool>,
    inspiration: web::Json<Inspiration>,
) -> HttpResponse {
    sqlx::query!(
        "INSERT INTO inspirations (title, description) VALUES ($1, $2)",
        inspiration.title,
        inspiration.description
    )
    .execute(pool.get_ref())
    .await
    .unwrap();

    HttpResponse::Created().finish()
}
