use actix_web::{web, HttpResponse};
use crate::models::compliance::ComplianceRequest;
use sqlx::PgPool;


pub async fn validate_compliance(
    pool: web::Data<PgPool>, 
    req: web::Json<ComplianceRequest>
) -> HttpResponse {
    // 查询数据库中的所有限制化学物质
    let restricted_chemicals = sqlx::query!(
        "SELECT name FROM restricted_chemicals"
    )
    .fetch_all(pool.get_ref())
    .await;

    // 错误处理：数据库查询失败
    if let Err(err) = restricted_chemicals {
        return HttpResponse::InternalServerError().body(format!("Database error: {}", err));
    }

    // 将查询结果转换为字符串列表
    let restricted_list: Vec<String> = restricted_chemicals
        .unwrap()
        .into_iter()
        .map(|record| record.name)
        .collect();

    // 检查配方是否包含限制物质
    let non_compliant: Vec<&String> = req
        .formula
        .iter()
        .filter(|ingredient| restricted_list.contains(&ingredient.to_string()))
        .collect();

    // 返回结果
    if non_compliant.is_empty() {
        HttpResponse::Ok().body("Formula is compliant")
    } else {
        HttpResponse::BadRequest().json(non_compliant) // 返回不合规的成分
    }
}
