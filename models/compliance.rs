use serde::{Deserialize, Serialize};

/// 用于法规验证的输入模型
#[derive(Debug, Serialize, Deserialize)]
pub struct ComplianceRequest {
    pub region: String,     // 地区（如 "EU", "US" 等）
    pub formula: Vec<String>, // 配方成分列表
}

/// 用于法规验证的响应模型
#[derive(Debug, Serialize, Deserialize)]
pub struct ComplianceResponse {
    pub is_compliant: bool,   // 配方是否合规
    pub restricted_ingredients: Vec<String>, // 不合规的成分
}
