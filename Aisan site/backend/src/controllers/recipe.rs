use actix_web::{web, HttpResponse};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use bigdecimal::BigDecimal;
//use tokio::time::sleep;

#[derive(serde::Serialize, serde::Deserialize)]
pub struct Recipe {
    name: String,
    version: Option<i32>,
    cost: Option<BigDecimal>,
}

pub async fn get_recipes(pool: web::Data<PgPool>) -> HttpResponse {
    let recipes = match sqlx::query_as!(
        Recipe, // 显式指定映射到 Recipe 结构体
        "SELECT name, version, cost FROM recipes"
    )
    .fetch_all(pool.get_ref())
    .await
    {
        Ok(rows) => rows,
        Err(_) => return HttpResponse::InternalServerError().finish(),
    };

    HttpResponse::Ok().json(recipes)
}



pub async fn add_recipe(pool: web::Data<PgPool>, recipe: web::Json<Recipe>) -> HttpResponse {
    sqlx::query!(
        "INSERT INTO recipes (name, version, cost) VALUES ($1, $2, $3)",
        recipe.name,
        recipe.version,
        recipe.cost
    )
    .execute(pool.get_ref())
    .await
    .unwrap();

    HttpResponse::Created().finish()
}

