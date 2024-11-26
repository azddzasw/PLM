use actix_web::{web, HttpResponse};
use serde::Deserialize;

#[derive(Deserialize)]
pub struct ComplianceRequest {
    region: String,
    formula: Vec<String>,
}

pub async fn validate_compliance(req: web::Json<ComplianceRequest>) -> HttpResponse {
    let is_compliant = req.formula.iter().all(|ingredient| {
        // 模拟法规验证逻辑
        ingredient != "restricted_chemical"
    });

    if is_compliant {
        HttpResponse::Ok().body("Formula is compliant")
    } else {
        HttpResponse::BadRequest().body("Formula contains restricted chemicals")
    }
}

