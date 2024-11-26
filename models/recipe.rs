use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// 数据库中 "recipes" 表的结构
#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
pub struct Recipe {
    pub id: Uuid,           // 每条配方的唯一标识符
    pub name: String,       // 配方名称
    pub version: i32,       // 配方版本
    pub cost: f32,          // 配方的成本价格
    pub created_at: chrono::NaiveDateTime, // 创建时间
}

/// 用于新增配方的模型
#[derive(Debug, Serialize, Deserialize)]
pub struct NewRecipe {
    pub name: String,       // 配方名称
    pub version: i32,       // 配方版本
    pub cost: f32,          // 配方成本
}
