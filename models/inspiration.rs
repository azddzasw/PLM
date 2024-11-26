use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// 数据库中 "inspirations" 表的结构
#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
pub struct Inspiration {
    pub id: Uuid,           // 每条灵感的唯一标识符
    pub title: String,      // 灵感标题
    pub description: String, // 灵感描述
    pub created_at: chrono::NaiveDateTime, // 创建时间
}

/// 用于新增灵感的模型
#[derive(Debug, Serialize, Deserialize)]
pub struct NewInspiration {
    pub title: String,      // 灵感标题
    pub description: String, // 灵感描述
}


