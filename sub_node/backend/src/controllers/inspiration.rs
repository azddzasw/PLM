use actix_web::{web, HttpResponse};
use sqlx::PgPool;
use uuid::Uuid;
use crate::models::inspiration::Inspiration;


pub async fn get_inspirations(pool: web::Data<PgPool>) -> HttpResponse {
    let result = sqlx::query_as!(
        Inspiration,
        "SELECT id, title, description FROM inspirations"
    )
    .fetch_all(pool.get_ref())
    .await;

    match result {
        Ok(rows) => HttpResponse::Ok().json(rows),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

pub async fn add_inspiration(
    pool: web::Data<PgPool>,
    inspiration: web::Json<Inspiration>,
) -> HttpResponse {
    let id = Uuid::new_v4();
    let result = sqlx::query!(
        "INSERT INTO inspirations (id, title, description) VALUES ($1, $2, $3)",
        id,
        inspiration.title,
        inspiration.description
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Created().finish(),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}
