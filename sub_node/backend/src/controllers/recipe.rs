use actix_web::{web, HttpResponse};
use sqlx::PgPool;
use uuid::Uuid;
use crate::models::recipe::Recipe;


pub async fn get_recipes(pool: web::Data<PgPool>) -> HttpResponse {
    let result = sqlx::query_as!(
        Recipe, // 显式指定映射到 Recipe 结构体
        "SELECT id, name, version, cost FROM recipes"
    )
    .fetch_all(pool.get_ref())
    .await;

    match result {
        Ok(recipes) => HttpResponse::Ok().json(recipes),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}



pub async fn add_recipe(pool: web::Data<PgPool>, recipe: web::Json<Recipe>) -> HttpResponse {
    let id = Uuid::new_v4();
    
    // 执行数据库插入操作
    let result = sqlx::query!(
        "INSERT INTO recipes (id, name, version, cost) VALUES ($1, $2, $3, $4)",
        id,
        recipe.name,
        recipe.version,
        recipe.cost
    )
    .execute(pool.get_ref()) // 执行插入
    .await;

    match result {
        Ok(_) => HttpResponse::Created().json(id), // 成功时返回创建的 ID
        Err(_) => HttpResponse::InternalServerError().finish(), // 失败时返回 500 错误
    }
}


